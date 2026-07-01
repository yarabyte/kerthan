import type { HTMLAttributes } from "react";

export interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
  ...rest
}: SectionHeadingProps) {
  const cls = [
    "kt-heading",
    align === "center" ? "kt-heading--center" : "",
    light ? "kt-heading--light" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} {...rest}>
      {eyebrow && <span className="kt-heading__eyebrow">{eyebrow}</span>}
      <h2 className="kt-heading__title">{title}</h2>
      {description && <p className="kt-heading__desc">{description}</p>}
    </div>
  );
}
