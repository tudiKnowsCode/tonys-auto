import type { ServiceFaq } from "@/lib/services";

// Site-wide FAQs (the FAQs page). Service-specific FAQs live in lib/services.ts.
export const faqs: ServiceFaq[] = [
  {
    q: "What are your hours?",
    a: "We are open Monday through Friday, 8:00 AM to 5:00 PM. We are closed Saturday and Sunday. The fastest way to get on the schedule is the appointment form or a phone call.",
  },
  {
    q: "Which brands do you service?",
    a: "We specialize in Audi, BMW, Mercedes-Benz, Jaguar, Porsche, and Land Rover, including older models. If you are not sure whether we cover your car, call and ask.",
  },
  {
    q: "Are you really cheaper than the dealer?",
    a: "For most jobs, yes. We do the same quality of work with the same caliber of parts and equipment, at a lower labor rate and without dealer overhead. You always get the quote before we start.",
  },
  {
    q: "How does the appointment process work?",
    a: "Send the appointment form or call us with your make, model, year, and what is going on. We confirm a time, look the car over, and give you a written estimate before any work begins.",
  },
  {
    q: "What payment methods do you take?",
    a: "Cash, all major credit cards, and contactless options including Apple Pay and Google Pay.",
  },
  {
    q: "Do you offer a warranty on your repairs?",
    a: "Yes. Parts and labor are covered by our warranty. Ask us about the specific terms for your repair.",
  },
  {
    q: "Do you sell and install tires?",
    a: "We are an authorized Nokian dealer and can source other brands on request. Mounting, balancing, and alignment are done in-house.",
  },
  {
    q: "Do you do pre-purchase inspections?",
    a: "Yes. A pre-purchase inspection covers mechanical condition, known problem areas for that model, and anything that should affect your offer.",
  },
];
