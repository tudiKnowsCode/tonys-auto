"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

// Web3Forms access key. Get one free by entering Tonysimportedauto@gmail.com at
// https://web3forms.com — submissions are then emailed to that inbox.
// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local (and in Vercel).
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error";

const labelClass =
  "mb-[7px] block font-sans text-[12px] font-semibold text-label";
const fieldClass =
  "h-[46px] w-full border border-black/25 bg-white px-3.5 font-sans text-[14px] text-ink outline-none focus:border-accent";

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Native validation (required, email, etc.) before we do anything.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append(
      "subject",
      `New appointment request — ${formData.get("name") || "website"}`,
    );
    formData.append("from_name", `${site.name} website`);

    try {
      if (!ACCESS_KEY) {
        throw new Error(
          "The form isn't connected yet. Add your Web3Forms access key to finish setup.",
        );
      }
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-black/15 bg-surface p-8 sm:p-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 12.5l4.2 4.2L19 7"
              fill="none"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="mt-5 font-serif text-[26px] font-semibold text-ink">
          Request received — thank you.
        </h2>
        <p className="mt-3 max-w-[460px] font-sans text-[15px] leading-[1.65] text-muted">
          We&rsquo;ve got your appointment request and will follow up to confirm a time
          and go over an estimate. If it&rsquo;s urgent, call us at{" "}
          <a
            href={`tel:${site.phoneTel}`}
            className="font-semibold text-ink underline decoration-accent underline-offset-2"
          >
            {site.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex min-h-[46px] items-center border border-black/25 px-6 font-sans text-[14px] font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot spam trap (hidden from users). */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <Field id="name" label="Name" required autoComplete="name" />
        <Field id="phone" label="Phone" type="tel" required autoComplete="tel" />

        <div className="sm:col-span-2">
          <Field id="email" label="Email" type="email" required autoComplete="email" />
        </div>

        <Field id="vehicle_make" label="Vehicle make" autoComplete="off" />
        <Field id="model" label="Model" autoComplete="off" />
        <Field id="year" label="Year" inputMode="numeric" autoComplete="off" />

        <div>
          <label htmlFor="service" className={labelClass}>
            Service needed
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path d=%22M2 4l4 4 4-4%22 fill=%22none%22 stroke=%22%236b675e%22 stroke-width=%221.5%22/></svg>')] bg-[length:12px] bg-[right_14px_center] bg-no-repeat pr-9`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="min-h-[120px] w-full resize-y border border-black/25 bg-white px-3.5 py-3 font-sans text-[14px] leading-[1.6] text-ink outline-none focus:border-accent"
            placeholder="Tell us what's going on with the car, or anything we should know."
          />
        </div>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 border-l-2 border-accent bg-accent/5 px-4 py-3 font-sans text-[13.5px] text-accent-dark"
        >
          {errorMsg}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-[48px] items-center justify-center border border-accent-dark bg-accent px-8 font-sans text-[14px] font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Request Appointment"}
        </button>
        <span className="font-sans text-[12.5px] text-muted-2">
          We&rsquo;ll reply to confirm a time and estimate.
        </span>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  ...rest
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className={fieldClass}
        {...rest}
      />
    </div>
  );
}
