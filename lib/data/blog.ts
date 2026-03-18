import { hwUrl } from "@/lib/utils";

export interface BlogPost {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  datePublished: string;
  dateModified: string;
  readingTime: number;
  keywords: string[];
  ogImage: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "hostel-en-rosario-como-elegir",
    title: "Hostel en Rosario: cómo elegir el mejor para tu viaje",
    shortTitle: "Cómo elegir hostel en Rosario",
    description:
      "Guía práctica para elegir el hostel correcto en Rosario: ubicación, tipo de habitación, servicios que importan y qué evitar. Tips de quienes vivimos la ciudad.",
    datePublished: "2026-01-15",
    dateModified: "2026-03-01",
    readingTime: 5,
    keywords: [
      "hostel en rosario",
      "mejor hostel rosario",
      "hostel rosario centro",
      "hostel barato rosario",
      "dónde dormir rosario",
    ],
    ogImage: hwUrl("502", 1200),
  },
  {
    slug: "rosario-para-mochileros",
    title: "Rosario para mochileros: guía de presupuesto actualizada",
    shortTitle: "Rosario para mochileros",
    description:
      "Cuánto cuesta viajar a Rosario con presupuesto bajo: hospedaje, comida, transporte y actividades gratuitas. Todo lo que necesitás saber antes de llegar.",
    datePublished: "2026-02-01",
    dateModified: "2026-03-01",
    readingTime: 6,
    keywords: [
      "rosario mochileros",
      "rosario barato",
      "presupuesto rosario argentina",
      "viajar barato rosario",
      "rosario cuanto cuesta",
    ],
    ogImage: hwUrl("5014", 1200),
  },
  {
    slug: "que-hacer-rosario-de-noche",
    title: "Qué hacer en Rosario de noche: los mejores planes",
    shortTitle: "Rosario de noche",
    description:
      "La guía honesta de la vida nocturna rosarina: Barrio Pichincha, bares del centro, música en vivo, karaoke y todo lo que necesitás saber para no perderte nada.",
    datePublished: "2026-02-15",
    dateModified: "2026-03-01",
    readingTime: 5,
    keywords: [
      "rosario de noche",
      "vida nocturna rosario",
      "bares rosario",
      "barrio pichincha rosario",
      "que hacer rosario noche",
    ],
    ogImage: hwUrl("5016", 1200),
  },
  {
    slug: "rosario-en-invierno",
    title: "Rosario en invierno: por qué es la mejor época para visitar",
    shortTitle: "Rosario en invierno",
    description:
      "Guía completa para visitar Rosario en temporada baja. Clima, precios, qué hacer en junio, julio y agosto. Por qué el invierno es la estación secreta de Rosario.",
    datePublished: "2026-03-10",
    dateModified: "2026-03-10",
    readingTime: 6,
    keywords: [
      "rosario en invierno",
      "rosario temporada baja",
      "rosario julio agosto",
      "que hacer rosario invierno",
      "rosario cuando ir",
      "clima rosario invierno",
    ],
    ogImage: hwUrl("5016", 1200),
  },
  {
    slug: "rosario-nomades-digitales",
    title: "Rosario para nómades digitales: guía completa 2026",
    shortTitle: "Rosario para nómades digitales",
    description:
      "Todo lo que necesitás saber para trabajar en remoto desde Rosario: costo de vida, conectividad, barrios, alojamiento y comunidad. La guía honesta.",
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    readingTime: 7,
    keywords: [
      "nomade digital rosario",
      "trabajo remoto rosario",
      "vivir en rosario argentina",
      "coworking rosario",
      "costo de vida rosario 2026",
      "hostel coworking rosario",
    ],
    ogImage: hwUrl("504", 1200),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
