import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { ContactModal } from "./modals/ContactModal";
import { Menu, X, Zap, MessageSquare, CreditCard, Users, Store } from "lucide-react";
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
    { id: "ecosistema", label: "Soluciones", icon: <Users className="w-4 h-4" /> },
    { id: "precios", label: "Precios y Planes", icon: <CreditCard className="w-4 h-4" /> },
    { id: "tienda", label: "Marketplace", icon: <Store className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-sport-primary/20 shadow-tech-lg' 
            : 'bg-background/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              onClick={handleLogoClick}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-tech-primary rounded-xl flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-accent transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-6 h-6 text-white animate-tech-pulse" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-tech-primary bg-clip-text text-transparent">
                  SportMaps
                </span>
                <div className="text-xs text-sport-text-muted font-mono">ECOSYSTEM</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group flex items-center space-x-2 text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.id 
                      ? 'text-sport-primary' 
                      : 'text-sport-text-secondary hover:text-sport-primary'
                  }`}
                >
                  <span className="text-base opacity-70 group-hover:opacity-100">{item.icon}</span>
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-tech-primary rounded-full animate-scale-in" />
                  )}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              <Button
                variant="outline"
                onClick={() => setIsContactModalOpen(true)}
                className="hidden md:flex border-sport-border hover:bg-sport-surface"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Soporte
              </Button>
              
              <Button
                onClick={handleStartFree}
                className="hidden sm:flex bg-gradient-to-r from-sport-primary to-sport-accent hover:shadow-glow-accent text-white px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-4 h-4 mr-2" />
                Empezar Gratis
              </Button>

              {/* Mobile Toggle */}
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden glass-effect border-tech"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="fixed top-16 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-sport-primary/20 p-4 shadow-tech-lg"
            >
              <nav className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all ${
                      activeSection === item.id 
                        ? 'bg-sport-primary/10 text-sport-primary font-semibold' 
                        : 'text-sport-text-secondary hover:bg-sport-surface'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
                <div className="pt-2 border-t border-sport-primary/20 space-y-3">
                   <Button onClick={handleStartFree} className="w-full bg-gradient-to-r from-sport-primary to-sport-accent text-white font-bold">
                      Empezar Gratis
                   </Button>
                   <Button onClick={() => setIsContactModalOpen(true)} variant="ghost" className="w-full">
                      Contactar Soporte
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