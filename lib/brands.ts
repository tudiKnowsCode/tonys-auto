// Brand catalog. One template (app/brands/[slug]) renders every make.
// Wireframe fully populates "Porsche"; the rest follow the same structure and voice.

export interface Brand {
  slug: string;
  name: string;
  /** Logo image in /public/brands. Displayed object-contain in a uniform tile. */
  logo: string;
  /** Model line-up, shown on the brands index and in hero copy. */
  models: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImageHint: string;
  expertiseHeading: string;
  expertiseBody: string;
  /** Six common services for this make, each linking to its service detail page. */
  commonServices: { title: string; body: string; href: string }[];
}

export const brands: Brand[] = [
  {
    slug: "audi",
    name: "Audi",
    logo: "/brands/audi.png",
    models: "A3 through A8, Q models, S and RS.",
    heroTitle: "Audi service & repair in Manchester, CT",
    heroSubtitle:
      "Specialist care for the A3 through A8, the Q range, and the S and RS cars — from technicians who know these engines cold.",
    heroImageHint: "Audi in the bay or on the lot",
    expertiseHeading: "Decades of Audi-specific work.",
    expertiseBody:
      "We know the quattro drivetrain, the carbon build-up questions on the direct-injection engines, the timing-service intervals on the TFSI motors, and the maintenance these cars actually need to stay tight. We use the diagnostic equipment that reads Audi systems properly, not a generic code reader — and for the turbocharged cars we're an APR performance dealer as well.",
    commonServices: [
      { title: "Major scheduled service", body: "Fluids, filters, plugs, and inspection.", href: "/services/oil-change" },
      { title: "Timing service", body: "Chains and tensioners on TFSI engines.", href: "/services/engine" },
      { title: "Carbon cleaning", body: "Intake-valve cleaning on direct-injection motors.", href: "/services/engine" },
      { title: "Diagnostics", body: "Factory-level fault reading.", href: "/services/diagnostics" },
      { title: "Brakes & fluid", body: "Pads, rotors, and flushes.", href: "/services/brakes" },
      { title: "APR performance tuning", body: "Software and hardware for more power.", href: "/services/apr-tune" },
    ],
  },
  {
    slug: "bmw",
    name: "BMW",
    logo: "/brands/bmw.webp",
    models: "3, 5, 7 Series, X models, and M variants.",
    heroTitle: "BMW service & repair in Manchester, CT",
    heroSubtitle:
      "Specialist care for the 3, 5, and 7 Series, the X range, and the M cars — from technicians who know these engines cold.",
    heroImageHint: "BMW in the bay or on the lot",
    expertiseHeading: "Decades of BMW-specific work.",
    expertiseBody:
      "We know the oil-leak trouble spots — valve-cover and oil-filter-housing gaskets — the cooling-system failures these cars are known for, the VANOS and timing-chain questions on the N-series engines, and the maintenance that keeps them out of the shop. We use the diagnostic equipment that reads BMW systems properly, not a generic code reader.",
    commonServices: [
      { title: "Major scheduled service", body: "Fluids, filters, plugs, and inspection.", href: "/services/oil-change" },
      { title: "Cooling system", body: "Water pump, thermostat, and expansion tank.", href: "/services/engine" },
      { title: "Oil-leak repair", body: "Valve-cover and filter-housing gaskets.", href: "/services/engine" },
      { title: "VANOS & timing", body: "Known N-series engine service.", href: "/services/engine" },
      { title: "Diagnostics", body: "Factory-level fault reading.", href: "/services/diagnostics" },
      { title: "Brakes & suspension", body: "Pads, rotors, and worn components.", href: "/services/brakes" },
    ],
  },
  {
    slug: "mercedes-benz",
    name: "Mercedes-Benz",
    logo: "/brands/mercedes.png",
    models: "C, E, S, GLC, GLE, and AMG models.",
    heroTitle: "Mercedes-Benz service & repair in Manchester, CT",
    heroSubtitle:
      "Specialist care for the C, E, and S-Class, the GLC and GLE, and AMG models — from technicians who know these cars cold.",
    heroImageHint: "Mercedes-Benz in the bay or on the lot",
    expertiseHeading: "Decades of Mercedes-specific work.",
    expertiseBody:
      "We know the oil leaks and engine mounts these cars develop, the air-suspension questions on the models that ride on it, the transmission and conductor-plate service intervals, and what it takes to keep a Mercedes feeling like one. We use the diagnostic equipment that reads Mercedes systems properly, not a generic code reader.",
    commonServices: [
      { title: "Major scheduled service", body: "Service A and Service B, done right.", href: "/services/oil-change" },
      { title: "Transmission service", body: "Fluid, filter, and conductor plate.", href: "/services/transmission" },
      { title: "Air-suspension repair", body: "Struts and compressor on equipped cars.", href: "/services/suspension" },
      { title: "Oil-leak & mounts", body: "Common seal and engine-mount wear.", href: "/services/engine" },
      { title: "Diagnostics", body: "Factory-level fault reading.", href: "/services/diagnostics" },
      { title: "Brakes & fluid", body: "Pads, rotors, and flushes.", href: "/services/brakes" },
    ],
  },
  {
    slug: "jaguar",
    name: "Jaguar",
    logo: "/brands/jaguar.png",
    models: "XE, XF, XJ, F-Type, F-Pace, and E-Pace.",
    heroTitle: "Jaguar service & repair in Manchester, CT",
    heroSubtitle:
      "Specialist care for the XE, XF, and XJ, the F-Type, and the F-Pace and E-Pace — from technicians who know these cars cold.",
    heroImageHint: "Jaguar in the bay or on the lot",
    expertiseHeading: "Decades of Jaguar-specific work.",
    expertiseBody:
      "We know the timing-chain-tensioner history on the supercharged and turbo engines, the cooling and electronics quirks these cars have, and the maintenance that keeps a Jaguar reliable rather than temperamental. We use the diagnostic equipment that reads Jaguar systems properly, not a generic code reader.",
    commonServices: [
      { title: "Major scheduled service", body: "Fluids, filters, plugs, and inspection.", href: "/services/oil-change" },
      { title: "Timing & tensioners", body: "Known service on the Ingenium and V6 engines.", href: "/services/engine" },
      { title: "Cooling system", body: "Pumps, thermostats, and hoses as needed.", href: "/services/engine" },
      { title: "Electronics diagnostics", body: "Factory-level fault reading.", href: "/services/diagnostics" },
      { title: "Brakes & suspension", body: "Pads, rotors, and worn components.", href: "/services/brakes" },
      { title: "Pre-purchase inspection", body: "Before you buy a used Jaguar.", href: "/services/inspections" },
    ],
  },
  {
    slug: "porsche",
    name: "Porsche",
    logo: "/brands/porsche.png",
    models: "911, Boxster, Cayman, Cayenne, Macan, Panamera.",
    heroTitle: "Porsche service & repair in Manchester, CT",
    heroSubtitle:
      "Specialist care for the 911, Boxster, Cayman, Cayenne, Macan, and Panamera, from technicians who know these engines cold.",
    heroImageHint: "Porsche in the bay or on the lot",
    expertiseHeading: "Decades of Porsche-specific work.",
    expertiseBody:
      "We have serviced air-cooled and water-cooled Porsches alike. That means we know the IMS bearing history on the early water-cooled cars, the bore-scoring questions, the coolant-pipe failures on the V8 Cayenne, and the maintenance these engines actually need to last. We use the diagnostic equipment that reads Porsche systems properly, not a generic code reader.",
    commonServices: [
      { title: "Major scheduled service", body: "Fluids, filters, plugs, and inspection.", href: "/services/oil-change" },
      { title: "Brakes & fluid", body: "Performance pads, rotors, bleeds.", href: "/services/brakes" },
      { title: "Diagnostics", body: "Factory-level fault reading.", href: "/services/diagnostics" },
      { title: "Coolant-pipe repair", body: "Cayenne V8 known issue.", href: "/services/engine" },
      { title: "Suspension & alignment", body: "Corner-balance on request.", href: "/services/suspension" },
      { title: "Pre-purchase inspection", body: "Before you buy a used 911.", href: "/services/inspections" },
    ],
  },
  {
    slug: "land-rover",
    name: "Land Rover",
    logo: "/brands/land-rover.png",
    models: "Range Rover, Sport, Velar, Evoque, and Discovery.",
    heroTitle: "Land Rover service & repair in Manchester, CT",
    heroSubtitle:
      "Specialist care for the Range Rover and Sport, the Velar and Evoque, and the Discovery — from technicians who know these trucks cold.",
    heroImageHint: "Land Rover in the bay or on the lot",
    expertiseHeading: "Decades of Land Rover-specific work.",
    expertiseBody:
      "We know the air-suspension systems these trucks ride on, the timing-chain and cooling issues on the supercharged engines, the oil-leak trouble spots, and the maintenance that keeps a Land Rover dependable. We use the diagnostic equipment that reads Land Rover systems properly, not a generic code reader.",
    commonServices: [
      { title: "Major scheduled service", body: "Fluids, filters, plugs, and inspection.", href: "/services/oil-change" },
      { title: "Air-suspension repair", body: "Struts, compressor, and valve block.", href: "/services/suspension" },
      { title: "Timing & cooling", body: "Known supercharged-engine service.", href: "/services/engine" },
      { title: "Oil-leak repair", body: "Common seal and gasket wear.", href: "/services/engine" },
      { title: "Diagnostics", body: "Factory-level fault reading.", href: "/services/diagnostics" },
      { title: "Brakes & suspension", body: "Pads, rotors, and worn components.", href: "/services/brakes" },
    ],
  },
];

export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
