import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Reviews",
  description:
    "Rated 4.6 on Google with 160+ reviews across Google, Carfax, and SureCritic. See what Manchester, CT drivers say about Tony's Imported Auto Service.",
  path: "/reviews",
});

// Real, verbatim Google reviews. Add more here as they come in.
const testimonials: { quote: string; author: string; make?: string }[] = [
  {
    quote:
      "I've brought both of my Mercedes-Benz vehicles to Tony, and each time, the experience has been nothing short of excellent. You can tell that Tony and his team are highly knowledgeable, honest, and genuinely passionate about what they do.",
    author: "Eric O.",
    make: "Mercedes-Benz",
  },
  {
    quote:
      "My 2013 Jaguar XJL engine was blown and they replaced it and it purrs like a kitten. They stayed in communication with me through the entire process, making sure everything was exactly the way it was supposed to be. 100% recommend them.",
    author: "Brian G.",
    make: "Jaguar",
  },
  {
    quote:
      "They are kind, informative, and honest people. Always serviced my BMW at the dealer but won't anymore now that I know of Tony's. Plus good pricing compared to local places.",
    author: "Morgan F.",
    make: "BMW",
  },
  {
    quote:
      "Needed a wheel bearing replaced on my Audi S5. They worked with my schedule and got me booked right away. Very professional and thorough with their craft. Definitely would recommend.",
    author: "Luis A.",
    make: "Audi",
  },
  {
    quote:
      "These guys got my GTI fixed in one day on super short notice after my water pump went. Great work and a fair price. 100% recommended.",
    author: "Giovanni S.",
    make: "Volkswagen",
  },
  {
    quote:
      "Brought my car here after getting an inspection done and quote at a chain auto store. They checked it out themselves and were able to save me a bunch of money. My car runs smoother than it has in a long time.",
    author: "Daniel",
  },
];

// Buttons appear automatically once real profile URLs replace "#" in lib/site.ts.
const platforms = [
  { label: "Google", href: site.reviewPlatforms.google },
  { label: "Carfax", href: site.reviewPlatforms.carfax },
  { label: "SureCritic", href: site.reviewPlatforms.sureCritic },
].filter((p) => p.href !== "#");

export default function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="Rated by the people who keep coming back." />

      {/* AGGREGATE RATING */}
      <section className="w-full border-b border-black/15">
        <Container className="flex flex-wrap items-center gap-4 py-7">
          <span className="font-serif text-[17px] text-ink">
            <strong className="font-semibold">{site.rating}</strong> on Google
          </span>
          <span className="font-sans text-[13px] text-muted-2 sm:ml-auto">
            {site.reviewCount} reviews across Google, Carfax &amp; SureCritic
          </span>
        </Container>
      </section>

      {/* TESTIMONIALS + LINKS OUT */}
      <section className="w-full bg-band">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-11 sm:grid-cols-2 sm:gap-x-14">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="m-0">
                <div className="mb-4 h-0.5 w-[34px] bg-accent" />
                <p className="m-0 font-serif text-[21px] font-normal leading-[1.45] text-[#2b2925] sm:text-[23px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                  <span>{t.author} · Google review</span>
                  {t.make && (
                    <span className="text-muted-2">
                      <span className="mr-2 text-accent">·</span>
                      {t.make}
                    </span>
                  )}
                </div>
              </blockquote>
            ))}
          </div>

          {platforms.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-3.5">
              <span className="font-sans text-[13px] text-muted-2">Read more on:</span>
              {platforms.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black/25 px-4 py-2.5 font-sans text-[13px] font-semibold text-ink no-underline hover:border-accent hover:text-accent"
                >
                  {p.label} ↗
                </a>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
