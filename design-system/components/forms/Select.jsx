import React from 'react';

const STYLE_ID = 'kt-select-styles';
const CSS = `
.kt-select-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
.kt-select-field__label{ font-size:13px; font-weight:600; color:var(--text-strong); }
.kt-select-wrap{ position:relative; display:flex; align-items:center; }
.kt-select{
  appearance:none; width:100%; font-family:var(--font-body); font-size:15px; color:var(--text-strong);
  background:var(--surface-card); border:1.5px solid var(--border-default);
  border-radius:var(--radius-md); padding:11px 40px 11px 14px; cursor:pointer;
  transition:border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard);
}
.kt-select:hover{ border-color:var(--border-strong); }
.kt-select:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--ring); }
.kt-select[disabled]{ background:var(--surface-sunken); color:var(--text-muted); cursor:not-allowed; }
.kt-select-wrap__chev{
  position:absolute; right:14px; pointer-events:none; color:var(--text-muted);
  width:0; height:0; border-left:5px solid transparent; border-right:5px solid transparent;
  border-top:6px solid currentColor;
}
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Select({
  label = null,
  options = [],
  placeholder = null,
  id,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const selectId = id || (label ? `kt-sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className="kt-select-field">
      {label && <label className="kt-select-field__label" htmlFor={selectId}>{label}</label>}
      <div className="kt-select-wrap">
        <select id={selectId} className={['kt-select', className].filter(Boolean).join(' ')} {...rest}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
          {children}
        </select>
        <span className="kt-select-wrap__chev" />
      </div>
    </div>
  );
}
