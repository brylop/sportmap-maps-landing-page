import { useEffect, useState } from "react";
import { Code, Database, Zap, Globe, Shield, Cpu } from "lucide-react";

const techIcons = [Code, Database, Zap, Globe, Shield, Cpu];

interface FloatingIcon {
  id: number;
  Icon: any;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  duration: number;
  delay: number;
}

export function FloatingElements() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const newIcons: FloatingIcon[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      Icon: techIcons[i],
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }));
    
    setIcons(newIcons);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute opacity-5 text-white animate-pulse"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `scale(${icon.scale}) rotate(${icon.rotation}deg)`,
            animation: `spin ${icon.duration}s linear infinite, float-up-down ${icon.duration/2}s ease-in-out infinite`,
            animationDelay: `${icon.delay}s`
          }}
        >
          <icon.Icon size={40} />
        </div>
      ))}
    </div>
  );
}