import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { ContactModal } from "./modals/ContactModal";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TechHeaderProps {
  onSectionClick?: (section: string) => void;
  activeSection?: string;
}

export function TechHeader({ onSectionClick, activeSection = "" }: TechHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navItems = [
    { id: "ecosistema", label: "Soluciones" },
    { id: "precios", label: "Precios" },
    { id: "tienda", label: "Marketplace" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage && onSectionClick) {
      onSectionClick(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    if (isHomePage && onSectionClick) {
      onSectionClick("inicio");
    } else {
      navigate("/");
    }
  };

  const handleStartFree = () => {
    setIsMobileMenuOpen(false);
    if (isHomePage && onSectionClick) {
      onSectionClick("precios");
    } else {
      navigate("/#precios");
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-sport-border/50 shadow-tech-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Clean & Minimal */}
            <motion.div 
              onClick={handleLogoClick}
              className="flex items-center gap-2 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-9 h-9 bg-gradient-to-br from-sport-primary to-sport-accent rounded-xl flex items-center justify-center shadow-tech-sm group-hover:shadow-glow-primary transition-all duration-500">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">
                SportMaps
              </span>
            </motion.div>

            {/* Desktop Navigation - Minimal Style */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id 
                      ? 'text-foreground' 
                      : 'text-sport-text-secondary hover:text-foreground'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute inset-0 bg-sport-surface rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              <Button
                variant="ghost"
                onClick={() => setIsContactModalOpen(true)}
                className="hidden md:flex text-sm font-medium text-sport-text-secondary hover:text-foreground hover:bg-sport-surface"
              >
                Contacto
              </Button>
              
              <Button
                onClick={handleStartFree}
                className="hidden sm:flex bg-foreground hover:bg-foreground/90 text-background px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] group"
              >
                Empezar
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>

              {/* Mobile Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-sport-surface"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Clean Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-16 left-4 right-4 bg-card border border-sport-border rounded-2xl p-4 shadow-tech-lg"
            >
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center p-3 rounded-xl text-left transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-sport-surface text-foreground font-semibold' 
                        : 'text-sport-text-secondary hover:bg-sport-surface/50 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-3 mt-3 border-t border-sport-border space-y-2">
                   <Button 
                     onClick={handleStartFree} 
                     className="w-full bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-xl"
                   >
                      Empezar gratis
                      <ArrowRight className="w-4 h-4 ml-2" />
                   </Button>
                   <Button 
                     onClick={() => {
                       setIsMobileMenuOpen(false);
                       setIsContactModalOpen(true);
                     }} 
                     variant="ghost" 
                     className="w-full hover:bg-sport-surface rounded-xl"
                   >
                      Contacto
                   </Button>
                </div>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}