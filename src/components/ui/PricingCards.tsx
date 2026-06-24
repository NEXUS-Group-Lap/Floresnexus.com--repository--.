"use client";

import { motion, useSpring, useReducedMotion } from "motion/react";
import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import confetti from "canvas-confetti";
import { Check, Star as LucideStar } from "lucide-react";
import NumberFlow from "@number-flow/react";

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);
  useEffect(() => {
    const mql = matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setValue(e.matches);
    mql.addEventListener("change", onChange);
    setValue(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return value;
}

export interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  setup: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  detailsCta?: string;
  detailsHref?: string;
  isPopular?: boolean;
  popularLabel?: string;
  promoEligible?: boolean;
  promoSetup?: string;
  promoBadge?: string;
  annualSavings?: string;
}

export interface PricingLabels {
  monthly: string;
  annual: string;
  annualToggleBadge: string;
  perMonth: string;
  perYear: string;
  billedMonthly: string;
  billedAnnually: string;
  setupLabel: string;
}

interface PricingContextType {
  isMonthly: boolean;
  setIsMonthly: (v: boolean) => void;
  labels: PricingLabels;
}

const PricingContext = createContext<PricingContextType>({
  isMonthly: true,
  setIsMonthly: () => {},
  labels: {} as PricingLabels,
});

// --- INTERACTIVE STARFIELD ---

function Star({
  mousePosition,
  containerRef,
}: {
  mousePosition: { x: number | null; y: number | null };
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [initialPos] = useState({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });
  const [size] = useState(1 + Math.random() * 2);
  const [duration] = useState(2 + Math.random() * 3);
  const [delay] = useState(Math.random() * 5);

  const springConfig = { stiffness: 100, damping: 15, mass: 0.1 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  useEffect(() => {
    if (
      !containerRef.current ||
      mousePosition.x === null ||
      mousePosition.y === null
    ) {
      springX.set(0);
      springY.set(0);
      return;
    }
    const rect = containerRef.current.getBoundingClientRect();
    const starX =
      rect.left + (parseFloat(initialPos.left) / 100) * rect.width;
    const starY =
      rect.top + (parseFloat(initialPos.top) / 100) * rect.height;
    const deltaX = mousePosition.x - starX;
    const deltaY = mousePosition.y - starY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const radius = 600;
    if (distance < radius) {
      const force = 1 - distance / radius;
      springX.set(deltaX * force * 0.5);
      springY.set(deltaY * force * 0.5);
    } else {
      springX.set(0);
      springY.set(0);
    }
  }, [mousePosition, initialPos, containerRef, springX, springY]);

  return (
    <motion.div
      className="absolute rounded-full bg-gray-400 dark:bg-white"
      style={{
        top: initialPos.top,
        left: initialPos.left,
        width: `${size}px`,
        height: `${size}px`,
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration, repeat: Infinity, delay }}
    />
  );
}

function InteractiveStarfield({
  mousePosition,
  containerRef,
}: {
  mousePosition: { x: number | null; y: number | null };
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {Array.from({ length: 150 }).map((_, i) => (
        <Star
          key={i}
          mousePosition={mousePosition}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
}

// --- PRICING TOGGLE ---

function PricingToggle() {
  const { isMonthly, setIsMonthly, labels } = useContext(PricingContext);
  const monthlyBtnRef = useRef<HTMLButtonElement>(null);
  const annualBtnRef = useRef<HTMLButtonElement>(null);
  const [pillStyle, setPillStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const btn = isMonthly ? monthlyBtnRef.current : annualBtnRef.current;
    if (btn) {
      setPillStyle({
        width: btn.offsetWidth,
        transform: `translateX(${btn.offsetLeft}px)`,
      });
    }
  }, [isMonthly]);

  const prefersReducedMotion = useReducedMotion();

  const handleToggle = (monthly: boolean) => {
    if (isMonthly === monthly) return;
    setIsMonthly(monthly);
    if (!monthly && annualBtnRef.current && !prefersReducedMotion) {
      const rect = annualBtnRef.current.getBoundingClientRect();
      confetti({
        particleCount: 80,
        spread: 80,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        colors: ["#1d4ed8", "#3b82f6", "#60a5fa"],
        ticks: 300,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative flex w-fit items-center rounded-full bg-gray-100 dark:bg-gray-800 p-1">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-primary p-1"
          style={pillStyle}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
        <button
          ref={monthlyBtnRef}
          onClick={() => handleToggle(true)}
          className={cn(
            "relative z-10 rounded-full px-4 sm:px-6 py-2 text-sm font-medium transition-colors",
            isMonthly
              ? "text-white"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
          )}
        >
          {labels.monthly}
        </button>
        <button
          ref={annualBtnRef}
          onClick={() => handleToggle(false)}
          className={cn(
            "relative z-10 rounded-full px-4 sm:px-6 py-2 text-sm font-medium transition-colors",
            !isMonthly
              ? "text-white"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
          )}
        >
          {labels.annual}
          <span
            className={cn(
              "hidden sm:inline",
              !isMonthly ? "text-white/80" : "",
            )}
          >
            {" "}
            {labels.annualToggleBadge}
          </span>
        </button>
      </div>
    </div>
  );
}

// --- PRICING CARD ---

function PricingCard({
  plan,
  index,
}: {
  plan: PricingPlan;
  index: number;
}) {
  const { isMonthly, labels } = useContext(PricingContext);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: plan.isPopular && isDesktop ? -20 : 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: index * 0.15,
      }}
      className={cn(
        "rounded-2xl p-8 flex flex-col relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm",
        plan.isPopular
          ? "border-2 border-primary shadow-xl"
          : "border border-gray-200 dark:border-gray-700/50",
      )}
    >
      {plan.isPopular && plan.popularLabel && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="bg-primary py-1.5 px-4 rounded-full flex items-center gap-1.5">
            <LucideStar className="text-white h-4 w-4 fill-current" />
            <span className="text-white text-sm font-semibold whitespace-nowrap">
              {plan.popularLabel}
            </span>
          </div>
        </div>
      )}

      {plan.promoEligible && plan.promoBadge && (
        <div className="absolute top-3 right-3">
          <span className="rounded-full bg-blue-500/15 dark:bg-blue-500/25 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-300 border border-blue-400/30">
            {plan.promoBadge}
          </span>
        </div>
      )}

      <div className="flex-1 flex flex-col text-center">
        <h3 className="text-xl font-semibold text-heading-1">{plan.name}</h3>
        <p className="mt-2 text-sm text-heading-3">{plan.description}</p>

        <div className="mt-6 flex items-baseline justify-center gap-x-1">
          <span className="text-5xl font-bold tracking-tight text-heading-1">
            <NumberFlow
              value={isMonthly ? plan.monthlyPrice : plan.annualPrice}
              format={{
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              }}
            />
          </span>
          <span className="text-sm font-semibold leading-6 tracking-wide text-heading-3">
            / {isMonthly ? labels.perMonth : labels.perYear}
          </span>
        </div>

        <p className="text-xs text-heading-3 mt-1">
          {isMonthly ? labels.billedMonthly : labels.billedAnnually}
        </p>

        <div className="mt-2 text-sm">
          {plan.promoEligible && plan.promoSetup ? (
            <span>
              <span className="font-bold text-green-600 dark:text-green-400">
                {plan.promoSetup}
              </span>
              <span className="text-heading-3 line-through ml-1.5">
                {plan.setup}
              </span>
              <span className="text-heading-3 ml-1">{labels.setupLabel}</span>
            </span>
          ) : (
            <span>
              <span className="font-semibold text-heading-2">{plan.setup}</span>
              <span className="text-heading-3 ml-1">{labels.setupLabel}</span>
            </span>
          )}
        </div>

        {!isMonthly && plan.annualSavings && (
          <span className="inline-block mx-auto mt-2 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2.5 py-0.5 rounded-full">
            {plan.annualSavings}
          </span>
        )}

        <ul
          role="list"
          className="mt-8 space-y-3 text-sm leading-6 text-left text-heading-3"
        >
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <Check
                className="h-6 w-5 flex-none text-primary"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8 flex flex-col gap-2">
          <a
            href={plan.href}
            className={cn(
              "block w-full rounded-lg py-3 text-center text-sm font-bold transition-all duration-200",
              plan.isPopular
                ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg"
                : "border-2 border-gray-300 dark:border-gray-600 text-heading-1 hover:border-primary hover:text-primary dark:hover:border-primary",
            )}
          >
            {plan.buttonText}
          </a>
          {plan.detailsCta && plan.detailsHref && (
            <a
              href={plan.detailsHref}
              className="block py-1.5 text-center text-xs font-medium text-heading-3 hover:text-primary transition-colors"
            >
              {plan.detailsCta} →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// --- MAIN EXPORT ---

export default function PricingCards({
  plans,
  labels,
}: {
  plans: PricingPlan[];
  labels: PricingLabels;
}) {
  const [isMonthly, setIsMonthly] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });

  return (
    <PricingContext.Provider value={{ isMonthly, setIsMonthly, labels }}>
      <div
        ref={containerRef}
        onMouseMove={prefersReducedMotion ? undefined : (e) =>
          setMousePosition({ x: e.clientX, y: e.clientY })
        }
        onMouseLeave={prefersReducedMotion ? undefined : () => setMousePosition({ x: null, y: null })}
        className="relative w-full"
      >
        {!prefersReducedMotion && (
          <InteractiveStarfield
            mousePosition={mousePosition}
            containerRef={containerRef}
          />
        )}
        <div className="relative z-10">
          <PricingToggle />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 items-start gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </PricingContext.Provider>
  );
}
