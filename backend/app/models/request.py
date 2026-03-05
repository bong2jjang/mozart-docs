"""Request models"""
from pydantic import BaseModel, Field
from typing import List, Dict, Optional


class ChatRequest(BaseModel):
    question: str = Field(..., min_length=1, max_length=1000, description="User question")
    conversation_history: Optional[List[Dict[str, str]]] = Field(
        default=[],
        description="Previous conversation history"
    )

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "question": "Mozart의 hooks에 대해 알려주세요",
                    "conversation_history": []
                }
            ]
        }
    }
