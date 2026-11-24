import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Flame, MessageCircle, X } from "lucide-react";
import {
  PROMO_BF,
  enlaceCupoBF,
  pesosCOP,
  promoBFActiva,
  registrarClicPromoBF,
} from "@/config/promoBlackFriday";

const NARANJA = "#FB9F1E";
const CLAVE_BARRA_CERRADA = `sm-${PROMO_BF.id}-barra-cerrada`;

/* ─── Cuenta regresiva ─────────────────────────────────────────────────────── */

function partes(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    minutos: Math.floor((s % 3600) / 60),
    segundos: s % 60,
    terminado: s === 0,
  };
}

function useCuentaRegresiva(destinoISO: string) {
  const destino = Date.parse(destinoISO);
  const [restante, setRestante] = useState(() => partes(destino - Date.now()));
  useEffect(() => {
    const t = setInterval(() => setRestante(partes(destino - Date.now())), 1000);
    return () => clearInterval(t);
  }, [destino]);
  return restante;
}

/* ─── Barra superior (va dentro del header fijo) ───────────────────────────── */

/**
 * Estado de la barra: visible mientras la promo esté vigente y la persona no la haya cerrado.
 * El header la usa para reservar su alto (40 px) y correr el menú móvil.
 */
export function useBarraBF() {
  const [visible, setVisible] = useState(() => promoBFActiva());
  useEffect(() => {
    try {
      if (localStorage.getItem(CLAVE_BARRA_CERRADA) === "1") setVisible(false);
    } catch {
      /* sin storage (modo privado, preview): se muestra igual */
    }
  }, []);
  const cerrar = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(CLAVE_BARRA_CERRADA, "1");
    } catch {
      /* ídem */
    }
  }, []);
  return { visible, cerrar };
}

