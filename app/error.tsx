"use client";

import Link from "next/link";
import { useEffect } from "react";
import { site } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error for monitoring; replace with a real logger in production.
    console.error(error);
  }, [error]);

  return (
    <section className="w-full bg-ink">
      <div className="mx-auto flex min-h-[60vh] max-w-[1320px] flex-col justify-center px-6 py-20 sm:px-10 lg:px-14">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ondark">
          Something went wrong
        </div>
        <h1 className="mt-4 max-w-[640px] font-serif text-[34px] font-medium leading-[1.1] text-white sm:text-[44px]">
          We hit an unexpected error.
        </h1>
        <p className="mt-4 max-w-[480px] font-sans text-[15px] leading-[1.6] text-ondark">
          Please try again. If it keeps happening, call the shop at{" "}
          <a
            href={`tel:${site.phoneTel}`}
            className="font-semibold text-white underline decoration-accent underline-offset-2"
          >
            {site.phoneDisplay}
          </a>{" "}
          and we&rsquo;ll help you out.
        </p>
        <div className="mt-7 flex flex-col gap-3.5 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-[46px] items-center justify-center border border-accent-dark bg-accent px-7 font-sans text-[14px] font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-[46px] items-center justify-center border border-white/50 px-7 font-sans text-[14px] font-semibold text-white no-underline transition-colors hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
