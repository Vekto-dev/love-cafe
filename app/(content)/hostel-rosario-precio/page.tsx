import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappUrl } from "@/lib/data/contact";
import { AnimateInView } from "@/components/ui/AnimateInView";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta un hostel en Rosario? Precios 2026 | Cool Raúl",
  description:
    "Precios actualizados de hostels en Rosario centro para 2026. Dormitorios desde USD 8/noche, habitaciones privadas desde USD 25. Comparativa y guía para reservar al mejor precio.",
  keywords: [
    "precio hostel rosario",
    "cuanto cuesta hostel rosario",
    "hostel rosario precio",
    "hostel barato rosario",
    "costo alojamiento rosario 2026",
    "hostel rosario por noche",
  ],
  alternates: { canonical: "https://coolraulhostel.com/hostel-rosario-precio" },
  openGraph: {
    title: "¿Cuánto cuesta un hostel en Rosario? Precios 2026",
    description:
      "Precios reales de hostels en Rosario para 2026. Desde USD 8 la noche. Guía para encontrar el mejor precio.",
    url: "https://coolraulhostel.com/hostel-rosario-precio",
    images: [{ url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1200/v1/propertyimages/9/93936/501.jpg", width: 1200, height: 630, alt: "Cool Raúl Rock'n Hostel — Rosario" }],
  },
};

const priceJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un hostel en Rosario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un dormitorio compartido en un hostel del microcentro de Rosario cuesta entre USD 8 y 12 por noche. Una habitación privada en hostel cuesta entre USD 25 y 35. Los precios varían según temporada: junio-agosto (temporada baja) son los meses más económicos del año.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia de precio entre temporada alta y baja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Rosario, la temporada baja (invierno, junio-agosto) puede ser hasta un 30% más económica que la temporada alta de verano. Para estadías largas y presupuesto ajustado, el invierno es la mejor época.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo reservar un hostel en Rosario al mejor precio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mejor precio siempre es reservando directamente con el hostel por WhatsApp, sin intermediarios. Las plataformas como Booking o Hostelworld agregan comisiones que encarecen la tarifa final. En Cool Raúl podés reservar directo al +54 9 341 677-1443.",
      },
    },
  ],
};

const PRICE_TABLE = [
  { tipo: "Dormitorio mixto (6–8 camas)", temporadaAlta: "USD 10–12", temporadaBaja: "USD 8–10", incluye: "Desayuno + WiFi + Locker" },
  { tipo: "Dormitorio femenino (4–6 camas)", temporadaAlta: "USD 10–12", temporadaBaja: "USD 8–10", incluye: "Desayuno + WiFi + Locker" },
  { tipo: "Habitación privada (1–2 personas)", temporadaAlta: "USD 28–35", temporadaBaja: "USD 25–30", incluye: "Desayuno + WiFi + AC" },
];

