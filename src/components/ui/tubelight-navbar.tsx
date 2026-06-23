import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "motion/react"
import {
  Home,
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
  cta?: boolean
}

const navItemsByLang: Record<"en" | "es", NavItem[]> = {
  en: [
    { name: "Home", url: "/en", icon: Home },
    { name: "Services", url: "/en#what-you-get", icon: Wrench },
    { name: "Examples", url: "/en#examples", icon: LayoutGrid },
    { name: "Pricing", url: "/en#pricing", icon: CreditCard },
    { name: "How It Works", url: "/en#how-it-works", icon: Layers },
    { name: "FAQ", url: "/en/faq", icon: HelpCircle },
    { name: "Start", url: "/en/start", icon: Rocket, cta: true },
  ],
  es: [
    { name: "Inicio", url: "/es", icon: Home },
    { name: "Servicios", url: "/es#que-recibes", icon: Wrench },
    { name: "Ejemplos", url: "/es#ejemplos", icon: LayoutGrid },
    { name: "Planes", url: "/es#planes", icon: CreditCard },
    { name: "Cómo Funciona", url: "/es#como-funciona", icon: Layers },
    { name: "Preguntas", url: "/es/preguntas", icon: HelpCircle },
    { name: "Empezar", url: "/es/empezar", icon: Rocket, cta: true },
  ],
}

interface TubelightNavProps {
  lang: "en" | "es"
  className?: string
}

export function TubelightNav({ lang, className }: TubelightNavProps) {
  const items = navItemsByLang[lang]
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())
  const clickLockRef = useRef(false)

  const updateIndicator = useCallback((name: string) => {
    const el = tabRefs.current.get(name)
    const nav = navRef.current
    if (!el || !nav) return
    const navRect = nav.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    setIndicatorStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
    })
  }, [])

  const setActive = useCallback((name: string) => {
    setActiveTab(name)
    updateIndicator(name)
  }, [updateIndicator])

  const getActiveFromURL = useCallback(() => {
    const path = window.location.pathname.replace(/\/$/, "")
    const hash = window.location.hash

    for (const item of [...items].reverse()) {
      if (item.url.includes("#")) {
        if (path + hash === item.url) return item.name
      } else {
        if (path === item.url.replace(/\/$/, "")) return item.name
      }
    }
    return items[0].name
  }, [items])

  const handleClick = useCallback((name: string, url: string, e: React.MouseEvent) => {
    const path = window.location.pathname.replace(/\/$/, "")
    const targetPath = url.split("#")[0].replace(/\/$/, "")
    const hash = url.includes("#") ? url.split("#")[1] : ""
    const isSamePage = path === targetPath

    if (isSamePage) {
      e.preventDefault()
      if (hash) {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }

    clickLockRef.current = true
    setActive(name)
    setTimeout(() => { clickLockRef.current = false }, 800)
  }, [setActive])

  useEffect(() => {
    const initial = getActiveFromURL()
    setActiveTab(initial)
    requestAnimationFrame(() => updateIndicator(initial))

    const handleHash = () => {
      if (clickLockRef.current) return
      setActive(getActiveFromURL())
    }
    window.addEventListener("hashchange", handleHash)

    const hashItems = items.filter((item) => item.url.includes("#"))
    const sections = hashItems
      .map((item) => ({
        el: document.getElementById(item.url.split("#")[1]),
        name: item.name,
      }))
      .filter((s) => s.el !== null) as { el: HTMLElement; name: string }[]

    if (sections.length === 0)
      return () => window.removeEventListener("hashchange", handleHash)

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLockRef.current) return

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          const match = sections.find((s) => s.el === visible[0].target)
          if (match) setActive(match.name)
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s.el))

    return () => {
      window.removeEventListener("hashchange", handleHash)
      observer.disconnect()
    }
  }, [items, getActiveFromURL, updateIndicator, setActive])

  useEffect(() => {
    updateIndicator(activeTab)
  }, [activeTab, updateIndicator])

  return (
    <div className={cn("hidden lg:flex items-center", className)}>
      <div
        ref={navRef}
        className="relative flex items-center gap-1 bg-[rgb(var(--color-box))]/80 border border-[rgb(var(--box-border))] backdrop-blur-lg py-1 px-1 rounded-full shadow-lg"
      >
        <motion.div
          className="absolute top-0 -z-10 h-full rounded-full bg-[#1d4ed8]/5"
          animate={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
          transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#1d4ed8] rounded-t-full">
            <div className="absolute w-10 h-4 bg-[#1d4ed8]/25 rounded-full blur-md -top-1 -left-1" />
          </div>
        </motion.div>

        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              ref={(el) => {
                if (el) tabRefs.current.set(item.name, el)
              }}
              href={item.url}
              onClick={(e) => handleClick(item.name, item.url, e)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-150",
                item.cta
                  ? "bg-[#1d4ed8] text-white hover:bg-[#1e40af]"
                  : cn(
                      "text-[rgb(var(--heading-2))] hover:text-[#1d4ed8]",
                      isActive && "text-[#1d4ed8]"
                    )
              )}
            >
              <span className="hidden midmd:inline">{item.name}</span>
              <span className="midmd:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
