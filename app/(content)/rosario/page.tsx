import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { hwUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/data/contact";

const OG_IMAGE = hwUrl("5014", 1200);

export const metadata: Metadata = {
  title: "Guía de Rosario 2026 | Qué hacer, dónde comer y cómo llegar",
  description:
    "Todo lo que necesitás saber para visitar Rosario, Argentina. Guía actualizada con tips de locales: costanera, gastronomía, vida nocturna, excursiones a las islas y más.",
  keywords: [
    "guía de rosario",
    "rosario argentina turismo",
    "qué visitar en rosario",
    "rosario que hacer",
    "turismo rosario",
    "que ver en rosario argentina",
  ],
  alternates: { canonical: "https://coolraulhostel.com/rosario" },
  openGraph: {
    title: "Guía de Rosario 2026 | Qué hacer, dónde comer y cómo llegar",
    description:
      "Todo lo que necesitás saber para visitar Rosario. Tips de locales, mapas y lo mejor de la tercera ciudad de Argentina.",
    url: "https://coolraulhostel.com/rosario",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Monumento a la Bandera al atardecer — Rosario, Argentina" }],
  },
};

const destinationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Rosario, Argentina",
  description:
    "Tercera ciudad de Argentina, sobre el río Paraná. Cuna de Messi y el Che Guevara. Ciudad universitaria, cultural y gastronómica.",
  url: "https://coolraulhostel.com/rosario",
  geo: { "@type": "GeoCoordinates", latitude: -32.9468, longitude: -60.6393 },
  touristType: ["Backpacker", "Cultural tourist", "Budget traveler"],
  includesAttraction: [
    { "@type": "TouristAttraction", name: "Monumento Nacional a la Bandera" },
    { "@type": "TouristAttraction", name: "Costanera del Paraná" },
    { "@type": "TouristAttraction", name: "Barrio Pichincha" },
    { "@type": "TouristAttraction", name: "Parque Independencia" },
    { "@type": "TouristAttraction", name: "Islas del Paraná" },
  ],
};

