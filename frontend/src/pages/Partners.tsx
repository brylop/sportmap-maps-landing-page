import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Handshake, TrendingUp, Gift, Shield,
  Users, Zap, Award, ArrowRight, 
  CheckCircle, Building2, DollarSign
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { PartnerProviderModal } from "@/components/modals/PartnerProviderModal";

const Partners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: DollarSign,
      title: "Comisiones Atractivas",
      description: "Gana comisiones recurrentes por cada cliente referido que se convierta en usuario de SportMaps."
    },
    {
      icon: Gift,
      title: "Recursos Exclusivos",
      description: "Acceso a materiales de marketing, demos personalizadas y soporte prioritario para cerrar ventas."
    },
    {
      icon: Zap,
      title: "Capacitación Continua",
      description: "Programa de formación sobre el producto y las mejores estrategias de venta."
    },
    {
      icon: Shield,
      title: "Soporte Dedicado",
      description: "Gerente de cuenta exclusivo para ayudarte a crecer tu negocio con SportMaps."
    }
  ];

  const partnerTypes = [
    {
      title: "Revendedor",
      description: "Vende SportMaps a tu red de contactos y gana comisiones por cada venta.",
      features: [
        "Comisión del 20% recurrente",
        "Material de ventas incluido",
        "Dashboard de seguimiento",
        "Sin inversión inicial"
      ]
    },
    {
      title: "Integrador",
      description: "Implementa y personaliza SportMaps para tus clientes empresariales.",
      features: [
        "Acceso a API completa",
        "Certificación técnica",
        "Proyectos de implementación",
        "Margen en servicios"
      ]
    },
    {
      title: "Afiliado",
      description: "Promociona SportMaps en tu audiencia y gana por cada conversión.",
      features: [
        "Link de referido único",
        "Tracking en tiempo real",
        "Pagos mensuales",
        "Materiales promocionales"
      ]
    }
  ];

  const stats = [
    { value: "$500K+", label: "Pagado a Partners" },
    { value: "100+", label: "Partners Activos" },
    { value: "25%", label: "Comisión Promedio" },
    { value: "30 días", label: "Ciclo de Pago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Programa de Partners | SportMaps - Únete a Nuestro Ecosistema"
        description="Únete al programa de partners de SportMaps. Gana comisiones, accede a recursos exclusivos y crece tu negocio con la plataforma deportiva líder."
        keywords="partners sportmaps, programa afiliados, revendedor sportmaps, ganar dinero deportes, negocio deportivo"
      />
      <TechHeader onSectionClick={() => {}} activeSection="" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sport-primary/10 via-transparent to-sport-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-sport-primary/10 border border-sport-primary/20 rounded-full px-4 py-2 mb-6">
              <Handshake className="w-4 h-4 text-sport-primary" />
              <span className="text-sm text-sport-primary font-medium">Programa de Partners</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crece con <span className="text-sport-primary">SportMaps</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a nuestro ecosistema de partners y genera ingresos recurrentes 
              mientras ayudas a transformar el deporte.
            </p>
            <Button 
              size="lg" 
              className="bg-sport-primary hover:bg-sport-primary/90"
              onClick={() => setIsModalOpen(true)}
            >
              Aplicar Ahora
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/50 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-sport-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beneficios de Ser <span className="text-sport-primary">Partner</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para tener éxito como partner de SportMaps.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-sport-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-sport-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-sport-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tipos de <span className="text-sport-primary">Partnership</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elige el modelo que mejor se adapte a tu negocio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-sport-primary/50 transition-colors">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-6">{type.description}</p>
                    <ul className="space-y-3">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-sport-success shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6 bg-sport-primary hover:bg-sport-primary/90"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Aplicar como {type.title}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cómo <span className="text-sport-primary">Funciona</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Aplica", description: "Completa el formulario y cuéntanos sobre tu negocio" },
                { step: "2", title: "Capacítate", description: "Recibe formación sobre el producto y estrategias de venta" },
                { step: "3", title: "Gana", description: "Refiere clientes y recibe comisiones recurrentes" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-sport-primary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sport-primary/10 to-sport-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Ser Partner?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Únete hoy y comienza a generar ingresos con SportMaps.
          </p>
          <Button 
            size="lg" 
            className="bg-sport-primary hover:bg-sport-primary/90"
            onClick={() => setIsModalOpen(true)}
          >
            Aplicar Ahora
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
      
      <PartnerProviderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Partners;
