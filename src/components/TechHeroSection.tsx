import { useState, useEffect } from "react";
import { Play, Rocket, Code2, Zap, Database, Cpu, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TechHeroSectionProps {
  onDemoClick: () => void;
}

export function TechHeroSection({ onDemoClick }: TechHeroSectionProps) {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const techTexts = [
    "ecosistema deportivo",
    "plataforma inteligente",
    "futuro del deporte",
    "tecnología avanzada"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % techTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full border border-sport-primary/30 shadow-glow-primary">
              <Rocket className="w-5 h-5 text-sport-primary animate-bounce-slow" />
              <span className="font-semibold text-sport-primary">Futuro del Deporte Digital 2.0</span>
              <div className="w-2 h-2 bg-sport-accent rounded-full animate-tech-pulse" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-sport-text-primary">Revoluciona tu</span>
              <span className="block bg-gradient-tech-hero bg-clip-text text-transparent animate-tech-glow">
                {techTexts[currentText]}
              </span>
              <span className="block text-sport-text-primary">con IA avanzada</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-sport-text-secondary max-w-2xl leading-relaxed">
              Conecta <span className="text-sport-primary font-semibold">deportistas</span>, 
              <span className="text-sport-accent font-semibold"> academias</span>, 
              <span className="text-sport-highlight font-semibold"> marcas</span> y 
              <span className="text-sport-info font-semibold"> profesionales</span> en la plataforma más avanzada del ecosistema deportivo.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={onDemoClick}
                size="lg"
                className="bg-gradient-tech-primary hover:shadow-glow-primary text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
              >
                <Play className="w-6 h-6 mr-3 group-hover:animate-bounce-slow" />
                Demo Interactivo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-effect border-tech-glow hover:bg-sport-primary/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Code2 className="w-6 h-6 mr-3" />
                API Documentation
              </Button>
            </div>

            {/* Tech Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { label: "API Calls/min", value: "50K+", icon: Database },
                { label: "ML Models", value: "15+", icon: Cpu },
                { label: "Data Points", value: "∞", icon: Network }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <stat.icon className="w-8 h-8 mx-auto text-sport-primary mb-2 group-hover:animate-bounce-slow transition-all duration-300" />
                  <div className="text-2xl font-bold text-sport-primary">{stat.value}</div>
                  <div className="text-sm text-sport-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Tech Visualization */}
          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Main Tech Console */}
            <div className="glass-effect rounded-3xl p-8 border border-sport-primary/20 shadow-tech-xl hover:shadow-glow-primary transition-all duration-500 group">
              {/* Console Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-sport-border/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-sport-highlight rounded-full animate-tech-pulse" />
                  <div className="w-3 h-3 bg-sport-warning rounded-full animate-tech-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-3 h-3 bg-sport-success rounded-full animate-tech-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-sport-primary animate-bounce-slow" />
                  <span className="text-sm font-mono text-sport-text-muted">sportmaps.ai/terminal</span>
                </div>
              </div>
              
              {/* Tech Commands */}
              <div className="font-mono text-sm space-y-3 text-sport-text-secondary">
                <div className="flex items-center gap-2">
                  <span className="text-sport-success">$</span>
                  <span className="text-sport-primary">npm install @sportmaps/ai-engine</span>
                  <div className="w-2 h-4 bg-sport-primary animate-tech-pulse ml-auto" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sport-accent">POST</span>
                  <span>/api/athletes/analytics</span>
                  <span className="text-sport-success ml-auto">200 OK</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sport-info">GET</span>
                  <span>/api/schools/recommendations</span>
                  <span className="text-sport-success ml-auto">Live</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sport-warning">PUT</span>
                  <span>/api/nutrition/ai-plans</span>
                  <span className="text-sport-primary ml-auto">AI Processing...</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sport-highlight">WSS</span>
                  <span>/realtime/matches</span>
                  <span className="text-sport-accent ml-auto">Connected</span>
                </div>
                <div className="text-sport-text-muted pt-4 border-t border-sport-border/20">
                  <span className="text-sport-accent">// </span>
                  Conectando el futuro del deporte digital...
                </div>
              </div>
            </div>
            
            {/* Floating Tech Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-tech-glow rounded-2xl blur-xl animate-float opacity-60" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-sport-accent/20 rounded-full blur-2xl animate-pulse-slow" />
            <div className="absolute top-1/2 -right-4 w-16 h-16 border-2 border-sport-primary/30 rounded-lg rotate-45 animate-bounce-slow" />
            
            {/* Data Flow Lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-20 bg-gradient-to-b from-sport-primary/50 to-transparent animate-data-flow"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 20}%`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}