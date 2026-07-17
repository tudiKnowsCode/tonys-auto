import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  // [path, priority, changeFrequency]
  const staticRoutes: [
    string,
    number,
    MetadataRoute.Sitemap[number]["changeFrequency"],
  ][] = [
    ["", 1.0, "monthly"],
    ["/services", 0.9, "monthly"],
    ["/brands", 0.8, "monthly"],
    ["/contact", 0.8, "yearly"],
    ["/about", 0.6, "yearly"],
    ["/reviews", 0.6, "weekly"],
    ["/faqs", 0.5, "yearly"],
    ["/gallery", 0.4, "monthly"],
  ];

  return [
    ...staticRoutes.map(([path, priority, changeFrequency]) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...brands.map((b) => ({
      url: `${base}/brands/${b.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
