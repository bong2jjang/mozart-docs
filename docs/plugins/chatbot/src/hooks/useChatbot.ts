/**
 * Chatbot React Hook
 */
import { useState, useCallback, useEffect, useRef } from 'react';
import type { Message, ChatbotState, SourceDocument } from '../types';
import { chatbotAPI } from '../utils/api';

const MAX_MESSAGES = 50;
const STORAGE_KEY = 'mozart-chatbot-messages';
const OPEN_STATE_KEY = 'mozart-chatbot-open';

/**
 * Safely read boolean value from localStorage
 */
const getStoredBoolean = (key: string, defaultValue = false): boolean => {
  if (typeof window === 'undefined') return defaultValue;
  try {
    return localStorage.getItem(key) === 'true';
  } catch {
    return defaultValue;
  }
};

/**
 * Safely write boolean value to localStorage
 */
const setStoredBoolean = (key: string, value: boolean): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, String(value));
  } catch (error) {
    console.error(`Failed to save ${key}:`, error);
  }
};

export function useChatbot() {
  const [state, setState] = useState<ChatbotState>(() => ({
    messages: [],
    isOpen: getStoredBoolean(OPEN_STATE_KEY),
    isLoading: false,
    isStreaming: false,
    statusMessage: null,
    error: null,
  }));

  const abortControllerRef = useRef<AbortController | null>(null);
  const assistantIdRef = useRef<string | null>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const messages = JSON.parse(stored);
        const hasCorruptedMessages = messages.some(
          (msg: Message) => /(?:__CODE_BLOCK_\d+__|CODE_BLOCK_\d+)/.test(msg.content)
        );
        if (hasCorruptedMessages) {
          console.warn('Clearing corrupted chat history with broken code block placeholders');
          localStorage.removeItem(STORAGE_KEY);
          return;
        }
        setState((prev) => ({ ...prev, messages }));
      }
    } catch (error) {
      console.error('Failed to load chat history:', error);
    }
  }, []);

  // Save messages to localStorage
  const saveMessages = useCallback((messages: Message[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error('Failed to save chat history:', error);
    }
  }, []);

  // Append token directly to assistant message
  const appendToken = useCallback((token: string, aid: string) => {
    setState((prev) => {
      const messages = [...prev.messages];
      const lastMsg = messages[messages.length - 1];
      if (lastMsg && lastMsg.id === aid) {
        messages[messages.length - 1] = {
          ...lastMsg,
          content: lastMsg.content + token,
        };
      }
      return { ...prev, messages, isLoading: false, statusMessage: null };
    });
  }, []);

  // Toggle chatbot open/close (persists to localStorage)
  const toggleOpen = useCallback(() => {
    setState((prev) => {
      const next = !prev.isOpen;
      setStoredBoolean(OPEN_STATE_KEY, next);
      return { ...prev, isOpen: next };
    });
  }, []);

  // Send message with streaming
  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || state.isLoading || state.isStreaming) return;

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: content.trim(),
        timestamp: Date.now(),
      };

      const assistantId = `assistant-${Date.now()}`;
      assistantIdRef.current = assistantId;
      const assistantMessage: Message = {
        id: assistantId,
        role: 'assistant',
        content: '',
        timestamp: Date.now(),
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage, assistantMessage],
        isLoading: true,
        isStreaming: true,
        statusMessage: null,
        error: null,
      }));

      const recentMessages = state.messages.slice(-5).map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      try {
        await chatbotAPI.sendMessageStream(
          {
            question: content.trim(),
            conversation_history: recentMessages,
          },
          {
            onStatus: (statusContent: string) => {
              setState((prev) => ({
                ...prev,
                statusMessage: statusContent,
              }));
            },
            onToken: (token: string) => {
              appendToken(token, assistantId);
            },
            onSources: (sources: SourceDocument[]) => {
              setState((prev) => {
                const messages = [...prev.messages];
                const lastMsg = messages[messages.length - 1];
                if (lastMsg && lastMsg.id === assistantId) {
                  messages[messages.length - 1] = { ...lastMsg, sources };
                }
                return { ...prev, messages };
              });
            },
            onDone: (data) => {
              setState((prev) => {
                const messages = [...prev.messages];
                const lastMsg = messages[messages.length - 1];
                if (lastMsg && lastMsg.id === assistantId) {
                  messages[messages.length - 1] = {
                    ...lastMsg,
                    cached: data.cached,
                    tokensUsed: data.tokens_used,
                  };
                }

                const limitedMessages =
                  messages.length > MAX_MESSAGES
                    ? messages.slice(-MAX_MESSAGES)
                    : messages;

                saveMessages(limitedMessages);

                return {
                  ...prev,
                  messages: limitedMessages,
                  isStreaming: false,
                  isLoading: false,
                  statusMessage: null,
                };
              });
            },
            onError: (errorMessage: string) => {
              setState((prev) => {
                const messages = [...prev.messages];
                const lastMsg = messages[messages.length - 1];
                if (lastMsg && lastMsg.id === assistantId) {
                  messages[messages.length - 1] = {
                    ...lastMsg,
                    content: errorMessage,
                  };
                }
                saveMessages(messages);
                return {
                  ...prev,
                  messages,
                  isLoading: false,
                  isStreaming: false,
                  statusMessage: null,
                  error: errorMessage,
                };
              });
            },
          },
          abortController.signal
        );
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : '죄송합니다. 오류가 발생했습니다.';

        setState((prev) => ({
          ...prev,
          isLoading: false,
          isStreaming: false,
          statusMessage: null,
          error: errorMessage,
        }));
      }
    },
    [state.messages, state.isLoading, state.isStreaming, saveMessages, appendToken]
  );

  // Clear messages
  const clearMessages = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setState((prev) => ({ ...prev, messages: [], isLoading: false, isStreaming: false, statusMessage: null }));
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Clear error
  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  return {
    messages: state.messages,
    isOpen: state.isOpen,
    isLoading: state.isLoading,
    isStreaming: state.isStreaming,
    statusMessage: state.statusMessage,
    error: state.error,
    toggleOpen,
    sendMessage,
    clearMessages,
    clearError,
  };
}
