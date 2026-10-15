import { useState } from "react";
import { ArrowLeft, Shirt, Wallet, Store, Package, Users, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";

export default function Equipamiento() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO
        title="Tienda de tu Escuela - Uniformes y Kits"
        description="La tienda de tu escuela en SportMaps: cada escuela vende sus uniformes y kits a sus familias y recibe el pago en su propia pasarela."
        url="https://sportmaps.co/equipamiento"
        canonical="https://sportmaps.co/equipamiento"
        keywords="tienda escuela deportiva, uniformes escuela deportiva, kits deportivos, venta de uniformes, Colombia"
      />
      <TechBackground />

      {/* Header */}
      <header className="relative z-10 border-b border-sport-border bg-sport-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-sport-primary">Tienda de tu Escuela</h1>
            <p className="text-sm text-sport-text-secondary">Uniformes y kits de tu academia, vendidos por tu academia</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            La tienda de tu escuela
          </h2>
          <p className="text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
            Cada escuela vende sus uniformes y kits a sus propias familias, y el pago llega a su propia pasarela. SportMaps no es una tienda: es la vitrina de tu escuela.
          </p>
          <Button size="lg" onClick={() => setIsDemoOpen(true)}>
            Quiero la tienda para mi escuela
          </Button>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-sport-border bg-sport-card text-center">
              <CardContent className="pt-6">
                <Shirt className="w-8 h-8 text-sport-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Tus uniformes y kits</h3>
                <p className="text-sm text-sport-text-secondary">Publica los productos de tu escuela, con tallas y variantes</p>
              </CardContent>
            </Card>

            <Card className="border-sport-border bg-sport-card text-center">
              <CardContent className="pt-6">
                <Wallet className="w-8 h-8 text-sport-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Cobras en tu pasarela</h3>
                <p className="text-sm text-sport-text-secondary">El pago entra a la pasarela de la escuela, no a la de SportMaps</p>
              </CardContent>
            </Card>

            <Card className="border-sport-border bg-sport-card text-center">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-sport-highlight mx-auto mb-4" />
                <h3 className="font-bold mb-2">Para tus familias</h3>
                <p className="text-sm text-sport-text-secondary">Los acudientes compran desde la misma app donde pagan la mensualidad</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Cómo funciona</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sport-border bg-sport-card">
              <CardHeader>
                <School className="w-8 h-8 text-sport-primary mb-2" />
                <CardTitle>1. Activas la tienda</CardTitle>
                <CardDescription>
                  La escuela activa el adicional Tienda escolar en su plan
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-sport-border bg-sport-card">
              <CardHeader>
                <Package className="w-8 h-8 text-sport-accent mb-2" />
                <CardTitle>2. Cargas tus productos</CardTitle>
                <CardDescription>
                  Uniformes, kits y mercancía de tu escuela, con sus precios
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-sport-border bg-sport-card">
              <CardHeader>
                <Store className="w-8 h-8 text-sport-highlight mb-2" />
                <CardTitle>3. Tus familias compran</CardTitle>
                <CardDescription>
                  Pagan con la pasarela de la escuela y tú gestionas la entrega
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-sport-card rounded-3xl p-8 border border-sport-border">
          <h3 className="text-2xl font-bold mb-4">¿Vendes uniformes en tu escuela?</h3>
          <p className="text-sport-text-secondary mb-6 max-w-2xl mx-auto">
            Escríbenos y te mostramos cómo montar la tienda de tu escuela
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" onClick={() => setIsDemoOpen(true)}>
              Solicitar demo
            </Button>
          </div>
        </section>
      </main>
      <SportMapsFooter />
      <WhatsAppButton />
      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} source="equipamiento" />
    </div>
  );
}
