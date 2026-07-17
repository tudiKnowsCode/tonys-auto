import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";

/*
  Standard inner-page hero. Solid dark tone (per the brief, the wireframe's
  diagonal hatch is replaced with a flat dark surface until real photos land).
*/
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="w-full bg-ink">
      <Container className="py-14 sm:py-16">
        <Eyebrow onDark className="mb-4">{eyebrow}</Eyebrow>
        <h1 className="m-0 max-w-[760px] font-serif text-[32px] font-medium leading-[1.1] text-white sm:text-[42px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-[560px] font-sans text-[15px] leading-[1.6] text-ondark">
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
