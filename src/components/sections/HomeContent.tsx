import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ParallaxHero } from "@/components/ParallaxHero";
import { TechHeroSection } from "@/components/TechHeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { StatsSection } from "@/components/StatsSection";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { SearchSection } from "@/components/SearchSection";
import { EcosistemaModule } from "@/components/modules/EcosistemaModule";
import { NetworkSection } from "./NetworkSection";

// New organized sections
import { PricingHeroSection, PlansSection, ComparisonSection } from "./Pricing";
import { PainPointsSection, SponsorshipsSection } from "./ValueProp";
import { CTAFinalSection } from "./CTA";
import { TestimonialsSection } from "./Testimonials";

interface HomeContentProps {
  onDemoClick: () => void;
  onModuleClick: (sectionId: string) => void;
}

export function HomeContent({ onDemoClick, onModuleClick }: HomeContentProps) {
  // Estado compartido para el cliente seleccionado
  const [selectedClient, setSelectedClient] = useState("escuelas");

  // Función para ir a la sección de planes
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans-section');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ParallaxHero>
        <TechHeroSection onDemoClick={onDemoClick} />
      </ParallaxHero>
      
      <AnimatedSection direction="fade" delay={0.1}>
        <PricingHeroSection onPlanClick={onDemoClick} />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={0.1}>
        <PainPointsSection />
      </AnimatedSection>
      
      <AnimatedSection direction="fade" delay={0.1}>
        <ComparisonSection />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={0.2}>
        <InteractiveFeatures 
          onPricingClick={scrollToPlans}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
        />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={0.1}>
        <div id="plans-section">
          <PlansSection selectedClient={selectedClient} />
        </div>
      </AnimatedSection>
      
      <AnimatedSection direction="fade" delay={0.1}>
        <SponsorshipsSection />
      </AnimatedSection>
      
      <AnimatedSection direction="fade" delay={0.1}>
        <HowItWorksSection />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={0.2}>
        <StatsSection />
      </AnimatedSection>
      
      <AnimatedSection direction="fade" delay={0.3}>
        <NetworkSection />
      </AnimatedSection>
      
      <AnimatedSection direction="fade" delay={0.1}>
        <TestimonialsSection />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={0.2}>
        <SearchSection />
      </AnimatedSection>
      
      <AnimatedSection direction="fade" delay={0.1}>
        <EcosistemaModule onModuleClick={onModuleClick} />
      </AnimatedSection>
      
      <AnimatedSection direction="up" delay={0.1}>
        <CTAFinalSection 
          onStartClick={onDemoClick} 
          onDemoClick={onDemoClick} 
        />
      </AnimatedSection>
    </>
  );
}
