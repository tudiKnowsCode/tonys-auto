import type { ServiceFaq } from "@/lib/services";

/*
  Native <details> accordion. Works without JS (good for SSR / crawlers).
  The .faq-plus rotation is handled in globals.css via details[open].
*/
export function FaqItem({
  q,
  a,
  defaultOpen = false,
}: ServiceFaq & { defaultOpen?: boolean }) {
  return (
    <details open={defaultOpen} className="border-b border-black/10">
      <summary className="flex min-h-[56px] items-center justify-between gap-4 py-5">
        <span className="font-sans text-[15px] font-medium text-ink sm:text-[16px]">
          {q}
        </span>
        <span className="faq-plus flex-none font-mono text-[18px] leading-none text-accent transition-transform duration-150">
          +
        </span>
      </summary>
      <p className="m-0 max-w-[620px] pb-5 font-sans text-[14.5px] leading-[1.65] text-muted">
        {a}
      </p>
    </details>
  );
}

export function FaqList({
  items,
  openFirst = false,
}: {
  items: ServiceFaq[];
  openFirst?: boolean;
}) {
  return (
    <div className="border-t border-black/15">
      {items.map((item, i) => (
        <FaqItem key={item.q} {...item} defaultOpen={openFirst && i === 0} />
      ))}
    </div>
  );
}
