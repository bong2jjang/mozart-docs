"""Response models"""
from pydantic import BaseModel, Field
from typing import List, Optional


class SourceDocument(BaseModel):
    file: str = Field(..., description="File path")
    title: Optional[str] = Field(None, description="Document title")
    content_preview: str = Field(..., description="Content preview")
    relevance_score: Optional[float] = Field(None, description="Relevance score")


class ChatResponse(BaseModel):
    answer: str = Field(..., description="Answer to the question")
    sources: List[SourceDocument] = Field(default=[], description="Source documents")
    cached: bool = Field(default=False, description="Whether answer was cached")
    tokens_used: Optional[int] = Field(None, description="Number of tokens used")

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "answer": "Mozart의 hooks는...",
                    "sources": [
                        {
                            "file": "aps/architecture/hooks - 2.md",
                            "title": "Hooks",
                            "content_preview": "Hooks는 특정 시점에...",
                            "relevance_score": 0.95
                        }
                    ],
                    "cached": False,
                    "tokens_used": 1500
                }
            ]
        }
    }


class HealthResponse(BaseModel):
    status: str = Field(..., description="Service status")
    version: str = Field(..., description="API version")
    components: dict = Field(default={}, description="Component statuses")
