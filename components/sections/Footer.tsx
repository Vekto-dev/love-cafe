import Link from "next/link";
import { Music, MapPin, Phone, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/data/contact";

const BOOKING_LINKS = [
  { label: "Booking.com", href: CONTACT.booking },
  { label: "Hostelworld", href: CONTACT.hostelworld },
  { label: "TripAdvisor", href: CONTACT.tripadvisor },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/95" aria-label="Pie de página">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center" aria-hidden="true">
                <Music className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading text-text-primary text-lg">Cool Raúl</span>
            </div>
            <p className="text-text-dim text-sm leading-relaxed">
              El hostel cultural de Rosario. Rock, murales, música y viajeros de todo el mundo desde 2006.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h3>
            <address className="not-italic space-y-2 text-text-muted text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-text-dim" aria-hidden="true" />
                <span>{CONTACT.address}, {CONTACT.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-text-dim" aria-hidden="true" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
                  {CONTACT.whatsappDisplay}
                </a>
              </p>
            </address>
          </div>

          {/* Booking links */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">Reservas</h3>
            <ul className="space-y-2">
              {BOOKING_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-text-muted hover:text-text-primary text-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Internal links */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">Explorá Rosario</h3>
            <ul className="space-y-2">
              {[
                { label: "Guía de Rosario", href: "/rosario" },
                { label: "Qué hacer", href: "/rosario/que-hacer" },
                { label: "Cómo llegar", href: "/rosario/como-llegar" },
                { label: "Gastronomía", href: "/rosario/gastronomia" },
                { label: "Vida nocturna", href: "/rosario/vida-nocturna" },
                { label: "Blog de viajes", href: "/blog" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-text-dim text-xs">
          <p>© {new Date().getFullYear()} Cool Raúl Rock&apos;n Hostel. Rosario, Argentina.</p>
          <p>Operando desde 2006 · Recepción 24 horas</p>
        </div>
      </div>
    </footer>
  );
}
