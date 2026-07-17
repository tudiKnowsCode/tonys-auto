import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { NudgeCallout } from "@/components/nudge-callout";
import { CtaBand } from "@/components/cta-band";
import {
  servicesByCategory,
  type ServiceCategory,
} from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Auto Repair Services",
  description:
    "Auto service and repair in Manchester, CT — maintenance, diagnostics, inspections, engine, suspension, tires, transmission, and APR performance tuning. Every job starts with a written quote.",
  path: "/services",
});

function ServicePanel({ category }: { category: ServiceCategory }) {
  const items = servicesByCategory(category);
  return (
    <div className="flex flex-col border border-black/15 bg-paper">
      <div className="flex items-baseline justify-between border-b border-black/15 bg-surface px-6 py-[18px]">
        <h2 className="m-0 font-serif text-[20px] font-semibold text-ink sm:text-[21px]">
          {category}
        </h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
          {items.length} {items.length === 1 ? "service" : "services"}
        </span>
      </div>
      {items.map((service, i) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className={`block px-6 py-4 no-underline hover:bg-accent/5 ${
            i < items.length - 1 ? "border-b border-black/10" : ""
          }`}
        >
          <div className="font-sans text-[15px] font-semibold text-ink">
            {service.name}
          </div>
          <div className="mt-1 font-sans text-[13px] text-muted-2">
            {service.summary}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Auto service and repair in Manchester, from people who've done it since 1979."
        subtitle="From a routine oil service to a full engine rebuild. Every job comes with a written quote first."
      />

      {/* CATEGORY PANELS */}
      <section className="w-full bg-band">
        <Container className="py-12 sm:py-14">
          <div className="grid items-start gap-[18px] lg:grid-cols-2">
            <div className="flex flex-col gap-[18px]">
              <ServicePanel category="Maintenance & wear" />
              <ServicePanel category="Diagnostics & inspections" />
            </div>
            <ServicePanel category="Repair & performance" />
          </div>
        </Container>
      </section>

      <NudgeCallout
        heading="Don't see your repair? It probably still rolls through our bay."
        body="This is the work we are asked for most, not the limit of what we do. After four decades on all makes and models, very little comes through that we have not seen before. Tell us what yours is doing and we will give you a straight answer on whether it is ours to fix."
      />

      <CtaBand />
    </>
  );
}
