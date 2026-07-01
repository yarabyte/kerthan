import React from 'react';

const STYLE_ID = 'kt-sectionheading-styles';
const CSS = `
.kt-heading{ display:flex; flex-direction:column; gap:10px; max-width:60ch; }
.kt-heading--center{ align-items:center; text-align:center; margin-left:auto; margin-right:auto; }
.kt-heading__eyebrow{
  display:inline-flex; align-items:center; gap:8px;
  font-family:var(--font-body); font-weight:600; font-size:12px;
  letter-spacing:.14em; text-transform:uppercase; color:var(--color-primary);
}
.kt-heading__eyebrow::before{ content:""; width:22px; height:2px; border-radius:2px; background:var(--color-accent); }
.kt-heading--center .kt-heading__eyebrow::after{ content:""; width:22px; height:2px; border-radius:2px; background:var(--color-accent); }
.kt-heading__title{
  font-family:var(--font-display); font-weight:800; letter-spacing:-.02em; line-height:1.1;
  font-size:var(--text-2xl); color:var(--text-strong); margin:0; text-wrap:balance;
}
.kt-heading__desc{ font-size:16px; line-height:1.6; color:var(--text-muted); margin:0; text-wrap:pretty; }
.kt-heading--light .kt-heading__title{ color:#fff; }
.kt-heading--light .kt-heading__desc{ color:rgba(255,255,255,.8); }
.kt-heading--light .kt-heading__eyebrow{ color:var(--gold-300); }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function SectionHeading({
  eyebrow = null,
  title,
  description = null,
  align = 'left',
  light = false,
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = [
    'kt-heading',
    align === 'center' ? 'kt-heading--center' : '',
    light ? 'kt-heading--light' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {eyebrow && <span className="kt-heading__eyebrow">{eyebrow}</span>}
      <h2 className="kt-heading__title">{title}</h2>
      {description && <p className="kt-heading__desc">{description}</p>}
    </div>
  );
}
