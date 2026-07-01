import React from 'react';
import { Icon } from './Icon.jsx';

const STYLE_ID = 'kt-alert-styles';
const CSS = `
.kt-alert{
  display:flex; gap:12px; align-items:flex-start;
  border-radius:var(--radius-md); padding:14px 16px; border:1px solid transparent;
  font-family:var(--font-body); font-size:14px; line-height:1.5;
}
.kt-alert__icon{ flex:none; margin-top:1px; }
.kt-alert__title{ font-weight:600; margin:0 0 2px; }
.kt-alert__body{ color:var(--text-body); margin:0; }
.kt-alert--success{ background:var(--status-success-bg); border-color:var(--green-200); color:var(--green-800); }
.kt-alert--info{ background:var(--status-info-bg); border-color:#bcd9ef; color:#1c476b; }
.kt-alert--warning{ background:var(--status-warning-bg); border-color:var(--gold-200); color:var(--gold-700); }
.kt-alert--danger{ background:var(--status-danger-bg); border-color:var(--red-100); color:var(--red-700); }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

const ICONS = {
  success: 'circle-check',
  info: 'info',
  warning: 'triangle-alert',
  danger: 'octagon-alert',
};

export function Alert({
  tone = 'info',
  title = null,
  icon = true,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = ['kt-alert', `kt-alert--${tone}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} role="status" {...rest}>
      {icon && <span className="kt-alert__icon"><Icon name={ICONS[tone]} size={20} /></span>}
      <div>
        {title && <p className="kt-alert__title">{title}</p>}
        {children && <p className="kt-alert__body">{children}</p>}
      </div>
    </div>
  );
}
