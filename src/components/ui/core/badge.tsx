import type { HTMLAttributes, ReactNode } from "react";

type BadgeTone = "green" | "gold" | "red" | "neutral" | "solid-green" | "solid-gold";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  dot?: boolean;
  leftIcon?: ReactNode;
}

export function Badge({
  tone = "green",
  dot = false,
  leftIcon,
  className = "",
  children,
  ...rest
}: BadgeProps) {
  const cls = ["kt-badge", `kt-badge--${tone}`, dot ? "kt-badge--dot" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={cls} {...rest}>
      {leftIcon}
      {children}
    </span>
  );
}
