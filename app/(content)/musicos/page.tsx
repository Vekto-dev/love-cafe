import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mic2, Music, Guitar, ChevronDown } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { whatsappUrl } from "@/lib/data/contact";
import { AnimateInView } from "@/components/ui/AnimateInView";

export const metadata: Metadata = {
  title: "Estudio de grabación en Rosario | Cool Raúl Rock'n Hostel",
  description:
    "Estudio de grabación profesional en Rosario desde USD 8/noche de alojamiento incluido. Sala de ensayo, alquiler de instrumentos y ambiente músical en el hostel cultural de la ciudad.",
  keywords: [
    "estudio grabacion rosario",
    "grabar musica rosario",
    "sala ensayo rosario",
    "hostel musicos argentina",
    "grabar barato rosario",
    "alquiler instrumentos rosario",
  ],
  alternates: { canonical: "https://coolraulhostel.com/musicos" },
  openGraph: {
    title: "Estudio de grabación en Rosario | Cool Raúl Rock'n Hostel",
    description:
      "Grabá en Rosario sin gastar una fortuna. Estudio profesional y sala de ensayo en el hostel cultural de la ciudad.",
    url: "https://coolraulhostel.com/musicos",
    images: [{ url: "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1200/v1/propertyimages/9/93936/501.jpg", width: 1200, height: 630, alt: "Cool Raúl Rock'n Hostel — Bar y estudio" }],
  },
};

const studioJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Estudio de grabación Cool Raúl",
  description:
    "Estudio de grabación profesional y sala de ensayo disponible para huéspedes y músicos locales en Rosario, Argentina.",
  provider: {
    "@type": "Hostel",
    name: "Cool Raúl Rock'n Hostel",
  },
  areaServed: {
    "@type": "City",
    name: "Rosario",
  },
  url: "https://coolraulhostel.com/musicos",
};

const STUDIO_SERVICES = [
  {
    icon: Mic2,
    title: "Estudio de grabación profesional",
    desc: "Estudio con equipamiento profesional para grabación de voz, guitarra, bajo y más. Ideal para demos, EPs y singles. Disponible por horas o por jornada completa, con o sin técnico.",
    note: "Consultá tarifas y disponibilidad por WhatsApp antes de llegar.",
  },
  {
    icon: Music,
    title: "Sala de ensayo",
    desc: "Sala equipada para ensayos de banda o práctica individual. Buena acústica, amplificadores disponibles, espacio para batería. Podés ensayar con tu banda o en solitario.",
    note: "Se coordina anticipadamente. Consultá disponibilidad horaria.",
  },
  {
    icon: Guitar,
    title: "Alquiler de instrumentos",
    desc: "Guitarra eléctrica, bajo, teclado y amplificadores disponibles para huéspedes. Si viajás liviano y querás tocar sin cargar equipo, esta es la opción.",
    note: "Disponible para huéspedes del hostel. Consultar stock al momento de reservar.",
  },
];

const FAQ_MUSICOS = [
  {
    q: "¿Qué equipamiento tiene el estudio?",
    a: "El estudio cuenta con equipamiento profesional para grabación de múltiples instrumentos, incluyendo interfaz de audio, micrófonos de distintos patrones y monitoreo. El detalle exacto del equipamiento cambia — consultá por WhatsApp qué tenemos disponible cuando necesitás venir.",
  },
  {
    q: "¿Puedo traer mi propia banda?",
    a: "Sí. La sala de ensayo tiene espacio para banda completa. Para el estudio de grabación también podemos coordinar sesiones con múltiples músicos, aunque dependiendo del equipamiento puede haber limitaciones técnicas. Consultá los detalles de tu proyecto antes de venir.",
  },
  {
    q: "¿Hay técnico disponible?",
    a: "Hay técnico disponible para las sesiones de grabación, con costo adicional. Si sabés operar el equipo vos mismo, también podés usar el estudio de forma autónoma. Acordamos el modo de uso al reservar.",
  },
  {
    q: "¿Cuánto cuesta una sesión de grabación?",
    a: "Las tarifas varían según el tipo de sesión (horas, necesidad de técnico, cantidad de músicos). No publicamos precios fijos porque cada proyecto es diferente. La forma más directa es consultarnos por WhatsApp con los detalles de lo que necesitás.",
  },
  {
    q: "¿Puedo ensayar de noche?",
    a: "El ensayo nocturno tiene limitaciones de horario para no afectar a los demás huéspedes. Los horarios disponibles se coordinan en el momento. Generalmente hay margen hasta las 23hs dependiendo de la ocupación.",
  },
];

