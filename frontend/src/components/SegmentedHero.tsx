import { useState, useEffect } from "react";
import {
  Rocket,
  Zap,
  ArrowDown,
  GraduationCap,
  Dumbbell,
  Users,
  ShoppingBag,
  Building2,
  Handshake,
  MapPin,
  Route,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface SegmentedHeroProps {
  onScrollToMap: () => void;
}

const roles = [
  {
    id: "escuelas",
    label: "Crecer sin límites",
    icon: GraduationCap,
    description: "Tu academia, imparable",
    path: "/escuelas",
    color: "from-sport-primary to-sport-primary/80",
    cta: "Descubrir"
  },
  {
    id: "entrenadores",
    label: "Vivir del deporte",
    icon: Dumbbell,
    description: "Más clientes, más libertad",
    path: "/entrenadores",
    color: "from-sport-accent to-sport-accent/80",
    cta: "Comenzar"
  },
  {
    id: "deportistas",
    label: "Alcanzar tu meta",
    icon: Users,
    description: "El coach perfecto te espera",
    path: "/deportistas",
    color: "from-sport-info to-sport-info/80",
    cta: "Explorar"
  },
  {
    id: "eventos",
    label: "Eventos épicos",
    icon: Calendar,
    description: "Cero estrés, puro éxito",
    path: "/eventos",
    color: "from-rose-500 to-rose-600",
    cta: "Crear"
  },
  {
    id: "marcas",
    label: "Conectar con atletas",
    icon: Handshake,
    description: "Patrocinios que funcionan",
    path: "/marcas",
    color: "from-sport-highlight to-sport-highlight/80",
    cta: "Conectar"
  },
  {
    id: "proveedores",
    label: "Vender más",
    icon: ShoppingBag,
    description: "Tu catálogo, visible",
    path: "/proveedores",
    color: "from-sport-success to-sport-success/80",
    cta: "Empezar"
  },
  {
    id: "federaciones",
    label: "Liderar el deporte",
    icon: Building2,
    description: "Datos que impulsan",
    path: "/federaciones",
    color: "from-sport-warning to-sport-warning/80",
    cta: "Descubrir"
  }
];

export function SegmentedHero({ onScrollToMap }: SegmentedHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-10 md:py-14 overflow-hidden bg-gradient-to-b from-background via-background to-sport-surface/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sport-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-sport-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sport-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className={`text-center max-w-5xl mx-auto space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Badge - Exclusivity Focus */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-effect px-5 py-2.5 rounded-full border border-sport-primary/40 hover:border-sport-primary/60 transition-all duration-300 hover:shadow-glow-primary"
          >
            <Rocket className="w-4 h-4 text-sport-primary animate-pulse-slow" />
            <span className="text-sm font-semibold bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
              Únete a la Élite Deportiva
            </span>
            <Zap className="w-4 h-4 text-sport-accent" />
          </motion.div>

          {/* Main Title - Aspirational & Concise */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-foreground">Tu academia, </span>
            <span className="bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
              imparable
            </span>
          </motion.h1>

          {/* Subtitle - Minimal & Emotional */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-sport-text-secondary max-w-2xl mx-auto font-light"
          >
            Crece mientras duermes
          </motion.p>

          {/* Visual Pulse Indicator - Replace Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center gap-3 py-4"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-sport-primary animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-sport-primary animate-ping opacity-75" />
              </div>
              <span className="text-sm text-sport-text-secondary font-medium">
                Comunidad en vivo
              </span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-sport-border" />
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-sport-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-sport-accent animate-ping opacity-75" style={{ animationDelay: '0.5s' }} />
              </div>
              <span className="text-sm text-sport-text-secondary font-medium">
                Creciendo cada día
              </span>
            </div>
          </motion.div>

          {/* Explore CTA - More Aspirational */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2"
          >
            <Button
              onClick={onScrollToMap}
              size="lg"
              className="bg-gradient-to-r from-sport-primary to-sport-accent hover:shadow-glow-accent text-white px-10 py-7 text-lg font-bold rounded-full group relative overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Descubre tu Futuro
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-sport-accent to-sport-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>

          {/* Segmentation Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="pt-8 border-t border-sport-border/50 mt-8"
          >
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-6">
              ¿Qué quieres hacer en SportMaps?
            </h2>

            {/* Role Buttons Grid - Enhanced Visual Appeal */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
              {roles.map((role, index) => (
                <motion.button
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  onClick={() => navigate(role.path)}
                  className="group relative flex flex-col items-center p-5 rounded-2xl bg-sport-card border border-sport-border hover:border-sport-primary/60 hover:shadow-xl hover:shadow-sport-primary/20 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sport-primary/5 to-sport-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-3 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <role.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="relative z-10 text-sm font-semibold text-foreground text-center leading-tight mb-1 group-hover:text-sport-primary transition-colors duration-300">
                    {role.label}
                  </span>
                  <span className="relative z-10 text-xs text-sport-text-secondary text-center hidden md:block group-hover:text-sport-accent transition-colors duration-300 font-medium">
                    {role.description}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
