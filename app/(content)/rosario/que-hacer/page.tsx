import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappUrl } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Qué hacer en Rosario | 15 planes imperdibles para viajeros",
  description:
    "Los 15 planes que no podés perderte en Rosario, Argentina. Actividades gratis y pagas, para todos los gustos: cultura, naturaleza, gastronomía y vida nocturna.",
  keywords: [
    "qué hacer en rosario",
    "planes rosario",
    "actividades rosario",
    "rosario turismo",
    "cosas que hacer rosario argentina",
    "visitar rosario",
  ],
  alternates: { canonical: "https://coolraulhostel.com/rosario/que-hacer" },
  openGraph: {
    title: "Qué hacer en Rosario | 15 planes imperdibles",
    description:
      "Los mejores planes para viajeros en Rosario: cultura, naturaleza, gastronomía y noche. Incluye distancias desde el hostel y estimación de precios.",
    url: "https://coolraulhostel.com/rosario/que-hacer",
  },
};

const ACTIVITIES = [
  {
    num: 1,
    title: "Visitá el Monumento Nacional a la Bandera",
    desc: "El símbolo de Rosario y uno de los monumentos más importantes del país. Está sobre el Paraná, exactamente donde Belgrano izó la bandera argentina por primera vez. Subí a la torre para ver la ciudad entera desde arriba. Vale cada paso.",
    cost: "Gratis (torre: $)",
    distance: "15 min a pie desde el hostel",
    type: "Cultura",
  },
  {
    num: 2,
    title: "Caminá la Costanera del Paraná",
    desc: "Kilómetros de paseo ribereño con ciclovías, plazas, bares y vistas al río. Hacelo al atardecer cuando el sol baja sobre el Paraná. Si podés, alquilá una Mi Bici y recorrela entera.",
    cost: "Gratis",
    distance: "10 min a pie desde el hostel",
    type: "Naturaleza",
  },
  {
    num: 3,
    title: "Andá a las islas del Paraná en lancha",
    desc: "Tomás una lancha colectiva desde la costanera y en 15 minutos estás en el delta. Playas naturales, arroyos y silencio total. Un plan completamente diferente a la ciudad. Más lindo en primavera y otoño.",
    cost: "$$",
    distance: "15 min a pie + 15 min lancha",
    type: "Naturaleza",
  },
  {
    num: 4,
    title: "Recorré el Parque Independencia",
    desc: "El pulmón verde de la ciudad. Lago, jardines, el estadio del Newells, el hipódromo y dos museos. Los domingos se llena de familias rosarinas y la onda es muy buena. Llevá mate.",
    cost: "Gratis",
    distance: "20 min en colectivo",
    type: "Naturaleza",
  },
  {
    num: 5,
    title: "Explorá el Barrio Pichincha de día",
    desc: "El barrio más bohemio de Rosario. Murales en cada esquina, casas bajas con historia, bares y restaurantes que recién abren a la tarde. Caminalo sin apuro, el barrio tiene mucho para ver. De noche es otro mundo.",
    cost: "Gratis",
    distance: "30 min a pie o 10 min en colectivo",
    type: "Cultura",
  },
  {
    num: 6,
    title: "Visitá el MACRO (Museo de Arte Contemporáneo)",
    desc: "Sobre el río Paraná, en un antiguo edificio portuario. Colecciones de arte contemporáneo argentino y latinoamericano. La ubicación sobre el río ya vale la visita. Entrada accesible.",
    cost: "$",
    distance: "15 min a pie desde el hostel",
    type: "Cultura",
  },
  {
    num: 7,
    title: "Hacé la Ruta Messi",
    desc: "Lionel Messi nació y creció en Rosario. Podés visitar el barrio Las Heras donde vivía, la cancha donde jugó de chico y el estadio del Newells. No hay museo oficial todavía, pero los vecinos conocen todos los rincones.",
    cost: "Gratis",
    distance: "30 min en colectivo",
    type: "Cultura",
  },
  {
    num: 8,
    title: "Come en el Mercado del Patio",
    desc: "Un mercado gastronómico en el centro con puestos de comida, bares de vinos, quesería y panadería artesanal. Ideal para el almuerzo o una merienda. Los fines de semana hay música en vivo.",
    cost: "$-$$",
    distance: "10 min a pie desde el hostel",
    type: "Gastronomía",
  },
  {
    num: 9,
    title: "Alquilá una Mi Bici Tu Bici",
    desc: "El sistema de bicicletas públicas de Rosario tiene estaciones por toda la ciudad. Es la mejor forma de recorrer la costanera y el microcentro. Registrate online, el primer uso es casi gratis.",
    cost: "$ (pase diario muy económico)",
    distance: "Estación a 2 min del hostel",
    type: "Transporte",
  },
  {
    num: 10,
    title: "Tomá mate en el Parque España",
    desc: "Un parque sobre el río, en la costanera sur, con vistas increíbles al Paraná. Tiene un anfiteatro donde a veces hay shows. Tranquilo, verde y sin el turismo del Monumento. El lugar que eligen los rosarinos para leer o descansar.",
    cost: "Gratis",
    distance: "20 min a pie desde el hostel",
    type: "Naturaleza",
  },
  {
    num: 11,
    title: "Visitá el Planetario Municipal",
    desc: "Una de las pocas cosas en Rosario que sí requiere reserva anticipada. Las proyecciones de astronomía son muy buenas y el edificio en sí es interesante. Ideal para llevar pibes o para quienes les gusta el espacio.",
    cost: "$$",
    distance: "20 min en colectivo",
    type: "Cultura",
  },
  {
    num: 12,
    title: "Asistí a un show en el Teatro El Círculo",
    desc: "Uno de los teatros más hermosos del país. Ópera, ballet, orquesta sinfónica y shows de música en vivo. Mirate la programación antes de llegar. Las funciones populares se agotan rápido.",
    cost: "$$-$$$",
    distance: "15 min a pie desde el hostel",
    type: "Cultura",
  },
  {
    num: 13,
    title: "Recorré el Pasaje Juramento",
    desc: "Un pasaje histórico del centro con puestos de antigüedades, libros usados y artesanías. Los sábados se llena de gente. Es el lugar donde encontrás esas cosas raras que no sabías que necesitabas.",
    cost: "Gratis (lo que comprés: $)",
    distance: "10 min a pie desde el hostel",
    type: "Cultura",
  },
  {
    num: 14,
    title: "Probá la pizza a la piedra rosarina",
    desc: "No te vayas de Rosario sin comer pizza a la piedra. No es como la porteña ni la napolitana: masa crocante, ingredientes frescos, horno a leña. Buscá las pizzerías clásicas del centro con historia.",
    cost: "$$",
    distance: "En el centro, múltiples opciones",
    type: "Gastronomía",
  },
  {
    num: 15,
    title: "Salí de noche por Pichincha",
    desc: "La noche rosarina empieza tarde. Pichincha se llena de gente a partir de las 22hs: bares de todos los estilos, milongas, lugares de cumbia, rock y electrónica. Si te quedás en Cool Raúl, preguntá en recepción qué está pasando esa noche.",
    cost: "$$",
    distance: "30 min a pie o 10 min en colectivo",
    type: "Nocturno",
  },
];

