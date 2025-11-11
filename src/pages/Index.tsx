import { useState } from "react";
import { TechHeader } from "@/components/TechHeader";
import { TechBackground } from "@/components/TechBackground";
import { TechHeroSection } from "@/components/TechHeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { StatsSection } from "@/components/StatsSection";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { SearchSection } from "@/components/SearchSection";
import { DemoModal } from "@/components/DemoModal";
import { EcosistemaModule } from "@/components/modules/EcosistemaModule";
import { EscuelasModule } from "@/components/modules/EscuelasModule";
import { TiendaModule } from "@/components/modules/TiendaModule";
import { NutricionModule } from "@/components/modules/NutricionModule";
import { BienestarModule } from "@/components/modules/BienestarModule";
import { UneteModule } from "@/components/modules/UneteModule";
import { AcercaModule } from "@/components/modules/AcercaModule";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ParallaxHero } from "@/components/ParallaxHero";
import { ThreeScene } from "@/components/ThreeScene";

const Index = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openDemo = () => {
    window.open('/deportistas', '_blank');
  };

  const renderActiveModule = () => {
    switch (activeSection) {
      case "inicio":
        return (
          <>
            <ParallaxHero>
              <TechHeroSection onDemoClick={openDemo} />
            </ParallaxHero>
            <AnimatedSection direction="fade" delay={0.1}>
              <HowItWorksSection />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <StatsSection />
            </AnimatedSection>
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 my-16" direction="fade" delay={0.3}>
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-sport-text-primary mb-4">
                  Red de Conexiones SportMaps
                </h2>
                <p className="text-lg text-sport-text-secondary max-w-2xl mx-auto">
                  Explora cómo conectamos escuelas, entrenadores y deportistas en un ecosistema integrado
                </p>
              </div>
              <ThreeScene />
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
              <EcosistemaModule onModuleClick={scrollToSection} />
            </AnimatedSection>
          </>
        );
      case "ecosistema":
        return <EcosistemaModule onModuleClick={scrollToSection} />;
      case "escuelas":
        return <EscuelasModule />;
      case "tienda":
        return <TiendaModule />;
      case "nutricion":
        return <NutricionModule />;
      case "bienestar":
        return <BienestarModule />;
      case "unete":
        return <UneteModule />;
      case "acerca":
        return <AcercaModule />;
      default:
        return (
          <>
            <ParallaxHero>
              <TechHeroSection onDemoClick={openDemo} />
            </ParallaxHero>
            <AnimatedSection direction="fade" delay={0.1}>
              <HowItWorksSection />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <StatsSection />
            </AnimatedSection>
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 my-16" direction="fade" delay={0.3}>
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-sport-text-primary mb-4">
                  Red de Conexiones SportMaps
                </h2>
                <p className="text-lg text-sport-text-secondary max-w-2xl mx-auto">
                  Explora cómo conectamos escuelas, entrenadores y deportistas en un ecosistema integrado
                </p>
              </div>
              <ThreeScene />
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
              <EcosistemaModule onModuleClick={scrollToSection} />
            </AnimatedSection>
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-sport-background">
      <TechBackground />
      <TechHeader 
        onSectionClick={scrollToSection}
        activeSection={activeSection}
      />
      
      <main className="relative transition-all duration-500 pt-16">
        {renderActiveModule()}
      </main>
    </div>
  );
};

export default Index;