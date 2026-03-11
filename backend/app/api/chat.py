"""Chat API endpoints"""
from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from app.models.request import ChatRequest
from app.models.response import ChatResponse

# Router will be initialized in main.py with dependencies
router = APIRouter(prefix="/api", tags=["chat"])


def create_chat_router(get_hybrid_service):
    """Create chat router with service getter function"""

    @router.post("/chat/stream")
    async def chat_stream(request: ChatRequest):
        """
        Streaming chat endpoint - SSE stream of answer tokens

        Returns Server-Sent Events:
          data: {"type": "token", "content": "..."}
          data: {"type": "sources", "sources": [...]}
          data: {"type": "done", "tokens_used": N, "cached": false}
        """
        try:
            hybrid_service = get_hybrid_service()
            if not hybrid_service:
                raise ValueError("Hybrid service not initialized")

            return StreamingResponse(
                hybrid_service.answer_stream(
                    question=request.question,
                    conversation_history=request.conversation_history
                ),
                media_type="text/event-stream",
                headers={
                    "Cache-Control": "no-cache",
                    "Connection": "keep-alive",
                    "X-Accel-Buffering": "no",
                }
            )
        except Exception as e:
            print(f"[ERROR] Error in chat stream endpoint: {type(e).__name__}: {str(e)}")
            raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

    @router.post("/chat", response_model=ChatResponse)
    async def chat(request: ChatRequest):
        """
        Chat endpoint - Answer user questions using hybrid RAG+MCP

        Args:
            request: Chat request with question and conversation history

        Returns:
            Answer with sources and metadata
        """
        try:
            print(f"[INFO] Received question: {request.question}")

            # Get current service instance
            hybrid_service = get_hybrid_service()
            print(f'[DEBUG] hybrid_service type: {type(hybrid_service)}, value: {hybrid_service}')

            if not hybrid_service:
                raise ValueError("Hybrid service not initialized")

            result = await hybrid_service.answer(
                question=request.question,
                conversation_history=request.conversation_history
            )

            print(f"[OK] Result: {result}")

            if not result:
                raise ValueError("Result is None")

            if "answer" not in result:
                raise ValueError(f"Result missing 'answer' key: {result}")

            return ChatResponse(**result)

        except Exception as e:
            print(f"[ERROR] Error in chat endpoint: {type(e).__name__}: {str(e)}")
            import traceback
            traceback.print_exc()
            raise HTTPException(
                status_code=500,
                detail=f"Error generating answer: {str(e)}"
            )

    return router
