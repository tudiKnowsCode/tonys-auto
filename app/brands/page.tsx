import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { BrandLogo } from "@/components/brand-logo";
import { PageHero } from "@/components/page-hero";
import { NudgeCallout } from "@/components/nudge-callout";
import { CtaBand } from "@/components/cta-band";
import { brands } from "@/lib/brands";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Brands We Service",
  description:
    "Specialist service and repair for Audi, BMW, Mercedes-Benz, Jaguar, Porsche, and Land Rover in Manchester, CT — with the right tools, parts, and decades of hands-on time with each make.",
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="We know these makes the way the dealer does."
        subtitle="The right tools, the right parts, and decades of hands-on time with each one."
      />

      {/* BRAND ROWS */}
      <section className="w-full bg-band">
        <Container className="py-14 sm:py-16">
          <div className="border-t border-black/20">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="grid grid-cols-1 items-center justify-items-center gap-4 border-b border-black/15 px-2 py-6 text-center no-underline hover:bg-accent/5 sm:grid-cols-[170px_200px_1fr] sm:justify-items-start sm:gap-10 sm:text-left"
              >
                <BrandLogo brand={brand} className="h-[104px] w-[160px]" />
                <span className="font-serif text-[22px] font-semibold text-ink sm:text-[24px]">
                  {brand.name}
                </span>
                <span className="font-sans text-[14px] leading-[1.55] text-muted">
                  {brand.models}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <NudgeCallout
        heading="Don't see your make? We still want to help."
        body="These are the imports we specialize in, but they are not the limit of what we work on. We service all makes and models, so if yours is not listed here, tell us what you are driving and we will let you know how we can help."
      />

      <CtaBand />
    </>
  );
}
