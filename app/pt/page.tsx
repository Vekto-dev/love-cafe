import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, MapPin, Star, Wifi, Coffee } from "lucide-react";
import { whatsappUrl, CONTACT } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Cool Raúl Rock'n Hostel | Melhor Hostel em Rosário, Argentina",
  description:
    "Hostel cultural no centro de Rosário, Argentina. Estúdio de gravação, café da manhã incluído, armários, recepção 24h. Nota 9.1/10 no Hostelworld. Reserve direto pelo WhatsApp.",
  keywords: [
    "hostel rosario argentina",
    "hospedagem barata rosario",
    "hostel mochileiro rosario",
    "onde ficar em rosario",
    "melhor hostel rosario",
    "hostel centro rosario argentina",
  ],
  alternates: {
    canonical: "https://coolraulhostel.com/pt",
    languages: { es: "https://coolraulhostel.com", en: "https://coolraulhostel.com/en" },
  },
  openGraph: {
    title: "Cool Raúl Rock'n Hostel | Rosário, Argentina",
    description: "Hostel cultural com estúdio de gravação, murais e onda de rock. Quase 20 anos de história. 9.1/10 no Hostelworld.",
    url: "https://coolraulhostel.com/pt",
    locale: "pt_BR",
  },
};

const HIGHLIGHTS = [
  { icon: Star, label: "9.1/10 no Hostelworld" },
  { icon: Coffee, label: "Café da manhã incluído" },
  { icon: Wifi, label: "WiFi grátis de alta velocidade" },
  { icon: MapPin, label: "Centro — San Lorenzo 1670" },
];

export default function PortuguesePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav stub */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" aria-label="Navegação principal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-heading text-text-primary text-lg hover:text-primary-light transition-colors">
            Cool Raúl
          </Link>
          <Link href="/" className="text-text-dim text-sm hover:text-text-primary transition-colors">
            Ver em espanhol →
          </Link>
        </div>
      </nav>

      <main id="main-content" className="flex-1 pt-14">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 text-primary-light text-sm font-semibold mb-6">
            Rosário, Argentina · Desde 2006
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl text-text-primary mb-6 leading-tight">
            O hostel cultural<br />
            <span className="text-gradient-rock">que Rosário merece</span>
          </h1>

          <p className="text-text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Um hostel de rock no coração de Rosário com murais, estúdio de gravação, música ao vivo e viajantes de todo o mundo. Café da manhã incluído. Sem comissão reservando direto.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <a
              href={whatsappUrl("Oi! Quero fazer uma reserva no Cool Raúl Hostel em Rosário.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar no Cool Raúl Hostel pelo WhatsApp"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-green-900/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Reservar pelo WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary/50 text-text-primary font-semibold px-8 py-4 rounded-2xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Site completo (espanhol)
            </Link>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div key={label} className="glass-card rounded-xl p-4 text-center">
                <Icon className="w-5 h-5 text-primary-light mx-auto mb-2" aria-hidden="true" />
                <p className="text-text-muted text-xs leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="glass-card rounded-3xl p-8 sm:p-12">
            <h2 className="font-heading text-3xl text-text-primary mb-6">Sobre o Cool Raúl</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="text-text-muted leading-relaxed mb-4">
                  O Cool Raúl Rock&apos;n Hostel funciona desde 2006. Quase duas décadas recebendo mochileiros, músicos e viajantes de todo o mundo no centro de Rosário — terceira maior cidade da Argentina, terra natal de Messi e Che Guevara.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Temos dormitórios mistos e femininos, quartos privativos, café da manhã completo todos os dias, cozinha compartilhada, terraço com churrasqueira, bar, noites de karaokê e um estúdio de gravação profissional para hóspedes.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Transfer gratuito do terminal de ônibus",
                  "Estúdio de gravação e sala de ensaio",
                  "Café da manhã incluído todos os dias",
                  "Armários em todos os dormitórios",
                  "Ar-condicionado e aquecimento",
                  "Recepção 24 horas",
                  "Terraço com churrasqueira",
                  "Equipe fala português",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-2 text-text-muted text-sm">
                    <span className="text-primary-light" aria-hidden="true">✓</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="glass-card rounded-3xl p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-2xl bg-accent-red/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-red-400" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-heading text-xl text-text-primary mb-2">Como chegar</h2>
              <p className="text-text-muted mb-4">
                <strong className="text-text-primary">San Lorenzo 1670</strong>, Rosário, Santa Fe, Argentina.
                Estamos a 2 km do terminal de ônibus (transfer gratuito incluso) e a poucos minutos a pé da orla do Rio Paraná e do Monumento à Bandeira Nacional.
              </p>
              <a
                href={CONTACT.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-light hover:text-text-primary text-sm font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background/95 py-6 text-center">
        <p className="text-text-dim text-xs">
          © {new Date().getFullYear()} Cool Raúl Rock&apos;n Hostel · San Lorenzo 1670, Rosário, Argentina ·{" "}
          <Link href="/" className="hover:text-text-primary transition-colors">Ver em espanhol</Link>
        </p>
      </footer>
    </div>
  );
}
