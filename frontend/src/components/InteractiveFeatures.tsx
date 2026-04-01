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
    { id: "escuelas", label: "Academias", icon: School, color: "text-sport-primary", bg: "bg-sport-primary/10", activeColor: "border-sport-primary" },
    { id: "entrenadores", label: "Entrenadores", icon: Dumbbell, color: "text-sport-accent", bg: "bg-sport-accent/10", activeColor: "border-sport-accent" },
    { id: "atletas", label: "Atletas", icon: User, color: "text-sport-primary", bg: "bg-sport-primary/10", activeColor: "border-sport-primary" },
    { id: "marcas", label: "Marcas", icon: Briefcase, color: "text-sport-accent", bg: "bg-sport-accent/10", activeColor: "border-sport-accent" },
    { id: "federaciones", label: "Ligas/Fed.", icon: Flag, color: "text-sport-primary", bg: "bg-sport-primary/10", activeColor: "border-sport-primary" },
    { id: "proveedores", label: "Proveedores", icon: Package, color: "text-sport-accent", bg: "bg-sport-accent/10", activeColor: "border-sport-accent" },
    { id: "servicios", label: "Servicios", icon: Activity, color: "text-sport-primary", bg: "bg-sport-primary/10", activeColor: "border-sport-primary" },
  ];

  const content: Record<string, { title: string; desc: string; benefits: string[] }> = {
    escuelas: {
      title: "Gestión Integral para Academias",
      desc: "Digitaliza tu escuela deportiva y elimina la cartera morosa. Gestión de alumnos, cobros y cronogramas en tiempo real.",
      benefits: [
        "Ahorra hasta 10 horas semanales en admin",
        "Control total de asistencia con Carnet Digital",
        "Pagos recurrentes y control de mensualidades",
        "App exclusiva para padres e integrantes",
        "Cumplimiento Ley Deportiva garantizado"
      ]
    },
    entrenadores: {
      title: "Tu Negocio de Entrenamiento Pro",
      desc: "Deja de usar Excel y WhatsApp para tus clases. Profesionaliza tu marca personal y escala tus ingresos.",
      benefits: [
        "Agenda de clases 20% más eficiente",
        "Recibe pagos automáticos sin fricción",
        "Control de progreso técnico y físico",
        "Perfil verificado en el Mapa Deportivo",
        "Link de cobro directo para tus redes"
      ]
    },
    atletas: {
      title: "Tu Pasaporte Deportivo Digital",
      desc: "Encuentra dónde entrenar, compite y lleva tu historial deportivo contigo para siempre en tu móvil.",
      benefits: [
        "Carnet Digital con acceso a convenios",
        "Busca escuelas y canchas por ubicación",
        "Historial de estadísticas y competencias",
        "Pago de membresías desde la app",
        "Seguro deportivo digital integrado"
      ]
    },
    marcas: {
      title: "Conexión Directa con Deportistas",
      desc: "No pierdas presupuesto en ads genéricos. Llega a deportistas activos por ubicación y disciplina.",
      benefits: [
        "Segmentación por disciplina y región",
        "Patrocinio directo de eventos y ligas",
        "Marketplace especializado B2C/B2B",
        "Data real de consumo deportivo",
        "Retorno de inversión (ROI) medible"
      ]
    },
    federaciones: {
      title: "Control, Censo y Transparencia",
      desc: "Moderniza la gestión federativa con un censo nacional deportivo. Licencias oficiales y gestión de ligas.",
      benefits: [
        "Censo Nacional de Atletas en tiempo real",
        "Gestión de Licencias y Carnets Oficiales",
        "Sistematización de Torneos y Rankings",
        "Comunicación oficial masiva y segura",
        "Reportes de impacto para entes públicos"
      ]
    },
    proveedores: {
      title: "Suministro Directo al Ecosistema",
      desc: "Vende implementos y uniformes por volumen a quienes realmente los necesitan.",
      benefits: [
        "Canal B2B para escuelas y clubes",
        "Gestión de cotizaciones automática",
        "Logística y pagos integrados",
        "Catálogo digital segmentado",
        "Visibilidad ante +1000 compradores"
      ]
    },
    servicios: {
      title: "Equipos de Salud Especializados",
      desc: "Conecta como profesional de la salud con los atletas que requieren tu especialidad deportiva.",
      benefits: [
        "Agenda médica/técnica integrada",
        "Historia clínica deportiva unificada",
        "Referidos directos desde academias",
        "Teleconsulta y seguimiento remoto",
        "Perfil profesional destacado"
      ]
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

                    <div className="pt-6 flex flex-wrap gap-4">
                      {/* BOTÓN CTA - Gradiente Verde a Naranja con glow */}
                      <Button 
                        onClick={onPricingClick}
                        size="lg" 
                        className="bg-gradient-to-r from-sport-primary to-sport-accent text-white hover:glow-accent rounded-full px-8 font-bold transition-all hover:scale-105"
                      >
                        Ver Planes para {personas.find(p => p.id === selectedClient)?.label}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>

                      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          {selectedClient === 'escuelas' ? '+500 Alumnos Activos' : 
                           selectedClient === 'federaciones' ? '+50 Ligas Vinculadas' : 
                           '+1000 Usuarios'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative hidden md:block">
                    {/* Tarjeta Visual Derecha con borde neón verde */}
                    <div className="bg-card border border-sport-primary/30 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 hover:glow-primary bg-gradient-to-br from-card to-sport-primary/5">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${personas.find(p => p.id === selectedClient)?.bg}`}>
                            <ActiveIcon className={`w-6 h-6 ${personas.find(p => p.id === selectedClient)?.color}`} />
                          </div>
                          <div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Consola de Gestión</div>
                            <div className="font-bold text-foreground capitalize text-lg">{selectedClient}</div>
                          </div>
                        </div>
                        <div className="px-2 py-1 bg-sport-primary/20 text-sport-primary text-[10px] font-black rounded-full border border-sport-primary/30 glow-primary uppercase tracking-tighter">
                          Live Data
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-muted/30 rounded-xl border border-border p-4">
                           <div className="flex justify-between items-end mb-2">
                             <span className="text-[10px] text-muted-foreground font-bold uppercase">Crecimiento Mensual</span>
                             <span className="text-sport-primary font-bold text-sm">+24%</span>
                           </div>
                           <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                             <div className="h-full bg-sport-primary w-[75%] rounded-full shadow-[0_0_10px_rgba(var(--sport-primary),0.5)]"></div>
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                           <div className="bg-muted/30 rounded-xl border border-border p-3">
                             <div className="text-[10px] text-muted-foreground mb-1 uppercase font-bold">Actividad</div>
                             <div className="h-8 flex items-end gap-1">
                               {[40, 70, 45, 90, 65].map((h, i) => (
                                 <div key={i} className="flex-1 bg-sport-accent/40 rounded-t-sm" style={{height: `${h}%`}}></div>
                               ))}
                             </div>
                           </div>
                           <div className="bg-muted/30 rounded-xl border border-border p-3 flex flex-col justify-center">
                             <div className="text-[10px] text-muted-foreground mb-1 uppercase font-bold">Status</div>
                             <div className="text-xs font-bold text-foreground flex items-center gap-1">
                               <CheckCircle2 className="w-3 h-3 text-sport-primary" /> Verificado
                             </div>
                           </div>
                        </div>

                        <div className="p-3 bg-sport-primary/10 rounded-xl border border-sport-primary/20 text-[11px] text-sport-primary font-medium italic">
                          "La mejor herramienta para profesionalizar mi {selectedClient === 'escuelas' ? 'academia' : 'gestión'}."
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