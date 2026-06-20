import type { ComponentType } from "react";
import {
  Monitor,
  Server,
  Globe,
  Smartphone,
  Mail,
  Share2,
  Image as ImageIcon,
  MapPin,
  RefreshCw,
  Search,
  Shield,
  Languages,
  Palette,
  Clock,
  Headphones,
  Layers,
} from "lucide-react";

interface ServiceItem {
  Icon: ComponentType<{ className?: string }>;
  en: string;
  es: string;
}

interface OrbitConfig {
  items: ServiceItem[];
  duration: number;
  reverse: boolean;
}

const orbits: OrbitConfig[] = [
  {
    items: [
      { Icon: Monitor, en: "Design", es: "Diseño" },
      { Icon: Smartphone, en: "Mobile", es: "Móvil" },
      { Icon: Server, en: "Hosting", es: "Hosting" },
      { Icon: Globe, en: "Domain", es: "Dominio" },
      { Icon: RefreshCw, en: "Updates", es: "Cambios" },
    ],
    duration: 30,
    reverse: false,
  },
  {
    items: [
      { Icon: Mail, en: "Forms", es: "Formularios" },
      { Icon: Share2, en: "Social", es: "Redes" },
      { Icon: ImageIcon, en: "Gallery", es: "Galería" },
      { Icon: MapPin, en: "Maps", es: "Mapas" },
      { Icon: Search, en: "SEO", es: "SEO" },
    ],
    duration: 40,
    reverse: true,
  },
  {
    items: [
      { Icon: Shield, en: "SSL", es: "SSL" },
      { Icon: Languages, en: "EN/ES", es: "EN/ES" },
      { Icon: Palette, en: "Brand", es: "Marca" },
      { Icon: Clock, en: "Speed", es: "Velocidad" },
      { Icon: Headphones, en: "Support", es: "Soporte" },
    ],
    duration: 50,
    reverse: false,
  },
];

const allServices = orbits.flatMap((o) => o.items);
const orbitSizes = [38, 66, 94];

export default function OrbitServices({ lang }: { lang: "en" | "es" }) {
  return (
    <>
      {/* ── Mobile: labeled icon grid ── */}
      <div className="md:hidden grid grid-cols-5 gap-x-1.5 gap-y-4 max-w-sm mx-auto px-2">
        {allServices.map((svc, i) => {
          const IconComp = svc.Icon;
          return (
            <div
              key={i}
              className="orbit-grid-item flex flex-col items-center gap-1"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center">
                <IconComp className="w-[18px] h-[18px] text-primary" />
              </div>
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400 text-center leading-tight">
                {svc[lang]}
              </span>
            </div>
          );
        })}
      </div>

      {/* ── Desktop: orbit animation ── */}
      <div
        className="orbit-container hidden md:flex relative mx-auto aspect-square md:w-[30rem] lg:w-[36rem] items-center justify-center"
        aria-hidden="true"
        role="presentation"
      >
        {/* Center element */}
        <div className="absolute z-10 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-primary/15 to-blue-400/10 border-2 border-primary/20 flex items-center justify-center shadow-lg shadow-primary/10">
          <Layers className="w-7 h-7 lg:w-9 lg:h-9 text-primary" />
        </div>
        <div className="absolute w-24 h-24 rounded-full bg-primary/8 blur-2xl" />

        {/* Orbit rings */}
        {orbits.map((orbit, oi) => {
          const n = orbit.items.length;
          const step = (2 * Math.PI) / n;
          const dir = orbit.reverse ? "reverse" : "normal";
          const counterDir = orbit.reverse ? "normal" : "reverse";

          return (
            <div
              key={oi}
              className="absolute rounded-full border border-dashed border-gray-300/60 dark:border-gray-700/40 will-change-transform"
              style={{
                width: `${orbitSizes[oi]}%`,
                height: `${orbitSizes[oi]}%`,
                animation: `orbit-spin ${orbit.duration}s linear infinite ${dir}`,
              }}
            >
              {orbit.items.map((svc, ii) => {
                const angle = ii * step - Math.PI / 2;
                const x = 50 + 50 * Math.cos(angle);
                const y = 50 + 50 * Math.sin(angle);
                const IconComp = svc.Icon;

                return (
                  <div
                    key={ii}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="flex flex-col items-center gap-0.5"
                      style={{
                        animation: `orbit-spin ${orbit.duration}s linear infinite ${counterDir}`,
                      }}
                    >
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md flex items-center justify-center">
                        <IconComp className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      </div>
                      <span className="text-[10px] lg:text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap select-none">
                        {svc[lang]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
