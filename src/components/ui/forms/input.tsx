import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Icon, type IconName } from "@/components/ui/icon";

type InputProps = (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>) & {
  label?: string;
  hint?: string;
  error?: string;
  icon?: IconName | string;
  multiline?: boolean;
};

export function Input({
  label,
  hint,
  error,
  required,
  icon,
  multiline = false,
  id,
  className = "",
  ...rest
}: InputProps) {
  const inputId =
    id || (label ? `kt-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

  const inputCls = [
    "kt-input",
    icon && !multiline ? "kt-input--icon" : "",
    error ? "kt-input--error" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const control = multiline ? (
    <textarea id={inputId} className={inputCls} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
  ) : (
    <input id={inputId} className={inputCls} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
  );

  return (
    <div className="kt-field">
      {label && (
        <label className="kt-field__label" htmlFor={inputId}>
          {label}
          {required && <span className="kt-field__req">*</span>}
        </label>
      )}
      <div className="kt-input-wrap">
        {icon && !multiline && (
          <span className="kt-input-wrap__icon">
            <Icon name={icon} size={18} />
          </span>
        )}
        {control}
      </div>
      {error ? (
        <span className="kt-field__hint kt-field__hint--error">{error}</span>
      ) : (
        hint && <span className="kt-field__hint">{hint}</span>
      )}
    </div>
  );
}
