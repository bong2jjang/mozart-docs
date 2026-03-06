"""FastAPI Main Application"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app import __version__
from app.config import config
from app.mcp.filesystem_server import MCPFilesystemServer
from app.services.vector_service import VectorService
from app.services.cache_service import CacheService
from app.services.hybrid_service import HybridRAGMCP
from app.api.chat import create_chat_router
from app.models.response import HealthResponse


# Global service instances
vector_service: VectorService = None
cache_service: CacheService = None
mcp_server: MCPFilesystemServer = None
hybrid_service: HybridRAGMCP = None


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan - initialize services on startup"""
    global vector_service, cache_service, mcp_server, hybrid_service

    print("[START] Starting Mozart Docs Chatbot Backend...")

    # Initialize services
    try:
        # Vector service
        print("[VECTOR] Initializing vector service...")
        vector_service = VectorService(config)
        vector_service.initialize_vectorstore()

        # Cache service
        print("[CACHE] Initializing cache service...")
        cache_service = CacheService(config)

        # MCP server
        print("[MCP] Initializing MCP filesystem server...")
        mcp_server = MCPFilesystemServer(config.documents.path)

        # Hybrid service
        print("[HYBRID] Initializing hybrid RAG+MCP service...")
        hybrid_service = HybridRAGMCP(
            config,
            vector_service,
            cache_service,
            mcp_server
        )

        print("[OK] All services initialized successfully!")

    except Exception as e:
        print(f"[ERROR] Initialization error: {e}")
        raise

    yield

    # Cleanup
    print("[SHUTDOWN] Shutting down...")


# Create FastAPI app
app = FastAPI(
    title="Mozart Docs Chatbot API",
    description="Hybrid RAG + MCP powered documentation chatbot",
    version=__version__,
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=config.server.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Health check endpoint
@app.get("/api/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint"""
    components = {}

    # Check vector store
    if vector_service:
        collection_info = vector_service.get_collection_info()
        components["vector_store"] = {
            "status": "healthy" if collection_info.get("exists") else "not_indexed",
            "info": collection_info
        }
    else:
        components["vector_store"] = {"status": "not_initialized"}

    # Check cache
    if cache_service:
        components["cache"] = {
            "status": "healthy" if cache_service.is_connected() else "disconnected",
            "stats": cache_service.get_stats()
        }
    else:
        components["cache"] = {"status": "not_initialized"}

    # Check MCP server
    if mcp_server:
        components["mcp_server"] = {
            "status": "healthy",
            "allowed_path": str(mcp_server.allowed_path)
        }
    else:
        components["mcp_server"] = {"status": "not_initialized"}

    return HealthResponse(
        status="healthy",
        version=__version__,
        components=components
    )


@app.get("/api/cache/stats")
async def get_cache_stats():
    """Get cache statistics"""
    if not cache_service:
        return {"error": "Cache service not initialized"}

    return cache_service.get_stats()


@app.post("/api/cache/clear")
async def clear_cache():
    """Clear cache"""
    if not cache_service:
        return {"error": "Cache service not initialized"}

    cache_service.clear_cache()
    return {"message": "Cache cleared successfully"}


@app.get("/api/docs-tree")
async def get_docs_tree():
    """Get documentation file tree"""
    if not mcp_server:
        return {"error": "MCP server not initialized"}

    try:
        tree = mcp_server.get_file_tree(max_depth=4)
        return tree
    except Exception as e:
        return {"error": str(e)}


# Include chat router - use lambda to get current service instance
def get_hybrid_service():
    return hybrid_service

chat_router = create_chat_router(get_hybrid_service)
app.include_router(chat_router)


# Root endpoint
@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Mozart Docs Chatbot API",
        "version": __version__,
        "docs": "/docs",
        "health": "/api/health"
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "app.main:app",
        host=config.server.host,
        port=config.server.port,
        reload=True
    )
