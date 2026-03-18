import Image from "next/image";
import { MessageCircle, ExternalLink } from "lucide-react";
import { ROOMS } from "@/lib/data/rooms";
import { hwUrl } from "@/lib/utils";
import { whatsappUrl, CONTACT } from "@/lib/data/contact";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function Rooms() {
  return (
    <section id="habitaciones" aria-label="Habitaciones" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/20 to-background" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-16">
          <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
            Dónde dormir
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary">Encontrá tu lugar</h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Opciones para todos los estilos de viaje. Desde el clásico dorm mochilero hasta tu habitación privada.
          </p>
        </AnimateInView>

        <div className="grid md:grid-cols-3 gap-6">
          {ROOMS.map((room, i) => (
            <AnimateInView key={room.name} delay={i * 100}>
              <article className="glass-card rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                {/* Room photo */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={hwUrl(room.photoId, 600)}
                    alt={`${room.name} — Cool Raúl Hostel`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
                  <span className={`absolute top-3 left-3 ${room.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider`}>
                    {room.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl text-text-primary mb-1">{room.name}</h3>
                  <p className="text-text-muted text-sm mb-1">{room.capacity}</p>
                  <p className="text-primary-light text-sm font-medium mb-4">{room.highlight}</p>

                  <ul className="space-y-2 mb-6 flex-1" aria-label={`Características de ${room.name}`}>
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-text-muted text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappUrl(`Hola! Quiero consultar disponibilidad para ${room.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Consultar disponibilidad de ${room.name} por WhatsApp`}
                    className="flex items-center justify-center gap-2 w-full bg-surface-2 hover:bg-primary/30 text-text-primary text-sm font-semibold py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    Consultar disponibilidad
                  </a>
                </div>
              </article>
            </AnimateInView>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-dim text-sm mb-4">También podés reservar en:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Booking.com", href: CONTACT.booking },
              { label: "Hostelworld", href: CONTACT.hostelworld },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-surface border border-border hover:border-primary/50 text-text-muted hover:text-text-primary text-sm px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
