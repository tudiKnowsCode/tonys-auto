import { site } from "@/lib/site";
import { Container, CtaButton } from "@/components/ui";

/*
  Reused "Don't see your repair / your make?" nudge. Red left rule, heading,
  body, primary CTA to contact + phone fallback.
*/
export function NudgeCallout({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="w-full">
      <Container className="py-14 sm:py-16">
        <div className="max-w-[780px] border-l-2 border-accent pl-6">
          <h2 className="m-0 font-serif text-[24px] font-medium leading-[1.2] text-ink sm:text-[26px]">
            {heading}
          </h2>
          <p className="mt-3.5 font-sans text-[14.5px] leading-[1.65] text-muted">{body}</p>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <CtaButton href="/contact">Send us a message</CtaButton>
            <a
              href={`tel:${site.phoneTel}`}
              className="border-b border-muted/40 pb-0.5 font-sans text-[13px] font-medium text-muted no-underline hover:text-accent"
            >
              or call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
