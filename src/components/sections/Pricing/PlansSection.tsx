import { Check, Zap, Star, Shield, User, Briefcase, Flag, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Recibe la selección del cliente
interface PlansSectionProps {
  selectedClient: string;
}

export function PlansSection({ selectedClient }: PlansSectionProps) {
  const [isAnnual, setIsAnnual] = useState(true);
  const whatsappNumber = "573001234567"; 

  const handlePlanSelect = (planName: string) => {
    const message = `Hola SportMaps, soy ${selectedClient} y estoy interesado en el plan *${planName}*.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // --- BASE DE DATOS DE PRECIOS DINÁMICA ---
  const allPlans: Record<string, any[]> = {
    escuelas: [
      { name: "Start", price: "Gratis", features: ["Perfil público", "Mapa básico", "10 alumnos"], cta: "Empezar Gratis", popular: false, icon: Zap },
      { name: "Escuela Pro", price: isAnnual ? "$89k" : "$99k", features: ["Pagos online", "Tienda uniformes", "App padres", "Alumnos ilimitados"], cta: "Seleccionar Pro", popular: true, icon: Star },
      { name: "Elite Club", price: "Cotizar", features: ["Sedes múltiples", "API", "Marca blanca", "Gerente cuenta"], cta: "Cotizar Club", popular: false, icon: Shield }
    ],
    entrenadores: [
      { name: "Coach Básico", price: "Gratis", features: ["Perfil verificado", "Recibir mensajes", "5 clientes"], cta: "Crear Perfil", popular: false, icon: Zap },
      { name: "Coach Pro", price: isAnnual ? "$49k" : "$59k", features: ["Agenda online", "Pagos por clase", "Rutinas digitales", "Video análisis"], cta: "Ser Pro", popular: true, icon: Dumbbell },
      { name: "Top Trainer", price: "$99k", features: ["Web propia", "Marketing ads", "Soporte legal", "Seguro"], cta: "Aplicar", popular: false, icon: Star }
    ],
    atletas: [
      { name: "Atleta ID", price: "Gratis", features: ["Historial deportivo", "Inscripción eventos", "Perfil digital"], cta: "Crear ID", popular: true, icon: User },
      { name: "Premium", price: "$19k/mes", features: ["Estadísticas avanzadas", "Descuentos marcas", "Video highlights"], cta: "Mejorar", popular: false, icon: Star },
      { name: "Pro Career", price: "$39k/mes", features: ["Visibilidad scouts", "Agente digital", "Asesoría legal"], cta: "Ver más", popular: false, icon: Shield }
    ],
    marcas: [
      { name: "Partner", price: "Gratis", features: ["Listado directorio", "Perfil marca"], cta: "Registrar Marca", popular: false, icon: Briefcase },
      { name: "Marketplace", price: "10% com.", features: ["Venta productos", "Pasarela pagos", "Logística envíos"], cta: "Vender", popular: true, icon: Star },
      { name: "Sponsor", price: "Cotizar", features: ["Ads segmentados", "Patrocinio eventos", "Banner principal"], cta: "Contactar", popular: false, icon: Shield }
    ],
    // ... Valores por defecto para los demás actores para que no quede vacío
    default: [
      { name: "Registro", price: "Gratis", features: ["Acceso al ecosistema", "Perfil verificado", "Soporte básico"], cta: "Registrarse", popular: true, icon: Zap },
      { name: "Profesional", price: "Cotizar", features: ["Funciones avanzadas", "Verificación", "Soporte prioritario"], cta: "Contactar", popular: false, icon: Star },
      { name: "Enterprise", price: "A medida", features: ["Solución completa", "API Access", "Soporte 24/7"], cta: "Agendar Cita", popular: false, icon: Shield }
    ]
  };

  // Seleccionamos los planes correctos, o usamos 'default' si no hay específicos (para federaciones/proveedores/servicios si no quieres detallarlos aun)
  const currentPlans = allPlans[selectedClient] || allPlans["default"];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Planes para <span className="text-sport-primary capitalize">{selectedClient}</span>
          </h2>
          <p className="text-sport-text-secondary text-lg mb-8">
            Soluciones diseñadas específicamente para tu rol en el deporte.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-sport-text-muted'}`}>Mensual</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-white/10 rounded-full transition-colors hover:bg-white/20"
            >
              <div className={`absolute top-1 w-5 h-5 bg-sport-primary rounded-full transition-all duration-300 ${isAnnual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-sport-text-muted'}`}>
              Anual <span className="text-sport-success text-xs ml-1 font-bold">-20% OFF</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentPlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 group ${
                plan.popular 
                  ? 'bg-gradient-to-b from-white/10 to-transparent border-sport-primary/50 shadow-glow-primary' 
                  : 'bg-sport-card-bg border-white/5 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sport-primary to-sport-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  RECOMENDADO
                </div>
              )}

              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white shadow-lg`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-sport-text-secondary">
                    <Check className="w-5 h-5 text-sport-success shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full py-6 rounded-xl font-bold text-lg transition-all hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-sport-primary to-sport-accent text-white hover:shadow-glow-primary'
                    : 'bg-white text-black hover:bg-gray-200'
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