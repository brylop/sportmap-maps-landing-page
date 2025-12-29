import { useState } from "react";
import { ArrowLeft, ShoppingBag, Tag, TrendingUp, Users, Award, Store, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { PlansSection } from "@/components/sections/Pricing/PlansSection";
import { MarcasRegistroModal } from "@/components/modals/MarcasRegistroModal";

export default function Marcas() {
  const [selectedClient] = useState("marcas");
  const [isRegistroOpen, setIsRegistroOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO 
        title="Marcas Deportivas - Marketplace SportMaps"
        description="Vende tus productos deportivos, patrocina atletas y escuelas. Accede al marketplace deportivo más grande de Latinoamérica."
        url="https://sportmaps.co/marcas"
        canonical="https://sportmaps.co/marcas"
        keywords="marcas deportivas, marketplace deportivo, patrocinio deportivo, productos deportivos, tienda deportiva"
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
            <h1 className="text-2xl font-bold text-sport-primary">Marcas Deportivas</h1>
            <p className="text-sm text-sport-text-secondary">Marketplace y patrocinios deportivos</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            Marketplace Deportivo
          </h2>
          <p className="text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
            Conecta tu marca con miles de atletas, escuelas y entrenadores. Vende productos, patrocina talentos y crece en el ecosistema deportivo.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Soluciones para Marcas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Store className="w-8 h-8 text-sport-primary mb-2" />
                <CardTitle>Tienda en el Marketplace</CardTitle>
                <CardDescription>
                  Vende directamente a deportistas y escuelas con pasarela de pagos integrada
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Award className="w-8 h-8 text-sport-accent mb-2" />
                <CardTitle>Patrocinios</CardTitle>
                <CardDescription>
                  Encuentra y patrocina atletas talentosos, escuelas o eventos deportivos
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-sport-highlight mb-2" />
                <CardTitle>Publicidad Segmentada</CardTitle>
                <CardDescription>
                  Campañas dirigidas al público deportivo específico de tu nicho
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-sport-info mb-2" />
                <CardTitle>Analytics Avanzados</CardTitle>
                <CardDescription>
                  Métricas de ventas, alcance y engagement con tu audiencia
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Users className="w-8 h-8 text-sport-wellness mb-2" />
                <CardTitle>Base de Clientes</CardTitle>
                <CardDescription>
                  Accede a +10,000 deportistas y escuelas activas en la plataforma
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Tag className="w-8 h-8 text-sport-warning mb-2" />
                <CardTitle>Descuentos Exclusivos</CardTitle>
                <CardDescription>
                  Ofrece promociones especiales a miembros de SportMaps
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Categorías Disponibles</h3>
          <div className="flex flex-wrap gap-3">
            {["Ropa Deportiva", "Calzado", "Equipamiento", "Nutrición", "Accesorios", "Tecnología", "Suplementos", "Uniformes"].map((cat) => (
              <Badge key={cat} variant="outline" className="px-4 py-2 text-sm border-sport-primary text-sport-primary">
                {cat}
              </Badge>
            ))}
          </div>
        </section>

        {/* Plans Section */}
        <PlansSection selectedClient={selectedClient} />

        <section className="text-center bg-sport-card rounded-3xl p-8 border border-sport-border mt-12">
          <h3 className="text-2xl font-bold mb-4">¿Listo para vender?</h3>
          <p className="text-sport-text-secondary mb-6 max-w-2xl mx-auto">
            Únete al marketplace deportivo más grande y conecta con tu audiencia ideal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" onClick={() => setIsRegistroOpen(true)}>
              Registrar mi marca
            </Button>
          </div>
        </section>
      </main>
      
      <SportMapsFooter />
      
      <MarcasRegistroModal 
        isOpen={isRegistroOpen} 
        onClose={() => setIsRegistroOpen(false)} 
      />
    </div>
  );
}