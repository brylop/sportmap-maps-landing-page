import { useState, useCallback, useMemo } from "react";
import { usePageNavigation, SectionId } from "@/hooks/usePageNavigation";
import { PageLayout } from "@/components/layout";
import { HomeContent } from "@/components/sections";
import { EcosistemaModule } from "@/components/modules/EcosistemaModule";
import { EscuelasModule } from "@/components/modules/EscuelasModule";
import { TiendaModule } from "@/components/modules/TiendaModule";
import { NutricionModule } from "@/components/modules/NutricionModule";
import { BienestarModule } from "@/components/modules/BienestarModule";
import { UneteModule } from "@/components/modules/UneteModule";
import { AcercaModule } from "@/components/modules/AcercaModule";

const Index = () => {
  const { activeSection, scrollToSection } = usePageNavigation("inicio");
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleDemoOpen = useCallback(() => setIsDemoOpen(true), []);
  const handleDemoClose = useCallback(() => setIsDemoOpen(false), []);

  const moduleContent = useMemo(() => {
    const moduleMap: Record<SectionId, React.ReactNode> = {
      inicio: (
        <HomeContent 
          onDemoClick={handleDemoOpen} 
          onModuleClick={scrollToSection} 
        />
      ),
      ecosistema: <EcosistemaModule onModuleClick={scrollToSection} />,
      escuelas: <EscuelasModule onContactClick={handleDemoOpen} />,
      tienda: <TiendaModule />,
      nutricion: <NutricionModule />,
      bienestar: <BienestarModule />,
      unete: <UneteModule />,
      acerca: <AcercaModule />,
    };

    return moduleMap[activeSection] || moduleMap.inicio;
  }, [activeSection, handleDemoOpen, scrollToSection]);

  return (
    <PageLayout
      activeSection={activeSection}
      onSectionClick={scrollToSection}
      isDemoOpen={isDemoOpen}
      onDemoClose={handleDemoClose}
    >
      {moduleContent}
    </PageLayout>
  );
};

export default Index;
