import Image from "next/image";
import { Star, MessageCircle, Camera, ChevronDown } from "lucide-react";
import { hwUrl } from "@/lib/utils";
import { whatsappUrl } from "@/lib/data/contact";

const STATS = [
  { value: "9.1", label: "Hostelworld", sub: "/10" },
  { value: "4.0★", label: "Google", sub: "308+ reseñas" },
  { value: "~20", label: "años", sub: "de historia" },
  { value: "24h", label: "recepción", sub: "abierta" },
];

export function Hero() {
  const month = new Date().getMonth(); // 0=ene … 5=jun, 6=jul, 7=ago
  const isOffSeason = month >= 5 && month <= 7;

  return (
    <section id="hero" aria-label="Presentación" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo — bar con letrero Cool Raúl */}
      <div className="absolute inset-0">
        <Image
          src={hwUrl("501", 1920)}
          alt="Bar Cool Raúl Rock'n Hostel con amplificadores y letrero"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/95" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" aria-hidden="true" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        {isOffSeason ? (
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold" style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.25) 0%, rgba(245,158,11,0.15) 100%)", border: "1px solid rgba(251,191,36,0.45)", color: "#FCD34D" }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a1 1 0 0 1 1 1v1.07A8.001 8.001 0 0 1 20 12a1 1 0 1 1-2 0 6 6 0 0 0-5-5.917V7a1 1 0 0 1-2 0v-1.083A6 6 0 0 0 6 12a1 1 0 1 1-2 0 8.001 8.001 0 0 1 7-7.93V3a1 1 0 0 1 1-1zM8 17h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm2 3h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"/></svg>
            <span>Temporada baja — precio más bajo del año</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-6 text-sm text-primary-light font-medium">
            <Star className="w-3.5 h-3.5 fill-primary-light" aria-hidden="true" />
            <span>9.1/10 en Hostelworld · Casi 20 años en Rosario</span>
          </div>
        )}

        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl text-text-primary leading-none mb-4 drop-shadow-2xl">
          <span className="block">COOL RAÚL</span>
          <span className="block text-gradient-rock">ROCK&apos;N HOSTEL</span>
        </h1>

        <p className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed drop-shadow-lg">
          El hostel cultural de Rosario. Murales, música en vivo, estudio de grabación y la mejor
          onda de Argentina.{" "}
          <span className="text-accent font-semibold">San Lorenzo 1670</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href={whatsappUrl(
              isOffSeason
                ? "Hola! Vi que están en temporada baja. ¿Cuáles son los precios para junio/julio/agosto?"
                : "Hola! Quiero consultar disponibilidad en Cool Raúl Hostel."
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp para consultar disponibilidad"
            className="flex items-center gap-3 bg-whatsapp hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whatsapp"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            {isOffSeason ? "Consultar precio de invierno" : "Consultá por WhatsApp"}
          </a>
          <a
            href="#galeria"
            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-primary/50 hover:bg-white/15 text-text-primary font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Camera className="w-5 h-5" aria-hidden="true" />
            Ver fotos del lugar
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 mt-14 flex-wrap" aria-label="Estadísticas del hostel">
          {STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-6">
              <div className="flex flex-col items-center min-w-[4rem]">
                <span className="font-heading text-3xl sm:text-4xl text-accent drop-shadow-lg leading-none">{s.value}</span>
                <span className="text-text-primary text-xs font-semibold mt-1 uppercase tracking-wide">{s.label}</span>
                <span className="text-text-dim text-[10px] mt-0.5">{s.sub}</span>
              </div>
              {i < STATS.length - 1 && <div className="w-px h-10 bg-white/20 hidden sm:block" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#nosotros" className="cursor-pointer text-white/40 hover:text-white/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1" aria-label="Ir a la sección Nosotros">
            <ChevronDown className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
