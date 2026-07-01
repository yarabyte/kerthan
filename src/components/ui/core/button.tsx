import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "gold" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  href,
  type = "button",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const cls = [
    "kt-btn",
    `kt-btn--${variant}`,
    `kt-btn--${size}`,
    fullWidth ? "kt-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {leftIcon}
      {children && <span>{children}</span>}
      {rightIcon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} {...(rest as object)}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} {...rest}>
      {inner}
    </button>
  );
}
