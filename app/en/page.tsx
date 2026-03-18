import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, MapPin, Star, Wifi, Coffee } from "lucide-react";
import { whatsappUrl, CONTACT } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Cool Raúl Rock'n Hostel | Best Hostel in Rosario, Argentina",
  description:
    "Cultural hostel in the heart of Rosario, Argentina. Recording studio, breakfast included, lockers, 24h reception. Rated 9.1/10 on Hostelworld. Book directly via WhatsApp.",
  keywords: [
    "hostel rosario argentina",
    "backpacker hostel rosario",
    "where to stay in rosario",
    "cheap hostel rosario center",
    "best hostel rosario",
    "cool raul hostel",
  ],
  alternates: {
    canonical: "https://coolraulhostel.com/en",
    languages: { es: "https://coolraulhostel.com", pt: "https://coolraulhostel.com/pt" },
  },
  openGraph: {
    title: "Cool Raúl Rock'n Hostel | Rosario, Argentina",
    description: "Cultural hostel with recording studio, murals and real rock vibes. Almost 20 years of history. 9.1/10 on Hostelworld.",
    url: "https://coolraulhostel.com/en",
    locale: "en_US",
  },
};

const HIGHLIGHTS = [
  { icon: Star, label: "9.1/10 on Hostelworld" },
  { icon: Coffee, label: "Breakfast included" },
  { icon: Wifi, label: "Free high-speed WiFi" },
  { icon: MapPin, label: "City center — San Lorenzo 1670" },
];

export default function EnglishPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav stub */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" aria-label="Main navigation">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-heading text-text-primary text-lg hover:text-primary-light transition-colors">
            Cool Raúl
          </Link>
          <Link href="/" className="text-text-dim text-sm hover:text-text-primary transition-colors">
            Ver en español →
          </Link>
        </div>
      </nav>

      <main id="main-content" className="flex-1 pt-14">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 text-primary-light text-sm font-semibold mb-6">
            Rosario, Argentina · Since 2006
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl text-text-primary mb-6 leading-tight">
            The cultural hostel<br />
            <span className="text-gradient-rock">Rosario deserves</span>
          </h1>

          <p className="text-text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            A rock &apos;n roll hostel in the heart of Rosario with murals, a recording studio, live music and travelers from all over the world. Breakfast included. No commission if you book directly.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <a
              href={whatsappUrl("Hi! I want to book at Cool Raúl Hostel in Rosario.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book at Cool Raúl Hostel via WhatsApp"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-green-900/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Book via WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary/50 text-text-primary font-semibold px-8 py-4 rounded-2xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Full site (Spanish)
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
            <h2 className="font-heading text-3xl text-text-primary mb-6">About Cool Raúl</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="text-text-muted leading-relaxed mb-4">
                  Cool Raúl Rock&apos;n Hostel has been open since 2006. Almost two decades welcoming backpackers, musicians and travelers from all over the world in the center of Rosario — Argentina&apos;s third largest city, birthplace of Messi and Che Guevara.
                </p>
                <p className="text-text-muted leading-relaxed">
                  We have mixed and female-only dorms, private rooms, a full breakfast every morning, a shared kitchen, terrace with BBQ, bar, karaoke nights and a professional recording studio for guests.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Free airport/bus terminal transfer",
                  "Recording studio & rehearsal room",
                  "Breakfast included every morning",
                  "Lockers in all dorms",
                  "Air conditioning & heating",
                  "24-hour reception",
                  "Terrace with BBQ",
                  "Staff speaks English, Portuguese & Hebrew",
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
              <h2 className="font-heading text-xl text-text-primary mb-2">How to find us</h2>
              <p className="text-text-muted mb-4">
                <strong className="text-text-primary">San Lorenzo 1670</strong>, Rosario, Santa Fe, Argentina.
                We&apos;re 2 km from the bus terminal (free transfer included) and walking distance from the Paraná riverfront and the National Flag Memorial.
              </p>
              <a
                href={CONTACT.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-light hover:text-text-primary text-sm font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                View on Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background/95 py-6 text-center">
        <p className="text-text-dim text-xs">
          © {new Date().getFullYear()} Cool Raúl Rock&apos;n Hostel · San Lorenzo 1670, Rosario, Argentina ·{" "}
          <Link href="/" className="hover:text-text-primary transition-colors">Ver en español</Link>
        </p>
      </footer>
    </div>
  );
}
