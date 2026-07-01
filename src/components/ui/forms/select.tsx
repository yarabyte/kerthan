import type { ReactNode, SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: (string | { value: string; label: string })[];
  placeholder?: string;
  children?: ReactNode;
}

export function Select({
  label,
  options = [],
  placeholder,
  id,
  className = "",
  children,
  ...rest
}: SelectProps) {
  const selectId =
    id || (label ? `kt-sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

  return (
    <div className="kt-select-field">
      {label && (
        <label className="kt-select-field__label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <div className="kt-select-wrap">
        <select
          id={selectId}
          className={["kt-select", className].filter(Boolean).join(" ")}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => {
            const value = typeof o === "string" ? o : o.value;
            const text = typeof o === "string" ? o : o.label;
            return (
              <option key={value} value={value}>
                {text}
              </option>
            );
          })}
          {children}
        </select>
        <span className="kt-select-wrap__chev" />
      </div>
    </div>
  );
}
