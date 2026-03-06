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
                    "question": "Mozart[INFO] hooks[INFO] [INFO] [INFO]",
                    "conversation_history": []
                }
            ]
        }
    }
