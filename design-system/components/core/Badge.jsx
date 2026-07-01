import React from 'react';

const STYLE_ID = 'kt-badge-styles';
const CSS = `
.kt-badge{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-body); font-weight:600; font-size:12px; line-height:1;
  padding:5px 11px; border-radius:var(--radius-pill); border:1px solid transparent;
  letter-spacing:.01em; white-space:nowrap;
}
.kt-badge--dot::before{ content:""; width:7px; height:7px; border-radius:50%; background:currentColor; }
.kt-badge--green{ background:var(--green-50); color:var(--green-700); border-color:var(--green-200); }
.kt-badge--gold{ background:var(--gold-50); color:var(--gold-700); border-color:var(--gold-200); }
.kt-badge--red{ background:var(--red-50); color:var(--red-600); border-color:var(--red-100); }
.kt-badge--neutral{ background:var(--neutral-100); color:var(--neutral-600); border-color:var(--neutral-200); }
.kt-badge--solid-green{ background:var(--color-primary); color:#fff; }
.kt-badge--solid-gold{ background:var(--color-accent); color:#3a2a00; }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Badge({
  tone = 'green',
  dot = false,
  leftIcon = null,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = ['kt-badge', `kt-badge--${tone}`, dot ? 'kt-badge--dot' : '', className]
    .filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {leftIcon}
      {children}
    </span>
  );
}
