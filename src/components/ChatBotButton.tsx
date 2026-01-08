import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChatBotModal } from '@/components/modals/ChatBotModal';

export function ChatBotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-24 z-50 flex items-center justify-center w-16 h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-2xl hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
        initial={{ scale: 0, opacity: 0, y: 100, rotate: -180 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          rotate: 0,
        }}
        transition={{ 
          delay: 1, 
          type: 'spring', 
          stiffness: 200, 
          damping: 12,
          mass: 0.8
        }}
        whileHover={{ 
          scale: 1.15,
          rotate: [0, -10, 10, -10, 0],
          transition: { 
            rotate: { duration: 0.5, ease: "easeInOut" }
          }
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="Abrir chat de ayuda"
      >
        <Bot className="w-8 h-8" />
        
        {/* Pulse ring animation */}
        <motion.span 
          className="absolute w-full h-full rounded-full bg-primary"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ 
            scale: [1, 1.4, 1.8],
            opacity: [0.4, 0.2, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.3
          }}
        />
        
        {/* Second pulse ring for extra effect */}
        <motion.span 
          className="absolute w-full h-full rounded-full bg-primary"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{ 
            scale: [1, 1.6, 2.2],
            opacity: [0.3, 0.15, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.8
          }}
        />
      </motion.button>

      <ChatBotModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default ChatBotButton;
