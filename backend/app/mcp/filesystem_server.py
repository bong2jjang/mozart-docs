"""MCP Filesystem Server - Provides file system access to LLM"""
import os
from pathlib import Path
from typing import List, Dict, Any


class MCPFilesystemServer:
    """
    MCP (Model Context Protocol) Filesystem Server
    Provides controlled file system access to LLM
    """

    def __init__(self, allowed_path: str):
        """
        Initialize MCP server with allowed path

        Args:
            allowed_path: Root path that LLM can access
        """
        self.allowed_path = Path(allowed_path).resolve()

        if not self.allowed_path.exists():
            raise ValueError(f"Path does not exist: {allowed_path}")

        if not self.allowed_path.is_dir():
            raise ValueError(f"Path is not a directory: {allowed_path}")

    def _is_path_allowed(self, path: str | Path) -> bool:
        """Check if path is within allowed directory"""
        try:
            resolved = Path(path).resolve()
            resolved.relative_to(self.allowed_path)
            return True
        except (ValueError, OSError):
            return False

    def read_file(self, path: str) -> str:
        """
        Read file contents

        Args:
            path: Relative path from allowed_path

        Returns:
            File contents

        Raises:
            ValueError: If path is outside allowed directory
            FileNotFoundError: If file doesn't exist
        """
        full_path = self.allowed_path / path

        if not self._is_path_allowed(full_path):
            raise ValueError(f"Access denied: Path outside allowed directory: {path}")

        if not full_path.is_file():
            raise FileNotFoundError(f"File not found: {path}")

        try:
            with open(full_path, 'r', encoding='utf-8') as f:
                return f.read()
        except UnicodeDecodeError:
            # Try with different encoding
            with open(full_path, 'r', encoding='utf-8', errors='ignore') as f:
                return f.read()

    def list_directory(self, path: str = ".") -> List[Dict[str, str]]:
        """
        List directory contents

        Args:
            path: Relative directory path

        Returns:
            List of items with name, type, and path
        """
        full_path = self.allowed_path / path

        if not self._is_path_allowed(full_path):
            raise ValueError(f"Access denied: {path}")

        if not full_path.is_dir():
            raise NotADirectoryError(f"Not a directory: {path}")

        items = []
        try:
            for item in sorted(full_path.iterdir()):
                items.append({
                    "name": item.name,
                    "type": "directory" if item.is_dir() else "file",
                    "path": str(item.relative_to(self.allowed_path)),
                    "size": item.stat().st_size if item.is_file() else None
                })
        except PermissionError:
            raise ValueError(f"Permission denied: {path}")

        return items

    def search_files(self, pattern: str) -> List[str]:
        """
        Search files by pattern

        Args:
            pattern: Glob pattern (e.g., "*.md", "**/*.mdx")

        Returns:
            List of matching file paths (relative to allowed_path)
        """
        results = []
        try:
            for file_path in self.allowed_path.rglob(pattern):
                if file_path.is_file() and self._is_path_allowed(file_path):
                    results.append(str(file_path.relative_to(self.allowed_path)))
        except Exception as e:
            raise ValueError(f"Search error: {str(e)}")

        return sorted(results)

    def get_file_tree(self, max_depth: int = 3) -> Dict[str, Any]:
        """
        Get file tree structure

        Args:
            max_depth: Maximum depth to traverse

        Returns:
            Tree structure as nested dict
        """
        def build_tree(path: Path, depth: int = 0) -> Dict[str, Any]:
            if depth >= max_depth:
                return {"name": path.name, "type": "directory", "truncated": True}

            tree = {
                "name": path.name,
                "type": "directory",
                "children": []
            }

            try:
                for item in sorted(path.iterdir()):
                    # Skip hidden files and common excludes
                    if item.name.startswith('.') or item.name in ['node_modules', '__pycache__']:
                        continue

                    if item.is_dir():
                        tree["children"].append(build_tree(item, depth + 1))
                    else:
                        tree["children"].append({
                            "name": item.name,
                            "type": "file",
                            "path": str(item.relative_to(self.allowed_path)),
                            "size": item.stat().st_size
                        })
            except PermissionError:
                pass

            return tree

        return build_tree(self.allowed_path)

    def get_file_info(self, path: str) -> Dict[str, Any]:
        """
        Get file metadata

        Args:
            path: Relative file path

        Returns:
            File metadata
        """
        full_path = self.allowed_path / path

        if not self._is_path_allowed(full_path):
            raise ValueError(f"Access denied: {path}")

        if not full_path.exists():
            raise FileNotFoundError(f"Path not found: {path}")

        stat = full_path.stat()

        return {
            "path": str(full_path.relative_to(self.allowed_path)),
            "name": full_path.name,
            "type": "directory" if full_path.is_dir() else "file",
            "size": stat.st_size,
            "modified": stat.st_mtime,
            "extension": full_path.suffix if full_path.is_file() else None
        }
