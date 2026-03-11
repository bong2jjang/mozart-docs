"""Hybrid RAG + MCP Service - Core chatbot logic"""
from typing import AsyncGenerator, Dict, List, Optional
import asyncio
import json
import queue
import threading
from openai import OpenAI
import anthropic

from app.config import Config
from app.services.vector_service import VectorService
from app.services.cache_service import CacheService
from app.mcp.filesystem_server import MCPFilesystemServer
from app.models.response import SourceDocument


class HybridRAGMCP:
    """
    Hybrid RAG + MCP Pipeline

    Workflow:
    1. Check cache
    2. RAG: Vector search to filter relevant files
    3. MCP: Read only relevant files
    4. LLM: Generate answer with minimal context
    5. Cache result
    """

    def __init__(
        self,
        config: Config,
        vector_service: VectorService,
        cache_service: CacheService,
        mcp_server: MCPFilesystemServer
    ):
        self.config = config
        self.vector_service = vector_service
        self.cache_service = cache_service
        self.mcp_server = mcp_server

        # Initialize LLM client
        if config.llm.provider == "openai":
            self.llm_client = OpenAI()
        elif config.llm.provider == "anthropic":
            self.llm_client = anthropic.Anthropic()
        else:
            raise ValueError(f"Unsupported LLM provider: {config.llm.provider}")

    async def answer(self, question: str, conversation_history: List[Dict] = None) -> Dict:
        """
        Generate answer using hybrid RAG+MCP pipeline

        Args:
            question: User question
            conversation_history: Previous conversation

        Returns:
            Answer with sources and metadata
        """
        # Step 1: Check cache
        cached = self.cache_service.get_with_metadata(question)
        if cached:
            return {
                "answer": cached["answer"],
                "sources": self._format_sources(cached.get("sources", [])),
                "cached": True,
                "tokens_used": 0
            }

        # Step 2: RAG - Vector search to filter relevant files
        top_k = self._determine_top_k(question)
        file_paths = self.vector_service.get_file_paths_from_query(question, top_k=top_k)

        if not file_paths:
            # No relevant documents found
            return {
                "answer": "죄송합니다. 질문과 관련된 문서를 찾을 수 없습니다. 다른 키워드로 질문해 주시겠어요?",
                "sources": [],
                "cached": False,
                "tokens_used": 0
            }

        # Step 3: MCP - Read only filtered files
        documents = []
        for path in file_paths:
            try:
                # Convert absolute path to relative path for MCP server
                relative_path = self._convert_to_relative_path(path)
                content = self.mcp_server.read_file(relative_path)
                documents.append({
                    "path": path,  # Keep original path for URL generation
                    "content": content[:3000]  # Limit to 3000 chars to save tokens
                })
            except Exception as e:
                print(f"Failed to read {path}: {e}")
                continue

        if not documents:
            return {
                "answer": "문서를 읽는 중 오류가 발생했습니다. 다시 시도해 주세요.",
                "sources": [],
                "cached": False,
                "tokens_used": 0
            }

        # Step 4: LLM - Generate answer
        result = await self._generate_answer(question, documents, conversation_history)

        # Step 5: Filter sources if LLM indicates no relevant info found
        if self._is_no_answer(result["answer"]):
            result["sources"] = []

        # Step 6: Cache result
        self.cache_service.set(
            question,
            result["answer"],
            sources=[{"file": doc["path"]} for doc in documents] if result["sources"] else []
        )

        return result

    async def answer_stream(self, question: str, conversation_history: List[Dict] = None) -> AsyncGenerator[str, None]:
        """
        Generate answer using hybrid RAG+MCP pipeline with SSE streaming

        Yields SSE-formatted events:
          data: {"type": "token", "content": "..."}
          data: {"type": "sources", "sources": [...]}
          data: {"type": "done", "tokens_used": N, "cached": false}
        """
        def _status(msg: str) -> str:
            return f"data: {json.dumps({'type': 'status', 'content': msg}, ensure_ascii=False)}\n\n"

        # Step 1: Check cache
        yield _status("캐시 확인 중...")
        cached = self.cache_service.get_with_metadata(question)
        if cached:
            sources = self._format_sources(cached.get("sources", []))
            yield f"data: {json.dumps({'type': 'token', 'content': cached['answer']}, ensure_ascii=False)}\n\n"
            yield f"data: {json.dumps({'type': 'sources', 'sources': [s.model_dump() for s in sources]}, ensure_ascii=False)}\n\n"
            yield f"data: {json.dumps({'type': 'done', 'tokens_used': 0, 'cached': True}, ensure_ascii=False)}\n\n"
            return

        # Step 2: RAG - Vector search
        yield _status("관련 문서 검색 중...")
        top_k = self._determine_top_k(question)
        file_paths = self.vector_service.get_file_paths_from_query(question, top_k=top_k)

        if not file_paths:
            msg = "죄송합니다. 질문과 관련된 문서를 찾을 수 없습니다. 다른 키워드로 질문해 주시겠어요?"
            yield f"data: {json.dumps({'type': 'token', 'content': msg}, ensure_ascii=False)}\n\n"
            yield f"data: {json.dumps({'type': 'done', 'tokens_used': 0, 'cached': False}, ensure_ascii=False)}\n\n"
            return

        # Step 3: MCP - Read files
        yield _status(f"{len(file_paths)}개 문서 분석 중...")
        documents = []
        for path in file_paths:
            try:
                relative_path = self._convert_to_relative_path(path)
                content = self.mcp_server.read_file(relative_path)
                documents.append({"path": path, "content": content[:3000]})
            except Exception as e:
                print(f"Failed to read {path}: {e}")
                continue

        if not documents:
            msg = "문서를 읽는 중 오류가 발생했습니다. 다시 시도해 주세요."
            yield f"data: {json.dumps({'type': 'token', 'content': msg}, ensure_ascii=False)}\n\n"
            yield f"data: {json.dumps({'type': 'done', 'tokens_used': 0, 'cached': False}, ensure_ascii=False)}\n\n"
            return

        # Step 4: LLM - Stream answer (tokens are buffered and flushed in chunks)
        yield _status("답변 생성 중...")
        full_answer = ""
        tokens_used = 0
        token_buffer = ""
        FLUSH_CHARS = ("\n", ".", "!", "?", ":", ";", "```")
        BUFFER_LIMIT = 30  # flush when buffer reaches this many chars

        def _flush_sse(text: str) -> str:
            return f"data: {json.dumps({'type': 'token', 'content': text}, ensure_ascii=False)}\n\n"

        if self.config.llm.provider == "openai":
            stream_gen = self._stream_with_openai(question, documents, conversation_history)
        elif self.config.llm.provider == "anthropic":
            stream_gen = self._stream_with_claude(question, documents, conversation_history)
        else:
            stream_gen = None

        if stream_gen:
            async for chunk_data in stream_gen:
                if chunk_data["type"] == "token":
                    token_buffer += chunk_data["content"]
                    full_answer += chunk_data["content"]
                    # Flush on natural break points or buffer size limit
                    if len(token_buffer) >= BUFFER_LIMIT or any(token_buffer.endswith(c) for c in FLUSH_CHARS):
                        yield _flush_sse(token_buffer)
                        token_buffer = ""
                elif chunk_data["type"] == "usage":
                    tokens_used = chunk_data["tokens_used"]
            # Flush remaining buffer
            if token_buffer:
                yield _flush_sse(token_buffer)
                token_buffer = ""

        # Step 5: Send sources
        sources = self._format_sources(documents)
        if self._is_no_answer(full_answer):
            sources = []
        yield f"data: {json.dumps({'type': 'sources', 'sources': [s.model_dump() for s in sources]}, ensure_ascii=False)}\n\n"

        # Step 6: Cache result
        self.cache_service.set(
            question,
            full_answer,
            sources=[{"file": doc["path"]} for doc in documents] if sources else []
        )

        yield f"data: {json.dumps({'type': 'done', 'tokens_used': tokens_used, 'cached': False}, ensure_ascii=False)}\n\n"

    async def _stream_with_openai(
        self, question: str, documents: List[Dict], conversation_history: List[Dict] = None
    ) -> AsyncGenerator[Dict, None]:
        """Stream answer from OpenAI using thread to avoid blocking event loop"""
        context = self._build_context(documents)
        messages = [{"role": "system", "content": self._get_system_prompt()}]
        if conversation_history:
            messages.extend(conversation_history)
        messages.append({
            "role": "user",
            "content": f"아래 문서들을 참고하여 질문에 답변해주세요.\n\n질문: {question}\n\n참고 문서:\n{context}"
        })

        q: queue.Queue = queue.Queue()

        def _run():
            try:
                stream = self.llm_client.chat.completions.create(
                    model=self.config.llm.model,
                    messages=messages,
                    temperature=self.config.llm.temperature,
                    max_tokens=self.config.llm.max_tokens,
                    stream=True,
                    stream_options={"include_usage": True}
                )
                for chunk in stream:
                    if chunk.choices and chunk.choices[0].delta.content:
                        q.put({"type": "token", "content": chunk.choices[0].delta.content})
                    if hasattr(chunk, 'usage') and chunk.usage:
                        q.put({"type": "usage", "tokens_used": chunk.usage.total_tokens})
            except Exception as e:
                print(f"OpenAI streaming error: {e}")
                q.put({"type": "token", "content": f"답변 생성 중 오류가 발생했습니다.\n오류 내용: {str(e)}"})
            finally:
                q.put(None)  # Sentinel

        thread = threading.Thread(target=_run, daemon=True)
        thread.start()

        loop = asyncio.get_event_loop()
        while True:
            item = await loop.run_in_executor(None, q.get)
            if item is None:
                break
            yield item

    async def _stream_with_claude(
        self, question: str, documents: List[Dict], conversation_history: List[Dict] = None
    ) -> AsyncGenerator[Dict, None]:
        """Stream answer from Claude using thread to avoid blocking event loop"""
        context = self._build_context(documents)
        messages = list(conversation_history or [])
        messages.append({
            "role": "user",
            "content": f"아래 문서들을 참고하여 질문에 답변해주세요.\n\n질문: {question}\n\n참고 문서:\n{context}"
        })

        q: queue.Queue = queue.Queue()

        def _run():
            try:
                with self.llm_client.messages.stream(
                    model=self.config.llm.model,
                    max_tokens=self.config.llm.max_tokens,
                    temperature=self.config.llm.temperature,
                    system=self._get_system_prompt(),
                    messages=messages
                ) as stream:
                    for text in stream.text_stream:
                        q.put({"type": "token", "content": text})
                    response = stream.get_final_message()
                    tokens_used = response.usage.input_tokens + response.usage.output_tokens
                    q.put({"type": "usage", "tokens_used": tokens_used})
            except Exception as e:
                print(f"Claude streaming error: {e}")
                q.put({"type": "token", "content": f"답변 생성 중 오류가 발생했습니다.\n오류 내용: {str(e)}"})
            finally:
                q.put(None)  # Sentinel

        thread = threading.Thread(target=_run, daemon=True)
        thread.start()

        loop = asyncio.get_event_loop()
        while True:
            item = await loop.run_in_executor(None, q.get)
            if item is None:
                break
            yield item

    def _convert_to_relative_path(self, path: str) -> str:
        r"""
        Convert absolute/full path to relative path for MCP server

        Examples:
            D:\Github\mozart-docs\docs\docs\aps\README.md -> aps/README.md
            /app/docs/aps/README.md -> aps/README.md
            docs/aps/README.md -> aps/README.md
        """
        # Normalize path separators
        path = path.replace("\\", "/")

        # Remove common prefixes
        prefixes_to_remove = [
            "D:/Github/mozart-docs/docs/docs/",
            "/app/docs/",
            "docs/docs/",
            "docs/",
        ]

        for prefix in prefixes_to_remove:
            if path.startswith(prefix):
                return path[len(prefix):]

        # If path contains "docs/", extract everything after the last "docs/"
        if "/docs/" in path:
            parts = path.split("/docs/")
            return parts[-1]

        # Return as-is if no known prefix found
        return path

    def _determine_top_k(self, question: str) -> int:
        """Determine number of documents to retrieve based on question complexity"""
        word_count = len(question.split())

        if word_count < 5:
            return self.config.rag.top_k_simple
        elif word_count < 15:
            return self.config.rag.top_k_moderate
        else:
            return self.config.rag.top_k_complex

    async def _generate_answer(
        self,
        question: str,
        documents: List[Dict],
        conversation_history: List[Dict] = None
    ) -> Dict:
        """Generate answer using LLM"""

        if self.config.llm.provider == "openai":
            return await self._generate_with_openai(question, documents, conversation_history)
        elif self.config.llm.provider == "anthropic":
            return await self._generate_with_claude(question, documents, conversation_history)
        else:
            return {
                "answer": "지원하지 않는 LLM 제공자입니다.",
                "sources": [],
                "cached": False,
                "tokens_used": 0
            }

    async def _generate_with_openai(
        self,
        question: str,
        documents: List[Dict],
        conversation_history: List[Dict] = None
    ) -> Dict:
        """Generate answer using OpenAI"""

        # Build context from documents
        context = self._build_context(documents)

        # Build messages
        messages = [
            {
                "role": "system",
                "content": self._get_system_prompt()
            }
        ]

        # Add conversation history if exists
        if conversation_history:
            messages.extend(conversation_history)

        # Add current question with context
        messages.append({
            "role": "user",
            "content": f"""아래 문서들을 참고하여 질문에 답변해주세요.

질문: {question}

참고 문서:
{context}"""
        })

        # Call OpenAI
        try:
            response = self.llm_client.chat.completions.create(
                model=self.config.llm.model,
                messages=messages,
                temperature=self.config.llm.temperature,
                max_tokens=self.config.llm.max_tokens
            )

            answer = response.choices[0].message.content
            tokens_used = response.usage.total_tokens

            return {
                "answer": answer,
                "sources": self._format_sources(documents),
                "cached": False,
                "tokens_used": tokens_used
            }

        except Exception as e:
            print(f"OpenAI API error: {e}")
            return {
                "answer": f"답변 생성 중 오류가 발생했습니다. API 키를 확인해주세요.\n오류 내용: {str(e)}",
                "sources": [],
                "cached": False,
                "tokens_used": 0
            }

    async def _generate_with_claude(
        self,
        question: str,
        documents: List[Dict],
        conversation_history: List[Dict] = None
    ) -> Dict:
        """Generate answer using Claude"""

        context = self._build_context(documents)

        # Build messages for Claude
        messages = conversation_history or []
        messages.append({
            "role": "user",
            "content": f"""아래 문서들을 참고하여 질문에 답변해주세요.

질문: {question}

참고 문서:
{context}"""
        })

        try:
            response = self.llm_client.messages.create(
                model=self.config.llm.model,
                max_tokens=self.config.llm.max_tokens,
                temperature=self.config.llm.temperature,
                system=self._get_system_prompt(),
                messages=messages
            )

            answer = response.content[0].text
            tokens_used = response.usage.input_tokens + response.usage.output_tokens

            return {
                "answer": answer,
                "sources": self._format_sources(documents),
                "cached": False,
                "tokens_used": tokens_used
            }

        except Exception as e:
            print(f"Claude API error: {e}")
            return {
                "answer": f"답변 생성 중 오류가 발생했습니다. API 키를 확인해주세요.\n오류 내용: {str(e)}",
                "sources": [],
                "cached": False,
                "tokens_used": 0
            }

    def _build_context(self, documents: List[Dict]) -> str:
        """Build context string from documents"""
        context_parts = []

        for i, doc in enumerate(documents, 1):
            context_parts.append(
                f"[문서 {i}: {doc['path']}]\n{doc['content']}\n"
            )

        return "\n---\n".join(context_parts)

    def _format_sources(self, documents: List[Dict]) -> List[SourceDocument]:
        """Format documents as source references"""
        sources = []

        for doc in documents:
            path = doc.get("path") or doc.get("file", "")
            content = doc.get("content", "")

            # Convert file path to docs site URL
            url = self._convert_path_to_url(path)

            # Extract title from URL instead of path for cleaner display
            title = self._extract_title_from_url(url)

            sources.append(SourceDocument(
                file=url,
                title=title,
                content_preview=content[:200] if content else "",
                relevance_score=doc.get("score")
            ))

        return sources

    def _convert_path_to_url(self, path: str) -> str:
        """Convert file path to docs site URL"""
        if not path:
            return ""

        # First convert to relative path (handles both Windows and Docker paths)
        relative_path = self._convert_to_relative_path(path)

        # Remove file extension
        relative_path = relative_path.replace(".md", "").replace(".mdx", "")

        # Remove README from the end (README.md -> just the folder)
        if relative_path.endswith("/README"):
            relative_path = relative_path[:-7]  # Remove /README
        elif relative_path == "README":
            relative_path = ""

        # URL encode each path segment (handles spaces, Korean characters, etc.)
        from urllib.parse import quote
        if relative_path:
            path_segments = relative_path.split("/")
            encoded_segments = [quote(segment) for segment in path_segments]
            relative_path = "/".join(encoded_segments)

        # Return relative path only (frontend will resolve with its own origin)
        if relative_path:
            return f"/{relative_path}"
        else:
            return "/"

    def _extract_title_from_url(self, url: str) -> str:
        """Extract clean title from documentation URL"""
        if not url or url == "/":
            return "Home"

        # Remove leading slash
        path = url.lstrip("/")

        # URL decode the path to convert %20 back to spaces
        from urllib.parse import unquote
        path = unquote(path)

        # Split path into segments and capitalize each
        segments = path.split("/")
        formatted_segments = []

        for segment in segments:
            # Replace hyphens and underscores with spaces, then capitalize
            words = segment.replace("-", " ").replace("_", " ").split()
            formatted_segment = " ".join(word.capitalize() for word in words)
            formatted_segments.append(formatted_segment)

        # Join with breadcrumb separator
        return " / ".join(formatted_segments)

    def _extract_title(self, path: str) -> str:
        """Extract title from file path (legacy method)"""
        if not path:
            return "Unknown"

        # Normalize path separators
        path = path.replace("\\", "/")

        # Extract filename without extension
        filename = path.split("/")[-1].replace(".md", "").replace(".mdx", "")

        # Capitalize words
        return " ".join(word.capitalize() for word in filename.split("-"))

    def _is_no_answer(self, answer: str) -> bool:
        """Check if the LLM answer indicates it couldn't find relevant information"""
        no_answer_phrases = [
            "찾을 수 없습니다",
            "찾을 수 없었습니다",
            "관련된 문서를 찾을 수 없",
            "해당 정보를 찾을 수 없",
            "문서에서 찾을 수 없",
            "관련 정보가 없",
            "정보를 제공할 수 없",
            "문서에 포함되어 있지 않",
            "다루고 있지 않",
            "제공된 문서들에서 찾을 수 없",
        ]
        return any(phrase in answer for phrase in no_answer_phrases)

    def _get_system_prompt(self) -> str:
        """Get system prompt for LLM"""
        return """당신은 Mozart 문서의 전문 도우미입니다. 사용자의 질문에 친절하고 정확하게 답변해주세요.

답변 가이드라인:
1. 제공된 문서 내용을 기반으로 정확하게 답변하세요
2. 문서에 없는 내용은 추측하지 말고, "문서에서 해당 정보를 찾을 수 없습니다"라고 알려주세요
3. 답변은 명확하고 이해하기 쉽게 구조화하세요
4. 필요한 경우 예시나 코드를 포함하세요
5. 한국어로 답변하되, 기술 용어는 영문을 병기하세요
6. 친절하고 전문적인 톤을 유지하세요"""
