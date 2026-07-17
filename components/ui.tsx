import Link from "next/link";
import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* Centered content column shared by every page section. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-6 sm:px-10 lg:px-14 ${className}`}>
      {children}
    </div>
  );
}

/* Small mono eyebrow label used above section headings.
   Use onDark on dark surfaces — brand red fails contrast there. */
export function Eyebrow({
  children,
  className = "",
  onDark = false,
}: {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`font-mono text-[11px] font-medium uppercase tracking-[0.2em] ${
        onDark ? "text-accent-ondark" : "text-accent"
      } ${className}`}
    >
      {children}
    </div>
  );
}

type ButtonVariant = "primary" | "outline-dark" | "outline-light";

const buttonBase =
  "inline-flex min-h-[46px] items-center justify-center text-center font-sans text-[14px] font-semibold tracking-[0.02em] no-underline transition-colors";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "border border-accent-dark bg-accent px-7 py-[13px] text-white hover:bg-accent-dark",
  "outline-dark":
    "border border-white/50 px-7 py-[13px] text-white hover:bg-white/10",
  "outline-light":
    "border border-black/25 px-7 py-[13px] text-ink hover:border-ink",
};

/* Primary/secondary CTA rendered as a link (the whole site links to /contact). */
export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${buttonBase} ${buttonVariants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

/* Underlined text link with the red accent rule (e.g. "Read our story"). */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[24px] items-center border-b-2 border-accent pb-[3px] font-sans text-[13px] font-semibold text-ink no-underline hover:text-accent ${className}`}
    >
      {children}
    </Link>
  );
}

/* tel: link styled as a quiet secondary action. */
export function PhoneLink({
  phoneTel,
  className = "",
  children,
}: {
  phoneTel: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`tel:${phoneTel}`}
      className={`inline-flex min-h-[24px] items-center font-sans text-[13px] font-medium no-underline ${className}`}
    >
      {children}
    </a>
  );
}

/*
  Temporary image placeholder — shows the shop logo (public/assets/placeholder.jpg,
  a copy of the logo) centered on white until a real photo is supplied.
  To swap in a real photo, replace this <Placeholder> with a next/image <Image>
  (object-cover) — the `label` describes the intended shot.
  Fills its container; the parent sets the size (height / aspect).
*/
export function Placeholder({
  label,
  className = "",
  ...rest
}: { label: string } & ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden border border-black/15 bg-white ${className}`}
      {...rest}
    >
      <Image
        src="/assets/placeholder.jpg"
        alt={label}
        fill
        sizes="(max-width: 1024px) 100vw, 640px"
        className="object-contain p-6"
      />
    </div>
  );
}
