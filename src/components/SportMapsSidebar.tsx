import { useState } from "react";
import { 
  Home, 
  Globe, 
  School, 
  Store, 
  Pill, 
  Heart, 
  TrendingUp, 
  Users, 
  Info,
  Menu,
  X,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onSectionClick: (sectionId: string) => void;
  activeSection: string;
}

const navigationItems = [
  { id: "inicio", icon: Home, label: "Inicio" },
  { id: "ecosistema", icon: Globe, label: "Ecosistema" },
  { id: "escuelas", icon: School, label: "Escuelas" },
  { id: "tienda", icon: Store, label: "Tienda" },
  { id: "nutricion", icon: Pill, label: "Nutrición" },
  { id: "bienestar", icon: Heart, label: "Bienestar" },
  { id: "inversion", icon: TrendingUp, label: "Inversión" },
  { id: "unete", icon: Users, label: "Únete" },
  { id: "acerca", icon: Info, label: "Acerca de" },
];

export function SportMapsSidebar({ onSectionClick, activeSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false); // Close mobile menu
  };

  return (
    <>
      {/* Mobile menu toggle */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-sport-primary text-white p-3 rounded-xl shadow-elegant"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 h-screen w-72 bg-gradient-primary text-white p-6 z-40 transition-transform duration-300 overflow-y-auto",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/25">
          <MapPin className="w-6 h-6" />
          <h2 className="text-xl font-bold">SportMaps</h2>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200",
                  "hover:bg-white/15",
                  activeSection === item.id && "bg-white/15"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/25">
          <p className="text-sm opacity-75 mb-1">SportMaps © 2025</p>
          <p className="text-sm opacity-75">Conectando el ecosistema deportivo</p>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}