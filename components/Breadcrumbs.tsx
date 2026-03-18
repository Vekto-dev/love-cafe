import Link from "next/link";
import { ChevronRight } from "lucide-react";

const BASE = "https://coolraulhostel.com";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Cool Raúl Hostel", item: BASE },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${BASE}${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-1.5 text-sm text-text-dim flex-wrap">
          <li>
            <Link href="/" className="hover:text-text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded">
              Cool Raúl Hostel
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-text-muted">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
