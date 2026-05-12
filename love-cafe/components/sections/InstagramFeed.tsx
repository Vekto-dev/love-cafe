"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { INSTAGRAM_PHOTOS, INSTAGRAM_URL } from "@/lib/data/menus"

export function InstagramFeed() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#FFE4E6" }}>
      {/* Header */}
      <motion.div
        className="text-center mb-12 px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A98A] mb-3"
          style={{ fontFamily: "var(--font-body)" }}>
          Seguinos
        </p>
        <h2 className="text-4xl md:text-5xl text-[#881337] mb-2"
          style={{ fontFamily: "var(--font-heading)" }}>
          Seguí nuestra historia
        </h2>
        <p className="text-[#C9A98A] text-sm" style={{ fontFamily: "var(--font-body)" }}>
          @lovecafe.ros
        </p>
      </motion.div>

      {/* Cards strip */}
      <div
        className="flex gap-5 overflow-x-auto px-6 md:px-16 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {INSTAGRAM_PHOTOS.map((photo, i) => (
          <motion.a
            key={photo.src}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="group shrink-0 rounded-2xl overflow-hidden bg-white cursor-pointer"
            style={{
              width: 260,
              boxShadow: "0 4px 20px rgba(136,19,55,0.08)",
            }}
          >
            {/* Photo */}
            <div className="relative" style={{ width: 260, height: 260 }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="260px"
              />
            </div>

            {/* Caption bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-[#FFE4E6]">
              <Instagram size={14} className="text-[#881337] shrink-0" />
              <span className="text-xs text-[#5C3317]/70 truncate"
                style={{ fontFamily: "var(--font-body)" }}>
                {photo.caption}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-10 px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      >
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#881337] px-8 py-3 text-sm font-medium text-[#881337] transition-all duration-300 hover:bg-[#881337] hover:text-white"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <Instagram size={15} />
          Seguinos en Instagram
        </a>
      </motion.div>
    </section>
  )
}
