import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

export function ModuleCard({ icon: Icon, title, description, color, onClick }: ModuleCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-sport-card border-2 border-transparent rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 shadow-elegant hover:shadow-hover hover:-translate-y-1",
        `hover:border-${color}`
      )}
      style={{ "--tw-border-opacity": "1" } as React.CSSProperties}
    >
      <div 
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mx-auto mb-3 sm:mb-4"
        style={{ 
          background: `linear-gradient(135deg, hsl(var(--sport-${color})), hsl(var(--sport-${color})) 50%, hsl(var(--sport-accent)) 100%)`
        }}
      >
        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>
      
      <h4 className="text-center text-lg sm:text-xl font-bold mb-2 text-sport-text px-1">
        {title}
      </h4>
      
      <p className="text-center text-sm sm:text-base text-sport-text/70 px-2">
        {description}
      </p>
    </div>
  );
}