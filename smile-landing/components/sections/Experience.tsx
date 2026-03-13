"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "ESTILO Y PERSONALIDAD",
    description:
      "Cada línea se presenta desde una lógica visual y comercial más cercana a la moda que al simple listado de productos.",
  },
  {
    title: "Presencia",
    description:
      "Relojes y lentes seleccionados para acompañar una imagen personal más sólida, segura y reconocible.",
  },
  {
    title: "Estilo",
    description:
      "Smile organiza marcas y piezas dentro de una experiencia coherente, limpia y aspiracional.",
  },
  {
    title: "Experiencia de compra",
    description:
      "Descubre nuestro catálogo online de relojes y lentes. Navega por marcas destacadas, encuentra tu modelo ideal y accede a una experiencia de compra simple y segura.",
  },
];

const videos = ["/videos/smile-watch.mp4", "/videos/smile-glasses.mp4"];

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

export default function Experience() {
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#040404] px-6 py-28 text-white md:px-12 md:py-36">
      <div className="absolute inset-0 overflow-hidden">
        {videos.map((video, index) => (
          <video
            key={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ${
              activeVideo === index ? "opacity-[0.36]" : "opacity-0"
            }`}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}

        <div className="absolute inset-0 bg-black/52" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/58 via-black/56 to-black/70" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <motion.div variants={item} className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/42">
            SMILE EXPERIENCE
          </p>

          <h2 className="mt-4 text-4xl font-semibold uppercase tracking-[0.06em] md:text-6xl">
            MÁS QUE PRODUCTO: UNA EXPERIENCIA VISUAL CON CRITERIO.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
            La propuesta de Smile parte de la selección, la estética y la forma
            en que cada pieza acompaña la presencia personal.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {items.map((card) => (
            <motion.article
              key={card.title}
              variants={item}
              className="bg-black/44 p-8 backdrop-blur-[1px] md:p-10"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-white/38">
                
              </p>

              <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.05em]">
                {card.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/72">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="/tienda"
            className="rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:opacity-90"
          >
            Ir a tienda
          </a>

          <a
            href="#colecciones"
            className="rounded-full border border-white/20 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Volver a explorar
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}