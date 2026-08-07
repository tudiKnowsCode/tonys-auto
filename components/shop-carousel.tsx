"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type ShopImage = { src: string; alt: string };

/*
  "Inside the shop" gallery.
  - Mobile: a swipeable / tappable carousel with dot indicators.
  - sm and up: the original responsive grid.
*/
export function ShopCarousel({ images }: { images: ShopImage[] }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    const el = trackRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  }

  function goTo(index: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  return (
    <>
      {/* Mobile carousel */}
      <div className="sm:hidden">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          aria-label="Inside the shop photos"
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] w-full shrink-0 snap-center overflow-hidden border border-black/15"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show photo ${i + 1} of ${images.length}`}
              aria-current={i === active ? "true" : undefined}
              className="flex h-6 items-center px-1"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-200 ${
                  i === active ? "w-6 bg-accent" : "w-2 bg-black/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Tablet / desktop grid */}
      <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative h-[220px] overflow-hidden border border-black/15 sm:h-[230px]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
