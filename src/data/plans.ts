import {
  NEXUS_CARD_STRIPE_LINK,
  STARTER_STRIPE_LINK,
  PROFESSIONAL_STRIPE_LINK,
  NEXUS_CARD_PROMO_STRIPE_LINK,
  STARTER_PROMO_STRIPE_LINK,
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
  promoEligible?: boolean;
  startForm: { en: string; es: string };
  detailsHref: { en: string; es: string };
  en: PlanLocalized;
  es: PlanLocalized;
}

export const promoConfig = {
  id: "PROMO-01",
  active: true,
  maxSlots: 30,
  eligiblePlans: ["nexus-card", "starter"],
  promoSetup: "$0",
  en: {
    badge: "Launch Offer",
    title: "Launch Offer: $0 Setup",
    subtitle: "For the first 30 local businesses",
    note: "30 spots available — or while the offer lasts",
    disclaimer: "Available for Nexus Card and Starter Website only. Professional Website is not included. Extras are not included. First month is paid at confirmation. Regular setup price stays visible.",
    cta: "Start Now — $0 Setup",
    ctaHref: "/en/start",
  },
  es: {
    badge: "Oferta de Lanzamiento",
    title: "Oferta de Lanzamiento: $0 Inicial",
    subtitle: "Para los primeros 30 negocios locales",
    note: "Disponible por tiempo limitado. Aplica para Nexus Card y Starter Website. El primer mes se paga al confirmar. Add-ons no incluidos.",
    disclaimer: "El precio regular de configuración no se elimina. La promoción aplica solo mientras haya cupos disponibles.",
    cta: "Empezar Ahora — Inicial $0",
    ctaHref: "/es/empezar",
  },
};

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
    promoEligible: true,
    startForm: promoConfig.active
      ? { en: NEXUS_CARD_PROMO_STRIPE_LINK, es: NEXUS_CARD_PROMO_STRIPE_LINK }
      : { en: NEXUS_CARD_STRIPE_LINK, es: NEXUS_CARD_STRIPE_LINK },
    detailsHref: { en: "/en/plans/mini-card", es: "/es/planes/mini-card" },
    en: {
      name: "Nexus Card",
      tagline: "Your business on a simple page.",
      bestFor: "A professional link so customers can find you and contact you right away.",
      bestForList: [
        "New businesses that need to be online now",
        "Independent professionals (plumbers, stylists, cleaners, tutors)",
        "Businesses that only use Facebook, Instagram, or WhatsApp",
        "Anyone who needs one professional link to share",
      ],
      homeFeatures: [
        "Your business name, services, hours, and location",
        "Phone, WhatsApp, and social media buttons",
        "Logo and 1 main image",
        "Your page lives at floresnexus.cards/yourbusiness",
        "Does not include your own web address",
        "0 monthly changes included",
        "1 language (English or Spanish)",
        "We keep it active on the internet for you",
      ],
      includes: [
        "Your business name and description",
        "Up to 5 services listed",
        "Phone, WhatsApp, and social media links",
        "Hours and location with map",
        "Logo + 1 main image",
        "1 language (English or Spanish)",
        "1 review before publishing",
      ],
      limits: [
        "Your page lives at floresnexus.cards/yourbusiness. It does not include your own web address. Your own address like www.yourbusiness.com is available with Starter Website.",
        "This plan does not include monthly changes. If you need monthly changes, check Starter or Professional.",
        "Includes 1 language. If you need both English and Spanish, it is available as a paid extra.",
        "Does not include a contact form. Contact forms start with Starter Website.",
      ],
      upgradePrompt: "Move to Starter when you need your own web address, a contact form, more photos, or monthly changes.",
      cta: "Start Nexus Card — Setup $0",
      detailsCta: "View Details",
    },
    es: {
      name: "Nexus Card",
      tagline: "Tu negocio en una página simple.",
      bestFor: "Un enlace profesional para que tus clientes te encuentren y te contacten de inmediato.",
      bestForList: [
        "Negocios nuevos que necesitan estar en internet ya",
        "Profesionales independientes (plomeros, estilistas, limpieza, tutores)",
        "Negocios que solo usan Facebook, Instagram o WhatsApp",
        "Cualquiera que necesite un enlace profesional para compartir",
      ],
      homeFeatures: [
        "Nombre de tu negocio, servicios, horario y ubicación",
        "Botones de teléfono, WhatsApp y redes sociales",
        "Logo y 1 imagen principal",
        "Tu página vive en floresnexus.cards/tunegocio",
        "No incluye dirección web propia",
        "0 cambios mensuales incluidos",
        "1 idioma (inglés o español)",
        "Nosotros la mantenemos activa en internet por ti",
      ],
      includes: [
        "El nombre y descripción de tu negocio",
        "Hasta 5 servicios listados",
        "Teléfono, WhatsApp y enlaces de redes sociales",
        "Horario y ubicación con mapa",
        "Logo + 1 imagen principal",
        "1 idioma (inglés o español)",
        "1 revisión antes de publicar",
      ],
      limits: [
        "Tu página vive en floresnexus.cards/tunegocio. No incluye dirección web propia. Tu propia dirección como www.tunegocio.com está disponible con Starter Website.",
        "Este plan no incluye cambios mensuales. Si necesitas cambios mensuales, revisa Starter o Professional.",
        "Incluye 1 idioma. Si necesitas inglés y español, está disponible como extra pagado.",
        "No incluye formulario de contacto. Los formularios de contacto empiezan con Starter Website.",
      ],
      upgradePrompt: "Sube a Starter cuando necesites tu propia dirección web, formulario de contacto, más fotos o cambios mensuales.",
      cta: "Empezar Nexus Card — Inicial $0",
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
    promoEligible: true,
    startForm: promoConfig.active
      ? { en: STARTER_PROMO_STRIPE_LINK, es: STARTER_PROMO_STRIPE_LINK }
      : { en: STARTER_STRIPE_LINK, es: STARTER_STRIPE_LINK },
    detailsHref: { en: "/en/plans/starter", es: "/es/planes/starter" },
    en: {
      name: "Starter Website",
      tagline: "A complete website for your business.",
      bestFor: "For local businesses that need a complete page with their own web address.",
      bestForList: [
        "Local businesses that need a real website",
        "Businesses that want their own web address (www.yourbusiness.com)",
        "Businesses that want customers to contact them through a form",
        "Businesses that need to look professional and established",
      ],
      homeFeatures: [
        "1 page with sections, photos, and services",
        "Up to 10 photos of your work or business",
        "Standard web address managed by Flores Nexus (subject to availability)",
        "A space where your customers can send you a message",
        "1 small change per month",
        "1 review before we publish",
        "1 language (English or Spanish)",
        "We handle all the technical parts for you",
      ],
      includes: [
        "1-page website with up to 8 sections",
        "Up to 10 photos",
        "1 language (English or Spanish)",
        "Standard web address managed by Flores Nexus (subject to availability)",
        "Contact form (up to 6 fields)",
        "1 review before publishing",
        "1 small change per month",
        "Links to your booking or payment tools",
        "We handle all the technical parts for you",
      ],
      limits: [
        "This is a 1-page website. If you need more pages, check Professional.",
        "Includes 1 small change per month (a photo, a phone number, a schedule). Changes don't carry over to the next month. Extra changes: $29 each.",
        "Includes 1 language. Both English and Spanish available as a paid extra.",
        "Includes links to your booking or payment tools. Direct payment processing available with Business System.",
      ],
      upgradePrompt: "Move to Professional when you need more pages, more photos, or more monthly changes.",
      cta: "Start Starter — Setup $0",
      detailsCta: "View Details",
    },
    es: {
      name: "Starter Website",
      tagline: "Una página web completa para tu negocio.",
      bestFor: "Para negocios locales que necesitan una página completa con su propia dirección web.",
      bestForList: [
        "Negocios locales que necesitan una página web real",
        "Negocios que quieren su propia dirección web (www.tunegocio.com)",
        "Negocios que quieren que los clientes los contacten por un formulario",
        "Negocios que necesitan verse profesionales y establecidos",
      ],
      homeFeatures: [
        "1 página con secciones, fotos y servicios",
        "Hasta 10 fotos de tu trabajo o negocio",
        "Dirección web estándar administrada por Flores Nexus (sujeta a disponibilidad)",
        "Un espacio donde tus clientes pueden enviarte un mensaje",
        "1 cambio pequeño al mes",
        "1 revisión antes de publicar",
        "1 idioma (inglés o español)",
        "Nosotros hacemos toda la parte técnica por ti",
      ],
      includes: [
        "Página web de 1 página con hasta 8 secciones",
        "Hasta 10 fotos",
        "1 idioma (inglés o español)",
        "Dirección web estándar administrada por Flores Nexus (sujeta a disponibilidad)",
        "Formulario de contacto (hasta 6 campos)",
        "1 revisión antes de publicar",
        "1 cambio pequeño al mes",
        "Enlaces a tus herramientas de reservas o pagos",
        "Nosotros hacemos toda la parte técnica por ti",
      ],
      limits: [
        "Es una página web de 1 página. Si necesitas más páginas, revisa Professional.",
        "Incluye 1 cambio pequeño al mes (una foto, un teléfono, un horario). Los cambios no se acumulan al siguiente mes. Cambios extra: $29 cada uno.",
        "Incluye 1 idioma. Inglés y español disponible como extra pagado.",
        "Incluye enlaces a tus herramientas de reservas o pagos. Procesamiento directo de pagos disponible con Business System.",
      ],
      upgradePrompt: "Sube a Professional cuando necesites más páginas, más fotos o más cambios mensuales.",
      cta: "Empezar Starter — Inicial $0",
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
    promoEligible: false,
    startForm: { en: PROFESSIONAL_STRIPE_LINK, es: PROFESSIONAL_STRIPE_LINK },
    detailsHref: { en: "/en/plans/professional", es: "/es/planes/professional" },
    en: {
      name: "Professional Website",
      tagline: "A more complete site for businesses that need more.",
      bestFor: "For businesses that need more sections, more photos, and more pages.",
      bestForList: [
        "Established businesses with multiple services",
        "Businesses that need separate pages (services, gallery, about, contact)",
        "Businesses that want to showcase their work with more photos",
        "Businesses that need more frequent updates",
      ],
      homeFeatures: [
        "Up to 5 pages for your business",
        "Up to 25 photos of your work",
        "Standard web address managed by Flores Nexus (subject to availability)",
        "A contact form and a photo gallery",
        "Up to 3 small changes per month",
        "2 reviews before we publish",
        "1 language (English or Spanish)",
        "We handle all the technical parts for you",
      ],
      includes: [
        "Up to 5 pages",
        "Up to 25 photos",
        "1 language (English or Spanish)",
        "Standard web address managed by Flores Nexus (subject to availability)",
        "Contact form (up to 8 fields)",
        "2 reviews before publishing",
        "Up to 3 small changes per month",
        "Links to your booking or payment tools",
        "We handle all the technical parts for you",
        "Option to add up to 2 extra pages ($149 each)",
      ],
      limits: [
        "Includes up to 5 pages. You can add up to 2 extra pages for $149 each.",
        "Includes up to 3 small changes per month. Changes don't carry over. Extra changes: $29 each or $49/month for a pack of 3.",
        "Includes 1 language. Both English and Spanish available as a paid extra.",
        "For customer accounts, payment processing, or special features, check Business System.",
      ],
      upgradePrompt: "Move to Business System when you need customer accounts, online payments, bookings, or special features.",
      cta: "Start Professional — $699 Setup",
      detailsCta: "View Details",
    },
    es: {
      name: "Professional Website",
      tagline: "Un sitio más completo para negocios que necesitan más.",
      bestFor: "Para negocios que necesitan más secciones, más fotos y más páginas.",
      bestForList: [
        "Negocios establecidos con múltiples servicios",
        "Negocios que necesitan páginas separadas (servicios, galería, nosotros, contacto)",
        "Negocios que quieren mostrar su trabajo con más fotos",
        "Negocios que necesitan cambios más frecuentes",
      ],
      homeFeatures: [
        "Hasta 5 páginas para tu negocio",
        "Hasta 25 fotos de tu trabajo",
        "Dirección web estándar administrada por Flores Nexus (sujeta a disponibilidad)",
        "Formulario de contacto y galería de fotos",
        "Hasta 3 cambios pequeños al mes",
        "2 revisiones antes de publicar",
        "1 idioma (inglés o español)",
        "Nosotros hacemos toda la parte técnica por ti",
      ],
      includes: [
        "Hasta 5 páginas",
        "Hasta 25 fotos",
        "1 idioma (inglés o español)",
        "Dirección web estándar administrada por Flores Nexus (sujeta a disponibilidad)",
        "Formulario de contacto (hasta 8 campos)",
        "2 revisiones antes de publicar",
        "Hasta 3 cambios pequeños al mes",
        "Enlaces a tus herramientas de reservas o pagos",
        "Nosotros hacemos toda la parte técnica por ti",
        "Opción de agregar hasta 2 páginas extra ($149 c/u)",
      ],
      limits: [
        "Incluye hasta 5 páginas. Puedes agregar hasta 2 páginas extra por $149 cada una.",
        "Incluye hasta 3 cambios pequeños al mes. Los cambios no se acumulan. Cambios extra: $29 cada uno o $49/mes por un paquete de 3.",
        "Incluye 1 idioma. Inglés y español disponible como extra pagado.",
        "Para cuentas de clientes, procesamiento de pagos o funciones especiales, revisa Business System.",
      ],
      upgradePrompt: "Sube a Business System cuando necesites cuentas de clientes, pagos en línea, reservas o funciones especiales.",
      cta: "Empezar Professional — $699 Inicial",
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
      tagline: "For businesses that need special features.",
      bestFor: "For businesses that need online payments, bookings, customer accounts, or special tools built into their site.",
      bestForList: [
        "Businesses that need customers to log in or create accounts",
        "Businesses that need to accept payments or bookings online",
        "Businesses that need special tools or internal systems",
      ],
      homeFeatures: [
        "Online payments and bookings",
        "Customer accounts and login areas",
        "Special forms and internal tools",
        "Automatic notifications",
        "Built specifically for how your business works",
      ],
      includes: [
        "Customer accounts",
        "Login areas",
        "Online bookings",
        "Online payments",
        "Automatic notifications",
        "Special internal tools",
        "Admin panel",
      ],
      limits: [
        "Requires a written scope before we start.",
        "Requires a custom quote. The price depends on what your business needs.",
        "No fixed package. Each system is built for your business.",
      ],
      cta: "Request Quote",
      detailsCta: "View Details",
    },
    es: {
      name: "Business System",
      tagline: "Para negocios que necesitan funciones especiales.",
      bestFor: "Para negocios que necesitan pagos en línea, reservas, cuentas de clientes o herramientas especiales.",
      bestForList: [
        "Negocios que necesitan que sus clientes inicien sesión o creen cuentas",
        "Negocios que necesitan aceptar pagos o reservas en línea",
        "Negocios que necesitan herramientas o sistemas especiales",
      ],
      homeFeatures: [
        "Pagos y reservas en línea",
        "Cuentas de clientes y áreas de acceso",
        "Formularios especiales y herramientas internas",
        "Notificaciones automáticas",
        "Construido para cómo funciona tu negocio",
      ],
      includes: [
        "Cuentas de clientes",
        "Áreas de acceso",
        "Reservas en línea",
        "Pagos en línea",
        "Notificaciones automáticas",
        "Herramientas internas especiales",
        "Panel de administración",
      ],
      limits: [
        "Requiere un alcance escrito antes de comenzar.",
        "Requiere cotización. El precio depende de lo que tu negocio necesite.",
        "No hay paquete fijo. Cada sistema se construye para tu negocio.",
      ],
      cta: "Solicitar Cotización",
      detailsCta: "Ver detalles",
    },
  },
};

export const planOrder = ["nexus-card", "starter", "professional"];
