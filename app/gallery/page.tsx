import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Gallery",
  description:
    "Inside Tony's Imported Auto Service — the shop, the bays, and the work on European imports in Manchester, CT.",
  path: "/gallery",
});

type GalleryItem = { src: string; width: number; height: number; alt: string };

// Real shop photos. Natural width/height drive the masonry layout.
const items: GalleryItem[] = [
  { src: "/gallery/gallery-01.jpg", width: 1000, height: 668, alt: "A Porsche 911 Turbo outside Tony's, a Bosch Service center" },
  { src: "/gallery/gallery-02.jpg", width: 562, height: 1000, alt: "An Audi R8 at Tony's Imported Auto Service" },
  { src: "/gallery/gallery-03.jpg", width: 1000, height: 750, alt: "Welding repair under a car on the lift" },
  { src: "/gallery/gallery-04.jpg", width: 747, height: 1000, alt: "A Porsche engine out of the car for major service" },
  { src: "/gallery/gallery-05.jpg", width: 1000, height: 751, alt: "Technicians servicing a car's front end in the bay" },
  { src: "/gallery/gallery-06.jpg", width: 562, height: 1000, alt: "A transmission disassembled for a rebuild" },
  { src: "/gallery/gallery-07.jpg", width: 1000, height: 750, alt: "An Audi S6 in the service bay" },
  { src: "/gallery/gallery-08.jpg", width: 980, height: 450, alt: "A BMW Performance big brake kit" },
  { src: "/gallery/gallery-09.jpg", width: 1000, height: 750, alt: "Rebuilding an engine at the shop" },
  { src: "/gallery/gallery-10.jpg", width: 751, height: 1000, alt: "Suspension and brake work in progress" },
  { src: "/gallery/gallery-11.jpg", width: 1000, height: 750, alt: "A Mercedes-Benz wheel and brakes up on the lift" },
  { src: "/gallery/gallery-12.jpg", width: 1000, height: 562, alt: "Engine timing service in progress" },
];

// Distribute items into `n` columns, always adding to the shortest column, so
// the columns end at roughly the same height (no trailing empty space).
function balanceColumns(list: GalleryItem[], n: number): GalleryItem[][] {
  const cols: GalleryItem[][] = Array.from({ length: n }, () => []);
  const heights = new Array(n).fill(0);
  for (const item of list) {
    let shortest = 0;
    for (let i = 1; i < n; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    cols[shortest].push(item);
    heights[shortest] += item.height / item.width; // relative height (equal widths)
  }
  return cols;
}

function Photo({ item }: { item: GalleryItem }) {
  return (
    <div className="overflow-hidden border border-black/15">
      <Image
        src={item.src}
        width={item.width}
        height={item.height}
        alt={item.alt}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="block h-auto w-full"
      />
    </div>
  );
}

function Columns({ cols }: { cols: GalleryItem[][] }) {
  return (
    <div className="flex gap-4">
      {cols.map((col, i) => (
        <div key={i} className="flex flex-1 flex-col gap-4">
          {col.map((item) => (
            <Photo key={item.src} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  const twoCols = balanceColumns(items, 2);
  const threeCols = balanceColumns(items, 3);

  return (
    <>
      <PageHero eyebrow="Gallery" title="The shop, the bays, and the work" />

      <section className="w-full">
        <Container className="py-10 sm:py-12">
          {/* Mobile: single column, original order */}
          <div className="flex flex-col gap-4 sm:hidden">
            {items.map((item) => (
              <Photo key={item.src} item={item} />
            ))}
          </div>

          {/* Tablet: 2 balanced columns */}
          <div className="hidden sm:block lg:hidden">
            <Columns cols={twoCols} />
          </div>

          {/* Desktop: 3 balanced columns */}
          <div className="hidden lg:block">
            <Columns cols={threeCols} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
