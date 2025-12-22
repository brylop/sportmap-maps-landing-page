import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSectionClick: (section: string) => void;
  activeSection: string;
}

export function Header({ onSectionClick, activeSection }: HeaderProps) {
  const navItems = [
    { id: "ecosistema", label: "Nuestra plataforma" },
    { id: "escuelas", label: "Escuelas" },
    { id: "tienda", label: "Tienda" },
    { id: "acerca", label: "Nosotros" },
    { id: "unete", label: "Contáctanos" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-sport-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => onSectionClick("inicio")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-sport-text">SportMaps</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-sport-primary ${
                  activeSection === item.id 
                    ? 'text-sport-primary' 
                    : 'text-sport-text/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => onSectionClick("unete")}
            variant="default"
          >
            Únete ahora!
          </Button>
        </div>
      </div>
    </header>
  );
}