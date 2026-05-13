"use client"

import { motion } from "motion/react"
import { MapPin, Clock } from "lucide-react"
import { HOURS, ADDRESS, MAPS_EMBED_URL } from "@/lib/data/menus"
import { CrochetBorder } from "@/components/ui/CrochetBorder"

export function Location() {
  return (
    <section id="visitanos" className="py-24 md:py-32" style={{ backgroundColor: "#FFE4E6" }}>
      <div className="mx-auto max-w-2xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A98A] mb-3"
            style={{ fontFamily: "var(--font-body)" }}>
            Dónde estamos
          </p>
          <h2 className="text-4xl md:text-5xl text-[#881337]"
            style={{ fontFamily: "var(--font-heading)" }}>
            Encontranos
          </h2>
        </motion.div>

        {/* Location card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="relative rounded-3xl bg-white overflow-hidden pt-8"
          style={{ boxShadow: "0 8px 40px rgba(136,19,55,0.10)" }}
        >
          {/* Crochet top border */}
          <CrochetBorder position="top" />

          <div className="px-8 pb-0 pt-4 flex flex-col gap-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "#FFE4E6" }}>
                <MapPin size={18} className="text-[#881337]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C9A98A] mb-1"
                  style={{ fontFamily: "var(--font-body)" }}>
                  Dirección
                </p>
                <p className="text-xl text-[#881337]"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {ADDRESS}
                </p>
                <p className="text-sm text-[#5C3317]/60" style={{ fontFamily: "var(--font-body)" }}>
                  Rosario, Santa Fe, Argentina
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "#FFE4E6" }}>
                <Clock size={18} className="text-[#881337]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C9A98A] mb-3"
                  style={{ fontFamily: "var(--font-body)" }}>
                  Horarios
                </p>
                <div className="flex flex-col gap-2">
                  {HOURS.map((h) => (
                    <div key={h.days} className="flex flex-col sm:flex-row sm:gap-3">
                      <span className="text-sm font-medium text-[#5C3317] w-44"
                        style={{ fontFamily: "var(--font-body)" }}>
                        {h.days}
                      </span>
                      <span className="text-sm text-[#5C3317]/70"
                        style={{ fontFamily: "var(--font-body)" }}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="mt-8 w-full overflow-hidden" style={{ height: 280 }}>
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="280"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Love Café Rosario en Google Maps"
            />
          </div>

          {/* Crochet bottom border */}
          <CrochetBorder position="bottom" />
        </motion.div>
      </div>
    </section>
  )
}
