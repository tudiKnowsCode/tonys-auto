import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description:
      "Independent European auto repair in Manchester, CT since 1979 — Audi, BMW, Mercedes-Benz, Jaguar, Porsche, and Land Rover.",
    start_url: "/",
    display: "standalone",
    background_color: "#1c1c1e",
    theme_color: "#1c1c1e",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
