import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export function SportMapsFooter() {
  return (
    <footer className="bg-sport-surface border-t border-sport-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-bold text-foreground">
              Sport<span className="text-sport-primary">Maps</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-3">
              El ecosistema deportivo más completo de Latinoamérica. Conectamos atletas, escuelas, entrenadores y profesionales del bienestar.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-4 mt-4">
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
          </div>

          {/* Soluciones Column */}
          <nav className="space-y-3" aria-label="Soluciones">
            <h3 className="font-semibold text-foreground">Soluciones</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/escuelas" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Gestión para Escuelas
                </Link>
              </li>
              <li>
                <Link to="/entrenadores" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Entrenadores Pro
                </Link>
              </li>
              <li>
                <Link to="/deportistas" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Perfil de Atleta
                </Link>
              </li>
              <li>
                <Link to="/marcas" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Marketplace Deportivo
                </Link>
              </li>
              <li>
                <Link to="/federaciones" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Federaciones y Ligas
                </Link>
              </li>
              <li>
                <Link to="/bienestar" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Bienestar Deportivo
                </Link>
              </li>
              <li>
                <Link to="/proveedores" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Proveedores
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Servicios
                </Link>
              </li>
            </ul>
          </nav>

          {/* SportMaps Tech Column */}
          <nav className="space-y-3" aria-label="SportMaps Tech">
            <h3 className="font-semibold text-foreground">SportMaps Tech</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre-nosotros" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/casos-exito" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Blog de Tecnología
                </Link>
              </li>
              <li>
                <Link to="/ayuda" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link to="/planes" className="text-muted-foreground hover:text-sport-primary transition-colors">
                  Planes y Precios
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Column */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:spoortmaps@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-sport-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  spoortmaps@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/573128463555" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-sport-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  +57 312 846 3555
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-sport-border">
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
    </footer>
  );
}