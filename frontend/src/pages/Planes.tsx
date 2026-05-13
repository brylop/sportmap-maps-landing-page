import { useState } from "react";
import { Link } from "react-router-dom";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
  Check,
  User,
  Dumbbell,
  School,
  Heart,
  ArrowRight,
  Building2,
  ShoppingBag,
  Truck,
  Sparkles,
  MessageSquare,
  CalendarDays,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  RolePricingSection,
  rolePricingConfigs,
} from "@/components/common/cards/RolePricingSection";
import { CombosSection } from "@/components/sections/Pricing/CombosSection";
import { DeportistasRegistroModal } from "@/components/modals/DeportistasRegistroModal";
import { EscuelasRegistroModal } from "@/components/modals/EscuelasRegistroModal";
import { BienestarRegistroModal } from "@/components/modals/BienestarRegistroModal";
import { EntrenadoresRegistroModal } from "@/components/modals/EntrenadoresRegistroModal";
import { MarcasRegistroModal } from "@/components/modals/MarcasRegistroModal";
import { FederacionesRegistroModal } from "@/components/modals/FederacionesRegistroModal";
import { ProveedoresRegistroModal } from "@/components/modals/ProveedoresRegistroModal";
import { ServiciosRegistroModal } from "@/components/modals/ServiciosRegistroModal";
import { ContactEquipoModal } from "@/components/modals/ContactEquipoModal";

type CategoryType =
  | "deportistas"
  | "escuelas"
  | "entrenadores"
  | "bienestar"
  | "marcas"
  | "federaciones"
  | "proveedores"
  | "servicios"
  | "organizadores";

