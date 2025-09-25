import { useState } from "react";
import { School, Store, Pill, Heart, Search, Calendar, Shield, Box, Truck, Bot, Repeat, UserCheck, Video, Lock, Handshake, GraduationCap, Megaphone } from "lucide-react";
import { SportMapsSidebar } from "@/components/SportMapsSidebar";
import { HeroSection } from "@/components/HeroSection";
import { SearchSection } from "@/components/SearchSection";
import { ModuleCard } from "@/components/ModuleCard";
import { MetricCard } from "@/components/MetricCard";
import { DemoModal } from "@/components/DemoModal";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const modules = [
    {
      id: "escuelas",
      icon: School,
      title: "Escuelas & Entrenadores",
      description: "Búsqueda avanzada, reservas, reseñas verificadas.",
      color: "primary"
    },
    {
      id: "tienda",
      icon: Store,
      title: "Tienda",
      description: "Catálogo especializado, fulfillment 24–48h.",
      color: "highlight"
    },
    {
      id: "nutricion",
      icon: Pill,
      title: "Nutrición",
      description: "Suscripciones y planes personalizados.",
      color: "nutrition"
    },
    {
      id: "bienestar",
      icon: Heart,
      title: "Bienestar",
      description: "Fisioterapia/psicología y teleconsulta.",
      color: "wellness"
    }
  ];

  return (
    <div className="flex min-h-screen bg-sport-background">
      <SportMapsSidebar 
        onSectionClick={scrollToSection}
        activeSection={activeSection}
      />
      
      <main className="flex-1 lg:ml-72 p-8 transition-all duration-300">
        {/* Hero Section */}
        <section id="inicio">
          <HeroSection onDemoClick={() => setIsDemoOpen(true)} />
        </section>

        {/* Search Section */}
        <SearchSection />

        {/* Ecosistema Section */}
        <section id="ecosistema" className="bg-sport-card rounded-3xl p-8 mb-8 shadow-elegant">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-3xl font-bold text-sport-text">Ecosistema Integrado</h2>
            <Badge className="bg-sport-accent text-white px-4 py-2 rounded-full">
              MVP → Fase 1: Escuelas
            </Badge>
          </div>
          
          <p className="text-sport-text/80 mb-6 leading-relaxed">
            El ecosistema se orquesta sobre <strong>un solo perfil</strong> y <strong>un carrito/checkout unificado</strong>.
            Módulos: 1) Marketplace de Escuelas/Entrenadores, 2) Tienda (e-commerce), 3) Nutrición & Suscripciones,
            4) Bienestar/Salud. Un <em>motor de recomendaciones</em> (IA) sugiere clases y productos según edad, nivel y hábitos.
            La pasarela de pago (Stripe/PSE) y el sistema de reservas comparten cuentas y facturación.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <MetricCard value="1,247" label="Escuelas" />
            <MetricCard value="15,892" label="Productos" />
            <MetricCard value="89,543" label="Usuarios" />
            <MetricCard value="$2.1M" label="GMV Mensual" />
          </div>

          <h5 className="text-xl font-bold mb-6 text-sport-text">Módulos (haz clic para navegar)</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                icon={module.icon}
                title={module.title}
                description={module.description}
                color={module.color}
                onClick={() => scrollToSection(module.id)}
              />
            ))}
          </div>
        </section>

        {/* Escuelas Section */}
        <section id="escuelas" className="bg-sport-card rounded-3xl p-8 mb-8 shadow-elegant">
          <h2 className="text-3xl font-bold text-sport-text mb-4">Marketplace de Escuelas</h2>
          <p className="text-sport-text/80 mb-6">
            Implementación: fichas verificadas, agenda por franjas, cobro por reserva (8–15%), wallet para escuelas, y KYC básico. KPIs: tasa de conversión a reserva, ocupación por franja, NPS.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Search className="w-5 h-5 text-sport-primary" />
                <h6 className="font-bold text-sport-text">Búsqueda/Match</h6>
              </div>
              <p className="text-sport-text/70">Filtro por ciudad/edad/nivel; ranking con reputación, cercanía y precio.</p>
            </div>
            
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-sport-primary" />
                <h6 className="font-bold text-sport-text">Reservas & Pagos</h6>
              </div>
              <p className="text-sport-text/70">Calendario con cupos; pago anticipado; reembolsos y políticas.</p>
            </div>
            
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-sport-primary" />
                <h6 className="font-bold text-sport-text">Verificación</h6>
              </div>
              <p className="text-sport-text/70">Documentos/seguros; control de credenciales y reseñas auditadas.</p>
            </div>
          </div>
        </section>

        {/* Tienda Section */}
        <section id="tienda" className="bg-sport-card rounded-3xl p-8 mb-8 shadow-elegant">
          <h2 className="text-3xl font-bold text-sport-text mb-4">Tienda (E-commerce Deportivo)</h2>
          <p className="text-sport-text/80 mb-6">
            Catálogo curado por deporte; integraciones con proveedores (dropship/stock mixto); promociones basadas en calendario de torneos; checkout compartido con reservas.
          </p>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Box className="w-5 h-5 text-sport-primary" />
                <h6 className="font-bold text-sport-text">Catálogo</h6>
              </div>
              <p className="text-sport-text/70">Ropa, equipamiento, accesorios. Variantes por talla/edad. Bundles por disciplina.</p>
            </div>
            
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="w-5 h-5 text-sport-primary" />
                <h6 className="font-bold text-sport-text">Fulfillment</h6>
              </div>
              <p className="text-sport-text/70">SLA 24–48h, seguimiento, devoluciones 30 días. Facturación unificada.</p>
            </div>
            
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Bot className="w-5 h-5 text-sport-primary" />
                <h6 className="font-bold text-sport-text">Recomendaciones</h6>
              </div>
              <p className="text-sport-text/70">IA sugiere tallas y kits según edad, deporte y reservas recientes.</p>
            </div>
          </div>
        </section>

        {/* Nutrición Section */}
        <section id="nutricion" className="bg-sport-card rounded-3xl p-8 mb-8 shadow-elegant">
          <h2 className="text-3xl font-bold text-sport-text mb-4">Nutrición & Suplementos</h2>
          <p className="text-sport-text/80 mb-6">
            Tienda especializada con suscripción mensual ("Plan Base", "Rendimiento", "Recuperación"). Registro sanitario verificado y contenido educativo por edad y disciplina.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Repeat className="w-5 h-5 text-sport-nutrition" />
                <h6 className="font-bold text-sport-text">Suscripciones</h6>
              </div>
              <p className="text-sport-text/70">Entrega automática cada 30 días; pausar/cambiar en 1 clic; descuentos por fidelidad.</p>
            </div>
            
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <UserCheck className="w-5 h-5 text-sport-nutrition" />
                <h6 className="font-bold text-sport-text">Asesoría</h6>
              </div>
              <p className="text-sport-text/70">Chat con nutricionistas, planes personalizados y contraindicaciones visibles.</p>
            </div>
          </div>
        </section>

        {/* Bienestar Section */}
        <section id="bienestar" className="bg-sport-card rounded-3xl p-8 mb-8 shadow-elegant">
          <h2 className="text-3xl font-bold text-sport-text mb-4">Bienestar & Salud</h2>
          <p className="text-sport-text/80 mb-6">
            Módulo de servicios profesionales: fisioterapia, psicología deportiva y entrenamiento online. Teleconsulta segura, historial y recomendaciones post-sesión.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Video className="w-5 h-5 text-sport-wellness" />
                <h6 className="font-bold text-sport-text">Teleconsulta</h6>
              </div>
              <p className="text-sport-text/70">Video/WebRTC, notas clínicas básicas, seguimiento y ejercicios guiados.</p>
            </div>
            
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-5 h-5 text-sport-wellness" />
                <h6 className="font-bold text-sport-text">Integraciones</h6>
              </div>
              <p className="text-sport-text/70">Wearables (pasos, sueño, FC) para planes y alertas personalizadas.</p>
            </div>
            
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-5 h-5 text-sport-wellness" />
                <h6 className="font-bold text-sport-text">Privacidad</h6>
              </div>
              <p className="text-sport-text/70">Seguridad y consentimiento explícito; datos sensibles cifrados.</p>
            </div>
          </div>
        </section>

        {/* Únete Section */}
        <section id="unete" className="bg-sport-card rounded-3xl p-8 mb-8 shadow-elegant">
          <h2 className="text-3xl font-bold text-sport-text mb-6">Únete al Ecosistema</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Handshake className="w-5 h-5 text-sport-accent" />
                <h6 className="font-bold text-sport-text">Servicios para Escuelas Deportivas</h6>
              </div>
              <p className="text-sport-text/70">Plataforma de gestión completa para automatizar reservas, pagos, membresías y comunicación con estudiantes.</p>
            </div>
            
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-5 h-5 text-sport-accent" />
                <h6 className="font-bold text-sport-text">Escuelas/Aliados</h6>
              </div>
              <p className="text-sport-text/70">Onboarding en 48h, herramientas de agenda/cobros y visibilidad preferente.</p>
            </div>
            
            <div className="p-6 border border-sport-border rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Megaphone className="w-5 h-5 text-sport-accent" />
                <h6 className="font-bold text-sport-text">Marcas</h6>
              </div>
              <p className="text-sport-text/70">Catálogo con data de intención, activaciones y bundles por deporte/edad.</p>
            </div>
          </div>
        </section>

        {/* Acerca Section */}
        <section id="acerca" className="bg-sport-card rounded-3xl p-8 mb-8 shadow-elegant">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-sport-text mb-6">Nuestra Misión</h2>
              <p className="text-xl text-sport-text mb-6 leading-relaxed">
                Hacer el deporte más accesible y seguro, conectando formación, equipamiento y salud en un solo lugar.
              </p>
              <p className="text-sport-text/80 leading-relaxed">
                Atendemos a familias, jóvenes deportistas y aficionados. Para proveedores, ofrecemos un canal digital con herramientas de gestión y acceso a una audiencia calificada.
              </p>
            </div>
            <div className="text-center">
              <img 
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant" 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop" 
                alt="Equipo SportMaps"
              />
            </div>
          </div>
        </section>
      </main>

      <DemoModal 
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
};

export default Index;