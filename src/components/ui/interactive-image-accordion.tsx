"use client";

import React, { useState } from "react";

export interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

function AccordionItem({ item, isActive, onMouseEnter }: AccordionItemProps) {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40" />

      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
              : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
}

export interface InteractiveImageAccordionProps {
  items: AccordionItemData[];
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  defaultActiveIndex?: number;
}

export function InteractiveImageAccordion({
  items,
  heading,
  subheading,
  ctaText,
  ctaHref,
  defaultActiveIndex,
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(
    defaultActiveIndex ?? Math.min(items.length - 1, 4)
  );

  return (
    <div className="font-sans">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {(heading || subheading) && (
            <div className="w-full md:w-1/2 text-center md:text-left">
              {heading && (
                <h2 className="text-4xl md:text-6xl font-bold text-heading-1 leading-tight tracking-tighter">
                  {heading}
                </h2>
              )}
              {subheading && (
                <p className="mt-6 text-lg text-heading-3 max-w-xl mx-auto md:mx-0">
                  {subheading}
                </p>
              )}
              {ctaText && ctaHref && (
                <div className="mt-8">
                  <a
                    href={ctaHref}
                    className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    {ctaText}
                  </a>
                </div>
              )}
            </div>
          )}

          <div className={heading || subheading ? "w-full md:w-1/2" : "w-full"}>
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {items.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
