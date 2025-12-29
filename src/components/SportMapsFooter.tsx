import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export function SportMapsFooter() {
  return (
    <footer className="bg-sport-surface border-t border-sport-border">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Logo & Description */}
          <div className="text-center lg:text-left max-w-md">
            <Link to="/" className="text-xl font-bold text-foreground">
              Sport<span className="text-sport-primary">Maps</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              El ecosistema deportivo más completo de Latinoamérica.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm" aria-label="Footer Navigation">
            <Link to="/" className="text-muted-foreground hover:text-sport-primary transition-colors">
              Inicio
            </Link>
            <Link to="/deportistas" className="text-muted-foreground hover:text-sport-primary transition-colors">
              Deportistas
            </Link>
            <Link to="/escuelas" className="text-muted-foreground hover:text-sport-primary transition-colors">
              Escuelas
            </Link>
            <Link to="/bienestar" className="text-muted-foreground hover:text-sport-primary transition-colors">
              Bienestar
            </Link>
            <Link to="/sobre-nosotros" className="text-muted-foreground hover:text-sport-primary transition-colors">
              Nosotros
            </Link>
          </nav>

          {/* Contact & Social */}
          <div className="flex flex-col items-center lg:items-end gap-3">
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/spoort_maps" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-sport-primary transition-colors" 
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/spoortmaps/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-sport-primary transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61583784419106" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-sport-primary transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:spoortmaps@gmail.com" className="flex items-center gap-1 hover:text-sport-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">spoortmaps@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/573128463555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 hover:text-sport-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">+57 312 846 3555</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-6 border-t border-sport-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SportMaps. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacidad" className="text-muted-foreground hover:text-sport-primary transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-border">|</span>
            <Link to="/terminos" className="text-muted-foreground hover:text-sport-primary transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>

      {/* Hidden Partners Section - Uncomment when ready to launch 
      <section className="py-8 bg-sport-surface border-t border-sport-border">
        <div className="container mx-auto px-4 text-center">
          <Link to="/partners" className="inline-block border border-sport-primary text-sport-primary hover:bg-sport-primary hover:text-white transition-colors h-10 px-6 rounded-md text-sm font-medium leading-10">
            Zona de Partners
          </Link>
        </div>
      </section>
      */}
    </footer>
  );
}