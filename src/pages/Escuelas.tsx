import { ArrowLeft, Users, Calendar, BarChart3, MessageSquare, Award, Bell, CreditCard, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SEOFooter } from "@/components/SEOFooter";

export default function Escuelas() {
  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO 
        title="Para Escuelas Deportivas - Gestión Digital"
        description="Digitaliza tu escuela deportiva con herramientas profesionales. Gestión de estudiantes, reservas online, pagos digitales y comunicación automatizada."
        url="https://sportmaps.co/escuelas"
        canonical="https://sportmaps.co/escuelas"
        keywords="escuelas deportivas, gestión deportiva, software escuelas, academias deportivas Colombia, administración deportiva"
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
            <h1 className="text-2xl font-bold text-sport-primary">Para Escuelas</h1>
            <p className="text-sm text-sport-text-secondary">Herramientas completas para gestionar tu institución deportiva</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            Digitaliza tu escuela deportiva
          </h2>
          <p className="text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
            Automatiza procesos, mejora la comunicación con padres y estudiantes, y haz crecer tu institución con herramientas profesionales
          </p>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Escuelas Registradas", value: "500+", icon: Award, color: "text-sport-primary" },
            { label: "Estudiantes Activos", value: "15,000+", icon: Users, color: "text-sport-accent" },
            { label: "Reservas Mensuales", value: "8,500+", icon: Calendar, color: "text-sport-highlight" },
            { label: "Satisfacción", value: "98%", icon: BarChart3, color: "text-sport-success" }
          ].map((stat, index) => (
            <Card key={index} className="border-sport-border bg-sport-card text-center">
              <CardContent className="pt-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-sport-text-primary">{stat.value}</div>
                <div className="text-sm text-sport-text-secondary">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Features Grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Herramientas para tu escuela</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Users className="w-8 h-8 text-sport-primary mb-2" />
                <CardTitle>Gestión de Estudiantes</CardTitle>
                <CardDescription>
                  Dashboard completo para administrar inscripciones, horarios y progreso de cada estudiante
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary">
                  <li>• Perfiles detallados de estudiantes</li>
                  <li>• Seguimiento de asistencia</li>
                  <li>• Historial de pagos</li>
                  <li>• Evaluaciones de progreso</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Calendar className="w-8 h-8 text-sport-accent mb-2" />
                <CardTitle>Sistema de Reservas</CardTitle>
                <CardDescription>
                  Automatiza la programación de clases y permite reservas online 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary">
                  <li>• Calendario inteligente</li>
                  <li>• Reservas automáticas</li>
                  <li>• Gestión de cupos</li>
                  <li>• Notificaciones automáticas</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-sport-info mb-2" />
                <CardTitle>Comunicación</CardTitle>
                <CardDescription>
                  Canal directo con padres y estudiantes para mantener a todos informados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary">
                  <li>• Mensajería integrada</li>
                  <li>• Notificaciones push</li>
                  <li>• Reportes automáticos</li>
                  <li>• Comunicados masivos</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-sport-highlight mb-2" />
                <CardTitle>Reportes y Analytics</CardTitle>
                <CardDescription>
                  Métricas en tiempo real para tomar decisiones informadas sobre tu negocio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary">
                  <li>• Dashboard ejecutivo</li>
                  <li>• Métricas de rendimiento</li>
                  <li>• Análisis financiero</li>
                  <li>• Reportes personalizados</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <CreditCard className="w-8 h-8 text-sport-success mb-2" />
                <CardTitle>Pagos Digitales</CardTitle>
                <CardDescription>
                  Procesa pagos de forma segura y automatiza la facturación mensual
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary">
                  <li>• Múltiples métodos de pago</li>
                  <li>• Facturación automática</li>
                  <li>• Seguimiento de cartera</li>
                  <li>• Reportes financieros</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Award className="w-8 h-8 text-sport-warning mb-2" />
                <CardTitle>Certificaciones</CardTitle>
                <CardDescription>
                  Genera certificados digitales y diplomas para tus estudiantes automáticamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary">
                  <li>• Certificados digitales</li>
                  <li>• Plantillas personalizables</li>
                  <li>• Verificación blockchain</li>
                  <li>• Entrega automática</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Planes diseñados para tu escuela</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Básico",
                price: "$99.000",
                period: "/mes",
                features: ["Hasta 50 estudiantes", "Gestión básica", "Soporte por email", "1 instructor"],
                highlighted: false
              },
              {
                name: "Profesional",
                price: "$299.000",
                period: "/mes",
                features: ["Hasta 200 estudiantes", "Todas las funciones", "Soporte prioritario", "5 instructores", "Analytics avanzados"],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Personalizado",
                period: "",
                features: ["Estudiantes ilimitados", "Funciones premium", "Soporte 24/7", "Instructores ilimitados", "Integración API"],
                highlighted: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`border-sport-border bg-sport-card ${plan.highlighted ? 'ring-2 ring-sport-primary' : ''}`}>
                <CardHeader className="text-center">
                  {plan.highlighted && (
                    <Badge className="mb-2 bg-sport-primary text-white w-fit mx-auto">Más Popular</Badge>
                  )}
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-sport-primary">
                    {plan.price}
                    <span className="text-sm text-sport-text-secondary">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-sport-primary rounded-full"></div>
                        <span className="text-sm text-sport-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.highlighted ? "default" : "outline"} 
                    className="w-full"
                  >
                    {plan.name === "Enterprise" ? "Contactar ventas" : "Comenzar prueba gratis"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-sport-card rounded-3xl p-8 border border-sport-border">
          <h3 className="text-2xl font-bold mb-4">¿Listo para digitalizar tu escuela?</h3>
          <p className="text-sport-text-secondary mb-6 max-w-2xl mx-auto">
            Únete a cientos de escuelas que ya han transformado su gestión con SportMaps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              Comenzar prueba gratuita
            </Button>
            <Button size="lg" variant="outline">
              Solicitar demo personalizado
            </Button>
          </div>
        </section>
      </main>
      <SEOFooter />
    </div>
  );
}