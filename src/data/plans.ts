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
    badge: "Limited Offer",
    title: "Launch Offer: $0 Setup",
    subtitle: "For the first 30 local businesses",
    note: "Only 30 spots available — or while the promotion lasts",
    disclaimer: "Available for Nexus Card and Starter Website only. Professional Website excluded. Add-ons not included. First month is paid at confirmation. Regular setup price is not removed.",
    cta: "Start Now — Setup $0",
    ctaHref: "/en/start",
  },
  es: {
    badge: "Oferta Limitada",
    title: "Oferta de Lanzamiento: $0 Inicial",
    subtitle: "Para los primeros 30 negocios locales",
    note: "Solo 30 cupos disponibles — o mientras dure la promoción",
    disclaimer: "Disponible para Nexus Card y Starter Website solamente. Professional Website excluido. Add-ons no incluidos. El primer mes se paga al confirmar. El precio regular de configuración no se elimina.",
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
    startForm: { en: "/en/start?plan=nexus-card", es: "/es/empezar?plan=nexus-card" },
    detailsHref: { en: "/en/plans/mini-card", es: "/es/planes/mini-card" },
    en: {
      name: "Nexus Card",
      tagline: "Your business card on the internet.",
      bestFor: "A professional link so customers can find you and contact you right away.",
      bestForList: [
        "New businesses that need to be online now",
        "Independent professionals (plumbers, stylists, cleaners, tutors)",
        "Businesses that only use Facebook, Instagram, or WhatsApp",
        "Anyone who needs one professional link to share",
      ],
      homeFeatures: [
        "Your business name, what you do, and where you are",
        "Up to 5 services listed",
        "Your phone, WhatsApp, and social media links",
        "Your business hours and a map",
        "1 chance to review before we publish it",
        "Your space lives at floresnexus.cards/yourbusiness",
        "1 language included (English or Spanish)",
        "We keep it online and working for you",
      ],
      includes: [
        "Your business name and description",
        "Up to 5 services you offer",
        "Your phone number and WhatsApp",
        "Your social media links",
        "Your hours and location with map",
        "Logo + 1 main image",
        "1 language (English or Spanish)",
        "1 review before publishing",
      ],
      limits: [
        "Your space lives at floresnexus.cards/yourbusiness (does not include your own web address). Your own address like www.yourbusiness.com is available with Starter Website.",
        "This plan is for stable business information. If you need monthly changes, check Starter or Professional.",
        "Includes 1 language. If you need both English and Spanish, it is available as a paid extra.",
        "Does not include a contact form. Contact forms are available starting with Starter Website.",
      ],
      upgradePrompt: "Move to Starter when you need your own web address (www.yourbusiness.com), a contact form, more photos, or monthly changes.",
      cta: "Start Nexus Card",
      detailsCta: "View Details",
    },
    es: {
      name: "Nexus Card",
      tagline: "Tu tarjeta de presentación en internet.",
      bestFor: "Un enlace profesional para que tus clientes te encuentren y te contacten de inmediato.",
      bestForList: [
        "Negocios nuevos que necesitan estar en internet ya",
        "Profesionales independientes (plomeros, estilistas, limpieza, tutores)",
        "Negocios que solo usan Facebook, Instagram o WhatsApp",
        "Cualquiera que necesite un enlace profesional para compartir",
      ],
      homeFeatures: [
        "El nombre de tu negocio, qué haces y dónde estás",
        "Hasta 5 servicios listados",
        "Tu teléfono, WhatsApp y redes sociales",
        "Tu horario de atención y un mapa",
        "1 oportunidad de revisar antes de publicar",
        "Tu espacio vive en floresnexus.cards/tunegocio",
        "1 idioma incluido (inglés o español)",
        "Nosotros lo mantenemos en internet por ti",
      ],
      includes: [
        "El nombre y descripción de tu negocio",
        "Hasta 5 servicios que ofreces",
        "Tu número de teléfono y WhatsApp",
        "Tus enlaces de redes sociales",
        "Tu horario y ubicación con mapa",
        "Logo + 1 imagen principal",
        "1 idioma (inglés o español)",
        "1 revisión antes de publicar",
      ],
      limits: [
        "Tu espacio vive en floresnexus.cards/tunegocio (no incluye dirección web propia). Tu propia dirección como www.tunegocio.com está disponible con Starter Website.",
        "Este plan es para información estable de tu negocio. Si necesitas cambios mensuales, revisa Starter o Professional.",
        "Incluye 1 idioma. Si necesitas inglés y español, está disponible como extra pagado.",
        "No incluye formulario de contacto. Los formularios de contacto están disponibles a partir de Starter Website.",
      ],
      upgradePrompt: "Sube a Starter cuando necesites tu propia dirección web (www.tunegocio.com), formulario de contacto, más fotos o cambios mensuales.",
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
    promoEligible: true,
    startForm: { en: "/en/start?plan=starter", es: "/es/empezar?plan=starter" },
    detailsHref: { en: "/en/plans/starter", es: "/es/planes/starter" },
    en: {
      name: "Starter Website",
      tagline: "Your first complete website.",
      bestFor: "A professional website for local businesses that want to explain what they do and be easy to contact.",
      bestForList: [
        "Local businesses that need a real website",
        "Businesses that want their own web address (www.yourbusiness.com)",
        "Businesses that want customers to contact them through a form",
        "Businesses that need to look professional and established",
      ],
      homeFeatures: [
        "1 page with up to 8 areas of information about your business",
        "Up to 10 photos of your work or business",
        "Your own web address included (e.g. www.yourbusiness.com)",
        "A simple form so customers can contact you",
        "1 small change per month (a photo, a phone number, etc.)",
        "1 chance to request changes before we publish",
        "1 language included (English or Spanish)",
        "We keep it online and handle everything technical",
      ],
      includes: [
        "1-page website",
        "Up to 8 areas of information",
        "Up to 10 photos",
        "1 language (English or Spanish)",
        "Your own web address (standard domain, subject to availability)",
        "Simple contact form (up to 6 fields)",
        "1 review before publishing",
        "1 small change per month",
        "Links to your booking or payment tools",
        "We handle everything technical for you",
      ],
      limits: [
        "This is a 1-page website. If you need more pages, check Professional.",
        "Includes 1 small change per month (a photo, a phone number, a schedule). Changes don't carry over to the next month. Extra changes available for $29 each.",
        "Includes 1 language. If you need both English and Spanish, it is available as a paid extra.",
        "Includes links to your booking or payment tools. Direct payment processing is available with Business System.",
      ],
      upgradePrompt: "Move to Professional when you need more pages, more photos, or more monthly changes.",
      cta: "Start Starter",
      detailsCta: "View Details",
    },
    es: {
      name: "Starter Website",
      tagline: "Tu primera página web completa.",
      bestFor: "Un sitio web profesional para negocios locales que quieren explicar lo que hacen y ser fáciles de contactar.",
      bestForList: [
        "Negocios locales que necesitan un sitio web real",
        "Negocios que quieren su propia dirección web (www.tunegocio.com)",
        "Negocios que quieren que los clientes los contacten por un formulario",
        "Negocios que necesitan verse profesionales y establecidos",
      ],
      homeFeatures: [
        "1 página con hasta 8 áreas de información sobre tu negocio",
        "Hasta 10 fotos de tu trabajo o negocio",
        "Tu propia dirección web incluida (ej: www.tunegocio.com)",
        "Un formulario simple para que te contacten",
        "1 cambio pequeño al mes (una foto, un teléfono, etc.)",
        "1 oportunidad de pedir cambios antes de publicar",
        "1 idioma incluido (inglés o español)",
        "Nosotros lo mantenemos en internet y hacemos todo lo técnico",
      ],
      includes: [
        "Sitio web de 1 página",
        "Hasta 8 áreas de información",
        "Hasta 10 fotos",
        "1 idioma (inglés o español)",
        "Tu propia dirección web (dominio estándar, sujeto a disponibilidad)",
        "Formulario simple de contacto (hasta 6 campos)",
        "1 revisión antes de publicar",
        "1 cambio pequeño al mes",
        "Enlaces a tus herramientas de reservas o pagos",
        "Nosotros hacemos todo lo técnico por ti",
      ],
      limits: [
        "Es un sitio web de 1 página. Si necesitas más páginas, revisa Professional.",
        "Incluye 1 cambio pequeño al mes (una foto, un teléfono, un horario). Los cambios no se acumulan al siguiente mes. Cambios extra disponibles por $29 cada uno.",
        "Incluye 1 idioma. Si necesitas inglés y español, está disponible como extra pagado.",
        "Incluye enlaces a tus herramientas de reservas o pagos. Procesamiento directo de pagos disponible con Business System.",
      ],
      upgradePrompt: "Sube a Professional cuando necesites más páginas, más fotos o más cambios mensuales.",
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
    promoEligible: false,
    startForm: { en: "/en/start?plan=professional", es: "/es/empezar?plan=professional" },
    detailsHref: { en: "/en/plans/professional", es: "/es/planes/professional" },
    en: {
      name: "Professional Website",
      tagline: "Your complete, professional website.",
      bestFor: "A multi-page website for businesses that want to look like the leaders in their area.",
      bestForList: [
        "Established businesses with multiple services",
        "Businesses that need separate pages (services, gallery, about, contact)",
        "Businesses that want to showcase their work with more photos",
        "Businesses that need more frequent updates",
      ],
      homeFeatures: [
        "Up to 5 pages for your business",
        "Up to 25 photos of your work",
        "Your own web address included (e.g. www.yourbusiness.com)",
        "A contact form so customers can reach you",
        "3 small changes per month",
        "2 chances to request changes before we publish",
        "Option to add up to 2 extra pages ($149 each)",
        "We keep it online and handle everything technical",
      ],
      includes: [
        "Up to 5 pages",
        "Up to 25 photos",
        "1 language (English or Spanish)",
        "Your own web address (standard domain, subject to availability)",
        "Contact form (up to 8 fields)",
        "2 reviews before publishing",
        "3 small changes per month",
        "Links to your booking or payment tools",
        "We handle everything technical for you",
        "Option to add up to 2 extra pages ($149 each)",
      ],
      limits: [
        "Includes up to 5 pages. You can add up to 2 extra pages for $149 each.",
        "Includes 3 small changes per month. Changes don't carry over to the next month. Extra changes available for $29 each or $49/month for a pack of 3.",
        "Includes 1 language. If you need both English and Spanish, it is available as a paid extra.",
        "For custom apps, customer accounts, or payment processing, check Business System.",
      ],
      upgradePrompt: "Move to Business System when you need customer accounts, payment processing, automation, or custom tools.",
      cta: "Start Professional",
      detailsCta: "View Details",
    },
    es: {
      name: "Professional Website",
      tagline: "Tu sitio web completo y profesional.",
      bestFor: "Un sitio web de varias páginas para negocios que quieren verse como los líderes de su zona.",
      bestForList: [
        "Negocios establecidos con múltiples servicios",
        "Negocios que necesitan páginas separadas (servicios, galería, nosotros, contacto)",
        "Negocios que quieren mostrar su trabajo con más fotos",
        "Negocios que necesitan cambios más frecuentes",
      ],
      homeFeatures: [
        "Hasta 5 páginas para tu negocio",
        "Hasta 25 fotos de tu trabajo",
        "Tu propia dirección web incluida (ej: www.tunegocio.com)",
        "Un formulario de contacto para que te escriban",
        "3 cambios pequeños al mes",
        "2 oportunidades de pedir cambios antes de publicar",
        "Opción de agregar hasta 2 páginas extra ($149 c/u)",
        "Nosotros lo mantenemos en internet y hacemos todo lo técnico",
      ],
      includes: [
        "Hasta 5 páginas",
        "Hasta 25 fotos",
        "1 idioma (inglés o español)",
        "Tu propia dirección web (dominio estándar, sujeto a disponibilidad)",
        "Formulario de contacto (hasta 8 campos)",
        "2 revisiones antes de publicar",
        "3 cambios pequeños al mes",
        "Enlaces a tus herramientas de reservas o pagos",
        "Nosotros hacemos todo lo técnico por ti",
        "Opción de agregar hasta 2 páginas extra ($149 c/u)",
      ],
      limits: [
        "Incluye hasta 5 páginas. Puedes agregar hasta 2 páginas extra por $149 cada una.",
        "Incluye 3 cambios pequeños al mes. Los cambios no se acumulan al siguiente mes. Cambios extra disponibles por $29 cada uno o $49/mes por un paquete de 3.",
        "Incluye 1 idioma. Si necesitas inglés y español, está disponible como extra pagado.",
        "Para apps personalizadas, cuentas de clientes o procesamiento de pagos, revisa Business System.",
      ],
      upgradePrompt: "Sube a Business System cuando necesites cuentas de clientes, procesamiento de pagos, automatización o herramientas personalizadas.",
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
      tagline: "For businesses that need more than a website.",
      bestFor: "For businesses that need customer accounts, payment processing, booking, automation, or custom tools built into their site.",
      bestForList: [
        "Businesses that need customers to log in or create accounts",
        "Businesses that need to accept payments or bookings online",
        "Businesses that need automation or custom internal tools",
      ],
      homeFeatures: [
        "Customer accounts and login areas",
        "Online booking and payment processing",
        "Custom forms and internal dashboards",
        "Automated notifications and workflows",
        "Built specifically for how your business operates",
      ],
      includes: [
        "Customer accounts",
        "Login portals",
        "Database",
        "Online booking",
        "Payment processing",
        "Automated workflows",
        "Custom integrations",
        "Admin dashboard",
        "Document generation",
        "Custom internal tools",
      ],
      limits: [
        "Requires a written scope before we start.",
        "Requires a custom quote — pricing depends on what your business needs.",
        "No fixed package. Each system is built specifically for your business.",
      ],
      cta: "Request Quote",
      detailsCta: "View Details",
    },
    es: {
      name: "Business System",
      tagline: "Para negocios que necesitan más que un sitio web.",
      bestFor: "Para negocios que necesitan cuentas de clientes, procesamiento de pagos, reservas, automatización o herramientas personalizadas.",
      bestForList: [
        "Negocios que necesitan que sus clientes inicien sesión o creen cuentas",
        "Negocios que necesitan aceptar pagos o reservas en línea",
        "Negocios que necesitan automatización o herramientas internas personalizadas",
      ],
      homeFeatures: [
        "Cuentas de clientes y áreas de acceso",
        "Reservas en línea y procesamiento de pagos",
        "Formularios personalizados y paneles internos",
        "Notificaciones y flujos de trabajo automáticos",
        "Construido específicamente para cómo opera tu negocio",
      ],
      includes: [
        "Cuentas de clientes",
        "Portales de acceso",
        "Base de datos",
        "Reservas en línea",
        "Procesamiento de pagos",
        "Flujos de trabajo automáticos",
        "Integraciones personalizadas",
        "Panel de administración",
        "Generación de documentos",
        "Herramientas internas personalizadas",
      ],
      limits: [
        "Requiere un alcance escrito antes de comenzar.",
        "Requiere una cotización personalizada — el precio depende de lo que tu negocio necesite.",
        "No hay paquete fijo. Cada sistema se construye específicamente para tu negocio.",
      ],
      cta: "Solicitar Cotización",
      detailsCta: "Ver detalles",
    },
  },
};

export const planOrder = ["nexus-card", "starter", "professional"];
