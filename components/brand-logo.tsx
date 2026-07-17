import Image from "next/image";
import type { Brand } from "@/lib/brands";

/*
  Uniform brand-logo tile. Logos have different shapes and backgrounds, so each
  sits on a white tile and is fit with object-contain (no cropping, centered).
  The caller sets the tile size via className so every logo on a page matches.
*/
export function BrandLogo({
  brand,
  className = "",
  imgClassName = "p-3",
}: {
  brand: Brand;
  className?: string;
  /** Inner padding around the logo. Tune per context if a logo needs more/less room. */
  imgClassName?: string;
}) {
  return (
    <span className={`relative block ${className}`}>
      <Image
        src={brand.logo}
        alt={`${brand.name} logo`}
        fill
        sizes="240px"
        className={`object-contain ${imgClassName}`}
      />
    </span>
  );
}
