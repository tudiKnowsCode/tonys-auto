import { site } from "@/lib/site";
import { services, type Service } from "@/lib/services";
import { brands } from "@/lib/brands";
import type { ServiceFaq } from "@/lib/services";

const BUSINESS_ID = `${site.url}/#business`;

/* Generic JSON-LD renderer. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Real profile URLs (skips the "#" placeholders) for sameAs.
function sameAs(): string[] {
  return [
    site.social.facebook,
    site.social.instagram,
    site.social.google,
    site.reviewPlatforms.google,
    site.reviewPlatforms.carfax,
    site.reviewPlatforms.sureCritic,
  ].filter((u) => u && u !== "#");
}

// Site-wide AutoRepair / LocalBusiness. Rendered once in the root layout.
export function localBusinessSchema(): Record<string, unknown> {
  const links = sameAs();
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": BUSINESS_ID,
    name: site.name,
    description:
      "Independent European auto repair in Manchester, CT since 1979, specializing in Audi, BMW, Mercedes-Benz, Jaguar, Porsche, and Land Rover.",
    url: site.url,
    telephone: site.phoneDisplay,
    email: site.email,
    image: `${site.url}/og.png`,
    logo: `${site.url}/assets/tonys-logo.jpg`,
    foundingDate: String(site.founded),
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Apple Pay, Google Pay",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.mapLinkUrl,
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: "160",
      bestRating: "5",
    },
    knowsAbout: brands.map((b) => b.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.summary,
          url: `${site.url}/services/${s.slug}`,
        },
      })),
    },
    ...(links.length ? { sameAs: links } : {}),
  };
}

// FAQPage — powers FAQ rich results.
export function faqSchema(items: ServiceFaq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// BreadcrumbList — powers breadcrumb rich results.
export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

// Service schema for a service detail page.
export function serviceSchema(service: Service): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.breadcrumb,
    serviceType: service.name,
    description: service.heroSubtitle,
    url: `${site.url}/services/${service.slug}`,
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    provider: {
      "@type": "AutoRepair",
      "@id": BUSINESS_ID,
      name: site.name,
      telephone: site.phoneDisplay,
      url: site.url,
    },
  };
}

// Convenience component for the root layout.
export function StructuredData() {
  return <JsonLd data={localBusinessSchema()} />;
}
