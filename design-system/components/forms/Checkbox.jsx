import React from 'react';

const STYLE_ID = 'kt-checkbox-styles';
const CSS = `
.kt-check{ display:inline-flex; align-items:flex-start; gap:10px; font-family:var(--font-body);
  font-size:14px; color:var(--text-body); cursor:pointer; line-height:1.4; }
.kt-check input{ position:absolute; opacity:0; width:0; height:0; }
.kt-check__box{
  flex:none; width:20px; height:20px; border-radius:6px; border:1.5px solid var(--border-strong);
  background:var(--surface-card); display:inline-flex; align-items:center; justify-content:center;
  transition:background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard);
  margin-top:1px;
}
.kt-check__box svg{ width:13px; height:13px; stroke:#fff; stroke-width:3.5; fill:none;
  stroke-linecap:round; stroke-linejoin:round; opacity:0; transform:scale(.6);
  transition:opacity var(--dur-fast), transform var(--dur-fast) var(--ease-spring); }
.kt-check input:checked + .kt-check__box{ background:var(--color-primary); border-color:var(--color-primary); }
.kt-check input:checked + .kt-check__box svg{ opacity:1; transform:scale(1); }
.kt-check input:focus-visible + .kt-check__box{ box-shadow:var(--ring); }
.kt-check input:disabled + .kt-check__box{ background:var(--surface-sunken); border-color:var(--border-default); }
.kt-check--disabled{ opacity:.55; cursor:not-allowed; }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Checkbox({
  label = null,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = ['kt-check', disabled ? 'kt-check--disabled' : '', className].filter(Boolean).join(' ');
  return (
    <label className={cls}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="kt-check__box">
        <svg viewBox="0 0 24 24"><polyline points="4 12 10 18 20 6" /></svg>
      </span>
      {(label || children) && <span>{label || children}</span>}
    </label>
  );
}
