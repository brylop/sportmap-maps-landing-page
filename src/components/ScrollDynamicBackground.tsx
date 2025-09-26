import { useEffect, useState } from "react";

export function ScrollDynamicBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calcular opacidad basada en el scroll
      // Más scroll = más difuminado
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = currentScrollY / maxScroll;
      
      // Crear diferentes intensidades para diferentes secciones
      const newOpacity = Math.max(0.1, 1 - (scrollPercentage * 0.8));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Crear diferentes variaciones del degradado según la posición del scroll
  const getGradientIntensity = () => {
    const scrollPercentage = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    if (scrollPercentage < 0.2) {
      return "from-slate-900 via-sport-primary to-slate-800"; // Intenso al inicio
    } else if (scrollPercentage < 0.4) {
      return "from-slate-800 via-sport-primary/80 to-slate-700"; // Medio
    } else if (scrollPercentage < 0.6) {
      return "from-slate-700 via-sport-primary/60 to-slate-600"; // Suave
    } else if (scrollPercentage < 0.8) {
      return "from-slate-600 via-sport-primary/40 to-slate-500"; // Más suave
    } else {
      return "from-slate-500 via-sport-primary/20 to-slate-400"; // Muy suave al final
    }
  };

  return (
    <>
      {/* Fondo principal dinámico */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br ${getGradientIntensity()} transition-all duration-300 ease-out`}
        style={{ 
          opacity: opacity,
          zIndex: -1
        }}
      />
      
      {/* Patrón geométrico que también se difumina */}
      <div 
        className="fixed inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.05)_50%,transparent_65%)] bg-[length:20px_20px] transition-opacity duration-300"
        style={{ 
          opacity: opacity * 0.6,
          zIndex: -1
        }}
      />
      
      {/* Overlay sutil para transiciones suaves */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 transition-opacity duration-500"
        style={{ 
          opacity: 1 - opacity,
          zIndex: -1
        }}
      />
    </>
  );
}