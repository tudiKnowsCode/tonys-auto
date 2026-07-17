import { site } from "@/lib/site";
import { CtaButton } from "@/components/ui";

/*
  Repeated "Request an Appointment" band. Appears near the foot of most pages.
  Dark surface, red eyebrow, primary CTA to /contact + phone fallback.
*/
export function CtaBand() {
  return (
    <section className="w-full bg-ink">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14">
        <div className="lg:flex-1">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent-ondark">
            Schedule service
          </div>
          <h2 className="m-0 max-w-[640px] font-serif text-[28px] font-medium leading-[1.12] text-white sm:text-[34px]">
            Bring your import to people who actually specialize in it.
          </h2>
          <p className="mt-3.5 max-w-[520px] font-sans text-[14px] leading-[1.55] text-ondark">
            Tell us the make, model, and what it is doing. We give you an honest quote
            before any work starts.
          </p>
        </div>
        <div className="flex flex-none flex-col items-start gap-3">
          <CtaButton href="/contact">Request an Appointment</CtaButton>
          <a
            href={`tel:${site.phoneTel}`}
            className="border-b border-[#d8d4cb]/40 pb-0.5 font-sans text-[13px] font-medium text-[#d8d4cb] no-underline hover:text-white"
          >
            Or call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
