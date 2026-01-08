import { useState, useEffect } from "react";
import { 
  Rocket, 
  Zap, 
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompactHeroProps {
  onScrollToMap: () => void;
}

export function CompactHero({ onScrollToMap }: CompactHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-background to-sport-surface/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sport-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-sport-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className={`text-center max-w-4xl mx-auto space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-sport-primary/30">
            <Rocket className="w-4 h-4 text-sport-primary" />
            <span className="text-sm font-medium text-sport-primary">Plataforma #1 del Ecosistema Deportivo</span>
            <Zap className="w-4 h-4 text-sport-accent" />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-foreground">SportMaps es el </span>
            <span className="bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
              mapa vivo del deporte
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-sport-text-secondary max-w-2xl mx-auto">
            Descubre, gestiona y monetiza el ecosistema deportivo desde un solo lugar. 
            Academias, canchas, entrenadores y rutas en toda Colombia.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Button
              onClick={onScrollToMap}
              size="lg"
              className="bg-gradient-to-r from-sport-primary to-sport-accent hover:shadow-glow-accent text-white px-8 py-6 text-lg font-bold rounded-full group"
            >
              Explorar el Mapa
              <ArrowDown className="w-5 h-5 ml-2 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