export default function RosarioGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationJsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-64 sm:h-80 overflow-hidden" aria-hidden="true">
        <Image
          src={hwUrl("5014", 1280)}
          alt="Monumento a la Bandera al atardecer — Rosario, Argentina"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-3">
              Guía de viaje
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl text-text-primary leading-tight">
              Rosario, Argentina
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: "Guía de Rosario", href: "/rosario" }]} />

        <article className="prose prose-invert prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-primary-light prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-muted max-w-none">

          <p className="text-lg text-text-muted leading-relaxed">
            Rosario es una ciudad que te sorprende. Tercera ciudad más grande de Argentina, capital de la provincia de Santa Fe, con más de un millón de habitantes. Está sobre las costas del río Paraná, a 300 km de Buenos Aires por autopista.
          </p>

          <p className="text-text-muted leading-relaxed">
            No tiene las luces de Buenos Aires ni el turismo masivo de Mendoza, y eso la hace especial. Es una ciudad de universitarios, músicos, artistas y gente que eligió quedarse a vivir acá. De acá son Lionel Messi, el Che Guevara y Fito Páez, y es la cuna del rock nacional argentino: Los Redondos, La Bersuit Vergarabat y decenas de bandas que moldearon la música del país.
          </p>

          <h2>Lo que no te podés perder</h2>

          <h3>Monumento Nacional a la Bandera</h3>
          <p>
            El símbolo de la ciudad. Está sobre la barranca del Paraná, exactamente donde Manuel Belgrano izó por primera vez la bandera argentina en 1812. El complejo es enorme: el propyleo exterior, la cripta con la llama eterna y la torre de 70 metros desde donde se ve la ciudad entera. La entrada al monumento es gratuita; la torre tiene un costo mínimo que vale cada centavo.
          </p>

          <h3>La Costanera del Paraná</h3>
          <p>
            El paseo más largo de Rosario. Desde el Monumento hasta la Ciudad Universitaria son varios kilómetros de costanera con ciclovías, plazas, bares y restaurantes sobre el río. Vale la pena caminarla al atardecer, cuando el sol baja sobre el Paraná y el cielo se pone naranja. Si tenés energía, alquilá una bicicleta del sistema Mi Bici Tu Bici y recorrela entera.
          </p>

          <h3>Barrio Pichincha</h3>
          <p>
            El barrio histórico del antiguo distrito del cabaret tiene una segunda vida como corazón cultural de la ciudad. Murales en cada pared, bares y restaurantes en las casas bajas, lugares de milonga y tango. De día es bohemio y caminable; de noche es donde todo pasa en Rosario. Si querés entender la ciudad, pasá una tarde recorriendo sus calles.
          </p>

          <h3>Parque Independencia</h3>
          <p>
            El pulmón verde de Rosario. Tiene lago, jardines de acceso libre, el estadio Marcelo Bielsa (del Newells Old Boys), un hipódromo y los museos de Bellas Artes y Ciencias Naturales. Ideal para una tarde tranquila con mate. Los fines de semana la gente lleva sus familias, improvisa partidos de fútbol y en primavera el lugar es increíble.
          </p>

          <h3>Las islas del Paraná</h3>
          <p>
            Desde la costa podés tomar una lancha colectiva y en 15 minutos estás en el delta del Paraná. Las islas tienen playas naturales, arroyos y vegetación típica del litoral. En verano es el plan de los rosarinos para el fin de semana; en primavera y otoño está más tranquilo pero igual vale la pena. Es una experiencia completamente diferente a la ciudad: silencio, naturaleza, agua marrón del río.
          </p>

          <div className="not-prose relative rounded-2xl overflow-hidden h-48 sm:h-64 my-8">
            <Image
              src={hwUrl("506", 800)}
              alt="Costanera del río Paraná — Rosario, Argentina"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <p className="absolute bottom-3 left-4 text-white/70 text-xs">Costanera del Paraná, Rosario</p>
          </div>

          <h2>Gastronomía rosarina</h2>

          <p>
            La <strong>pizza "a la piedra"</strong> es la gran especialidad local. No es como la pizza porteña ni la napolitana: tiene una masa más crujiente, ingredientes frescos y se come en las pizzerías de barrio que tienen décadas de historia. Buscá las que tienen horno a leña en el centro o en el Mercado del Patio.
          </p>

          <p>
            Los <strong>helados</strong> son otra cosa seria. Rosario tiene una fuerte tradición heladera italiana — muchos inmigrantes del norte de Italia se instalaron acá a principios del siglo XX. Las heladerías del centro y Pichincha tienen recetas que se pasan de generación en generación.
          </p>

          <p>
            La <strong>parrilla clásica</strong> se come en los bodegones del Mercado del Patio o en los restaurantes de la costanera. Los precios son más accesibles que en Buenos Aires y la calidad es excelente. El asado de tira y el vacío son los cortes que no podés perderte.
          </p>

          <h2>Cómo moverse en Rosario</h2>

          <p>
            <strong>Colectivos</strong>: la red es amplia y cubre toda la ciudad. Necesitás tarjeta SUBE, la misma que usás en Buenos Aires. Los recorridos están en Google Maps o en la app Cómo Llego.
          </p>

          <p>
            <strong>Mi Bici Tu Bici</strong>: sistema de bicicletas públicas con estaciones por toda la ciudad. Requerís registrarte online, el primer viaje corto es gratuito y los siguientes tienen un costo mínimo. La costanera y el microcentro son perfectos para recorrer en bici.
          </p>

          <p>
            <strong>Remises</strong>: más convenientes y económicos que los taxis tradicionales. Hay aplicaciones locales y números de radio que funcionan bien. Siempre preguntá el precio antes de subir.
          </p>

          <p>
            <strong>A pie</strong>: el microcentro de Rosario es muy caminable. Del Monumento a la Bandera a la Terminal de Ómnibus hay unos 2 km en línea recta. La mayoría de los puntos de interés del centro están a distancia razonable entre sí.
          </p>

          <h2>La mejor época para visitar</h2>

          <p>
            <strong>Primavera (septiembre-noviembre)</strong>: la mejor época. Temperaturas de 15 a 25°C, jacarandás en flor en las calles, días largos. Ideal para la costanera, las islas y los bares al aire libre.
          </p>

          <p>
            <strong>Otoño (marzo-mayo)</strong>: también muy bueno. El calor del verano baja, los colores del otoño en los parques son hermosos y hay menos turismo que en primavera.
          </p>

          <p>
            <strong>Verano (diciembre-febrero)</strong>: puede ser muy caluroso (30-40°C). Hay piletas en las islas y la vida nocturna es intensa, pero en enero muchos rosarinos se van de vacaciones y la ciudad se pone un poco quieta.
          </p>

          <p>
            <strong>Invierno (junio-agosto)</strong>: fresco pero no helado, entre 8 y 15°C generalmente. Menos turismo, precios más bajos, ideal para gastronomía, museos y cultura sin multitudes.
          </p>

        </article>

        {/* Internal links */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: "/rosario/que-hacer", label: "Qué hacer en Rosario", desc: "15 planes para todos los gustos" },
            { href: "/rosario/como-llegar", label: "Cómo llegar a Rosario", desc: "Bus, avión, auto y más" },
            { href: "/rosario/gastronomia", label: "Dónde comer en Rosario", desc: "Pizza, helado, parrilla y más" },
            { href: "/rosario/vida-nocturna", label: "Vida nocturna", desc: "Pichincha, bares y música en vivo" },
            { href: "/blog/rosario-para-mochileros", label: "Rosario para mochileros", desc: "Guía de presupuesto" },
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

        {/* CTA */}
        <div className="mt-12 glass-card rounded-3xl p-8 text-center glow-purple">
          <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-3">
            ¿Buscás dónde quedarte en Rosario?
          </h2>
          <p className="text-text-muted mb-6 max-w-lg mx-auto">
            Cool Raúl Rock&apos;n Hostel está en San Lorenzo 1670, en el corazón del microcentro. A 2 km de la terminal (traslado incluido), a pocas cuadras de la Costanera. Operamos desde 2006 y tenemos 9.1/10 en Hostelworld.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={whatsappUrl("Hola! Vi la guía de Rosario y quiero saber sobre el hostel.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Consultar por WhatsApp
            </a>
            <Link
              href="/#habitaciones"
              className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary/50 text-text-primary font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Ver habitaciones
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
