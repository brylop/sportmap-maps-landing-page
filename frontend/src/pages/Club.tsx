import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Users, Clock, ArrowRight, ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  getClubBySlug,
  clientClubs,
  clubSports,
  clubCity,
  clubLogo,
  clubTypeLabel,
  citySlug,
  formatSchedule,
  formatAges,
  formatCop,
  normalizeSport,
  SITE_URL,
  APP_URL,
  type Club as ClubData,
} from "@/lib/clubs";
import { SALES_WHATSAPP } from "@/lib/whatsappFallback";

/**
 * /clubes/:slug — ficha pública de un club.
 *
 * Cliente (is_client): página completa, indexable, con equipos, horarios,
 * entrenadores y sedes, más "Hecho con SportMaps". Directorio importado: ficha
 * corta con noindex y la invitación a reclamarla (ver src/lib/clubs.ts).
 */
export default function Club() {
  const { slug } = useParams<{ slug: string }>();
  const club = slug ? getClubBySlug(slug) : undefined;

  if (!club) return <ClubNotFound />;

  const city = clubCity(club);
  const sports = clubSports(club);
  const logo = clubLogo(club);
  const typeLabel = clubTypeLabel(club);
  const canonical = `${SITE_URL}/clubes/${club.slug}`;
  const sportsText = sports.slice(0, 3).join(", ");
  const title = `${club.name}${city ? ` en ${city}` : ""}${sportsText ? ` — ${sportsText}` : ""}`;
  const description = club.is_client
    ? `${club.name}: ${typeLabel.toLowerCase()}${sportsText ? ` de ${sportsText.toLowerCase()}` : ""}${city ? ` en ${city}` : ""}. ${club.teams.length} grupos, horarios, sedes${club.price_from ? ` y mensualidad desde ${formatCop(club.price_from)}` : ""}. Inscríbete en línea.`
    : `${club.name}: ${typeLabel.toLowerCase()}${sportsText ? ` de ${sportsText.toLowerCase()}` : ""}${city ? ` en ${city}` : ""}. Ficha del directorio deportivo de SportMaps.`;

  const main = club.branches.find((b) => b.is_main) ?? club.branches[0];
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "@id": `${canonical}#club`,
    name: club.name,
    url: canonical,
    ...(club.description ? { description: club.description.slice(0, 500) } : {}),
    ...(logo ? { logo, image: logo } : {}),
    ...(sports.length ? { sport: sports } : {}),
    ...(main?.address || city
      ? {
          address: {
            "@type": "PostalAddress",
            ...(main?.address ? { streetAddress: main.address } : {}),
            ...(city ? { addressLocality: city } : {}),
            addressCountry: "CO",
          },
        }
      : {}),
    ...(main?.lat && main?.lng ? { geo: { "@type": "GeoCoordinates", latitude: main.lat, longitude: main.lng } } : {}),
    ...(club.is_client && club.price_from
      ? { priceRange: `Desde ${formatCop(club.price_from)} COP/mes` }
      : {}),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "SportMaps", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Clubes", item: `${SITE_URL}/clubes` },
      { "@type": "ListItem", position: 3, name: club.name, item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={title}
        description={description}
        url={canonical}
        canonical={canonical}
        image={logo ?? undefined}
        noindex={!club.is_client}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <TechHeader onSectionClick={() => {}} activeSection="clubes" />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="text-sm text-muted-foreground mb-6 flex flex-wrap items-center gap-1">
            <Link to="/clubes" className="hover:text-foreground inline-flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Clubes
            </Link>
            {city && (
              <>
                <span>/</span>
                <Link to={`/clubes?ciudad=${citySlug(city)}`} className="hover:text-foreground">{city}</Link>
              </>
            )}
          </nav>

          {/* Encabezado */}
          <header className="flex flex-col sm:flex-row gap-6 items-start mb-10">
            {logo ? (
              <img src={logo} alt={`Logo de ${club.name}`} className="w-24 h-24 rounded-2xl object-cover border border-border bg-card" loading="eager" />
            ) : (
              <div className="w-24 h-24 rounded-2xl bg-sport-primary/10 text-sport-primary flex items-center justify-center text-3xl font-bold shrink-0">
                {club.name.charAt(0)}
              </div>
            )}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary">{typeLabel}</Badge>
                {club.is_client && (
                  <Badge className="bg-sport-success/15 text-sport-success border-sport-success/30">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> Opera en SportMaps
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{club.name}</h1>
              <p className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
                {city && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {city}
                  </span>
                )}
                {sports.length > 0 && <span>{sports.join(" · ")}</span>}
                {club.is_client && club.price_from && <span>Mensualidad desde {formatCop(club.price_from)}</span>}
              </p>
            </div>
          </header>

          {club.is_client ? <ClientBody club={club} /> : <DirectoryBody club={club} city={city} />}

          {/* Otros clubes con perfil completo: enlazado interno entre fichas */}
          <OtherClubs current={club} />

          <p className="text-center text-xs text-muted-foreground mt-12">
            {club.is_client ? (
              <>
                Hecho con <Link to="/" className="font-semibold text-sport-primary hover:underline">SportMaps</Link>, el software de gestión
                para escuelas y clubes deportivos en Colombia.
              </>
            ) : (
              <>
                Ficha del directorio deportivo de <Link to="/" className="font-semibold text-sport-primary hover:underline">SportMaps</Link>,
                con información de registros públicos.
              </>
            )}
          </p>
        </div>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
}

function ClientBody({ club }: { club: ClubData }) {
  const teamsWithSchedule = club.teams.filter((t) => formatSchedule(t.schedule).length > 0).length;
  return (
    <div className="space-y-10">
      {/* CTA principal */}
      <Card className="border-sport-primary/30 bg-gradient-to-br from-sport-primary/5 to-sport-accent/5">
        <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div>
            <p className="font-semibold text-foreground text-lg">¿Quieres entrenar en {club.name}?</p>
            <p className="text-sm text-muted-foreground">
              Inscríbete en línea y paga la mensualidad desde el celular.
            </p>
          </div>
          <Button asChild size="lg" className="bg-sport-primary hover:bg-sport-primary/90 text-white shrink-0">
            <a href={`${APP_URL}/s/${club.slug}`} rel="noopener">
              Ver club e inscribirme <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </CardContent>
      </Card>

      {club.description && (
        <section>
          <h2 className="text-2xl font-bold mb-3">Sobre el club</h2>
          <div className="text-muted-foreground whitespace-pre-line leading-relaxed">{club.description}</div>
        </section>
      )}

      {club.teams.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-1">Grupos y horarios</h2>
          <p className="text-sm text-muted-foreground mb-4">
            {club.teams.length} {club.teams.length === 1 ? "grupo" : "grupos"}
            {teamsWithSchedule > 0 ? ` · ${teamsWithSchedule} con horario publicado` : ""}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {club.teams.map((t, i) => {
              const schedule = formatSchedule(t.schedule);
              const ages = formatAges(t);
              const place = t.schedule?.find((s) => s.place)?.place || t.location;
              return (
                <Card key={`${t.name}-${i}`}>
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground mb-2">
                      {[normalizeSport(t.sport), ages, t.level].filter(Boolean).join(" · ")}
                    </p>
                    {schedule.length > 0 && (
                      <ul className="text-sm text-muted-foreground space-y-0.5">
                        {schedule.map((s) => (
                          <li key={s} className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 shrink-0" /> {s}
                          </li>
                        ))}
                      </ul>
                    )}
                    {place && <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1"><MapPin className="w-3 h-3" /> {place}</p>}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {t.price_monthly ? <Badge variant="outline">{formatCop(t.price_monthly)}/mes</Badge> : null}
                      {t.accepts_new === false ? (
                        <Badge variant="outline">Cupos cerrados</Badge>
                      ) : (
                        <Badge variant="outline" className="border-sport-success/40 text-sport-success">Recibe nuevos</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {club.staff.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Users className="w-6 h-6" /> Entrenadores</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {club.staff.map((s) => (
              <div key={s.full_name} className="rounded-xl border border-border p-3">
                <p className="font-medium text-foreground">{s.full_name}</p>
                {s.specialty && <p className="text-xs text-muted-foreground">{s.specialty}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {club.branches.some((b) => b.address || b.name) && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Sedes</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {club.branches.map((b, i) => (
              <div key={`${b.name}-${i}`} className="rounded-xl border border-border p-4">
                <p className="font-medium text-foreground">{b.name || "Sede"}</p>
                {(b.address || b.city) && (
                  <p className="text-sm text-muted-foreground flex items-start gap-1 mt-1">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> {[b.address, b.city].filter(Boolean).join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function DirectoryBody({ club, city }: { club: ClubData; city: string | null }) {
  const claim = encodeURIComponent(
    `Hola SportMaps 👋 Soy de ${club.name}${city ? ` (${city})` : ""} y quiero reclamar nuestra página en sportmaps.co/clubes/${club.slug}.`,
  );
  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6 text-muted-foreground leading-relaxed">
          <p>
            {club.name} aparece en el directorio deportivo de SportMaps
            {city ? ` como ${clubTypeLabel(club).toLowerCase()} en ${city}` : ""}. La información viene de
            registros públicos y todavía no la administra el club.
          </p>
        </CardContent>
      </Card>

      <Card className="border-sport-primary/30 bg-gradient-to-br from-sport-primary/5 to-sport-accent/5">
        <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div>
            <p className="font-semibold text-foreground text-lg">¿Eres de {club.name}?</p>
            <p className="text-sm text-muted-foreground">
              Reclama esta página gratis: publica tus grupos, horarios y precios, y recibe inscripciones y pagos en línea.
            </p>
          </div>
          <Button asChild size="lg" className="bg-sport-primary hover:bg-sport-primary/90 text-white shrink-0">
            <a href={`https://wa.me/${SALES_WHATSAPP}?text=${claim}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" /> Reclamar mi página
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function OtherClubs({ current }: { current: ClubData }) {
  const others = otherClients(current).slice(0, 6);
  if (others.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="text-xl font-bold mb-4">Otros clubes en SportMaps</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {others.map((c) => (
          <Link key={c.slug} to={`/clubes/${c.slug}`} className="rounded-xl border border-border p-4 hover:border-sport-primary/40 transition-colors">
            <p className="font-medium text-foreground">{c.name}</p>
            <p className="text-xs text-muted-foreground">
              {[clubCity(c), clubSports(c).slice(0, 2).join(", ")].filter(Boolean).join(" · ")}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function otherClients(current: ClubData): ClubData[] {
  return clientClubs.filter((c) => c.slug !== current.slug).sort((a, b) => b.teams.length - a.teams.length);
}

function ClubNotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="Club no encontrado" noindex />
      <TechHeader onSectionClick={() => {}} activeSection="clubes" />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold mb-2">No encontramos ese club</h1>
        <p className="text-muted-foreground mb-6">Puede que haya cambiado su dirección o que su perfil ya no sea público.</p>
        <Button asChild>
          <Link to="/clubes">Ver todos los clubes</Link>
        </Button>
      </main>
      <SportMapsFooter />
    </div>
  );
}
