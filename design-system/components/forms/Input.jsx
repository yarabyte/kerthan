import React from 'react';
import { Icon } from '../core/Icon.jsx';

const STYLE_ID = 'kt-input-styles';
const CSS = `
.kt-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
.kt-field__label{ font-size:13px; font-weight:600; color:var(--text-strong); }
.kt-field__req{ color:var(--color-cross); margin-left:2px; }
.kt-field__hint{ font-size:12px; color:var(--text-muted); }
.kt-field__hint--error{ color:var(--red-600); }
.kt-input-wrap{ position:relative; display:flex; align-items:center; }
.kt-input-wrap__icon{ position:absolute; left:13px; color:var(--text-faint); pointer-events:none; display:inline-flex; }
.kt-input{
  width:100%; font-family:var(--font-body); font-size:15px; color:var(--text-strong);
  background:var(--surface-card); border:1.5px solid var(--border-default);
  border-radius:var(--radius-md); padding:11px 14px;
  transition:border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard);
}
.kt-input::placeholder{ color:var(--text-faint); }
.kt-input:hover{ border-color:var(--border-strong); }
.kt-input:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--ring); }
.kt-input--icon{ padding-left:40px; }
.kt-input--error{ border-color:var(--red-500); }
.kt-input--error:focus{ box-shadow:0 0 0 3px rgba(192,57,43,.25); }
.kt-input[disabled]{ background:var(--surface-sunken); color:var(--text-muted); cursor:not-allowed; }
textarea.kt-input{ resize:vertical; min-height:96px; line-height:1.5; }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Input({
  label = null,
  hint = null,
  error = null,
  required = false,
  icon = null,
  multiline = false,
  id,
  className = '',
  ...rest
}) {
  injectStyles();
  const inputId = id || (label ? `kt-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const inputCls = [
    'kt-input',
    icon && !multiline ? 'kt-input--icon' : '',
    error ? 'kt-input--error' : '',
    className,
  ].filter(Boolean).join(' ');

  const control = multiline
    ? <textarea id={inputId} className={inputCls} {...rest} />
    : <input id={inputId} className={inputCls} {...rest} />;

  return (
    <div className="kt-field">
      {label && (
        <label className="kt-field__label" htmlFor={inputId}>
          {label}{required && <span className="kt-field__req">*</span>}
        </label>
      )}
      <div className="kt-input-wrap">
        {icon && !multiline && (
          <span className="kt-input-wrap__icon">
            {typeof icon === 'string' ? <Icon name={icon} size={18} /> : icon}
          </span>
        )}
        {control}
      </div>
      {error
        ? <span className="kt-field__hint kt-field__hint--error">{error}</span>
        : hint && <span className="kt-field__hint">{hint}</span>}
    </div>
  );
}
