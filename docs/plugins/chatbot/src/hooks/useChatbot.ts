/**
 * Chatbot React Hook
 */
import { useState, useCallback, useEffect } from 'react';
import type { Message, ChatbotState } from '../types';
import { chatbotAPI } from '../utils/api';

const MAX_MESSAGES = 50;
const STORAGE_KEY = 'mozart-chatbot-messages';

export function useChatbot() {
  const [state, setState] = useState<ChatbotState>({
    messages: [],
    isOpen: false,
    isLoading: false,
    error: null,
  });

  // Load messages from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const messages = JSON.parse(stored);
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

  // Toggle chatbot open/close
  const toggleOpen = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  }, []);

  // Send message
  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || state.isLoading) return;

      // Add user message
      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: content.trim(),
        timestamp: Date.now(),
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
        isLoading: true,
        error: null,
      }));

      try {
        // Prepare conversation history (last 5 messages)
        const recentMessages = state.messages.slice(-5).map((msg) => ({
          role: msg.role,
          content: msg.content,
        }));

        // Call API
        const response = await chatbotAPI.sendMessage({
          question: content.trim(),
          conversation_history: recentMessages,
        });

        // Add assistant message
        const assistantMessage: Message = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: response.answer,
          timestamp: Date.now(),
          sources: response.sources,
          cached: response.cached,
          tokensUsed: response.tokens_used,
        };

        setState((prev) => {
          const newMessages = [...prev.messages, assistantMessage];

          // Limit message history
          const limitedMessages =
            newMessages.length > MAX_MESSAGES
              ? newMessages.slice(-MAX_MESSAGES)
              : newMessages;

          saveMessages(limitedMessages);

          return {
            ...prev,
            messages: limitedMessages,
            isLoading: false,
          };
        });
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : '죄송합니다. 오류가 발생했습니다.';

        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: errorMessage,
        }));

        // Add error message
        const errorMsg: Message = {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: errorMessage,
          timestamp: Date.now(),
        };

        setState((prev) => {
          const newMessages = [...prev.messages, errorMsg];
          saveMessages(newMessages);
          return { ...prev, messages: newMessages };
        });
      }
    },
    [state.messages, state.isLoading, saveMessages]
  );

  // Clear messages
  const clearMessages = useCallback(() => {
    setState((prev) => ({ ...prev, messages: [] }));
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
    error: state.error,
    toggleOpen,
    sendMessage,
    clearMessages,
    clearError,
  };
}
