import { motion, useReducedMotion } from "motion/react"
import { TextRotate } from "@/components/ui/text-rotate"

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

const marqueeImages = siteScreenshots.map((s) => s.url)
const duplicatedImages = [...marqueeImages, ...marqueeImages]

const t = {
  en: {
    headline1: "Managed websites",
    headline2Prefix: "for ",
    rotatingWords: ["You.", "Everyone.", "Landscapers.", "Barber Shops.", "Electricians.", "Roofers.", "Painters.", "Auto Shops.", "Dentists.", "Salons."],
    subheadline:
      "You give us your business info. We build and maintain your website.",
    ctaPrimary: "Start Now",
    ctaPrimaryHref: "/en/start",
    ctaSecondary: "View Plans",
    ctaSecondaryHref: "/en/pricing",
    indicators: ["$0 setup for first 30 businesses", "3–5 business days", "EN/ES support"],
  },
  es: {
    headline1: "Páginas web administradas",
    headline2Prefix: "para ",
    rotatingWords: ["restaurantes.", "plomeros.", "jardineros.", "barberías.", "electricistas.", "pintores.", "talleres.", "dentistas.", "salones.", "tiendas."],
    subheadline:
      "Tú nos das la información. Nosotros creamos y mantenemos tu página web.",
    ctaPrimary: "Empezar Ahora",
    ctaPrimaryHref: "/es/empezar",
    ctaSecondary: "Ver Planes",
    ctaSecondaryHref: "/es/precios",
    indicators: ["$0 inicial para los primeros 30 negocios", "3–5 días hábiles", "Atención EN/ES"],
  },
}

function HeroAnimated({ lang }: HeroAnimatedProps) {
  const content = t[lang]
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="w-full overflow-hidden flex flex-col items-center relative">
      {/* Top: centered content with breathing room */}
      <div className="flex flex-col justify-center items-center w-full max-w-2xl px-6 z-10 pointer-events-auto pt-12 sm:pt-16 md:pt-20 pb-8">
        {/* 1. Headline */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight font-bold tracking-tight space-y-1 md:space-y-3 text-[rgb(var(--heading-1))]"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        >
          <span>{content.headline1}</span>
          <span className="flex whitespace-pre justify-center items-baseline">
            <span className="flex whitespace-pre">
              {content.headline2Prefix}
            </span>
            <span className="relative inline-flex h-[1.15em] items-baseline overflow-hidden">
              <TextRotate
                texts={content.rotatingWords}
                mainClassName="text-primary dark:text-blue-400"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </span>
          </span>
        </motion.h1>

        {/* 2. Single subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center mt-6 md:mt-8 max-w-lg text-[rgb(var(--heading-2))]"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
        >
          {content.subheadline}
        </motion.p>

        {/* 3. CTAs — primary solid + secondary outline */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center mt-8 md:mt-10 w-full sm:w-auto"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.6 }}
        >
          <motion.a
            href={content.ctaPrimaryHref}
            className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white bg-primary px-6 py-2.5 sm:px-8 sm:py-3 rounded-full z-20 shadow-lg hover:bg-blue-800 transition-colors duration-200 text-center"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            {content.ctaPrimary}
          </motion.a>
          <motion.a
            href={content.ctaSecondaryHref}
            className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-primary border-2 border-primary px-6 py-2.5 sm:px-8 sm:py-3 rounded-full z-20 hover:bg-primary hover:text-white transition-colors duration-200 text-center"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            {content.ctaSecondary}
          </motion.a>
        </motion.div>

        {/* 4. Indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mt-8 md:mt-10"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.7 }}
        >
          {content.indicators.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[rgb(var(--box-border))] bg-[rgb(var(--color-box))]/80 backdrop-blur-sm text-xs font-medium text-[rgb(var(--heading-2))]"
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

      {/* Image Marquee — below content, not overlapping */}
      <div className="w-full mt-4 overflow-hidden pointer-events-none pb-4"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <motion.div
          className="flex gap-4"
          animate={prefersReducedMotion ? {} : {
            x: ["-50%", "0%"],
          }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-32 sm:h-40 md:h-48 lg:h-56 flex-shrink-0"
              style={{
                rotate: `${index % 2 === 0 ? -2 : 3}deg`,
              }}
            >
              <img
                src={src}
                alt={siteScreenshots[index % siteScreenshots.length].title}
                className="w-full h-full object-cover rounded-2xl shadow-md border border-white/10"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroAnimated
