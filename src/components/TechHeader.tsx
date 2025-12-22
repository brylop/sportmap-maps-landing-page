import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { JoinTechModal } from "./modals/JoinTechModal";
import { ContactModal } from "./modals/ContactModal";
import { Menu, X, Zap, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TechHeaderProps {
  onSectionClick: (section: string) => void;
  activeSection: string;
}

export function TechHeader({ onSectionClick, activeSection }: TechHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJoinTechModalOpen, setIsJoinTechModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // MODIFICACIÓN CRO: Menú simplificado y enfocado en venta
  const navItems = [
    { id: "ecosistema", label: "Funcionalidades", icon: "🚀" },
    { id: "precios", label: "Precios", icon: "💎" }, // Nueva sección prioritaria
    { id: "escuelas", label: "Para Escuelas", icon: "🏫" },
    { id: "tienda", label: "Marketplace", icon: "🛒" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect border-b border-sport-border/30 shadow-tech-lg' 
            : 'bg-sport-background/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Tech */}
            <div 
              onClick={() => onSectionClick("inicio")}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-tech-primary rounded-xl flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-accent transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-6 h-6 text-white animate-tech-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-sport-accent rounded-full animate-bounce-slow" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-tech-primary bg-clip-text text-transparent">
                  SportMaps
                </span>
                <div className="text-xs text-sport-text-muted font-mono">v2.0 TECH</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`group flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:text-sport-primary relative ${
                    activeSection === item.id 
                      ? 'text-sport-primary' 
                      : 'text-sport-text-secondary hover:text-sport-primary'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-tech-primary rounded-full animate-scale-in" />
                  )}
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-tech-primary rounded-full transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Contact Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  onClick={() => setIsContactModalOpen(true)}
                  className="hidden md:flex border-sport-border hover:bg-sport-surface"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contacto
                </Button>
              </motion.div>
              
              {/* CTA Button Desktop */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setIsJoinTechModalOpen(true)}
                  className="hidden sm:flex bg-gradient-tech-primary hover:shadow-glow-primary text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Empezar Gratis
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 bg-sport-background/95 backdrop-blur-sm border-b border-sport-border/30 p-4 shadow-tech-lg"
            >
              <nav className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => {
                      onSectionClick(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-sport-primary/20 text-sport-primary border border-sport-primary/30' 
                        : 'hover:bg-sport-surface'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                >
                  <Button
                    onClick={() => {
                      setIsContactModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    variant="outline"
                    className="w-full border-sport-border"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contacto
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: (navItems.length + 1) * 0.05 }}
                >
                  <Button
                    onClick={() => {
                      setIsJoinTechModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-tech-primary text-white rounded-lg font-semibold"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Empezar Gratis
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <JoinTechModal 
        isOpen={isJoinTechModalOpen} 
        onClose={() => setIsJoinTechModalOpen(false)} 
      />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}