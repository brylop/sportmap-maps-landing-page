import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Dumbbell, Heart, School, Mail, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react';

export function SEOFooter() {
  return (
    <footer className="bg-sport-surface border-t border-sport-border mt-16">
      {/* Main SEO Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About SportMaps */}
          <article className="space-y-4">
            <h2 className="text-xl font-bold text-sport-text-primary">
              Sobre SportMaps
            </h2>
            <p className="text-sport-text-muted text-sm leading-relaxed">
              SportMaps es la plataforma líder en ecosistemas deportivos. Conectamos atletas, 
              escuelas deportivas, entrenadores y profesionales del bienestar en una sola red. 
              Descubre rutas de ciclismo, running y senderismo, encuentra tu escuela deportiva ideal 
              y accede a programas de nutrición personalizados.
            </p>
          </article>

          {/* Routes & Maps */}
          <nav className="space-y-4" aria-label="Rutas y Mapas">
            <h2 className="text-xl font-bold text-sport-text-primary flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sport-primary" />
              Rutas y Mapas Deportivos
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/deportistas" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Rutas de Ciclismo en Colombia
                </Link>
              </li>
              <li>
                <Link to="/deportistas" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Mapas de Running y Atletismo
                </Link>
              </li>
              <li>
                <Link to="/deportistas" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Senderos para Senderismo
                </Link>
              </li>
              <li>
                <Link to="/deportistas" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Rutas de Altimetría
                </Link>
              </li>
            </ul>
          </nav>

          {/* Sports Schools */}
          <nav className="space-y-4" aria-label="Escuelas Deportivas">
            <h2 className="text-xl font-bold text-sport-text-primary flex items-center gap-2">
              <School className="w-5 h-5 text-sport-primary" />
              Escuelas Deportivas
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/escuelas" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Escuelas de Fútbol
                </Link>
              </li>
              <li>
                <Link to="/escuelas" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Academias de Natación
                </Link>
              </li>
              <li>
                <Link to="/escuelas" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Centros de Artes Marciales
                </Link>
              </li>
              <li>
                <Link to="/escuelas" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Clubes de Ciclismo
                </Link>
              </li>
            </ul>
          </nav>

          {/* Wellness & Nutrition */}
          <nav className="space-y-4" aria-label="Bienestar y Nutrición">
            <h2 className="text-xl font-bold text-sport-text-primary flex items-center gap-2">
              <Heart className="w-5 h-5 text-sport-primary" />
              Bienestar Deportivo
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/bienestar" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Nutrición para Atletas
                </Link>
              </li>
              <li>
                <Link to="/bienestar" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Planes de Suplementación
                </Link>
              </li>
              <li>
                <Link to="/bienestar" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Fisioterapia Deportiva
                </Link>
              </li>
              <li>
                <Link to="/bienestar" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                  Psicología del Deporte
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Extended SEO Description */}
        <article className="mt-12 pt-8 border-t border-sport-border">
          <h2 className="text-2xl font-bold text-sport-text-primary mb-4">
            El Ecosistema Deportivo más Completo de Latinoamérica
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sport-text-muted text-sm leading-relaxed">
            <p>
              En <strong>SportMaps</strong> creamos el puente entre deportistas amateur y profesionales, 
              escuelas deportivas certificadas, entrenadores personales y expertos en nutrición deportiva. 
              Nuestra plataforma ofrece mapas interactivos con rutas verificadas para ciclismo de montaña, 
              ciclismo de ruta, running urbano y trail running en toda Colombia y Latinoamérica.
            </p>
            <p>
              Encuentra tu próxima aventura deportiva, conecta con entrenadores certificados, 
              descubre escuelas deportivas cerca de ti y accede a planes de nutrición personalizados. 
              Ya seas un corredor principiante buscando rutas seguras o un ciclista experimentado 
              explorando nuevos desafíos de altimetría, SportMaps tiene todo lo que necesitas.
            </p>
          </div>
        </article>

        {/* Features Grid for SEO */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 text-sm text-sport-text-muted">
            <MapPin className="w-4 h-4 text-sport-primary" />
            <span>+500 Rutas Deportivas</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-sport-text-muted">
            <School className="w-4 h-4 text-sport-primary" />
            <span>+200 Escuelas Registradas</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-sport-text-muted">
            <Users className="w-4 h-4 text-sport-primary" />
            <span>+50 Entrenadores</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-sport-text-muted">
            <Dumbbell className="w-4 h-4 text-sport-primary" />
            <span>+1000 Atletas Activos</span>
          </div>
        </div>
      </section>

      {/* Contact & Legal */}
      <section className="bg-sport-background border-t border-sport-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-sport-text-muted">
              <a href="mailto:spoortmaps@gmail.com" className="flex items-center gap-2 hover:text-sport-primary transition-colors">
                <Mail className="w-4 h-4" />
                spoortmaps@gmail.com
              </a>
              <a href="https://wa.me/573128463555" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sport-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                +57 312 846 3555
              </a>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a href="https://x.com/spoort_maps" target="_blank" rel="noopener noreferrer" className="text-sport-text-muted hover:text-sport-primary transition-colors" aria-label="Twitter/X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/spoortmaps/" target="_blank" rel="noopener noreferrer" className="text-sport-text-muted hover:text-sport-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583784419106" target="_blank" rel="noopener noreferrer" className="text-sport-text-muted hover:text-sport-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-4 text-sm" aria-label="Legal">
              <Link to="/" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                Inicio
              </Link>
              <Link to="/deportistas" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                Deportistas
              </Link>
              <Link to="/escuelas" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                Escuelas
              </Link>
              <Link to="/bienestar" className="text-sport-text-muted hover:text-sport-primary transition-colors">
                Bienestar
              </Link>
            </nav>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 pt-4 border-t border-sport-border">
            <Link to="/privacidad" className="text-xs text-sport-text-muted hover:text-sport-primary transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-sport-border">|</span>
            <Link to="/terminos" className="text-xs text-sport-text-muted hover:text-sport-primary transition-colors">
              Términos y Condiciones
            </Link>
          </div>
          
          <p className="text-center text-xs text-sport-text-muted mt-4">
            © {new Date().getFullYear()} SportMaps. Todos los derechos reservados. 
            Plataforma de mapas deportivos y ecosistema para atletas en Colombia y Latinoamérica.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default SEOFooter;
