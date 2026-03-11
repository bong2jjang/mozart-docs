/**
 * Markdown Content Renderer with Code Highlighting
 */
import React, { useEffect, useRef } from 'react';
import { useHistory } from '@docusaurus/router';

interface MarkdownContentProps {
  content: string;
  sources?: Array<{ file: string; title: string }>;
}

export function MarkdownContent({ content, sources = [] }: MarkdownContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    // Highlight code blocks using Prism (available in Docusaurus)
    if (typeof window !== 'undefined' && (window as any).Prism) {
      (window as any).Prism.highlightAllUnder(contentRef.current);
    }
  }, [content]);

  const parseMarkdown = (text: string): string => {
    // Normalize line endings to \n
    let html = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    // 1. Code blocks first (```language\ncode\n```) - protect from other processing
    const codeBlocks: string[] = [];
    html = html.replace(/```(\w*)\s*\n([\s\S]*?)```/g, (match, lang, code) => {
      const language = lang || 'text';
      const escapedCode = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .trim();

      const placeholder = `\u00ABCODEBLOCK${codeBlocks.length}\u00BB`;
      codeBlocks.push(`<div class="markdown-code-block"><div class="code-header"><span class="code-language">${language}</span><button class="copy-code-btn" data-code="${escapedCode.replace(/"/g, '&quot;')}" title="코드 복사">📋</button></div><pre><code class="language-${language}">${escapedCode}</code></pre></div>`);
      return placeholder;
    });

    // 2. Process line by line for better control
    const lines = html.split('\n');
    const processedLines: string[] = [];
    let inList = false;
    let listType = '';

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const trimmed = line.trim();

      // Skip empty lines
      if (!trimmed) {
        if (inList) {
          processedLines.push(`</${listType}>`);
          inList = false;
        }
        continue;
      }

      // Headers (must be at start of line)
      if (trimmed.match(/^###\s+(.+)$/)) {
        if (inList) { processedLines.push(`</${listType}>`); inList = false; }
        processedLines.push(trimmed.replace(/^###\s+(.+)$/, '<h3>$1</h3>'));
        continue;
      }
      if (trimmed.match(/^##\s+(.+)$/)) {
        if (inList) { processedLines.push(`</${listType}>`); inList = false; }
        processedLines.push(trimmed.replace(/^##\s+(.+)$/, '<h2>$1</h2>'));
        continue;
      }
      if (trimmed.match(/^#\s+(.+)$/)) {
        if (inList) { processedLines.push(`</${listType}>`); inList = false; }
        processedLines.push(trimmed.replace(/^#\s+(.+)$/, '<h1>$1</h1>'));
        continue;
      }

      // Unordered list items
      const ulMatch = trimmed.match(/^[-*]\s+(.+)$/);
      if (ulMatch) {
        if (!inList) {
          processedLines.push('<ul>');
          inList = true;
          listType = 'ul';
        } else if (listType !== 'ul') {
          processedLines.push(`</${listType}>`);
          processedLines.push('<ul>');
          listType = 'ul';
        }
        processedLines.push(`<li>${ulMatch[1]}</li>`);
        continue;
      }

      // Ordered list items
      const olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
      if (olMatch) {
        if (!inList) {
          processedLines.push('<ol>');
          inList = true;
          listType = 'ol';
        } else if (listType !== 'ol') {
          processedLines.push(`</${listType}>`);
          processedLines.push('<ol>');
          listType = 'ol';
        }
        processedLines.push(`<li>${olMatch[1]}</li>`);
        continue;
      }

      // Code block placeholder - don't wrap in <p>
      if (trimmed.match(/^\u00ABCODEBLOCK\d+\u00BB$/)) {
        if (inList) { processedLines.push(`</${listType}>`); inList = false; }
        processedLines.push(trimmed);
        continue;
      }

      // Regular text
      if (inList) {
        processedLines.push(`</${listType}>`);
        inList = false;
      }
      processedLines.push(`<p>${trimmed}</p>`);
    }

    // Close any open list
    if (inList) {
      processedLines.push(`</${listType}>`);
    }

    html = processedLines.join('');

    // 3. Inline formatting (after structure is set)
    // Bold (**text** or __text__)
    html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');

    // Italic (*text* or _text_) - be careful not to match list markers
    html = html.replace(/\*([^\*\n]+)\*/g, '<em>$1</em>');

    // Links ([text](url)) - 외부 링크만 새 탭에서 열기
    html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, (_match, text, url) => {
      if (/^https?:\/\//.test(url)) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }
      return `<a href="${url}">${text}</a>`;
    });

    // Source references ([1], [2], etc.)
    html = html.replace(/\[(\d+)\]/g, (match, num) => {
      const index = parseInt(num) - 1;
      if (sources[index]) {
        return `<a href="${sources[index].file}" class="markdown-reference" data-ref="${num}" title="${sources[index].title}">[${num}]</a>`;
      }
      return match;
    });

    // Inline code (`code`)
    html = html.replace(/`([^`]+)`/g, '<code class="markdown-inline-code">$1</code>');

    // 4. Restore code blocks (use split/join to avoid $ special char issues in replace)
    codeBlocks.forEach((block, i) => {
      const placeholder = `\u00ABCODEBLOCK${i}\u00BB`;
      const idx = html.indexOf(placeholder);
      if (idx !== -1) {
        html = html.substring(0, idx) + block + html.substring(idx + placeholder.length);
      }
    });

    return html;
  };

  // 내부 링크 클릭 시 Docusaurus 라우터로 이동 (사이드바 컨텍스트 유지)
  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    // 외부 링크(target="_blank" 또는 절대 URL)는 기본 동작 유지
    if (anchor.getAttribute('target') === '_blank') return;
    if (/^https?:\/\//.test(href)) return;

    // 내부 링크는 Docusaurus 라우터로 이동
    e.preventDefault();
    history.push(href);
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
      onClick={(e) => { handleLinkClick(e); handleCopyClick(e); }}
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
}
