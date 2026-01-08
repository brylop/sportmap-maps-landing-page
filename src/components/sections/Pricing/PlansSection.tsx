import { Check, Zap, Star, Shield, User, Briefcase, Building2, Dumbbell, Heart, Truck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PlansSectionProps {
  selectedClient: string;
  onPlanSelect?: (planName: string, category: string) => void;
}

export function PlansSection({ selectedClient, onPlanSelect }: PlansSectionProps) {
  const [isAnnual, setIsAnnual] = useState(true);
  const whatsappNumber = "573128463555"; 

  const handlePlanSelect = (planName: string) => {
    if (onPlanSelect) {
      onPlanSelect(planName, selectedClient);
    } else {
      const message = `Hola SportMaps, soy ${selectedClient} y estoy interesado en el plan *${planName}*.`;
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  // Precios unificados: Básico=Gratis, Pro=49k-89k, Premium/Enterprise=A medida
  const allPlans: Record<string, any[]> = {
    atletas: [
      { name: "Atleta ID", price: "Gratis", period: "", features: ["Historial deportivo digital", "Inscripción a eventos", "Perfil público verificado", "Acceso a rutas básicas"], cta: "Crear Perfil", popular: true, icon: User },
      { name: "Premium", price: isAnnual ? "$29k" : "$39k", period: "/mes", features: ["Todo en Atleta ID", "Estadísticas avanzadas", "Descuentos en marcas", "Video highlights", "Soporte prioritario"], cta: "Ser Premium", popular: false, icon: Star },
      { name: "Pro Career", price: "A medida", period: "", features: ["Todo en Premium", "Visibilidad scouts", "Agente digital", "Asesoría legal", "Conexión patrocinadores"], cta: "Cotizar", popular: false, icon: Shield }
    ],
    escuelas: [
      { name: "Start", price: "Gratis", period: "", features: ["Perfil público verificado", "Mapa con ubicación", "Hasta 10 alumnos", "Mensajes de contacto"], cta: "Empezar Gratis", popular: false, icon: Zap },
      { name: "Escuela Pro", price: isAnnual ? "$79k" : "$99k", period: "/mes", features: ["Todo en Start", "Pagos online", "Tienda uniformes", "App padres", "Alumnos ilimitados"], cta: "Ser Pro", popular: true, icon: Star },
      { name: "Elite Club", price: "A medida", period: "", features: ["Todo en Pro", "Múltiples sedes", "API integraciones", "Marca blanca", "Gerente dedicado"], cta: "Cotizar", popular: false, icon: Shield }
    ],
    entrenadores: [
      { name: "Coach Básico", price: "Gratis", period: "", features: ["Perfil verificado", "Recibir mensajes", "Hasta 5 clientes", "Directorio público"], cta: "Crear Perfil", popular: false, icon: Zap },
      { name: "Coach Pro", price: isAnnual ? "$49k" : "$69k", period: "/mes", features: ["Todo en Básico", "Agenda online", "Pagos integrados", "Rutinas digitales", "Clientes ilimitados"], cta: "Ser Pro", popular: true, icon: Dumbbell },
      { name: "Top Trainer", price: "A medida", period: "", features: ["Todo en Pro", "Web personal", "Marketing ads", "Soporte legal", "Seguro profesional"], cta: "Cotizar", popular: false, icon: Star }
    ],
    bienestar: [
      { name: "Profesional", price: "Gratis", period: "", features: ["Perfil verificado", "Directorio público", "Recibir consultas", "Hasta 10 clientes"], cta: "Registrarse", popular: false, icon: Zap },
      { name: "Centro Pro", price: isAnnual ? "$69k" : "$89k", period: "/mes", features: ["Todo en Profesional", "Agenda citas online", "Pagos integrados", "Fichas pacientes", "Clientes ilimitados"], cta: "Ser Pro", popular: true, icon: Heart },
      { name: "Clínica Elite", price: "A medida", period: "", features: ["Todo en Pro", "Múltiples profesionales", "Historia clínica", "Integraciones", "Marca blanca"], cta: "Cotizar", popular: false, icon: Shield }
    ],
    marcas: [
      { name: "Partner", price: "Gratis", period: "", features: ["Perfil de marca", "Listado directorio", "Página de productos", "Contacto directo"], cta: "Registrar Marca", popular: false, icon: Zap },
      { name: "Marketplace", price: isAnnual ? "$89k" : "$109k", period: "/mes", features: ["Todo en Partner", "Venta productos", "Pasarela pagos", "Logística envíos", "Analytics ventas"], cta: "Vender", popular: true, icon: Star },
      { name: "Sponsor", price: "A medida", period: "", features: ["Todo en Marketplace", "Ads segmentados", "Patrocinio eventos", "Banner principal", "Campañas custom"], cta: "Cotizar", popular: false, icon: Shield }
    ],
    federaciones: [
      { name: "Liga", price: "Gratis", period: "", features: ["Perfil verificado", "Gestión básica clubes", "Calendario eventos", "Hasta 10 clubes"], cta: "Registrar Liga", popular: false, icon: Zap },
      { name: "Federación Pro", price: isAnnual ? "$149k" : "$189k", period: "/mes", features: ["Todo en Liga", "Torneos online", "Licencias digitales", "Clubes ilimitados", "Reportes avanzados"], cta: "Ser Pro", popular: true, icon: Building2 },
      { name: "Nacional", price: "A medida", period: "", features: ["Todo en Pro", "Multi-región", "API gobierno", "Soporte dedicado", "Integraciones custom"], cta: "Cotizar", popular: false, icon: Shield }
    ],
    proveedores: [
      { name: "Proveedor", price: "Gratis", period: "", features: ["Perfil empresa", "Listado directorio", "Recibir solicitudes", "Contacto directo"], cta: "Registrar Empresa", popular: false, icon: Zap },
      { name: "Proveedor Pro", price: isAnnual ? "$69k" : "$89k", period: "/mes", features: ["Todo en Proveedor", "Catálogo productos", "Cotizaciones online", "CRM básico", "Clientes ilimitados"], cta: "Ser Pro", popular: true, icon: Truck },
      { name: "Enterprise", price: "A medida", period: "", features: ["Todo en Pro", "API integraciones", "Facturación electrónica", "Soporte 24/7", "Gerente cuenta"], cta: "Cotizar", popular: false, icon: Shield }
    ],
    servicios: [
      { name: "Freelance", price: "Gratis", period: "", features: ["Perfil profesional", "Listado directorio", "Recibir consultas", "Hasta 10 clientes"], cta: "Registrarse", popular: false, icon: Zap },
      { name: "Servicio Pro", price: isAnnual ? "$49k" : "$69k", period: "/mes", features: ["Todo en Freelance", "Agenda online", "Pagos integrados", "Clientes ilimitados", "Reportes"], cta: "Ser Pro", popular: true, icon: Sparkles },
      { name: "Agencia", price: "A medida", period: "", features: ["Todo en Pro", "Múltiples profesionales", "Marca blanca", "Integraciones", "Soporte dedicado"], cta: "Cotizar", popular: false, icon: Shield }
    ],
    default: [
      { name: "Básico", price: "Gratis", period: "", features: ["Acceso ecosistema", "Perfil verificado", "Soporte básico", "Funciones esenciales"], cta: "Registrarse", popular: true, icon: Zap },
      { name: "Profesional", price: isAnnual ? "$69k" : "$89k", period: "/mes", features: ["Todo en Básico", "Funciones avanzadas", "Soporte prioritario", "Sin límites"], cta: "Ser Pro", popular: false, icon: Star },
      { name: "Enterprise", price: "A medida", period: "", features: ["Todo en Profesional", "API Access", "Integraciones", "Soporte 24/7", "Gerente cuenta"], cta: "Cotizar", popular: false, icon: Shield }
    ]
  };

  const currentPlans = allPlans[selectedClient] || allPlans["default"];
  
  const categoryNames: Record<string, string> = {
    atletas: "Atletas",
    escuelas: "Escuelas",
    entrenadores: "Entrenadores",
    bienestar: "Bienestar",
    marcas: "Marcas",
    federaciones: "Federaciones",
    proveedores: "Proveedores",
    servicios: "Servicios",
    default: "tu Negocio"
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Planes para <span className="text-sport-primary">{categoryNames[selectedClient] || categoryNames.default}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Soluciones diseñadas específicamente para tu rol en el deporte.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Mensual</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-muted rounded-full transition-colors hover:bg-sport-primary/20"
            >
              <div className={`absolute top-1 w-5 h-5 bg-sport-primary rounded-full transition-all duration-300 ${isAnnual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Anual <span className="text-sport-primary text-xs ml-1 font-bold">-20% OFF</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 group ${
                plan.popular 
                  ? 'bg-gradient-to-b from-sport-primary/15 to-transparent border-sport-primary/60' 
                  : 'bg-card border-border hover:border-sport-primary/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sport-primary to-sport-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  RECOMENDADO
                </div>
              )}

              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl bg-sport-primary/20 flex items-center justify-center mb-4 text-sport-primary">
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-sport-accent">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-sport-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full py-6 rounded-xl font-bold text-lg transition-all hover:scale-105 ${
                  plan.popular
                    ? 'bg-sport-accent hover:bg-sport-accent/90 text-white'
                    : 'bg-sport-primary hover:bg-sport-primary/90 text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}