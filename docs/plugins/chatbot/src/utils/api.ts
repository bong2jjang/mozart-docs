/**
 * API Communication Utilities
 */
import type { ChatRequest, ChatResponse, StreamCallbacks } from '../types';

// Dynamically resolve API URL based on current browser hostname
// This allows access from any device on the same network
const API_BASE_URL =
  typeof window !== 'undefined' && (window as any).CHATBOT_API_URL
    ? (window as any).CHATBOT_API_URL
    : typeof window !== 'undefined'
      ? `${window.location.protocol}//${window.location.hostname}:8000`
      : 'http://localhost:8000';

export class ChatbotAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * Send chat message with SSE streaming
   */
  async sendMessageStream(
    request: ChatRequest,
    callbacks: StreamCallbacks,
    signal?: AbortSignal
  ): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/api/chat/stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
        signal,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        // Keep incomplete last line in buffer
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data: ')) continue;

          try {
            const data = JSON.parse(trimmed.slice(6));
            switch (data.type) {
              case 'status':
                callbacks.onStatus(data.content);
                break;
              case 'token':
                callbacks.onToken(data.content);
                break;
              case 'sources':
                callbacks.onSources(data.sources || []);
                break;
              case 'done':
                callbacks.onDone({
                  tokens_used: data.tokens_used || 0,
                  cached: data.cached || false,
                });
                break;
            }
          } catch {
            // Skip malformed JSON lines
          }
        }
      }
    } catch (error) {
      if ((error as Error).name === 'AbortError') return;
      const msg = error instanceof Error ? error.message : 'Unknown error';
      callbacks.onError(`Failed to send message: ${msg}`);
    }
  }

  /**
   * Send chat message to backend (non-streaming fallback)
   */
  async sendMessage(request: ChatRequest): Promise<ChatResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.detail || `HTTP error! status: ${response.status}`
        );
      }

      const data: ChatResponse = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to send message: ${error.message}`);
      }
      throw new Error('Failed to send message: Unknown error');
    }
  }

  /**
   * Check backend health
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`, {
        method: 'GET',
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Get cache statistics
   */
  async getCacheStats(): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/api/cache/stats`, {
        method: 'GET',
      });
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch {
      return null;
    }
  }
}

// Singleton instance
export const chatbotAPI = new ChatbotAPI();
