import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SportMapsFooter() {
  return (
    <footer className="bg-[#0B1121] border-t border-white/10 pt-16 pb-8 text-sm text-gray-400">
      <div className="container mx-auto px-4">
        
        {/* Grid de 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Identidad y Redes (ACTUALIZADO CON TUS LINKS REALES) */}
          <div className="space-y-6">
            <div>
              <span className="text-2xl font-bold bg-gradient-tech-primary bg-clip-text text-transparent">
                SportMaps
              </span>
              <p className="mt-4 leading-relaxed">
                Co-creando la realidad tecnológica del deporte. Conectamos atletas, escuelas y marcas en un ecosistema unificado.
              </p>
            </div>
            <div className="flex gap-3">
              {/* Instagram */}
              <SocialBtn 
                icon={Instagram} 
                href="https://www.instagram.com/spoortmaps/" 
                label="Instagram"
              />
              {/* Facebook */}
              <SocialBtn 
                icon={Facebook} 
                href="https://www.facebook.com/profile.php?id=61583784419106" 
                label="Facebook"
              />
              {/* X (Twitter) */}
              <SocialBtn 
                icon={Twitter} 
                href="https://x.com/spoort_maps" 
                label="X (Twitter)"
              />
              {/* LinkedIn (Pendiente - Déjalo así o bórralo si no tienes aún) */}
              <SocialBtn 
                icon={Linkedin} 
                href="https://linkedin.com" 
                label="LinkedIn"
              />
            </div>
          </div>

          {/* 2. Soluciones */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Soluciones</h3>
            <ul className="space-y-3">
              <FooterLink text="Gestión para Escuelas" />
              <FooterLink text="Entrenadores Pro" />
              <FooterLink text="Perfil de Atleta" />
              <FooterLink text="Marketplace Deportivo" />
              <FooterLink text="Federaciones y Ligas" />
            </ul>
          </div>

          {/* 3. Compañía */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">SportMaps Tech</h3>
            <ul className="space-y-3">
              <FooterLink text="Sobre Nosotros" />
              <FooterLink text="Casos de Éxito" />
              <FooterLink text="Blog de Tecnología" />
              <FooterLink text="Centro de Ayuda" />
              <Button variant="outline" className="mt-4 border-sport-primary text-sport-primary hover:bg-sport-primary hover:text-white transition-colors h-9 px-4">
                Zona de Partners
              </Button>
            </ul>
          </div>

          {/* 4. Contacto & Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contacto & Legal</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sport-primary shrink-0" />
                <span>Bogotá D.C., Colombia<br/>Latinoamérica</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sport-primary shrink-0" />
                <a href="mailto:hola@sportmaps.co" className="hover:text-white transition-colors">
                  hola@sportmaps.co
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sport-primary shrink-0" />
                <span>+57 (300) 123-4567</span>
              </li>
              <li className="pt-4 border-t border-white/10 mt-2 flex flex-col gap-2">
                 <FooterLink text="Política de Privacidad" isLegal />
                 <FooterLink text="Términos y Condiciones" isLegal />
                 <FooterLink text="Tratamiento de Datos" isLegal />
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2025 SportMaps Technology S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-gray-500">
            <ShieldCheck className="w-4 h-4 text-sport-success" />
            <span className="text-xs">Sitio Seguro SSL & Pagos Protegidos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Componentes auxiliares
function FooterLink({ text, isLegal = false }: { text: string; isLegal?: boolean }) {
  return (
    <li>
      <a 
        href="#" 
        className={`transition-colors hover:translate-x-1 inline-block ${
          isLegal ? "text-gray-500 hover:text-gray-300 text-xs" : "hover:text-sport-primary"
        }`}
      >
        {text}
      </a>
    </li>
  );
}

function SocialBtn({ icon: Icon, href, label }: { icon: any, href: string, label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-sport-primary hover:text-white transition-all duration-300"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}