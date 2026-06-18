"use client";

import { motion } from "motion/react";

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  setup: string;
  monthly?: string;
  setupLabel: string;
  monthLabel: string;
  cta: string;
  ctaHref: string;
  detailsCta: string;
  detailsHref: string;
  features: string[];
  seeAllLabel: string;
  isRecommended?: boolean;
  recommendedLabel?: string;
}

interface SquishyPricingCardsProps {
  plans: PricingPlan[];
}

const CARD_COLORS = [
  "bg-[#102a66]",
  "bg-[#1d4ed8]",
  "bg-[#1055f4]",
];

export default function SquishyPricingCards({ plans }: SquishyPricingCardsProps) {
  const bgComponents = [BGHexagons, BGRects, BGDiamonds];

  return (
    <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
      {plans.map((plan, i) => {
        const BGComponent = bgComponents[i % bgComponents.length];
        const bg = CARD_COLORS[i % CARD_COLORS.length];
        return (
          <PricingCard key={plan.id} plan={plan} background={bg} BGComponent={BGComponent} />
        );
      })}
    </div>
  );
}

function PricingCard({
  plan,
  background,
  BGComponent,
}: {
  plan: PricingPlan;
  background: string;
  BGComponent: React.ComponentType;
}) {
  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 1, ease: "backInOut" }}
      variants={{ hover: { scale: 1.05 } }}
      className={`relative h-[26rem] w-full sm:w-80 shrink-0 overflow-hidden rounded-2xl p-7 ${background} shadow-lg hover:shadow-xl transition-shadow ${
        plan.isRecommended ? "ring-2 ring-white/30 ring-offset-2 ring-offset-transparent" : ""
      }`}
    >
      {plan.isRecommended && plan.recommendedLabel && (
        <span className="absolute top-3 right-3 z-20 rounded-full bg-white/25 backdrop-blur-sm px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
          {plan.recommendedLabel}
        </span>
      )}

      <div className="relative z-10 text-white flex flex-col h-full">
        <span className="mb-3 block w-fit rounded-full bg-white/15 backdrop-blur-sm px-3 py-0.5 text-sm font-medium text-white border border-white/15">
          {plan.name}
        </span>

        <motion.div
          initial={{ scale: 0.9 }}
          variants={{ hover: { scale: 1 } }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="origin-top-left mb-2"
        >
          <div className="flex items-baseline gap-1.5">
            <span className="text-4xl font-bold leading-none">{plan.setup}</span>
            <span className="text-sm text-white/70">{plan.setupLabel}</span>
          </div>
          {plan.monthly && (
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl font-bold">{plan.monthly}</span>
              <span className="text-sm text-white/70">{plan.monthLabel}</span>
            </div>
          )}
        </motion.div>

        <p className="text-sm text-white/80 leading-relaxed mb-4 line-clamp-2">{plan.tagline}</p>

        <ul className="space-y-1.5 mb-auto">
          {plan.features.map((f, j) => (
            <li key={j} className="flex items-start gap-2 text-xs text-white/85">
              <svg className="w-3.5 h-3.5 text-green-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 mt-4">
          <a
            href={plan.ctaHref}
            className="block rounded-lg border-2 border-white bg-white py-2.5 text-center text-sm font-bold uppercase text-neutral-800 transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            {plan.cta}
          </a>
          <a
            href={plan.detailsHref}
            className="block py-1.5 text-center text-xs font-medium text-white/70 hover:text-white transition-colors"
          >
            {plan.detailsCta} →
          </a>
        </div>
      </div>

      <BGComponent />
    </motion.div>
  );
}

function BGHexagons() {
  return (
    <motion.svg
      width="320" height="416" viewBox="0 0 320 416" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{ hover: { scale: 1.5 } }}
      transition={{ duration: 1, ease: "backInOut" }}
      className="absolute inset-0 z-0"
    >
      <motion.circle
        variants={{ hover: { scaleY: 0.5, y: -25 } }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
        cx="160" cy="120" r="100"
        className="fill-white/[0.07]"
      />
      <motion.ellipse
        variants={{ hover: { scaleY: 2.25, y: -25 } }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
        cx="160" cy="280" rx="100" ry="45"
        className="fill-white/[0.07]"
      />
    </motion.svg>
  );
}

function BGRects() {
  return (
    <motion.svg
      width="320" height="416" viewBox="0 0 320 416" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{ hover: { scale: 1.05 } }}
      transition={{ duration: 1, ease: "backInOut" }}
      className="absolute inset-0 z-0"
    >
      <motion.rect
        x="14" width="153" height="153" rx="15"
        className="fill-white/[0.07]"
        variants={{ hover: { y: 240, rotate: "90deg", scaleX: 2 } }}
        style={{ y: 12 }}
        transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      />
      <motion.rect
        x="155" width="153" height="153" rx="15"
        className="fill-white/[0.07]"
        variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
        style={{ y: 240 }}
        transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      />
    </motion.svg>
  );
}

function BGDiamonds() {
  return (
    <motion.svg
      width="320" height="416" viewBox="0 0 320 416" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={{ hover: { scale: 1.25 } }}
      transition={{ duration: 1, ease: "backInOut" }}
      className="absolute inset-0 z-0"
    >
      <motion.path
        variants={{ hover: { y: -50 } }}
        transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
        d="M148.893 177.531C154.751 171.673 164.249 171.673 170.107 177.531L267.393 274.818C273.251 280.676 273.251 290.173 267.393 296.031L218.75 344.674C186.027 377.397 132.973 377.397 100.25 344.674L51.6068 296.031C45.7489 290.173 45.7489 280.676 51.6068 274.818L148.893 177.531Z"
        className="fill-white/[0.07]"
      />
      <motion.path
        variants={{ hover: { y: -50 } }}
        transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
        d="M148.893 119.069C154.751 113.211 164.249 113.211 170.107 119.069L267.393 216.356C273.251 222.213 273.251 231.711 267.393 237.569L218.75 286.212C186.027 318.935 132.973 318.935 100.25 286.212L51.6068 237.569C45.7489 231.711 45.7489 222.213 51.6068 216.356L148.893 119.069Z"
        className="fill-white/[0.07]"
      />
      <motion.path
        variants={{ hover: { y: -50 } }}
        transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
        d="M148.893 60.6066C154.751 54.7487 164.249 54.7487 170.107 60.6066L267.393 157.893C273.251 163.751 273.251 173.249 267.393 179.106L218.75 227.75C186.027 260.473 132.973 260.473 100.25 227.75L51.6068 179.106C45.7489 173.249 45.7489 163.751 51.6068 157.893L148.893 60.6066Z"
        className="fill-white/[0.07]"
      />
    </motion.svg>
  );
}
