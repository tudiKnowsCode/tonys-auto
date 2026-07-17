"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

const navLinkBase =
  "font-sans text-[12px] font-medium uppercase tracking-[0.07em] no-underline transition-colors";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Full nav, including Contact (also available via the standing CTA button).
  const links = nav;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/15 bg-paper">
      <div className="flex items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-none items-center no-underline"
          aria-label={`${site.name} — home`}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/assets/tonys-logo.jpg"
            alt={site.name}
            width={129}
            height={48}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-[22px] lg:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`${navLinkBase} relative ${
                  active ? "text-accent" : "text-label hover:text-accent"
                }`}
              >
                {link.label}
                {/* Active-page underline, pinned to the header's bottom edge */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 -bottom-3 h-[2px] bg-accent transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden flex-none items-center border border-accent-dark bg-accent px-[18px] py-[11px] font-sans text-[12px] font-semibold tracking-[0.04em] text-white no-underline transition-colors hover:bg-accent-dark lg:inline-flex"
        >
          Request Appointment
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-none items-center justify-center border border-black/20 text-ink lg:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-black/10 bg-paper lg:hidden">
          <nav className="flex flex-col px-5 py-2 sm:px-8">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-[48px] items-center border-b border-black/10 pl-3 font-sans text-[14px] font-medium uppercase tracking-[0.06em] no-underline ${
                    active
                      ? "border-l-2 border-l-accent text-accent"
                      : "border-l-2 border-l-transparent text-label"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 mb-3 flex min-h-[48px] items-center justify-center border border-accent-dark bg-accent px-5 font-sans text-[14px] font-semibold tracking-[0.03em] text-white no-underline"
            >
              Request Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
