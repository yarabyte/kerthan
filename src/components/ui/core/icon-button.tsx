import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/icon";

type IconButtonVariant = "solid" | "gold" | "outline" | "ghost";
type IconButtonSize = "sm" | "md" | "lg";

const ICON_SIZE: Record<IconButtonSize, number> = { sm: 16, md: 20, lg: 24 };

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName | string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  label: string;
  children?: ReactNode;
}

export function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  label,
  className = "",
  children,
  ...rest
}: IconButtonProps) {
  const cls = ["kt-iconbtn", `kt-iconbtn--${variant}`, `kt-iconbtn--${size}`, className]
    .filter(Boolean)
    .join(" ");

  const content =
    children ||
    (typeof icon === "string" ? <Icon name={icon} size={ICON_SIZE[size]} /> : icon);

  return (
    <button type="button" className={cls} aria-label={label} title={label} {...rest}>
      {content}
    </button>
  );
}
