import { useState } from "react";
import { MapPin, Rocket, ArrowDown, Play, School, Route, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SportMap } from "./SportMap";

interface MapHeroSectionProps {
  onDemoClick: () => void;
  onRegisterClick: () => void;
}

export function MapHeroSection({ onDemoClick, onRegisterClick }: MapHeroSectionProps) {
  const [isMapVisible, setIsMapVisible] = useState(true);

  const scrollToMap = () => {
    const mapSection = document.getElementById('mapa-interactivo');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Compact Hero Header */}
      <div className="container mx-auto px-4 pt-8 pb-6">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sport-primary/10 px-4 py-2 rounded-full border border-sport-primary/30">
            <MapPin className="w-4 h-4 text-sport-primary animate-pulse" />
            <span className="text-sm font-medium text-sport-primary">El Mapa Vivo del Deporte</span>
            <div className="w-2 h-2 bg-sport-primary rounded-full animate-ping" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-foreground">Descubre, gestiona y </span>
            <span className="bg-gradient-to-r from-sport-primary via-sport-accent to-sport-highlight bg-clip-text text-transparent">
              monetiza
            </span>
            <br />
            <span className="text-foreground">el ecosistema deportivo</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra academias, canchas, entrenadores y rutas deportivas en un solo lugar. 
            El futuro del deporte empieza en el mapa.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 py-4">
            {[
              { icon: School, value: '50+', label: 'Academias', color: 'text-sport-primary' },
              { icon: Route, value: '200+', label: 'Rutas', color: 'text-sport-accent' },
              { icon: Users, value: '5K+', label: 'Deportistas', color: 'text-sport-highlight' },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="font-bold text-foreground">{stat.value}</span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              onClick={scrollToMap}
              size="lg"
              className="bg-gradient-to-r from-sport-primary to-sport-accent hover:opacity-90 text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Explorar el Mapa
            </Button>
            <Button
              onClick={onRegisterClick}
              variant="outline"
              size="lg"
              className="border-sport-primary/30 hover:bg-sport-primary/10 px-8 py-3 text-lg font-semibold rounded-full transition-all hover:scale-105"
            >
              <School className="w-5 h-5 mr-2" />
              Registrar mi Academia
            </Button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div id="mapa-interactivo" className="container mx-auto px-4 pb-8">
        <div className="relative">
          {/* Map Title Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-sport-primary rounded-full animate-pulse" />
              <h2 className="text-xl font-bold">Mapa en Tiempo Real - Bogotá</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>Actualizado hace 2 min</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Interactive Map */}
          <SportMap onRegisterClick={onRegisterClick} />

          {/* Scroll indicator */}
          <div className="flex justify-center mt-6">
            <button 
              onClick={onDemoClick}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-sm">Ver cómo funciona el ecosistema</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-sport-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}