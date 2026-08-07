import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Tony's Imported Auto Service in Manchester, CT collects, uses, and protects the information you submit through this website.",
  path: "/privacy",
});

const UPDATED = "August 5, 2026";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-9">
      <h2 className="font-serif text-[22px] font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 font-sans text-[15px] leading-[1.7] text-body">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        subtitle={`How we handle the information you share with us. Last updated ${UPDATED}.`}
      />

      <section className="w-full">
        <Container className="py-14 sm:py-16">
          <div className="max-w-[760px]">
            <p className="font-sans text-[15px] leading-[1.7] text-body">
              This policy explains what information {site.name} (&ldquo;we,&rdquo;
              &ldquo;us&rdquo;) collects through this website, how we use it, and the
              choices you have. It applies only to this website.
            </p>

            <Section title="Information we collect">
              <p>
                We only collect the information you choose to give us. When you submit the
                appointment request form, we collect your name, phone number, email
                address, vehicle details (make, model, year), and any message you include.
              </p>
              <p>
                We do not use advertising or analytics tracking cookies on this site, and
                we do not build profiles of visitors.
              </p>
            </Section>

            <Section title="How we use it">
              <p>
                We use the information you submit only to respond to your request —
                scheduling service, preparing an estimate, and following up about your
                vehicle. We do not sell, rent, or trade your information.
              </p>
            </Section>

            <Section title="Third-party services">
              <p>
                Form submissions are delivered to our email inbox through a third-party
                form-processing service (Web3Forms). Our Contact page also displays an
                embedded Google Map; Google may collect data in accordance with its own
                privacy policy when that map loads.
              </p>
            </Section>

            <Section title="Data retention">
              <p>
                We keep appointment requests and related correspondence only as long as
                needed to serve you and for our normal business records, then dispose of
                them.
              </p>
            </Section>

            <Section title="Your choices">
              <p>
                You can ask us what information we have about you, or ask us to correct or
                delete it, by calling{" "}
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-medium text-ink underline decoration-accent underline-offset-2"
                >
                  {site.phoneDisplay}
                </a>{" "}
                or emailing{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-ink underline decoration-accent underline-offset-2"
                >
                  {site.email}
                </a>
                .
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                {site.name}
                <br />
                {site.address.street}, {site.address.city}, {site.address.region}{" "}
                {site.address.postalCode}
                <br />
                {site.phoneDisplay} · {site.email}
              </p>
            </Section>

            <p className="mt-9 border-t border-black/10 pt-6 font-sans text-[13px] leading-[1.6] text-muted-2">
              We may update this policy from time to time. Changes will be posted on this
              page with a new &ldquo;last updated&rdquo; date.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
