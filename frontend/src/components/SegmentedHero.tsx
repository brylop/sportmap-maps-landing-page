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
  Route
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
    label: "Gestionar mi Academia",
    icon: GraduationCap,
    description: "Software completo para tu escuela",
    path: "/escuelas",
    color: "from-sport-primary to-sport-primary/80",
    cta: "Ver Demo"
  },
  {
    id: "entrenadores",
    label: "Entrenar Clientes",
    icon: Dumbbell,
    description: "Consigue más clientes",
    path: "/entrenadores",
    color: "from-sport-accent to-sport-accent/80",
    cta: "Crear Perfil"
  },
  {
    id: "deportistas",
    label: "Encontrar Entrenador",
    icon: Users,
    description: "Busca el coach ideal",
    path: "/deportistas",
    color: "from-sport-info to-sport-info/80",
    cta: "Buscar"
  },
  {
    id: "eventos",
    label: "Organizar Eventos",
    icon: Calendar,
    description: "Sin caos, sin mensajes",
    path: "/eventos",
    color: "from-sport-error to-sport-error/80",
    cta: "Crear Evento"
  },
  {
    id: "marcas",
    label: "Patrocinar Atletas",
    icon: Handshake,
    description: "IA que conecta marcas",
    path: "/marcas",
    color: "from-sport-highlight to-sport-highlight/80",
    cta: "SponsorMatch"
  },
  {
    id: "proveedores",
    label: "Vender Productos",
    icon: ShoppingBag,
    description: "Catálogo B2B deportivo",
    path: "/proveedores",
    color: "from-sport-success to-sport-success/80",
    cta: "Registrar"
  },
  {
    id: "federaciones",
    label: "Gestionar Federación",
    icon: Building2,
    description: "Datos y afiliados",
    path: "/federaciones",
    color: "from-sport-warning to-sport-warning/80",
    cta: "Consultar"
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
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full border border-sport-primary/30"
          >
            <Rocket className="w-4 h-4 text-sport-primary" />
            <span className="text-sm font-medium text-sport-primary">Ecosistema Deportivo #1 de Colombia</span>
            <Zap className="w-4 h-4 text-sport-accent" />
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-foreground">El </span>
            <span className="bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
              mapa vivo del deporte
            </span>
            <span className="text-foreground"> en Colombia</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-sport-text-secondary max-w-3xl mx-auto"
          >
            Conecta, gestiona y monetiza tu presencia deportiva en una sola plataforma.
          </motion.p>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base text-sport-text-secondary"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sport-primary" />
              <span><strong className="text-foreground">17+</strong> Academias</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-sport-border" />
            <div className="flex items-center gap-2">
              <Route className="w-4 h-4 text-sport-accent" />
              <span><strong className="text-foreground">13+</strong> Rutas</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-sport-border" />
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-sport-info" />
              <span><strong className="text-foreground">9+</strong> Entrenadores</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-sport-border" />
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sport-highlight" />
              <span><strong className="text-foreground">6</strong> Ciudades</span>
            </div>
          </motion.div>

          {/* Explore Map CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2"
          >
            <Button
              onClick={onScrollToMap}
              size="lg"
              className="bg-gradient-to-r from-sport-primary to-sport-accent hover:shadow-glow-accent text-white px-8 py-6 text-lg font-bold rounded-full group"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Explorar el Mapa
              <ArrowDown className="w-5 h-5 ml-2 group-hover:animate-bounce" />
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
            
            {/* Role Buttons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {roles.map((role, index) => (
                <motion.button
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  onClick={() => navigate(role.path)}
                  className="group relative flex flex-col items-center p-4 rounded-2xl bg-sport-card border border-sport-border hover:border-sport-primary/50 hover:shadow-lg hover:shadow-sport-primary/10 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <role.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center leading-tight">
                    {role.label}
                  </span>
                  <span className="text-xs text-sport-text-secondary mt-1 text-center hidden md:block">
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
