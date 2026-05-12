"use client"

import { motion } from "motion/react"
import Image from "next/image"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
})

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-svh flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 70% 50%, #FBCFE8 0%, #FFF7F8 70%)",
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 px-6 py-32 md:py-0 items-center w-full">
        {/* Text block */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <motion.p
            {...fadeUp(0.1)}
            className="text-xs tracking-[0.3em] uppercase text-[#C9A98A]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Specialty Coffee · Rosario
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            className="text-5xl md:text-7xl leading-tight text-[#881337]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Coffee made
            <br />
            <em>with love</em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-lg text-[#5C3317]/70 max-w-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Sweet mornings in Rosario. Specialty coffee &amp; pastry hecho con el corazón.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex gap-4 flex-wrap">
            <a
              href="#menu"
              className="inline-block rounded-full border-2 border-[#881337] px-8 py-3 text-sm font-medium text-[#881337] transition-all duration-300 hover:bg-[#881337] hover:text-white"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ver Menú
            </a>
            <a
              href="#visitanos"
              className="inline-block rounded-full px-8 py-3 text-sm font-medium text-[#C9A98A] transition-colors hover:text-[#881337]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Cómo llegar →
            </a>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="relative order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-72 md:w-96 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 32px 80px rgba(136,19,55,0.15)" }}
          >
            <Image
              src="/images/cafeteravertiendocafe.jpg"
              alt="Cafetera vertiendo café en Love Café Rosario"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 288px, 384px"
              priority
            />
          </div>
          {/* Decorative blush blob */}
          <div
            className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full opacity-40 blur-2xl pointer-events-none"
            style={{ backgroundColor: "#FDA4AF" }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest text-[#C9A98A] uppercase" style={{ fontFamily: "var(--font-body)" }}>
          scroll
        </span>
        <motion.div
          className="w-px h-8 bg-[#FDA4AF]"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
