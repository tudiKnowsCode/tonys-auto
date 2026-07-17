import type { Metadata } from "next";
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
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
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
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${archivo.variable} ${splineMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper">
        <StructuredData />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
