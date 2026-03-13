"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "ESTILO QUE SE SIENTE. PRESENCIA QUE SE NOTA.",
    description:
      "Una selección pensada para quienes entienden que el lujo moderno no necesita exceso: necesita identidad, forma y carácter.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1800&q=80",
    primaryCta: "Descubrir la selección",
    secondaryCta: "Ir a tienda",
  },
  {
    id: 2,
    title: "LA MIRADA TAMBIÉN COMUNICA QUIÉN ERES.",
    description:
      "Lentes y accesorios con una dirección visual limpia, aspiracional y precisa, construidos para acompañar presencia y estilo personal.",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1800&q=80",
    primaryCta: "Explorar la campaña",
    secondaryCta: "Ir a tienda",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];

  return (
    <section className="relative mb-28 h-[92vh] w-full overflow-hidden md:mb-36">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={current.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/54" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-black/12" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current.id}`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-semibold uppercase leading-[0.94] tracking-[0.06em] md:text-7xl">
              {current.title}
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 md:text-base">
              {current.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#colecciones"
                className="rounded-full bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:opacity-90"
              >
                {current.primaryCta}
              </a>

              <a
                href="/tienda"
                className="rounded-full border border-white/30 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                {current.secondaryCta}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentSlide ? "w-10 bg-white" : "w-2.5 bg-white/40"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}