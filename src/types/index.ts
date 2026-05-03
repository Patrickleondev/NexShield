export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
