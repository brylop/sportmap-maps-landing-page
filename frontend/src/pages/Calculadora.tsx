import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calculator as CalculatorIcon,
  TrendingDown,
  TrendingUp,
  Clock,
  AlertCircle,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SALES_WHATSAPP = "573128463555";

// ============================================================================
// Constantes de cálculo (defendibles, basadas en mercado Colombia 2026)
// ============================================================================
const ADMIN_HOURLY_COST_COP = 15000; // Costo/hora asistente administrativa en Colombia
const SPORTMAPS_PRO_MONTHLY = 159000; // Escuela Pro
const SPORTMAPS_PRO_ANNUAL = SPORTMAPS_PRO_MONTHLY * 12;

// Multiplicadores de mejora con SportMaps Pro (basados en casos reales)
const COBRANZA_TIME_REDUCTION = 0.8; // 80% menos tiempo manual
const MORA_REDUCTION = 0.65; // 65% menos mora con WhatsApp AI
const NO_SHOW_REDUCTION = 0.7; // 70% menos no-shows con confirmaciones AI

// ============================================================================
// Helpers
// ============================================================================

function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

// ============================================================================
// Component
// ============================================================================

export default function Calculadora() {
  const [students, setStudents] = useState(150);
  const [monthlyFee, setMonthlyFee] = useState(280000);
  const [hoursPerMonth, setHoursPerMonth] = useState(20);
  const [moraPct, setMoraPct] = useState(15);
  const [noShowPct, setNoShowPct] = useState(20);

  const results = useMemo(() => {
    // Costo de cobranza manual al año
    const cobranzaAnnualCost = hoursPerMonth * ADMIN_HOURLY_COST_COP * 12;

    // Pérdida por mora al año
    const annualRevenue = students * monthlyFee * 12;
    const moraLoss = annualRevenue * (moraPct / 100) * 0.4; // 40% se queda sin cobrar

    // Pérdida por no-shows al año (asumiendo 1 sesión/semana × 4 sem × 12 meses)
    const sessionsPerYear = 4 * 12;
    const sessionValue = monthlyFee / 4; // valor por sesión
    const noShowLoss =
      students * sessionsPerYear * (noShowPct / 100) * sessionValue * 0.3; // 30% irrecuperable

    const totalLoss = cobranzaAnnualCost + moraLoss + noShowLoss;

    // Ahorro con SportMaps Pro
    const cobranzaSaved = cobranzaAnnualCost * COBRANZA_TIME_REDUCTION;
    const moraSaved = moraLoss * MORA_REDUCTION;
    const noShowSaved = noShowLoss * NO_SHOW_REDUCTION;
    const totalAnnualSavings = cobranzaSaved + moraSaved + noShowSaved;

    const netAnnualBenefit = totalAnnualSavings - SPORTMAPS_PRO_ANNUAL;
    const roiPct = ((netAnnualBenefit / SPORTMAPS_PRO_ANNUAL) * 100);
    const paybackMonths = SPORTMAPS_PRO_ANNUAL / (totalAnnualSavings / 12);

    return {
      cobranzaAnnualCost,
      moraLoss,
      noShowLoss,
      totalLoss,
      cobranzaSaved,
      moraSaved,
      noShowSaved,
      totalAnnualSavings,
      sportmapsAnnual: SPORTMAPS_PRO_ANNUAL,
      netAnnualBenefit,
      roiPct,
      paybackMonths,
    };
  }, [students, monthlyFee, hoursPerMonth, moraPct, noShowPct]);

  const handleWhatsApp = () => {
    const message = `Hola SportMaps! 👋

Acabo de usar la calculadora ROI y mis números son:

📋 Mi academia:
• Alumnos: ${students}
• Mensualidad promedio: ${formatCOP(monthlyFee)}
• Horas/mes en cobranza manual: ${hoursPerMonth}
• % mora actual: ${moraPct}%
• % no-shows: ${noShowPct}%

💰 Resultado:
• Costo actual de no digitalizar: ${formatCOP(results.totalLoss)}/año
• Ahorro estimado con SportMaps Pro: ${formatCOP(results.totalAnnualSavings)}/año
• ROI: ${results.roiPct.toFixed(0)}%
• Payback: ${results.paybackMonths.toFixed(1)} meses

¿Cómo agendamos demo?`;

    const url = `https://wa.me/${SALES_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const isProfitable = results.netAnnualBenefit > 0;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Calculadora ROI: ¿Cuánto te cuesta NO digitalizar tu academia? | SportMaps"
        description="Calcula en 30 segundos cuánto pierdes al año en cobranza manual, mora y no-shows. Compara con SportMaps Pro y ve tu ROI real."
        url="https://sportmaps.co/calculadora"
        canonical="https://sportmaps.co/calculadora"
        keywords="calculadora roi escuela deportiva, costo digitalizar academia, ahorro software gestión deportiva"
      />
      <TechHeader onSectionClick={() => {}} activeSection="calculadora" />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sport-primary/10 mb-6">
              <CalculatorIcon className="w-8 h-8 text-sport-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ¿Cuánto te cuesta{" "}
              <span className="text-sport-primary">NO digitalizar</span>?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calcula en 30 segundos cuánto pierdes al año en cobranza manual,
              mora y no-shows. Sin email, sin registro, sin trampa.
            </p>
          </motion.div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <Card className="border-border">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Tu academia hoy</h2>
                <div className="space-y-6">
                  <NumberInput
                    label="¿Cuántos alumnos activos tienes?"
                    value={students}
                    onChange={setStudents}
                    min={10}
                    max={2000}
                    step={10}
                    unit="alumnos"
                  />
                  <NumberInput
                    label="Mensualidad promedio"
                    value={monthlyFee}
                    onChange={setMonthlyFee}
                    min={50000}
                    max={1000000}
                    step={10000}
                    unit="COP/mes"
                    formatValue={(v) => formatCOP(v)}
                  />
                  <NumberInput
                    label="Horas/mes en cobranza manual (Excel, WhatsApp uno a uno)"
                    value={hoursPerMonth}
                    onChange={setHoursPerMonth}
                    min={0}
                    max={160}
                    step={1}
                    unit="horas/mes"
                  />
                  <NumberInput
                    label="% de mensualidades con pago atrasado (mora)"
                    value={moraPct}
                    onChange={setMoraPct}
                    min={0}
                    max={50}
                    step={1}
                    unit="%"
                  />
                  <NumberInput
                    label="% de no-shows (alumnos que no asisten a sesiones)"
                    value={noShowPct}
                    onChange={setNoShowPct}
                    min={0}
                    max={50}
                    step={1}
                    unit="%"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              <Card className="border-amber-500/40 bg-amber-500/5">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-amber-500" />
                    <h3 className="text-lg font-bold text-amber-500">
                      Lo que pierdes al año hoy
                    </h3>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {formatCOP(results.totalLoss)}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>· Cobranza manual</span>
                      <span className="font-semibold">
                        {formatCOP(results.cobranzaAnnualCost)}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>· Pérdida por mora</span>
                      <span className="font-semibold">
                        {formatCOP(results.moraLoss)}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>· Pérdida por no-shows</span>
                      <span className="font-semibold">
                        {formatCOP(results.noShowLoss)}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className={`${
                  isProfitable
                    ? "border-sport-success/40 bg-sport-success/5"
                    : "border-border"
                }`}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-sport-success" />
                    <h3 className="text-lg font-bold text-sport-success">
                      Con SportMaps Pro
                    </h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Costo SportMaps Pro/año
                      </span>
                      <span className="font-semibold">
                        {formatCOP(results.sportmapsAnnual)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Ahorro estimado/año
                      </span>
                      <span className="font-semibold text-sport-success">
                        {formatCOP(results.totalAnnualSavings)}
                      </span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-border">
                      <span className="font-bold text-foreground">
                        Beneficio neto/año
                      </span>
                      <span className="text-2xl font-bold text-sport-success">
                        {formatCOP(results.netAnnualBenefit)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-sport-primary/10 p-4 text-center">
                      <TrendingUp className="w-5 h-5 mx-auto mb-1 text-sport-primary" />
                      <p className="text-xs text-muted-foreground">ROI anual</p>
                      <p className="text-2xl font-bold text-sport-primary">
                        {results.roiPct.toFixed(0)}%
                      </p>
                    </div>
                    <div className="rounded-xl bg-sport-accent/10 p-4 text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-sport-accent" />
                      <p className="text-xs text-muted-foreground">Payback</p>
                      <p className="text-2xl font-bold text-sport-accent">
                        {results.paybackMonths.toFixed(1)} meses
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="w-full bg-sport-success hover:bg-sport-success/90 text-white font-bold rounded-xl py-6"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Hablar con ventas con estos números
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full rounded-xl">
                <Link to="/planes">
                  Ver planes y combos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Methodology */}
          <Card className="mt-12 border-border">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4">Cómo calculamos esto</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Las fórmulas son intencionalmente conservadoras. Los números
                reales suelen ser mejores en producción.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  · <strong className="text-foreground">Costo hora admin:</strong>{" "}
                  {formatCOP(ADMIN_HOURLY_COST_COP)}/h (mercado Colombia 2026)
                </li>
                <li>
                  ·{" "}
                  <strong className="text-foreground">
                    Reducción de tiempo cobranza:
                  </strong>{" "}
                  80% (WhatsApp AI reemplaza el grueso del trabajo manual)
                </li>
                <li>
                  · <strong className="text-foreground">Reducción de mora:</strong>{" "}
                  65% (recordatorios automáticos + link de pago en el mensaje)
                </li>
                <li>
                  ·{" "}
                  <strong className="text-foreground">
                    Reducción de no-shows:
                  </strong>{" "}
                  70% (confirmaciones AI 24h antes)
                </li>
                <li>
                  ·{" "}
                  <strong className="text-foreground">
                    SportMaps Pro:
                  </strong>{" "}
                  {formatCOP(SPORTMAPS_PRO_MONTHLY)}/mes (plan Escuela Pro
                  anual)
                </li>
              </ul>
              <Badge variant="outline" className="mt-4">
                Validación: casos reales de academias de 100-500 alumnos en
                2025-2026
              </Badge>
            </CardContent>
          </Card>
        </div>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
}

// ============================================================================
// Sub-components
// ============================================================================

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  unit: string;
  formatValue?: (v: number) => string;
}

function NumberInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  formatValue,
}: NumberInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>
      <div className="flex items-baseline gap-3 mb-2">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (!Number.isNaN(v)) onChange(Math.max(min, Math.min(max, v)));
          }}
          className="w-32 px-3 py-2 rounded-lg border border-border bg-background text-foreground text-lg font-bold focus:outline-none focus:ring-2 focus:ring-sport-primary"
        />
        <span className="text-sm text-muted-foreground">
          {formatValue ? formatValue(value) : unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-sport-primary"
      />
      <div className="flex justify-between text-xs text-muted-foreground mt-1">
        <span>{min.toLocaleString("es-CO")}</span>
        <span>{max.toLocaleString("es-CO")}</span>
      </div>
    </div>
  );
}
