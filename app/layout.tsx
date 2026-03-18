import type { Metadata } from "next";
import { Poppins, Righteous } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-righteous",
  display: "swap",
});

const OG_IMAGE = "https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1200/v1/propertyimages/9/93936/501.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://coolraulhostel.com"),
  title: {
    default: "Cool Raúl Rock'n Hostel | Hostel Cultural en Rosario, Argentina",
    template: "%s | Cool Raúl Rock'n Hostel",
  },
  description:
    "Hostel cultural en el centro de Rosario con estudio de grabación, murales, música en vivo y la mejor onda. San Lorenzo 1670. Puntuación 9.1/10 en Hostelworld. Reservá directo por WhatsApp.",
  keywords: [
    "hostel rosario",
    "hostel barato rosario",
    "hostel mochilero rosario",
    "hostel centro rosario",
    "alojamiento económico rosario",
    "hostel con música rosario",
    "hostel cultural rosario",
    "cool raul hostel",
    "cool raúl hostel rosario",
    "hostel argentina",
    "backpacker hostel rosario",
    "where to stay rosario argentina",
    "hostel rosario argentina",
    "alojamiento rosario",
    "alojamiento barato rosario",
    "alojamiento centro rosario",
    "donde dormir rosario",
    "hostal rosario argentina",
    "habitacion rosario",
    "rosario hotel economico",
    "nómade digital rosario",
    "estadía larga rosario",
    "musicos rosario alojamiento",
    "estudio grabacion rosario",
    "trabajo remoto rosario",
    "rosario invierno alojamiento",
    "temporada baja rosario",
  ],
  authors: [{ name: "Cool Raúl Rock'n Hostel" }],
  creator: "VEKTO",
  openGraph: {
    title: "Cool Raúl Rock'n Hostel | Rosario, Argentina",
    description:
      "El hostel cultural de Rosario. Estudio de grabación, murales, música en vivo. Casi 20 años de historia. 9.1/10 en Hostelworld.",
    url: "https://coolraulhostel.com",
    siteName: "Cool Raúl Rock'n Hostel",
    locale: "es_AR",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Cool Raúl Rock'n Hostel - Bar y ambiente musical" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cool Raúl Rock'n Hostel | Rosario",
    description: "El hostel cultural de Rosario. Música, murales y casi 20 años de historia.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://coolraulhostel.com" },
  category: "travel",
};

const hostelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hostel",
  name: "Cool Raúl Rock'n Hostel",
  alternateName: "Cool Raul Rock and Hostel",
  description:
    "Hostel cultural en el centro de Rosario con estudio de grabación, murales y música en vivo.",
  url: "https://coolraulhostel.com",
  telephone: "+5493416771443",
  address: {
    "@type": "PostalAddress",
    streetAddress: "San Lorenzo 1670",
    addressLocality: "Rosario",
    addressRegion: "Santa Fe",
    postalCode: "S2000ART",
    addressCountry: "AR",
  },
  geo: { "@type": "GeoCoordinates", latitude: -32.9468, longitude: -60.6393 },
  image: OG_IMAGE,
  priceRange: "$",
  starRating: { "@type": "Rating", ratingValue: "9.1", bestRating: "10", worstRating: "1" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.0",
    reviewCount: "308",
    bestRating: "5",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Desayuno incluido", value: true },
    { "@type": "LocationFeatureSpecification", name: "Aire acondicionado", value: true },
    { "@type": "LocationFeatureSpecification", name: "Estudio de grabación", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cocina compartida", value: true },
    { "@type": "LocationFeatureSpecification", name: "Recepción 24 horas", value: true },
  ],
  checkinTime: "16:00",
  checkoutTime: "11:00",
  availableLanguage: ["es", "en", "pt", "he", "da"],
  sameAs: [
    "https://www.instagram.com/coolraulrockandhostel/",
    "https://www.facebook.com/CoolRaulHostelRock/",
    "https://www.booking.com/hotel/ar/cool-raul-rock-hostel.es.html",
    "https://www.hostelworld.com/es/albergues/p/93936/cool-raul-rock-n-hostel/",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿A qué hora es el check-in y check-out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El check-in es a partir de las 16:00 hs y el check-out hasta las 11:00 hs.",
      },
    },
    {
      "@type": "Question",
      name: "¿El desayuno está incluido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el desayuno continental está incluido en todas las estadías.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo usar el estudio de grabación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, tenemos estudio de grabación profesional y sala de ensayo disponibles para huéspedes. Consultá disponibilidad por WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tienen lockers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, los dormitorios compartidos cuentan con lockers individuales para guardar tus pertenencias.",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} ${righteous.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="https://a.hwstatic.com/image/upload/f_auto,q_auto,w_1920/v1/propertyimages/9/93936/501.jpg"
        />
        <link rel="alternate" hrefLang="es" href="https://coolraulhostel.com" />
        <link rel="alternate" hrefLang="en" href="https://coolraulhostel.com/en" />
        <link rel="alternate" hrefLang="pt" href="https://coolraulhostel.com/pt" />
        <link rel="alternate" hrefLang="x-default" href="https://coolraulhostel.com" />
        <link rel="icon" href="/icon" sizes="32x32" />
        <link rel="icon" href="/icon" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hostelJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Estudio de grabación Cool Raúl",
              description:
                "Estudio de grabación profesional y sala de ensayo disponible para huéspedes y músicos locales en Rosario, Argentina.",
              provider: { "@type": "Hostel", name: "Cool Raúl Rock'n Hostel" },
              areaServed: { "@type": "City", name: "Rosario" },
              url: "https://coolraulhostel.com/musicos",
            }),
          }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
