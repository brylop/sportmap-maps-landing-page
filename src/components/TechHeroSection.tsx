import { useState, useEffect } from "react";
import { 
  Play, 
  Rocket, 
  Code2, 
  Zap, 
  Database, 
  Cpu, 
  Network, 
  BarChart3, 
  Users, 
  DollarSign, 
  Calendar 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ELIMINADO EL IMPORT QUE CAUSABA EL ERROR
// import { ApiAccessModal } from "@/components/modals/ApiAccessModal";

interface TechHeroSectionProps {
  onDemoClick: () => void;
}

export function TechHeroSection({ onDemoClick }: TechHeroSectionProps) {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // ELIMINADO EL ESTADO DEL MODAL FALTANTE
  // const [isApiAccessOpen, setIsApiAccessOpen] = useState(false);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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
                // HEMOS QUITADO LA LLAMADA AL MODAL QUE NO EXISTE
                onClick={() => window.open('https://docs.sportmaps.co', '_blank')} 
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

          {/* Right Tech Visualization - DASHBOARD */}
          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            
            {/* Main Dashboard Card */}
            <div className="glass-effect rounded-3xl p-6 border border-sport-primary/20 shadow-tech-xl hover:shadow-glow-primary transition-all duration-500 group relative z-10">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-sport-border/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sport-primary/10">
                    <BarChart3 className="w-5 h-5 text-sport-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Panel Director</h3>
                    <p className="text-xs text-sport-text-muted">Vista General - Tiempo Real</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-sport-success rounded-full animate-tech-pulse" />
                  <span className="text-xs text-sport-success font-mono">LIVE</span>
                </div>
              </div>

              {/* Dashboard Grid Content */}
              <div className="space-y-4">
                
                {/* Row 1: Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Card Ingresos */}
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-sport-success/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-1.5 rounded-md bg-sport-success/10">
                        <DollarSign className="w-4 h-4 text-sport-success" />
                      </div>
                      <span className="text-[10px] text-sport-success bg-sport-success/10 px-1.5 py-0.5 rounded">+12%</span>
                    </div>
                    <div className="text-2xl font-bold text-white">$4.2M</div>
                    <div className="text-xs text-sport-text-muted">Ingresos Mes</div>
                  </div>

                  {/* Card Alumnos */}
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-sport-primary/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-1.5 rounded-md bg-sport-primary/10">
                        <Users className="w-4 h-4 text-sport-primary" />
                      </div>
                      <span className="text-[10px] text-sport-primary bg-sport-primary/10 px-1.5 py-0.5 rounded">+24</span>
                    </div>
                    <div className="text-2xl font-bold text-white">1,240</div>
                    <div className="text-xs text-sport-text-muted">Estudiantes Activos</div>
                  </div>
                </div>

                {/* Row 2: Activity Graph Simulation */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-sport-accent" />
                      <span className="text-xs text-sport-text-secondary">Clases Hoy</span>
                    </div>
                    <span className="text-xs font-bold text-white">8/12 Completadas</span>
                  </div>
                  {/* Custom Progress Bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden flex">
                    <div className="h-full bg-sport-primary w-[30%]" />
                    <div className="h-full bg-sport-accent w-[20%]" />
                    <div className="h-full bg-sport-highlight w-[15%]" />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-sport-text-muted font-mono">
                    <span>08:00 AM</span>
                    <span>12:00 PM</span>
                    <span>04:00 PM</span>
                    <span>08:00 PM</span>
                  </div>
                </div>

                {/* Row 3: Recent Notifications (Simulated) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-3 text-xs p-2 hover:bg-white/5 rounded-lg transition-colors cursor-default">
                    <div className="w-2 h-2 rounded-full bg-sport-primary animate-pulse" />
                    <span className="text-sport-text-secondary flex-1">Nuevo registro: Academia Elite FC</span>
                    <span className="text-sport-text-muted">Hace 2m</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs p-2 hover:bg-white/5 rounded-lg transition-colors cursor-default">
                    <div className="w-2 h-2 rounded-full bg-sport-success" />
                    <span className="text-sport-text-secondary flex-1">Pago recibido: Plan Anual Pro</span>
                    <span className="text-sport-text-muted">Hace 15m</span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Floating Tech Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-tech-glow rounded-2xl blur-xl animate-float opacity-60" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-sport-accent/20 rounded-full blur-2xl animate-pulse-slow" />
            <div className="absolute top-1/2 -right-4 w-16 h-16 border-2 border-sport-primary/30 rounded-lg rotate-45 animate-bounce-slow" />
            
            {/* Data Flow Lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl z-0">
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

      {/* API Access Modal ELIMINADO POR AHORA PARA EVITAR ERROR */}
    </section>
  );
}