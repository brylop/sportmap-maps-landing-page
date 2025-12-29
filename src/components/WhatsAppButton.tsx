import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  const phoneNumber = '573128463555';
  const message = encodeURIComponent('Hola, me interesa conocer más sobre SportMaps');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300"
      initial={{ scale: 0, opacity: 0, y: 100, rotate: -180 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        y: 0, 
        rotate: 0,
      }}
      transition={{ 
        delay: 0.8, 
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
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" fill="currentColor" />
      
      {/* Pulse ring animation */}
      <motion.span 
        className="absolute w-full h-full rounded-full bg-[#25D366]"
        initial={{ scale: 1, opacity: 0.4 }}
        animate={{ 
          scale: [1, 1.4, 1.8],
          opacity: [0.4, 0.2, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
      
      {/* Second pulse ring for extra effect */}
      <motion.span 
        className="absolute w-full h-full rounded-full bg-[#25D366]"
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{ 
          scale: [1, 1.6, 2.2],
          opacity: [0.3, 0.15, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5
        }}
      />
    </motion.a>
  );
}

export default WhatsAppButton;
