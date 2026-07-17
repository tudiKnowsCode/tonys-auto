import type { Metadata } from "next";
import { Container, CtaButton } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { FaqList } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/components/structured-data";

export const metadata: Metadata = pageMeta({
  title: "FAQs",
  description:
    "Hours, brands serviced, pricing, warranties, tires, pre-purchase inspections, and how the appointment process works at Tony's Imported Auto Service in Manchester, CT.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero eyebrow="FAQs" title="Questions we hear often" />

      <section className="w-full">
        <Container className="grid items-start gap-10 py-14 sm:py-16 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <FaqList items={faqs} openFirst />

          <aside className="border border-black/20 bg-paper p-7">
            <h2 className="m-0 font-serif text-[20px] font-semibold text-ink">
              Still have a question?
            </h2>
            <p className="mt-2.5 mb-4 font-sans text-[13.5px] leading-[1.55] text-muted-2">
              Call the shop or send the appointment form and we will get back to you.
            </p>
            <CtaButton href="/contact" className="w-full">
              Request an Appointment
            </CtaButton>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-3 block text-center font-sans text-[13px] font-medium text-muted no-underline hover:text-accent"
            >
              {site.phoneDisplay}
            </a>
          </aside>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
