import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappUrl } from "@/lib/data/contact";
import { AnimateInView } from "@/components/ui/AnimateInView";

export const metadata: Metadata = {
  title: "Alojamiento en Rosario Centro | Opciones y precios 2026",
  description:
    "Guía de alojamiento en el centro de Rosario: hostels, habitaciones privadas y opciones para todos los presupuestos. Por qué Cool Raúl es la mejor relación precio-experiencia.",
  keywords: [
    "alojamiento rosario",
    "alojamiento barato rosario centro",
    "donde dormir rosario",
    "hostal rosario",
    "habitacion rosario centro",
    "alojamiento rosario argentina 2026",
  ],
  alternates: { canonical: "https://coolraulhostel.com/alojamiento-rosario" },
  openGraph: {
    title: "Alojamiento en Rosario Centro | Opciones y precios 2026",
    description:
      "La guía honesta de alojamiento en Rosario. Tipos de alojamiento, zona ideal y por qué el microcentro es la mejor opción.",
    url: "https://coolraulhostel.com/alojamiento-rosario",
    images: [{ url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1200/v1/propertyimages/9/93936/501.jpg", width: 1200, height: 630, alt: "Cool Raúl Rock'n Hostel — Rosario" }],
  },
};

const ROOMS_SUMMARY = [
  {
    name: "Dormitorio Mixto",
    capacity: "6–8 personas",
    desc: "La opción más económica. Convivís con viajeros de todo el mundo en un dormitorio compartido con lockers y baño privado.",
    priceFrom: "USD 8",
    tag: "Más elegido",
  },
  {
    name: "Dormitorio Femenino",
    capacity: "4–6 personas",
    desc: "Mismo concepto que el mixto pero solo para mujeres. Ambiente más íntimo y seguro.",
    priceFrom: "USD 8",
    tag: "Para viajeras",
  },
  {
    name: "Habitación Privada",
    capacity: "1–2 personas",
    desc: "Tu propio espacio. Cama matrimonial o simple, aire acondicionado, privacidad total.",
    priceFrom: "USD 25",
    tag: "Mayor privacidad",
  },
];

const LOCATION_FAQ = [
  {
    q: "¿Cuánto cuesta alojarse en Rosario?",
    a: "Un dormitorio en hostel del microcentro cuesta entre USD 8 y 12 por noche. Una habitación privada en hostel entre USD 25 y 35. Los hoteles tradicionales arrancan desde USD 40-50 y pueden llegar a USD 100+ por noche. Para estadías largas siempre hay descuento negociable.",
  },
  {
    q: "¿Cuál es la mejor zona para quedarse?",
    a: "El microcentro (zona de San Lorenzo, Córdoba, Santa Fe) es la mejor opción para quienes visitan por primera vez. Todo queda cerca: la Costanera, el Monumento, los bares de Pichincha y la terminal de ómnibus. Si te quedás más tiempo, Pichincha tiene un ambiente más de barrio.",
  },
  {
    q: "¿Hay opciones para parejas?",
    a: "Sí. La habitación privada tiene cama matrimonial y privacidad total. Para parejas que viajan con presupuesto ajustado, también existe la opción de reservar camas adyacentes en el dormitorio compartido.",
  },
  {
    q: "¿Se puede reservar sin tarjeta de crédito?",
    a: "Reservando directo por WhatsApp, sí. No necesitás tarjeta de crédito ni pago anticipado en muchos casos. El acuerdo es directo con el hostel, sin intermediarios ni comisiones de plataformas. Esto también garantiza el mejor precio.",
  },
];

export default function AlojamientoRosarioPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: "Alojamiento en Rosario", href: "/alojamiento-rosario" }]} />

        <header className="mb-10">
          <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
            Guía de alojamiento
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl text-text-primary leading-tight mb-4">
            Alojamiento en Rosario: la guía honesta
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Rosario tiene opciones para todos los presupuestos. Esta guía te ayuda a entender qué hay disponible, cuánto cuesta y cuál zona elegir.
          </p>
        </header>

        <article className="prose prose-invert prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-muted prose-p:leading-relaxed prose-strong:text-text-primary prose-li:text-text-muted max-w-none">

          <h2>Tipos de alojamiento en Rosario</h2>

          <p>
            Antes de reservar, conviene entender qué tipo de alojamiento existe en la ciudad y qué ofrece cada uno.
          </p>

          <p>
            <strong>Hoteles tradicionales:</strong> los hay desde tres estrellas hasta opciones boutique en el microcentro. Son cómodos e impersonales. La mayoría no incluye desayuno en la tarifa base, no tenés cocina disponible y el precio por noche es significativamente mayor que otras opciones. Si priorizás privacidad absoluta y servicio de hotel, es tu opción. El costo mínimo para algo decente arranca en USD 40-50 por noche.
          </p>

          <p>
            <strong>Apart-hoteles:</strong> departamentos con servicio de hotel. Prácticos para estadías largas si querés cocinar y tener tu propio espacio. El problema es que no tienen vida social, no conocés a nadie y la experiencia es similar a alquilar un departamento. Los precios varían mucho según la ubicación y la temporada.
          </p>

          <p>
            <strong>Hostels:</strong> la opción que ofrece la mejor relación precio-experiencia para la mayoría de los viajeros. Dormitorios compartidos desde USD 8 la noche, cocina equipada para ahorrar en comida, desayuno incluido en muchos casos, y la posibilidad real de conocer gente. Los buenos hostels del microcentro tienen servicios que muchos hoteles de precio similar no ofrecen.
          </p>

          <h2>Por qué el centro es la mejor zona</h2>

          <p>
            El microcentro de Rosario es caminable, seguro durante el día y bien servido por el transporte público. Quedarse en el centro significa:
          </p>

          <ul>
            <li>Llegar caminando a la Costanera del Paraná (700 m desde el hostel)</li>
            <li>Monumento Nacional a la Bandera a menos de 2 km</li>
            <li>Peatonal Córdoba a 200 metros</li>
            <li>Barrio Pichincha a 25 minutos a pie</li>
            <li>Terminal de ómnibus a 2 km (con traslado incluido en Cool Raúl)</li>
            <li>Supermercados, kioscos y panaderías en la esquina</li>
          </ul>

          <p>
            Si elegís un hostel en un barrio periférico para ahorrar en alojamiento, probablemente gastás más en transporte, en comida fuera del hostel y en tiempo. El microcentro es la opción más eficiente para la mayoría de los itinerarios.
          </p>

        </article>

        {/* Cool Raúl como opción */}
        <AnimateInView className="mt-10 glass-card rounded-3xl p-8">
          <h2 className="font-heading text-2xl text-text-primary mb-4">Cool Raúl: la opción concreta</h2>
          <p className="text-text-muted text-sm leading-relaxed mb-5">
            En el centro de Rosario, en San Lorenzo 1670, desde 2006. Cool Raúl Rock&apos;n Hostel no es un alojamiento genérico: es el hostel cultural de la ciudad, con estudio de grabación, murales, bar propio y la mejor onda de Argentina. Puntuación 9.1/10 en Hostelworld y más de 308 reseñas en Google.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Desayuno continental incluido en todas las estadías",
              "WiFi de alta velocidad en todo el hostel",
              "Cocina equipada las 24 horas",
              "Aire acondicionado y calefacción",
              "Lockers individuales en todos los dormitorios",
              "Recepción 24 horas",
              "Traslado gratuito desde la terminal de ómnibus",
              "Estudio de grabación y sala de ensayo disponibles",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-text-muted text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </AnimateInView>

        {/* Tipos de habitación */}
        <AnimateInView delay={60} className="mt-8">
          <h2 className="font-heading text-2xl text-text-primary mb-5">Tipos de habitación</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {ROOMS_SUMMARY.map((room) => (
              <div key={room.name} className="glass-card rounded-2xl p-5 flex flex-col">
                <span className="text-primary-light text-xs font-bold uppercase tracking-wider mb-2">{room.tag}</span>
                <h3 className="font-heading text-lg text-text-primary mb-1">{room.name}</h3>
                <p className="text-text-dim text-xs mb-3">{room.capacity}</p>
                <p className="text-text-muted text-sm leading-relaxed flex-1 mb-4">{room.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-xl text-accent">{room.priceFrom}</span>
                  <span className="text-text-dim text-xs">/noche</span>
                </div>
              </div>
            ))}
          </div>
        </AnimateInView>

        {/* FAQ */}
        <AnimateInView delay={80} className="mt-14">
          <h2 className="font-heading text-2xl text-text-primary mb-6">Preguntas frecuentes sobre alojamiento</h2>
          <div className="space-y-4">
            {LOCATION_FAQ.map((item) => (
              <div key={item.q} className="glass-card rounded-2xl p-6">
                <h3 className="text-text-primary font-semibold text-sm mb-2">{item.q}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </AnimateInView>

        {/* CTA */}
        <AnimateInView delay={100} className="mt-10 glass-card rounded-3xl p-8 text-center glow-purple">
          <h2 className="font-heading text-2xl text-text-primary mb-3">
            Reservá sin comisiones
          </h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto text-sm">
            El precio más bajo siempre es directo por WhatsApp. Sin plataformas, sin comisiones. Respondemos rápido y confirmamos al instante.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={whatsappUrl("Hola! Estoy buscando alojamiento en Rosario. ¿Tienen disponibilidad?")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar disponibilidad de alojamiento en Rosario por WhatsApp"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Consultar disponibilidad
            </a>
            <Link
              href="/#habitaciones"
              className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary/50 text-text-primary font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Ver habitaciones
            </Link>
          </div>
        </AnimateInView>

        {/* Internal links */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {[
            { href: "/rosario", label: "Guía de Rosario", desc: "Todo lo que necesitás saber de la ciudad" },
            { href: "/rosario/cuando-visitar", label: "Cuándo visitar", desc: "La mejor época según tu perfil" },
            { href: "/musicos", label: "Para músicos", desc: "Estudio de grabación y sala de ensayo" },
            { href: "/trabajo-remoto", label: "Trabajo remoto", desc: "WiFi y estadías largas con descuento" },
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