export default function HostelRosarioPrecioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs
          items={[
            { name: "Alojamiento en Rosario", href: "/alojamiento-rosario" },
            { name: "Precios 2026", href: "/hostel-rosario-precio" },
          ]}
        />

        <header className="mb-10">
          <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
            Guía de precios
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl text-text-primary leading-tight mb-4">
            ¿Cuánto cuesta un hostel en Rosario? Precios 2026
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Precios reales y actualizados de alojamiento en Rosario. Comparativa por tipo de habitación, temporada y cómo encontrar el mejor precio.
          </p>
        </header>

        {/* Respuesta directa */}
        <AnimateInView>
          <div className="glass-card rounded-2xl p-6 border border-primary/30 mb-10">
            <h2 className="font-heading text-xl text-text-primary mb-3">Respuesta corta</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { tipo: "Dormitorio compartido", precio: "USD 8–12", desc: "por noche, con desayuno incluido" },
                { tipo: "Habitación privada hostel", precio: "USD 25–35", desc: "por noche, con desayuno incluido" },
                { tipo: "Temporada baja", precio: "hasta 30%", desc: "más barato (junio–agosto)" },
              ].map((item) => (
                <div key={item.tipo} className="text-center">
                  <p className="font-heading text-2xl text-accent">{item.precio}</p>
                  <p className="text-text-primary text-sm font-semibold mt-1">{item.tipo}</p>
                  <p className="text-text-dim text-xs mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateInView>

        {/* Price table */}
        <AnimateInView delay={40} className="overflow-x-auto mb-10">
          <h2 className="font-heading text-2xl text-text-primary mb-4">Precios en Cool Raúl Rock&apos;n Hostel</h2>
          <table className="w-full text-sm border-collapse" aria-label="Tabla de precios del hostel en Rosario 2026">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-3 text-text-dim font-semibold text-xs uppercase tracking-wider">Habitación</th>
                <th className="text-left py-3 pr-3 text-text-dim font-semibold text-xs uppercase tracking-wider">Temporada alta</th>
                <th className="text-left py-3 pr-3 text-text-dim font-semibold text-xs uppercase tracking-wider">Temporada baja</th>
                <th className="text-left py-3 text-text-dim font-semibold text-xs uppercase tracking-wider">Incluye</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {PRICE_TABLE.map((row) => (
                <tr key={row.tipo}>
                  <td className="py-3 pr-3 text-text-primary font-medium">{row.tipo}</td>
                  <td className="py-3 pr-3 text-text-muted">{row.temporadaAlta}</td>
                  <td className="py-3 pr-3 text-accent font-semibold">{row.temporadaBaja}</td>
                  <td className="py-3 text-text-dim text-xs">{row.incluye}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-text-dim text-xs mt-2">Precios en USD, orientativos. Consultá disponibilidad por WhatsApp para tarifas exactas.</p>
        </AnimateInView>

        {/* Content */}
        <article className="prose prose-invert prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-muted prose-p:leading-relaxed prose-strong:text-text-primary prose-li:text-text-muted max-w-none mb-10">
          <h2>¿Qué factores afectan el precio de un hostel en Rosario?</h2>

          <p>
            El precio de un hostel en Rosario varía según varios factores: la temporada, el tipo de habitación, la plataforma de reserva y si el hostel incluye servicios como desayuno o traslado.
          </p>

          <p>
            <strong>Temporada:</strong> el verano (diciembre–febrero) es la temporada más cara. El invierno (junio–agosto) tiene los precios más bajos del año, hasta un 30% menos que en temporada alta. La primavera y el otoño son precios intermedios.
          </p>

          <p>
            <strong>Plataformas vs. reserva directa:</strong> Booking.com y Hostelworld agregan comisiones de 15–20% al precio final. Reservando directo por WhatsApp con el hostel, te ahorrrás esa diferencia. El precio de la plataforma es siempre el más caro.
          </p>

          <p>
            <strong>Lo que incluye la tarifa:</strong> no todos los hostels incluyen lo mismo. En Cool Raúl, todas las reservas incluyen desayuno continental, WiFi de alta velocidad, locker individual y traslado desde la terminal de ómnibus. Eso hace que el precio real sea más conveniente de lo que parece.
          </p>

          <h2>¿Cómo reservar al mejor precio?</h2>

          <p>
            La forma más directa de conseguir el mejor precio es escribir por WhatsApp. En Cool Raúl respondemos al instante, te confirmamos disponibilidad y te damos la tarifa exacta para tus fechas, sin sorpresas.
          </p>

          <p>
            Para estadías largas (7 noches o más), siempre hay tarifa especial disponible. Tampoco necesitás tarjeta de crédito ni pago anticipado en muchos casos.
          </p>
        </article>

        {/* FAQ */}
        <AnimateInView delay={60} className="mb-10">
          <h2 className="font-heading text-2xl text-text-primary mb-6">Preguntas frecuentes sobre precios</h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Los precios incluyen desayuno?",
                a: "Sí, en Cool Raúl el desayuno continental está incluido en todas las estadías, tanto en dormitorios como en habitaciones privadas.",
              },
              {
                q: "¿Hay descuento para grupos?",
                a: "Para grupos de 4 personas o más consultá directamente por WhatsApp. Podemos coordinar disponibilidad de habitaciones contiguas y tarifas grupales.",
              },
              {
                q: "¿El precio cambia si reservo con más anticipación?",
                a: "En general no aplicamos precios early bird, pero la disponibilidad para fechas populares es limitada. Reservar con anticipación te asegura el tipo de habitación que querés.",
              },
            ].map((item) => (
              <div key={item.q} className="glass-card rounded-2xl p-5">
                <h3 className="text-text-primary font-semibold text-sm mb-2">{item.q}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </AnimateInView>

        {/* CTA */}
        <AnimateInView delay={80} className="glass-card rounded-3xl p-8 text-center glow-purple mb-10">
          <h2 className="font-heading text-2xl text-text-primary mb-3">Consultá disponibilidad y precio exacto</h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto text-sm">
            Escribinos por WhatsApp con tus fechas y respondemos al instante con disponibilidad y la tarifa más conveniente.
          </p>
          <a
            href={whatsappUrl("Hola! Quiero consultar disponibilidad y precios para el hostel en Rosario.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar precios del hostel en Rosario por WhatsApp"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Consultar precio por WhatsApp
          </a>
        </AnimateInView>

        {/* Internal links */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/alojamiento-rosario", label: "Alojamiento en Rosario", desc: "Guía completa de opciones" },
            { href: "/rosario/cuando-visitar", label: "Cuándo visitar", desc: "Precios por temporada del año" },
            { href: "/", label: "Ver el hostel", desc: "Habitaciones, servicios y reservas" },
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
