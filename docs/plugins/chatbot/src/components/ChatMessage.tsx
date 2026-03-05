/**
 * Chat Message Component
 */
import React from 'react';
import type { Message } from '../types';
import { MarkdownContent } from './MarkdownContent';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const [feedback, setFeedback] = React.useState<'like' | 'dislike' | null>(null);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleFeedback = (type: 'like' | 'dislike') => {
    setFeedback(feedback === type ? null : type);
    // TODO: Send feedback to backend
    console.log('Feedback:', type, 'for message:', message.id);
  };

  // 후속 질문 샘플 (실제로는 백엔드에서 생성하거나 컨텐츠 기반으로 생성)
  const suggestedQuestions = message.role === 'assistant' && message.content.length > 50 ? [
    '더 자세히 설명해주세요',
    '예시 코드를 보여주세요',
    '관련된 다른 주제는?',
  ] : null;

  return (
    <div className={`chat-message ${isUser ? 'chat-message--user' : 'chat-message--assistant'}`}>
      <div className="chat-message__bubble">
        <div className="chat-message__content">
          {isUser ? (
            message.content
          ) : (
            <MarkdownContent content={message.content} sources={message.sources} />
          )}
        </div>

        {message.sources && message.sources.length > 0 && (
          <div className="chat-message__sources">
            <div className="chat-message__sources-title">📚 참고 문서:</div>
            {message.sources.map((source, index) => (
              <div key={index} className="chat-message__source-wrapper">
                <a
                  href={source.file}
                  className="chat-message__source"
                >
                  {source.title}
                </a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(source.file, '_blank', 'noopener,noreferrer');
                  }}
                  className="chat-message__source-external"
                  title="새 탭에서 열기"
                  aria-label="새 탭에서 열기"
                >
                  ↗
                </button>
              </div>
            ))}
          </div>
        )}

        {!isUser && message.id !== 'welcome' && (
          <div className="chat-message__actions">
            <button
              className={`chat-message__action-btn ${copied ? 'chat-message__action-btn--active' : ''}`}
              onClick={handleCopy}
              title="답변 복사"
            >
              {copied ? '✅' : '📋'}
            </button>
            <button
              className={`chat-message__action-btn ${feedback === 'like' ? 'chat-message__action-btn--active' : ''}`}
              onClick={() => handleFeedback('like')}
              title="좋아요"
            >
              👍
            </button>
            <button
              className={`chat-message__action-btn ${feedback === 'dislike' ? 'chat-message__action-btn--active' : ''}`}
              onClick={() => handleFeedback('dislike')}
              title="싫어요"
            >
              👎
            </button>
          </div>
        )}

        {message.cached && (
          <div className="chat-message__badge chat-message__badge--cached">
            ⚡ 캐시됨
          </div>
        )}
      </div>

      <div className="chat-message__time">
        {new Date(message.timestamp).toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    </div>
  );
}
