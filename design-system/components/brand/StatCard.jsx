import React from 'react';

const STYLE_ID = 'kt-statcard-styles';
const CSS = `
.kt-stat{ display:flex; flex-direction:column; gap:4px; font-family:var(--font-body); }
.kt-stat__value{
  font-family:var(--font-display); font-weight:800; line-height:1;
  font-size:46px; letter-spacing:-.02em; color:var(--color-primary);
  display:flex; align-items:baseline; gap:4px;
}
.kt-stat__suffix{ font-size:24px; font-weight:700; }
.kt-stat__label{ font-size:14px; color:var(--text-muted); font-weight:500; }
.kt-stat--gold .kt-stat__value{ color:var(--gold-600); }
.kt-stat--red .kt-stat__value{ color:var(--color-cross); }
.kt-stat--light .kt-stat__value{ color:#fff; }
.kt-stat--light .kt-stat__label{ color:rgba(255,255,255,.75); }
.kt-stat--center{ align-items:center; text-align:center; }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function StatCard({
  value,
  suffix = null,
  label,
  tone = 'green',
  align = 'left',
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = ['kt-stat', `kt-stat--${tone}`, align === 'center' ? 'kt-stat--center' : '', className]
    .filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <div className="kt-stat__value">
        {value}{suffix && <span className="kt-stat__suffix">{suffix}</span>}
      </div>
      <div className="kt-stat__label">{label}</div>
    </div>
  );
}
