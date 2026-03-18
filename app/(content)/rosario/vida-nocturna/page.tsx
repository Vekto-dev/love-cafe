import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappUrl } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Vida nocturna en Rosario | Bares, música en vivo y boliches",
  description:
    "La guía de la noche rosarina: Barrio Pichincha, bares del centro, música en vivo, milongas y los mejores planes para salir. Tips de horarios y transporte.",
  keywords: [
    "vida nocturna rosario",
    "bares rosario",
    "salir rosario",
    "barrio pichincha noche",
    "boliches rosario",
    "musica en vivo rosario",
    "que hacer rosario noche",
  ],
  alternates: { canonical: "https://coolraulhostel.com/rosario/vida-nocturna" },
  openGraph: {
    title: "Vida nocturna en Rosario | Bares, música en vivo y boliches",
    description:
      "Guía por zonas de la noche rosarina: Pichincha, centro, costanera, música en vivo. Horarios, tipos de lugar y cómo moverse.",
    url: "https://coolraulhostel.com/rosario/vida-nocturna",
  },
};

const ZONES = [
  {
    title: "Barrio Pichincha",
    badge: "El más activo",
    badgeColor: "bg-primary/20 text-primary-light",
    desc: "El epicentro de la noche rosarina. Concentra la mayor variedad de propuestas en pocas cuadras: bares de rock, cumbia, electrónica, milongas, bares de autor y lugares de comida nocturna.",
    streets: "Eje principal: calles Ricchieri, Rueda y los laterales de Av. Wheelwright.",
    hours: "Empieza a llenarse después de las 23hs. Los boliches llegan al pico entre la 1 y las 3am.",
    types: ["Rock y metal", "Electrónica y techno", "Cumbia y cuarteto", "Milonga y tango", "Cerveza artesanal"],
  },
  {
    title: "Microcentro",
    badge: "Más tranquilo",
    badgeColor: "bg-emerald-500/20 text-emerald-400",
    desc: "La zona de San Lorenzo, Córdoba y España tiene bares de mediana escala ideales para tomar algo antes de ir a Pichincha o para quienes prefieren un ambiente más relajado. Muchos tienen música en vivo los fines de semana.",
    streets: "San Lorenzo entre Laprida y Zeballos. Córdoba y sus laterales.",
    hours: "Pico entre las 21 y las 24hs. Más early que Pichincha.",
    types: ["Bares de tragos", "After office", "Música en vivo acústica", "Craft beer"],
  },
  {
    title: "Costanera de noche",
    badge: "Ambiente relajado",
    badgeColor: "bg-blue-500/20 text-blue-300",
    desc: "Los bares y restaurantes sobre el río Paraná tienen un ambiente más distendido y familiar. Ideal para una copa mirando el agua antes de seguir la noche. En verano se llena de rosarinos que buscan el fresco del río.",
    streets: "Av. de la Costa Estanislao López desde el Monumento hacia el norte.",
    hours: "Activo desde el atardecer hasta medianoche. No es zona de trasnoche.",
    types: ["Bares con vista al río", "Restaurantes con terraza", "Heladerías nocturnas"],
  },
];

const VENUES = [
  { name: "Plataforma Lavardén", type: "Cultural / Teatro", desc: "Espacio cultural municipal con agenda variada: teatro, música en vivo, danza. Preguntá la programación de la semana al llegar." },
  { name: "La Quimera", type: "Rock / Indie", desc: "Bar con escenario chico donde tocan bandas locales y nacionales. Entrada accesible y muy buena atmósfera." },
  { name: "El Loft", type: "Rock / Eventos", desc: "Espacio de mayor capacidad para shows de bandas con más convocatoria. Revisá la agenda online antes de llegar." },
  { name: "El Círculo", type: "Ópera / Clásica / Pop", desc: "El teatro más hermoso de Rosario. Tiene programación de ópera, orquesta y shows de artistas nacionales en acústico." },
];

