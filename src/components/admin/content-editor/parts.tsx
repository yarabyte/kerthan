import type { ReactNode } from "react";

export function ContentField({
  label,
  value,
  onChange,
  multiline,
  readOnly,
  hint,
  wide,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  readOnly?: boolean;
  hint?: string;
  wide?: boolean;
}) {
  return (
    <div className={`kt-admin__field${wide ? " kt-admin__field--wide" : ""}`}>
      <label>{label}</label>
      {hint && <span className="kt-admin__field-hint">{hint}</span>}
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readOnly}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readOnly}
        />
      )}
    </div>
  );
}

export function ContentPanel({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="kt-content-panel">
      <header className="kt-content-panel__head">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </header>
      <div className="kt-content-panel__body">{children}</div>
    </div>
  );
}

export function SaveBar({
  saving,
  onSave,
  label = "Enregistrer",
  extra,
}: {
  saving: boolean;
  onSave: () => void;
  label?: string;
  extra?: ReactNode;
}) {
  return (
    <div className="kt-content-panel__save">
      {extra}
      <button
        type="button"
        className="kt-admin__btn kt-admin__btn--primary"
        disabled={saving}
        onClick={onSave}
      >
        {saving ? "Enregistrement…" : label}
      </button>
    </div>
  );
}
