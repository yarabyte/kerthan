# Clinique Kerthan — Design System

A brand & UI system for **Clinique Kerthan**, a private health establishment in
Douala, Cameroon (Douala IVème, District de Santé de Bonassama). It powers the
clinic's marketing website and any future digital surfaces with a calm, warm,
clinically-clean visual language anchored to the clinic's logo.

> **Mission:** offrir des soins médicaux de qualité dans un environnement où les
> ressources sont limitées, en garantissant professionnalisme, rigueur et humanité.
> **Devise:** ACCUEIL – CONFORT – COMPÉTENCE · **Slogan:** « We Care »
> **Signature:** *20 years of compassionate care* (clinic founded March 2004).

## Sources

- `uploads/SITE WEB KERTHAN.docx` — the clinic's own brand & content brief (history,
  mission, values, services, médecine interne explainer). Primary copy source.
- `uploads/20 YEARS LOGO ORIGINAL.png` & `uploads/WhatsApp Image 2026-06-19 at 12.23.00.jpeg`
  — the anniversary logo / seal artwork the palette and marks are derived from.
- No codebase or Figma file was provided; the visual system is built from the logo
  artwork plus the written brief.

---

## CONTENT FUNDAMENTALS

**Language.** French (fr-FR) is the primary voice, with a few institutional English
brand-isms kept verbatim: *We Care*, *20 years of compassionate care*, and the English
service names *SMILE* and *CMTH (Center for Migration and Travel Health)*.

