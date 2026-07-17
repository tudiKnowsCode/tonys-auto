// Central site configuration. Swap real values here once provided.

export const site = {
  name: "Tony's Imported Auto Service",
  shortName: "Tony's",
  tagline: "Imported Auto Service",
  founded: 1979,
  city: "Manchester",
  state: "CT",

  // Production domain (confirmed) — used for canonicals, sitemap, robots,
  // and structured data.
  url: "https://tonysimportedauto.com",

  // Single email used everywhere (per client).
  email: "Tonysimportedauto@gmail.com",

  // Phone: display + tel: form.
  phoneDisplay: "(860) 649-6094",
  phoneTel: "8606496094",

  address: {
    street: "313 New State Rd",
    city: "Manchester",
    region: "CT",
    postalCode: "06042",
    full: "313 New State Rd, Manchester, CT 06042",
  },

  // Keyless Google Maps embed (no API key required).
  mapEmbedUrl:
    "https://www.google.com/maps?q=313+New+State+Rd,+Manchester,+CT+06042&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=313+New+State+Rd,+Manchester,+CT+06042",

  // Approximate coordinates — REPLACE with the exact lat/lng from the shop's
  // Google Business Profile for the most accurate local/map SEO.
  geo: { latitude: 41.7862, longitude: -72.556 },

  // Nearby towns served — used for local structured data.
  areaServed: [
    "Manchester",
    "East Hartford",
    "Vernon",
    "Glastonbury",
    "South Windsor",
    "Bolton",
    "Hartford",
  ],

  hours: [
    { days: "Mon–Fri", time: "8:00 AM – 5:00 PM" },
    { days: "Sat–Sun", time: "Closed" },
  ],

  // Aggregate rating shown on Home + Reviews. Update as needed.
  rating: "4.6",
  reviewCount: "160+",

  // Outbound links — replace "#" with real profile URLs when available.
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
  reviewPlatforms: {
    google: "#",
    carfax: "#",
    sureCritic: "#",
  },
} as const;

// Primary nav — shared by header and (partly) footer.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

// The makes we specialize in — used by the home logo strip and brands index.
export const makes = [
  "Audi",
  "BMW",
  "Mercedes-Benz",
  "Jaguar",
  "Porsche",
  "Land Rover",
] as const;
