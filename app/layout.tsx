import type { Metadata, Viewport } from "next";
import { Spectral, Archivo, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { site } from "@/lib/site";

// Serif headings.
const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Sans body / UI (variable).
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

// Mono labels / eyebrows (variable).
const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Independent European auto repair in Manchester, CT since 1979. Specialists in Audi, BMW, Mercedes-Benz, Jaguar, Porsche, and Land Rover — dealership-level work without the dealership markup.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — European Auto Repair in Manchester, CT`,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Automotive",
  formatDetection: { telephone: true, address: true, email: true },
  // Icons are auto-detected from app/icon.svg and app/apple-icon.png.
  keywords: [
    "European auto repair",
    "import car service Manchester CT",
    "Audi repair",
    "BMW repair",
    "Mercedes-Benz repair",
    "Porsche service",
    "Jaguar repair",
    "Land Rover service",
  ],
  openGraph: {
    title: `${site.name} — European Auto Repair in Manchester, CT`,
    description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — European auto repair in Manchester, CT since 1979`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spectral.variable} ${archivo.variable} ${splineMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper">
        <StructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-accent-dark focus:bg-accent focus:px-4 focus:py-2 focus:font-sans focus:text-[14px] focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
