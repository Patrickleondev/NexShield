import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

/** Profondeur d'historique envoyee au serveur. La fonction /api/chat borne de
 *  toute facon a 20 : on reste en deca pour limiter le cout par requete. */
const MAX_HISTORIQUE = 12;

export const ChatWidget: React.FC = () => {
  const { t } = useLanguage();
  const c = t.chat;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: c.greeting, sender: 'bot', timestamp: new Date() },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [pending, setPending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Le message d'accueil suit la langue choisie, tant que l'echange n'a pas commence.
  useEffect(() => {
    setMessages((prev) =>
      prev.length === 1 && prev[0].sender === 'bot'
        ? [{ ...prev[0], text: c.greeting }]
        : prev
    );
  }, [c.greeting]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const texte = inputValue.trim();
    if (!texte || pending) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: texte,
      sender: 'user',
      timestamp: new Date(),
    };

    const historique = [...messages, userMessage];
    setMessages(historique);
    setInputValue('');
    setPending(true);

    // On n'envoie que les roles utilisateur et assistant : la consigne du modele
    // est fixee cote serveur et n'est pas modifiable depuis le navigateur.
    const payload = historique.slice(-MAX_HISTORIQUE).map((m) => ({
      role: m.sender === 'user' ? 'user' : 'assistant',
      content: m.text,
    }));

    let reponse = c.error;
    try {
      const r = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payload }),
      });
      const donnees = await r.json().catch(() => ({}));
      if (r.ok && donnees.reponse) reponse = donnees.reponse;
      else if (donnees.erreur) reponse = donnees.erreur;
    } catch {
      // On garde le message d'erreur par defaut.
    } finally {
      setMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-b`, text: reponse, sender: 'bot', timestamp: new Date() },
      ]);
      setPending(false);
    }
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
            aria-label={c.title}
          >
            {/* Header */}
            <div className="bg-slate-800 text-white p-4 flex justify-between items-center rounded-t-xl">
              <div>
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="text-sm text-slate-300">{c.subtitle}</p>
              </div>
              <button
                onClick={toggleChat}
                className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-md p-1"
                aria-label={c.close}
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

              {pending && (
                <div className="flex justify-start" aria-live="polite">
                  <div className="bg-white text-slate-500 border border-slate-200 rounded-lg rounded-bl-none p-3 text-sm shadow-sm flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin" />
                    {c.thinking}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleSendMessage} className="flex gap-2 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={c.placeholder}
                  maxLength={2000}
                  disabled={pending}
                  className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent text-sm transition-all disabled:opacity-60"
                  aria-label={c.placeholder}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || pending}
                  className="bg-slate-800 text-white rounded-full p-2 h-10 w-10 flex items-center justify-center hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                  aria-label={c.title}
                >
                  <Send size={18} className="translate-x-[1px]" />
                </button>
              </form>
              <p className="mt-2 text-[11px] leading-snug text-slate-400 text-center">
                {c.disclaimer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleChat}
        className={`bg-slate-800 hover:bg-slate-900 text-white rounded-full p-4 shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-800 focus:ring-offset-2 transition-transform ${
          isOpen ? 'scale-90' : 'hover:scale-105'
        }`}
        aria-label={isOpen ? c.close : c.open}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