export default function VidaNocturnaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs
        items={[
          { name: "Guía de Rosario", href: "/rosario" },
          { name: "Vida nocturna", href: "/rosario/vida-nocturna" },
        ]}
      />

      <header className="mb-12">
        <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
          Guía de noche
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
          Vida nocturna en Rosario
        </h1>
        <p className="text-text-muted text-lg max-w-2xl">
          Rosario no se duerme temprano. La ciudad tiene una escena nocturna activa con propuestas para todos los gustos, concentradas principalmente en el Barrio Pichincha y el microcentro.
        </p>
      </header>

      {/* Zones */}
      <section className="mb-14" aria-label="Zonas de la noche rosarina">
        <h2 className="font-heading text-2xl text-text-primary mb-6">Las zonas principales</h2>
        <div className="space-y-5">
          {ZONES.map((zone) => (
            <article key={zone.title} className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="font-heading text-xl text-text-primary">{zone.title}</h3>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${zone.badgeColor}`}>
                  {zone.badge}
                </span>
              </div>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{zone.desc}</p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-surface/50 rounded-xl p-3">
                  <p className="text-text-dim font-semibold mb-1">Calles y zona</p>
                  <p className="text-text-muted">{zone.streets}</p>
                </div>
                <div className="bg-surface/50 rounded-xl p-3">
                  <p className="text-text-dim font-semibold mb-1">Horarios</p>
                  <p className="text-text-muted">{zone.hours}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {zone.types.map((t) => (
                  <span key={t} className="text-xs bg-surface border border-border text-text-dim px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Venues */}
      <section className="mb-14" aria-label="Salas y espacios culturales">
        <h2 className="font-heading text-2xl text-text-primary mb-6">Música en vivo y cultura</h2>
        <p className="text-text-muted mb-6">
          Rosario es la ciudad del rock nacional. De acá salieron Los Redondos, La Bersuit Vergarabat, Fito Páez y decenas de bandas que formaron la música argentina. La escena de música en vivo sigue siendo muy activa.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {VENUES.map((v) => (
            <article key={v.name} className="glass-card rounded-2xl p-5">
              <p className="text-text-primary font-semibold text-sm mb-0.5">{v.name}</p>
              <p className="text-primary-light text-xs mb-2">{v.type}</p>
              <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Tips section */}
      <section className="mb-10" aria-label="Tips prácticos">
        <h2 className="font-heading text-2xl text-text-primary mb-6">Tips prácticos</h2>
        <div className="glass-card rounded-2xl p-6">
          <ul className="space-y-4">
            {[
              { title: "Los horarios son tarde", desc: "Los bares del centro empiezan a llenarse después de las 21hs. Los boliches de Pichincha tienen pico pasada la medianoche. Si llegás a las 22hs a un boliche, vas a estar prácticamente solo." },
              { title: "Efectivo para lugares chicos", desc: "Muchos bares independientes y boliches de Pichincha no tienen terminal de tarjeta o cobran un recargo. Sacá plata del cajero antes de salir." },
              { title: "Remises para volver", desc: "La madrugada no es el mejor momento para caminar largas distancias en ninguna ciudad. Los remises son la mejor opción: pedile el número de una radio de confianza al staff del hostel." },
              { title: "Consultá la agenda cultural", desc: "Antes de llegar, revisá las redes de La Quimera, El Loft y Plataforma Lavardén. A veces coincidís con un show increíble sin haberlo planeado." },
              { title: "Jueves a sábado son los mejores días", desc: "El jueves ya tiene buena movida en los bares del centro. El viernes y sábado es cuando Pichincha está completa. El domingo puede sorprender con eventos culturales al aire libre." },
            ].map((tip) => (
              <li key={tip.title} className="flex items-start gap-3">
                <span className="text-primary-light mt-0.5 flex-shrink-0" aria-hidden="true">→</span>
                <div>
                  <p className="text-text-primary font-semibold text-sm">{tip.title}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hostel note */}
      <div className="glass-card rounded-2xl p-6 border border-primary/30 mb-8">
        <p className="text-text-muted text-sm leading-relaxed">
          <span className="text-text-primary font-semibold">Cool Raúl tiene bar propio y noches de karaoke</span>. Estás a 30 minutos a pie de Pichincha desde el hostel. Preguntale al staff qué está pasando esta noche específica: los recepcionistas conocen la ciudad de primera mano y te van a dar recomendaciones según lo que estés buscando.
        </p>
      </div>

      {/* Internal links */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { href: "/rosario", label: "Guía de Rosario", desc: "Panorama completo" },
          { href: "/blog/que-hacer-rosario-de-noche", label: "Rosario de noche", desc: "Perspectiva experiencial" },
          { href: "/rosario/que-hacer", label: "15 planes en Rosario", desc: "Actividades de día y noche" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="glass-card rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group block focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <p className="text-text-primary font-semibold text-sm group-hover:text-primary-light transition-colors">{link.label} →</p>
            <p className="text-text-dim text-xs mt-1">{link.desc}</p>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="glass-card rounded-3xl p-8 text-center">
        <h2 className="font-heading text-2xl text-text-primary mb-3">
          ¿Querés vivir la noche rosarina desde adentro?
        </h2>
        <p className="text-text-muted mb-5 max-w-md mx-auto">
          Reservá en Cool Raúl y tenés al staff disponible para recomendarte qué hacer cada noche según tu gusto.
        </p>
        <a
          href={whatsappUrl("Hola! Vi la guía de vida nocturna y quiero reservar en Cool Raúl.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          Reservar por WhatsApp
        </a>
      </div>
    </div>
  );
}
