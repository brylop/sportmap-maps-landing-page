import { useEffect, useState } from "react";

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
}

interface DynamicBackgroundProps {
  variant?: "primary" | "secondary" | "accent" | "wellness" | "nutrition";
  intensity?: "light" | "medium" | "strong";
  animated?: boolean;
}

export function DynamicBackground({ 
  variant = "primary", 
  intensity = "light",
  animated = true 
}: DynamicBackgroundProps) {
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  useEffect(() => {
    if (!animated) return;

    const colors = {
      primary: ["rgba(11, 83, 148, 0.1)", "rgba(34, 177, 76, 0.1)", "rgba(255, 111, 60, 0.1)"],
      secondary: ["rgba(34, 177, 76, 0.1)", "rgba(245, 158, 11, 0.1)", "rgba(139, 92, 246, 0.1)"],
      accent: ["rgba(34, 177, 76, 0.15)", "rgba(11, 83, 148, 0.1)", "rgba(255, 111, 60, 0.05)"],
      wellness: ["rgba(139, 92, 246, 0.1)", "rgba(34, 177, 76, 0.1)", "rgba(11, 83, 148, 0.05)"],
      nutrition: ["rgba(245, 158, 11, 0.1)", "rgba(255, 111, 60, 0.1)", "rgba(34, 177, 76, 0.05)"]
    };

    const particleCount = intensity === "light" ? 15 : intensity === "medium" ? 25 : 35;
    
    const newParticles: FloatingParticle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      speed: Math.random() * 2 + 1,
      color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
      opacity: Math.random() * 0.6 + 0.2
    }));

    setParticles(newParticles);
  }, [variant, intensity, animated]);

  const getGradientClasses = () => {
    const gradients = {
      primary: "bg-gradient-to-br from-slate-900 via-sport-primary/20 to-slate-800/50",
      secondary: "bg-gradient-to-br from-sport-background via-white to-sport-accent/5",
      accent: "bg-gradient-to-br from-sport-accent/5 via-white to-sport-primary/10",
      wellness: "bg-gradient-to-br from-sport-wellness/5 via-sport-background to-white",
      nutrition: "bg-gradient-to-br from-sport-nutrition/5 via-white to-sport-highlight/5"
    };
    return gradients[variant];
  };

  return (
    <div className={`absolute inset-0 ${getGradientClasses()} overflow-hidden`}>
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.02)_50%,transparent_65%)] bg-[length:40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_35%,rgba(255,255,255,.01)_50%,transparent_65%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Floating Particles */}
      {animated && particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            animation: `float-up-down ${10 + particle.speed * 5}s ease-in-out infinite`,
            animationDelay: `${particle.id * 0.5}s`
          }}
        />
      ))}
    </div>
  );
}