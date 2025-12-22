import { useState, useCallback, useMemo } from "react";
import { usePageNavigation, SectionId } from "@/hooks/usePageNavigation";
import { PageLayout } from "@/components/layout";

// --- 1. NUEVOS COMPONENTES (Ajustados a tu estructura de carpetas) ---
// Estos están en la raíz de components según tus imágenes:
import { TechHeroSection } from "@/components/TechHeroSection";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

// Estos están dentro de sections/Pricing según la imagen 'image_81d8af.png':
import { PlansSection } from "@/components/sections/Pricing/PlansSection";
import { ComparisonSection } from "@/components/sections/Pricing/ComparisonSection";

// --- 2. MÓDULOS EXISTENTES (Se mantienen igual) ---
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
      // --- ESTRATEGIA DE CONVERSIÓN (Home) ---
      inicio: (
        <>
          {/* Paso 1: Hero (Promesa + Dashboard Visual) */}
          <TechHeroSection onDemoClick={handleDemoOpen} />
          
          {/* Paso 2: Explicación (Cómo funciona) */}
          <InteractiveFeatures />
          
          {/* Paso 3: Precios Claros (Pestañas) */}
          <PlansSection onPlanClick={handleDemoOpen} />
          
          {/* Paso 4: Cierre de Venta (Comparativa vs Mindbody) */}
          <ComparisonSection />

          {/* Paso 5: Confianza (Testimonios) */}
          <TestimonialsCarousel />
        </>
      ),
      
      // --- NAVEGACIÓN INTERNA ---
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