import type { HTMLAttributes, ReactNode } from "react";

type CardAccent = "green" | "gold" | null;
type CardVariant = "default" | "brand" | "flat";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  pad?: boolean;
  hover?: boolean;
  accent?: CardAccent;
  variant?: CardVariant;
}

export function Card({
  pad = true,
  hover = false,
  accent = null,
  variant = "default",
  className = "",
  children,
  ...rest
}: CardProps) {
  const cls = [
    "kt-card",
    pad ? "kt-card--pad" : "",
    hover ? "kt-card--hover" : "",
    accent === "green" ? "kt-card--accent" : "",
    accent === "gold" ? "kt-card--gold" : "",
    variant === "brand" ? "kt-card--brand" : "",
    variant === "flat" ? "kt-card--flat" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}
