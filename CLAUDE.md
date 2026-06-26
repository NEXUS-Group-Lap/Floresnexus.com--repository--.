# Flores Nexus Group Project Rules

This project is for Flores Nexus Group, a managed website service for local service businesses.
Active development brief: Master Development Brief v4.1 (June 2026).

## Core Rules

- Do not promise sales, leads, calls, revenue, growth, or Google ranking.
- Do not promise unlimited edits or unlimited support.
- Do not promise ownership transfer unless separately purchased or approved.
- Do not use "Website-as-a-Service" in public copy (R-09).
- Always say production starts after payment and complete client information are received.
- Business System must use Request Quote, not direct checkout (never a Stripe payment link).
- Keep English and Spanish pages separate — do not mix languages in one homepage.
- Keep the moon/dark mode toggle working on all pages.
- Keep the design mobile-first, clear, visual, and sales-focused.
- Monthly price is never discounted (R-01).
- Annual is a prepay option (separate SKU), NOT a discount on monthly.
- Updates do not accumulate month to month (R-07).
- All extras are quoted and paid BEFORE work begins (R-08).
- Technical/legal details go in FAQ and terms, NOT in the hero (R-10).

## PROMO-01 (Launch Offer)

- Active: controlled via `promoConfig` in `src/data/plans.ts`
- Setup $0 for Nexus Card and Starter Website only
- Professional Website is EXCLUDED
- First month paid at confirmation, next charge in 30 days
- No fake countdown — honest urgency only (30 slots or while promo lasts)
- Regular setup price must remain visible alongside promo price
- Promotional $0 setup does NOT generate upgrade credit
- Add-ons are NOT included in the promo

## Language Structure

- `/` — Language gateway (no full navbar needed)
- `/en` — English homepage
- `/es` — Spanish homepage
- `/en/pricing`, `/es/precios`
- `/en/start`, `/es/empezar`
- `/en/thank-you`, `/es/gracias`
- `/en/faq`, `/es/preguntas`
- `/en/addons`, `/es/extras`
- `/en/ownership` — discrete ownership page
- `/en/careers`, `/es/carreras`

## Approved Prices (do not change without approval)

- Nexus Card: $99 setup + $29/month (optional $299/year)
- Starter Website: $299 setup + $79/month (optional $799/year)
- Professional Website: $699 setup + $149/month (optional $1,499/year) — mark as Recommended
- Business System: starting at $2,500 setup + $399/month (Request Quote only)

## Stripe & Config (central config: src/config/links.ts)

- NEXUS_CARD_STRIPE_LINK, STARTER_STRIPE_LINK, PROFESSIONAL_STRIPE_LINK
- NEXUS_CARD_PROMO_STRIPE_LINK, STARTER_PROMO_STRIPE_LINK (promo SKUs)
- BUSINESS_QUOTE_FORM_LINK, ONBOARDING_FORM_LINK
- CHANGE_REQUEST_FORM_LINK, UPDATE_PACK_STRIPE_LINK
- WHATSAPP_LINK, CONTACT_EMAIL, LEGAL_EMAIL

## Copy Rules

Avoid: "get more calls", "guaranteed leads", "we grow your business", "SEO results included", "unlimited edits", "ownership included", "hosting included" (use plain language), "Website-as-a-Service"
Use instead: "make it easier for customers to contact you", "professional space on the internet", "we keep it online and working", "updates depend on selected plan", "ownership transfer is not included unless separately purchased or approved"

## Form Structure (2-step)

- Step 1 (pre-payment, /en/start): name, business, phone, email, language, plan, billing type → Stripe
- Step 2 (post-payment, /en/thank-you): industry, service area, services, domain, rep code, logo/photos, social, notes, legal checkboxes
