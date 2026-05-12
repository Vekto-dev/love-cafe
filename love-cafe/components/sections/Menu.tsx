"use client"

import { motion } from "motion/react"
import { Coffee, Cake } from "lucide-react"
import { MENU_DIGITAL_URL, MENU_TORTAS_URL } from "@/lib/data/menus"

const MENUS = [
  {
    icon: Coffee,
    title: "Menú Digital",
    description:
      "Cafés de especialidad, bebidas calientes y frías. Para empezar el día con amor.",
    url: MENU_DIGITAL_URL,
    cta: "Ver Menú de Café",
  },
  {
    icon: Cake,
    title: "Menú de Tortas",
    description:
      "Tortas, macarons y pasteles elaborados con amor. Dulces momentos para compartir.",
    url: MENU_TORTAS_URL,
    cta: "Ver Menú de Tortas",
  },
]

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32" style={{ backgroundColor: "#FDF6F0" }}>
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A98A] mb-3"
            style={{ fontFamily: "var(--font-body)" }}>
            Lo que preparamos
          </p>
          <h2 className="text-4xl md:text-5xl text-[#881337]"
            style={{ fontFamily: "var(--font-heading)" }}>
            Nuestros Menús
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MENUS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="group relative flex flex-col items-center text-center gap-6 rounded-3xl p-10 border border-[#FDA4AF]/30 bg-white transition-shadow duration-300 hover:shadow-xl"
              style={{ boxShadow: "0 4px 24px rgba(136,19,55,0.06)" }}
            >
              {/* Icon circle */}
              <div className="flex size-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "#FFE4E6" }}>
                <item.icon className="size-7 text-[#881337]" strokeWidth={1.5} />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl text-[#881337]"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="text-[#5C3317]/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}>
                  {item.description}
                </p>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 rounded-full bg-[#881337] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#6B0F2A] hover:gap-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.cta}
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
