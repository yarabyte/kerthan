import type { CSSProperties, ReactNode } from "react";
import { ICON_MAP, type IconName } from "@/lib/icons";

export type { IconName } from "@/lib/icons";

export interface IconProps {
  name: IconName | string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: CSSProperties;
  className?: string;
}

export function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  style,
  className,
}: IconProps): ReactNode {
  const LucideIcon = ICON_MAP[name];
  if (!LucideIcon) return null;

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      style={{ display: "inline-flex", flex: "none", ...style }}
      className={className}
      aria-hidden
    />
  );
}
