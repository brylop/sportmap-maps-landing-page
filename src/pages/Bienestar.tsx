import { useState } from "react";
import { ArrowLeft, Heart, Calendar, Video, Activity, Brain, Shield, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";
import { PlansSection } from "@/components/sections/Pricing/PlansSection";

export default function Bienestar() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const selectedClient = "default";
  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO 
        title="Bienestar Deportivo - Salud Física y Mental"
        description="Cuida tu salud física y mental con profesionales certificados. Fisioterapia deportiva, psicología del deporte, teleconsultas médicas y monitoreo 24/7."
        url="https://sportmaps.co/bienestar"
        canonical="https://sportmaps.co/bienestar"
        keywords="bienestar deportivo, fisioterapia deportiva, psicología deportiva, medicina deportiva Colombia, rehabilitación atletas"
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
            <h1 className="text-2xl font-bold text-sport-primary">Bienestar Integral</h1>
            <p className="text-sm text-sport-text-secondary">Cuida tu salud física y mental en el deporte</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            Tu salud es nuestra prioridad
          </h2>
          <p className="text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
            Accede a profesionales certificados en fisioterapia, psicología deportiva y monitoreo 24/7 para maximizar tu rendimiento y bienestar
          </p>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Profesionales Certificados", value: "200+", icon: Users, color: "text-sport-primary" },
            { label: "Consultas Mensuales", value: "1,500+", icon: Video, color: "text-sport-accent" },
            { label: "Satisfacción Pacientes", value: "98%", icon: Heart, color: "text-sport-highlight" },
            { label: "Disponibilidad", value: "24/7", icon: Clock, color: "text-sport-success" }
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

        {/* Services Grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Servicios especializados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Video className="w-8 h-8 text-sport-primary mb-2" />
                <CardTitle>Teleconsulta Médica</CardTitle>
                <CardDescription>
                  Consultas virtuales con médicos deportivos certificados desde casa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary mb-4">
                  <li>• Videollamada HD segura</li>
                  <li>• Historial médico digital</li>
                  <li>• Recetas digitales</li>
                  <li>• Seguimiento personalizado</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Agendar consulta
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Heart className="w-8 h-8 text-sport-highlight mb-2" />
                <CardTitle>Fisioterapia Deportiva</CardTitle>
                <CardDescription>
                  Rehabilitación y prevención de lesiones con expertos en medicina deportiva
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary mb-4">
                  <li>• Evaluación biomecánica</li>
                  <li>• Planes de rehabilitación</li>
                  <li>• Ejercicios guiados</li>
                  <li>• Prevención de lesiones</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Iniciar tratamiento
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Brain className="w-8 h-8 text-sport-accent mb-2" />
                <CardTitle>Psicología Deportiva</CardTitle>
                <CardDescription>
                  Fortalecimiento mental y optimización del rendimiento psicológico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary mb-4">
                  <li>• Manejo de presión competitiva</li>
                  <li>• Técnicas de concentración</li>
                  <li>• Motivación y confianza</li>
                  <li>• Gestión de estrés</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Comenzar terapia
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Activity className="w-8 h-8 text-sport-info mb-2" />
                <CardTitle>Monitoreo Inteligente</CardTitle>
                <CardDescription>
                  Seguimiento 24/7 con dispositivos wearables y análisis de IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary mb-4">
                  <li>• Métricas vitales en tiempo real</li>
                  <li>• Análisis de rendimiento</li>
                  <li>• Alertas de sobreentrenamiento</li>
                  <li>• Recomendaciones automáticas</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Conectar dispositivo
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Calendar className="w-8 h-8 text-sport-success mb-2" />
                <CardTitle>Planes de Recuperación</CardTitle>
                <CardDescription>
                  Programas personalizados para optimizar la recuperación post-entrenamiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary mb-4">
                  <li>• Rutinas de estiramiento</li>
                  <li>• Protocolo de hidratación</li>
                  <li>• Técnicas de relajación</li>
                  <li>• Seguimiento de progreso</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Crear mi plan
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Shield className="w-8 h-8 text-sport-warning mb-2" />
                <CardTitle>Análisis Biomecánico</CardTitle>
                <CardDescription>
                  Evaluación avanzada del movimiento para optimizar técnica y prevenir lesiones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary mb-4">
                  <li>• Análisis 3D del movimiento</li>
                  <li>• Corrección de técnica</li>
                  <li>• Optimización de rendimiento</li>
                  <li>• Reportes detallados</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Solicitar análisis
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Team */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Nuestro equipo de profesionales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Carlos Rodríguez",
                specialty: "Medicina Deportiva",
                experience: "15 años",
                rating: 4.9,
                consultations: 2500,
                image: "👨‍⚕️"
              },
              {
                name: "Dra. Ana Martínez",
                specialty: "Fisioterapia Deportiva",
                experience: "12 años",
                rating: 4.8,
                consultations: 1800,
                image: "👩‍⚕️"
              },
              {
                name: "Lic. Miguel Santos",
                specialty: "Psicología Deportiva",
                experience: "10 años",
                rating: 4.9,
                consultations: 1200,
                image: "🧠"
              }
            ].map((professional, index) => (
              <Card key={index} className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-2">{professional.image}</div>
                  <CardTitle className="text-lg">{professional.name}</CardTitle>
                  <CardDescription>{professional.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-sport-text-secondary">Experiencia</div>
                      <div className="font-semibold">{professional.experience}</div>
                    </div>
                    <div>
                      <div className="text-sm text-sport-text-secondary">Consultas</div>
                      <div className="font-semibold">{professional.consultations}+</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <span className="text-sm font-medium">{professional.rating}</span>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Award key={star} className="w-3 h-3 fill-current text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    Agendar cita
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="mb-12">
          <Card className="border-sport-border bg-sport-card">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 text-sport-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Máxima seguridad y privacidad</CardTitle>
              <CardDescription>
                Protegemos tu información médica con los más altos estándares de seguridad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-semibold mb-1">Encriptación End-to-End</h4>
                  <p className="text-sm text-sport-text-secondary">Todas las comunicaciones están protegidas con encriptación avanzada</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="font-semibold mb-1">Cumplimiento HIPAA</h4>
                  <p className="text-sm text-sport-text-secondary">Seguimos todos los protocolos internacionales de privacidad médica</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">✅</div>
                  <h4 className="font-semibold mb-1">Consentimiento Explícito</h4>
                  <p className="text-sm text-sport-text-secondary">Solo accedemos a tu información con tu autorización expresa</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Plans Section */}
        <PlansSection selectedClient={selectedClient} />

        {/* CTA Section */}
        <section className="text-center bg-sport-card rounded-3xl p-8 border border-sport-border">
          <h3 className="text-2xl font-bold mb-4">¿Listo para cuidar tu bienestar?</h3>
          <p className="text-sport-text-secondary mb-6 max-w-2xl mx-auto">
            Comienza tu viaje hacia un rendimiento óptimo con el apoyo de nuestros profesionales
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
      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} source="bienestar" />
    </div>
  );
}