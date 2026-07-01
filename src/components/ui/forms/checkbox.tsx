import type { InputHTMLAttributes, ReactNode } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: ReactNode;
}

export function Checkbox({
  label,
  disabled = false,
  className = "",
  children,
  ...rest
}: CheckboxProps) {
  const cls = ["kt-check", disabled ? "kt-check--disabled" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={cls}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="kt-check__box">
        <svg viewBox="0 0 24 24">
          <polyline points="4 12 10 18 20 6" />
        </svg>
      </span>
      {(label || children) && <span>{label || children}</span>}
    </label>
  );
}
