import React from 'react';

const STYLE_ID = 'kt-card-styles';
const CSS = `
.kt-card{
  background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg); box-shadow:var(--shadow-sm);
  display:flex; flex-direction:column; overflow:hidden;
  transition:box-shadow var(--dur-base) var(--ease-standard),
    transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard);
}
.kt-card--pad{ padding:var(--space-5); }
.kt-card--hover:hover{ box-shadow:var(--shadow-lg); transform:translateY(-3px); border-color:var(--green-200); }
.kt-card--accent{ border-top:3px solid var(--color-primary); }
.kt-card--gold{ border-top:3px solid var(--color-accent); }
.kt-card--brand{ background:var(--surface-brand); border-color:transparent; color:#eaf6ec; }
.kt-card--flat{ box-shadow:none; }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Card({
  pad = true,
  hover = false,
  accent = null,        // null | "green" | "gold"
  variant = 'default',  // "default" | "brand" | "flat"
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = [
    'kt-card',
    pad ? 'kt-card--pad' : '',
    hover ? 'kt-card--hover' : '',
    accent === 'green' ? 'kt-card--accent' : '',
    accent === 'gold' ? 'kt-card--gold' : '',
    variant === 'brand' ? 'kt-card--brand' : '',
    variant === 'flat' ? 'kt-card--flat' : '',
    className,
  ].filter(Boolean).join(' ');
  return <div className={cls} {...rest}>{children}</div>;
}
