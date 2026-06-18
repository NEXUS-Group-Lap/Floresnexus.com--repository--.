import {
  NEXUS_MINI_STRIPE_LINK,
  STARTER_STRIPE_LINK,
  PROFESSIONAL_STRIPE_LINK,
  BUSINESS_QUOTE_FORM_LINK,
} from "../config/links";

export type Lang = "en" | "es";

export interface PlanLocalized {
  name: string;
  tagline: string;
  bestFor: string;
  homeFeatures: string[];
  includes?: string[];
  notIncludes?: string[];
  cta: string;
  detailsCta: string;
}

export interface Plan {
  id: string;
  status: "standard" | "quote";
  setup: string;
  monthly?: string;
  annual?: { en: string; es: string };
  annualPrice?: string;
  annualSavings?: { en: string; es: string };
  stripeLink?: string;
  startForm: { en: string; es: string };
  detailsHref: { en: string; es: string };
  en: PlanLocalized;
  es: PlanLocalized;
}

export const plans: Record<string, Plan> = {
  "mini-card": {
    id: "mini-card",
    status: "standard",
    setup: "$99",
    monthly: "$29",
    annual: { en: "$299/year (save $49)", es: "$299/año (ahorra $49)" },
    annualPrice: "$299",
    annualSavings: { en: "Save $49", es: "Ahorra $49" },
    stripeLink: NEXUS_MINI_STRIPE_LINK,
    startForm: { en: "/en/start?plan=mini-card", es: "/es/empezar?plan=mini-card" },
    detailsHref: { en: "/en/plans/mini-card", es: "/es/planes/mini-card" },
    en: {
      name: "Nexus Mini Card",
      tagline: "For businesses that need a professional link with their essential information.",
      bestFor: "Businesses that only need a simple professional link to share.",
      homeFeatures: [
        "Business name, phone & hours",
        "Call, text & WhatsApp buttons",
        "3–5 services listed",
        "1 published image",
        "Setup only — no monthly updates",
        "Service area or location",
        "Social media links",
        "Managed link on floresnexus.cards",
      ],
      notIncludes: [
        "Full website",
        "Custom domain",
        "Monthly updates after launch",
        "Additional pages",
        "Contact forms",
        "Advanced SEO",
        "Booking or payments",
        "Automations",
      ],
      cta: "Start Mini Card",
      detailsCta: "View Details",
    },
    es: {
      name: "Nexus Mini Card",
      tagline: "Para negocios que necesitan un enlace profesional con su información esencial.",
      bestFor: "Negocios que solo necesitan un enlace profesional simple para compartir.",
      homeFeatures: [
        "Nombre, teléfono y horario del negocio",
        "Botones de llamada, texto y WhatsApp",
        "Entre 3 y 5 servicios listados",
        "1 imagen publicada",
        "Solo configuración inicial — sin actualizaciones mensuales",
        "Ubicación o área de servicio",
        "Redes sociales",
        "Enlace administrado en floresnexus.cards",
      ],
      notIncludes: [
        "Sitio web completo",
        "Dominio propio garantizado",
        "Actualizaciones posteriores al lanzamiento",
        "Páginas adicionales",
        "Formularios de contacto",
        "SEO avanzado",
        "Reservas o pagos",
        "Automatizaciones",
      ],
      cta: "Comenzar Mini Card",
      detailsCta: "Ver detalles",
    },
  },

  starter: {
    id: "starter",
    status: "standard",
    setup: "$299",
    monthly: "$79",
    annual: { en: "$799/year (save $149)", es: "$799/año (ahorra $149)" },
    annualPrice: "$799",
    annualSavings: { en: "Save $149", es: "Ahorra $149" },
    stripeLink: STARTER_STRIPE_LINK,
    startForm: { en: "/en/start?plan=starter", es: "/es/empezar?plan=starter" },
    detailsHref: { en: "/en/plans/starter", es: "/es/planes/starter" },
    en: {
      name: "Starter Website",
      tagline: "For businesses that need a professional page to present their services.",
      bestFor: "Local businesses that need to explain their services on a professional page and make it easy for customers to contact them from their phone.",
      homeFeatures: [
        "One professional page with multiple sections",
        "Up to 10 published images",
        "Contact buttons & map or service area",
        "One small update per month",
        "Managed website hosting",
        "Social media links",
        "Mobile-first design",
        "One pre-launch revision",
      ],
      notIncludes: [
        "Additional pages",
        "CRM or booking",
        "Online payments",
        "Automations",
        "Ad campaigns",
        "Social media management",
        "Advanced monthly SEO",
        "Full redesigns",
      ],
      cta: "Start Starter",
      detailsCta: "View Details",
    },
    es: {
      name: "Starter Website",
      tagline: "Para negocios que necesitan una página profesional para presentar sus servicios.",
      bestFor: "Negocios locales que necesitan explicar sus servicios en una página profesional y facilitar el contacto desde el teléfono.",
      homeFeatures: [
        "Una página profesional con múltiples secciones",
        "Hasta 10 imágenes publicadas",
        "Botones de contacto y mapa o área de servicio",
        "Una actualización pequeña al mes",
        "Hosting web administrado",
        "Redes sociales",
        "Diseño mobile-first",
        "Una revisión antes del lanzamiento",
      ],
      notIncludes: [
        "Páginas adicionales",
        "CRM o reservas",
        "Pagos en línea",
        "Automatizaciones",
        "Campañas publicitarias",
        "Manejo de redes sociales",
        "SEO mensual avanzado",
        "Rediseños completos",
      ],
      cta: "Comenzar Starter",
      detailsCta: "Ver detalles",
    },
  },

  professional: {
    id: "professional",
    status: "standard",
    setup: "$699",
    monthly: "$149",
    annual: { en: "$1,499/year (save $289)", es: "$1,499/año (ahorra $289)" },
    annualPrice: "$1,499",
    annualSavings: { en: "Save $289", es: "Ahorra $289" },
    stripeLink: PROFESSIONAL_STRIPE_LINK,
    startForm: { en: "/en/start?plan=professional", es: "/es/empezar?plan=professional" },
    detailsHref: { en: "/en/plans/professional", es: "/es/planes/professional" },
    en: {
      name: "Professional Website",
      tagline: "For businesses that need several pages and a more complete presentation.",
      bestFor: "Established businesses that need more content, multiple pages, gallery, and a more complete presentation.",
      homeFeatures: [
        "Up to 5 pages",
        "Up to 25 published images",
        "Contact form & gallery",
        "Three small updates per month",
        "Managed website hosting",
        "Map & service area",
        "Basic copywriting",
        "Mobile-first design",
      ],
      notIncludes: [
        "CRM or booking",
        "Online payments",
        "Automations",
        "Ad campaigns",
        "Monthly SEO",
        "Unlimited pages",
        "Unlimited redesigns",
      ],
      cta: "Start Professional",
      detailsCta: "View Details",
    },
    es: {
      name: "Professional Website",
      tagline: "Para negocios que necesitan varias páginas y una presentación más completa.",
      bestFor: "Negocios establecidos que necesitan más contenido, varias páginas, galería y una presentación más completa.",
      homeFeatures: [
        "Hasta 5 páginas",
        "Hasta 25 imágenes publicadas",
        "Formulario de contacto y galería",
        "Tres actualizaciones pequeñas al mes",
        "Hosting web administrado",
        "Mapa y área de servicio",
        "Copywriting básico",
        "Diseño mobile-first",
      ],
      notIncludes: [
        "CRM o reservas",
        "Pagos en línea",
        "Automatizaciones",
        "Campañas publicitarias",
        "SEO mensual",
        "Páginas ilimitadas",
        "Rediseños ilimitados",
      ],
      cta: "Comenzar Professional",
      detailsCta: "Ver detalles",
    },
  },

  "business-system": {
    id: "business-system",
    status: "quote",
    setup: "$2,500+",
    monthly: "$399+",
    startForm: { en: "/en/start?plan=business-system&type=quote", es: "/es/empezar?plan=business-system&type=quote" },
    detailsHref: { en: "/en/business-system", es: "/es/business-system" },
    en: {
      name: "Business System",
      tagline: "Custom solutions for businesses with more complex processes.",
      bestFor: "Businesses that need booking, payments, CRM, automations, multiple locations, private portals, or custom integrations.",
      homeFeatures: [
        "Booking and scheduling systems",
        "Online payments",
        "CRM or email integrations",
        "Multiple locations",
        "Custom integrations",
      ],
      cta: "Request Quote",
      detailsCta: "View Details",
    },
    es: {
      name: "Business System",
      tagline: "Soluciones personalizadas para negocios con procesos más complejos.",
      bestFor: "Negocios que necesitan reservas, pagos, CRM, automatizaciones, múltiples ubicaciones, portales privados o integraciones personalizadas.",
      homeFeatures: [
        "Sistemas de reservas y citas",
        "Pagos en línea",
        "Integraciones con CRM o correo",
        "Múltiples ubicaciones",
        "Integraciones personalizadas",
      ],
      cta: "Solicitar Cotización",
      detailsCta: "Ver detalles",
    },
  },
};

export const planOrder = ["mini-card", "starter", "professional"];
