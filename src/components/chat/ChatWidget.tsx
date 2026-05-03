import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can we help you securely manage your infrastructure today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response - Replace with actual API call to your backend
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for reaching out. An expert will assist you shortly. (This is a simulated response)',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-white border border-gray-200 rounded-xl shadow-2xl flex flex-col overflow-hidden"
            role="dialog"
            aria-label="Chat window"
          >
            {/* Header */}
            <div className="bg-slate-800 text-white p-4 flex justify-between items-center rounded-t-xl">
              <div>
                <h3 className="font-semibold text-lg">Support</h3>
                <p className="text-sm text-slate-300">We typically reply in minutes</p>
              </div>
              <button
                onClick={toggleChat}
                className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-md p-1"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${
                      message.sender === 'user'
                        ? 'bg-slate-800 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    <span className={`text-[10px] mt-1 block ${message.sender === 'user' ? 'text-slate-300' : 'text-slate-400'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleSendMessage} className="flex gap-2 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-sm transition-all"
                  aria-label="Chat message"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-slate-800 text-white rounded-full p-2 h-10 w-10 flex items-center justify-center hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                  aria-label="Send message"
                >
                  <Send size={18} className="translate-x-[1px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleChat}
        className={`bg-slate-800 hover:bg-slate-900 text-white rounded-full p-4 shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-800 focus:ring-offset-2 transition-transform ${
          isOpen ? 'scale-90' : 'hover:scale-105'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