const Planes = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("escuelas");
  const [modalState, setModalState] = useState<{
    type: CategoryType | null;
    plan: string;
  }>({ type: null, plan: "" });
  const [isContactEquipoOpen, setIsContactEquipoOpen] = useState(false);

  const categories = [
    { id: "deportistas" as const, label: "Deportistas", icon: User },
    { id: "escuelas" as const, label: "Escuelas", icon: School },
    { id: "entrenadores" as const, label: "Entrenadores", icon: Dumbbell },
    { id: "organizadores" as const, label: "Organizadores", icon: CalendarDays },
    { id: "federaciones" as const, label: "Federaciones", icon: Building2 },
    { id: "bienestar" as const, label: "Bienestar", icon: Heart },
    { id: "servicios" as const, label: "Servicios", icon: Sparkles },
    { id: "marcas" as const, label: "Marcas", icon: ShoppingBag },
    { id: "proveedores" as const, label: "Proveedores", icon: Truck },
  ];

  const handlePlanClick = (planName: string) => {
    if (selectedCategory === "organizadores") {
      setIsContactEquipoOpen(true);
      return;
    }
    setModalState({ type: selectedCategory, plan: planName });
  };

  const closeModal = () => {
    setModalState({ type: null, plan: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TechHeader onSectionClick={() => {}} activeSection="planes" />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Planes para cada{" "}
            <span className="text-sport-primary">rol deportivo</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Soluciones diseñadas específicamente para todo el ecosistema deportivo.
          </motion.p>
        </section>

        {/* Category Selector */}
        <section className="container mx-auto px-4 mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                size="sm"
                className={`flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? "bg-sport-primary hover:bg-sport-primary/90"
                    : "hover:border-sport-primary"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </Button>
            ))}
          </div>
        </section>

        {/* Pricing Content */}
        {selectedCategory === "deportistas" ? (
          <DeportistasFreeCard
            onRegister={() => setModalState({ type: "deportistas", plan: "Atleta ID" })}
          />
        ) : selectedCategory === "organizadores" ? (
          <OrganizadoresQuoteCard
            onContact={() => setIsContactEquipoOpen(true)}
          />
        ) : (
          <RolePricingSection
            config={rolePricingConfigs[selectedCategory]}
            onCTA={handlePlanClick}
          />
        )}

        {/* Combos multi-rol (siempre visibles, independiente de la categoría) */}
        <CombosSection />

        {/* Custom Plan CTA */}
        <section className="container mx-auto px-4 mt-20">
          <div className="bg-gradient-to-r from-sport-primary/20 to-sport-accent/20 rounded-3xl p-8 md:p-12 text-center border border-sport-primary/30">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sport-primary to-sport-accent flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas un plan personalizado?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Cuéntanos sobre tu organización y te diseñaremos una solución a
              medida con las funcionalidades exactas que necesitas.
            </p>
            <Button
              size="lg"
              onClick={() => setIsContactEquipoOpen(true)}
              className="bg-gradient-to-r from-sport-primary to-sport-accent hover:opacity-90 text-white px-8"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contactar al equipo
            </Button>
          </div>
        </section>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />

      {/* Category-specific Modals */}
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
      <MarcasRegistroModal
        isOpen={modalState.type === "marcas"}
        onClose={closeModal}
        planSelected={modalState.plan}
      />
      <FederacionesRegistroModal
        isOpen={modalState.type === "federaciones"}
        onClose={closeModal}
        planSelected={modalState.plan}
      />
      <ProveedoresRegistroModal
        isOpen={modalState.type === "proveedores"}
        onClose={closeModal}
        planSelected={modalState.plan}
      />
      <ServiciosRegistroModal
        isOpen={modalState.type === "servicios"}
        onClose={closeModal}
        planSelected={modalState.plan}
      />
      <ContactEquipoModal
        isOpen={isContactEquipoOpen}
        onClose={() => setIsContactEquipoOpen(false)}
        preselectedCategory={
          categories.find((c) => c.id === selectedCategory)?.label
        }
      />
    </div>
  );
};

function DeportistasFreeCard({ onRegister }: { onRegister: () => void }) {
  const benefits = [
    "Perfil deportivo verificado y portable",
    "Mapa con escuelas y eventos cerca de ti",
    "Inscripción directa a torneos y eventos",
    "Conexión con entrenadores y profesionales de bienestar",
    "Historial deportivo digital",
    "Notificaciones por WhatsApp",
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-4xl mb-3 block">🎯</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Para <span className="text-sport-primary">Deportistas</span> es{" "}
            <strong className="text-sport-success">Gratis para siempre</strong>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra escuelas certificadas, entrenadores expertos y eventos
            cerca de ti. Sin costos, sin tarjeta de crédito, sin límites.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl border border-sport-primary/40 bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 p-8 md:p-10">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sport-success/15 text-sport-success text-sm font-bold mb-4">
              <Sparkles className="w-4 h-4" />
              Plan Gratuito Permanente
            </div>
            <h3 className="text-2xl font-bold mb-2">Atleta ID</h3>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold text-sport-success">$0</span>
              <span className="text-muted-foreground">/mes</span>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Sin trial. Sin tarjeta. Sin sorpresas.
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-sport-success flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={onRegister}
              size="lg"
              className="flex-1 bg-sport-primary hover:bg-sport-primary/90 text-white font-bold rounded-xl"
            >
              Crear Perfil Gratis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex-1 rounded-xl"
            >
              <Link to="/deportistas">Explorar deportistas</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const ORGANIZADORES_WHATSAPP_MESSAGE = `Hola SportMaps! 👋

Quiero cotización de Organizadores Pro.

📋 Mis datos:
• Tipo: Organizador de eventos deportivos
• Necesidad: Operación completa (inscripciones + pagos + boletería + check-in)
• Tamaño aproximado: ___ eventos / año
• ¿Cuándo arranca el próximo?: ___

¿Cómo seguimos?`;

function OrganizadoresQuoteCard({ onContact }: { onContact: () => void }) {
  const SALES_WHATSAPP = "573128463555";

  const handleWhatsApp = () => {
    const url = `https://wa.me/${SALES_WHATSAPP}?text=${encodeURIComponent(
      ORGANIZADORES_WHATSAPP_MESSAGE
    )}`;
    window.open(url, "_blank");
  };

  const included = [
    "Coordinación con escuelas e inscripciones colectivas",
    "Recepción de documentos (cédula, EPS, autorización)",
    "Pasarela Wompi + transferencia/efectivo manual",
    "Plan de abonos parciales con saldos en vivo",
    "Boletería integrada con QR + check-in",
    "Conciliación 1-click (pasarela + manual)",
    "Distribución: link público + pin en mapa SportMaps",
    "Calendario de circuito anual (multi-evento)",
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-4xl mb-3 block">🏆</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Para{" "}
            <span className="text-sport-primary">Organizadores</span>:
            cotización a medida
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada calendario es único. Te armamos una propuesta según el tamaño
            de tus eventos, periodicidad y necesidades técnicas. Sin precio
            fijo público — venta consultiva.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl border border-sport-primary/40 bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sport-accent/15 text-sport-accent text-sm font-bold mb-4">
                <Sparkles className="w-4 h-4" />
                Enterprise · Cotización
              </div>
              <h3 className="text-2xl font-bold mb-3">Organizadores Pro</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Reemplaza Excel + ticketera externa + cobranza manual. Todo
                desde la app, sin papeleos, con conciliación automática.
              </p>
            </div>
            <div className="md:w-64 shrink-0 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                Inversión
              </p>
              <p className="text-3xl font-bold text-sport-accent mb-1">
                A medida
              </p>
              <p className="text-xs text-muted-foreground italic">
                Según volumen y calendario
              </p>
            </div>
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
            {included.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-sport-success flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="flex-1 bg-sport-success hover:bg-sport-success/90 text-white font-bold rounded-xl"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Solicitar cotización por WhatsApp
            </Button>
            <Button
              onClick={onContact}
              size="lg"
              variant="outline"
              className="flex-1 rounded-xl"
            >
              Hablar con el equipo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planes;
