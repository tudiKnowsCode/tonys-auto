import type { NextConfig } from "next";

// Security headers applied to every route. These are safe for this site — the
// Google Maps embed and the Web3Forms fetch keep working (no strict CSP that
// would need per-request nonces on Next's inline scripts).
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // AVIF (then WebP fallback) delivers the smallest files to modern browsers.
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 31 days to minimize re-optimization.
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
