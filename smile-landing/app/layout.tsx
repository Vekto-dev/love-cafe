import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smiletiendaimp.com.ar"),
  title: {
    default: "Smile | Relojes, lentes y accesorios premium en Argentina",
    template: "%s | Smile",
  },
  description:
    "Tienda online de relojes, lentes y accesorios premium en Argentina. Descubre modelos seleccionados de Invicta, Ray-Ban y Tommy Hilfiger.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://smiletiendaimp.com.ar",
    siteName: "Smile",
    title: "Smile | Relojes, lentes y accesorios premium en Argentina",
    description:
      "Tienda online de relojes, lentes y accesorios premium en Argentina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile | Relojes, lentes y accesorios premium en Argentina",
    description:
      "Tienda online de relojes, lentes y accesorios premium en Argentina.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}