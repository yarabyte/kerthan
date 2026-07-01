---
name: clinique-kerthan-design
description: Use this skill to generate well-branded interfaces and assets for Clinique Kerthan (a private clinic in Douala, Cameroon), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Key entry points:
- `readme.md` — brand guide: content voice (French, « nous »/« vous », no emoji), visual foundations, iconography (Lucide), and a full index of tokens/components/templates.
- `styles.css` — link this one file to inherit every token and font-face.
- `templates/clinique-website/` — a complete clinic homepage to copy from or follow.
- `components/{core,forms,brand}/` — reusable React primitives; each has a `.prompt.md` with usage.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
