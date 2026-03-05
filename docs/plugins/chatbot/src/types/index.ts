/**
 * Chatbot TypeScript Types
 */

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  sources?: SourceDocument[];
  cached?: boolean;
  tokensUsed?: number;
}

export interface SourceDocument {
  file: string;
  title?: string;
  content_preview: string;
  relevance_score?: number;
}

export interface ChatRequest {
  question: string;
  conversation_history?: ConversationMessage[];
}

export interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  answer: string;
  sources: SourceDocument[];
  cached: boolean;
  tokens_used?: number;
}

export interface ChatbotConfig {
  apiUrl: string;
  maxMessages?: number;
  placeholder?: string;
  welcomeMessage?: string;
  errorMessage?: string;
}

export interface ChatbotState {
  messages: Message[];
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
}
