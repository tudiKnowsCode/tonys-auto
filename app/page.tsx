import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container, CtaButton, Placeholder, TextLink } from "@/components/ui";
import { BrandLogo } from "@/components/brand-logo";
import { TrustBar } from "@/components/trust-bar";
import { CtaBand } from "@/components/cta-band";
import { brands } from "@/lib/brands";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Tony's Imported Auto Service — European Auto Repair in Manchester, CT",
  description:
    "Dealership-level service and repair for Audi, BMW, Mercedes-Benz, Jaguar, Porsche, and Land Rover in Manchester, CT — without the dealership markup. Family owned since 1979.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-ink">
        <Image
          src="/front.png"
          alt="Tony's Imported Auto Service storefront"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient so white text stays readable over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-ink/25" />

        <Container className="relative flex min-h-[440px] flex-col justify-end py-14 sm:min-h-[470px] sm:py-16">
          <div className="max-w-[660px]">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ondark">
              Manchester, Connecticut&nbsp;&nbsp;/&nbsp;&nbsp;Since {site.founded}
            </div>
            <h1 className="m-0 font-serif text-[36px] font-medium leading-[1.08] text-white sm:text-[50px]">
              Service and repair for the world&rsquo;s finest automobiles.
            </h1>
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <CtaButton href="/contact" className="w-full sm:w-auto">
                Request an Appointment
              </CtaButton>
              <CtaButton
                href="/services"
                variant="outline-dark"
                className="w-full sm:w-auto"
              >
                View Services
              </CtaButton>
            </div>
          </div>
        </Container>
      </section>

      {/* BRAND LOGO STRIP */}
      <section className="w-full border-b border-black/10 bg-band">
        <Container className="py-7">
          {/*
            Mobile: label alone on top, then a 2-column grid of logos.
            sm+: label and logos flow inline in one centered row (sm:contents
            dissolves the grid wrapper so the links become flex siblings).
          */}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3.5">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2 sm:mr-2">
              Makes we specialize in
            </span>
            <div className="grid w-full grid-cols-2 gap-3 sm:contents">
              {brands.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="flex items-center justify-center no-underline"
                  aria-label={`${brand.name} service`}
                >
                  <BrandLogo
                    brand={brand}
                    imgClassName="p-2"
                    className="h-[84px] w-full transition-opacity hover:opacity-70 sm:w-[120px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURED INTRO (asymmetric) */}
      <section className="w-full">
        <Container className="grid items-stretch gap-10 py-16 sm:py-[72px] lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <h2 className="m-0 font-serif text-[28px] font-medium leading-[1.18] text-ink sm:text-[34px]">
              Dealership-level work on your import, without the dealership markup.
            </h2>
            <p className="mt-5 font-sans text-[15px] leading-[1.65] text-body">
              Tony&rsquo;s has worked on imported cars in Manchester for more than 45
              years. The same factory diagnostic tools, parts you can trust, and a quote
              you approve before anything gets done. When you bring your car to
              Tony&rsquo;s, you know it will be treated with the respect and care it
              deserves.
            </p>
            <TextLink href="/about" className="mt-6">
              Read our story
            </TextLink>
          </div>
          <div className="relative min-h-[280px] overflow-hidden border border-black/15 lg:min-h-[340px]">
            <Image
              src="/interior-1.jpg"
              alt="Technician servicing a car in the bay at Tony's Imported Auto Service"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="w-full bg-band">
        <Container className="py-14 sm:py-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="m-0 font-serif text-[26px] font-medium text-ink sm:text-[28px]">
              What we do
            </h2>
            <Link
              href="/services"
              className="flex-none border-b border-black/30 pb-0.5 font-sans text-[13px] font-semibold text-muted no-underline hover:text-accent"
            >
              All services
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
            {/* Diagnostics feature card — desktop only. On mobile it appears as
                the first row of the list below (no standalone photo needed). */}
            <Link
              href="/services/diagnostics"
              className="group hidden flex-col border border-black/15 bg-paper no-underline lg:flex"
            >
              <Placeholder
                label="Service photo: tech with diagnostic laptop on bay"
                className="h-[240px] border-0 border-b border-black/15"
              />
              <div className="px-6 py-6">
                <h3 className="m-0 font-serif text-[22px] font-semibold text-ink group-hover:text-accent">
                  Diagnostics
                </h3>
                <p className="mt-2.5 font-sans text-[14px] leading-[1.6] text-muted">
                  Factory-level scan tools to read the codes the parts store can&rsquo;t,
                  then a clear explanation of what it actually needs.
                </p>
              </div>
            </Link>

            {/* Service list. Diagnostics is included here on mobile only. */}
            <div className="flex flex-col border border-black/15 bg-paper">
              {[
                { name: "Diagnostics", desc: "Factory scan tools that find the real cause, not just the code.", slug: "diagnostics" },
                { name: "Oil change", desc: "Manufacturer schedule, correct fluids.", slug: "oil-change" },
                { name: "Brakes", desc: "Pads, rotors, fluid, sensors.", slug: "brakes" },
                { name: "Suspension", desc: "Struts, bushings, control arms.", slug: "suspension" },
                { name: "Tires", desc: "Sold, mounted, and aligned in-house.", slug: "tires" },
              ].map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`border-b border-black/10 px-6 py-[18px] no-underline hover:bg-accent/5 ${
                    s.slug === "diagnostics" ? "lg:hidden" : ""
                  }`}
                >
                  <h3 className="m-0 font-sans text-[15px] font-semibold text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-1 font-sans text-[13px] text-muted-2">{s.desc}</p>
                </Link>
              ))}
              <Link
                href="/services"
                className="mt-auto flex flex-col justify-center gap-1.5 bg-accent px-6 py-5 no-underline transition-colors hover:bg-accent-dark"
              >
                <span className="font-serif text-[16px] font-semibold leading-[1.25] text-white">
                  Don&rsquo;t see what you need?
                </span>
                <span className="font-sans text-[13px] font-semibold text-white">
                  Check out our full services page →
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* REVIEW HIGHLIGHTS */}
      <section className="w-full">
        <Container className="py-16 sm:py-[72px]">
          <div className="mb-7 flex flex-wrap items-center gap-6">
            <h2 className="m-0 font-serif text-[26px] font-medium text-ink sm:text-[28px]">
              What customers say
            </h2>
            <div className="flex items-baseline gap-2 sm:ml-auto">
              <span className="font-serif text-[22px] font-semibold text-ink">
                {site.rating}
              </span>
              <span className="font-sans text-[13px] text-muted-2">
                on Google · {site.reviewCount} reviews
              </span>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-14">
            <Testimonial
              quote="They are kind, informative, and honest people. Always serviced my BMW at the dealer but won't anymore now that I know of Tony's."
              author="Morgan F."
            />
            <Testimonial
              quote="I've brought both of my Mercedes-Benz vehicles to Tony, and each time, the experience has been nothing short of excellent."
              author="Eric O."
            />
          </div>
          <TextLink href="/reviews" className="mt-6">
            Read all reviews
          </TextLink>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <blockquote className="m-0">
      <div className="mb-5 h-0.5 w-[34px] bg-accent" />
      <p className="m-0 font-serif text-[22px] font-normal leading-[1.4] text-[#2b2925] sm:text-[25px]">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
        {author} · Google review
      </div>
    </blockquote>
  );
}
