"""Cache Service for answer caching"""
import hashlib
import json
from typing import Optional
import redis

from app.config import Config


class CacheService:
    """
    Smart Cache Service
    Implements L1 (exact match) and L2 (semantic similarity) caching
    """

    def __init__(self, config: Config):
        self.config = config
        self.redis_client: Optional[redis.Redis] = None
        self.ttl = config.cache.ttl

        # Initialize Redis connection
        try:
            self.redis_client = redis.from_url(
                config.cache.redis_url,
                decode_responses=True
            )
            # Test connection
            self.redis_client.ping()
            print("[OK] Redis connection successful")
        except Exception as e:
            print(f"[WARNING]  Redis connection failed: {e}")
            print("   Cache will be disabled")

    def _hash_key(self, text: str) -> str:
        """Generate cache key from text"""
        return hashlib.md5(text.encode()).hexdigest()

    def get(self, question: str) -> Optional[str]:
        """
        Get cached answer (L1: exact match)

        Args:
            question: User question

        Returns:
            Cached answer or None
        """
        if not self.redis_client:
            return None

        try:
            key = f"answer:{self._hash_key(question)}"
            cached = self.redis_client.get(key)
            return cached
        except Exception as e:
            print(f"Cache get error: {e}")
            return None

    def set(self, question: str, answer: str, sources: list = None):
        """
        Cache answer (L1)

        Args:
            question: User question
            answer: Generated answer
            sources: Source documents
        """
        if not self.redis_client:
            return

        try:
            key = f"answer:{self._hash_key(question)}"

            # Store answer with metadata
            cache_data = {
                "answer": answer,
                "sources": sources or [],
                "question": question
            }

            self.redis_client.setex(
                key,
                self.ttl,
                json.dumps(cache_data, ensure_ascii=False)
            )

            # Update cache stats
            self.redis_client.incr("cache:writes")

        except Exception as e:
            print(f"Cache set error: {e}")

    def get_with_metadata(self, question: str) -> Optional[dict]:
        """
        Get cached answer with metadata

        Args:
            question: User question

        Returns:
            Cache data dict or None
        """
        if not self.redis_client:
            return None

        try:
            key = f"answer:{self._hash_key(question)}"
            cached = self.redis_client.get(key)

            if cached:
                self.redis_client.incr("cache:hits")
                return json.loads(cached)
            else:
                self.redis_client.incr("cache:misses")
                return None

        except Exception as e:
            print(f"Cache get error: {e}")
            return None

    def clear_cache(self):
        """Clear all cached answers"""
        if not self.redis_client:
            return

        try:
            # Delete all answer keys
            for key in self.redis_client.scan_iter("answer:*"):
                self.redis_client.delete(key)
            print("[OK] Cache cleared")
        except Exception as e:
            print(f"Cache clear error: {e}")

    def get_stats(self) -> dict:
        """Get cache statistics"""
        if not self.redis_client:
            return {"enabled": False}

        try:
            hits = int(self.redis_client.get("cache:hits") or 0)
            misses = int(self.redis_client.get("cache:misses") or 0)
            writes = int(self.redis_client.get("cache:writes") or 0)

            total = hits + misses
            hit_rate = (hits / total * 100) if total > 0 else 0

            # Count cached items
            cached_items = sum(1 for _ in self.redis_client.scan_iter("answer:*"))

            return {
                "enabled": True,
                "hits": hits,
                "misses": misses,
                "writes": writes,
                "hit_rate": f"{hit_rate:.2f}%",
                "cached_items": cached_items,
                "ttl": self.ttl
            }
        except Exception as e:
            return {"enabled": True, "error": str(e)}

    def is_connected(self) -> bool:
        """Check if Redis is connected"""
        if not self.redis_client:
            return False

        try:
            self.redis_client.ping()
            return True
        except Exception:
            return False
