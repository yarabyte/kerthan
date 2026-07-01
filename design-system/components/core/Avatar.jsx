import React from 'react';

const STYLE_ID = 'kt-avatar-styles';
const CSS = `
.kt-avatar{
  display:inline-flex; align-items:center; justify-content:center;
  border-radius:var(--radius-circle); overflow:hidden; flex:none;
  background:var(--green-100); color:var(--green-800);
  font-family:var(--font-display); font-weight:700; line-height:1;
  border:2px solid var(--surface-card); box-shadow:var(--shadow-sm);
}
.kt-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
.kt-avatar--gold{ background:var(--gold-100); color:var(--gold-700); }
.kt-avatar--sm{ width:34px; height:34px; font-size:13px; }
.kt-avatar--md{ width:46px; height:46px; font-size:16px; }
.kt-avatar--lg{ width:64px; height:64px; font-size:22px; }
.kt-avatar--xl{ width:88px; height:88px; font-size:30px; }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || '').join('').toUpperCase();
}

export function Avatar({
  src = null,
  name = '',
  tone = 'green',
  size = 'md',
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = ['kt-avatar', `kt-avatar--${tone}`, `kt-avatar--${size}`, className]
    .filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {src ? <img src={src} alt={name} /> : <span>{initials(name)}</span>}
    </span>
  );
}
