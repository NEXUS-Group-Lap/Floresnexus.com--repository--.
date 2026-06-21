import {
  NEXUS_CARD_STRIPE_LINK,
  STARTER_STRIPE_LINK,
  PROFESSIONAL_STRIPE_LINK,
  BUSINESS_QUOTE_FORM_LINK,
} from "../config/links";

export type Lang = "en" | "es";

export interface PlanLocalized {
  name: string;
  tagline: string;
  bestFor: string;
  bestForList?: string[];
  homeFeatures: string[];
  includes?: string[];
  limits?: string[];
  upgradePrompt?: string;
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
  "nexus-card": {
    id: "nexus-card",
    status: "standard",
    setup: "$99",
    monthly: "$29",
    annual: { en: "$299/year", es: "$299/año" },
    annualPrice: "$299",
    annualSavings: { en: "Save $49", es: "Ahorra $49" },
    stripeLink: NEXUS_CARD_STRIPE_LINK,
    startForm: { en: "/en/start?plan=nexus-card", es: "/es/empezar?plan=nexus-card" },
    detailsHref: { en: "/en/plans/mini-card", es: "/es/planes/mini-card" },
    en: {
      name: "Nexus Card",
      tagline: "A simple digital presence to start being visible.",
      bestFor: "A professional link for businesses that need to be found online right away.",
      bestForList: [
        "New businesses",
        "Independent professionals",
        "Businesses that only use Facebook, Instagram, WhatsApp, or Google Maps",
        "Businesses that need one professional link to share",
      ],
      homeFeatures: [
        "Digital card with your business essentials",
        "Up to 5 content blocks",
        "Up to 5 services listed",
        "Logo + 1 main image",
        "Contact buttons and social links",
        "1 basic review round",
        "Published at floresnexus.cards/businessname",
        "Includes one main language",
      ],
      includes: [
        "Digital card",
        "Up to 5 content blocks",
        "Up to 5 services",
        "Logo + 1 main image",
        "1 language",
        "Contact buttons and social links",
        "1 basic review",
        "Managed route: floresnexus.cards/businessname",
      ],
      limits: [
        "Published under a managed Flores Nexus route. Custom domain available starting with Starter Website.",
        "Best for stable business information. Monthly update options are available in higher plans.",
        "Includes one main language. A second full-language version is available as an add-on.",
        "Contact form available starting with Starter Website.",
      ],
      upgradePrompt: "Upgrade to Starter when you need a custom domain, contact form, more images, more content, or monthly updates.",
      cta: "Start Nexus Card",
      detailsCta: "View Details",
    },
    es: {
      name: "Nexus Card",
      tagline: "Una presencia digital simple para comenzar a ser visible.",
      bestFor: "Un enlace profesional para negocios que necesitan ser encontrados en línea de inmediato.",
      bestForList: [
        "Negocios nuevos",
        "Profesionales independientes",
        "Negocios que solo usan Facebook, Instagram, WhatsApp o Google Maps",
        "Negocios que necesitan un enlace profesional para compartir",
      ],
      homeFeatures: [
        "Tarjeta digital con la información esencial de tu negocio",
        "Hasta 5 bloques de contenido",
        "Hasta 5 servicios listados",
        "Logo + 1 imagen principal",
        "Botones de contacto y redes sociales",
        "1 ronda de revisión básica",
        "Publicado en floresnexus.cards/nombredelNegocio",
        "Incluye un idioma principal",
      ],
      includes: [
        "Tarjeta digital",
        "Hasta 5 bloques de contenido",
        "Hasta 5 servicios",
        "Logo + 1 imagen principal",
        "1 idioma",
        "Botones de contacto y redes sociales",
        "1 revisión básica",
        "Ruta administrada: floresnexus.cards/nombredelNegocio",
      ],
      limits: [
        "Publicado bajo una ruta administrada de Flores Nexus. Dominio propio disponible a partir de Starter Website.",
        "Ideal para información de negocio estable. Opciones de actualización mensual disponibles en planes superiores.",
        "Incluye un idioma principal. Una segunda versión completa en otro idioma está disponible como add-on.",
        "Formulario de contacto disponible a partir de Starter Website.",
      ],
      upgradePrompt: "Sube a Starter cuando necesites dominio propio, formulario de contacto, más imágenes, más contenido o actualizaciones mensuales.",
      cta: "Comenzar Nexus Card",
      detailsCta: "Ver detalles",
    },
  },