const TYPE_COLORS: Record<string, string> = {
  Cultura: "bg-primary/20 text-primary-light",
  Naturaleza: "bg-emerald-500/20 text-emerald-400",
  Gastronomía: "bg-amber-500/20 text-amber-400",
  Nocturno: "bg-purple-500/20 text-purple-300",
  Transporte: "bg-blue-500/20 text-blue-300",
};

export default function QueHacerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs
        items={[
          { name: "Guía de Rosario", href: "/rosario" },
          { name: "Qué hacer", href: "/rosario/que-hacer" },
        ]}
      />

      <header className="mb-12">
        <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
          Guía de actividades
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
          15 cosas que hacer en Rosario
        </h1>
        <p className="text-text-muted text-lg max-w-2xl">
          Planes para todos los gustos y todos los presupuestos. Acá te dejamos lo que recomendamos después de años viviendo y recibiendo viajeros en la ciudad.
        </p>
      </header>

      <div className="space-y-5">
        {ACTIVITIES.map((act) => (
          <article
            key={act.num}
            className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-4">
              <span
                className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center font-heading text-primary-light text-sm font-bold"
                aria-hidden="true"
              >
                {act.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h2 className="font-semibold text-text-primary text-base">{act.title}</h2>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TYPE_COLORS[act.type] ?? "bg-surface text-text-dim"}`}>
                    {act.type}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-3">{act.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-text-dim">
                  <span className="flex items-center gap-1">
                    <span aria-hidden="true">💲</span>
                    {act.cost}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" aria-hidden="true" />
                    {act.distance}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Internal links */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { href: "/rosario/como-llegar", label: "Cómo llegar a Rosario", desc: "Bus, avión, auto y más" },
          { href: "/rosario/gastronomia", label: "Dónde comer en Rosario", desc: "Pizza, helado y parrilla" },
          { href: "/rosario/vida-nocturna", label: "Vida nocturna", desc: "Pichincha, bares y música" },
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
      <div className="mt-10 glass-card rounded-3xl p-8 text-center">
        <h2 className="font-heading text-2xl text-text-primary mb-3">
          ¿Querés explorar todo esto desde el mejor hostel de Rosario?
        </h2>
        <p className="text-text-muted mb-5">
          En Cool Raúl te damos todos los tips, traslado desde la terminal incluido y el desayuno para arrancar el día.
        </p>
        <a
          href={whatsappUrl("Hola! Vi la guía de qué hacer en Rosario y quiero reservar en Cool Raúl.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          Reservar en Cool Raúl
        </a>
      </div>
    </div>
  );
}