export default function MusicosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studioJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Para músicos
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl text-text-primary leading-tight mb-4">
              Venís a Rosario a grabar.{" "}
              <span className="text-gradient-rock">Ya tenés donde quedarte.</span>
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
              Rosario es la ciudad del rock nacional. De acá son Los Redondos, Fito Páez y La Bersuit. En Cool Raúl tenés estudio de grabación, sala de ensayo y alojamiento en el centro. Sin gastar una fortuna.
            </p>
            <a
              href={whatsappUrl("Hola! Soy músico y quiero consultar sobre el estudio de grabación y alojamiento.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar sobre estudio de grabación por WhatsApp"
              className="inline-flex items-center gap-3 mt-8 bg-whatsapp hover:bg-green-400 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Consultar por WhatsApp
            </a>
          </AnimateInView>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Breadcrumbs items={[{ name: "Para músicos", href: "/musicos" }]} />

        {/* Studio services */}
        <AnimateInView className="mt-10">
          <h2 className="font-heading text-3xl text-text-primary mb-6">El espacio musical</h2>
          <div className="space-y-4">
            {STUDIO_SERVICES.map(({ icon: Icon, title, desc, note }) => (
              <div key={title} className="glass-card rounded-2xl p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-text-primary mb-2">{title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-2">{desc}</p>
                  <p className="text-text-dim text-xs italic">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateInView>

        {/* Por qué Rosario */}
        <AnimateInView delay={60} className="mt-14">
          <h2 className="font-heading text-3xl text-text-primary mb-4">Por qué Rosario</h2>
          <div className="prose prose-invert prose-p:text-text-muted prose-p:leading-relaxed prose-strong:text-text-primary max-w-none">
            <p>
              Rosario no es solo la ciudad de Messi. Es la ciudad donde nació el rock nacional argentino. Los Redonditos de Ricota ensayaron acá sus primeros temas. Fito Páez creció en estas calles. La Bersuit Vergarabat se formó acá. Esa historia no es un dato de trivia — vive en los bares, en la escena musical activa y en la forma en que la ciudad entiende la música.
            </p>
            <p>
              La escena actual también es fuerte. Hay bandas emergentes tocando todos los fines de semana en La Quimera, El Loft, Plataforma Lavardén. Venues que programan rock, jazz, folklore y electrónica. Si venís a grabar, podés también tocar en vivo mientras estás.
            </p>
            <p>
              Y el costo es radicalmente menor que en Buenos Aires. Studio time, alojamiento, comida. Todo más accesible. Es la base de operaciones perfecta si querés producir música sin gastar lo que no tenés.
            </p>
          </div>
        </AnimateInView>

        {/* La escena actual */}
        <AnimateInView delay={70} className="mt-14">
          <h2 className="font-heading text-3xl text-text-primary mb-4">La escena actual de Rosario</h2>
          <div className="prose prose-invert prose-p:text-text-muted prose-p:leading-relaxed prose-strong:text-text-primary max-w-none">
            <p>
              Rosario tiene una escena musical activa que va mucho más allá de su historia. Cada fin de semana hay bandas emergentes tocando en vivo en La Quimera, El Loft y Plataforma Lavardén. Géneros que van del rock al jazz, del folklore a la electrónica experimental.
            </p>
            <p>
              <strong>Tocar en vivo mientras grabás</strong> es una posibilidad real. Muchos músicos que pasan por Cool Raúl terminan sumándose a sesiones espontáneas, conociendo músicos locales en el bar o consiguiendo un show de última hora. La ciudad te conecta si estás abierto a eso.
            </p>
            <p>
              El circuito de bares con música en vivo del microcentro está a caminata del hostel. San Lorenzo, la Peatonal y el barrio del Puerto concentran la mayor parte de los venues. El staff te puede dar el dato de qué hay cada noche.
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { venue: "La Quimera", tipo: "Rock / Indie" },
              { venue: "Plataforma Lavardén", tipo: "Teatro y música" },
              { venue: "El Loft Rosario", tipo: "Jazz / Fusión" },
            ].map((v) => (
              <div key={v.venue} className="glass-card rounded-xl p-4">
                <p className="text-text-primary font-semibold text-sm">{v.venue}</p>
                <p className="text-text-dim text-xs mt-0.5">{v.tipo}</p>
              </div>
            ))}
          </div>
        </AnimateInView>

        {/* Paquete músico */}
        <AnimateInView delay={80} className="mt-10">
          <div className="glass-card rounded-3xl p-8 border border-accent/30 glow-amber">
            <h2 className="font-heading text-2xl text-text-primary mb-4">
              Quedarte en Cool Raúl siendo músico
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-5">
              Cuando te hospedás, tenés acceso a todo lo que necesitás para producir sin distracciones:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Desayuno continental incluido — arrancás el día sin gastar",
                "Cocina equipada las 24hs — no dependés de delivery",
                "WiFi de alta velocidad para distribuir y subir material",
                "Lockers seguros para guardar equipo e instrumentos",
                "Acceso al estudio y sala de ensayo con coordinación previa",
                "Barrio en el corazón del microcentro, cerca de todos los venues",
                "Tarifas especiales para estadías largas (7+ noches)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-text-muted text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl("Hola! Soy músico y quiero consultar sobre el estudio de grabación y alojamiento.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar paquete para músicos por WhatsApp"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-whatsapp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Consultar disponibilidad
            </a>
          </div>
        </AnimateInView>

        {/* FAQ */}
        <AnimateInView delay={100} className="mt-14">
          <h2 className="font-heading text-3xl text-text-primary mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQ_MUSICOS.map((item) => (
              <details key={item.q} className="glass-card rounded-2xl group">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset list-none">
                  <span className="text-text-primary font-semibold text-sm">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-text-dim flex-shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="px-6 pb-5 text-text-muted text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </AnimateInView>

        {/* Internal links */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { href: "/rosario/vida-nocturna", label: "Vida nocturna", desc: "Venues donde tocar en Rosario" },
            { href: "/blog/que-hacer-rosario-de-noche", label: "Rosario de noche", desc: "La escena musical activa" },
            { href: "/", label: "Ver el hostel", desc: "Habitaciones, servicios y más" },
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
