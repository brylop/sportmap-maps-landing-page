import { Play, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onDemoClick: () => void;
}

export function HeroSection({ onDemoClick }: HeroSectionProps) {
  return (
    <section className="bg-gradient-hero text-white p-16 rounded-3xl mb-8 text-center shadow-elegant">
      <div className="container mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full font-bold mb-6">
          <Rocket className="w-4 h-4" />
          <span>Futuro del Deporte Digital</span>
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
          SportMaps: Ecosistema Deportivo Integral
        </h1>
        
        <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Conectamos deportistas, escuelas, marcas y profesionales en una plataforma única.
        </p>
        
        <Button
          onClick={onDemoClick}
          size="lg"
          variant="secondary"
          className="bg-white text-sport-primary hover:bg-white/90 px-8 py-4 text-lg font-bold rounded-full"
        >
          <Play className="w-5 h-5 mr-2" />
          Explorar Demo Interactivo
        </Button>
      </div>
    </section>
  );
}