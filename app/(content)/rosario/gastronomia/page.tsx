import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappUrl } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Dónde comer en Rosario | Guía gastronómica para viajeros",
  description:
    "Pizza a la piedra, helado artesanal, parrilla y cocina de autor. Todo lo que tenés que probar en Rosario, con recomendaciones de locales y rangos de precios.",
  keywords: [
    "dónde comer en rosario",
    "gastronomía rosario",
    "restaurantes rosario",
    "pizza rosario",
    "comida rosario barata",
    "helado rosario",
    "parrilla rosario",
  ],
  alternates: { canonical: "https://coolraulhostel.com/rosario/gastronomia" },
  openGraph: {
    title: "Dónde comer en Rosario | Guía gastronómica para viajeros",
    description:
      "Pizza a la piedra, helado artesanal, parrilla y cocina de autor. Todo lo que no podés perderte en Rosario.",
    url: "https://coolraulhostel.com/rosario/gastronomia",
  },
};

export default function GastronomiaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs
        items={[
          { name: "Guía de Rosario", href: "/rosario" },
          { name: "Gastronomía", href: "/rosario/gastronomia" },
        ]}
      />

      <header className="mb-10">
        <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
          Guía gastronómica
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
          Dónde comer en Rosario
        </h1>
        <p className="text-text-muted text-lg leading-relaxed">
          Rosario tiene una identidad gastronómica muy propia. Acá no vas a encontrar el típico menú turístico: la comida rosarina es honesta, abundante y con mucha historia detrás.
        </p>
      </header>

      <article className="prose prose-invert prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-primary-light prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-muted max-w-none">

        <h2>La pizza a la piedra: la especialidad de la casa</h2>
        <p>
          Si hay una cosa que Rosario puede reivindicar como propia en el mundo de la gastronomía argentina, es la pizza a la piedra. No es la pizza porteña (más alta, con mucho queso derretido), ni la italiana (más delgada y minimalista). La rosarina tiene una masa intermedia, crocante por debajo gracias al horno a piedra, con borde bien formado y ingredientes frescos sin excesos.
        </p>
        <p>
          Las pizzerías clásicas del centro, muchas con décadas de historia, son el lugar indicado. Buscá las que tienen horno a leña visible desde el salón y clientes que son claramente del barrio. En el Mercado del Patio también hay puestos de pizza artesanal con muy buena calidad. Una pizza entera suele alcanzar para dos personas y los precios son muy razonables.
        </p>

        <h2>Helado artesanal: tradición italiana en el Paraná</h2>
        <p>
          Rosario tiene una de las mejores tradiciones heladeras del país. A fines del siglo XIX y principios del XX, miles de inmigrantes del norte de Italia —especialmente del Véneto y Friuli— se instalaron en la ciudad y trajeron sus recetas. Sus descendientes todavía manejan muchas de las heladerías más antiguas.
        </p>
        <p>
          Lo que distingue al helado rosarino es la textura cremosa pero no pesada, y los sabores clásicos bien ejecutados: crema, dulce de leche, limón, sambayón. Nada de sabores extravagantes por el momento. Las heladerías del centro y del Barrio Pichincha son las que hay que conocer. Los fines de semana hacen cola y vale cada minuto.
        </p>

        <h2>Parrilla y asado: lo de siempre, hecho bien</h2>
        <p>
          La parrilla argentina en Rosario tiene un nivel consistentemente alto. No hace falta ir a un restaurante caro para comer bien: los bodegones del Mercado del Patio y los bares de la costanera tienen cortes de primera a precios accesibles.
        </p>
        <p>
          Los cortes que recomendamos probar son el asado de tira (las costillas), el vacío (corte lateral muy jugoso) y la entraña. Para acompañar: chimichurri casero, ensalada mixta y pan. Si vas al Mercado del Patio, llegá temprano los fines de semana porque los puestos con parrilla se llenan rápido.
        </p>

        <h2>Cocina de autor y bares gastronómicos: el polo de Pichincha</h2>
        <p>
          El Barrio Pichincha fue, durante décadas, solo conocido por su vida nocturna. Pero en los últimos años se convirtió también en un polo gastronómico muy interesante. Las casas bajas del barrio albergan restaurantes de cocina de autor, bares que hacen cócteles artesanales y espacios que combinan cocina con música en vivo.
        </p>
        <p>
          La propuesta es diversa: podés comer desde un taco mexicano hasta pasta fresca hecha en el día, pasando por bodegones que actualizaron recetas clásicas con ingredientes locales. Los precios en Pichincha son más altos que en el centro pero siguen siendo accesibles para estándares de Buenos Aires.
        </p>

        <h2>Dónde comer barato</h2>
        <p>
          Si estás con presupuesto ajustado, Rosario tiene buenas opciones:
        </p>
        <ul>
          <li>
            <strong>Rotiserías de barrio</strong>: el almuerzo más económico de la ciudad. Menú del día con entrada, plato principal y postre por un precio fijo. Buscalas en las calles del microcentro.
          </li>
          <li>
            <strong>Empanadas</strong>: las mejores son las de carne cortada a cuchillo con huevo duro y papa. Una docena cuesta lo equivalente a USD 2-3 y alcanza para almorzar bien.
          </li>
          <li>
            <strong>Panaderías y confiterías</strong>: las medialunas de manteca con café con leche son el desayuno del rosarino promedio. Por menos de USD 2 arrancás el día en cualquier panadería del centro.
          </li>
          <li>
            <strong>Mercado del Patio</strong>: los puestos de comida tienen precios variables, pero siempre hay opciones accesibles para el almuerzo. La ventaja es la variedad: pizza, hamburguesa artesanal, sushi, parrilla, todo en el mismo lugar.
          </li>
        </ul>

        <h2>El Mercado del Patio: un destino en sí mismo</h2>
        <p>
          El Mercado del Patio es probablemente el lugar más completo para comer en Rosario. Está en el centro, en una casona antigua renovada con estilo industrial. Tiene puestos de comida de todo tipo, bares de vinos y cervezas artesanales, quesería, panadería y un espacio central donde a veces hay música en vivo los fines de semana.
        </p>
        <p>
          Lo recomendamos para el almuerzo de un sábado o domingo: llegás, recorrés los puestos, elegís lo que se te antoja y te sentás en las mesas comunes. Es una buena forma de entender la escena gastronómica de la ciudad en una sola parada.
        </p>

        <h2>Desayuno y merienda</h2>
        <p>
          El desayuno rosarino es simple y bueno. Las confiterías del centro sirven medialunas (de grasa o manteca), facturas, tostadas con manteca y mermelada, café, té o cortado. No esperes el desayuno americano con huevos y panceta: acá el desayuno es dulce y liviano.
        </p>
        <p>
          Para la merienda (entre las 16 y las 18hs), los cafés del centro y de Pichincha son ideales. Un café con leche y una porción de torta son el plan clásico. Las confiterías más antiguas del microcentro tienen tortas y pasteles caseros que vale la pena probar.
        </p>

      </article>

      {/* Hostel CTA */}
      <div className="mt-10 glass-card rounded-2xl p-6 border border-primary/30">
        <p className="text-text-muted text-sm leading-relaxed">
          <span className="text-text-primary font-semibold">En Cool Raúl el desayuno está incluido</span> todas las mañanas. También tenés cocina compartida para cocinarte vos mismo y ahorrar en las comidas. Si querés recomendaciones específicas según el barrio donde estés o tu presupuesto, preguntale al staff.
        </p>
      </div>

      {/* Internal links */}
      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        {[
          { href: "/rosario", label: "Guía de Rosario", desc: "Panorama completo de la ciudad" },
          { href: "/rosario/que-hacer", label: "Qué hacer en Rosario", desc: "15 planes imperdibles" },
          { href: "/blog/rosario-para-mochileros", label: "Rosario para mochileros", desc: "Guía de presupuesto" },
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
      <div className="mt-8 glass-card rounded-3xl p-8 text-center">
        <h2 className="font-heading text-2xl text-text-primary mb-3">
          ¿Reservaste tu alojamiento en Rosario?
        </h2>
        <p className="text-text-muted mb-5 max-w-md mx-auto">
          Cool Raúl está en el centro, a pasos del Mercado del Patio y de las mejores pizzerías de la ciudad.
        </p>
        <a
          href={whatsappUrl("Hola! Vi la guía de gastronomía y quiero reservar en Cool Raúl.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}
