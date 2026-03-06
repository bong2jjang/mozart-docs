"""Vector Store Service for document search"""
from typing import List, Dict, Any, Optional
from pathlib import Path

from langchain_openai import OpenAIEmbeddings
from langchain_qdrant import QdrantVectorStore
from langchain_core.documents import Document
from qdrant_client import QdrantClient

from app.config import Config


class VectorService:
    """
    Vector Store Service
    Handles vector search for document retrieval
    """

    def __init__(self, config: Config):
        self.config = config
        self.embeddings = self._init_embeddings()
        self.client = self._init_client()
        self.vectorstore: Optional[QdrantVectorStore] = None

    def _init_embeddings(self) -> OpenAIEmbeddings:
        """Initialize embedding model"""
        return OpenAIEmbeddings(
            model=self.config.embedding.model
        )

    def _init_client(self) -> QdrantClient:
        """Initialize Qdrant client"""
        return QdrantClient(
            url=self.config.vector_store.qdrant.url,
            api_key=self.config.vector_store.qdrant.api_key
        )

    def initialize_vectorstore(self):
        """Initialize vector store (connects to existing collection)"""
        try:
            self.vectorstore = QdrantVectorStore(
                client=self.client,
                collection_name=self.config.vector_store.collection_name,
                embedding=self.embeddings
            )
            return True
        except Exception as e:
            print(f"Warning: Could not initialize vectorstore: {e}")
            return False

    def search_similar_documents(
        self,
        query: str,
        k: int = 5,
        score_threshold: Optional[float] = None
    ) -> List[Document]:
        """
        Search for similar documents

        Args:
            query: Search query
            k: Number of results to return
            score_threshold: Minimum relevance score

        Returns:
            List of relevant documents with metadata
        """
        if not self.vectorstore:
            print("[WARNING]  Vectorstore is None")
            return []

        try:
            print(f"[SEARCH] Searching for: {query} (k={k}, threshold={score_threshold})")
            if score_threshold:
                docs = self.vectorstore.similarity_search_with_score(
                    query,
                    k=k
                )
                print(f"   Found {len(docs)} documents with scores")
                # Filter by threshold
                filtered = [
                    doc for doc, score in docs
                    if score >= score_threshold
                ]
                print(f"   After threshold filter: {len(filtered)} documents")
                return filtered
            else:
                results = self.vectorstore.similarity_search(query, k=k)
                print(f"   Found {len(results)} documents")
                return results

        except Exception as e:
            print(f"[ERROR] Search error: {e}")
            import traceback
            traceback.print_exc()
            return []

    def get_file_paths_from_query(
        self,
        query: str,
        top_k: int = 5
    ) -> List[str]:
        """
        Get relevant file paths for a query

        Args:
            query: User question
            top_k: Number of documents to retrieve

        Returns:
            List of file paths (relative)
        """
        docs = self.search_similar_documents(
            query,
            k=top_k,
            score_threshold=self.config.rag.score_threshold
        )

        # Extract unique file paths
        file_paths = []
        seen = set()

        for doc in docs:
            source = doc.metadata.get("source", "")
            if source and source not in seen:
                file_paths.append(source)
                seen.add(source)

        return file_paths

    def is_collection_exists(self) -> bool:
        """Check if collection exists"""
        try:
            collections = self.client.get_collections()
            return any(
                col.name == self.config.vector_store.collection_name
                for col in collections.collections
            )
        except Exception:
            return False

    def get_collection_info(self) -> Dict[str, Any]:
        """Get collection information"""
        if not self.is_collection_exists():
            return {"exists": False}

        try:
            info = self.client.get_collection(
                self.config.vector_store.collection_name
            )
            # Qdrant API changed - access counts differently
            return {
                "exists": True,
                "points_count": getattr(info, 'points_count', getattr(info, 'vectors_count', 'unknown')),
                "status": getattr(info, 'status', 'unknown')
            }
        except Exception as e:
            return {"exists": True, "error": str(e)}
