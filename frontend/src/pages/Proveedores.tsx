import { useState } from "react";
import { ArrowLeft, Truck, Package, Wrench, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { ProveedoresRegistroModal } from "@/components/modals/ProveedoresRegistroModal";
import { RolePricingSection, rolePricingConfigs } from "@/components/common/cards";
import { salesWhatsappLink } from "@/lib/whatsappFallback";

const SUPPLIER_PILOT_URL = salesWhatsappLink(
  "Hola SportMaps, soy proveedor y quiero aparecer como proveedor recomendado para escuelas (piloto gratis por un mes)."
);

function openSupplierPilot() {
  window.open(SUPPLIER_PILOT_URL, "_blank", "noopener,noreferrer");
}

export default function Proveedores() {
  const [isRegistroOpen, setIsRegistroOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO 
        title="Proveedores - SportMaps Ecosistema Deportivo"
        description="Proveedor recomendado para escuelas: aparece en el directorio de proveedores de SportMaps con tus datos de contacto. Piloto gratis por un mes."
        url="https://sportmaps.co/proveedores"
        canonical="https://sportmaps.co/proveedores"
        keywords="proveedores deportivos, servicios para escuelas, logística deportiva, equipamiento deportivo"
      />
      <TechBackground />
      
      <header className="relative z-10 border-b border-sport-border bg-sport-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-sport-primary">Proveedores</h1>
            <p className="text-sm text-sport-text-secondary">Proveedor recomendado para escuelas</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            Proveedor recomendado para escuelas
          </h2>
          <p className="text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
            Aparece en el directorio de proveedores recomendados para las escuelas deportivas, con tus datos de contacto para que te escriban directo. Piloto gratis por un mes.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">¿Qué tipo de proveedor eres?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Truck className="w-8 h-8 text-sport-primary mb-2" />
                <CardTitle>Logística y Transporte</CardTitle>
                <CardDescription>
                  Transporte de equipos, atletas y material deportivo a competencias y entrenamientos
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Package className="w-8 h-8 text-sport-accent mb-2" />
                <CardTitle>Equipamiento</CardTitle>
                <CardDescription>
                  Suministro de equipos, uniformes y material deportivo para escuelas y clubes
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Wrench className="w-8 h-8 text-sport-highlight mb-2" />
                <CardTitle>Mantenimiento</CardTitle>
                <CardDescription>
                  Servicios de mantenimiento de instalaciones deportivas y equipos
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Shield className="w-8 h-8 text-sport-info mb-2" />
                <CardTitle>Seguros Deportivos</CardTitle>
                <CardDescription>
                  Cobertura para atletas, escuelas y eventos deportivos
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Clock className="w-8 h-8 text-sport-wellness mb-2" />
                <CardTitle>Eventos y Producción</CardTitle>
                <CardDescription>
                  Organización, fotografía, video y producción de eventos deportivos
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Award className="w-8 h-8 text-sport-warning mb-2" />
                <CardTitle>Tecnología</CardTitle>
                <CardDescription>
                  Software, apps y soluciones tecnológicas para el deporte
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <RolePricingSection 
          config={rolePricingConfigs.proveedores}
          onCTA={openSupplierPilot}  
        />

        <section className="text-center bg-sport-card rounded-3xl p-8 border border-sport-border mt-12">
          <h3 className="text-2xl font-bold mb-4">Sé proveedor recomendado</h3>
          <p className="text-sport-text-secondary mb-6 max-w-2xl mx-auto">
            Escríbenos por WhatsApp para entrar al piloto, o déjanos los datos de tu empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" onClick={openSupplierPilot}>
              Quiero el piloto
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsRegistroOpen(true)}>
              Registrar mi empresa
            </Button>
          </div>
        </section>
      </main>
      
      <SportMapsFooter />
      
      <ProveedoresRegistroModal 
        isOpen={isRegistroOpen} 
        onClose={() => setIsRegistroOpen(false)} 
      />
    </div>
  );
}