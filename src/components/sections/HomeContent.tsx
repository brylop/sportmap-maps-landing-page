import { AnimatedSection } from "@/components/AnimatedSection";
import { ParallaxHero } from "@/components/ParallaxHero";
import { TechHeroSection } from "@/components/TechHeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { StatsSection } from "@/components/StatsSection";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { SearchSection } from "@/components/SearchSection";
import { EcosistemaModule } from "@/components/modules/EcosistemaModule";
import { PricingHeroSection } from "@/components/landing/PricingHeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { PlansSection } from "@/components/landing/PlansSection";
import { SponsorshipsSection } from "@/components/landing/SponsorshipsSection";
import { CTAFinalSection } from "@/components/landing/CTAFinalSection";
import { NetworkSection } from "./NetworkSection";

interface HomeContentProps {
  onDemoClick: () => void;
  onModuleClick: (sectionId: string) => void;
}

export function HomeContent({ onDemoClick, onModuleClick }: HomeContentProps) {
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
      
      <AnimatedSection direction="up" delay={0.1}>
        <PlansSection onPlanClick={onDemoClick} />
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
      
      <AnimatedSection direction="up" delay={0.2}>
        <InteractiveFeatures />
      </AnimatedSection>
      
      <AnimatedSection direction="fade" delay={0.1}>
        <TestimonialsCarousel />
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
