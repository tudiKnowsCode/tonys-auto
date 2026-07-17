import type { Metadata } from "next";
import { Container, Placeholder } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Gallery",
  description:
    "Inside Tony's Imported Auto Service — the shop, the bays, and the work on European imports in Manchester, CT.",
  path: "/gallery",
});

// Masonry items. Heights vary to create the staggered column effect.
const items: { label: string; height: number }[] = [
  { label: "Storefront, full width", height: 200 },
  { label: "Porsche on lift", height: 280 },
  { label: "Engine bay detail", height: 240 },
  { label: "Service bays, wide", height: 240 },
  { label: "Completed brake job", height: 200 },
  { label: "Diagnostic screen", height: 260 },
  { label: "BMW M in for service", height: 230 },
  { label: "Tire / Nokian display", height: 200 },
  { label: "Mercedes detail", height: 270 },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="The shop, the bays, and the work" />

      <section className="w-full">
        <Container className="py-10 sm:py-12">
          {/* CSS multi-column masonry: 1 col mobile, 2 sm, 3 lg */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {items.map((item) => (
              <div key={item.label} className="mb-4 break-inside-avoid">
                <Placeholder label={item.label} style={{ height: item.height }} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
