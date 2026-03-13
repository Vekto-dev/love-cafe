"use client";

import { motion } from "framer-motion";

const collections = [
  {
    id: 1,
    category: "Relojes",
    title: "DISEÑO QUE MARCA EL RITMO. PRESENCIA QUE DEJA HUELLA.",
    description:
      "Piezas seleccionadas de Invicta y Tommy Hilfiger construidas para destacar fuerza visual, proporción y carácter.",
    image: "/images/card-relojes.jpg",
    href: "/tienda",
    cta: "Ver relojes en tienda",
  },
  {
    id: 2,
    category: "Lentes",
    title: "FORMAS ICÓNICAS. ACTITUD INMEDIATA.",
    description:
      "Modelos Ray-Ban seleccionados para aportar identidad, contraste y una presencia visual claramente premium.",
    image: "/images/card-lentes.jpg",
    href: "/tienda",
    cta: "Ver lentes en tienda",
  },
];

const brands = ["INVICTA", "TOMMY HILFIGER", "RAY-BAN"];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 56 },
  show: { opacity: 1, y: 0 },
};

export default function Collections() {
  return (
    <section
      id="colecciones"
      className="relative overflow-hidden bg-black px-6 pb-28 pt-10 text-white md:px-12 md:pb-36 md:pt-14"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        className="mx-auto max-w-7xl"
      >
        {/* Collage superior con tus 3 fotos */}
        <motion.div
          variants={item}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/8"
        >
          <div className="absolute inset-0 grid grid-cols-3">
            <img
              src="/images/bg-watch.jpg"
              alt=""
              className="h-full w-full object-cover opacity-[0.30] animate-slowZoom"
            />
            <img
              src="/images/bg-tommy.jpg"
              alt=""
              className="h-full w-full object-cover opacity-[0.30] animate-slowZoom"
            />
            <img
              src="/images/bg-rayban.jpg"
              alt=""
              className="h-full w-full object-cover opacity-[0.30] animate-slowZoom"
            />
            <div className="absolute inset-0 bg-black/58" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/66 via-black/50 to-black/62" />
          </div>

          <div className="relative z-10 px-8 py-16 md:px-14 md:py-20">
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                UNIVERSO SMILE
              </p>

              <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[0.05em] md:text-6xl">
                UNA SELECCIÓN CONSTRUIDA DESDE EL ESTILO
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                Relojes y lentes reunidos en una experiencia visual aspiracional
                y orientada a la presencia.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards principales */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {collections.map((collection) => (
            <motion.article
              key={collection.id}
              variants={item}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] transition-transform duration-500 hover:-translate-y-1"
            >
              <a href={collection.href} className="block">
                <div className="relative h-[560px] overflow-hidden">
                 <img
  src={collection.image}
  alt={collection.title}
  className="h-full w-full object-cover brightness-[0.75] contrast-[1.05] saturate-[0.9] blur-[0.2px] transition duration-[1200ms] ease-out group-hover:scale-110"
/>

                  <div className="absolute inset-0 bg-black/50 transition duration-500 group-hover:bg-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/16 to-transparent" />

                  {/* Shine sutil */}
                  <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/10 opacity-0 blur-2xl transition duration-700 group-hover:left-[115%] group-hover:opacity-100" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {collection.category}
                    </p>

                    <h3 className="mt-3 max-w-xl text-3xl font-semibold uppercase leading-[1.02] tracking-[0.04em] md:text-5xl">
                      {collection.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/78 md:text-base">
                      {collection.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition group-hover:border-white group-hover:bg-white group-hover:text-black">
                      <span>{collection.cta}</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Franja marcas */}
        <motion.div
          variants={item}
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 md:px-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                MARCAS DESTACADAS
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
                Curaduría orientada a diseño, presencia y reconocimiento visual.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-lg uppercase tracking-[0.18em] text-white/75 md:text-xl"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}