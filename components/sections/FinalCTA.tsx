import Image from "next/image";
import { Instagram, Facebook, ExternalLink, MessageCircle } from "lucide-react";
import { hwUrl } from "@/lib/utils";
import { CONTACT, whatsappUrl } from "@/lib/data/contact";

const SOCIAL = [
  { label: "Instagram", icon: Instagram, href: CONTACT.instagram },
  { label: "Facebook", icon: Facebook, href: CONTACT.facebook },
  { label: "TripAdvisor", icon: ExternalLink, href: CONTACT.tripadvisor },
];

export function FinalCTA() {
  const isOffSeason = new Date().getMonth() >= 5 && new Date().getMonth() <= 7;

  return (
    <section aria-label="Reservar ahora" className="py-24 relative overflow-hidden">
      {/* Bar con letrero Cool Raúl — pared verde */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={hwUrl("5021", 1920)}
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card rounded-3xl p-10 sm:p-16 glow-purple">
          <div className="w-16 h-16 rounded-2xl bg-whatsapp/20 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <MessageCircle className="w-8 h-8 text-whatsapp" />
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl text-text-primary mb-4">
            {isOffSeason ? (
              <>
                Rosario en invierno.
                <br />
                <span className="text-gradient-rock">El precio más bajo</span>
                <br />
                del año.
              </>
            ) : (
              <>
                ¿Listo para el
                <br />
                <span className="text-gradient-rock">mejor hostel</span>
                <br />
                de Rosario?
              </>
            )}
          </h2>

          <p className="text-text-muted text-lg max-w-lg mx-auto mb-10">
            {isOffSeason
              ? "Junio, julio y agosto: la ciudad sin turistas, el estudio más disponible y el precio más bajo del año. Escribinos y te contamos."
              : "Escribinos por WhatsApp y te respondemos al instante. Reserva directa, sin comisiones."}
          </p>

          <a
            href={whatsappUrl(
              isOffSeason
                ? "Hola! Me interesa el hostel en temporada baja. ¿Cuáles son los precios para invierno?"
                : "Hola! Quiero reservar en Cool Raúl Hostel."
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Reservar en Cool Raúl Hostel por WhatsApp: ${CONTACT.whatsappDisplay}`}
            className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-green-400 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-200 shadow-xl shadow-green-900/30 hover:shadow-green-900/50 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whatsapp"
          >
            <MessageCircle className="w-6 h-6" aria-hidden="true" />
            {CONTACT.whatsappDisplay}
          </a>

          <div className="flex items-center justify-center gap-6 mt-8 flex-wrap" aria-label="Redes sociales">
            {SOCIAL.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Seguir en ${label}`}
                className="flex items-center gap-2 text-text-muted hover:text-text-primary text-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
