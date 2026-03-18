"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import { REVIEWS } from "@/lib/data/reviews";
import { hwUrl } from "@/lib/utils";
import { CONTACT } from "@/lib/data/contact";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? REVIEWS : REVIEWS.slice(0, 4);

  return (
    <section id="resenas" aria-label="Reseñas de huéspedes" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface/20" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-16">
          <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
            Lo que dicen
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary">Reseñas reales</h2>

          {/* Score highlight */}
          <div className="inline-flex items-center gap-4 mt-6 bg-primary/20 border border-primary/40 rounded-2xl px-6 py-3" aria-label="Puntuación 9.1 sobre 10 en Hostelworld">
            <div className="text-center">
              <span className="font-heading text-5xl text-accent">9.1</span>
              <span className="block text-text-muted text-xs">Hostelworld</span>
            </div>
            <div className="w-px h-10 bg-border" aria-hidden="true" />
            <div className="flex flex-col items-start">
              <div className="flex gap-1 mb-1" aria-label="5 estrellas">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <span className="text-text-muted text-sm">9.1/10 · Hostelworld</span>
            </div>
          </div>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" aria-label="Reseñas de huéspedes">
          {visibleReviews.map((r, i) => (
            <AnimateInView key={`${r.name}-${i}`} delay={i * 80}>
              <article className="glass-card rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    aria-hidden="true"
                  >
                    {r.flag}
                  </div>
                  <div>
                    <p className="text-text-primary text-sm font-semibold leading-tight">{r.name}</p>
                    <p className="text-text-dim text-xs">{r.country}</p>
                  </div>
                  <span className="ml-auto bg-accent text-black font-bold text-sm px-2 py-0.5 rounded-lg flex-shrink-0" aria-label={`Puntuación ${r.score} sobre 10`}>
                    {r.score}/10
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-3" aria-label={`${Math.round(r.score / 2)} de 5 estrellas`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.round(r.score / 2) ? "fill-accent text-accent" : "fill-transparent text-text-dim"}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="text-text-muted text-sm leading-relaxed flex-1 italic">
                  &ldquo;{r.text}&rdquo;
                </blockquote>

                <footer className="mt-4 pt-4 border-t border-border">
                  <span className="text-text-dim text-xs">{r.platform}</span>
                </footer>
              </article>
            </AnimateInView>
          ))}
        </div>

        {!showAll && REVIEWS.length > 4 && (
          <AnimateInView delay={80} className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary/50 text-text-muted hover:text-text-primary text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Ver las {REVIEWS.length - 4} reseñas restantes
            </button>
          </AnimateInView>
        )}

        {/* Panoramic — huésped jugando ping pong frente al graffiti */}
        <AnimateInView delay={100} className="mt-12 relative h-40 sm:h-56 rounded-3xl overflow-hidden">
          <Image
            src={hwUrl("5013", 1280)}
            alt="Huésped jugando ping pong frente al graffiti de Cool Raúl"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-12">
            <div>
              <p className="font-heading text-xl sm:text-2xl text-text-primary">308+ reseñas en Google · 9.1 en Hostelworld</p>
              <div className="flex gap-4 mt-3">
                <a
                  href={CONTACT.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-muted hover:text-text-primary text-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  Ver en Google
                </a>
                <a
                  href={CONTACT.hostelworld}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-muted hover:text-text-primary text-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  Ver en Hostelworld
                </a>
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
