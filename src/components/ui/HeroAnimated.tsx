import { LayoutGroup, motion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

interface HeroAnimatedProps {
  lang: "en" | "es"
}

function mshot(url: string, w = 800, h = 600) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${h}`
}

const siteScreenshots = [
  {
    url: mshot("https://nexus-group-lap.github.io/floreslawncare/"),
    title: "Flores Lawn Care",
  },
  {
    url: mshot("https://floresnexus.cards/lamorenita/"),
    title: "La Morenita",
  },
  {
    url: mshot("https://nexus-group-lap.github.io/alma/"),
    title: "Alma Boutique",
  },
  {
    url: mshot("https://3dinterior.mail-nearmelab.workers.dev/projects/"),
    title: "3D Interior Design",
  },
  {
    url: mshot("https://horizon.cosmicthemes.com"),
    title: "Horizon Photography",
  },
  {
    url: mshot("https://zeepay-lyart.vercel.app"),
    title: "Zeepay Fintech",
  },
]

const t = {
  en: {
    headline1: "Your business online,",
    headline2Prefix: "",
    rotatingWords: ["without complications.", "ready for customers.", "managed for you.", "hassle-free."],
    subheadline:
      "We create and maintain your professional space on the internet so your customers can find you, contact you, and trust you.",
    subheadline2: "You don't do anything technical. We take care of everything.",
    cta1: "View Plans",
    cta1Href: "/en/pricing",
    cta2: "Start Now — Setup $0",
    cta2Href: "/en/start",
    badge: "Websites for local businesses",
    oneliner: "Built for you. Managed for you. Without agency-level pricing.",
    indicators: ["Setup $0 for first 30 businesses", "3–5 business days", "EN/ES support"],
    promoBadge: "Launch Offer",
    promoText: "Setup $0 for the first 30 local businesses",
    promoHref: "/en/start",
  },
  es: {
    headline1: "Tu negocio en internet,",
    headline2Prefix: "",
    rotatingWords: ["sin complicaciones.", "listo para clientes.", "administrado por ti.", "sin estrés."],
    subheadline:
      "Creamos y mantenemos tu espacio profesional en internet para que tus clientes te encuentren, te contacten y confíen en ti.",
    subheadline2: "Tú no haces nada técnico. Nosotros nos encargamos de todo.",
    cta1: "Ver Planes",
    cta1Href: "/es/precios",
    cta2: "Empezar Ahora — Inicial $0",
    cta2Href: "/es/empezar",
    badge: "Sitios web para negocios locales",
    oneliner: "Lo creamos por ti. Lo administramos por ti. Sin precios de agencia.",
    indicators: ["Inicial $0 para los primeros 30 negocios", "3–5 días hábiles", "Atención EN/ES"],
    promoBadge: "Oferta de Lanzamiento",
    promoText: "Inicial $0 para los primeros 30 negocios locales",
    promoHref: "/es/empezar",
  },
}

function HeroAnimated({ lang }: HeroAnimatedProps) {
  const content = t[lang]

  return (
    <section className="w-full min-h-[calc(100vh-7rem)] overflow-hidden flex flex-col items-center justify-center relative pb-20">
      <Floating sensitivity={-0.5} className="h-full pointer-events-none hidden md:block">
        {/* Upper-left — La Morenita */}
        <FloatingElement
          depth={1}
          className="top-[14%] left-[0%] lg:left-[2%]"
        >
          <motion.img
            src={siteScreenshots[1].url}
            alt={siteScreenshots[1].title}
            className="w-40 h-28 lg:w-52 lg:h-36 object-cover hover:scale-105 duration-200 transition-transform -rotate-6 shadow-2xl rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        {/* Mid-left — Flores Lawn Care */}
        <FloatingElement
          depth={0.5}
          className="top-[38%] left-[0%] lg:left-[1%]"
        >
          <motion.img
            src={siteScreenshots[0].url}
            alt={siteScreenshots[0].title}
            className="w-28 h-20 lg:w-36 lg:h-24 object-cover hover:scale-105 duration-200 transition-transform -rotate-[3deg] shadow-2xl rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        {/* Bottom-left — Alma Boutique */}
        <FloatingElement
          depth={3}
          className="top-[64%] left-[1%] lg:left-[3%]"
        >
          <motion.img
            src={siteScreenshots[2].url}
            alt={siteScreenshots[2].title}
            className="w-44 h-32 lg:w-56 lg:h-40 object-cover -rotate-[4deg] hover:scale-105 duration-200 transition-transform shadow-2xl rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        {/* Upper-right — 3D Interior */}
        <FloatingElement
          depth={2}
          className="top-[14%] left-[82%] lg:left-[80%]"
        >
          <motion.img
            src={siteScreenshots[3].url}
            alt={siteScreenshots[3].title}
            className="w-40 h-28 lg:w-52 lg:h-36 object-cover hover:scale-105 duration-200 transition-transform shadow-2xl rotate-[6deg] rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        {/* Mid-right — Horizon Photography */}
        <FloatingElement
          depth={1.5}
          className="hidden lg:block top-[40%] left-[87%]"
        >
          <motion.img
            src={siteScreenshots[4].url}
            alt={siteScreenshots[4].title}
            className="w-36 h-24 object-cover hover:scale-105 duration-200 transition-transform shadow-2xl rotate-[10deg] rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
        </FloatingElement>

        {/* Bottom-right — Zeepay */}
        <FloatingElement
          depth={1}
          className="top-[62%] left-[80%] lg:left-[78%]"
        >
          <motion.img
            src={siteScreenshots[5].url}
            alt={siteScreenshots[5].title}
            className="w-48 h-36 lg:w-60 lg:h-44 object-cover hover:scale-105 duration-200 transition-transform shadow-2xl rotate-[14deg] rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      {/* Center content */}
      <div className="flex flex-col justify-center items-center w-[280px] sm:w-[400px] md:w-[550px] lg:w-[700px] z-10 pointer-events-auto">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgb(var(--box-border))] bg-[rgb(var(--color-box))] text-sm text-[rgb(var(--heading-3))] mb-6"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse" />
          {content.badge}
        </motion.div>

        {/* Headline with TextRotate */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight font-bold tracking-tight space-y-1 md:space-y-3 text-[rgb(var(--heading-1))]"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        >
          <span>{content.headline1}</span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre justify-center">
              <motion.span
                layout
                className="flex whitespace-pre"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                {content.headline2Prefix}
              </motion.span>
              <TextRotate
                texts={content.rotatingWords}
                mainClassName="overflow-hidden pr-3 text-[#1d4ed8] py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-center pt-6 sm:pt-8 md:pt-10 max-w-xl text-[rgb(var(--heading-2))]"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        >
          {content.subheadline}
        </motion.p>

        {/* Bold statement */}
        <motion.p
          className="text-sm sm:text-base md:text-lg font-semibold text-center pt-3 max-w-xl text-[rgb(var(--heading-1))]"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        >
          {content.subheadline2}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center mt-8 sm:mt-10 md:mt-12 w-full sm:w-auto"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
        >
          <motion.a
            href={content.cta1Href}
            className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white bg-[#1d4ed8] px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full z-20 shadow-2xl hover:bg-blue-800 transition-colors duration-200 text-center"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            {content.cta1}
          </motion.a>
          <motion.a
            href={content.cta2Href}
            className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white bg-green-600 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full z-20 shadow-2xl hover:bg-green-700 transition-colors duration-200 text-center"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            {content.cta2}
          </motion.a>
        </motion.div>

        {/* One-liner */}
        <motion.p
          className="text-xs sm:text-sm text-center pt-4 text-[rgb(var(--heading-3))] italic"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.8 }}
        >
          {content.oneliner}
        </motion.p>

        {/* Indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-8 sm:mt-10"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.9 }}
        >
          {content.indicators.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[rgb(var(--box-border))] bg-[rgb(var(--color-box))] text-xs font-semibold text-[rgb(var(--heading-2))]"
            >
              <svg
                className="w-3.5 h-3.5 text-green-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroAnimated
