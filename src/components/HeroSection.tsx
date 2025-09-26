import { Play, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onDemoClick: () => void;
}

export function HeroSection({ onDemoClick }: HeroSectionProps) {
  return (
    <section className="bg-gradient-hero text-white p-4 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 text-center shadow-elegant">
      <div className="container mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold mb-4 sm:mb-6 text-sm sm:text-base">
          <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Futuro del Deporte Digital</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight px-2">
          SportMaps: Ecosistema Deportivo Integral
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto px-4">
          Conectamos deportistas, escuelas, marcas y profesionales en una plataforma única.
        </p>
        
        <Button
          onClick={onDemoClick}
          size="lg"
          variant="secondary"
          className="bg-white text-sport-primary hover:bg-white/90 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-full w-full sm:w-auto"
        >
          <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          <span className="hidden sm:inline">Explorar Demo Interactivo</span>
          <span className="sm:hidden">Ver Demo</span>
        </Button>
      </div>
    </section>
  );
}