export function BlackFridayBar({ onCerrar }: { onCerrar: () => void }) {
  const reducir = useReducedMotion();
  return (
    <div className="relative h-10 overflow-hidden bg-black text-white">
      {/* Línea inferior animada, naranja-verde-naranja */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] w-[200%]"
        style={{ background: `linear-gradient(90deg, ${NARANJA}, #248223, ${NARANJA}, #248223, ${NARANJA})` }}
        animate={reducir ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <div className="flex h-full items-center justify-center gap-2 pl-3 pr-9 text-xs sm:gap-3 sm:px-10 sm:text-sm">
        <Flame className="hidden h-4 w-4 shrink-0 sm:block" style={{ color: NARANJA }} aria-hidden />
        <span className="shrink-0 font-black tracking-wide sm:tracking-wider" style={{ color: NARANJA }}>
          BLACK FRIDAY
        </span>
        <span className="truncate">
          <span className="sm:hidden">Gratis hasta el 31/12</span>
          <span className="hidden sm:inline">SportMaps gratis hasta el {PROMO_BF.gratisHasta}</span>
          <span className="hidden md:inline text-white/60"> · solo {PROMO_BF.cupos} cupos</span>
        </span>
        <a
          href={enlaceCupoBF()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => registrarClicPromoBF("barra")}
          className="inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 font-bold text-black transition-colors hover:bg-white"
          style={{ backgroundColor: NARANJA }}
        >
          <span className="hidden sm:inline">Quiero mi cupo</span>
          <span className="sm:hidden">Pedir</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
      <button
        type="button"
        onClick={onCerrar}
        aria-label="Cerrar aviso de Black Friday"
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ─── Bloque grande (home, /escuelas, /planes) ─────────────────────────────── */

function Casilla({ valor, etiqueta }: { valor: number; etiqueta: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] font-mono text-2xl font-bold tabular-nums text-white sm:h-16 sm:w-16 sm:text-3xl">
        {String(valor).padStart(2, "0")}
      </div>
      <span className="mt-1.5 text-[11px] uppercase tracking-wider text-white/50">{etiqueta}</span>
    </div>
  );
}

const BENEFICIOS = [
  <><strong className="text-white">Pasamos tus datos por ti:</strong> nos envías tu Excel y nosotros lo cargamos.</>,
  <><strong className="text-white">Cobros, comprobantes y asistencia</strong> en un solo lugar.</>,
  <><strong className="text-white">Mapi, tu asistente de IA,</strong> te ayuda en el día a día.</>,
];

interface BlackFridayPromoProps {
  /** Para la analítica: dónde está el bloque. */
  ubicacion: "home" | "escuelas" | "planes";
  /** En /planes el botón «Ver planes» sobra. */
  mostrarVerPlanes?: boolean;
  className?: string;
}

export function BlackFridayPromo({ ubicacion, mostrarVerPlanes = true, className = "" }: BlackFridayPromoProps) {
  const reducir = useReducedMotion();
  const { dias, horas, minutos, segundos, terminado } = useCuentaRegresiva(PROMO_BF.pedirHasta);
  if (terminado || !promoBFActiva()) return null;

  return (
    <section id="black-friday" aria-labelledby="bf-titulo" className={`container mx-auto px-4 py-8 md:py-12 ${className}`}>
      <div
        className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] text-white ring-1 ring-white/10"
        style={{ boxShadow: "0 24px 70px -20px rgba(251,159,30,0.45)" }}
      >
        {/* Fondo: brillos de marca y la palabra gigante de marca de agua */}
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl" style={{ background: NARANJA }} />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#248223] opacity-30 blur-3xl" />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 right-0 select-none whitespace-nowrap text-[96px] font-black leading-none tracking-tighter text-transparent sm:text-[140px]"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.07)" }}
        >
          BLACK FRIDAY
        </div>

        <div className="relative grid gap-8 p-6 sm:p-10 md:grid-cols-[1.35fr_1fr] md:items-center md:gap-10 md:p-12">
          {/* Izquierda: la oferta */}
          <div>
            <motion.span
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wider text-black"
              style={{ backgroundColor: NARANJA }}
              animate={reducir ? undefined : { scale: [1, 1.05, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Flame className="h-3.5 w-3.5" aria-hidden />
              BLACK FRIDAY · SOLO {PROMO_BF.cupos} CUPOS
            </motion.span>

            <h2 id="bf-titulo" className="mt-5 text-3xl font-black leading-[1.1] sm:text-4xl lg:text-5xl">
              SportMaps{" "}
              <span className="bg-gradient-to-r from-[#FB9F1E] to-[#ffd08a] bg-clip-text text-transparent">gratis</span>
              <br />
              hasta el {PROMO_BF.gratisHasta}
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/75 sm:text-lg">
              Noviembre y diciembre sin pagar, con todas las funciones y la migración de tus datos incluida.
            </p>

            <ul className="mt-6 space-y-3">
              {BENEFICIOS.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/75 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4ade80]" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={enlaceCupoBF()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => registrarClicPromoBF(ubicacion)}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-7 py-4 text-base font-bold text-black transition-transform hover:scale-[1.03] sm:text-lg"
                style={{ backgroundColor: NARANJA, boxShadow: "0 8px 24px rgba(251,159,30,0.4)" }}
              >
                {!reducir && (
                  <motion.span
                    aria-hidden
                    className="absolute inset-y-0 w-1/3 -skew-x-12 bg-white/40"
                    initial={{ left: "-40%" }}
                    animate={{ left: "140%" }}
                    transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
                  />
                )}
                <MessageCircle className="relative h-5 w-5" aria-hidden />
                <span className="relative">Quiero mi cupo por WhatsApp</span>
              </a>
              {mostrarVerPlanes && (
                <Link
                  to="/planes"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Ver planes
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              )}
            </div>

            <p className="mt-5 text-xs text-white/50 sm:text-sm">
              {PROMO_BF.aplicaA} Desde enero pagas tu plan normal, desde {pesosCOP(PROMO_BF.precioDesdeEnero)} al mes. Hasta{" "}
              {PROMO_BF.cupos} escuelas; se pide hasta el {PROMO_BF.pedirHastaTexto}.
            </p>
          </div>

          {/* Derecha: urgencia */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-white/60">
              Pide tu cupo antes de que termine
            </p>
            <div className="mt-4 flex items-start justify-center gap-2 sm:gap-3" role="timer" aria-live="off"
              aria-label={`Quedan ${dias} días, ${horas} horas y ${minutos} minutos`}>
              <Casilla valor={dias} etiqueta="días" />
              <span className="pt-3 text-2xl font-bold text-white/30 sm:pt-4">:</span>
              <Casilla valor={horas} etiqueta="horas" />
              <span className="pt-3 text-2xl font-bold text-white/30 sm:pt-4">:</span>
              <Casilla valor={minutos} etiqueta="min" />
              <span className="pt-3 text-2xl font-bold text-white/30 sm:pt-4">:</span>
              <Casilla valor={segundos} etiqueta="seg" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/[0.06] p-4 text-center">
                <div className="text-3xl font-black" style={{ color: NARANJA }}>$0</div>
                <div className="mt-1 text-xs text-white/60">hasta el 31 de diciembre</div>
              </div>
              <div className="rounded-xl bg-white/[0.06] p-4 text-center">
                <div className="text-3xl font-black text-white">{PROMO_BF.cupos}</div>
                <div className="mt-1 text-xs text-white/60">cupos en total</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
