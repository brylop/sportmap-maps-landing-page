import { useEffect, useState } from "react";

export function TechBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
    }));
    setParticles(newParticles);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getOpacity = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollY / maxScroll;
    return Math.max(0.1, 1 - (scrollPercentage * 0.7));
  };

  const getGradientIntensity = () => {
    const scrollPercentage = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    if (scrollPercentage < 0.2) {
      return "from-sport-primary via-sport-secondary to-sport-accent";
    } else if (scrollPercentage < 0.4) {
      return "from-sport-primary/80 via-sport-secondary/70 to-sport-accent/60";
    } else if (scrollPercentage < 0.6) {
      return "from-sport-primary/60 via-sport-secondary/50 to-sport-accent/40";
    } else if (scrollPercentage < 0.8) {
      return "from-sport-primary/40 via-sport-secondary/30 to-sport-accent/20";
    } else {
      return "from-sport-primary/20 via-sport-secondary/15 to-sport-accent/10";
    }
  };

  return (
    <>
      {/* Main Tech Background */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br ${getGradientIntensity()} transition-all duration-500 ease-out`}
        style={{ 
          opacity: getOpacity(),
          zIndex: -3
        }}
      />
      
      {/* Animated Grid Pattern */}
      <div 
        className="fixed inset-0 opacity-30 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: getOpacity() * 0.3,
          zIndex: -2
        }}
      />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${particle.speed + 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute w-px h-32 bg-gradient-to-b from-sport-accent/50 to-transparent animate-matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Geometric Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -2 }}>
        <div className="absolute top-20 left-20 w-32 h-32 border border-sport-primary/20 rotate-45 animate-bounce-slow" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-sport-accent/10 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-32 left-40 w-40 h-40 border-2 border-sport-highlight/15 rounded-lg rotate-12 animate-float" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-tech-glow rounded-full animate-tech-pulse" />
      </div>
    </>
  );
}