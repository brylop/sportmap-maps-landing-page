import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, MessageSquare, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  combos,
  buildComboWhatsAppMessage,
  formatPriceCOP,
  type Combo,
} from "@/lib/combos";
import { useUpgradeContext } from "@/hooks/useUpgradeContext";
import { useToast } from "@/hooks/use-toast";

const SALES_WHATSAPP = "573128463555";

function openWhatsApp(combo: Combo) {
  const msg = buildComboWhatsAppMessage(combo);
  const url = `https://wa.me/${SALES_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

export function CombosSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-transparent via-sport-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-4xl mb-3 block">🎁</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas{" "}
            <span className="text-sport-primary">varios módulos</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combos pre-armados con descuento incluido. Pensados para los casos
            de uso más comunes: academias con tienda, federaciones con torneos,
            clínicas con servicios complementarios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {combos.map((combo, idx) => (
            <ComboCard key={combo.id} combo={combo} index={idx} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            ¿No ves tu caso? Habla con ventas y te armamos un combo a medida.
          </p>
        </div>
      </div>
    </section>
  );
}

function ComboCard({ combo, index }: { combo: Combo; index: number }) {
  const upgradeCtx = useUpgradeContext();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const monthlySavings = combo.normalPrice - combo.comboPrice;
  const annualSavings = monthlySavings * 12;
  const isFeatured = combo.badge === "MÁS POPULAR";

  /**
   * Si el usuario viene autenticado desde admin app (hasContext),
   * el click crea un upgrade_request con metadata del combo y el
   * super_admin lo procesa manualmente. Si no, abre WhatsApp legacy.
   */
  const handleClick = async () => {
    if (!upgradeCtx.hasContext) {
      openWhatsApp(combo);
      return;
    }

    setSubmitting(true);
    const comboNotes = [
      `COMBO: ${combo.name}`,
      `Módulos: ${combo.modules.join(" + ")}`,
      `Precio combo: ${formatPriceCOP(combo.comboPrice)}/mes`,
      `Precio normal: ${formatPriceCOP(combo.normalPrice)}/mes`,
      `Ahorra: ${formatPriceCOP(monthlySavings)}/mes`,
    ].join(" | ");

    const result = await upgradeCtx.createUpgradeRequest({
      request_type: "contact_sales",
      notes: comboNotes,
    });
    setSubmitting(false);

    if (result.ok) {
      toast({
        title: "¡Solicitud de combo enviada!",
        description: `Recibimos tu interés en "${combo.name}". Te contactamos pronto.`,
      });
      setTimeout(() => upgradeCtx.goBackToApp(), 2000);
    } else {
      // Fallback: si el BFF falla, mandamos por WhatsApp para no perder lead
      openWhatsApp(combo);
      toast({
        title: "Te conectamos por WhatsApp",
        description: "El servidor no respondió, te llevamos al equipo directo.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col ${
        isFeatured
          ? "bg-gradient-to-br from-sport-primary/15 to-sport-accent/15 border-sport-primary/50 shadow-lg shadow-sport-primary/10"
          : "bg-card border-border hover:border-sport-primary/30"
      }`}
    >
      {combo.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sport-primary to-sport-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          {combo.badge}
        </div>
      )}

      <div className="mb-4">
        <span className="text-3xl mb-3 block">{combo.emoji}</span>
        <h3 className="text-xl font-bold text-foreground">{combo.name}</h3>
      </div>

      <p className="text-sm text-muted-foreground mb-4 italic min-h-[40px]">
        {combo.pitch}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {combo.modules.map((m) => (
          <Badge
            key={m}
            variant="outline"
            className="text-xs font-medium border-sport-primary/30 text-foreground"
          >
            <Check className="w-3 h-3 mr-1 text-sport-success" />
            {m}
          </Badge>
        ))}
      </div>

      <div className="mb-2">
        <p className="text-sm text-muted-foreground line-through">
          Valor normal {formatPriceCOP(combo.normalPrice)}/mes
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-sport-accent">
            {formatPriceCOP(combo.comboPrice)}
          </span>
          <span className="text-muted-foreground">/mes</span>
        </div>
        <p className="text-xs text-sport-success font-semibold mt-1">
          ✨ Ahorras {formatPriceCOP(monthlySavings)}/mes ·{" "}
          {formatPriceCOP(annualSavings)}/año
        </p>
      </div>

      {combo.anchor && (
        <p className="text-xs text-muted-foreground italic mt-3 mb-2 leading-relaxed">
          💡 {combo.anchor}
        </p>
      )}

      <div className="flex-1" />

      <Button
        onClick={handleClick}
        disabled={submitting}
        className={`w-full mt-5 py-5 font-bold rounded-xl transition-all hover:scale-[1.02] ${
          isFeatured
            ? "bg-sport-primary hover:bg-sport-primary/90 text-white"
            : "bg-muted hover:bg-muted/80 text-foreground"
        }`}
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <MessageSquare className="w-4 h-4 mr-2" />
            {upgradeCtx.hasContext ? "Solicitar este combo" : "Quiero este combo"}
          </>
        )}
      </Button>
    </motion.div>
  );
}
