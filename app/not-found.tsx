import { Container, CtaButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="w-full bg-ink">
      <Container className="flex min-h-[60vh] flex-col justify-center py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ondark">
          404
        </div>
        <h1 className="mt-4 max-w-[640px] font-serif text-[34px] font-medium leading-[1.1] text-white sm:text-[44px]">
          We couldn&rsquo;t find that page.
        </h1>
        <p className="mt-4 max-w-[480px] font-sans text-[15px] leading-[1.6] text-ondark">
          The page may have moved. Head back home, or get in touch and we&rsquo;ll point
          you the right way.
        </p>
        <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">
          <CtaButton href="/">Back to home</CtaButton>
          <CtaButton href="/contact" variant="outline-dark">
            Contact us
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
