/**
 * Chat Message Component
 */
import React from 'react';
import type { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`chat-message ${isUser ? 'chat-message--user' : 'chat-message--assistant'}`}>
      <div className="chat-message__bubble">
        <div className="chat-message__content">
          {message.content}
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
