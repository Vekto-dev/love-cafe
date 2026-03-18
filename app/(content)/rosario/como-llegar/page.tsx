import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CONTACT, whatsappUrl } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Cómo llegar a Rosario | Desde Buenos Aires, Córdoba y el aeropuerto",
  description:
    "Todas las opciones para llegar a Rosario, Argentina: bus desde Buenos Aires, avión, auto y tren. Cómo llegar de la terminal o el aeropuerto al hostel en el centro.",
  keywords: [
    "cómo llegar a rosario",
    "bus buenos aires rosario",
    "aeropuerto rosario",
    "rosario desde buenos aires",
    "terminal rosario",
    "llegar a rosario argentina",
  ],
  alternates: { canonical: "https://coolraulhostel.com/rosario/como-llegar" },
  openGraph: {
    title: "Cómo llegar a Rosario | Bus, avión, auto y tren",
    description:
      "Guía completa para llegar a Rosario desde Buenos Aires y otras ciudades. También cómo moverte de la terminal y el aeropuerto al centro.",
    url: "https://coolraulhostel.com/rosario/como-llegar",
  },
};

const OPTIONS = [
  {
    emoji: "🚌",
    title: "En bus desde Buenos Aires",
    detail: "La opción más popular y conveniente.",
    items: [
      "Terminal de salida: Terminal de Retiro (Buenos Aires)",
      "Duración: 4 a 5 horas según el servicio",
      "Empresas: Flechabus, General Urquiza, El Triunfo, Chevallier",
      "Frecuencia: hay salidas prácticamente cada 30 minutos durante el día",
      "Llegada: Terminal de Ómnibus Mariano Moreno (Rosario)",
    ],
  },
  {
    emoji: "✈️",
    title: "En avión",
    detail: "Para quienes vienen de lejos o quieren ahorrar tiempo.",
    items: [
      "Aeropuerto: Internacional Islas Malvinas (IATA: ROS), a 8 km del centro",
      "Duración del vuelo: ~55 minutos desde Aeroparque (AEP)",
      "Aerolíneas: Aerolíneas Argentinas y Flybondi tienen vuelos frecuentes",
      "Desde el aeropuerto al centro: remis (~$5.000-8.000 ARS aprox.), bus 115",
      "También hay vuelos directos desde Córdoba, Mendoza y otras ciudades",
    ],
  },
  {
    emoji: "🚗",
    title: "En auto",
    detail: "Cómodo si venís en grupo o con mucho equipaje.",
    items: [
      "Ruta principal: Autopista Nacional 9/14 (Rosario-Buenos Aires)",
      "Distancia desde Buenos Aires: ~300 km",
      "Tiempo estimado: 3 a 4 horas sin tráfico",
      "Hay peajes en el camino (tarjeta o efectivo)",
      "Estacionamiento en el centro: pago, consultá opciones cercanas en recepción",
    ],
  },
  {
    emoji: "🚆",
    title: "En tren",
    detail: "La opción más económica, aunque más lenta.",
    items: [
      "Sale desde Estación Retiro (Buenos Aires)",
      "Duración: 5 a 7 horas dependiendo del servicio",
      "Precio: significativamente más bajo que el bus",
      "Llegada: Estación Rosario Norte o Rosario Central",
      "Desde la estación al hostel: remis o colectivo",
    ],
  },
];

export default function ComoLlegarPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs
        items={[
          { name: "Guía de Rosario", href: "/rosario" },
          { name: "Cómo llegar", href: "/rosario/como-llegar" },
        ]}
      />

      <header className="mb-12">
        <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
          Información de viaje
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
          Cómo llegar a Rosario
        </h1>
        <p className="text-text-muted text-lg max-w-2xl">
          Desde Buenos Aires, Córdoba, el aeropuerto o cualquier punto del país. Todas las opciones para llegar al corazón de Santa Fe.
        </p>
      </header>

      <div className="space-y-6 mb-12">
        {OPTIONS.map((opt) => (
          <article key={opt.title} className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0 mt-0.5" role="img" aria-label={opt.title}>
                {opt.emoji}
              </span>
              <div>
                <h2 className="font-heading text-xl text-text-primary mb-1">{opt.title}</h2>
                <p className="text-text-dim text-sm mb-4">{opt.detail}</p>
                <ul className="space-y-2">
                  {opt.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                      <span className="text-primary-light mt-0.5 flex-shrink-0" aria-hidden="true">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Terminal to hostel section */}
      <section className="glass-card rounded-3xl p-8 mb-8">
        <h2 className="font-heading text-2xl text-text-primary mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary-light" aria-hidden="true" />
          </div>
          De la terminal de buses al hostel
        </h2>

        <p className="text-text-muted mb-5">
          La Terminal de Ómnibus Mariano Moreno está en Mitre 800, a unos 2 km del hostel. Estas son tus opciones para llegar:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              title: "Traslado incluido (gratis)",
              desc: "Si reservás en Cool Raúl, te buscamos en la terminal. Solo avisanos tu horario de llegada por WhatsApp y listo.",
              highlight: true,
            },
            {
              title: "Remis desde la terminal",
              desc: "Hay parada de remises en la salida de la terminal. Precio aproximado al microcentro: $2.000-$3.000 ARS (varía).",
              highlight: false,
            },
            {
              title: "Colectivo",
              desc: "Las líneas 116 y 119 te dejan cerca del hostel. Necesitás tarjeta SUBE.",
              highlight: false,
            },
            {
              title: "A pie",
              desc: "Son unos 25 minutos caminando, si venís con poco equipaje es una buena forma de empezar a conocer el centro.",
              highlight: false,
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-xl p-4 ${item.highlight ? "bg-primary/20 border border-primary/40" : "bg-surface/60 border border-border"}`}
            >
              <p className={`font-semibold text-sm mb-1 ${item.highlight ? "text-primary-light" : "text-text-primary"}`}>
                {item.title}
              </p>
              <p className="text-text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={CONTACT.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-surface border border-border hover:border-primary/50 text-text-primary text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Ver en Google Maps
          </a>
          <a
            href={whatsappUrl("Hola! Llego a la terminal el [DÍA] a las [HORA]. ¿Me pueden buscar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Pedir traslado por WhatsApp
          </a>
        </div>
      </section>

      {/* Internal links */}
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <Link
          href="/rosario/que-hacer"
          className="glass-card rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group block focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <p className="text-text-primary font-semibold text-sm group-hover:text-primary-light transition-colors">Qué hacer en Rosario →</p>
          <p className="text-text-dim text-xs mt-1">15 planes para todos los gustos</p>
        </Link>
        <Link
          href="/blog/hostel-en-rosario-como-elegir"
          className="glass-card rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group block focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <p className="text-text-primary font-semibold text-sm group-hover:text-primary-light transition-colors">Cómo elegir hostel en Rosario →</p>
          <p className="text-text-dim text-xs mt-1">Tips para no equivocarse</p>
        </Link>
      </div>
    </div>
  );
}
