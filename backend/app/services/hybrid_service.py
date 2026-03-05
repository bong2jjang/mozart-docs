"""Hybrid RAG + MCP Service - Core chatbot logic"""
from typing import Dict, List, Optional
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
                "answer": "죄송합니다. 관련된 문서를 찾을 수 없습니다. 다른 질문을 해주세요.",
                "sources": [],
                "cached": False,
                "tokens_used": 0
            }

        # Step 3: MCP - Read only filtered files
        documents = []
        for path in file_paths:
            try:
                content = self.mcp_server.read_file(path)
                documents.append({
                    "path": path,
                    "content": content[:3000]  # Limit to 3000 chars to save tokens
                })
            except Exception as e:
                print(f"Failed to read {path}: {e}")
                continue

        if not documents:
            return {
                "answer": "죄송합니다. 문서를 읽는 중 오류가 발생했습니다.",
                "sources": [],
                "cached": False,
                "tokens_used": 0
            }

        # Step 4: LLM - Generate answer
        result = await self._generate_answer(question, documents, conversation_history)

        # Step 5: Cache result
        self.cache_service.set(
            question,
            result["answer"],
            sources=[{"file": doc["path"]} for doc in documents]
        )

        return result

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
                "answer": "지원되지 않는 LLM 제공자입니다.",
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
            "content": f"""다음 문서를 참고하여 질문에 답변해주세요.

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
                "answer": f"죄송합니다. 답변 생성 중 오류가 발생했습니다: {str(e)}",
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
            "content": f"""다음 문서를 참고하여 질문에 답변해주세요.

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
                "answer": f"죄송합니다. 답변 생성 중 오류가 발생했습니다: {str(e)}",
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

        # Get docs base path from config
        docs_base = self.config.documents.path.replace("\\", "/")

        # Convert Windows path to forward slashes
        path = path.replace("\\", "/")

        # Remove base docs path
        if docs_base in path:
            relative_path = path.replace(docs_base, "").lstrip("/")
        else:
            # Fallback: just use the path as-is
            relative_path = path

        # Remove file extension
        relative_path = relative_path.replace(".md", "").replace(".mdx", "")

        # Remove README from the end (README.md -> just the folder)
        if relative_path.endswith("/README"):
            relative_path = relative_path[:-7]  # Remove /README
        elif relative_path == "README":
            relative_path = ""

        # URL encode each path segment (handles spaces as %20, etc.)
        from urllib.parse import quote
        path_segments = relative_path.split("/")
        encoded_segments = [quote(segment) for segment in path_segments]
        relative_path = "/".join(encoded_segments)

        # Build full URL - use localhost for dev, can be configured for production
        base_url = "http://localhost:3000/docs"

        if relative_path:
            return f"{base_url}/{relative_path}"
        else:
            return base_url

    def _extract_title_from_url(self, url: str) -> str:
        """Extract clean title from documentation URL"""
        if not url or url == "http://localhost:3000/docs":
            return "Home"

        # Remove base URL
        path = url.replace("http://localhost:3000/docs/", "")

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

    def _get_system_prompt(self) -> str:
        """Get system prompt for LLM"""
        return """당신은 Mozart 프레임워크 문서 전문가입니다.

답변 시 주의사항:
1. 제공된 문서의 내용만을 바탕으로 정확하게 답변하세요
2. 문서에 없는 내용은 추측하지 말고, "문서에서 해당 정보를 찾을 수 없습니다"라고 답변하세요
3. 코드 예제가 있다면 마크다운 코드 블록으로 표시하세요
4. 명확하고 친절한 한국어로 답변하세요
5. 필요한 경우 단계별로 설명하세요
6. 가능한 간결하면서도 충분한 정보를 제공하세요"""
