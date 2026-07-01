import { formatRichContent } from "@/lib/rich-text";

interface RichContentProps {
  html: string;
  className?: string;
}

export function RichContent({ html, className = "" }: RichContentProps) {
  const safe = formatRichContent(html);
  if (!safe) return null;

  return (
    <div
      className={`kt-rich-content ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}
