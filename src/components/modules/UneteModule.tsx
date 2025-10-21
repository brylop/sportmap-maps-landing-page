import { motion } from "framer-motion";
import { Handshake, GraduationCap, Megaphone, CheckCircle, Rocket, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PartnerSchoolModal } from "../modals/PartnerSchoolModal";
import { PartnerProviderModal } from "../modals/PartnerProviderModal";
import { PartnerTrainerModal } from "../modals/PartnerTrainerModal";

export function UneteModule() {
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const [isTrainerModalOpen, setIsTrainerModalOpen] = useState(false);

  const partnerships = [
    {
      icon: GraduationCap,
      title: "Escuelas Deportivas",
      subtitle: "Gestión completa y visibilidad",
      benefits: [
        "Plataforma de gestión de reservas y pagos",
        "Dashboard de estudiantes en tiempo real",
        "Comunicación automatizada con padres",
        "Visibilidad preferente en búsquedas",
        "Onboarding en 48 horas",
        "Comisión competitiva del 10%"
      ],
      color: "sport-primary",
      icon2: "🏫"
    },
    {
      icon: Handshake,
      title: "Proveedores & Marcas",
      subtitle: "Canal digital con audiencia calificada",
      benefits: [
        "Catálogo especializado por deporte",
        "Data de intención de compra",
        "Activaciones y bundles personalizados",
        "Fulfillment 24-48 horas",
        "Analytics de ventas en tiempo real",
        "Marketing dirigido a usuarios activos"
      ],
      color: "sport-highlight",
      icon2: "🛒"
    },
    {
      icon: Megaphone,
      title: "Entrenadores & Profesionales",
      subtitle: "Herramientas para crecer tu negocio",
      benefits: [
        "Perfil profesional verificado",
        "Sistema de reservas y pagos integrado",
        "Herramientas de seguimiento de alumnos",
        "Certificaciones y credenciales visibles",
        "Red de networking profesional",
        "Promoción en la plataforma"
      ],
      color: "sport-accent",
      icon2: "💪"
    }
  ];

  const stats = [
    { icon: Users, value: "1,200+", label: "Partners Activos" },
    { icon: TrendingUp, value: "$2.1M", label: "GMV Mensual" },
    { icon: Rocket, value: "48h", label: "Onboarding Rápido" }
  ];

  return (
    <section className="min-h-screen py-8 sm:py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-sport-card rounded-3xl p-8 sm:p-12 mb-8 shadow-elegant text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-sport-accent/10 rounded-full -translate-y-36 translate-x-36" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-sport-primary/10 rounded-full translate-y-28 -translate-x-28" />
        
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sport-text mb-6"
          >
            Únete al <span className="bg-gradient-tech-primary bg-clip-text text-transparent">Ecosistema</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-sport-text/80 mb-8 max-w-3xl mx-auto"
          >
            Forma parte de la red deportiva más grande de Latinoamérica y accede a miles de usuarios activos
          </motion.p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-sport-background/60 backdrop-blur-sm rounded-2xl p-6"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-sport-primary" />
                <div className="text-3xl font-bold text-sport-text mb-1">{stat.value}</div>
                <div className="text-sm text-sport-text/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button 
                size="lg"
                onClick={() => setIsSchoolModalOpen(true)}
                className="bg-sport-primary text-white px-6 py-6 text-base rounded-full hover:shadow-glow-primary"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Soy Escuela
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button 
                size="lg"
                onClick={() => setIsProviderModalOpen(true)}
                className="bg-sport-highlight text-white px-6 py-6 text-base rounded-full hover:shadow-glow-primary"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Soy Proveedor
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button 
                size="lg"
                onClick={() => setIsTrainerModalOpen(true)}
                className="bg-sport-accent text-white px-6 py-6 text-base rounded-full hover:shadow-glow-primary"
              >
                <Megaphone className="w-5 h-5 mr-2" />
                Soy Entrenador
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Partnership Types */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {partnerships.map((partnership, index) => (
          <motion.div
            key={partnership.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-sport-card rounded-3xl p-8 shadow-elegant hover:shadow-hover transition-all duration-300 border border-transparent hover:border-sport-primary/30"
          >
            {/* Header */}
            <div className="text-center mb-6">
              <motion.div 
                className="text-6xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {partnership.icon2}
              </motion.div>
              <h3 className="text-2xl font-bold text-sport-text mb-2">{partnership.title}</h3>
              <p className="text-sport-text/70">{partnership.subtitle}</p>
            </div>

            {/* Benefits */}
            <ul className="space-y-4 mb-8">
              {partnership.benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle 
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: `hsl(var(--${partnership.color}))` }}
                  />
                  <span className="text-sport-text/80 text-sm leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline"
                className="w-full border-2"
                style={{ borderColor: `hsl(var(--${partnership.color}))` }}
                onClick={() => {
                  if (partnership.title.includes("Escuelas")) {
                    setIsSchoolModalOpen(true);
                  } else if (partnership.title.includes("Proveedores")) {
                    setIsProviderModalOpen(true);
                  } else {
                    setIsTrainerModalOpen(true);
                  }
                }}
              >
                <partnership.icon className="w-5 h-5 mr-2" />
                Más Información
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <PartnerSchoolModal isOpen={isSchoolModalOpen} onClose={() => setIsSchoolModalOpen(false)} />
      <PartnerProviderModal isOpen={isProviderModalOpen} onClose={() => setIsProviderModalOpen(false)} />
      <PartnerTrainerModal isOpen={isTrainerModalOpen} onClose={() => setIsTrainerModalOpen(false)} />
    </section>
  );
}
