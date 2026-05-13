import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  MessageSquare,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  combos,
  buildComboWhatsAppMessageWithContext,
  buildIndividualPlanWhatsAppMessage,
  formatPriceCOP,
  type Combo,
  type WizardContext,
} from "@/lib/combos";

const SALES_WHATSAPP = "573128463555";

// ============================================================================
// Wizard data
// ============================================================================

interface RoleOption {
  id: string;
  label: string;
  emoji: string;
}

interface NeedOption {
  id: string;
  label: string;
  /** Si recomienda combo, su id en combos.ts */
  comboId?: string;
  /** Si recomienda plan individual, el nombre del plan */
  individualPlan?: string;
  /** Descripción corta del por qué de esta recomendación */
  rationale: string;
}

interface SizeOption {
  id: string;
  label: string;
  /** Si true, fuerza recomendación enterprise/custom */
  forcesCustom?: boolean;
}

const ROLES: RoleOption[] = [
  { id: "escuela", label: "Escuela / Academia", emoji: "🏫" },
  { id: "entrenador", label: "Entrenador personal", emoji: "🏃" },
  { id: "federacion", label: "Federación / Liga", emoji: "🏆" },
  { id: "bienestar", label: "Centro de bienestar / Clínica", emoji: "❤️" },
  { id: "marca", label: "Marca deportiva", emoji: "🎽" },
  { id: "organizador", label: "Organizador de eventos", emoji: "🎪" },
];

const NEEDS_BY_ROLE: Record<string, NeedOption[]> = {
  escuela: [
    {
      id: "productos",
      label: "Vender uniformes o productos a mis alumnos",
      comboId: "academia-tienda",
      rationale: "Tu mejor opción es el combo Academia + Tienda.",
    },
    {
      id: "eventos",
      label: "Organizar torneos y eventos propios",
      comboId: "escuela-eventos",
      rationale:
        "Te recomendamos Escuela Eventos — es nuestro combo más popular.",
    },
    {
      id: "salud",
      label: "Tener fisio o psicólogo deportivo integrado",
      comboId: "academia-salud",
      rationale: "El combo Academia Salud Deportiva resuelve exactamente eso.",
    },
    {
      id: "todo",
      label: "Quiero todo: tienda + eventos + alumnos",
      comboId: "academia-360",
      rationale: "Vas con todo — el combo Academia 360° es para ti.",
    },
    {
      id: "solo",
      label: "Solo gestionar mi escuela (matrículas, pagos, alumnos)",
      individualPlan: "Escuela Pro",
      rationale:
        "No necesitas combo todavía. Empieza con Escuela Pro y escala cuando lo necesites.",
    },
  ],
  entrenador: [
    {
      id: "productos",
      label: "Vender programas, suplementos o merchandising",
      comboId: "coach-tienda",
      rationale:
        "El combo Coach con Tienda Propia te suma marketplace y agenda en uno.",
    },
    {
      id: "solo",
      label: "Solo gestionar clientes (agenda, pagos, rutinas)",
      individualPlan: "Coach Pro",
      rationale:
        "Coach Pro tiene todo lo que necesitas. Si después quieres vender, agregas Marketplace.",
    },
  ],
  federacion: [
    {
      id: "eventos",
      label: "Organizar torneos y circuito anual propios",
      comboId: "federacion-completa",
      rationale:
        "El combo Federación Completa une gestión federativa + organización de eventos.",
    },
    {
      id: "solo",
      label: "Solo gestión de clubes y censo nacional",
      individualPlan: "Federación Pro",
      rationale: "Federación Pro cubre la operación. Eventos los agregas después.",
    },
  ],
  bienestar: [
    {
      id: "servicios",
      label: "Ofrecer servicios complementarios (nutrición, terapia, etc)",
      comboId: "clinica-deportiva",
      rationale: "El combo Clínica Deportiva integra ambos módulos.",
    },
    {
      id: "solo",
      label: "Solo agenda y pacientes",
      individualPlan: "Wellness Pro",
      rationale: "Wellness Pro tiene agenda, telemedicina e historia clínica.",
    },
  ],
  marca: [
    {
      id: "vender",
      label: "Vender productos en el ecosistema SportMaps",
      individualPlan: "Marketplace Pro",
      rationale:
        "Marketplace Pro te conecta directo con 10.000+ atletas. No hay combo necesario para marcas.",
    },
  ],
  organizador: [
    {
      id: "cotizar",
      label: "Operación completa de eventos",
      individualPlan: "Organizadores Pro (cotización)",
      rationale:
        "Organizadores es a medida — te damos cotización personalizada vía WhatsApp.",
    },
  ],
};

