'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '919703356332';
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I came across NIA Guntur and I'm interested in learning more about joining."
);

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
        setTimeout(() => setIsExpanded(true), 300);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
    setTimeout(() => {
      setIsVisible(false);
      setIsDismissed(true);
    }, 200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="max-w-[270px] rounded-2xl bg-white/90 p-5 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="nia-eyebrow">NIA Guntur</p>
              <button onClick={handleDismiss} className="text-nia-muted hover:text-nia-black transition-colors shrink-0">
                <X size={14} />
              </button>
            </div>
            <p className="font-serif text-xl text-nia-black mb-1">Thinking about joining?</p>
            <p className="text-xs font-light text-nia-gray mb-4 leading-relaxed">
              Chat with us on WhatsApp. We review every inquiry personally.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full text-center text-xs font-medium tracking-[0.18em] uppercase bg-[#25D366] text-white px-4 py-3 hover:bg-[#20bd5a] transition-colors duration-200"
            >
              Start Conversation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors duration-200"
            style={{ boxShadow: '0 4px 24px rgba(37,211,102,0.3)' }}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} className="text-white" fill="white" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
