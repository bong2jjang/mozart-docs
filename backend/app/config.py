"""Configuration management"""
import os
import yaml
from pathlib import Path
from pydantic import BaseModel
from dotenv import load_dotenv
from typing import List

# Load environment variables
load_dotenv()


class LLMConfig(BaseModel):
    provider: str
    model: str
    temperature: float
    max_tokens: int


class EmbeddingConfig(BaseModel):
    provider: str
    model: str


class QdrantConfig(BaseModel):
    url: str
    api_key: str | None = None


class VectorStoreConfig(BaseModel):
    provider: str
    collection_name: str
    qdrant: QdrantConfig


class RAGConfig(BaseModel):
    chunk_size: int
    chunk_overlap: int
    top_k_simple: int
    top_k_moderate: int
    top_k_complex: int
    score_threshold: float


class CacheConfig(BaseModel):
    redis_url: str
    ttl: int
    semantic_threshold: float


class DocumentsConfig(BaseModel):
    path: str
    extensions: List[str]
    exclude_patterns: List[str]


class ServerConfig(BaseModel):
    host: str
    port: int
    cors_origins: List[str]


class Config(BaseModel):
    llm: LLMConfig
    embedding: EmbeddingConfig
    vector_store: VectorStoreConfig
    rag: RAGConfig
    cache: CacheConfig
    documents: DocumentsConfig
    server: ServerConfig


def load_config() -> Config:
    """Load configuration from YAML file with environment variable substitution"""
    config_path = Path(__file__).parent.parent / "config" / "config.yaml"

    with open(config_path, 'r', encoding='utf-8') as f:
        config_data = yaml.safe_load(f)

    # Substitute environment variables
    config_str = yaml.dump(config_data)
    for env_var in os.environ:
        config_str = config_str.replace(f"${{{env_var}}}", os.environ[env_var])

    config_data = yaml.safe_load(config_str)

    return Config(**config_data)


# Global config instance
config = load_config()
