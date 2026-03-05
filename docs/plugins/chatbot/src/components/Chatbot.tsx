/**
 * Main Chatbot Component
 */
import React, { useEffect, useRef } from 'react';
import { useChatbot } from '../hooks/useChatbot';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

const WELCOME_MESSAGE = `안녕하세요! 👋

Mozart 문서 챗봇입니다. 프레임워크에 대해 궁금한 점을 물어보세요!

예시 질문:
• hooks란 무엇인가요?
• middleware 사용법을 알려주세요
• 테스트는 어떻게 작성하나요?`;

export function Chatbot() {
  const {
    messages,
    isOpen,
    isLoading,
    error,
    toggleOpen,
    sendMessage,
    clearMessages,
    clearError,
  } = useChatbot();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new message arrives
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Add welcome message if no messages
  const displayMessages =
    messages.length === 0
      ? [
          {
            id: 'welcome',
            role: 'assistant' as const,
            content: WELCOME_MESSAGE,
            timestamp: Date.now(),
          },
        ]
      : messages;

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'chatbot-toggle--open' : ''}`}
        onClick={toggleOpen}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="chatbot-toggle__icon"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="chatbot-toggle__icon"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header__title">
              <span className="chatbot-header__icon">🤖</span>
              Mozart Docs 챗봇
            </div>
            <div className="chatbot-header__actions">
              {messages.length > 0 && (
                <button
                  className="chatbot-header__button"
                  onClick={clearMessages}
                  title="대화 내역 삭제"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="chatbot-header__button-icon"
                  >
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                  </svg>
                </button>
              )}
              <button
                className="chatbot-header__button"
                onClick={toggleOpen}
                title="닫기"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="chatbot-header__button-icon"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages" ref={messagesContainerRef}>
            {displayMessages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {isLoading && (
              <div className="chat-message chat-message--assistant">
                <div className="chat-message__bubble">
                  <div className="chat-message__loading">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="chatbot-error">
                <span className="chatbot-error__icon">⚠️</span>
                {error}
                <button
                  className="chatbot-error__close"
                  onClick={clearError}
                  aria-label="Close error"
                >
                  ×
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-footer">
            <ChatInput
              onSend={sendMessage}
              disabled={isLoading}
              placeholder="질문을 입력하세요..."
            />
            <div className="chatbot-footer__info">
              AI가 생성한 답변입니다. 정확하지 않을 수 있습니다.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
