/**
 * Markdown Content Renderer with Code Highlighting
 */
import React, { useEffect, useRef } from 'react';

interface MarkdownContentProps {
  content: string;
  sources?: Array<{ file: string; title: string }>;
}

export function MarkdownContent({ content, sources = [] }: MarkdownContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Highlight code blocks using Prism (available in Docusaurus)
    if (typeof window !== 'undefined' && (window as any).Prism) {
      (window as any).Prism.highlightAllUnder(contentRef.current);
    }
  }, [content]);

  const parseMarkdown = (text: string): string => {
    let html = text;

    // Code blocks (```language\ncode\n```)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      const language = lang || 'text';
      const escapedCode = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .trim();

      return `<div class="markdown-code-block"><div class="code-header"><span class="code-language">${language}</span><button class="copy-code-btn" data-code="${escapedCode.replace(/"/g, '&quot;')}" title="코드 복사">📋</button></div><pre><code class="language-${language}">${escapedCode}</code></pre></div>`;
    });

    // Inline code (`code`)
    html = html.replace(/`([^`]+)`/g, '<code class="markdown-inline-code">$1</code>');

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold (**text** or __text__)
    html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');

    // Italic (*text* or _text_)
    html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
    html = html.replace(/_([^_]+)_/g, '<em>$1</em>');

    // Links ([text](url))
    html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Source references ([1], [2], etc.) - 링크로 변환
    html = html.replace(/\[(\d+)\]/g, (match, num) => {
      const index = parseInt(num) - 1;
      if (sources[index]) {
        return `<a href="${sources[index].file}" class="markdown-reference" data-ref="${num}" title="${sources[index].title}">[${num}]</a>`;
      }
      return match;
    });

    // Unordered lists (- item or * item)
    html = html.replace(/^\s*[-*]\s+(.+)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Ordered lists (1. item)
    html = html.replace(/^\s*\d+\.\s+(.+)$/gim, '<li>$1</li>');

    // Line breaks
    html = html.replace(/\n\n/g, '<br/><br/>');
    html = html.replace(/\n/g, '<br/>');

    return html;
  };

  const handleCopyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('copy-code-btn')) {
      const code = target.getAttribute('data-code');
      if (code) {
        const decodedCode = code
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"');

        navigator.clipboard.writeText(decodedCode).then(() => {
          target.textContent = '✅';
          setTimeout(() => {
            target.textContent = '📋';
          }, 2000);
        });
      }
    }
  };

  return (
    <div
      ref={contentRef}
      className="markdown-content"
      onClick={handleCopyClick}
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
}
