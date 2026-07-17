import type { Metadata } from "next";
import { site } from "@/lib/site";

/*
  Builds per-page Metadata with a canonical URL and complete OpenGraph +
  Twitter cards. `title` is the page-specific part (the root layout appends
  "· Tony's Imported Auto Service" to the <title> for non-home pages).
*/
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle =
    path === "/" ? title : `${title} · ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      type: "website",
      locale: "en_US",
      siteName: site.name,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${site.name} — European auto repair in ${site.city}, ${site.state}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/og.png"],
    },
  };
}
