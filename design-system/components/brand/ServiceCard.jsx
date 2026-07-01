import React from 'react';
import { Icon } from '../core/Icon.jsx';

const STYLE_ID = 'kt-servicecard-styles';
const CSS = `
.kt-service{
  display:flex; flex-direction:column; gap:14px; height:100%;
  background:var(--surface-card); border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg); padding:24px; box-shadow:var(--shadow-sm);
  transition:box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard),
    border-color var(--dur-base) var(--ease-standard);
}
.kt-service--link{ cursor:pointer; text-decoration:none; color:inherit; }
.kt-service--link:hover{ box-shadow:var(--shadow-lg); transform:translateY(-4px); border-color:var(--green-200); }
.kt-service__icon{
  width:54px; height:54px; border-radius:var(--radius-md); flex:none;
  display:inline-flex; align-items:center; justify-content:center;
  background:var(--green-50); color:var(--green-600);
}
.kt-service--gold .kt-service__icon{ background:var(--gold-50); color:var(--gold-600); }
.kt-service--red .kt-service__icon{ background:var(--red-50); color:var(--red-500); }
.kt-service__title{ font-family:var(--font-display); font-weight:700; font-size:18px; color:var(--text-strong); margin:0; }
.kt-service__desc{ font-size:14px; line-height:1.55; color:var(--text-muted); margin:0; flex:1; }
.kt-service__more{
  display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:600;
  color:var(--green-700); margin-top:2px;
}
.kt-service--link:hover .kt-service__more{ gap:9px; }
.kt-service__more span{ transition:gap var(--dur-base); }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function ServiceCard({
  icon = 'stethoscope',
  title,
  description,
  tone = 'green',
  href = null,
  moreLabel = 'En savoir plus',
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = ['kt-service', `kt-service--${tone}`, href ? 'kt-service--link' : '', className]
    .filter(Boolean).join(' ');
  const inner = (
    <>
      <span className="kt-service__icon">
        {typeof icon === 'string' ? <Icon name={icon} size={26} /> : icon}
      </span>
      <h3 className="kt-service__title">{title}</h3>
      {description && <p className="kt-service__desc">{description}</p>}
      {href && (
        <span className="kt-service__more">
          {moreLabel} <Icon name="arrow-right" size={15} />
        </span>
      )}
    </>
  );
  return href
    ? <a href={href} className={cls} {...rest}>{inner}</a>
    : <div className={cls} {...rest}>{inner}</div>;
}
