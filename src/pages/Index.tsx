import { useState, useEffect } from "react";
import { TechHeader } from "@/components/TechHeader";
import { TechHeroSection } from "@/components/TechHeroSection";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { PlansSection } from "@/components/sections/Pricing/PlansSection";
import { ComparisonSection } from "@/components/sections/Pricing/ComparisonSection";
import { Toaster } from "@/components/ui/toaster";
import { ContactModal } from "@/components/modals/ContactModal";

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // ESTADO NUEVO: Controla qué actor está seleccionado globalmente
  const [selectedClient, setSelectedClient] = useState("escuelas");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("inicio");
    }
  };

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
      <TechHeader 
        onSectionClick={scrollToSection} 
        activeSection={activeSection} 
      />

      <main className="pt-16">
        <div id="inicio">
          <TechHeroSection onDemoClick={() => scrollToSection("precios")} />
        </div>

        <div id="ecosistema">
          {/* PASAMOS EL ESTADO Y LA FUNCIÓN PARA CAMBIARLO */}
          <InteractiveFeatures 
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            onPricingClick={() => scrollToSection("precios")} 
          />
        </div>

        <div id="precios" className="py-10 scroll-mt-24">
          {/* LOS PRECIOS AHORA RECIBEN QUÉ CLIENTE ESTÁ SELECCIONADO */}
          <PlansSection selectedClient={selectedClient} />
          <div className="mt-12">
            <ComparisonSection />
          </div>
        </div>

        <div className="py-10 bg-sport-surface/20">
          <TestimonialsCarousel />
        </div>
      </main>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
      <Toaster />
    </div>
  );
};

export default Index;