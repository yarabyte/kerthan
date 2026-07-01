import type { HTMLAttributes, ReactNode } from "react";
import { Icon } from "@/components/ui/icon";

type AlertTone = "success" | "info" | "warning" | "danger";

const ICONS: Record<AlertTone, string> = {
  success: "circle-check",
  info: "info",
  warning: "triangle-alert",
  danger: "octagon-alert",
};

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  tone?: AlertTone;
  title?: string;
  icon?: boolean;
}

export function Alert({
  tone = "info",
  title,
  icon = true,
  className = "",
  children,
  ...rest
}: AlertProps) {
  const cls = ["kt-alert", `kt-alert--${tone}`, className].filter(Boolean).join(" ");

  return (
    <div className={cls} role="status" {...rest}>
      {icon && (
        <span className="kt-alert__icon">
          <Icon name={ICONS[tone]} size={20} />
        </span>
      )}
      <div>
        {title && <p className="kt-alert__title">{title}</p>}
        {children && <p className="kt-alert__body">{children}</p>}
      </div>
    </div>
  );
}
