import { useState } from "react";
import { Link } from "react-router-dom";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Check, Zap, Star, Shield, User, Dumbbell, School, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { DeportistasRegistroModal } from "@/components/modals/DeportistasRegistroModal";
import { EscuelasRegistroModal } from "@/components/modals/EscuelasRegistroModal";
import { BienestarRegistroModal } from "@/components/modals/BienestarRegistroModal";
import { EntrenadoresRegistroModal } from "@/components/modals/EntrenadoresRegistroModal";

const Planes = () => {
  const [selectedCategory, setSelectedCategory] = useState("deportistas");
  const [isAnnual, setIsAnnual] = useState(true);
  const [modalState, setModalState] = useState<{
    type: "deportistas" | "escuelas" | "bienestar" | "entrenadores" | null;
    plan: string;
  }>({ type: null, plan: "" });

  const categories = [
    { id: "deportistas", label: "Deportistas", icon: User, color: "text-blue-500" },
    { id: "escuelas", label: "Escuelas", icon: School, color: "text-sport-primary" },
    { id: "entrenadores", label: "Entrenadores", icon: Dumbbell, color: "text-orange-500" },
    { id: "bienestar", label: "Bienestar", icon: Heart, color: "text-pink-500" },
  ];

  const allPlans: Record<string, any[]> = {
    deportistas: [
      { 
        name: "Atleta ID", 
        price: "Gratis", 
        period: "",
        features: ["Historial deportivo digital", "Inscripción a eventos", "Perfil público verificado", "Acceso a rutas básicas"], 
        cta: "Crear Perfil Gratis", 
        popular: true, 
        icon: User 
      },
      { 
        name: "Premium", 
        price: isAnnual ? "$15k" : "$19k", 
        period: "/mes",
        features: ["Todo en Atleta ID", "Estadísticas avanzadas", "Descuentos en marcas aliadas", "Video highlights", "Soporte prioritario"], 
        cta: "Ser Premium", 
        popular: false, 
        icon: Star 
      },
      { 
        name: "Pro Career", 
        price: isAnnual ? "$35k" : "$39k", 
        period: "/mes",
        features: ["Todo en Premium", "Visibilidad para scouts", "Agente digital", "Asesoría legal deportiva", "Conexión con patrocinadores"], 
        cta: "Iniciar Carrera Pro", 
        popular: false, 
        icon: Shield 
      },
    ],
    escuelas: [
      { 
        name: "Start", 
        price: "Gratis", 
        period: "",
        features: ["Perfil público verificado", "Mapa con ubicación", "Hasta 10 alumnos", "Mensajes de contacto"], 
        cta: "Empezar Gratis", 
        popular: false, 
        icon: Zap 
      },
      { 
        name: "Escuela Pro", 
        price: isAnnual ? "$79k" : "$99k", 
        period: "/mes",
        features: ["Todo en Start", "Pagos online integrados", "Tienda de uniformes", "App para padres", "Alumnos ilimitados", "Reportes y métricas"], 
        cta: "Ser Pro", 
        popular: true, 
        icon: Star 
      },
      { 
        name: "Elite Club", 
        price: "Cotizar", 
        period: "",
        features: ["Todo en Pro", "Múltiples sedes", "API para integraciones", "Marca blanca", "Gerente de cuenta dedicado", "Soporte 24/7"], 
        cta: "Cotizar Club", 
        popular: false, 
        icon: Shield 
      },
    ],
    entrenadores: [
      { 
        name: "Coach Básico", 
        price: "Gratis", 
        period: "",
        features: ["Perfil verificado", "Recibir mensajes", "Hasta 5 clientes", "Visibilidad en directorio"], 
        cta: "Crear Perfil", 
        popular: false, 
        icon: Zap 
      },
      { 
        name: "Coach Pro", 
        price: isAnnual ? "$45k" : "$59k", 
        period: "/mes",
        features: ["Todo en Básico", "Agenda online", "Pagos por clase/mes", "Rutinas digitales", "Video análisis", "Clientes ilimitados"], 
        cta: "Ser Coach Pro", 
        popular: true, 
        icon: Dumbbell 
      },
      { 
        name: "Top Trainer", 
        price: isAnnual ? "$89k" : "$99k", 
        period: "/mes",
        features: ["Todo en Pro", "Web personal propia", "Marketing y publicidad", "Soporte legal", "Seguro profesional", "Prioridad en búsquedas"], 
        cta: "Aplicar", 
        popular: false, 
        icon: Star 
      },
    ],
    bienestar: [
      { 
        name: "Profesional", 
        price: "Gratis", 
        period: "",
        features: ["Perfil verificado", "Visibilidad en directorio", "Recibir consultas", "Hasta 10 clientes"], 
        cta: "Registrarse", 
        popular: false, 
        icon: Zap 
      },
      { 
        name: "Centro Pro", 
        price: isAnnual ? "$69k" : "$89k", 
        period: "/mes",
        features: ["Todo en Profesional", "Agenda de citas online", "Pagos integrados", "Fichas de pacientes", "Clientes ilimitados", "Recordatorios automáticos"], 
        cta: "Ser Pro", 
        popular: true, 
        icon: Star 
      },
      { 
        name: "Clínica Elite", 
        price: "Cotizar", 
        period: "",
        features: ["Todo en Pro", "Múltiples profesionales", "Historia clínica digital", "Integraciones personalizadas", "Marca blanca", "Soporte dedicado"], 
        cta: "Cotizar", 
        popular: false, 
        icon: Shield 
      },
    ],
  };

  const currentPlans = allPlans[selectedCategory];

  const handlePlanClick = (planName: string) => {
    setModalState({ 
      type: selectedCategory as "deportistas" | "escuelas" | "bienestar" | "entrenadores", 
      plan: planName 
    });
  };

  const closeModal = () => {
    setModalState({ type: null, plan: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TechHeader onSectionClick={() => {}} activeSection="planes" />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Planes para cada <span className="text-sport-primary">rol deportivo</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Soluciones diseñadas específicamente para deportistas, escuelas, entrenadores y profesionales del bienestar.
          </motion.p>
        </section>

        {/* Category Selector */}
        <section className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 ${
                  selectedCategory === cat.id 
                    ? "bg-sport-primary hover:bg-sport-primary/90" 
                    : "hover:border-sport-primary"
                }`}
              >
                <cat.icon className="w-5 h-5" />
                {cat.label}
              </Button>
            ))}
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="container mx-auto px-4 mb-12">
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-muted rounded-full transition-colors hover:bg-sport-primary/20"
            >
              <div className={`absolute top-1 w-5 h-5 bg-sport-primary rounded-full transition-all duration-300 ${isAnnual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Anual <span className="text-sport-primary text-xs ml-1 font-bold">Ahorra 20%</span>
            </span>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentPlans.map((plan, idx) => (
              <motion.div
                key={`${selectedCategory}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
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
                      <Check className="w-5 h-5 text-sport-primary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full py-6 rounded-xl font-bold text-lg transition-all hover:scale-105 ${
                    plan.popular
                      ? 'bg-sport-accent hover:bg-sport-accent/90 text-white'
                      : 'bg-sport-primary hover:bg-sport-primary/90 text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-20">
          <div className="bg-gradient-to-r from-sport-primary/20 to-sport-accent/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas un plan personalizado?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contáctanos para crear una solución a la medida de tu organización, federación o empresa.
            </p>
            <Link to="/sobre-nosotros">
              <Button variant="outline" size="lg" className="border-sport-primary text-sport-primary hover:bg-sport-primary hover:text-white">
                Contactar al equipo
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />

      {/* Modals */}
      <DeportistasRegistroModal 
        isOpen={modalState.type === "deportistas"} 
        onClose={closeModal} 
        planSelected={modalState.plan} 
      />
      <EscuelasRegistroModal 
        isOpen={modalState.type === "escuelas"} 
        onClose={closeModal} 
        planSelected={modalState.plan} 
      />
      <BienestarRegistroModal 
        isOpen={modalState.type === "bienestar"} 
        onClose={closeModal} 
        planSelected={modalState.plan} 
      />
      <EntrenadoresRegistroModal 
        isOpen={modalState.type === "entrenadores"} 
        onClose={closeModal} 
        planSelected={modalState.plan} 
      />
    </div>
  );
};

export default Planes;