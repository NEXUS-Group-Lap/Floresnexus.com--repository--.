# Flores Nexus Group Project Rules

This project is for Flores Nexus Group, a Website-as-a-Service business for local service businesses.
Active development brief: Master Development Brief v1.4 (May 2026).

## Core Rules

- Do not promise sales, leads, calls, revenue, growth, or Google ranking.
- Do not promise unlimited edits or unlimited support.
- Do not promise ownership transfer unless separately purchased or approved.
- Always say production starts after payment and complete client information are received.
- Business System must use Request Quote, not direct checkout (never a Stripe payment link).
- Seller commissions must not appear on public customer pricing pages.
- Keep English and Spanish pages separate — do not mix languages in one homepage.
- Keep the moon/dark mode toggle working on all pages.
- Keep the design mobile-first, clear, visual, and sales-focused.

## Language Structure

- `/` — Language gateway (no full navbar needed)
- `/en` — English homepage
- `/es` — Spanish homepage
- `/en/pricing`, `/es/precios`
- `/en/start`, `/es/empezar`
- `/en/thank-you`, `/es/gracias`
- `/en/faq`, `/es/preguntas`
- `/en/careers`, `/es/carreras`
- `/seller-hub` and sub-pages (internal, English only)

## Approved Prices (do not change without approval)

- Nexus Card: $99 setup + $29/month (optional $299/year)
- Starter Website: $299 setup + $79/month
- Professional Website: $699 setup + $149/month (mark as Recommended)
- Business System: starting at $2,500 setup + $399/month (Request Quote only)

## Stripe Placeholders (central config: src/config/links.ts)

- NEXUS_MINI_STRIPE_LINK
- STARTER_STRIPE_LINK
- PROFESSIONAL_STRIPE_LINK
- BUSINESS_QUOTE_FORM_LINK
- ONBOARDING_FORM_LINK
- CHANGE_REQUEST_FORM_LINK
- UPDATE_PACK_STRIPE_LINK

## Copy Rules

Avoid: "get more calls", "guaranteed leads", "we grow your business", "SEO results included", "unlimited edits", "ownership included"
Use instead: "make it easier for customers to contact you", "professional online presence", "basic website structure and contact visibility", "updates depend on selected plan", "ownership transfer is not included unless separately purchased or approved"

## Seller Hub Rules

- Sellers are independent sales representatives, not W2 employees.
- Commission amounts must never appear on public customer pages.
- Sellers cannot promise: sales, leads, calls, revenue, Google ranking, unlimited edits, SEO, social media management, ad campaigns, ownership transfer, or faster delivery without complete client info.
