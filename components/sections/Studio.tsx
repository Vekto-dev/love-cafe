import Image from "next/image";
import Link from "next/link";
import { Mic2, Guitar, Music, MessageCircle } from "lucide-react";
import { hwUrl } from "@/lib/utils";
import { whatsappUrl } from "@/lib/data/contact";
import { AnimateInView } from "@/components/ui/AnimateInView";

const STUDIO_FEATURES = [
  { icon: Mic2,   label: "Estudio de grabación profesional" },
  { icon: Guitar, label: "Alquiler de instrumentos" },
  { icon: Music,  label: "Sala de ensayo disponible" },
];

const EQ_BARS = [40, 65, 85, 55, 90, 70, 45, 80, 60, 75, 50, 88, 42, 68];

export function Studio() {
  return (
    <section id="estudio" aria-label="Estudio de grabación" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent-red/5" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <AnimateInView className="order-2 lg:order-1">
            <div className="relative">
              {/* Main photo — sala de música con paneles acústicos */}
              <div className="relative h-80 rounded-3xl overflow-hidden glow-purple">
                <Image
                  src={hwUrl("504", 800)}
                  alt="Sala de música con paneles acústicos y guitarra — Cool Raúl"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" aria-hidden="true" />
                {/* Equalizer overlay */}
                <div className="absolute bottom-6 left-6 right-6" aria-hidden="true">
                  <div className="flex items-end justify-center gap-1 h-12">
                    {EQ_BARS.map((h, i) => (
                      <div
                        key={i}
                        className="eq-bar w-2 rounded-t-sm bg-gradient-to-t from-primary to-accent"
                        style={{ height: `${h}%`, animationDelay: `${i * 0.12}s`, animationDuration: `${0.7 + (i % 5) * 0.18}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Secondary — terraza con graffiti */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src={hwUrl("507", 400)}
                  alt="Terraza con graffiti Cool Raúl"
                  fill
                  loading="lazy"
                  sizes="144px"
                  className="object-cover"
                />
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl" aria-hidden="true" />
            </div>
          </AnimateInView>

          {/* Text */}
          <AnimateInView delay={150} className="order-1 lg:order-2">
            <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
              Lo que nos hace únicos
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-6 leading-tight">
              El único hostel
              <br />
              <span className="text-gradient-purple">con estudio de grabación</span>
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>¿Sos músico y estás de viaje? En Cool Raúl podés grabar, ensayar y alquilar instrumentos sin moverte del hostel.</p>
              <p>El estudio recibió músicos locales e internacionales. La sala de ensayo está disponible para los huéspedes, y siempre hay alguien con quien improvisar una sesión.</p>
              <p><span className="text-accent font-semibold">Rosario es tierra de músicos</span>, y Cool Raúl es su base de operaciones.</p>
            </div>

            <ul className="space-y-3 mt-8" aria-label="Servicios del estudio">
              {STUDIO_FEATURES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 bg-surface/60 rounded-xl px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary-light" aria-hidden="true" />
                  </div>
                  <span className="text-text-primary text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl("Hola! Quiero reservar una sesión en el estudio de grabación de Cool Raúl.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar sesión en el estudio de grabación por WhatsApp"
              className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-light"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Reservar sesión de grabación
            </a>
            <Link
              href="/musicos"
              className="inline-flex items-center gap-1.5 mt-3 text-text-dim hover:text-primary-light text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              Ver todo sobre músicos en Rosario →
            </Link>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
