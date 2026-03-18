import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog | Tips de viaje y guías de Rosario",
  description:
    "Artículos y guías para viajeros que visitan Rosario, Argentina. Consejos de alojamiento, presupuesto, vida nocturna y todo lo que necesitás saber.",
  keywords: ["blog viaje rosario", "guías rosario argentina", "tips mochileros rosario"],
  alternates: { canonical: "https://coolraulhostel.com/blog" },
  openGraph: {
    title: "Blog de Cool Raúl | Tips y guías de Rosario",
    description: "Artículos sobre viajes, alojamiento y qué hacer en Rosario, Argentina.",
    url: "https://coolraulhostel.com/blog",
  },
};

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

      <header className="mb-12">
        <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
          Blog de viajes
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-4">
          Tips y guías para viajeros
        </h1>
        <p className="text-text-muted text-lg max-w-2xl">
          Artículos escritos desde adentro de Rosario. Sin sugarcoating, con datos reales y recomendaciones de gente que vive la ciudad.
        </p>
      </header>

      <div className="space-y-6">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="glass-card rounded-2xl p-7 hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 group">
            <Link
              href={`/blog/${post.slug}`}
              className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs text-text-dim mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.readingTime} min de lectura
                </span>
              </div>

              <h2 className="font-heading text-xl text-text-primary mb-3 group-hover:text-primary-light transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{post.description}</p>

              <span className="text-primary-light text-sm font-semibold group-hover:underline">
                Leer artículo →
              </span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 glass-card rounded-2xl p-6 text-center">
        <p className="text-text-muted text-sm">
          ¿Tenés alguna pregunta sobre Rosario que no encontraste acá?{" "}
          <a
            href="https://wa.me/5493416771443"
            target="_blank"
            rel="noopener noreferrer"
            className="text-whatsapp hover:text-green-400 font-semibold transition-colors duration-200"
          >
            Escribinos por WhatsApp
          </a>
          {" "}y te respondemos al instante.
        </p>
      </div>
    </div>
  );
}
