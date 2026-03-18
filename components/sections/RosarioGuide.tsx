import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ROSARIO_TIPS } from "@/lib/data/rosario";
import { hwUrl } from "@/lib/utils";
import { CONTACT } from "@/lib/data/contact";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function RosarioGuide() {
  return (
    <section id="rosario" aria-label="Guía de Rosario" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/20 to-background" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-16">
          <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
            Guía rápida
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary">Qué hacer en Rosario</h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Te damos toda la info para que aproveches al máximo la ciudad.
          </p>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROSARIO_TIPS.map((tip, i) => (
            <AnimateInView key={tip.title} delay={i * 60}>
              <article className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-default group h-full">
                <div className="text-3xl mb-3" role="img" aria-label={tip.title}>{tip.icon}</div>
                <h3 className="font-heading text-xl text-text-primary mb-2 group-hover:text-primary-light transition-colors duration-200">
                  {tip.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{tip.desc}</p>
              </article>
            </AnimateInView>
          ))}
        </div>

        {/* Links to content pages */}
        <AnimateInView delay={80} className="mt-8 flex flex-wrap gap-3 justify-center">
          {[
            { href: "/rosario", label: "Guía completa de Rosario →" },
            { href: "/rosario/que-hacer", label: "15 planes imperdibles →" },
            { href: "/rosario/gastronomia", label: "Dónde comer →" },
            { href: "/rosario/vida-nocturna", label: "Vida nocturna →" },
            { href: "/rosario/cuando-visitar", label: "Cuándo visitar →" },
            { href: "/musicos", label: "Para músicos →" },
            { href: "/trabajo-remoto", label: "Trabajo remoto →" },
            { href: "/alojamiento-rosario", label: "Alojamiento en Rosario →" },
            { href: "/blog", label: "Blog de viajes →" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-primary-light hover:text-text-primary bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {l.label}
            </Link>
          ))}
        </AnimateInView>

        {/* Location card — Monumento a la Bandera al atardecer */}
        <AnimateInView delay={100} className="mt-12 glass-card rounded-3xl overflow-hidden">
          <div className="grid sm:grid-cols-2">
            <div className="relative h-48 sm:h-auto">
              <Image
                src={hwUrl("5014", 800)}
                alt="Monumento a la Bandera al atardecer — Rosario, Argentina"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/20 sm:bg-gradient-to-l" aria-hidden="true" />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-red-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-text-primary mb-1">Cómo llegar</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    San Lorenzo 1670, Rosario, Santa Fe.
                    A 2 km de la terminal de ómnibus (traslado incluido) y en el corazón del microcentro.
                  </p>
                </div>
              </div>
              <a
                href={CONTACT.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver ubicación en Google Maps"
                className="flex items-center gap-2 bg-surface-2 hover:bg-primary/30 text-text-primary text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer w-fit focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Ver en mapa
              </a>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
