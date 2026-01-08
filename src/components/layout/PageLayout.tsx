import { ReactNode } from "react";
import { TechBackground } from "@/components/TechBackground";
import { TechHeader } from "@/components/TechHeader";
import { SEOFooter } from "@/components/SEOFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DemoModal } from "@/components/DemoModal";
import { SEO } from "@/components/SEO";
import type { SectionId } from "@/hooks/usePageNavigation";

interface PageLayoutProps {
  children: ReactNode;
  activeSection: SectionId;
  onSectionClick: (sectionId: string) => void;
  isDemoOpen: boolean;
  onDemoClose: () => void;
  seoTitle?: string;
  seoDescription?: string;
}

export function PageLayout({
  children,
  activeSection,
  onSectionClick,
  isDemoOpen,
  onDemoClose,
  seoTitle = "Inicio",
  seoDescription = "Descubre, crea y comparte rutas deportivas. La mejor plataforma de mapas para ciclismo, running, senderismo y más. Conectamos atletas, escuelas deportivas y profesionales del deporte en Colombia.",
}: PageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-sport-background">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        url="https://sportmaps.co/"
        canonical="https://sportmaps.co/"
      />
      <TechBackground />
      <TechHeader 
        onSectionClick={onSectionClick}
        activeSection={activeSection}
      />
      
      <main className="relative transition-all duration-500 pt-16">
        {children}
      </main>

      <SEOFooter />
      <WhatsAppButton />

      <DemoModal 
        isOpen={isDemoOpen}
        onClose={onDemoClose}
      />
    </div>
  );
}
