import type { HTMLAttributes } from "react";

type StatTone = "green" | "gold" | "red" | "light";

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  suffix?: string;
  label: string;
  tone?: StatTone;
  align?: "left" | "center";
}

export function StatCard({
  value,
  suffix,
  label,
  tone = "green",
  align = "left",
  className = "",
  ...rest
}: StatCardProps) {
  const cls = [
    "kt-stat",
    `kt-stat--${tone}`,
    align === "center" ? "kt-stat--center" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cls} {...rest}>
      <div className="kt-stat__value">
        {value}
        {suffix && <span className="kt-stat__suffix">{suffix}</span>}
      </div>
      <div className="kt-stat__label">{label}</div>
    </div>
  );
}
