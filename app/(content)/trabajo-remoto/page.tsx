import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Wifi, Utensils, Lock, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappUrl } from "@/lib/data/contact";
import { AnimateInView } from "@/components/ui/AnimateInView";

export const metadata: Metadata = {
  title: "Hostel para nómades digitales en Rosario | Cool Raúl",
  description:
    "WiFi de alta velocidad, áreas de trabajo, cocina equipada y estadías largas con descuento. Cool Raúl es la base ideal para trabajar en remoto en Rosario.",
  keywords: [
    "nomade digital rosario",
    "trabajo remoto rosario",
    "hostel coworking rosario",
    "hostel wifi rosario",
    "estadía larga rosario",
    "vivir en rosario argentina",
  ],
  alternates: { canonical: "https://coolraulhostel.com/trabajo-remoto" },
  openGraph: {
    title: "Hostel para nómades digitales en Rosario | Cool Raúl",
    description:
      "Base ideal para trabajar en remoto en Rosario. WiFi rápido, cocina equipada, estadías largas con descuento.",
    url: "https://coolraulhostel.com/trabajo-remoto",
    images: [{ url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1200/v1/propertyimages/9/93936/501.jpg", width: 1200, height: 630, alt: "Cool Raúl Rock'n Hostel" }],
  },
};

const WORK_FEATURES = [
  {
    icon: Wifi,
    title: "WiFi de alta velocidad",
    desc: "Conexión estable en todas las áreas del hostel. Apta para videoconferencias, subida de archivos y trabajo intensivo. Funciona en dormitorios, áreas comunes y terraza.",
  },
  {
    icon: Utensils,
    title: "Cocina equipada 24hs",
    desc: "Cocinarte aunque sea una vez al día te ahorra USD 10-15. Heladera, hornallas, microondas, utensilios. Sin depender de delivery ni gastar en cada comida.",
  },
  {
    icon: Lock,
    title: "Lockers para tu equipo",
    desc: "Lockers individuales en los dormitorios para guardar notebook, cámara y todo tu equipo de trabajo. Cerradura con llave, seguro y accesible cuando lo necesitás.",
  },
  {
    icon: Clock,
    title: "Recepción 24 horas",
    desc: "Llegás cuando podés. Sin horarios de check-in rígidos. Si tu vuelo llega a las 2am o tu reunión termina tarde, no hay problema.",
  },
];

const TESTIMONIALS = [
  {
    text: "Me quedé dos semanas trabajando desde acá. El WiFi fue estable todo el tiempo, la cocina me ahorró una fortuna en comida y el ambiente del hostel me ayudó a desconectar al final del día.",
    name: "Viajera verificada",
    country: "Brasil",
    platform: "Booking.com",
  },
  {
    text: "Vine por tres días y me quedé tres semanas. Rosario es increíblemente barata para quien cobra en euros. El hostel tiene todo lo que necesitás para trabajar cómodo.",
    name: "Viajero verificado",
    country: "España",
    platform: "Hostelworld",
  },
];

const STAY_OPTIONS = [
  {
    duration: "7 noches",
    desc: "Ideal para conocer la ciudad mientras trabajás. Tarifa especial disponible.",
    cta: "Consultar tarifa semanal",
  },
  {
    duration: "14 noches",
    desc: "La estancia más popular entre trabajadores remotos. Tiempo suficiente para instalarse.",
    cta: "Consultar tarifa quincenal",
  },
  {
    duration: "30 noches",
    desc: "Para quienes quieren vivir Rosario antes de decidir si alquilar. El precio más bajo del año.",
    cta: "Consultar tarifa mensual",
  },
];

export default function TrabajoRemotoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
              Nómades digitales
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl text-text-primary leading-tight mb-4">
              Trabajás desde donde querés.{" "}
              <span className="text-gradient-purple">Elegiste Rosario. Bien.</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
              Rosario tiene todo lo que necesita un nómade digital: ciudad universitaria, buena gastronomía, transporte público, costo de vida accesible y una calidad de vida que Buenos Aires no puede igualar al mismo precio.
            </p>
            <a
              href={whatsappUrl("Hola! Me interesa quedarme trabajando en remoto. ¿Tienen disponibilidad para estadía larga?")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar disponibilidad para estadía larga por WhatsApp"
              className="inline-flex items-center gap-3 mt-8 bg-whatsapp hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Consultar disponibilidad
            </a>
          </AnimateInView>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Breadcrumbs items={[{ name: "Trabajo remoto", href: "/trabajo-remoto" }]} />

        {/* Work features */}
        <AnimateInView className="mt-10">
          <h2 className="font-heading text-3xl text-text-primary mb-6">Lo que necesitás para trabajar</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {WORK_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary-light" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-text-primary font-semibold text-sm mb-1">{title}</p>
                  <p className="text-text-muted text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateInView>

        {/* Rosario como destino nómade */}
        <AnimateInView delay={60} className="mt-14">
          <h2 className="font-heading text-3xl text-text-primary mb-4">Rosario como destino nómade</h2>
          <div className="prose prose-invert prose-p:text-text-muted prose-p:leading-relaxed prose-strong:text-text-primary max-w-none">
            <p>
              Para quien cobra en dólares o euros, Rosario es uno de los destinos más convenientes de Sudamérica. El tipo de cambio favorable convierte los gastos en ARS en cifras muy bajas en divisa extranjera.
            </p>
            <p>
              <strong>Costo de vida estimado:</strong> un nómade que se cocina parcialmente, usa transporte público y sale tres o cuatro veces por semana puede vivir cómodo en Rosario por USD 600–900 por mes. Eso incluye alojamiento, comida, transporte y ocio.
            </p>
            <p>
              La ciudad tiene universidad pública grande, lo que significa mucho movimiento joven, cafeterías para trabajar, librerías, vida cultural activa. No es una ciudad turística — es una ciudad de gente que vive acá. Y eso se nota en la calidad de las interacciones.
            </p>
            <p>
              El transporte público es bueno: colectivos a centavos en dólares y el sistema de bicicletas Mi Bici Tu Bici prácticamente gratuito para viajes cortos. El microcentro es caminable para la mayoría de las cosas que necesitás.
            </p>
          </div>
        </AnimateInView>

        {/* Estadías largas */}
        <AnimateInView delay={70} className="mt-14">
          <h2 className="font-heading text-3xl text-text-primary mb-3">Estadías largas con descuento</h2>
          <p className="text-text-muted text-sm mb-6">
            No publicamos precios fijos porque varían según temporada y disponibilidad. Lo mejor es consultar directamente — siempre hay tarifa mejor que la noche a noche.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {STAY_OPTIONS.map((opt) => (
              <div key={opt.duration} className="glass-card rounded-2xl p-5 flex flex-col">
                <p className="font-heading text-2xl text-accent mb-1">{opt.duration}</p>
                <p className="text-text-muted text-sm leading-relaxed flex-1 mb-4">{opt.desc}</p>
                <a
                  href={whatsappUrl(`Hola! Me interesa quedarme trabajando en remoto. ¿Tienen disponibilidad para estadía larga?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar tarifa para ${opt.duration} por WhatsApp`}
                  className="text-primary-light hover:text-text-primary text-xs font-semibold transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  {opt.cta} →
                </a>
              </div>
            ))}
          </div>
        </AnimateInView>

        {/* Testimonios */}
        <AnimateInView delay={80} className="mt-14">
          <h2 className="font-heading text-3xl text-text-primary mb-6">Lo que dicen los que se quedaron</h2>
          <div className="space-y-4">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="glass-card rounded-2xl p-6">
                <p className="text-text-muted text-sm leading-relaxed italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <footer className="flex items-center gap-2">
                  <span className="text-text-primary text-sm font-semibold">{t.name}</span>
                  <span className="text-text-dim text-xs">· {t.country}</span>
                  <span className="text-text-dim text-xs">· {t.platform}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </AnimateInView>

        {/* CTA */}
        <AnimateInView delay={100} className="mt-10 glass-card rounded-3xl p-8 text-center glow-purple">
          <h2 className="font-heading text-2xl text-text-primary mb-3">
            ¿Cuánto tiempo te quedás?
          </h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto text-sm">
            Consultanos disponibilidad y tarifas para estadía larga. Respondemos rápido y adaptamos el precio al tiempo que necesitás.
          </p>
          <a
            href={whatsappUrl("Hola! Me interesa quedarme trabajando en remoto. ¿Tienen disponibilidad para estadía larga?")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar estadía larga para trabajo remoto por WhatsApp"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Consultar por WhatsApp
          </a>
        </AnimateInView>

        {/* Internal links */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { href: "/blog/rosario-nomades-digitales", label: "Guía para nómades", desc: "Rosario en detalle para trabajadores remotos" },
            { href: "/rosario/cuando-visitar", label: "Cuándo venir", desc: "La mejor época para trabajar desde acá" },
            { href: "/", label: "Ver el hostel", desc: "Habitaciones, servicios y precios" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="glass-card rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group block focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <p className="text-text-primary font-semibold text-sm group-hover:text-primary-light transition-colors">{link.label}</p>
              <p className="text-text-dim text-xs mt-1">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
