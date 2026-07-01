import DOMPurify from "isomorphic-dompurify";

const ALLOWED_TAGS = [
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "h2",
  "h3",
  "ul",
  "ol",
  "li",
  "a",
  "blockquote",
];

const ALLOWED_ATTR = ["href", "target", "rel"];

/** Détecte si le contenu est du HTML (éditeur) ou du texte brut (legacy). */
export function isRichHtml(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.startsWith("<") && /<\/[a-z][\s\S]*>/i.test(trimmed);
}

/** Convertit le texte brut legacy en HTML pour l'éditeur ou l'affichage. */
export function plainTextToHtml(value: string): string {
  if (!value.trim()) return "";
  if (isRichHtml(value)) return value;

  return value
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => `<p>${escapeHtml(block).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

export function sanitizeRichHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ADD_ATTR: ["target"],
  });
}

/** HTML sûr prêt pour dangerouslySetInnerHTML. */
export function formatRichContent(value: string): string {
  const html = isRichHtml(value) ? value : plainTextToHtml(value);
  return sanitizeRichHtml(html);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
