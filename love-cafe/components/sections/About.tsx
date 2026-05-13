"use client"

import { motion } from "motion/react"
import Image from "next/image"

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32" style={{ backgroundColor: "#FFF7F8" }}>
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div
            className="relative w-72 md:w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 24px 64px rgba(136,19,55,0.12)" }}
          >
            <Image
              src="/images/mesa2cafey3postres.jpg"
              alt="Mesa de Love Café Rosario"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 288px, 400px"
            />
          </div>
          {/* Pink accent blob */}
          <div
            className="absolute -top-6 -right-6 w-40 h-40 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{ backgroundColor: "#FBCFE8" }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A98A]"
            style={{ fontFamily: "var(--font-body)" }}>
            Nuestra historia
          </p>

          <h2 className="text-4xl md:text-5xl text-[#881337] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}>
            Hecho con amor,<br />
            <em>servido con el corazón</em>
          </h2>

          {/* Heart separator */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-[#FDA4AF]/40" />
            <span className="text-[#FDA4AF] text-lg">♥</span>
            <div className="h-px flex-1 bg-[#FDA4AF]/40" />
          </div>

          <p className="text-[#5C3317]/75 leading-relaxed text-base"
            style={{ fontFamily: "var(--font-body)" }}>
            Love Café nació del deseo de crear un rincón en Rosario donde cada visita se sienta como un abrazo. Seleccionamos granos de especialidad y los transformamos en bebidas con alma, mientras nuestra cocina elabora pasteles y tortas con ingredientes frescos y mucha dedicación.
          </p>

          <p className="text-[#5C3317]/75 leading-relaxed text-base"
            style={{ fontFamily: "var(--font-body)" }}>
            Cada taza, cada postre, cada detalle de nuestro espacio fue pensado para que te sientas especial. Porque creemos que los momentos más dulces de la vida merecen un lugar a la altura.
          </p>

          <a
            href="#visitanos"
            className="self-start inline-flex items-center gap-2 text-sm text-[#881337] font-medium hover:gap-3 transition-all"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Encontranos en Rosario →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
