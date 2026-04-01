import { Check, X, Minus } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureRow {
  name: string;
  tiers: (boolean | string)[];
}

interface PlansComparisonTableProps {
  selectedClient: string;
}

export function PlansComparisonTable({ selectedClient }: PlansComparisonTableProps) {
  // Solo mostramos la tabla para Escuelas y Federaciones que son los que tienen tiers complejos
  const isAcademy = selectedClient === "escuelas";
  const isFederation = selectedClient === "federaciones";

  if (!isAcademy && !isFederation) return null;

  const academyFeatures: FeatureRow[] = [
    { name: "Alumnos Activos", tiers: ["Hasta 50", "Hasta 150", "Hasta 300"] },
    { name: "Admin de Estudiantes", tiers: [true, true, true] },
    { name: "Control de Asistencia", tiers: [true, true, true] },
    { name: "Carnetización Digital", tiers: [true, true, true] },
    { name: "Doc. de Vinculación", tiers: [true, true, true] },
    { name: "Informes de Operación", tiers: [true, true, true] },
    { name: "Soporte Multi-sede", tiers: [false, true, true] },
    { name: "Soporte Multi-academia", tiers: [false, false, true] },
    { name: "Pagos Online", tiers: ["Pronto", "Pronto", "Pronto"] },
    { name: "App para Padres", tiers: ["Pronto", "Pronto", "Pronto"] },
    { name: "Gerente de Cuenta", tiers: [false, false, true] },
    { name: "API Access", tiers: [false, false, "Opcional"] },
  ];

  const federationFeatures: FeatureRow[] = [
    { name: "Gestión de Clubes", tiers: ["Hasta 20", "Ilimitados", "Ilimitados"] },
    { name: "Calendario de Torneos", tiers: [true, true, true] },
    { name: "Rankings Digitales", tiers: [true, true, true] },
    { name: "Licencias Oficiales", tiers: [false, true, true] },
    { name: "Módulo de Arbitraje", tiers: [false, true, true] },
    { name: "App Móvil Oficial", tiers: [false, true, true] },
    { name: "Censo Nacional", tiers: [false, false, true] },
    { name: "Multi-región", tiers: [false, false, true] },
    { name: "API Gubernamental", tiers: [false, false, true] },
    { name: "Soporte 24/7", tiers: [false, true, true] },
  ];

  const features = isAcademy ? academyFeatures : federationFeatures;
  const tierNames = isAcademy 
    ? ["Start", "Pro", "Elite"] 
    : ["Liga", "Federación", "Nacional"];

  return (
    <div className="mt-20 max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Comparativa de Funciones</h3>
        <p className="text-muted-foreground text-lg">
          Analiza a detalle qué incluye cada nivel para {isAcademy ? "tu academia" : "tu organización"}.
        </p>
      </motion.div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted/50">
              <th className="p-5 text-sm font-bold text-foreground">Característica</th>
              {tierNames.map((name) => (
                <th key={name} className="p-5 text-sm font-bold text-center text-sport-primary">
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {features.map((feature, idx) => (
              <tr key={idx} className="hover:bg-muted/30 transition-colors">
                <td className="p-5 text-sm font-medium text-foreground">{feature.name}</td>
                {feature.tiers.map((val, i) => (
                  <td key={i} className="p-5 text-sm text-center">
                    {typeof val === "boolean" ? (
                      val ? (
                        <Check className="w-5 h-5 text-sport-primary mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )
                    ) : (
                      <span className={`font-semibold ${val === "Pronto" ? "text-sport-accent text-xs bg-sport-accent/10 px-2 py-0.5 rounded-full" : "text-muted-foreground"}`}>
                        {val}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-8 items-center opacity-70">
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-sport-primary" />
          <span className="text-sm font-medium">Cumple Ley del Deporte (Colombia)</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-sport-primary" />
          <span className="text-sm font-medium">Pagos Protegidos por PSE</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-5 h-5 text-sport-primary" />
          <span className="text-sm font-medium">Soporte Humano en Español</span>
        </div>
      </div>
    </div>
  );
}
