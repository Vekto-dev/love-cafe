import Image from "next/image";
import { hwUrl } from "@/lib/utils";
import { AnimateInView } from "@/components/ui/AnimateInView";

const TAGS = ["Rock", "Cultura", "Comunidad", "Rosario", "Música en vivo"];
const LANGS = ["🇦🇷 Español", "🇺🇸 Inglés", "🇧🇷 Portugués", "🇮🇱 Hebreo", "🇩🇰 Danés"];

const COLLAGE = [
  { id: "502", alt: "Escalera con murales de rock", h: "h-48" },
  { id: "5015", alt: "Recepción con murales de Axl Rose y Jimmy Page", h: "h-36" },
  { id: "507", alt: "Terraza con ping pong y graffiti Cool Raúl", h: "h-36" },
  { id: "504", alt: "Sala de música con bean bags y guitarra", h: "h-48" },
];

export function About() {
  return (
    <section id="nosotros" aria-label="Nuestra historia" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <AnimateInView>
            <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
              Nuestra historia
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-text-primary mb-6 leading-tight">
              No es solo un hostel.
              <br />
              <span className="text-gradient-purple">Es un estado mental.</span>
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed text-base">
              <p>
                Desde 2006, <span className="text-text-primary font-semibold">Omar</span> abrió las
                puertas de Cool Raúl con una idea simple: crear un espacio donde los viajeros
                puedan conectar con la cultura local, la música y la gente.
              </p>
              <p>
                Casi dos décadas después, este <span className="text-accent font-semibold">hostel en el centro de Rosario</span> se convirtió en un ícono cultural de la ciudad. Sus
                paredes están cubiertas de murales, sus pasillos de historias, y su estudio de
                grabación ha visto pasar músicos de todo el mundo.
              </p>
              <p>
                El staff habla español, inglés, portugués, hebreo y danés. Porque en Cool Raúl,
                nadie es extranjero.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6" aria-label="Características">
              {TAGS.map((tag) => (
                <span key={tag} className="bg-primary/20 border border-primary/30 text-primary-light text-sm px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </AnimateInView>

          {/* Photo collage */}
          <AnimateInView delay={150} className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                {COLLAGE.slice(0, 2).map((p) => (
                  <div key={p.id} className={`relative ${p.h} rounded-2xl overflow-hidden`}>
                    <Image src={hwUrl(p.id, 600)} alt={p.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 50vw, 25vw" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="space-y-3 pt-6">
                {COLLAGE.slice(2).map((p) => (
                  <div key={p.id} className={`relative ${p.h} rounded-2xl overflow-hidden`}>
                    <Image src={hwUrl(p.id, 600)} alt={p.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 50vw, 25vw" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" aria-hidden="true" />
              <span className="text-text-primary text-sm font-semibold">Abierto 24 horas</span>
            </div>

            {/* Staff languages */}
            <div className="mt-10 glass-card rounded-2xl p-4">
              <p className="text-text-dim text-xs uppercase tracking-wider mb-2">Idiomas del staff</p>
              <div className="flex flex-wrap gap-2">
                {LANGS.map((l) => (
                  <span key={l} className="text-text-muted text-sm bg-surface rounded-lg px-3 py-1">{l}</span>
                ))}
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
