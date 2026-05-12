"use client"

import { useRef } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const PHOTOS = [
  { src: "/images/cafeteravertiendocafe.jpg", alt: "Cafetera vertiendo café" },
  { src: "/images/doscafedospasteles.jpg", alt: "Dos cafés y dos pasteles" },
  { src: "/images/macarons.jpg", alt: "Macarons" },
  { src: "/images/mesa2cafey3postres.jpg", alt: "Mesa con cafés y postres" },
]

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = direction === "right" ? 360 : -360
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="galeria" className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#FFF7F8" }}>
      {/* Header */}
      <motion.div
        className="text-center mb-12 px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A98A] mb-3"
          style={{ fontFamily: "var(--font-body)" }}>
          Momentos
        </p>
        <h2 className="text-4xl md:text-5xl text-[#881337]"
          style={{ fontFamily: "var(--font-heading)" }}>
          Galería
        </h2>
      </motion.div>

      {/* Scroll strip */}
      <div className="relative">
        {/* Arrow buttons — desktop only */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex size-10 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur text-[#881337] hover:bg-white transition"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex size-10 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur text-[#881337] hover:bg-white transition"
          aria-label="Siguiente"
        >
          <ChevronRight size={20} />
        </button>

        {/* Photos strip */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-6 md:px-16 pb-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.1 }}
              className="relative shrink-0 overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
              style={{
                scrollSnapAlign: "start",
                width: 300,
                height: 400,
                boxShadow: "0 8px 32px rgba(136,19,55,0.10)",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="300px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
