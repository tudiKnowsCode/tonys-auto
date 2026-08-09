import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Container, CtaButton } from "@/components/ui";
import { TrustBar } from "@/components/trust-bar";
import { CtaBand } from "@/components/cta-band";
import { brands, getBrand } from "@/lib/brands";
import { pageMeta } from "@/lib/seo";
import { JsonLd, breadcrumbSchema } from "@/components/structured-data";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return pageMeta({
    title: `${brand.name} Service & Repair`,
    description: brand.heroSubtitle,
    path: `/brands/${brand.slug}`,
  });
}

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Brands", path: "/brands" },
          { name: brand.name, path: `/brands/${brand.slug}` },
        ])}
      />

      {/* HERO */}
      <section className="w-full bg-ink">
        <Container className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14">
          <div>
            <nav className="mb-4 font-sans text-[12px] text-faint" aria-label="Breadcrumb">
              <Link href="/brands" className="text-ondark no-underline hover:text-white">
                Brands
              </Link>
              <span className="mx-2">/</span>
              <span className="text-accent-ondark">{brand.name}</span>
            </nav>
            <h1 className="m-0 font-serif text-[36px] font-medium leading-[1.04] text-white sm:text-[50px]">
              {brand.heroTitle}
            </h1>
            <p className="mt-4 mb-6 max-w-[440px] font-sans text-[15px] leading-[1.6] text-ondark">
              {brand.heroSubtitle}
            </p>
            <CtaButton href="/contact">Request an Appointment</CtaButton>
          </div>
          <div className="relative min-h-[240px] w-full overflow-hidden border border-white/15 lg:min-h-[300px]">
            <Image
              src={brand.heroImage}
              alt={`${brand.name} serviced at Tony's Imported Auto Service in Manchester, CT`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: brand.heroPosition ?? "center" }}
            />
          </div>
        </Container>
      </section>

      {/* EXPERTISE */}
      <section className="w-full bg-band">
        <Container className="grid items-start gap-8 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14">
          <h2 className="m-0 font-serif text-[26px] font-medium leading-[1.2] text-ink sm:text-[28px]">
            {brand.expertiseHeading}
          </h2>
          <p className="m-0 font-sans text-[15px] leading-[1.7] text-body">
            {brand.expertiseBody}
          </p>
        </Container>
      </section>

      {/* COMMON SERVICES */}
      <section className="w-full">
        <Container className="py-14 sm:py-16">
          <h2 className="mb-6 font-serif text-[23px] font-semibold text-ink sm:text-[24px]">
            Common {brand.name} services
          </h2>
          <div className="grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {brand.commonServices.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="border-b border-r border-black/[0.12] px-6 py-6 no-underline hover:bg-accent/5"
              >
                <h3 className="m-0 font-sans text-[15px] font-semibold text-ink">
                  {svc.title}
                </h3>
                <p className="mt-1.5 font-sans text-[13px] text-muted-2">{svc.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <TrustBar />
      <CtaBand />
    </>
  );
}
