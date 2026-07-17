import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { AppointmentForm } from "@/components/appointment-form";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact & Appointments",
  description:
    "Request an appointment at Tony's Imported Auto Service, 313 New State Rd, Manchester, CT. Call (860) 649-6094. Open Monday–Friday, 8 AM–5 PM.",
  path: "/contact",
});

const infoLabel =
  "mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-2";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & appointments"
        title="Request an appointment"
        subtitle="Tell us about your car and we will follow up to confirm a time and an estimate."
      />

      <section className="w-full">
        <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr]">
          {/* FORM */}
          <AppointmentForm />

          {/* INFO */}
          <div>
            <div className="border-y border-black/[0.12] py-[18px]">
              <div className={infoLabel}>Address</div>
              <address className="font-sans text-[14.5px] not-italic leading-[1.6] text-ink">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
            </div>

            <div className="border-b border-black/[0.12] py-[18px]">
              <div className={infoLabel}>Phone &amp; email</div>
              <div className="font-sans text-[14.5px] leading-[1.7] text-ink">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="no-underline hover:text-accent"
                >
                  {site.phoneDisplay}
                </a>
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all no-underline hover:text-accent"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="border-b border-black/[0.12] py-[18px]">
              <div className={infoLabel}>Hours</div>
              <div className="font-sans text-[14.5px] leading-[1.8] text-ink">
                {site.hours.map((h) => (
                  <div key={h.days}>
                    <span className="inline-block min-w-[92px]">{h.days}</span>
                    {h.time}
                  </div>
                ))}
              </div>
            </div>

            <div className="py-[18px]">
              <div className={infoLabel}>Getting here</div>
              <p className="m-0 font-sans text-[13.5px] leading-[1.6] text-muted">
                Free parking on-site in front of the bays. Pull into any open spot and
                come to the office door on the right side of the building.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* MAP */}
      <section className="w-full">
        <Container className="pb-16 sm:pb-16">
          <iframe
            title={`Map to ${site.name}`}
            src={site.mapEmbedUrl}
            className="h-[300px] w-full border border-black/15"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Container>
      </section>
    </>
  );
}
