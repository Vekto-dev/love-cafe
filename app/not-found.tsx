import Link from "next/link";
import { MessageCircle, MapPin, Home, ArrowLeft } from "lucide-react";
import { whatsappUrl } from "@/lib/data/contact";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* 404 number */}
        <div className="font-heading text-[120px] sm:text-[160px] leading-none text-gradient-rock select-none mb-2" aria-hidden="true">
          404
        </div>

        <h1 className="font-heading text-2xl sm:text-3xl text-text-primary mb-4">
          Esta página no existe,<br />pero Rosario sí.
        </h1>

        <p className="text-text-muted text-base leading-relaxed mb-10 max-w-sm mx-auto">
          La URL que buscabas no está disponible. Podés volver al hostel, explorar la guía de Rosario o escribirnos directo por WhatsApp.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Ir al hostel
          </Link>
          <a
            href={whatsappUrl("Hola! Necesito ayuda para encontrar información sobre Cool Raúl Hostel.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        {/* Useful links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto">
          {[
            { href: "/rosario", label: "Guía de Rosario", icon: MapPin },
            { href: "/rosario/que-hacer", label: "Qué hacer", icon: ArrowLeft },
            { href: "/blog", label: "Blog de viajes", icon: ArrowLeft },
            { href: "/rosario/como-llegar", label: "Cómo llegar", icon: MapPin },
            { href: "/rosario/gastronomia", label: "Gastronomía", icon: ArrowLeft },
            { href: "/rosario/vida-nocturna", label: "Vida nocturna", icon: ArrowLeft },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="glass-card rounded-xl px-4 py-3 text-text-muted hover:text-text-primary text-sm transition-colors hover:border-primary/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