**Voice & person.** Warm, reassuring, competent — never clinical-cold. The clinic speaks
as **« nous »** and addresses the patient as **« vous »** ("Nous sommes à votre écoute").
Copy leads with care and humanity, then backs it with rigor ("professionnalisme, rigueur
et humanité"). Avoid hard-sell marketing language.

**Casing.** Sentence case for body and most headings. The three-word motto is set in
uppercase with em-dash separators: **ACCUEIL — CONFORT — COMPÉTENCE**. Eyebrows/overlines
are uppercase with wide tracking ("NOS SERVICES"). Brand name is "Clinique Kerthan"
(not all-caps) in running text.

**Punctuation.** French typographic quotes for the slogan: « We Care », « Science & art
de soigner ». Phone numbers in the Cameroon format `+237 6XX XX XX XX`.

**Emoji.** None. The brand never uses emoji. Warmth comes from the Caveat handwritten
accent and the green/gold palette, not from emoji or exclamation-heavy copy. The single
sanctioned exclamation is the sign-off **"We Care!"** in the footer.

**Examples.**
- Hero: *"Votre santé, soignée avec compassion."*
- Reassurance: *"Toute personne qui entre chez nous bénéficie d'un accueil chaleureux."*
- Médecine interne tagline: *« La combinaison de la science et de l'art de soigner. »*
- CTA verbs: *Prendre rendez-vous*, *Nous appeler*, *En savoir plus*, *Envoyer ma demande*.

---

## VISUAL FOUNDATIONS

**Color.** Three brand hues pulled straight from the logo, over green-warm neutrals:
- **Green** (primary — health, vitality, foliage): `--green-500 #3E9B4C`, hover `--green-600`,
  deep text/panels `--green-700`→`--green-900`. The deepest green (`--surface-brand-deep
  #0C3318`) is the dark-section / footer ground.
- **Gold** (warmth, hospitality, the metallic "K"): `--gold-500 #E8A917`; `--gold-300` for
  accents on dark green; `--gold-metal #B08D2E` for the antique logo gold.
- **Red** (the medical cross, emphasis, alerts): `--red-500 #C0392B`.
- **Neutrals** carry a faint green warmth (`--neutral-50 #F6F8F5` … `--neutral-900 #141A15`)
  so the whole UI reads calm and clean rather than sterile gray.
Reference the **semantic aliases** in components (`--color-primary`, `--text-body`,
`--surface-card`, `--border-subtle`), not raw scale steps.

**Type.** Display **Plus Jakarta Sans** (700/800, tight tracking) for headings; body/UI
**Lexend** (300–600, engineered for readability); accent **Caveat** (handwritten) for the
"We Care" voice only. *Substitution note:* the printed logo's blackletter "KERTHAN" and
brush script are unlicensed display faces — these Google Fonts stand in for the digital
system. Swap for licensed faces if/when available. Fluid scale from `--text-2xs` (11px) to
`--text-5xl` (76px); headings use `--leading-tight` and `text-wrap: balance`.

**Spacing & layout.** 8px base grid (`--space-*`), section rhythm `--section-y`
clamp(3.5rem,7vw,7rem), gutter `--gutter`. Containers cap at `--container-xl 1280px`
(content usually 1120–1200px), centered, with generous section padding (~80px desktop).

**Backgrounds.** Mostly flat: white cards on the faint `--neutral-50` page, with **soft
green-tint panels** (`--green-50`) to separate sections. Dark sections use the deep-green
ground. Decorative **gradients are used sparingly** — `--grad-leaf`/`--grad-brand` on the
hero seal panel only. No photographic full-bleed by default; the brand's heartbeat motif
(`assets/motif-heartbeat.png`) is the one repeating graphic accent, used at low opacity.

**Imagery vibe.** Warm and human; greens and golds dominate. The anniversary card art is
the hero artifact. No cool/blue, no heavy grain, no black-and-white.

**Corner radii.** Generous and reassuring: cards `--radius-lg 18px`, big feature panels
`--radius-2xl 36px`, buttons & badges fully **pill** (`--radius-pill`). Nothing sharp.

**Borders.** Hairline `1px` in `--border-subtle`/`--border-default`; brand-tinted
`--border-brand` on hover. Buttons use a `1.5px` border so outlined variants stay crisp.

**Shadows.** Soft, **green-tinted, never pure black** — `--shadow-xs … --shadow-xl` all
built on `rgba(20,77,37,…)`; `--shadow-gold` for warm emphasis. Cards rest on `--shadow-sm`
and lift to `--shadow-lg` on hover.

**Motion.** Calm and quick. Eases: `--ease-standard` (default), `--ease-out`, `--ease-spring`
(reserved for playful accents). Durations `--dur-fast 120ms` / `--dur-base 220ms` /
`--dur-slow 380ms`. No infinite decorative loops.

**Hover states.** Links/nav tint to `--green-50` background + `--green-700` text. Cards
lift `translateY(-4px)` and deepen their shadow + brand border. Buttons darken to the
hover token (`--color-primary-hover`).

**Press states.** Buttons nudge `translateY(1px)` (no shrink). Focus shows a soft green
ring `--ring` (gold variant `--ring-gold`) — never a hard outline.

**Transparency & blur.** Sticky header uses `rgba(255,255,255,.94)` + `backdrop-filter:
blur(8px)`. On dark-green sections, feature cards are `rgba(255,255,255,.06)` with a
`rgba(255,255,255,.12)` hairline. Used sparingly, for chrome and dark-panel cards only.

**Cards.** White surface, hairline subtle border, `--radius-lg`, `--shadow-sm`, ~24px pad;
optional top accent border (green/gold) and an interactive lift on hover.

---

## ICONOGRAPHY

- **System:** [Lucide](https://lucide.dev) — line icons, 2px stroke, rounded — accessed
  through the `Icon` component (`<Icon name="heart-pulse" size={22} />`). The host page must
  load Lucide and call `lucide.createIcons()` after icons mount. **Never hand-draw SVG icons.**
- **Why Lucide:** no proprietary icon set ships with the brand; Lucide's calm rounded line
  style matches the soft, reassuring system. This is a documented substitution — swap if the
  clinic adopts a licensed set.
- **Common clinic glyphs:** `heart-pulse`, `stethoscope`, `microscope`, `scan`,
  `briefcase-medical`, `plane`, `shield-check`, `clock`, `calendar-check`, `phone`,
  `phone-call`, `map-pin`, `globe`, `user-round`, `activity`, `route`, `graduation-cap`,
  `check`, `arrow-right`, `facebook`, `music-2` (TikTok stand-in).
- **No emoji, no Unicode-glyph icons.** The only non-Lucide marks are the logo seal and the
  heartbeat motif (raster assets, below).
- **Brand assets** (`assets/`): `logo-seal.png` (primary mark), `logo-20-years.png`,
  `logo-badge.png`, `motif-heartbeat.png` (decorative pulse line), `brand-anniversary-card.jpeg`.

---

## INDEX — what's in this system

**Foundations**
- `styles.css` — global entry point (consumers link this one file). `@import` list only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`, `base.css`.
- `guidelines/*.html` — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the
  Design System tab.

**Components** — `window.CliniqueKerthanDesignSystem_0add2c.<Name>`
- `components/core/` — `Button`, `IconButton`, `Icon`, `Card`, `Badge`, `Avatar`, `Alert`.
- `components/forms/` — `Input`, `Select`, `Checkbox`, `Switch`.
- `components/brand/` — `SectionHeading`, `ServiceCard`, `StatCard`, `ContactItem`.
  Each directory has a `<Name>.jsx` + `.d.ts` + `.prompt.md` and a `*.card.html` thumbnail.

**Templates** (consuming projects copy these)
- `templates/clinique-website/` — **Site Clinique Kerthan**: full one-page clinic site
  (`CliniqueWebsite.dc.html`) — topbar, sticky header + mobile nav, hero, stats, services
  grid, history, médecine interne feature, interactive rendez-vous form, footer. Composes the
  components above; `ds-base.js` loads the system.

**UI kit (work-in-progress)**
- `ui_kits/website/` — `parts.jsx` / `sections.jsx` website section recreations. ⚠️ Incomplete:
  no `index.html` and the `kt-*` layout CSS is unwritten — prefer the `templates/` entry as the
  reusable starting point.

**Other**
- `SKILL.md` — Agent-Skills wrapper for downloading this system into Claude Code.
- `assets/` — logos, seal, motif, anniversary art.
