import Image from "next/image";
import Link from "next/link";
import { Wifi } from "lucide-react";
import { SERVICES } from "@/lib/data/services";
import { hwUrl } from "@/lib/utils";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function Services() {
  return (
    <section id="servicios" aria-label="Servicios y amenities" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface/20" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-16">
          <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
            Lo que incluye
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary">Todo lo que necesitás</h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Y mucho más que solo una cama. El desayuno ya está incluido.
          </p>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 gap-4" role="list" aria-label="Lista de servicios">
          {SERVICES.map(({ icon: Icon, label, desc }, i) => (
            <AnimateInView key={label} delay={i * 40}>
              <div role="listitem" className="glass-card rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 group cursor-default h-full flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 group-hover:bg-primary/30 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-primary-light" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-text-primary text-sm font-semibold mb-1">{label}</p>
                  <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView delay={90} className="text-center mt-4 mb-0">
          <Link
            href="/trabajo-remoto"
            className="inline-flex items-center gap-1.5 text-text-dim hover:text-primary-light text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            <Wifi className="w-3.5 h-3.5" aria-hidden="true" />
            ¿Trabajás en remoto? Conocé nuestras opciones para estadías largas →
          </Link>
        </AnimateInView>

        {/* Banner — recepción colorida con puertas de colores */}
        <AnimateInView delay={100} className="mt-12 relative h-48 sm:h-64 rounded-3xl overflow-hidden">
          <Image
            src={hwUrl("5017", 1280)}
            alt="Recepción con puertas de colores — Cool Raúl Hostel"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-12">
            <div>
              <p className="font-heading text-2xl sm:text-3xl text-text-primary">Desayuno continental</p>
              <p className="text-text-muted text-sm mt-1">Incluido en todas las estadías</p>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
