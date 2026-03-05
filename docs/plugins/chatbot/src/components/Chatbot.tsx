/**
 * Main Chatbot Component
 */
import React, { useEffect, useRef, useState } from 'react';
import { useChatbot } from '../hooks/useChatbot';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

const WELCOME_MESSAGE = `안녕하세요! 👋

Mozart 문서 챗봇입니다. 프레임워크에 대해 궁금한 점을 물어보세요!

예시 질문:
• hooks란 무엇인가요?
• middleware 사용법을 알려주세요
• 테스트는 어떻게 작성하나요?`;

// Layout constraints
const MIN_WIDTH = 300;
const MAX_WIDTH_FLOATING = 600;
const MAX_WIDTH_SIDEBAR = 800;
const MIN_HEIGHT = 400;

type LayoutMode = 'floating' | 'sidebar';

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

  // Layout state
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('floating');
  const [chatbotWidth, setChatbotWidth] = useState(400);
  const [chatbotHeight, setChatbotHeight] = useState(600);
  const [positionX, setPositionX] = useState<number | null>(null); // null = default position
  const [positionY, setPositionY] = useState<number | null>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Load layout from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('chatbot_layout_mode') as LayoutMode;
    const savedWidth = localStorage.getItem('chatbot_layout_width');
    const savedHeight = localStorage.getItem('chatbot_layout_height');
    const savedX = localStorage.getItem('chatbot_position_x');
    const savedY = localStorage.getItem('chatbot_position_y');

    if (savedMode) setLayoutMode(savedMode);
    if (savedWidth) setChatbotWidth(parseInt(savedWidth));
    if (savedHeight) setChatbotHeight(parseInt(savedHeight));
    if (savedX) setPositionX(parseInt(savedX));
    if (savedY) setPositionY(parseInt(savedY));
  }, []);

  // Save layout to localStorage
  useEffect(() => {
    localStorage.setItem('chatbot_layout_mode', layoutMode);
    localStorage.setItem('chatbot_layout_width', String(chatbotWidth));
    localStorage.setItem('chatbot_layout_height', String(chatbotHeight));
    if (positionX !== null) localStorage.setItem('chatbot_position_x', String(positionX));
    if (positionY !== null) localStorage.setItem('chatbot_position_y', String(positionY));
  }, [layoutMode, chatbotWidth, chatbotHeight, positionX, positionY]);

  // Toggle layout mode
  const toggleLayoutMode = () => {
    setLayoutMode((prev) => (prev === 'floating' ? 'sidebar' : 'floating'));
  };

  // Clamp value between min and max
  const clamp = (value: number, min: number, max: number) => {
    return Math.min(Math.max(value, min), max);
  };

  // Handle width resize (left edge drag)
  const handleWidthResize = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);

    const startX = e.clientX;
    const startWidth = chatbotWidth;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = startX - moveEvent.clientX;
      const newWidth = startWidth + deltaX;
      const maxWidth = layoutMode === 'floating' ? MAX_WIDTH_FLOATING : MAX_WIDTH_SIDEBAR;

      setChatbotWidth(clamp(newWidth, MIN_WIDTH, maxWidth));
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('chatbot-resizing');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.classList.add('chatbot-resizing');
  };

  // Handle height resize (top edge drag) - only for floating mode
  const handleHeightResize = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);

    const startY = e.clientY;
    const startHeight = chatbotHeight;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = startY - moveEvent.clientY;
      const newHeight = startHeight + deltaY;
      const maxHeight = window.innerHeight - 140;

      setChatbotHeight(clamp(newHeight, MIN_HEIGHT, maxHeight));
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('chatbot-resizing');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.classList.add('chatbot-resizing');
  };

  // Double-click to reset size
  const handleDoubleClick = () => {
    if (layoutMode === 'floating') {
      setChatbotWidth(400);
      setChatbotHeight(600);
      setPositionX(null); // Reset to default position
      setPositionY(null);
    } else {
      setChatbotWidth(450);
    }
  };

  // Handle header drag (move window) - only for floating mode
  const handleHeaderDrag = (e: React.MouseEvent) => {
    if (layoutMode !== 'floating') return; // Only allow dragging in floating mode

    e.preventDefault();
    setIsDragging(true);

    const startX = e.clientX;
    const startY = e.clientY;
    const initialX = positionX ?? (window.innerWidth - chatbotWidth - 24);
    const initialY = positionY ?? (window.innerHeight - chatbotHeight - 96);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      const newX = initialX + deltaX;
      const newY = initialY + deltaY;

      // Constrain within viewport
      const maxX = window.innerWidth - chatbotWidth;
      const maxY = window.innerHeight - chatbotHeight;

      setPositionX(clamp(newX, 0, maxX));
      setPositionY(clamp(newY, 0, maxY));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('chatbot-dragging');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.classList.add('chatbot-dragging');
  };

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

  // Calculate position style for floating mode
  const getPositionStyle = () => {
    if (layoutMode !== 'floating') return {};

    if (positionX !== null && positionY !== null) {
      return {
        left: `${positionX}px`,
        top: `${positionY}px`,
        right: 'auto',
        bottom: 'auto',
      };
    }
    return {}; // Use CSS default positioning
  };

  return (
    <>
      {/* Chatbot Toggle Button - Hide when open in sidebar mode */}
      {!(isOpen && layoutMode === 'sidebar') && (
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
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className={`chatbot-window chatbot-window--${layoutMode} ${isResizing ? 'chatbot-window--resizing' : ''} ${isDragging ? 'chatbot-window--dragging' : ''}`}
          style={{
            width: `${chatbotWidth}px`,
            height: layoutMode === 'floating' ? `${chatbotHeight}px` : '100vh',
            ...getPositionStyle(),
          }}
        >
          {/* Resize Handles */}
          <div
            className="chatbot-resize-handle chatbot-resize-handle--left"
            onMouseDown={handleWidthResize}
            onDoubleClick={handleDoubleClick}
            title="드래그하여 너비 조정 (더블클릭으로 초기화)"
          />
          {layoutMode === 'floating' && (
            <div
              className="chatbot-resize-handle chatbot-resize-handle--top"
              onMouseDown={handleHeightResize}
              onDoubleClick={handleDoubleClick}
              title="드래그하여 높이 조정 (더블클릭으로 초기화)"
            />
          )}

          {/* Header */}
          <div
            className="chatbot-header"
            onMouseDown={handleHeaderDrag}
            style={{
              cursor: layoutMode === 'floating' ? 'move' : 'default',
            }}
          >
            <div className="chatbot-header__title">
              <span className="chatbot-header__icon">🤖</span>
              Mozart Docs 챗봇
            </div>
            <div className="chatbot-header__actions" onMouseDown={(e) => e.stopPropagation()}>
              {messages.length > 0 && (
                <button
                  className="chatbot-header__button"
                  onClick={clearMessages}
                  title="새 대화"
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
                onClick={toggleLayoutMode}
                title={layoutMode === 'floating' ? '사이드바 모드로 전환' : '플로팅 모드로 전환'}
              >
                {layoutMode === 'floating' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="chatbot-header__button-icon"
                  >
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="chatbot-header__button-icon"
                  >
                    <path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z" />
                  </svg>
                )}
              </button>
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
