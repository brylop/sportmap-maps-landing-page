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
        "bg-sport-card border-2 border-transparent rounded-2xl p-6 cursor-pointer transition-all duration-300 shadow-elegant hover:shadow-hover hover:-translate-y-1",
        `hover:border-${color}`
      )}
      style={{ "--tw-border-opacity": "1" } as React.CSSProperties}
    >
      <div 
        className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4"
        style={{ 
          background: `linear-gradient(135deg, hsl(var(--sport-${color})), hsl(var(--sport-${color})) 50%, hsl(var(--sport-accent)) 100%)`
        }}
      >
        <Icon className="w-8 h-8" />
      </div>
      
      <h4 className="text-center text-xl font-bold mb-2 text-sport-text">
        {title}
      </h4>
      
      <p className="text-center text-sport-text/70">
        {description}
      </p>
    </div>
  );
}