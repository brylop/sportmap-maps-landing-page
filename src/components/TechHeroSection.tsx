import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles,
  BarChart3, 
  Users, 
  DollarSign, 
  Calendar,
  TrendingUp
} from "lucide-react";
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
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const textVariants = {
    enter: { 
      opacity: 0, 
      y: 20,
      filter: "blur(8px)"
    },
    center: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      filter: "blur(8px)",
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm gradient orb - top right */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-sport-primary/5 rounded-full blur-3xl" />
        {/* Orange gradient orb - bottom left */}
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-sport-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Content - Anthropic/OpenAI Style */}
          <motion.div 
            className="text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Subtle Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sport-surface border border-sport-border text-sm text-sport-text-secondary">
                <Sparkles className="w-4 h-4 text-sport-primary" />
                <span>La nueva era del deporte digital</span>
              </div>
            </motion.div>
            
            {/* Main Title - Large, Clean Typography */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="block text-foreground">Digitaliza tu</span>
                <span className="relative block h-[1.15em] overflow-hidden">
                  <motion.span
                    key={currentText}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent"
                  >
                    {techTexts[currentText]}
                  </motion.span>
                </span>
                <span className="block text-foreground">con tecnología IA</span>
              </h1>
            </motion.div>
            
            {/* Subtitle - Refined */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-sport-text-secondary leading-relaxed max-w-xl"
            >
              Conecta deportistas, academias, marcas y profesionales en la plataforma más avanzada del ecosistema deportivo latinoamericano.
            </motion.p>
            
            {/* CTA Buttons - Clean, Minimal */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Button
                onClick={onDemoClick}
                size="lg"
                className="group bg-foreground hover:bg-foreground/90 text-background px-8 py-6 text-base font-semibold rounded-full transition-all duration-500 hover:scale-[1.02] hover:shadow-tech-lg"
              >
                Comenzar ahora
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => window.open('https://docs.sportmaps.co', '_blank')} 
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-full border-sport-border hover:bg-sport-surface hover:border-sport-primary/30 transition-all duration-500"
              >
                Ver documentación
              </Button>
            </motion.div>

            {/* Stats Row - Minimal */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 border-t border-sport-border/50"
            >
              {[
                { label: "Usuarios activos", value: "10K+" },
                { label: "Academias", value: "500+" },
                { label: "Países", value: "12" }
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-sport-text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-card border border-sport-border rounded-3xl p-6 shadow-tech-lg hover:shadow-tech-xl transition-all duration-500">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-sport-border/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-sport-primary/10">
                    <BarChart3 className="w-5 h-5 text-sport-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Panel Director</h3>
                    <p className="text-xs text-sport-text-muted">Vista en tiempo real</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-sport-success/10">
                  <div className="w-2 h-2 bg-sport-success rounded-full animate-pulse" />
                  <span className="text-xs text-sport-success font-medium">En vivo</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Revenue Card */}
                <div className="bg-sport-surface/50 p-4 rounded-2xl border border-sport-border/50 hover:border-sport-success/30 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2 rounded-lg bg-sport-success/10">
                      <DollarSign className="w-4 h-4 text-sport-success" />
                    </div>
                    <div className="flex items-center gap-1 text-sport-success text-xs font-medium">
                      <TrendingUp className="w-3 h-3" />
                      +12%
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">$4.2M</div>
                  <div className="text-xs text-sport-text-muted mt-1">Ingresos del mes</div>
                </div>

                {/* Students Card */}
                <div className="bg-sport-surface/50 p-4 rounded-2xl border border-sport-border/50 hover:border-sport-primary/30 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2 rounded-lg bg-sport-primary/10">
                      <Users className="w-4 h-4 text-sport-primary" />
                    </div>
                    <div className="flex items-center gap-1 text-sport-primary text-xs font-medium">
                      <TrendingUp className="w-3 h-3" />
                      +24
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">1,240</div>
                  <div className="text-xs text-sport-text-muted mt-1">Estudiantes activos</div>
                </div>
              </div>

              {/* Activity Section */}
              <div className="bg-sport-surface/50 p-4 rounded-2xl border border-sport-border/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sport-accent" />
                    <span className="text-xs text-sport-text-secondary font-medium">Clases de hoy</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">8/12</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-sport-border/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-sport-primary via-sport-accent to-sport-highlight rounded-full"
                    style={{ width: '66%' }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-sport-text-muted">
                  <span>08:00</span>
                  <span>20:00</span>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mt-4 space-y-2">
                {[
                  { text: "Nuevo registro: Academia Elite FC", time: "Hace 2m", color: "sport-primary" },
                  { text: "Pago recibido: Plan Anual Pro", time: "Hace 15m", color: "sport-success" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-xs p-3 rounded-xl bg-sport-surface/30 hover:bg-sport-surface/60 transition-colors duration-300"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${item.color} ${index === 0 ? 'animate-pulse' : ''}`} />
                    <span className="text-sport-text-secondary flex-1">{item.text}</span>
                    <span className="text-sport-text-muted">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 rounded-3xl blur-2xl animate-float-slow" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sport-accent/10 rounded-full blur-xl animate-pulse-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}