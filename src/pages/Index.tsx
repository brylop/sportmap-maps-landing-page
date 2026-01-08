import { useState, useEffect, useRef } from "react";
import { TechHeader } from "@/components/TechHeader";
import { CompactHero } from "@/components/CompactHero";
import { MapHeroSection } from "@/components/map/MapHeroSection";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { PlansSection } from "@/components/sections/Pricing/PlansSection";
import { ComparisonSection } from "@/components/sections/Pricing/ComparisonSection";
import { Toaster } from "@/components/ui/toaster";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { ContactModal } from "@/components/modals/ContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TiendaModule } from "@/components/modules/TiendaModule";

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState("escuelas");
  const mapSectionRef = useRef<HTMLDivElement>(null);

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

  const scrollToMap = () => {
    mapSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "mapa", "ecosistema", "precios", "tienda"];
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
    <div className="min-h-screen bg-background text-foreground">
      <TechHeader 
        onSectionClick={scrollToSection} 
        activeSection={activeSection} 
      />

      <main className="pt-16">
        {/* Compact Hero with CTA to Map */}
        <div id="inicio">
          <CompactHero onScrollToMap={scrollToMap} />
        </div>

        {/* Interactive Map Section */}
        <div id="mapa" ref={mapSectionRef}>
          <MapHeroSection onScrollToFeatures={() => scrollToSection("ecosistema")} />
        </div>

        {/* Ecosystem Features */}
        <div id="ecosistema">
          <InteractiveFeatures 
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            onPricingClick={() => scrollToSection("precios")} 
          />
        </div>

        {/* Pricing Section */}
        <div id="precios" className="py-10 scroll-mt-24">
          <PlansSection selectedClient={selectedClient} />
          <div className="mt-12">
            <ComparisonSection />
          </div>
        </div>

        {/* Store Section */}
        <div id="tienda" className="py-10 scroll-mt-24 container mx-auto px-4">
          <TiendaModule />
        </div>

        {/* Testimonials */}
        <div className="py-10 bg-sport-surface/20">
          <TestimonialsCarousel />
        </div>
      </main>

      <SportMapsFooter /> 

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
};

export default Index;