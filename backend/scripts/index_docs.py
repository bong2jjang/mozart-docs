"""Document Indexing Script - Index markdown documents into vector store"""
import sys
from pathlib import Path

# Add parent directory to path
sys.path.append(str(Path(__file__).parent.parent))

from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_openai import OpenAIEmbeddings
from langchain_qdrant import Qdrant
from qdrant_client import QdrantClient, models

from app.config import config


def index_documents():
    """Index markdown documents into Qdrant"""

    print("[INFO] Mozart Docs Indexing Script")
    print("=" * 50)

    docs_path = config.documents.path
    collection_name = config.vector_store.collection_name

    print(f"[MCP] Documents path: {docs_path}")
    print(f"[VECTOR] Collection name: {collection_name}")

    # Step 1: Load documents
    print("\n1[INFO]⃣  Loading documents...")
    try:
        loader = DirectoryLoader(
            docs_path,
            glob="**/*.md",
            loader_cls=TextLoader,
            loader_kwargs={"encoding": "utf-8"},
            show_progress=True,
            use_multithreading=True
        )
        documents = loader.load()
        print(f"[OK] Loaded {len(documents)} documents")
    except Exception as e:
        print(f"[ERROR] Error loading documents: {e}")
        return

    if not documents:
        print("[WARNING]  No documents found!")
        return

    # Step 2: Split documents into chunks
    print("\n2[INFO]⃣  Splitting documents into chunks...")
    try:
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=config.rag.chunk_size,
            chunk_overlap=config.rag.chunk_overlap,
            length_function=len,
            separators=["\n## ", "\n### ", "\n\n", "\n", " ", ""]
        )

        chunks = text_splitter.split_documents(documents)
        print(f"[OK] Created {len(chunks)} chunks")

        # Show sample
        if chunks:
            sample = chunks[0]
            print(f"\n[INFO] Sample chunk:")
            print(f"   Source: {sample.metadata.get('source', 'N/A')}")
            print(f"   Length: {len(sample.page_content)} chars")
            print(f"   Preview: {sample.page_content[:100]}...")

    except Exception as e:
        print(f"[ERROR] Error splitting documents: {e}")
        return

    # Step 3: Initialize Qdrant client
    print("\n3[INFO]⃣  Connecting to Qdrant...")
    try:
        client = QdrantClient(
            url=config.vector_store.qdrant.url,
            api_key=config.vector_store.qdrant.api_key
        )
        print(f"[OK] Connected to Qdrant at {config.vector_store.qdrant.url}")
    except Exception as e:
        print(f"[ERROR] Error connecting to Qdrant: {e}")
        print("   Make sure Qdrant is running (docker-compose up -d)")
        return

    # Step 4: Check if collection exists
    print("\n4[INFO]⃣  Checking collection...")
    try:
        collections = client.get_collections()
        collection_exists = any(
            col.name == collection_name
            for col in collections.collections
        )

        if collection_exists:
            print(f"[WARNING]  Collection '{collection_name}' already exists")
            response = input("   Delete and recreate? (y/N): ")
            if response.lower() == 'y':
                client.delete_collection(collection_name)
                print(f"   Deleted collection '{collection_name}'")
            else:
                print("   Aborted")
                return

    except Exception as e:
        print(f"[WARNING]  Error checking collection: {e}")

    # Step 5: Initialize embeddings
    print("\n5[INFO]⃣  Initializing embedding model...")
    try:
        embeddings = OpenAIEmbeddings(
            model=config.embedding.model
        )
        print(f"[OK] Using model: {config.embedding.model}")
    except Exception as e:
        print(f"[ERROR] Error initializing embeddings: {e}")
        print("   Check your OPENAI_API_KEY environment variable")
        return

    # Step 6: Create collection manually
    print("\n6[INFO]⃣  Creating collection...")
    try:
        # Get embedding dimension
        sample_embedding = embeddings.embed_query("test")
        vector_size = len(sample_embedding)

        # Create collection with proper configuration
        client.create_collection(
            collection_name=collection_name,
            vectors_config=models.VectorParams(
                size=vector_size,
                distance=models.Distance.COSINE
            )
        )
        print(f"[OK] Created collection '{collection_name}' with vector size {vector_size}")
    except Exception as e:
        print(f"[WARNING]  Collection creation: {e}")

    # Step 7: Index documents
    print("\n7[INFO]⃣  Indexing documents into Qdrant...")
    print(f"   This may take a few minutes...")

    try:
        # Create vectorstore instance
        vectorstore = Qdrant(
            client=client,
            collection_name=collection_name,
            embeddings=embeddings,
        )

        # Add documents in batches
        batch_size = 100
        for i in range(0, len(chunks), batch_size):
            batch = chunks[i:i + batch_size]
            vectorstore.add_documents(batch)
            print(f"   Indexed {min(i + batch_size, len(chunks))}/{len(chunks)} chunks...")

        print(f"[OK] Successfully indexed {len(chunks)} chunks!")

    except Exception as e:
        print(f"[ERROR] Error indexing documents: {e}")
        import traceback
        traceback.print_exc()
        return

    # Step 8: Verify indexing
    print("\n8[INFO]⃣  Verifying indexing...")
    try:
        collection_info = client.get_collection(collection_name)
        print(f"[OK] Collection info:")
        print(f"   - Vectors count: {collection_info.vectors_count}")
        print(f"   - Points count: {collection_info.points_count}")
        print(f"   - Status: {collection_info.status}")

    except Exception as e:
        print(f"[WARNING]  Could not verify: {e}")

    # Step 9: Test search
    print("\n9[INFO]⃣  Testing search...")
    try:
        test_query = "hooks"
        results = vectorstore.similarity_search(test_query, k=3)
        print(f"[OK] Test search for '{test_query}':")
        for i, doc in enumerate(results, 1):
            print(f"   {i}. {doc.metadata.get('source', 'N/A')}")

    except Exception as e:
        print(f"[WARNING]  Test search failed: {e}")

    print("\n" + "=" * 50)
    print("[OK] Indexing completed successfully!")
    print("\nNext steps:")
    print("  1. Start the backend: python -m app.main")
    print("  2. Test the API: curl http://localhost:8000/api/health")


if __name__ == "__main__":
    try:
        index_documents()
    except KeyboardInterrupt:
        print("\n\n[WARNING]  Indexing interrupted by user")
    except Exception as e:
        print(f"\n\n[ERROR] Unexpected error: {e}")
        import traceback
        traceback.print_exc()
