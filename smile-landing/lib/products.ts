const CDN = "https://acdn-us.mitiendanube.com/stores/003/759/046/products";
const STORE = "https://www.smiletiendaimp.com.ar/productos";

export type Variant = {
  label: string;
  inStock: boolean;
  price?: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  brand: "ray-ban" | "invicta" | "tommy";
  collection: string;
  subcollection?: string;
  price: number;
  images: string[];
  storeUrl: string;
  variants?: Variant[];
  description?: string;
  featured?: boolean;
  badge?: string;
};

// ─── RAY-BAN ─────────────────────────────────────────────────────────────────

export const raybanProducts: Product[] = [
  {
    id: "rb-aviador-classic",
    slug: "aviador-classic-3025",
    name: "Aviador Classic",
    subtitle: "3025",
    brand: "ray-ban",
    collection: "Aviador",
    price: 182700,
    images: [
      `${CDN}/aviador-classic-doradoverde-1-64204a86eac68f740b17121121526969-1024-1024.webp`,
      `${CDN}/aviador-classic-negroverde-1-60721f750523b34ce317156040149919-1024-1024.webp`,
      `${CDN}/aviador-classic-doradomarron-2-e8fd34829749543aa517156040163906-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/aviador-classic-dorado-verde1`,
    variants: [
      { label: "Dorado / Verde", inStock: true },
      { label: "Negro / Verde", inStock: true },
      { label: "Dorado / Marrón", inStock: true },
      { label: "Dorado / Marrón degradé", inStock: true, price: 215000 },
    ],
    description: "El ícono atemporal. La forma de gota de lágrima clásica que definió generaciones de estilo. Fabricado con materiales de alta calidad, el Aviador 3025 es una pieza que trasciende tendencias.",
    featured: true,
  },
  {
    id: "rb-wayfarer",
    slug: "wayfarer-2140",
    name: "Wayfarer",
    subtitle: "2140",
    brand: "ray-ban",
    collection: "Wayfarer",
    price: 175900,
    images: [
      `${CDN}/wayfarer-negroverde-1-2ce5f79bb2e258002817157492457980-1024-1024.webp`,
      `${CDN}/wayfarer-careyverde-75e9684e2a8fdd76b917157495924916-1024-1024.webp`,
      `${CDN}/wayfarer-carey-marron-degrade-1-f1d46f92c0f98dec3317157492463098-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/wayfarer-2140`,
    variants: [
      { label: "Negro / Verde", inStock: true },
      { label: "Carey / Verde", inStock: true, price: 215000 },
      { label: "Carey / Marrón degradé", inStock: false },
    ],
    description: "El modelo más icónico de la historia del eyewear. Introducido en 1952, el Wayfarer 2140 combina una silueta atemporal con la versatilidad para adaptarse a cualquier estilo.",
    featured: true,
  },
  {
    id: "rb-clubmaster",
    slug: "clubmaster-classic-3016",
    name: "Clubmaster Classic",
    subtitle: "3016",
    brand: "ray-ban",
    collection: "Clubmaster",
    price: 182700,
    images: [
      `${CDN}/clubmaster-classic-negro-doradoverde-1-8ee8cf5b015369ff3b17121488611694-1024-1024.webp`,
      `${CDN}/clubmaster-classic-carey-doradoverde-5537b919de6e04153517156092397133-1024-1024.webp`,
      `${CDN}/clubmaster-classic-carey-doradomarron-degrade-142351e7d14d244f4917156092412633-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/clubmaster-classic-3016`,
    variants: [
      { label: "Negro-Dorado / Verde", inStock: true },
      { label: "Carey-Dorado / Verde", inStock: true, price: 215000 },
      { label: "Carey-Dorado / Marrón degradé", inStock: true },
    ],
    description: "Inspirado en el diseño browline de los años 50, el Clubmaster fusiona el retro con lo contemporáneo. Una pieza que comunica sofisticación y carácter intelectual.",
    featured: true,
  },
  {
    id: "rb-round-metal",
    slug: "round-metal-classic-3447",
    name: "Round Metal Classic",
    subtitle: "3447",
    brand: "ray-ban",
    collection: "Round",
    price: 182700,
    images: [
      `${CDN}/round-metal-doradoverde-2076586d783f532bb717113631167425-1024-1024.webp`,
      `${CDN}/round-metal-negroverde-1-417ca7cfa8fea8292f17155672491179-1024-1024.webp`,
      `${CDN}/round-metal-doradomarron-degrade-1-cb4ed33035559fb52b17155672500165-1024-1024.webp`,
      `${CDN}/round-metal-doradoazul-degrade-a43acc24262a71173117155672487778-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/round-metal-classic-3447`,
    variants: [
      { label: "Dorado / Verde", inStock: true },
      { label: "Negro / Verde", inStock: true },
      { label: "Dorado / Marrón degradé", inStock: true },
      { label: "Dorado / Azul degradé", inStock: true, price: 215000 },
    ],
    description: "Formas geométricas perfectas con montura de metal delgada. El Round Metal 3447 es un símbolo de expresión artística y libre pensamiento.",
    featured: true,
  },
  {
    id: "rb-cats",
    slug: "cats-5000-rb4125",
    name: "Cats 5000",
    subtitle: "RB4125",
    brand: "ray-ban",
    collection: "Otros",
    price: 215000,
    images: [
      `${CDN}/cats-negrogris-degrade-bdadae022f09166b5f17156276190219-1024-1024.webp`,
      `${CDN}/cats-negroverde-303657501dfe40482a17156276191221-1024-1024.webp`,
      `${CDN}/cats-careymarron-degrade-a0c8eb386169a75a5117156276192632-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/cats-5000-rb4125`,
    variants: [
      { label: "Negro / Gris degradé", inStock: true },
      { label: "Negro / Verde", inStock: true },
      { label: "Carey / Marrón degradé", inStock: false },
    ],
    description: "Silueta cat-eye icónica. El Cats 5000 aporta una sensualidad visual innata con su forma alargada característica.",
    featured: false,
  },
  {
    id: "rb-erika",
    slug: "erika-4171",
    name: "Erika",
    subtitle: "4171",
    brand: "ray-ban",
    collection: "Otros",
    price: 179900,
    images: [
      `${CDN}/erika-negrogris-degrade-1-50993267a30527c76417125018526848-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/erika-4171`,
    variants: [
      { label: "Negro / Gris degradé", inStock: true },
    ],
    description: "El Erika combina una silueta redonda con material de acetato ligero. Diseño delicado con actitud fuerte.",
  },
  {
    id: "rb-erika-pol",
    slug: "erika-polarizado-4171",
    name: "Erika Polarizado",
    subtitle: "4171",
    brand: "ray-ban",
    collection: "Otros",
    price: 236700,
    images: [
      `${CDN}/erika-negrogris-degrade-polarizado-2-10db04f4c7802276a217125027158092-1024-1024.webp`,
      `${CDN}/erika-careymarron-degrade-polarizado-1-c74678d5c86199f3c817156099003970-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/erika-polarizado-4171`,
    variants: [
      { label: "Carey / Marrón degradé polarizado", inStock: true },
    ],
    badge: "Polarizado",
  },
  {
    id: "rb-hexagonal",
    slug: "hexagonal-classic-3548",
    name: "Hexagonal Classic",
    subtitle: "3548",
    brand: "ray-ban",
    collection: "Otros",
    price: 182700,
    images: [
      `${CDN}/hexagonal-dorado-verde-3548-001-1-74e2c9508ebf01532017610789127331-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/hexagonal-classic-3548`,
    variants: [
      { label: "Dorado / Verde", inStock: true },
    ],
    description: "Forma hexagonal única que aporta geometría y modernidad a cualquier look.",
  },
  {
    id: "rb-justin-pol",
    slug: "justin-4165-polarizados",
    name: "Justin Polarizado",
    subtitle: "4165",
    brand: "ray-ban",
    collection: "Otros",
    price: 236700,
    images: [
      `${CDN}/justin-negrogris-degrade-polarizado-1-9745a2757f07ea5d1117157417400492-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/justin-4165-polarizados`,
    variants: [
      { label: "Negro / Gris degradé", inStock: true },
    ],
    badge: "Polarizado",
  },
  {
    id: "rb-mega-clubmaster",
    slug: "mega-clubmaster-0316s",
    name: "Mega Clubmaster",
    subtitle: "0316S",
    brand: "ray-ban",
    collection: "Clubmaster",
    price: 182700,
    images: [
      `${CDN}/clubmaster-mega-negro-doradoverde-c75061612f9c89d31817125164502752-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/mega-clubmaster-0316s`,
    variants: [
      { label: "Negro-Dorado / Verde", inStock: true },
    ],
  },
  {
    id: "rb-clubmaster-blaze",
    slug: "clubmaster-blaze-3576",
    name: "Clubmaster Blaze",
    subtitle: "3576",
    brand: "ray-ban",
    collection: "Clubmaster",
    price: 182700,
    images: [
      `${CDN}/blaze-clubmaster-dorado-verde-43f074696d313a549a17612412935343-1024-1024.webp`,
      `${CDN}/clubmaster-blaze-broncerojo-degrade-espejado-160ec92d5be297a3a117155687300197-1024-1024.webp`,
      `${CDN}/clubmaster-blaze-doradorosa-espejado-2-c16bd6c351f2f9c67d17155687304995-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/clubmaster-blaze-3576`,
    variants: [
      { label: "Dorado / Verde", inStock: true },
      { label: "Bronce / Rojo degradé espejado", inStock: true },
      { label: "Dorado / Rosa espejado", inStock: true },
    ],
  },
  {
    id: "rb-round-fleck",
    slug: "round-fleck-2447",
    name: "Round Fleck",
    subtitle: "2447",
    brand: "ray-ban",
    collection: "Round",
    price: 182700,
    images: [
      `${CDN}/round-fleck-careymarron-liso-d538e55d2173f9134f17125429890284-1024-1024.webp`,
      `${CDN}/round-fleck-careyverde-1-7afcdef40f0cf24b9217157465902944-1024-1024.webp`,
      `${CDN}/round-fleck-negroverde-6395e6484423cc49cf17157465881914-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/round-fleck-2447`,
    variants: [
      { label: "Carey / Marrón", inStock: true },
      { label: "Carey / Verde", inStock: true },
      { label: "Negro / Verde", inStock: true },
    ],
  },
  {
    id: "rb-square",
    slug: "square-1971",
    name: "Square",
    subtitle: "1971",
    brand: "ray-ban",
    collection: "Otros",
    price: 182700,
    images: [
      `${CDN}/square-doradomarron-degrade-1-9b02ea075bd7ebba0117125847361511-1024-1024.webp`,
      `${CDN}/square-doradoverde-bdf4de3acf923801e717157478821284-1024-1024.webp`,
      `${CDN}/square-plateadogris-degrade-61139e2157c476f05d17157478817563-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/square-19711`,
    variants: [
      { label: "Dorado / Verde", inStock: true },
      { label: "Plateado / Gris degradé", inStock: true, price: 215000 },
      { label: "Dorado / Azul liso", inStock: true },
    ],
  },
  {
    id: "rb-aviador-pol",
    slug: "aviador-polarizado-30251",
    name: "Aviador Polarizado",
    subtitle: "3025",
    brand: "ray-ban",
    collection: "Aviador",
    price: 215000,
    images: [
      `${CDN}/aviador-classic-doradoverde-1-64204a86eac68f740b17121121526969-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/aviador-polarizado-30251`,
    variants: [
      { label: "Dorado / Verde polarizado", inStock: true },
    ],
    badge: "Polarizado",
  },
  // Ferrari Collection
  {
    id: "rb-ferrari-wayfarer",
    slug: "wayfarer-liteforce-ferrari",
    name: "Wayfarer Liteforce",
    subtitle: "4195M · Ferrari Collection",
    brand: "ray-ban",
    collection: "Ferrari Collection",
    subcollection: "ferrari",
    price: 245500,
    images: [
      `${CDN}/scuderia-ferrari-collection-wayfarer-liteforce-grisplateado-espejado-6efbcfbb43dc7c536d17156013893024-1024-1024.webp`,
      `${CDN}/scuderia-ferrari-collection-wayfarer-liteforce-azul-azul-espejado-1-0504ba78c1d96a545017156014045934-1024-1024.webp`,
      `${CDN}/scuderia-ferrari-collection-wayfarer-4195m-f60271-negro-verde-3275e965f47daed12717074187253868-1024-1024.webp`,
      `${CDN}/scuderia-ferrari-collection-wayfarer-4195m-f602h2-negro-plateado-degrade-espejado-9a2c9c04c8f7c1f2c017074187259266-1024-1024.webp`,
    ],
    storeUrl: `${STORE}/wayfarer-liteforce-4195-scuderia-ferrari-collection`,
    variants: [
      { label: "Gris / Plateado espejado", inStock: false },
      { label: "Azul / Azul espejado", inStock: false },
      { label: "Negro / Verde", inStock: false },
      { label: "Negro / Plateado degradé espejado", inStock: false },
    ],
    description: "La colaboración entre Ray-Ban y Scuderia Ferrari. El Wayfarer Liteforce incorpora materiales de ingeniería de Fórmula 1 en un diseño icónico con identidad Ferrari.",
    featured: true,
    badge: "Ferrari Collection",
  },
  {
    id: "rb-ferrari-cats",
    slug: "cats-ferrari-collection",
    name: "Cats 5000 Ferrari",
    subtitle: "RB4125M · Ferrari Collection",
    brand: "ray-ban",
    collection: "Ferrari Collection",
    subcollection: "ferrari",
    price: 245500,
    images: [
      `${CDN}/cats-negrogris-degrade-bdadae022f09166b5f17156276190219-1024-1024.webp`,
    ],
    storeUrl: "https://www.smiletiendaimp.com.ar/lentes-de-sol/ray-ban/scuderia-ferrari-collection",
    variants: [
      { label: "Negro / Gris Ferrari", inStock: true },
    ],
    description: "El diseño cat-eye clásico con los acabados exclusivos de la Scuderia Ferrari Collection.",
    featured: true,
    badge: "Ferrari Collection",
  },
  {
    id: "rb-ferrari-aviador",
    slug: "aviador-ferrari-collection",
    name: "Aviador Ferrari",
    subtitle: "3025M · Ferrari Collection",
    brand: "ray-ban",
    collection: "Ferrari Collection",
    subcollection: "ferrari",
    price: 252000,
    images: [
      `${CDN}/aviador-classic-doradoverde-1-64204a86eac68f740b17121121526969-1024-1024.webp`,
    ],
    storeUrl: "https://www.smiletiendaimp.com.ar/lentes-de-sol/ray-ban/scuderia-ferrari-collection",
    variants: [
      { label: "Dorado / Verde Ferrari", inStock: true },
    ],
    description: "El icónico Aviador reimaginado con los materiales y la identidad visual de la Scuderia Ferrari.",
    featured: true,
    badge: "Ferrari Collection",
  },
];

// ─── INVICTA ──────────────────────────────────────────────────────────────────

export const invictaProducts: Product[] = [
  {
    id: "inv-prodiver-49277",
    slug: "invicta-pro-diver-49277",
    name: "Pro Diver",
    subtitle: "49277",
    brand: "invicta",
    collection: "Pro Diver",
    price: 320000,
    images: ["/images/card-relojes.jpg"],
    storeUrl: "https://www.smiletiendaimp.com.ar/relojes/invicta",
    variants: [
      { label: "Negro / Dorado", inStock: true },
    ],
    description: "El Pro Diver de Invicta combina robustez y elegancia. Sumergible hasta 200 metros, con movimiento japonés de cuarzo y cristal mineral.",
    featured: true,
  },
  {
    id: "inv-prodiver-49274",
    slug: "invicta-pro-diver-49274",
    name: "Pro Diver",
    subtitle: "49274",
    brand: "invicta",
    collection: "Pro Diver",
    price: 305000,
    images: ["/images/card-relojes.jpg"],
    storeUrl: "https://www.smiletiendaimp.com.ar/relojes/invicta",
    variants: [
      { label: "Plateado / Azul", inStock: true },
    ],
    description: "El Pro Diver en su versión plateada con esfera azul. Diseño clásico de buceo con identidad visual contundente.",
    featured: true,
  },
  {
    id: "inv-prodiver-auto",
    slug: "invicta-pro-diver-automatico",
    name: "Pro Diver Automático",
    subtitle: "Movimiento automático",
    brand: "invicta",
    collection: "Pro Diver",
    price: 380000,
    images: ["/images/card-relojes.jpg"],
    storeUrl: "https://www.smiletiendaimp.com.ar/relojes/invicta",
    variants: [
      { label: "Dorado / Esfera dorada", inStock: true },
    ],
    description: "Movimiento automático de 21 joyas. Una pieza mecánica con la identidad visual característica de Invicta.",
    featured: true,
  },
  {
    id: "inv-cronografo",
    slug: "invicta-cronografo",
    name: "Pro Diver Cronógrafo",
    subtitle: "Cronógrafo multifunción",
    brand: "invicta",
    collection: "Cronógrafo",
    price: 420000,
    images: ["/images/card-relojes.jpg"],
    storeUrl: "https://www.smiletiendaimp.com.ar/relojes/invicta",
    variants: [
      { label: "Negro / Rojo", inStock: true },
    ],
    description: "Cronógrafo con subdiales para segundos, minutos y horas. Presencia imponente en la muñeca.",
    featured: true,
    badge: "Cronógrafo",
  },
  {
    id: "inv-limited",
    slug: "invicta-pro-diver-limited",
    name: "Pro Diver Limited",
    subtitle: "Edición Limitada",
    brand: "invicta",
    collection: "Pro Diver",
    price: 450000,
    images: ["/images/card-relojes.jpg"],
    storeUrl: "https://www.smiletiendaimp.com.ar/relojes/invicta",
    variants: [
      { label: "Dorado / Rojo", inStock: true },
    ],
    description: "Edición limitada con acabados en oro y detalles rojo Ferrari. Una pieza coleccionable.",
    featured: true,
    badge: "Limited Edition",
  },
];

// ─── TOMMY HILFIGER ───────────────────────────────────────────────────────────

export const tommyProducts: Product[] = [
  {
    id: "th-1",
    slug: "tommy-hilfiger-classic",
    name: "Tommy Hilfiger",
    subtitle: "Classic · Carey / Marrón",
    brand: "tommy",
    collection: "Clásicos",
    price: 195000,
    images: ["/images/bg-tommy.jpg"],
    storeUrl: "https://www.smiletiendaimp.com.ar/lentes-de-sol/tommy-hilfiger",
    variants: [
      { label: "Carey / Marrón", inStock: true },
    ],
    featured: true,
  },
  {
    id: "th-2",
    slug: "tommy-hilfiger-square",
    name: "Tommy Hilfiger",
    subtitle: "Square · Negro / Gris",
    brand: "tommy",
    collection: "Cuadrados",
    price: 185000,
    images: ["/images/bg-tommy.jpg"],
    storeUrl: "https://www.smiletiendaimp.com.ar/lentes-de-sol/tommy-hilfiger",
    variants: [
      { label: "Negro / Gris", inStock: true },
    ],
    featured: true,
  },
  {
    id: "th-3",
    slug: "tommy-hilfiger-aviator",
    name: "Tommy Hilfiger",
    subtitle: "Aviator · Dorado / Marrón",
    brand: "tommy",
    collection: "Aviadores",
    price: 210000,
    images: ["/images/bg-tommy.jpg"],
    storeUrl: "https://www.smiletiendaimp.com.ar/lentes-de-sol/tommy-hilfiger",
    variants: [
      { label: "Dorado / Marrón", inStock: true },
    ],
    featured: true,
  },
  {
    id: "th-4",
    slug: "tommy-hilfiger-rectangular",
    name: "Tommy Hilfiger",
    subtitle: "Rectangular · Carey",
    brand: "tommy",
    collection: "Rectangulares",
    price: 190000,
    images: ["/images/bg-tommy.jpg"],
    storeUrl: "https://www.smiletiendaimp.com.ar/lentes-de-sol/tommy-hilfiger",
    variants: [
      { label: "Carey", inStock: true },
    ],
    featured: true,
  },
  {
    id: "th-5",
    slug: "tommy-hilfiger-round",
    name: "Tommy Hilfiger",
    subtitle: "Round · Carey / Verde",
    brand: "tommy",
    collection: "Redondos",
    price: 195000,
    images: ["/images/bg-tommy.jpg"],
    storeUrl: "https://www.smiletiendaimp.com.ar/lentes-de-sol/tommy-hilfiger",
    variants: [
      { label: "Carey / Verde", inStock: true },
    ],
    featured: true,
  },
];

export const allProducts: Product[] = [...raybanProducts, ...invictaProducts, ...tommyProducts];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function formatPrice(n: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(n);
}
