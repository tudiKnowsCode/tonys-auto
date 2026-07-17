import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container, CtaButton } from "@/components/ui";
import { FaqList } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import {
  JsonLd,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
} from "@/components/structured-data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.breadcrumb,
    description: service.heroSubtitle,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.breadcrumb, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      {/* HERO */}
      <section className="w-full bg-ink">
        <Container className="flex min-h-[340px] flex-col justify-end py-14 sm:min-h-[400px] sm:py-16">
          <nav className="mb-4 font-sans text-[12px] text-faint" aria-label="Breadcrumb">
            <Link href="/services" className="text-ondark no-underline hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-accent-ondark">{service.breadcrumb}</span>
          </nav>
          <h1 className="m-0 max-w-[680px] font-serif text-[34px] font-medium leading-[1.04] text-white sm:text-[48px]">
            {service.heroTitle}
          </h1>
          <p className="mt-4 max-w-[560px] font-sans text-[15px] leading-[1.6] text-ondark">
            {service.heroSubtitle}
          </p>
        </Container>
      </section>

      {/* BODY INTRO */}
      <section className="w-full">
        <Container className="py-16 sm:py-[72px]">
          <div className="mx-auto max-w-[840px] text-center">
            <p className="m-0 font-serif text-[24px] font-normal leading-[1.32] text-ink sm:text-[30px] [text-wrap:pretty]">
              {service.lead}
            </p>
            <p className="mx-auto mt-5 max-w-[620px] font-sans text-[15px] leading-[1.75] text-body [text-wrap:pretty]">
              {service.body}
            </p>
          </div>
        </Container>
      </section>

      {/* WHAT THE JOB CAN INVOLVE */}
      <section className="w-full border-t border-black/10 bg-band">
        <Container className="py-14 sm:py-16">
          <div className="mx-auto mb-9 max-w-[620px] text-center">
            <h2 className="m-0 font-serif text-[25px] font-semibold text-ink sm:text-[27px]">
              What the job can involve
            </h2>
            <p className="mt-2.5 font-sans text-[13.5px] italic text-muted-2">
              Not every car needs every item. Scope depends on the vehicle and its
              condition.
            </p>
          </div>
          <div className="mx-auto grid max-w-[840px] border-t border-black/20 sm:grid-cols-2">
            {service.involves.map((item, i) => {
              const isLeftCol = i % 2 === 0;
              const isLastRow = i >= service.involves.length - 2;
              const isLastOverall = i === service.involves.length - 1;
              return (
                <div
                  key={item.title}
                  className={[
                    "border-black/[0.12] py-6",
                    isLeftCol ? "sm:border-r sm:pr-9" : "sm:pl-9",
                    // Mobile (1 col): divider under every item but the last.
                    isLastOverall ? "" : "border-b",
                    // Desktop (2 col): no divider under the last row.
                    isLastRow ? "sm:border-b-0" : "",
                  ].join(" ")}
                >
                  <div className="font-serif text-[19px] font-semibold text-ink">
                    {item.title}
                  </div>
                  <p className="mt-2 font-sans text-[13.5px] leading-[1.6] text-muted">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CALLOUT */}
      <section className="w-full bg-ink">
        <Container className="py-16 sm:py-[70px]">
          <p className="mx-auto max-w-[840px] text-center font-serif text-[24px] font-normal leading-[1.4] text-white sm:text-[27px] [text-wrap:pretty]">
            {service.callout}
          </p>
        </Container>
      </section>

      {/* GET A QUOTE */}
      <section className="w-full">
        <Container className="py-16 text-center sm:py-[66px]">
          <h2 className="m-0 font-serif text-[26px] font-semibold text-ink sm:text-[28px]">
            {service.quoteHeading}
          </h2>
          <p className="mx-auto mt-3.5 max-w-[520px] font-sans text-[15px] leading-[1.6] text-muted">
            {service.quoteBody}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
            <CtaButton href="/contact">Request an Appointment</CtaButton>
            <a
              href={`tel:${site.phoneTel}`}
              className="border-b border-muted/40 pb-0.5 font-sans text-[14px] font-medium text-muted no-underline hover:text-accent"
            >
              or call {site.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="w-full">
        <Container className="pb-16 sm:pb-[72px]">
          <div className="mx-auto max-w-[800px]">
            <h2 className="mb-4 text-center font-serif text-[24px] font-semibold text-ink">
              Common questions
            </h2>
            <FaqList items={service.faqs} />
            <div className="mt-5 text-center">
              <Link
                href="/faqs"
                className="inline-flex items-center border-b-2 border-accent pb-[3px] font-sans text-[13px] font-semibold text-ink no-underline hover:text-accent"
              >
                See all FAQs
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
