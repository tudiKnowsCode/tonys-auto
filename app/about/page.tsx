import Image from "next/image";
import type { Metadata } from "next";
import { Container, Placeholder } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { TrustBar } from "@/components/trust-bar";
import { CtaBand } from "@/components/cta-band";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About the Shop",
  description:
    "Family owned and independent since 1979. The story of Tony's Imported Auto Service in Manchester, CT, and its founder Antonio “Tony” Oliveira.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the shop"
        title="The Manchester auto shop drivers have trusted since 1979."
      />

      {/* STORY */}
      <section className="w-full">
        <Container className="grid items-center gap-10 py-16 sm:py-[72px] lg:grid-cols-2 lg:gap-14">
          <Placeholder
            label="Archival or current photo: the shop on New State Rd"
            className="min-h-[300px] lg:min-h-[380px]"
          />
          <div>
            <h2 className="m-0 font-serif text-[26px] font-medium leading-[1.2] text-ink sm:text-[30px]">
              More than four decades on the same kind of cars.
            </h2>
            <p className="mt-5 font-sans text-[15px] leading-[1.65] text-body">
              Tony opened the doors in 1979 to do one thing well: keep European imports
              running right. The shop is still family owned and still independent. We have
              watched these cars change from carburetors to controller area networks, and
              we kept up with every one of them.
            </p>
            <p className="mt-3.5 font-sans text-[15px] leading-[1.65] text-body">
              Customers stay with us for decades because we tell them the truth about their
              car and charge them fairly for the work.
            </p>
          </div>
        </Container>
      </section>

      {/* FOUNDER DEDICATION */}
      <section className="w-full bg-ink">
        <Container className="py-16 sm:py-[70px]">
          <div className="mx-auto grid max-w-[1000px] items-center gap-10 sm:grid-cols-[280px_1fr] sm:gap-14">
            <div>
              <Image
                src="/assets/antonio-oliveira.png"
                alt={`Antonio "Tony" Oliveira, founder`}
                width={280}
                height={326}
                className="block h-auto w-full max-w-[280px] sm:mx-0 mx-auto"
              />
              <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                Founder, 1979
              </div>
            </div>
            <div>
              <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ondark">
                Where it started
              </div>
              <h2 className="m-0 font-serif text-[28px] font-medium leading-[1.15] text-white sm:text-[32px]">
                It all goes back to Tony.
              </h2>
              <p className="mt-4 font-sans text-[15px] leading-[1.7] text-ondark [text-wrap:pretty]">
                Antonio &ldquo;Tony&rdquo; Oliveira came to Connecticut from Murtosa,
                Portugal, in 1967, and in 1979 opened the doors on New State Road. He built
                the shop the only way he knew how: honest work, done right, for people he
                treated like neighbors.
              </p>
              <p className="mt-3.5 font-sans text-[15px] leading-[1.7] text-ondark [text-wrap:pretty]">
                Through the Porsche and BMW clubs he became a mechanic, sponsor, and friend
                to a generation of Connecticut drivers. That standard is the one we still
                work to. His family runs the shop today, the same way he did.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PHILOSOPHY */}
      <section className="w-full">
        <Container>
          <div className="grid border-y border-black/15 sm:grid-cols-2">
            <div className="border-black/15 py-11 sm:border-r sm:pr-11">
              <h3 className="m-0 font-serif text-[22px] font-semibold text-ink">
                Honest, upfront pricing
              </h3>
              <p className="mt-3 font-sans text-[14.5px] leading-[1.6] text-muted">
                You get a written quote before we touch the car. No surprise add-ons, no
                work you did not approve. If something else turns up, we call you first.
              </p>
            </div>
            <div className="border-t border-black/15 py-11 sm:border-t-0 sm:pl-11">
              <h3 className="m-0 font-serif text-[22px] font-semibold text-ink">
                ASE-certified, factory-trained
              </h3>
              <p className="mt-3 font-sans text-[14.5px] leading-[1.6] text-muted">
                Our technicians hold ASE certifications and we run as a Bosch Service
                center, with the diagnostic equipment these cars actually require.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SHOP PHOTOS */}
      <section className="w-full bg-band">
        <Container className="py-14 sm:py-16">
          <h2 className="mb-6 font-serif text-[24px] font-medium text-ink sm:text-[26px]">
            Inside the shop
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
            <Placeholder
              label="Wide: service bays with cars on lifts"
              className="h-[220px] sm:h-[230px]"
            />
            <Placeholder
              label="Detail: diagnostic equipment"
              className="h-[220px] sm:h-[230px]"
            />
            <Placeholder
              label="Detail: parts / clean workbench"
              className="h-[220px] sm:h-[230px]"
            />
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <section className="w-full">
        <Container className="py-14 sm:py-16">
          <h2 className="mb-6 font-serif text-[24px] font-medium text-ink sm:text-[26px]">
            The team
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Role, years with Tony's",
              "Role, ASE certified",
              "Role",
              "Role",
            ].map((role, i) => (
              <div key={i}>
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-black/15 bg-band">
                  <Image
                    src="/team/placeholder.jpg"
                    alt="Team member portrait — photo coming soon"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 font-sans text-[15px] font-semibold text-ink">Name</div>
                <div className="mt-0.5 font-sans text-[13px] text-muted-2">{role}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TrustBar />
      <CtaBand />
    </>
  );
}
