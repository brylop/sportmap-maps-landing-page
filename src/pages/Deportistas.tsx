import { useState } from "react";
import { ArrowLeft, Search, Filter, Star, MapPin, Users, Trophy, Target, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";

export default function Deportistas() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO 
        title="Para Deportistas - Rutas y Escuelas Deportivas"
        description="Encuentra tu escuela deportiva ideal, descubre rutas de ciclismo, running y senderismo. Conecta con entrenadores certificados en Colombia."
        url="https://sportmaps.co/deportistas"
        canonical="https://sportmaps.co/deportistas"
        keywords="deportistas, rutas ciclismo, escuelas deportivas Colombia, entrenadores, running, senderismo, atletismo"
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
            <h1 className="text-2xl font-bold text-sport-primary">Para Deportistas</h1>
            <p className="text-sm text-sport-text-secondary">Encuentra tu escuela ideal y gestiona tu carrera deportiva</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            Impulsa tu carrera deportiva
          </h2>
          <p className="text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
            Descubre escuelas certificadas, conecta con entrenadores expertos y accede a herramientas que te ayudarán a alcanzar tu máximo potencial
          </p>
          
          {/* Search Section */}
          <div className="max-w-2xl mx-auto flex gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sport-text-muted" />
              <Input 
                className="pl-10" 
                placeholder="Buscar por deporte, ubicación o nivel..."
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">¿Qué puedes hacer?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Search className="w-8 h-8 text-sport-primary mb-2" />
                <CardTitle>Búsqueda Avanzada</CardTitle>
                <CardDescription>
                  Encuentra escuelas por ubicación, disciplina, nivel y presupuesto con filtros inteligentes
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Trophy className="w-8 h-8 text-sport-accent mb-2" />
                <CardTitle>Comparación Detallada</CardTitle>
                <CardDescription>
                  Compara programas, horarios, precios y metodologías de diferentes academias
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Target className="w-8 h-8 text-sport-highlight mb-2" />
                <CardTitle>Seguimiento de Progreso</CardTitle>
                <CardDescription>
                  Monitorea tu evolución con métricas personalizadas y recomendaciones de IA
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Users className="w-8 h-8 text-sport-info mb-2" />
                <CardTitle>Comunidad Deportiva</CardTitle>
                <CardDescription>
                  Conecta con otros deportistas, comparte experiencias y forma equipos
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-sport-wellness mb-2" />
                <CardTitle>Recomendaciones Personalizadas</CardTitle>
                <CardDescription>
                  Recibe sugerencias basadas en tu perfil, objetivos y preferencias
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Star className="w-8 h-8 text-sport-warning mb-2" />
                <CardTitle>Sistema de Reseñas</CardTitle>
                <CardDescription>
                  Lee opiniones verificadas de otros estudiantes y familias
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Sample Schools */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Escuelas Destacadas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Academia Champions FC",
                sport: "Fútbol",
                location: "Bogotá, Colombia",
                rating: 4.8,
                students: 120,
                price: "$200.000/mes",
                image: "🏟️"
              },
              {
                name: "Centro de Alto Rendimiento",
                sport: "Natación",
                location: "Medellín, Colombia",
                rating: 4.9,
                students: 85,
                price: "$350.000/mes",
                image: "🏊"
              },
              {
                name: "Basketball Elite Academy",
                sport: "Baloncesto",
                location: "Cali, Colombia",
                rating: 4.7,
                students: 95,
                price: "$280.000/mes",
                image: "🏀"
              }
            ].map((school, index) => (
              <Card key={index} className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-2">{school.image}</div>
                    <Badge variant="secondary">{school.sport}</Badge>
                  </div>
                  <CardTitle className="text-lg">{school.name}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="w-4 h-4" />
                      {school.location}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        {school.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {school.students} estudiantes
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sport-primary">{school.price}</span>
                    <Button size="sm" variant="outline">Ver detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-sport-card rounded-3xl p-8 border border-sport-border">
          <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
          <p className="text-sport-text-secondary mb-6 max-w-2xl mx-auto">
            Únete a miles de deportistas que ya han encontrado su lugar ideal para entrenar y crecer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" onClick={() => setIsDemoOpen(true)}>
              Comenzar prueba gratuita
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsDemoOpen(true)}>
              Solicitar demo personalizado
            </Button>
          </div>
        </section>
      </main>
      <SportMapsFooter />
      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} source="deportistas" />
    </div>
  );
}