const SIZES: SizeOption[] = [
  { id: "xs", label: "Menos de 50" },
  { id: "sm", label: "50 - 300" },
  { id: "md", label: "300 - 800" },
  { id: "lg", label: "Más de 800", forcesCustom: true },
];

// ============================================================================
// Component
// ============================================================================

type Step = 1 | 2 | 3 | 4;

export function ComboFinder() {
  const [step, setStep] = useState<Step>(1);
  const [roleId, setRoleId] = useState<string | null>(null);
  const [needId, setNeedId] = useState<string | null>(null);
  const [sizeId, setSizeId] = useState<string | null>(null);

  const role = ROLES.find((r) => r.id === roleId) ?? null;
  const needs = roleId ? NEEDS_BY_ROLE[roleId] : [];
  const need = needs.find((n) => n.id === needId) ?? null;
  const size = SIZES.find((s) => s.id === sizeId) ?? null;

  function reset() {
    setRoleId(null);
    setNeedId(null);
    setSizeId(null);
    setStep(1);
  }

  function pickRole(id: string) {
    setRoleId(id);
    setNeedId(null);
    setStep(2);
  }

  function pickNeed(id: string) {
    setNeedId(id);
    setStep(3);
  }

  function pickSize(id: string) {
    setSizeId(id);
    setStep(4);
  }

  function goBack() {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
    else if (step === 4) setStep(3);
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-4xl mb-3 block">🧭</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿No sabes cuál combo te sirve?{" "}
            <span className="text-sport-primary">
              Te ayudamos en 3 preguntas
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Te recomendamos exactamente el combo o plan que mejor se adapta a
            tu caso. Sin scroll infinito, sin adivinar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          {step < 4 && (
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${
                    s <= step ? "bg-sport-primary" : "bg-muted"
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-2 shrink-0">
                Paso {step} de 3
              </span>
            </div>
          )}

          {/* Step content */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <StepWrapper key="s1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    1. ¿Qué eres hoy?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Elige el perfil que más se acerca a tu situación actual.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {ROLES.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => pickRole(r.id)}
                        className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-sport-primary hover:bg-sport-primary/5 transition-all text-left"
                      >
                        <span className="text-2xl">{r.emoji}</span>
                        <span className="font-medium text-foreground">
                          {r.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </StepWrapper>
              )}

              {step === 2 && role && (
                <StepWrapper key="s2">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    2. Como {role.emoji} {role.label.toLowerCase()}, ¿qué
                    necesitas además?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Elige tu prioridad principal. Hay un plan correcto para
                    cada caso.
                  </p>
                  <div className="space-y-3">
                    {needs.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => pickNeed(n.id)}
                        className="w-full flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-sport-primary hover:bg-sport-primary/5 transition-all text-left"
                      >
                        <ArrowRight className="w-5 h-5 text-sport-primary shrink-0" />
                        <span className="font-medium text-foreground">
                          {n.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </StepWrapper>
              )}

              {step === 3 && (
                <StepWrapper key="s3">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    3. ¿Cuál es tu tamaño aproximado hoy?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Esto nos ayuda a recomendar el tier correcto (Pro vs Elite
                    vs Custom).
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {SIZES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => pickSize(s.id)}
                        className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-sport-primary hover:bg-sport-primary/5 transition-all text-left"
                      >
                        <Check className="w-5 h-5 text-sport-success shrink-0" />
                        <span className="font-medium text-foreground">
                          {s.label}{" "}
                          <span className="text-muted-foreground text-sm">
                            alumnos / clientes / eventos
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </StepWrapper>
              )}

              {step === 4 && role && need && size && (
                <StepWrapper key="s4">
                  <RecommendationResult
                    role={role}
                    need={need}
                    size={size}
                    onReset={reset}
                  />
                </StepWrapper>
              )}
            </AnimatePresence>

            {/* Back button */}
            {step > 1 && step < 4 && (
              <button
                onClick={goBack}
                className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-sport-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Sub-components
// ============================================================================

function StepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function RecommendationResult({
  role,
  need,
  size,
  onReset,
}: {
  role: RoleOption;
  need: NeedOption;
  size: SizeOption;
  onReset: () => void;
}) {
  const ctx: WizardContext = {
    roleLabel: role.label,
    needLabel: need.label,
    sizeLabel: `${size.label} (${role.id === "organizador" ? "eventos/año" : "alumnos/clientes"})`,
  };

  const isCombo = !!need.comboId;
  const combo = isCombo ? combos.find((c) => c.id === need.comboId) : null;

  // Si el tamaño fuerza custom, ajustar el mensaje y CTA
  const forcesCustom = size.forcesCustom === true;

  const handleWhatsApp = () => {
    let message: string;
    if (forcesCustom) {
      // Mensaje custom enterprise para >800
      const planName = combo
        ? `${combo.name} (volumen >800, custom)`
        : need.individualPlan ?? "Plan a medida";
      message = buildIndividualPlanWhatsAppMessage(planName, ctx);
    } else if (combo) {
      message = buildComboWhatsAppMessageWithContext(combo, ctx);
    } else {
      message = buildIndividualPlanWhatsAppMessage(
        need.individualPlan ?? "Plan",
        ctx
      );
    }
    const url = `https://wa.me/${SALES_WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="text-center mb-6">
        <Badge className="bg-sport-success/15 text-sport-success border-sport-success/30 mb-3">
          <Sparkles className="w-3 h-3 mr-1" />
          Tu recomendación
        </Badge>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          {forcesCustom
            ? "Necesitas una cotización a medida"
            : combo
            ? combo.name
            : need.individualPlan}
        </h3>
        <p className="text-sm text-muted-foreground italic">
          {forcesCustom
            ? "Con tu volumen (>800), te conviene un plan personalizado con SLA dedicado y onboarding white-glove."
            : need.rationale}
        </p>
      </div>

      {/* Pricing block */}
      {!forcesCustom && combo && (
        <div className="rounded-xl border border-sport-primary/30 bg-sport-primary/5 p-6 mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {combo.modules.map((m) => (
              <Badge
                key={m}
                variant="outline"
                className="text-xs border-sport-primary/30"
              >
                <Check className="w-3 h-3 mr-1 text-sport-success" />
                {m}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground line-through">
            Valor normal {formatPriceCOP(combo.normalPrice)}/mes
          </p>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-3xl font-bold text-sport-accent">
              {formatPriceCOP(combo.comboPrice)}
            </span>
            <span className="text-muted-foreground">/mes</span>
          </div>
          <p className="text-xs text-sport-success font-semibold">
            ✨ Ahorras {formatPriceCOP(combo.normalPrice - combo.comboPrice)}/mes
          </p>
          {combo.anchor && (
            <p className="text-xs text-muted-foreground italic mt-3">
              💡 {combo.anchor}
            </p>
          )}
        </div>
      )}

      {!forcesCustom && !combo && need.individualPlan && (
        <div className="rounded-xl border border-sport-primary/30 bg-sport-primary/5 p-6 mb-6">
          <p className="text-sm text-muted-foreground mb-2">
            Plan recomendado:
          </p>
          <p className="text-xl font-bold text-sport-accent mb-2">
            {need.individualPlan}
          </p>
          <p className="text-xs text-muted-foreground italic">
            Lo verás en detalle en la pestaña correspondiente arriba — y puedes
            arrancar gratis si tu rol tiene tier Free.
          </p>
        </div>
      )}

      {/* Context summary */}
      <div className="bg-muted/30 rounded-xl p-4 mb-6 text-xs space-y-1">
        <p className="text-muted-foreground">
          <strong className="text-foreground">Tipo:</strong> {role.label}
        </p>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Necesidad:</strong> {need.label}
        </p>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Tamaño:</strong> {size.label}
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={handleWhatsApp}
          size="lg"
          className="flex-1 bg-sport-success hover:bg-sport-success/90 text-white font-bold rounded-xl"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          {forcesCustom
            ? "Solicitar cotización custom"
            : combo
            ? "Quiero este combo"
            : "Hablar con ventas"}
        </Button>
        <Button
          onClick={onReset}
          variant="outline"
          size="lg"
          className="rounded-xl"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Empezar de nuevo
        </Button>
      </div>
    </div>
  );
}
