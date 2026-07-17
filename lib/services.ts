// Service catalog. One template (app/services/[slug]) renders every entry.
// Wireframe fully populates "Engine"; the rest follow the same structure and voice.

export type ServiceCategory =
  | "Maintenance & wear"
  | "Diagnostics & inspections"
  | "Repair & performance";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** Short label used in lists, panels, and nav. */
  name: string;
  category: ServiceCategory;
  /** One-line description for overview lists and panels. */
  summary: string;
  /** Breadcrumb + hero eyebrow label, e.g. "Engine repair & rebuilds". */
  breadcrumb: string;
  /** Detail page <h1>. */
  heroTitle: string;
  /** Detail hero sub-paragraph. */
  heroSubtitle: string;
  /** Placeholder caption describing the intended hero photo. */
  heroImageHint: string;
  /** Large lead paragraph. */
  lead: string;
  /** Secondary intro paragraph. */
  body: string;
  /** "What the job can involve" — four items. */
  involves: { title: string; body: string }[];
  /** Dark callout quote. */
  callout: string;
  /** "Get a quote" heading + body. */
  quoteHeading: string;
  quoteBody: string;
  /** Two service-specific FAQs. */
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "oil-change",
    name: "Oil change",
    category: "Maintenance & wear",
    summary: "Factory-schedule servicing with the correct fluids and filters.",
    breadcrumb: "Oil & fluid service",
    heroTitle: "Oil change & fluid service in Manchester, CT",
    heroSubtitle:
      "The right oil, the right filter, and the manufacturer's schedule — the way your import was built to be serviced.",
    heroImageHint: "oil service on a lift, filter and fresh oil",
    lead: "An oil change on a European car is not a five-minute special. These engines call for specific synthetic grades and OEM-quality filters, and getting either wrong shortens the life of the motor. We do it the way the factory intended.",
    body: "While the car is up, we look it over — tires, brakes, leaks, and anything that is starting to wear — and tell you what we see. No pressure, just a heads-up so nothing catches you by surprise down the road.",
    involves: [
      { title: "Correct-spec oil", body: "The exact synthetic grade your engine's manufacturer approves." },
      { title: "OEM-quality filter", body: "Oil filter and, where due, air and cabin filters replaced." },
      { title: "Service reset", body: "Service-interval indicator reset so your dash reflects the work." },
      { title: "Courtesy inspection", body: "A quick look at fluids, tires, brakes, and any leaks." },
    ],
    callout:
      "The cheapest way to keep a European engine healthy is to service it on time, with the right oil, every single time.",
    quoteHeading: "Book an oil service",
    quoteBody:
      "Tell us your make, model, and mileage and we'll confirm the correct oil and interval for your car.",
    faqs: [
      {
        q: "How often should I change the oil in my import?",
        a: "It depends on the make, engine, and how you drive, but most European cars fall between 5,000 and 10,000 miles on full synthetic. We'll confirm the manufacturer's interval for your exact car.",
      },
      {
        q: "Do you use the correct synthetic oil for my car?",
        a: "Yes. We stock and use the specific synthetic grades these manufacturers require, not a one-size-fits-all bulk oil.",
      },
    ],
  },
  {
    slug: "brakes",
    name: "Brakes",
    category: "Maintenance & wear",
    summary: "Pads, rotors, fluid flushes, and wear-sensor replacement.",
    breadcrumb: "Brake service & repair",
    heroTitle: "Brake service & repair in Manchester, CT",
    heroSubtitle:
      "Pads, rotors, fluid, and wear sensors — done with the right parts so your car stops the way it should.",
    heroImageHint: "brake caliper and rotor during a pad replacement",
    lead: "Brakes are the one system you never want to guess on. We replace pads and rotors with parts that match your car's engineering, service the wear sensors these makes rely on, and flush the fluid that most shops forget.",
    body: "If you're feeling a pulse in the pedal, hearing a grind, or seeing a brake warning, bring it in. We'll measure what's left, show you where it stands, and quote the work before we touch it.",
    involves: [
      { title: "Pads & rotors", body: "Quality pads and rotors matched to your make and driving." },
      { title: "Wear sensors", body: "Electronic pad-wear sensors replaced so the warning clears properly." },
      { title: "Fluid flush", body: "Old brake fluid absorbs water; we flush and bleed the system." },
      { title: "Caliper & hardware", body: "Calipers, guides, and hardware checked and serviced as needed." },
    ],
    callout:
      "A brake job done with the right pads and a proper fluid flush is the difference between confidence and a warning light in six months.",
    quoteHeading: "Get a quote on your brakes",
    quoteBody:
      "Tell us what you're hearing or feeling, plus your make and model, and we'll give you a straight estimate.",
    faqs: [
      {
        q: "How do I know when my brakes need service?",
        a: "Squealing, grinding, a pulsing pedal, a longer stopping distance, or a dashboard brake-wear warning are all signs. When in doubt, we'll measure them for you.",
      },
      {
        q: "Do you replace the brake wear sensors?",
        a: "Yes. Most European cars use electronic pad-wear sensors, and we replace them as part of the job so the warning clears correctly.",
      },
    ],
  },
  {
    slug: "tires",
    name: "Tires",
    category: "Maintenance & wear",
    summary: "Authorized Nokian dealer. Mounted, balanced, and aligned in-house.",
    breadcrumb: "Tires & alignment",
    heroTitle: "Tires & alignment in Manchester, CT",
    heroSubtitle:
      "An authorized Nokian dealer. Sold, mounted, balanced, and aligned in-house — we never send your car out.",
    heroImageHint: "tire mounting and balancing machine in the shop",
    lead: "The right tires transform how an import drives, and the wrong size or rating ruins it. As an authorized Nokian dealer we can source the correct tire for your car, and we mount, balance, and align everything under our own roof.",
    body: "New tires are also the right time to check your alignment. A car that's out of alignment eats tires and pulls under braking — we set it back to spec so your new rubber lasts.",
    involves: [
      { title: "Tire sourcing", body: "Nokian and other brands on request, in the correct size and rating." },
      { title: "Mount & balance", body: "Mounted and road-force balanced on our own equipment." },
      { title: "Alignment", body: "Four-wheel alignment set back to factory specification." },
      { title: "TPMS service", body: "Tire-pressure sensors checked, reset, or replaced as needed." },
    ],
    callout:
      "We mount, balance, and align every tire in-house — your car never leaves for someone else to touch.",
    quoteHeading: "Get a tire quote",
    quoteBody:
      "Give us your make, model, and tire size (it's on the sidewall) and we'll price the right set for you.",
    faqs: [
      {
        q: "Do I need an alignment with new tires?",
        a: "We recommend it. An out-of-spec alignment will wear a fresh set of tires unevenly and quickly. We can check it and only align if it's needed.",
      },
      {
        q: "Can you get tires other than Nokian?",
        a: "Yes. We're an authorized Nokian dealer, but we can source most major brands on request in the correct size and speed rating for your car.",
      },
    ],
  },
  {
    slug: "diagnostics",
    name: "Diagnostics",
    category: "Diagnostics & inspections",
    summary: "Factory-level scan tools to find the real cause, not just the code.",
    breadcrumb: "Diagnostics",
    heroTitle: "Diagnostics in Manchester, CT",
    heroSubtitle:
      "Factory-level scan tools to read what a generic code reader can't — then a plain explanation of what your car actually needs.",
    heroImageHint: "technician with a diagnostic laptop plugged into a car",
    lead: "A check-engine light is a starting point, not a diagnosis. The parts store can read a code; we read the live data these cars stream and trace the fault to its real cause, so you fix the problem once instead of throwing parts at it.",
    body: "You'll get a clear explanation of what's actually wrong, what it will take to fix, and what it will cost — before any repair work begins.",
    involves: [
      { title: "Fault-code scan", body: "Every module read, not just the engine, using make-specific tools." },
      { title: "Live-data analysis", body: "Real-time sensor data to confirm the actual failure, not a guess." },
      { title: "Electrical tracing", body: "Wiring, grounds, and connectors traced when a fault points there." },
      { title: "Written findings", body: "A clear write-up of the cause and the recommended fix." },
    ],
    callout:
      "The parts store reads the code. We find the reason the code is there — that's the difference between a repair and a parts lottery.",
    quoteHeading: "Book a diagnostic",
    quoteBody:
      "Tell us what your car is doing and which warning lights are on, and we'll get it scanned properly.",
    faqs: [
      {
        q: "My check-engine light is on — is it safe to drive?",
        a: "Sometimes, but not always. A steady light is usually less urgent than a flashing one, which can signal a misfire that damages the catalytic converter. When in doubt, have it scanned before you drive far.",
      },
      {
        q: "Why not just read the code at the parts store?",
        a: "A generic reader gives you a code, not a cause. The same code can point to several different failures. Our factory-level tools show live data that pinpoints which one it actually is.",
      },
    ],
  },
  {
    slug: "inspections",
    name: "Inspections",
    category: "Diagnostics & inspections",
    summary: "Know what you're buying before you sign, on any used car.",
    breadcrumb: "Pre-purchase inspections",
    heroTitle: "Pre-purchase inspections in Manchester, CT",
    heroSubtitle:
      "Know exactly what you're buying before you sign — a top-to-bottom look at any used car, with the model's known trouble spots front and center.",
    heroImageHint: "used car on a lift being inspected underneath",
    lead: "A used European car can be a great buy or an expensive mistake, and the difference is usually hidden underneath. Before you hand over the money, let us put it on the lift and tell you what you're really looking at.",
    body: "We check the mechanical condition, look hard at the known problem areas for that specific model and year, and give you an honest report you can use to walk away or negotiate.",
    involves: [
      { title: "Mechanical check", body: "Engine, drivetrain, brakes, suspension, and leaks, on the lift." },
      { title: "Model-specific issues", body: "The known weak points for that exact make, model, and year." },
      { title: "Scan & road test", body: "A full fault-code scan and a road test to confirm how it drives." },
      { title: "Honest report", body: "A straight write-up so you can buy, negotiate, or walk away." },
    ],
    callout:
      "A couple hundred dollars now can save you thousands after you've signed. We tell you what the seller won't.",
    quoteHeading: "Schedule an inspection",
    quoteBody:
      "Tell us the car you're considering and where it is, and we'll get you booked before you commit.",
    faqs: [
      {
        q: "Can you inspect a car I haven't bought yet?",
        a: "Yes — that's exactly what a pre-purchase inspection is for. Bring the car in, or coordinate with the seller, and we'll give you an honest assessment before you commit.",
      },
      {
        q: "What does a pre-purchase inspection cover?",
        a: "Mechanical condition, the known problem areas for that specific model, a full fault-code scan, and a road test — everything that should affect your decision or your offer.",
      },
    ],
  },
  {
    slug: "engine",
    name: "Engine",
    category: "Repair & performance",
    summary: "Major work from gaskets and timing to full rebuilds.",
    breadcrumb: "Engine repair & rebuilds",
    heroTitle: "Engine repair & rebuilds in Manchester, CT",
    heroSubtitle:
      "Major internal engine work, from gaskets and timing to full rebuilds, done to factory spec.",
    heroImageHint: "engine bay / cylinder head exposed",
    lead: "When an engine needs more than maintenance, it needs someone who has been inside these motors before. We handle oil leaks, timing jobs, cooling failures, and full rebuilds — on any make, gas or diesel.",
    body: "Once the engine is apart, it makes sense to handle the parts that wear together in the same visit, so you are not paying twice for the same labor. What that adds up to depends on your car and its condition, and we go over it with you first.",
    involves: [
      { title: "Gaskets & seals", body: "Valve cover, oil pan, and timing-cover leaks." },
      { title: "Timing components", body: "Chains, guides, and tensioners on interference engines." },
      { title: "Cooling system", body: "Water pump, thermostat, and hoses replaced as needed." },
      { title: "Rebuild & reassembly", body: "Machine work, new parts, and verification on reassembly." },
    ],
    callout:
      "Catching an engine problem early — an oil leak, a cooling fault, a timing rattle — is often the difference between a repair and a rebuild. We tell you straight which one you are looking at.",
    quoteHeading: "Get a quote on your engine",
    quoteBody:
      "Tell us your make, model, and mileage and we will confirm the work and a price before anything starts.",
    faqs: [
      {
        q: "Is my engine worth repairing or replacing?",
        a: "It comes down to the car's overall condition, the cost of the repair, and what the vehicle is worth to you. We'll lay out the honest options — repair, rebuild, or replacement — and let you decide.",
      },
      {
        q: "Do you offer a warranty on engine work?",
        a: "Yes. Engine work is covered by our parts-and-labor warranty. We'll go over the specific terms for your repair before we begin.",
      },
    ],
  },
  {
    slug: "suspension",
    name: "Suspension",
    category: "Repair & performance",
    summary: "Struts, bushings, control arms, and steering components.",
    breadcrumb: "Suspension & steering",
    heroTitle: "Suspension & steering repair in Manchester, CT",
    heroSubtitle:
      "Struts, bushings, control arms, and steering components — so your car rides tight and tracks straight again.",
    heroImageHint: "control arm and strut assembly on the bench",
    lead: "The precise handling you bought a European car for depends on dozens of parts that quietly wear out. Clunks over bumps, a wandering feel, or uneven tire wear usually trace back to the suspension or steering — and we know these systems part by part.",
    body: "We diagnose the actual worn component instead of replacing everything, then set the alignment afterward so the repair holds and your tires last.",
    involves: [
      { title: "Struts & shocks", body: "Worn dampers replaced to restore ride control." },
      { title: "Bushings & mounts", body: "Control-arm bushings and mounts that cause clunks and play." },
      { title: "Control arms & links", body: "Arms, ball joints, and sway-bar links inspected and replaced." },
      { title: "Steering & alignment", body: "Tie rods and steering components, then a four-wheel alignment." },
    ],
    callout:
      "A car that wanders, clunks, or chews tires isn't just annoying — it's telling you the suspension is worn. We find the one part that's actually the problem.",
    quoteHeading: "Get a quote on your suspension",
    quoteBody:
      "Describe the noise or the feel, with your make and model, and we'll pin down what's worn.",
    faqs: [
      {
        q: "What causes a clunk over bumps?",
        a: "Most often a worn bushing, strut mount, sway-bar link, or ball joint. We isolate the specific part rather than replacing the whole corner, so you only pay for what's actually worn.",
      },
      {
        q: "Do I need an alignment after suspension work?",
        a: "Usually yes. Replacing suspension or steering parts changes the geometry, so we set a four-wheel alignment afterward to protect your tires and restore the handling.",
      },
    ],
  },
  {
    slug: "apr-tune",
    name: "APR tune",
    category: "Repair & performance",
    summary: "APR performance software and hardware for more power and response.",
    breadcrumb: "APR performance tuning",
    heroTitle: "APR performance tuning in Manchester, CT",
    heroSubtitle:
      "APR software and hardware for more power and sharper response, installed and supported by a shop that knows these engines.",
    heroImageHint: "turbocharged engine bay with performance intake",
    lead: "APR's engineering unlocks real, reliable gains from the turbocharged engines in these cars — more power, quicker response, and a car that feels the way the factory could have built it. We install and support the full APR line.",
    body: "Tuning is only as good as the shop behind it. We make sure your car is healthy first, install the software and hardware correctly, and stand behind the result.",
    involves: [
      { title: "ECU software", body: "APR engine software matched to your specific engine and fuel." },
      { title: "TCU software", body: "Transmission tuning for firmer, faster shifts where supported." },
      { title: "Hardware", body: "Intakes, intercoolers, and exhaust components as you want them." },
      { title: "Health check first", body: "We confirm the engine is sound before adding power to it." },
    ],
    callout:
      "Power is easy to add and easy to add badly. We make sure the car is healthy first, then do it the way APR engineered it.",
    quoteHeading: "Talk to us about a tune",
    quoteBody:
      "Tell us your make, model, and engine, and what you're after, and we'll lay out your APR options.",
    faqs: [
      {
        q: "Will an APR tune affect reliability?",
        a: "APR develops its software to work within the engine's limits, and we confirm the car is healthy before installing anything. Done properly on a sound engine, a quality tune is reliable.",
      },
      {
        q: "Which cars can you tune?",
        a: "Primarily the turbocharged Audi and Volkswagen-group engines APR specializes in, with support for other makes on request. Tell us your exact car and we'll confirm what's available.",
      },
    ],
  },
  {
    slug: "transmission",
    name: "Transmission",
    category: "Repair & performance",
    summary: "Service, repair, and fluid work for automatic and manual gearboxes.",
    breadcrumb: "Transmission service & repair",
    heroTitle: "Transmission service & repair in Manchester, CT",
    heroSubtitle:
      "Service, repair, and fluid work for automatic, manual, and dual-clutch gearboxes — the maintenance most owners are told these boxes don't need.",
    heroImageHint: "transmission fluid service under the car",
    lead: "The \"sealed for life\" transmission is a myth that costs owners dearly. These gearboxes need fluid service to last, and when they're neglected the repair bill is steep. We handle the maintenance and the repairs on automatic, manual, and dual-clutch units.",
    body: "Rough or delayed shifts, slipping, or a transmission warning are worth looking at early. We'll scan it, check the fluid, and tell you whether it's a service or a repair before the problem gets expensive.",
    involves: [
      { title: "Fluid & filter service", body: "The interval service these \"sealed\" boxes actually need." },
      { title: "Diagnostics", body: "Fault-code scan and road test for shift and slip complaints." },
      { title: "Mechatronics & clutch", body: "Repairs to valve bodies, mechatronics, and dual-clutch units." },
      { title: "Leaks & seals", body: "Pan gaskets and seals to stop fluid loss before it does damage." },
    ],
    callout:
      "\"Sealed for life\" usually means sealed until it fails. A fluid service on schedule is a fraction of the cost of a transmission.",
    quoteHeading: "Get a quote on your transmission",
    quoteBody:
      "Tell us how it's shifting, plus your make and model, and we'll tell you if it's service or repair.",
    faqs: [
      {
        q: "Doesn't my transmission fluid last the life of the car?",
        a: "Despite what \"sealed for life\" suggests, these transmissions last far longer with periodic fluid service. Skipping it is one of the most common causes of premature transmission failure.",
      },
      {
        q: "My transmission shifts roughly — is it serious?",
        a: "It might be a fluid service, or it might be the start of something bigger. Catching it early is the key. We'll scan it and check the fluid before deciding what it actually needs.",
      },
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Maintenance & wear",
  "Diagnostics & inspections",
  "Repair & performance",
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function servicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}
