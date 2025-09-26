import { Play, Rocket, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DynamicBackground } from "./DynamicBackground";
import { FloatingElements } from "./FloatingElements";

interface HeroSectionProps {
  onDemoClick: () => void;
}

export function HeroSection({ onDemoClick }: HeroSectionProps) {
  return (
    <section className="relative text-white overflow-hidden">
      <DynamicBackground variant="primary" intensity="strong" animated={true} />
      <FloatingElements />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sport-accent/20 px-4 py-2 rounded-full font-semibold mb-6 text-sm">
              <Rocket className="w-4 h-4" />
              <span>Futuro del Deporte Digital</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Automatiza y digitaliza tu
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sport-accent to-sport-highlight"> ecosistema deportivo</span> 
              con tecnología avanzada
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Conecta deportistas, escuelas, marcas y profesionales en una sola plataforma integral
            </p>
            
            <Button
              onClick={onDemoClick}
              size="lg"
              className="bg-sport-accent hover:bg-sport-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-glow"
            >
              <Play className="w-5 h-5 mr-2" />
              Solicita un demo
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-sport-accent" />
                <span className="text-sm font-mono text-white/60">api.sportmaps.com</span>
              </div>
              <div className="font-mono text-sm space-y-2 text-white/80">
                <div><span className="text-sport-highlight">POST</span> /api/athletes/register</div>
                <div><span className="text-sport-accent">GET</span> /api/schools/nearby</div>
                <div><span className="text-sport-wellness">PUT</span> /api/nutrition/plans</div>
                <div><span className="text-sport-nutrition">GET</span> /api/equipment/catalog</div>
                <div className="text-white/40">// Conectando el ecosistema deportivo...</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-sport-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sport-highlight/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}