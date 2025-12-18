import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "./ui/button";

export function SimpleHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-sport-background/95 backdrop-blur-sm border-b border-sport-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-tech-primary rounded-xl flex items-center justify-center shadow-glow-primary group-hover:shadow-glow-secondary transition-all duration-300">
                <span className="text-white font-bold text-lg">SM</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-tech-primary bg-clip-text text-transparent">
                SportMaps
              </span>
              <span className="ml-2 text-xs bg-sport-primary/20 text-sport-primary px-2 py-0.5 rounded-full font-medium">
                TECH
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Volver al inicio</span>
                <Home className="w-4 h-4 sm:hidden" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
