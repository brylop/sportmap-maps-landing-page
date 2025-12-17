import { useState, useCallback } from "react";

export type SectionId = 
  | "inicio" 
  | "ecosistema" 
  | "escuelas" 
  | "tienda" 
  | "nutricion" 
  | "bienestar" 
  | "unete" 
  | "acerca";

interface UsePageNavigationReturn {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  scrollToSection: (sectionId: string) => void;
}

export function usePageNavigation(initialSection: SectionId = "inicio"): UsePageNavigationReturn {
  const [activeSection, setActiveSection] = useState<SectionId>(initialSection);

  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId as SectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return {
    activeSection,
    setActiveSection,
    scrollToSection,
  };
}
