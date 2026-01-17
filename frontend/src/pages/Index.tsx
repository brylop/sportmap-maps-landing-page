import { useRef, useState } from "react";
import { TechHeader } from "@/components/TechHeader";
import { SegmentedHero } from "@/components/SegmentedHero";
import { MapHeroSection } from "@/components/map/MapHeroSection";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { PlansSection } from "@/components/sections/Pricing";
import { ComparisonSection } from "@/components/sections/Pricing";
import { SponsorshipsSection } from "@/components/sections/ValueProp";
import { CTAFinalSection } from "@/components/sections/CTA";

export default function Index() {
  const mapRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [selectedClient, setSelectedClient] = useState("escuelas");

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="SportMaps | El Mapa Vivo del Deporte en Colombia"
        description="Conecta, gestiona y monetiza tu presencia deportiva. Academias, entrenadores, eventos, rutas y más en una sola plataforma. El ecosistema deportivo #1 de Colombia."
        url="https://sportmaps.co"
        canonical="https://sportmaps.co"
        keywords="mapa deportivo colombia, academias deportivas, entrenadores personales, eventos deportivos, rutas ciclismo running, escuelas deportivas"
      />
      
      <TechHeader onSectionClick={handleSectionClick} />

      <main className="pt-16">
        {/* Hero Section with Roles */}
        <SegmentedHero onScrollToMap={scrollToMap} />

        {/* Interactive Map Section */}
        <div ref={mapRef} id="mapa">
          <MapHeroSection onScrollToFeatures={scrollToFeatures} />
        </div>

        {/* Ecosystem Features - Un Ecosistema para Todos */}
        <div ref={featuresRef} id="ecosistema">
          <AnimatedSection direction="up" delay={0.2}>
            <InteractiveFeatures 
              onPricingClick={scrollToPlans}
              selectedClient={selectedClient}
              setSelectedClient={setSelectedClient}
            />
          </AnimatedSection>
        </div>

        {/* Plans Section */}
        <AnimatedSection direction="up" delay={0.1}>
          <div id="plans-section">
            <PlansSection selectedClient={selectedClient} />
          </div>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection direction="fade" delay={0.1}>
          <ComparisonSection />
        </AnimatedSection>

        {/* Sponsorships / Tienda */}
        <AnimatedSection direction="fade" delay={0.1}>
          <SponsorshipsSection />
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection direction="fade" delay={0.1}>
          <TestimonialsSection />
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection direction="up" delay={0.1}>
          <CTAFinalSection 
            onStartClick={() => {}} 
            onDemoClick={() => {}} 
          />
        </AnimatedSection>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
}
