import { useState, useEffect } from "react";
import { TechHeader } from "@/components/TechHeader";
import { TechHeroSection } from "@/components/TechHeroSection";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { PlansSection } from "@/components/sections/Pricing/PlansSection";
import { ComparisonSection } from "@/components/sections/Pricing/ComparisonSection";
import { Toaster } from "@/components/ui/toaster";

// Componentes adicionales (si decides usarlos en rutas separadas en el futuro)
import { ContactModal } from "@/components/modals/ContactModal";

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isContactOpen, setIsContactOpen] = useState(false);

  // --- LÓGICA DE SCROLL (El motor de la navegación) ---
  const scrollToSection = (sectionId: string) => {
    // Si el ID es 'precios' o 'ecosistema', hacemos scroll dentro de la home
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    } else {
      // Si no encuentra el ID (ej: si tienes lógica para ir a otras páginas), 
      // aquí podrías manejar rutas externas. Por ahora, lo mantenemos en Home.
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("inicio");
    }
  };

  // Detectar scroll para iluminar el menú
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "ecosistema", "precios"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      
      {/* 1. HEADER CONECTADO */}
      <TechHeader 
        onSectionClick={scrollToSection} 
        activeSection={activeSection} 
      />

      <main className="pt-16"> {/* Padding top para compensar el header fijo */}
        
        {/* SECCIÓN 1: HERO (Inicio) */}
        <div id="inicio">
          {/* El botón del Hero lleva a Precios */}
          <TechHeroSection onDemoClick={() => scrollToSection("precios")} />
        </div>

        {/* SECCIÓN 2: FUNCIONALIDADES (Ecosistema) */}
        <div id="ecosistema">
          {/* El botón de las tarjetas lleva a Precios */}
          <InteractiveFeatures onPricingClick={() => scrollToSection("precios")} />
        </div>

        {/* SECCIÓN 3: PRECIOS (El objetivo de conversión) */}
        <div id="precios" className="py-10 scroll-mt-24">
          <PlansSection />
          <div className="mt-12">
            <ComparisonSection />
          </div>
        </div>

        {/* SECCIÓN 4: PRUEBA SOCIAL */}
        <div className="py-10 bg-sport-surface/20">
          <TestimonialsCarousel />
        </div>

      </main>

      {/* Footer simple o modal de contacto */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
      <Toaster />
    </div>
  );
};

export default Index;