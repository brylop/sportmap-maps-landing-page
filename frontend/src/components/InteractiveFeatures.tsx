import { motion, AnimatePresence } from "framer-motion";
import { 
  School, User, Dumbbell, Briefcase, Flag, Package, Activity,
  CheckCircle2, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Nuevas props para recibir el estado desde el padre
interface InteractiveFeaturesProps {
  onPricingClick: () => void;
  selectedClient: string;
  setSelectedClient: (client: string) => void;
}

export function InteractiveFeatures({ onPricingClick, selectedClient, setSelectedClient }: InteractiveFeaturesProps) {
  
  const personas = [
    { id: "escuelas", label: "Escuelas", icon: School, color: "text-sport-primary", bg: "bg-sport-primary/10", activeColor: "border-sport-primary" },
    { id: "entrenadores", label: "Entrenadores", icon: Dumbbell, color: "text-sport-accent", bg: "bg-sport-accent/10", activeColor: "border-sport-accent" },
    { id: "atletas", label: "Atletas", icon: User, color: "text-sport-primary", bg: "bg-sport-primary/10", activeColor: "border-sport-primary" },
    { id: "marcas", label: "Marcas", icon: Briefcase, color: "text-sport-accent", bg: "bg-sport-accent/10", activeColor: "border-sport-accent" },
    { id: "federaciones", label: "Federaciones", icon: Flag, color: "text-sport-primary", bg: "bg-sport-primary/10", activeColor: "border-sport-primary" },
    { id: "proveedores", label: "Proveedores", icon: Package, color: "text-sport-accent", bg: "bg-sport-accent/10", activeColor: "border-sport-accent" },
    { id: "servicios", label: "Servicios", icon: Activity, color: "text-sport-primary", bg: "bg-sport-primary/10", activeColor: "border-sport-primary" },
  ];

  const content: Record<string, { title: string; desc: string; benefits: string[] }> = {
    escuelas: {
      title: "Gestión Integral para Academias",
      desc: "Digitaliza tu escuela deportiva. Gestiona matrículas, cobros automáticos y comunicación con padres en una sola plataforma.",
      benefits: ["Cobros automáticos recurrentes", "Base de datos de alumnos unificada", "App móvil para padres y alumnos", "Tienda online para tus uniformes"]
    },
    entrenadores: {
      title: "Tu Negocio de Entrenamiento",
      desc: "Deja de usar Excel y WhatsApp. Profesionaliza tus servicios, agenda clases y recibe pagos sin fricción.",
      benefits: ["Agenda de clases online", "Pagos por clase o mensualidad", "Perfil profesional verificado", "Historial de progreso de atletas"]
    },
    atletas: {
      title: "Tu Pasaporte Deportivo",
      desc: "Encuentra dónde entrenar, compite y lleva tu historial deportivo contigo para siempre.",
      benefits: ["Encuentra escuelas y canchas cercanas", "Paga tus clases desde la app", "Historial de logros y estadísticas", "Descuentos en marcas aliadas"]
    },
    marcas: {
      title: "Conecta con tu Audiencia Real",
      desc: "Llega directamente a deportistas activos. Patrocina eventos o vende tus productos en nuestro marketplace segmentado.",
      benefits: ["Publicidad segmentada por deporte", "Venta directa en Marketplace", "Patrocinio de torneos y escuelas", "Analytics de audiencia real"]
    },
    federaciones: {
      title: "Control y Transparencia",
      desc: "Moderniza la gestión federativa. Rankings nacionales, licencias digitales y gestión de torneos oficiales.",
      benefits: ["Base de datos nacional de atletas", "Licencias y carnets digitales", "Gestión de torneos y rankings", "Comunicación oficial masiva"]
    },
    proveedores: {
      title: "Vende al Ecosistema",
      desc: "Ofrece tus productos (balones, uniformes, trofeos) directamente a las escuelas y organizadores que los necesitan.",
      benefits: ["Canal de venta B2B directo", "Pedidos por volumen", "Gestión de inventario", "Pagos seguros garantizados"]
    },
    servicios: {
      title: "Profesionales de la Salud",
      desc: "Fisioterapeutas, nutricionistas y psicólogos deportivos conectados con los atletas que requieren sus servicios.",
      benefits: ["Agenda de consultas integrada", "Historia clínica deportiva", "Referidos directos de escuelas", "Teleconsulta integrada"]
    }
  };

  // Usamos selectedClient en lugar de activeTab local
  const activeContent = content[selectedClient];
  const ActiveIcon = personas.find(p => p.id === selectedClient)?.icon || School;

  return (
    <section id="ecosistema" className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">Un Ecosistema</span>
            <span className="text-foreground"> para Todos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            SportMaps conecta a todos los actores del deporte. Selecciona tu perfil y descubre cómo te potenciamos.
          </p>
        </div>

        {/* Selector de personas con efecto neón */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto pb-4 px-2 no-scrollbar md:justify-center justify-start">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setSelectedClient(persona.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 whitespace-nowrap ${
                selectedClient === persona.id
                  ? `${persona.bg} ${persona.color} border-current glow-primary scale-105`
                  : "border-border bg-card text-muted-foreground hover:border-sport-primary/40 hover:text-foreground"
              }`}
            >
              <persona.icon className="w-4 h-4" />
              <span className="font-medium">{persona.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedClient}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <div className="card-premium p-8 md:p-12 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-64 h-64 ${personas.find(p => p.id === selectedClient)?.bg} blur-3xl rounded-full opacity-30 -z-10`} />

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${personas.find(p => p.id === selectedClient)?.bg} ${personas.find(p => p.id === selectedClient)?.color} w-fit`}>
                    <ActiveIcon className="w-4 h-4" />
                    <span className="capitalize">{selectedClient}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    {activeContent.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {activeContent.desc}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {activeContent.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-sport-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    {/* BOTÓN CTA - Gradiente Verde a Naranja con glow */}
                    <Button 
                      onClick={onPricingClick}
                      size="lg" 
                      className="bg-gradient-to-r from-sport-primary to-sport-accent text-white hover:glow-accent rounded-full px-8 font-bold transition-all hover:scale-105"
                    >
                      Ver Planes para {personas.find(p => p.id === selectedClient)?.label}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <div className="relative hidden md:block">
                   {/* Tarjeta Visual Derecha con borde neón verde */}
                   <div className="bg-card border border-sport-primary/30 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:glow-primary">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${personas.find(p => p.id === selectedClient)?.bg}`}>
                          <ActiveIcon className={`w-6 h-6 ${personas.find(p => p.id === selectedClient)?.color}`} />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Panel de Control</div>
                          <div className="font-bold text-foreground capitalize">{selectedClient}</div>
                        </div>
                      </div>
                      <div className="px-2 py-1 bg-sport-primary/20 text-sport-primary text-xs rounded-full border border-sport-primary/30 glow-primary">
                        Activo
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-24 bg-muted rounded-xl border border-border p-4 flex items-center justify-center">
                         <span className="text-muted-foreground text-sm">Estadísticas de {selectedClient}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="h-16 bg-muted rounded-xl border border-border animate-pulse-slow"></div>
                         <div className="h-16 bg-muted rounded-xl border border-border animate-pulse-slow" style={{animationDelay: "0.2s"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}