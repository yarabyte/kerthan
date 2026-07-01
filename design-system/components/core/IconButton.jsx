import React from 'react';
import { Icon } from './Icon.jsx';

const STYLE_ID = 'kt-iconbutton-styles';
const CSS = `
.kt-iconbtn{
  --_bg:transparent; --_fg:var(--green-700); --_bgh:var(--green-50);
  display:inline-flex; align-items:center; justify-content:center;
  border:1.5px solid transparent; background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-circle); cursor:pointer; padding:0;
  transition:background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard),
    border-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard);
}
.kt-iconbtn:hover{ background:var(--_bgh); }
.kt-iconbtn:active{ transform:translateY(1px); }
.kt-iconbtn:focus-visible{ outline:none; box-shadow:var(--ring); }
.kt-iconbtn[disabled]{ opacity:.45; cursor:not-allowed; }
.kt-iconbtn--solid{ --_bg:var(--color-primary); --_fg:#fff; --_bgh:var(--color-primary-hover); }
.kt-iconbtn--gold{ --_bg:var(--color-accent); --_fg:#3a2a00; --_bgh:var(--color-accent-hover); }
.kt-iconbtn--outline{ border-color:var(--green-300); }
.kt-iconbtn--ghost{ --_bg:transparent; }
.kt-iconbtn--sm{ width:34px; height:34px; }
.kt-iconbtn--md{ width:42px; height:42px; }
.kt-iconbtn--lg{ width:52px; height:52px; }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

const ICON_SIZE = { sm: 16, md: 20, lg: 24 };

export function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = ['kt-iconbtn', `kt-iconbtn--${variant}`, `kt-iconbtn--${size}`, className]
    .filter(Boolean).join(' ');
  const content = children
    || (typeof icon === 'string' ? <Icon name={icon} size={ICON_SIZE[size]} /> : icon);
  return (
    <button type="button" className={cls} aria-label={label} title={label} {...rest}>
      {content}
    </button>
  );
}
