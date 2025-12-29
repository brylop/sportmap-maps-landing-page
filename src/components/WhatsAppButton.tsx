import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageMessages: Record<string, string> = {
  '/': 'Hola, me interesa conocer más sobre SportMaps',
  '/deportistas': 'Hola, soy deportista y me gustaría saber más sobre cómo SportMaps puede ayudarme',
  '/escuelas': 'Hola, tengo una escuela deportiva y quiero digitalizar mi gestión con SportMaps',
  '/entrenadores': 'Hola, soy entrenador y me interesa la plataforma SportMaps para gestionar mis atletas',
  '/bienestar': 'Hola, me interesa el módulo de bienestar y salud deportiva de SportMaps',
  '/equipamiento': 'Hola, quiero información sobre equipamiento deportivo en SportMaps',
  '/federaciones': 'Hola, represento una federación/liga y me interesa SportMaps para nuestra organización',
  '/planes': 'Hola, quiero conocer los planes y precios de SportMaps',
  '/marcas': 'Hola, tengo una marca deportiva y me interesa ser parte del marketplace de SportMaps',
  '/proveedores': 'Hola, soy proveedor y quiero registrarme en el ecosistema SportMaps',
  '/servicios': 'Hola, ofrezco servicios deportivos y me interesa unirme a SportMaps',
  '/partners': 'Hola, me interesa ser partner de SportMaps',
  '/blog': 'Hola, me gustaría saber más sobre SportMaps después de leer el blog',
  '/casos-exito': 'Hola, vi los casos de éxito y quiero que mi organización también crezca con SportMaps',
  '/ayuda': 'Hola, necesito ayuda con la plataforma SportMaps',
  '/sobre-nosotros': 'Hola, me gustaría conocer más sobre el equipo de SportMaps',
  '/privacidad': 'Hola, tengo consultas sobre la política de privacidad de SportMaps',
  '/terminos': 'Hola, tengo consultas sobre los términos y condiciones de SportMaps',
  '/tratamiento-datos': 'Hola, tengo consultas sobre el tratamiento de datos en SportMaps',
};

export function WhatsAppButton() {
  const location = useLocation();
  const phoneNumber = '573128463555';
  
  const getMessage = () => {
    const path = location.pathname;
    return pageMessages[path] || pageMessages['/'];
  };
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(getMessage())}`;

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
