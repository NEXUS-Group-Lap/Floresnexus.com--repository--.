import { useEffect, useState } from "react"
import { motion } from "motion/react"
import {
  Wrench,
  CreditCard,
  LayoutGrid,
  Layers,
  HelpCircle,
  Rocket,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

const navItemsByLang: Record<"en" | "es", NavItem[]> = {
  en: [
    { name: "Services", url: "/en#what-we-do", icon: Wrench },
    { name: "Examples", url: "/en#examples", icon: LayoutGrid },
    { name: "Pricing", url: "/en#pricing", icon: CreditCard },
    { name: "How It Works", url: "/en#how-it-works", icon: Layers },
    { name: "FAQ", url: "/en/faq", icon: HelpCircle },
    { name: "Start", url: "/en/start", icon: Rocket },
  ],
  es: [
    { name: "Servicios", url: "/es#que-hacemos", icon: Wrench },
    { name: "Ejemplos", url: "/es#ejemplos", icon: LayoutGrid },
    { name: "Planes", url: "/es#planes", icon: CreditCard },
    { name: "Cómo Funciona", url: "/es#como-funciona", icon: Layers },
    { name: "Preguntas", url: "/es/preguntas", icon: HelpCircle },
    { name: "Empezar", url: "/es/empezar", icon: Rocket },
  ],
}

interface TubelightNavProps {
  lang: "en" | "es"
  className?: string
}

export function TubelightNav({ lang, className }: TubelightNavProps) {
  const items = navItemsByLang[lang]
  const [isMobile, setIsMobile] = useState(false)

  const getActiveFromURL = () => {
    const path = window.location.pathname.replace(/\/$/, "")
    const hash = window.location.hash

    for (const item of [...items].reverse()) {
      if (item.url.includes("#")) {
        if (path + hash === item.url) {
          return item.name
        }
      } else {
        if (path === item.url.replace(/\/$/, "")) {
          return item.name
        }
      }
    }
    return items[0].name
  }

  const [activeTab, setActiveTab] = useState(items[0].name)

  useEffect(() => {
    setActiveTab(getActiveFromURL())

    const handleHash = () => setActiveTab(getActiveFromURL())
    window.addEventListener("hashchange", handleHash)

    const hashItems = items.filter((item) => item.url.includes("#"))
    const sectionIds = hashItems.map((item) => item.url.split("#")[1])
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return () => window.removeEventListener("hashchange", handleHash)

    const idToName = new Map(
      hashItems.map((item) => [item.url.split("#")[1], item.name])
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          const name = idToName.get(visible[0].target.id)
          if (name) setActiveTab(name)
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    )

    sections.forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener("hashchange", handleHash)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={cn("hidden lg:flex items-center", className)}>
      <div className="flex items-center gap-1 bg-[rgb(var(--color-box))]/80 border border-[rgb(var(--box-border))] backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                "text-[rgb(var(--heading-2))] hover:text-[#1d4ed8]",
                isActive && "text-[#1d4ed8]"
              )}
            >
              <span className="hidden midmd:inline">{item.name}</span>
              <span className="midmd:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 w-full bg-[#1d4ed8]/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#1d4ed8] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#1d4ed8]/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#1d4ed8]/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#1d4ed8]/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