  starter: {
    id: "starter",
    status: "standard",
    setup: "$299",
    monthly: "$79",
    annual: { en: "$799/year", es: "$799/año" },
    annualPrice: "$799",
    annualSavings: { en: "Save $149", es: "Ahorra $149" },
    stripeLink: STARTER_STRIPE_LINK,
    startForm: { en: "/en/start?plan=starter", es: "/es/empezar?plan=starter" },
    detailsHref: { en: "/en/plans/starter", es: "/es/planes/starter" },
    en: {
      name: "Starter Website",
      tagline: "Your first complete business website.",
      bestFor: "A professional website for local businesses ready to establish their online presence.",
      bestForList: [
        "Local businesses that need a formal website",
        "Businesses with services that can be explained on one page",
        "Businesses that want a managed standard domain",
        "Businesses that need a basic contact form",
      ],
      homeFeatures: [
        "1-page website with up to 8 sections",
        "Up to 10 published images",
        "1 managed standard domain, subject to availability",
        "Basic contact form (up to 6 fields)",
        "1 review round before launch",
        "1 small update per month",
        "External links for booking or payments",
        "Hosting and technical management included",
      ],
      includes: [
        "1-page website",
        "Up to 8 sections",
        "Up to 10 published images",
        "1 language",
        "1 managed standard domain, subject to availability",
        "Basic contact form up to 6 fields",
        "1 review round",
        "1 small update per month",
        "External links for booking or payments",
        "Hosting and technical management",
      ],
      limits: [
        "Designed for businesses that can present their services on one page. Additional pages available starting with Professional.",
        "Includes 1 small update per month. Updates do not accumulate. Extra changes available separately.",
        "Includes one main language. A second full-language version is available as an add-on.",
        "External links for booking or payments. Direct payment processing available with Business System.",
      ],
      upgradePrompt: "Upgrade to Professional when one page is no longer enough or your business needs separate pages for services, gallery, projects, or contact.",
      cta: "Start Starter",
      detailsCta: "View Details",
    },
    es: {
      name: "Starter Website",
      tagline: "Tu primer sitio web completo para tu negocio.",
      bestFor: "Un sitio web profesional para negocios locales listos para establecer su presencia en línea.",
      bestForList: [
        "Negocios locales que necesitan un sitio web formal",
        "Negocios con servicios que se pueden explicar en una página",
        "Negocios que quieren un dominio estándar administrado",
        "Negocios que necesitan un formulario de contacto básico",
      ],
      homeFeatures: [
        "Sitio web de 1 página con hasta 8 secciones",
        "Hasta 10 imágenes publicadas",
        "1 dominio estándar administrado, sujeto a disponibilidad",
        "Formulario de contacto básico (hasta 6 campos)",
        "1 ronda de revisión antes del lanzamiento",
        "1 actualización pequeña al mes",
        "Enlaces externos para reservas o pagos",
        "Hosting y administración técnica incluidos",
      ],
      includes: [
        "Sitio web de 1 página",
        "Hasta 8 secciones",
        "Hasta 10 imágenes publicadas",
        "1 idioma",
        "1 dominio estándar administrado, sujeto a disponibilidad",
        "Formulario de contacto básico hasta 6 campos",
        "1 ronda de revisión",
        "1 actualización pequeña al mes",
        "Enlaces externos para reservas o pagos",
        "Hosting y administración técnica",
      ],
      limits: [
        "Diseñado para negocios que pueden presentar sus servicios en una página. Páginas adicionales disponibles a partir de Professional.",
        "Incluye 1 actualización pequeña al mes. Las actualizaciones no se acumulan. Cambios extra disponibles por separado.",
        "Incluye un idioma principal. Una segunda versión completa en otro idioma está disponible como add-on.",
        "Enlaces externos para reservas o pagos. Procesamiento directo de pagos disponible con Business System.",
      ],
      upgradePrompt: "Sube a Professional cuando una página ya no sea suficiente o tu negocio necesite páginas separadas para servicios, galería, proyectos o contacto.",
      cta: "Comenzar Starter",
      detailsCta: "Ver detalles",
    },
  },

  professional: {
    id: "professional",
    status: "standard",
    setup: "$699",
    monthly: "$149",
    annual: { en: "$1,499/year", es: "$1,499/año" },
    annualPrice: "$1,499",
    annualSavings: { en: "Save $289", es: "Ahorra $289" },
    stripeLink: PROFESSIONAL_STRIPE_LINK,
    startForm: { en: "/en/start?plan=professional", es: "/es/empezar?plan=professional" },
    detailsHref: { en: "/en/plans/professional", es: "/es/planes/professional" },
    en: {
      name: "Professional Website",
      tagline: "More space for a growing business.",
      bestFor: "A multi-page website for established businesses that need more room to showcase their work.",
      bestForList: [
        "Established businesses",
        "Businesses with several service categories",
        "Businesses with gallery, projects, team, or broader content",
        "Businesses that need separate pages",
      ],
      homeFeatures: [
        "Up to 5 pages",
        "Up to 25 published images",
        "1 managed standard domain, subject to availability",
        "Basic contact form (up to 8 fields)",
        "2 review rounds",
        "3 small updates per month",
        "External links for booking or payments",
        "Hosting and technical management included",
      ],
      includes: [
        "Up to 5 pages",
        "Up to 25 published images",
        "1 language",
        "1 managed standard domain, subject to availability",
        "Basic contact form up to 8 fields",
        "2 review rounds",
        "3 small updates per month",
        "External links for booking or payments",
        "Hosting and technical management",
        "Up to 2 additional standard pages available as paid add-ons",
      ],
      limits: [
        "Includes up to 5 pages. Up to 2 additional standard pages available as paid add-ons.",
        "Includes 3 small updates per month. Updates do not accumulate. Extra changes available separately.",
        "Includes one main language. A second full-language version is available as an add-on.",
        "Custom apps, user accounts, and API automations available with Business System.",
      ],
      upgradePrompt: "Upgrade to Business System when your website needs users, payments, automation, databases, portals, or custom workflows.",
      cta: "Start Professional",
      detailsCta: "View Details",
    },
    es: {
      name: "Professional Website",
      tagline: "Más espacio para un negocio en crecimiento.",
      bestFor: "Un sitio web de varias páginas para negocios establecidos que necesitan más espacio para mostrar su trabajo.",
      bestForList: [
        "Negocios establecidos",
        "Negocios con varias categorías de servicio",
        "Negocios con galería, proyectos, equipo o contenido más amplio",
        "Negocios que necesitan páginas separadas",
      ],
      homeFeatures: [
        "Hasta 5 páginas",
        "Hasta 25 imágenes publicadas",
        "1 dominio estándar administrado, sujeto a disponibilidad",
        "Formulario de contacto básico (hasta 8 campos)",
        "2 rondas de revisión",
        "3 actualizaciones pequeñas al mes",
        "Enlaces externos para reservas o pagos",
        "Hosting y administración técnica incluidos",
      ],
      includes: [
        "Hasta 5 páginas",
        "Hasta 25 imágenes publicadas",
        "1 idioma",
        "1 dominio estándar administrado, sujeto a disponibilidad",
        "Formulario de contacto básico hasta 8 campos",
        "2 rondas de revisión",
        "3 actualizaciones pequeñas al mes",
        "Enlaces externos para reservas o pagos",
        "Hosting y administración técnica",
        "Hasta 2 páginas estándar adicionales disponibles como add-ons pagados",
      ],
      limits: [
        "Incluye hasta 5 páginas. Hasta 2 páginas estándar adicionales disponibles como add-ons pagados.",
        "Incluye 3 actualizaciones pequeñas al mes. Las actualizaciones no se acumulan. Cambios extra disponibles por separado.",
        "Incluye un idioma principal. Una segunda versión completa en otro idioma está disponible como add-on.",
        "Apps personalizadas, cuentas de usuario y automatizaciones API disponibles con Business System.",
      ],
      upgradePrompt: "Sube a Business System cuando tu sitio necesite usuarios, pagos, automatización, bases de datos, portales o flujos de trabajo personalizados.",
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
      tagline: "Custom technology for business operations.",
      bestFor: "For businesses that need more than an informational website — automation, users, data, payments, portals, or custom integrations.",
      bestForList: [
        "Businesses that need more than an informational website",
        "Businesses that need automation, users, data, payments, portals, or custom integrations",
      ],
      homeFeatures: [
        "User accounts and customer portals",
        "Database and admin dashboard",
        "Custom booking and payment integration",
        "Automations and API integrations",
        "Document generation and custom workflows",
      ],
      includes: [
        "User accounts",
        "Customer portal",
        "Database",
        "Custom booking",
        "Payment integration",
        "Automations",
        "API integrations",
        "Admin dashboard",
        "Document generation",
        "Custom internal workflows",
      ],
      limits: [
        "Written scope required before work begins.",
        "Quote required — final pricing depends on approved scope.",
        "No fixed package. Each system is scoped individually.",
      ],
      cta: "Request Quote",
      detailsCta: "View Details",
    },
    es: {
      name: "Business System",
      tagline: "Tecnología personalizada para operaciones de negocio.",
      bestFor: "Para negocios que necesitan más que un sitio web informativo — automatización, usuarios, datos, pagos, portales o integraciones personalizadas.",
      bestForList: [
        "Negocios que necesitan más que un sitio web informativo",
        "Negocios que necesitan automatización, usuarios, datos, pagos, portales o integraciones personalizadas",
      ],
      homeFeatures: [
        "Cuentas de usuario y portales de clientes",
        "Base de datos y panel de administración",
        "Reservas personalizadas e integración de pagos",
        "Automatizaciones e integraciones API",
        "Generación de documentos y flujos de trabajo personalizados",
      ],
      includes: [
        "Cuentas de usuario",
        "Portal de clientes",
        "Base de datos",
        "Reservas personalizadas",
        "Integración de pagos",
        "Automatizaciones",
        "Integraciones API",
        "Panel de administración",
        "Generación de documentos",
        "Flujos de trabajo internos personalizados",
      ],
      limits: [
        "Alcance escrito requerido antes de comenzar el trabajo.",
        "Cotización requerida — el precio final depende del alcance aprobado.",
        "Sin paquete fijo. Cada sistema se define individualmente.",
      ],
      cta: "Solicitar Cotización",
      detailsCta: "Ver detalles",
    },
  },
};

export const planOrder = ["nexus-card", "starter", "professional"];
