import { MetadataRoute } from "next";

const BASE = "https://coolraulhostel.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/alojamiento-rosario`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/rosario`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/rosario/que-hacer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/rosario/como-llegar`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/rosario/gastronomia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/rosario/vida-nocturna`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/rosario/cuando-visitar`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/musicos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/trabajo-remoto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/blog/hostel-en-rosario-como-elegir`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog/rosario-para-mochileros`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog/que-hacer-rosario-de-noche`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog/rosario-en-invierno`, lastModified: new Date("2026-03-10"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog/rosario-nomades-digitales`, lastModified: new Date("2026-03-15"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/hostel-rosario-precio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/en`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/pt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}

/*
  ACCIÓN MANUAL REQUERIDA — Google Search Console:

  1. Verificar dominio en https://search.google.com/search-console
     (método recomendado: registro DNS TXT en Cloudflare)

  2. Una vez verificado, enviar el sitemap manualmente:
     Sitemaps > Agregar sitemap > https://coolraulhostel.com/sitemap.xml

  3. Solicitar indexación de cada URL nueva con "Inspeccionar URL":
     - https://coolraulhostel.com/alojamiento-rosario
     - https://coolraulhostel.com/musicos
     - https://coolraulhostel.com/trabajo-remoto
     - https://coolraulhostel.com/rosario/cuando-visitar
     - https://coolraulhostel.com/blog/rosario-en-invierno
     - https://coolraulhostel.com/blog/rosario-nomades-digitales

  4. Monitorear "Cobertura" semanalmente durante el primer mes.
     Las URLs nuevas en un sitio con domain authority bajo
     pueden tardar 1-4 semanas en indexarse orgánicamente.
     La solicitud manual acelera esto a 24-72hs.
*/
