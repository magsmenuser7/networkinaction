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
            className="bg-[#141414] border border-[#252525] p-4 max-w-[260px] shadow-xl"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="text-xs font-light text-[#f07723] tracking-wider uppercase">NIA Guntur</p>
              <button onClick={handleDismiss} className="text-[#666666] hover:text-white transition-colors shrink-0">
                <X size={14} />
              </button>
            </div>
            <p className="text-sm font-light text-white mb-1">Thinking about joining?</p>
            <p className="text-xs font-light text-[#888888] mb-4 leading-relaxed">
              Chat with us on WhatsApp. We review every inquiry personally.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs font-semibold tracking-widest uppercase bg-[#25D366] text-white px-4 py-3 hover:bg-[#20bd5a] transition-colors duration-200"
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
            className="w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors duration-200"
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
