import Link from "next/link";
import { site } from "@/lib/site";

const colLabel =
  "font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-faint";

export function SiteFooter() {
  // Links appear automatically once real profile URLs replace "#" in lib/site.ts.
  const socials = [
    { label: "Facebook", href: site.social.facebook },
    { label: "Instagram", href: site.social.instagram },
    { label: "Google", href: site.social.google },
  ].filter((s) => s.href !== "#");

  return (
    <footer className="w-full bg-ink-dark">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-12 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        {/* Brand */}
        <div>
          <div className="font-serif text-[20px] font-semibold text-white">
            {site.shortName}
          </div>
          <div className="mt-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-faint">
            {site.tagline}
          </div>
          <p className="mt-4 max-w-[240px] font-sans text-[13px] leading-[1.6] text-[#9a958c]">
            Independent service and repair for European imports since {site.founded}.
            Family owned in {site.city}, {site.state}.
          </p>
          {socials.length > 0 && (
            <div className="mt-5 flex gap-5">
              {socials.map((s) => (
                <FooterSocial key={s.label} href={s.href}>
                  {s.label}
                </FooterSocial>
              ))}
            </div>
          )}
        </div>

        {/* Contact */}
        <div>
          <div className={colLabel}>Contact</div>
          <address className="mt-4 not-italic">
            <div className="font-sans text-[13px] leading-[1.7] text-ondark-strong">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </div>
            <div className="mt-3 font-sans text-[13px] leading-[1.9] text-ondark-strong">
              <a href={`tel:${site.phoneTel}`} className="no-underline hover:text-white">
                {site.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="no-underline hover:text-white">
                {site.email}
              </a>
            </div>
          </address>
        </div>

        {/* Hours */}
        <div>
          <div className={colLabel}>Hours</div>
          <div className="mt-4 font-sans text-[13px] leading-[1.9] text-ondark-strong">
            {site.hours.map((h) => (
              <div key={h.days}>
                <span className="inline-block min-w-[92px]">{h.days}</span>
                {h.time}
              </div>
            ))}
          </div>
        </div>

        {/* Location / directions (full map embed lives on /contact) */}
        <div>
          <div className={colLabel}>Location</div>
          <p className="mt-4 max-w-[240px] font-sans text-[13px] leading-[1.6] text-[#9a958c]">
            Free parking on-site, right in front of the bays.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={site.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center border border-white/20 px-4 font-sans text-[12px] font-semibold text-ondark-strong no-underline transition-colors hover:border-white/50 hover:text-white"
            >
              Get directions ↗
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-[40px] items-center border-b border-white/25 font-sans text-[12px] font-medium text-ondark-strong no-underline hover:text-white"
            >
              View map
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 py-4 sm:px-10">
        <div className="font-sans text-[11px] tracking-[0.02em] text-[#9a958c]">
          Independent &amp; family owned · European import specialists since {site.founded}
        </div>
        <div className="flex flex-wrap items-center gap-4 font-sans text-[11px] text-faint">
          <Link href="/privacy" className="no-underline hover:text-ondark-strong">
            Privacy Policy
          </Link>
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="border-b border-white/25 pb-0.5 font-sans text-[12px] font-medium tracking-[0.03em] text-ondark-strong no-underline hover:text-white"
    >
      {children}
    </a>
  );
}
