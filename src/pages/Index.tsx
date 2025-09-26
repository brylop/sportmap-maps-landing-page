import { useState } from "react";
import { SportMapsSidebar } from "@/components/SportMapsSidebar";
import { HeroSection } from "@/components/HeroSection";
import { SearchSection } from "@/components/SearchSection";
import { DemoModal } from "@/components/DemoModal";
import { EcosistemaModule } from "@/components/modules/EcosistemaModule";
import { EscuelasModule } from "@/components/modules/EscuelasModule";
import { TiendaModule } from "@/components/modules/TiendaModule";
import { NutricionModule } from "@/components/modules/NutricionModule";
import { BienestarModule } from "@/components/modules/BienestarModule";
import { UneteModule } from "@/components/modules/UneteModule";
import { AcercaModule } from "@/components/modules/AcercaModule";

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

  const renderActiveModule = () => {
    switch (activeSection) {
      case "inicio":
        return (
          <>
            <HeroSection onDemoClick={() => setIsDemoOpen(true)} />
            <SearchSection />
            <EcosistemaModule onModuleClick={scrollToSection} />
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
            <HeroSection onDemoClick={() => setIsDemoOpen(true)} />
            <SearchSection />
            <EcosistemaModule onModuleClick={scrollToSection} />
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-sport-background">
      <SportMapsSidebar 
        onSectionClick={scrollToSection}
        activeSection={activeSection}
      />
      
      <main className="flex-1 lg:ml-72 p-4 sm:p-6 md:p-8 transition-all duration-300">
        {renderActiveModule()}
      </main>

      <DemoModal 
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
};

export default Index;