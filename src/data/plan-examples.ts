import type { AccordionItemData } from "../components/ui/interactive-image-accordion";
import type { Lang } from "./plans";

interface PlanExamples {
  heading: { en: string; es: string };
  subheading: { en: string; es: string };
  items: AccordionItemData[];
}

export const planExamples: Record<string, PlanExamples> = {
  "nexus-card": {
    heading: {
      en: "Nexus Card Examples",
      es: "Ejemplos de Nexus Card",
    },
    subheading: {
      en: "Real businesses using their Nexus Card — each one is listed on the floresnexus.cards directory.",
      es: "Negocios reales usando su Nexus Card — cada uno aparece en el directorio floresnexus.cards.",
    },
    items: [
      {
        id: 1,
        title: "Pulpería La Morenita",
        imageUrl:
          "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffloresnexus.cards%2Flamorenita%2F?w=800&h=900",
      },
      {
        id: 2,
        title: "Alma Closet",
        imageUrl:
          "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffloresnexus.cards%2Falma%2F?w=800&h=900",
      },
      {
        id: 3,
        title: "Flores Lawn Care",
        imageUrl:
          "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffloresnexus.cards%2Ffloreslawn%2F?w=800&h=900",
      },
    ],
  },

  starter: {
    heading: {
      en: "Starter Website Examples",
      es: "Ejemplos de Starter Website",
    },
    subheading: {
      en: "Real examples of complete one-page websites we build for local businesses.",
      es: "Ejemplos reales de páginas web completas que creamos para negocios locales.",
    },
    items: [
      {
        id: 1,
        title: "Restaurant",
        imageUrl:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Dental Clinic",
        imageUrl:
          "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Auto Repair",
        imageUrl:
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Bakery",
        imageUrl:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      },
      {
        id: 5,
        title: "Fitness Studio",
        imageUrl:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },

  professional: {
    heading: {
      en: "Professional Website Examples",
      es: "Ejemplos de Professional Website",
    },
    subheading: {
      en: "Multi-page websites with galleries, forms, and more for established businesses.",
      es: "Sitios web de varias páginas con galerías, formularios y más para negocios establecidos.",
    },
    items: [
      {
        id: 1,
        title: "Law Firm",
        imageUrl:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Real Estate",
        imageUrl:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Construction",
        imageUrl:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Medical Office",
        imageUrl:
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
      },
      {
        id: 5,
        title: "Event Planner",
        imageUrl:
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
      },
    ],
  },

  "business-system": {
    heading: {
      en: "Business System Examples",
      es: "Ejemplos de Business System",
    },
    subheading: {
      en: "Custom systems with payments, bookings, and customer accounts built for your business.",
      es: "Sistemas a medida con pagos, reservas y cuentas de clientes creados para tu negocio.",
    },
    items: [
      {
        id: 1,
        title: "Online Booking",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "E-Commerce",
        imageUrl:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Client Portal",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Admin Dashboard",
        imageUrl:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: 5,
        title: "Scheduling App",
        imageUrl:
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
      },
    ],
  },
};

export function getPlanExamples(planId: string, lang: Lang) {
  const data = planExamples[planId];
  if (!data) return null;
  return {
    heading: data.heading[lang],
    subheading: data.subheading[lang],
    items: data.items,
  };
}
