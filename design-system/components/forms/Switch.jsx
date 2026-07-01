import React from 'react';

const STYLE_ID = 'kt-switch-styles';
const CSS = `
.kt-switch{ display:inline-flex; align-items:center; gap:10px; font-family:var(--font-body);
  font-size:14px; color:var(--text-body); cursor:pointer; }
.kt-switch input{ position:absolute; opacity:0; width:0; height:0; }
.kt-switch__track{
  position:relative; width:44px; height:26px; border-radius:var(--radius-pill);
  background:var(--neutral-300); transition:background var(--dur-base) var(--ease-standard); flex:none;
}
.kt-switch__thumb{
  position:absolute; top:3px; left:3px; width:20px; height:20px; border-radius:50%;
  background:#fff; box-shadow:var(--shadow-sm);
  transition:transform var(--dur-base) var(--ease-spring);
}
.kt-switch input:checked + .kt-switch__track{ background:var(--color-primary); }
.kt-switch input:checked + .kt-switch__track .kt-switch__thumb{ transform:translateX(18px); }
.kt-switch input:focus-visible + .kt-switch__track{ box-shadow:var(--ring); }
.kt-switch input:disabled + .kt-switch__track{ opacity:.5; }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Switch({ label = null, disabled = false, className = '', children, ...rest }) {
  injectStyles();
  return (
    <label className={['kt-switch', className].filter(Boolean).join(' ')}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="kt-switch__track"><span className="kt-switch__thumb" /></span>
      {(label || children) && <span>{label || children}</span>}
    </label>
  );
}
