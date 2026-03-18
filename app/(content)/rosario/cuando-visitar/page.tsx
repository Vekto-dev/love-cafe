import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappUrl } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Cuándo visitar Rosario: guía estacional completa 2026",
  description:
    "¿Cuál es la mejor época para ir a Rosario? Guía estacional con clima, precios, eventos y consejos para cada temporada. Primavera, verano, otoño e invierno.",
  keywords: [
    "cuando visitar rosario",
    "mejor epoca rosario",
    "rosario temporada",
    "rosario verano invierno",
    "clima rosario por mes",
    "rosario temporada baja precios",
    "rosario primavera",
    "rosario cuando ir",
  ],
  alternates: { canonical: "https://coolraulhostel.com/rosario/cuando-visitar" },
  openGraph: {
    title: "Cuándo visitar Rosario: guía estacional completa 2026",
    description:
      "La guía honesta sobre cuándo ir a Rosario. Clima real, precios por temporada y qué esperar en cada época del año.",
    url: "https://coolraulhostel.com/rosario/cuando-visitar",
    images: [{ url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1200/v1/propertyimages/9/93936/5014.jpg", width: 1200, height: 630, alt: "Rosario, Argentina" }],
  },
};

const SEASONS = [
  {
    name: "Primavera",
    months: "Septiembre — Noviembre",
    emoji: "🌸",
    temp: "15–25°C",
    vibe: "La mejor época sin dudas",
    desc: "Los jacarandás florecen en las calles del centro y Pichincha se llena de color violeta. Las temperaturas son ideales para caminar, andar en bici por la Costanera y explorar las islas del Paraná. Hay eventos culturales al aire libre, la ciudad tiene mucha energía y los días son largos.",
    activities: [
      "Costanera al atardecer",
      "Excursiones a las islas del Paraná",
      "Barrio Pichincha de día",
      "Bares al aire libre de noche",
      "Ferias de artesanos en los parques",
    ],
    idealFor: "Todo tipo de viajero. La experiencia más completa de Rosario.",
    price: "Temporada media-alta. Reservar con anticipación en noviembre.",
    highlight: false,
  },
  {
    name: "Verano",
    months: "Diciembre — Febrero",
    emoji: "☀️",
    temp: "30–40°C",
    vibe: "Intenso y nocturno",
    desc: "El calor aprieta, especialmente en enero. Los rosarinos se van de vacaciones en masa y la ciudad se pone más tranquila de lo esperado. La vida migra a la noche: la Costanera después de las 20hs, las islas del Paraná durante el día, los bares de madrugada. En enero es la temporada más baja en ocupación del hostel.",
    activities: [
      "Playas naturales en las islas del Paraná",
      "Vida nocturna intensa hasta el amanecer",
      "Costanera de noche",
      "Festivales de verano",
    ],
    idealFor: "Quien quiere el río, las islas y la noche rosarina. Mal para quienes no toleran el calor.",
    price: "Temporada alta en diciembre. Enero más bajo por el éxodo local.",
    highlight: false,
  },
  {
    name: "Otoño",
    months: "Marzo — Mayo",
    emoji: "🍂",
    temp: "18–25°C",
    vibe: "Auténtico y sin multitudes",
    desc: "El calor del verano baja y Rosario vuelve a ser habitable. El Parque Independencia se llena de colores otoñales, los bodegones sacan sus guisos y la ciudad recupera su ritmo habitual. Hay menos turismo que en primavera pero la oferta cultural sigue siendo alta.",
    activities: [
      "Parque Independencia con colores otoñales",
      "Museos y teatros",
      "Gastronomía de otoño (pucheros, guisos)",
      "Paseo por Pichincha de día",
      "Islas todavía accesibles en marzo y abril",
    ],
    idealFor: "Viajeros que quieren experiencia auténtica sin multitudes y precios razonables.",
    price: "Temporada media. Buenos precios sin sacrificar experiencia.",
    highlight: false,
  },
  {
    name: "Invierno",
    months: "Junio — Agosto",
    emoji: "❄️",
    temp: "8–15°C",
    vibe: "El secreto mejor guardado",
    desc: "La temporada que nadie recomienda pero que quienes la conocen repiten. El invierno rosarino no es el patagónico: hace frío pero es caminable, no llueve tanto y los días soleados son comunes. La ciudad es de los rosarinos y eso se nota: los bares de Pichincha tienen lugar, el Mercado del Patio tiene mesa disponible, el Teatro El Círculo estrena su temporada de ópera.",
    activities: [
      "Teatro El Círculo (temporada de ópera y clásica)",
      "Museos sin colas",
      "Bares de Pichincha sin espera",
      "Asado de domingo en el Parque Independencia",
      "Recitales de bandas locales",
      "Gastronomía de invierno (locro, puchero)",
    ],
    idealFor: "Nómades digitales, músicos, viajeros con presupuesto ajustado y quienes buscan la ciudad auténtica.",
    price: "Los precios más bajos del año. Hasta 40% menos que en temporada alta.",
    highlight: true,
  },
];

export default function CuandoVisitarPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs
          items={[
            { name: "Guía de Rosario", href: "/rosario" },
            { name: "Cuándo visitar", href: "/rosario/cuando-visitar" },
          ]}
        />

        <header className="mb-12">
          <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
            Guía estacional
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl text-text-primary leading-tight mb-4">
            Cuándo visitar Rosario
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            La respuesta corta: en primavera. La respuesta honesta: depende de lo que buscás. Esta guía te ayuda a elegir.
          </p>
        </header>

        <div className="space-y-6">
          {SEASONS.map((s) => (
            <article
              key={s.name}
              className={`glass-card rounded-3xl p-6 sm:p-8 ${s.highlight ? "border-primary/40 ring-1 ring-primary/20" : ""}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0" role="img" aria-label={s.name}>{s.emoji}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h2 className="font-heading text-2xl text-text-primary">{s.name}</h2>
                    {s.highlight && (
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        MEJOR PRECIO
                      </span>
                    )}
                  </div>
                  <p className="text-text-dim text-sm">{s.months} · {s.temp}</p>
                  <p className="text-primary-light text-sm font-semibold mt-1">{s.vibe}</p>
                </div>
              </div>

              <p className="text-text-muted text-sm leading-relaxed mb-5">{s.desc}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <p className="text-text-primary text-xs font-semibold uppercase tracking-wider mb-2">Qué hacer</p>
                  <ul className="space-y-1.5">
                    {s.activities.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-text-muted text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0" aria-hidden="true" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-text-primary text-xs font-semibold uppercase tracking-wider mb-1">Ideal para</p>
                    <p className="text-text-muted text-sm">{s.idealFor}</p>
                  </div>
                  <div>
                    <p className="text-text-primary text-xs font-semibold uppercase tracking-wider mb-1">Precios</p>
                    <p className={`text-sm font-semibold ${s.highlight ? "text-accent" : "text-text-muted"}`}>{s.price}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Temporada baja highlight */}
        <div className="mt-10 glass-card rounded-3xl p-8 border border-primary/40">
          <h2 className="font-heading text-2xl text-text-primary mb-3">
            El hostel en temporada baja: junio a agosto
          </h2>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            En invierno, Cool Raúl es un lugar diferente. Más íntimo, más tranquilo. Las áreas comunes tienen espacio de sobra, el estudio de grabación tiene más disponibilidad y el precio por noche es el más bajo del año. Si trabajás en remoto o querés quedarte semanas, el invierno es el momento ideal.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Precios hasta 40% menores que en temporada alta",
              "Estudio de grabación con mayor disponibilidad",
              "Áreas comunes más tranquilas, ideal para trabajar",
              "La ciudad auténtica sin turismo masivo",
              "Tarifas especiales para estadías de 7+ noches",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-text-muted text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl("Hola! Me interesa el hostel en temporada baja. ¿Qué tarifas tienen para invierno?")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar tarifas de temporada baja por WhatsApp"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Consultar tarifas de invierno
          </a>
        </div>

        {/* Internal links */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { href: "/rosario/que-hacer", label: "Qué hacer en Rosario", desc: "15 planes para todos los gustos" },
            { href: "/rosario/gastronomia", label: "Dónde comer", desc: "Pizza, helado y parrilla" },
            { href: "/blog/rosario-en-invierno", label: "Rosario en invierno", desc: "Por qué es la mejor época" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="glass-card rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group block focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <p className="text-text-primary font-semibold text-sm group-hover:text-primary-light transition-colors">{link.label}</p>
              <p className="text-text-dim text-xs mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
