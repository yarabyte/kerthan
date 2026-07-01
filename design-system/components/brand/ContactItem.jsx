import React from 'react';
import { Icon } from '../core/Icon.jsx';

const STYLE_ID = 'kt-contactitem-styles';
const CSS = `
.kt-contact{ display:flex; align-items:center; gap:13px; font-family:var(--font-body); }
.kt-contact__icon{
  width:42px; height:42px; border-radius:var(--radius-circle); flex:none;
  display:inline-flex; align-items:center; justify-content:center;
  background:var(--green-50); color:var(--green-600);
}
.kt-contact__label{ font-size:12px; color:var(--text-muted); margin:0; }
.kt-contact__value{ font-size:15px; font-weight:600; color:var(--text-strong); margin:0; text-decoration:none; }
a.kt-contact__value:hover{ color:var(--green-700); }
.kt-contact--light .kt-contact__icon{ background:rgba(255,255,255,.12); color:#fff; }
.kt-contact--light .kt-contact__label{ color:rgba(255,255,255,.65); }
.kt-contact--light .kt-contact__value{ color:#fff; }
.kt-contact--gold .kt-contact__icon{ background:var(--gold-50); color:var(--gold-600); }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function ContactItem({
  icon = 'phone',
  label,
  value,
  href = null,
  tone = 'green',
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = ['kt-contact', `kt-contact--${tone}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <span className="kt-contact__icon">
        {typeof icon === 'string' ? <Icon name={icon} size={20} /> : icon}
      </span>
      <div>
        {label && <p className="kt-contact__label">{label}</p>}
        {href
          ? <a className="kt-contact__value" href={href}>{value}</a>
          : <p className="kt-contact__value">{value}</p>}
      </div>
    </div>
  );
}
