import { Check, Zap, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function PlansSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  // 📞 TU NÚMERO DE WHATSAPP AQUÍ (Cámbialo por el real)
  const whatsappNumber = "573001234567"; 

  const handlePlanSelect = (planName: string) => {
    // Crea el mensaje personalizado
    const message = `Hola SportMaps, estoy interesado en el *${planName}*. ¿Me ayudan a empezar?`;
    // Abre WhatsApp en una nueva pestaña
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const plans = [
    {
      name: "Start",
      description: "Para entrenadores independientes",
      price: "Gratis",
      period: "/siempre",
      icon: Zap,
      features: [
        "Perfil público verificado",
        "Aparecer en el mapa (básico)",
        "Recepción de mensajes",
        "Hasta 10 alumnos"
      ],
      cta: "Empezar Gratis",
      popular: false,
      gradient: "from-gray-500 to-gray-700"
    },
    {
      name: "Escuela Pro",
      description: "Para academias en crecimiento",
      price: isAnnual ? "$89.000" : "$99.000",
      period: "/mes",
      icon: Star,
      features: [
        "Todo lo de Start",
        "Gestión de pagos y matrículas",
        "Tienda online de uniformes",
        "App para padres ilimitada",
        "Soporte prioritario"
      ],
      cta: "Seleccionar Pro",
      popular: true, // Este es el que queremos vender
      gradient: "from-sport-primary to-sport-accent" // Color llamativo
    },
    {
      name: "Elite Club",
      description: "Para grandes clubes y redes",
      price: "Personalizado",
      period: "",
      icon: Shield,
      features: [
        "Todo lo de Pro",
        "Múltiples sedes",
        "API y Webhooks",
        "Gerente de cuenta dedicado",
        "Marca blanca (Tu propio logo)"
      ],
      cta: "Cotizar Club",
      popular: false,
      gradient: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Elige tu plan de <span className="text-sport-primary">crecimiento</span>
          </h2>
          <p className="text-sport-text-secondary text-lg mb-8">
            Comienza gratis y escala a medida que tu academia crece. Sin contratos forzosos.
          </p>

          {/* Toggle Anual/Mensual */}
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

        {/* Tarjetas de Precio */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 group ${
                plan.popular 
                  ? 'bg-gradient-to-b from-white/10 to-transparent border-sport-primary/50 shadow-glow-primary' 
                  : 'bg-sport-card-bg border-white/5 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sport-primary to-sport-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  MÁS POPULAR
                </div>
              )}

              {/* Icono y Nombre */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4 text-white shadow-lg`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-sport-text-secondary mt-1">{plan.description}</p>
              </div>

              {/* Precio */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sport-text-muted">{plan.period}</span>
                </div>
              </div>

              {/* Lista de Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-sport-text-secondary">
                    <Check className="w-5 h-5 text-sport-success shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Botón de Acción */}
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