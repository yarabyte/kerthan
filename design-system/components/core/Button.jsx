import React from 'react';

const STYLE_ID = 'kt-button-styles';
const CSS = `
.kt-btn{
  --_bg:var(--color-primary); --_fg:#fff; --_bd:transparent; --_bgh:var(--color-primary-hover);
  font-family:var(--font-body); font-weight:600; line-height:1;
  display:inline-flex; align-items:center; justify-content:center; gap:.55em;
  border:1.5px solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-pill); cursor:pointer; text-decoration:none; white-space:nowrap;
  transition:background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard),
    border-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard),
    box-shadow var(--dur-base) var(--ease-standard);
}
.kt-btn:hover{ background:var(--_bgh); }
.kt-btn:active{ transform:translateY(1px); }
.kt-btn:focus-visible{ outline:none; box-shadow:var(--ring); }
.kt-btn[disabled]{ opacity:.5; cursor:not-allowed; transform:none; }
.kt-btn--sm{ font-size:13px; padding:8px 16px; }
.kt-btn--md{ font-size:15px; padding:11px 22px; }
.kt-btn--lg{ font-size:16px; padding:15px 30px; }
.kt-btn--block{ width:100%; }
.kt-btn--primary{ --_bg:var(--color-primary); --_bgh:var(--color-primary-hover); box-shadow:var(--shadow-sm); }
.kt-btn--gold{ --_bg:var(--color-accent); --_fg:#3a2a00; --_bgh:var(--color-accent-hover); box-shadow:var(--shadow-sm); }
.kt-btn--secondary{ --_bg:var(--surface-card); --_fg:var(--green-700); --_bd:var(--green-300); --_bgh:var(--green-50); }
.kt-btn--ghost{ --_bg:transparent; --_fg:var(--green-700); --_bd:transparent; --_bgh:var(--green-50); }
.kt-btn--danger{ --_bg:var(--color-cross); --_fg:#fff; --_bgh:var(--red-600); }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  href = null,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = [
    'kt-btn',
    `kt-btn--${variant}`,
    `kt-btn--${size}`,
    fullWidth ? 'kt-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {leftIcon}
      {children && <span>{children}</span>}
      {rightIcon}
    </>
  );

  if (href) {
    return <a href={href} className={cls} {...rest}>{inner}</a>;
  }
  return <button type={type} className={cls} {...rest}>{inner}</button>;
}
