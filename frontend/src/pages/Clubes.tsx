import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Search, CheckCircle2, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  clubs,
  clientClubs,
  clubCity,
  clubSports,
  clubLogo,
  clubTypeLabel,
  citySlug,
  formatCop,
  SITE_URL,
  type Club,
} from "@/lib/clubs";

/**
 * /clubes — índice del directorio. Indexable: arriba los clubes que operan en
 * SportMaps (con contenido propio), abajo el directorio importado agrupado por
 * ciudad. Es la página que enlaza a todas las fichas, así que es la que le
 * muestra a Google el árbol completo.
 */
export default function Clubes() {
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState("");
  const ciudad = params.get("ciudad") ?? "";

  const cities = useMemo(() => {
    const count = new Map<string, number>();
    clubs.forEach((c) => {
      const city = clubCity(c);
      if (city) count.set(city, (count.get(city) ?? 0) + 1);
    });
    return [...count.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return clubs.filter((c) => {
      const city = clubCity(c);
      if (ciudad && (!city || citySlug(city) !== ciudad)) return false;
      if (!term) return true;
      return (
        c.name.toLowerCase().includes(term) ||
        clubSports(c).some((s) => s.toLowerCase().includes(term)) ||
        (city ?? "").toLowerCase().includes(term)
      );
    });
  }, [q, ciudad]);

  const clients = filtered.filter((c) => c.is_client);
  const directory = filtered.filter((c) => !c.is_client);

  const canonical = `${SITE_URL}/clubes`;
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Clubes y escuelas deportivas en SportMaps",
    itemListElement: clientClubs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/clubes/${c.slug}`,
      name: c.name,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Clubes y escuelas deportivas en Colombia"
        description={`Directorio de ${clubs.length} clubes, escuelas, federaciones y entes deportivos en Colombia. Grupos, horarios y sedes de los clubes que operan en SportMaps, con inscripción en línea.`}
        url={canonical}
        canonical={canonical}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      </Helmet>

      <TechHeader onSectionClick={() => {}} activeSection="clubes" />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Clubes y escuelas deportivas</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {clientClubs.length} clubes operan en SportMaps con sus grupos, horarios e inscripción en línea, y{" "}
              {clubs.length - clientClubs.length} organizaciones más están en el directorio deportivo de Colombia.
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Busca por nombre, deporte o ciudad"
                className="w-full rounded-xl border border-border bg-card pl-9 pr-3 py-2.5 text-sm"
                aria-label="Buscar clubes"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setParams({})}
              className={`px-3 py-1 rounded-full text-sm border ${!ciudad ? "bg-sport-primary text-white border-sport-primary" : "border-border"}`}
            >
              Todas
            </button>
            {cities.slice(0, 12).map(([city, n]) => (
              <button
                key={city}
                onClick={() => setParams({ ciudad: citySlug(city) })}
                className={`px-3 py-1 rounded-full text-sm border ${ciudad === citySlug(city) ? "bg-sport-primary text-white border-sport-primary" : "border-border"}`}
              >
                {city} <span className="opacity-60">({n})</span>
              </button>
            ))}
          </div>

          {clients.length > 0 && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-sport-success" /> Operan en SportMaps
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {clients.map((c) => (
                  <ClientCard key={c.slug} club={c} />
                ))}
              </div>
            </section>
          )}

          {directory.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-1">Directorio deportivo</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Información de registros públicos. ¿Ves tu club? Puedes reclamar su página gratis.
              </p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {directory.map((c) => (
                  <li key={c.slug}>
                    <Link to={`/clubes/${c.slug}`} className="text-sm hover:text-sport-primary">
                      {c.name}
                    </Link>
                    <span className="text-xs text-muted-foreground">
                      {" "}· {[clubTypeLabel(c), clubCity(c)].filter(Boolean).join(", ")}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No encontramos clubes con esa búsqueda.</p>
          )}

          <Card className="mt-16 border-sport-primary/30 bg-gradient-to-br from-sport-primary/5 to-sport-accent/5">
            <CardContent className="p-8 text-center">
              <p className="text-xl font-bold mb-2">¿Tienes un club o una escuela deportiva?</p>
              <p className="text-muted-foreground mb-5">
                Publica tu página con grupos, horarios e inscripción en línea, y cobra la mensualidad con WhatsApp IA, Wompi y Mercado Pago. Gratis para empezar.
              </p>
              <Button asChild size="lg" className="bg-sport-primary hover:bg-sport-primary/90 text-white">
                <Link to="/planes">
                  Ver planes <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
}

function ClientCard({ club }: { club: Club }) {
  const logo = clubLogo(club);
  const city = clubCity(club);
  return (
    <Link to={`/clubes/${club.slug}`}>
      <Card className="h-full hover:border-sport-primary/40 transition-colors">
        <CardContent className="p-5 flex gap-4">
          {logo ? (
            <img src={logo} alt={`Logo de ${club.name}`} className="w-14 h-14 rounded-xl object-cover border border-border" loading="lazy" />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-sport-primary/10 text-sport-primary flex items-center justify-center text-xl font-bold shrink-0">
              {club.name.charAt(0)}
            </div>
          )}
          <div className="min-w-0">
            <p className="font-semibold text-foreground truncate">{club.name}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              {city && (
                <>
                  <MapPin className="w-3 h-3" /> {city} ·{" "}
                </>
              )}
              {clubSports(club).slice(0, 2).join(", ")}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <Badge variant="outline">{club.teams.length} grupos</Badge>
              {club.price_from ? <Badge variant="outline">Desde {formatCop(club.price_from)}</Badge> : null}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
