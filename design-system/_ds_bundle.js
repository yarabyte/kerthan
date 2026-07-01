/* @ds-bundle: {"format":3,"namespace":"CliniqueKerthanDesignSystem_0add2c","components":[{"name":"ContactItem","sourcePath":"components/brand/ContactItem.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/brand/ServiceCard.jsx"},{"name":"StatCard","sourcePath":"components/brand/StatCard.jsx"},{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/brand/ContactItem.jsx":"f3cbdc75a405","components/brand/SectionHeading.jsx":"99e87a59726b","components/brand/ServiceCard.jsx":"c878183d04d8","components/brand/StatCard.jsx":"02549bac84f6","components/core/Alert.jsx":"3a13e11874c2","components/core/Avatar.jsx":"86ecf9021ebd","components/core/Badge.jsx":"c05e4a94b2f3","components/core/Button.jsx":"5d68ee72a5a6","components/core/Card.jsx":"4102d3965faa","components/core/Icon.jsx":"c36667581cb0","components/core/IconButton.jsx":"d8590928dff0","components/forms/Checkbox.jsx":"e1e822df5dcb","components/forms/Input.jsx":"9adc1e97f2e7","components/forms/Select.jsx":"644032645a31","components/forms/Switch.jsx":"3f493ec89334","ui_kits/website/parts.jsx":"6ceee3d8dc2e","ui_kits/website/sections.jsx":"d74fe75b83a7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CliniqueKerthanDesignSystem_0add2c = window.CliniqueKerthanDesignSystem_0add2c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SectionHeading({
  eyebrow = null,
  title,
  description = null,
  align = 'left',
  light = false,
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = ['kt-heading', align === 'center' ? 'kt-heading--center' : '', light ? 'kt-heading--light' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "kt-heading__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "kt-heading__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "kt-heading__desc"
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'kt-statcard-styles';
const CSS = `
.kt-stat{ display:flex; flex-direction:column; gap:4px; font-family:var(--font-body); }
.kt-stat__value{
  font-family:var(--font-display); font-weight:800; line-height:1;
  font-size:46px; letter-spacing:-.02em; color:var(--color-primary);
  display:flex; align-items:baseline; gap:4px;
}
.kt-stat__suffix{ font-size:24px; font-weight:700; }
.kt-stat__label{ font-size:14px; color:var(--text-muted); font-weight:500; }
.kt-stat--gold .kt-stat__value{ color:var(--gold-600); }
.kt-stat--red .kt-stat__value{ color:var(--color-cross); }
.kt-stat--light .kt-stat__value{ color:#fff; }
.kt-stat--light .kt-stat__label{ color:rgba(255,255,255,.75); }
.kt-stat--center{ align-items:center; text-align:center; }
`;
function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function StatCard({
  value,
  suffix = null,
  label,
  tone = 'green',
  align = 'left',
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = ['kt-stat', `kt-stat--${tone}`, align === 'center' ? 'kt-stat--center' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "kt-stat__value"
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    className: "kt-stat__suffix"
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    className: "kt-stat__label"
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}
function Avatar({
  src = null,
  name = '',
  tone = 'green',
  size = 'md',
  className = '',
  ...rest
}) {
  injectStyles();
  const cls = ['kt-avatar', `kt-avatar--${tone}`, `kt-avatar--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials(name)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  tone = 'green',
  dot = false,
  leftIcon = null,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = ['kt-badge', `kt-badge--${tone}`, dot ? 'kt-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), leftIcon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ['kt-btn', `kt-btn--${variant}`, `kt-btn--${size}`, fullWidth ? 'kt-btn--block' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, leftIcon, children && /*#__PURE__*/React.createElement("span", null, children), rightIcon);
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  pad = true,
  hover = false,
  accent = null,
  // null | "green" | "gold"
  variant = 'default',
  // "default" | "brand" | "flat"
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = ['kt-card', pad ? 'kt-card--pad' : '', hover ? 'kt-card--hover' : '', accent === 'green' ? 'kt-card--accent' : '', accent === 'gold' ? 'kt-card--gold' : '', variant === 'brand' ? 'kt-card--brand' : '', variant === 'flat' ? 'kt-card--flat' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — thin wrapper over Lucide. Renders a placeholder <i data-lucide>
 * element that the host page upgrades to an SVG via lucide.createIcons().
 * The page MUST load Lucide and call lucide.createIcons() after render.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    "data-lucide": name,
    "data-stroke": strokeWidth,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      flex: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/ContactItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ContactItem({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "kt-contact__icon"
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }) : icon), /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("p", {
    className: "kt-contact__label"
  }, label), href ? /*#__PURE__*/React.createElement("a", {
    className: "kt-contact__value",
    href: href
  }, value) : /*#__PURE__*/React.createElement("p", {
    className: "kt-contact__value"
  }, value)));
}
Object.assign(__ds_scope, { ContactItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ContactItem.jsx", error: String((e && e.message) || e) }); }

// components/brand/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ServiceCard({
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
  const cls = ['kt-service', `kt-service--${tone}`, href ? 'kt-service--link' : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "kt-service__icon"
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26
  }) : icon), /*#__PURE__*/React.createElement("h3", {
    className: "kt-service__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "kt-service__desc"
  }, description), href && /*#__PURE__*/React.createElement("span", {
    className: "kt-service__more"
  }, moreLabel, " ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15
  })));
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), inner) : /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  danger: 'octagon-alert'
};
function Alert({
  tone = 'info',
  title = null,
  icon = true,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = ['kt-alert', `kt-alert--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "status"
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "kt-alert__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[tone],
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("p", {
    className: "kt-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "kt-alert__body"
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const ICON_SIZE = {
  sm: 16,
  md: 20,
  lg: 24
};
function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = ['kt-iconbtn', `kt-iconbtn--${variant}`, `kt-iconbtn--${size}`, className].filter(Boolean).join(' ');
  const content = children || (typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ICON_SIZE[size]
  }) : icon);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label
  }, rest), content);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'kt-checkbox-styles';
const CSS = `
.kt-check{ display:inline-flex; align-items:flex-start; gap:10px; font-family:var(--font-body);
  font-size:14px; color:var(--text-body); cursor:pointer; line-height:1.4; }
.kt-check input{ position:absolute; opacity:0; width:0; height:0; }
.kt-check__box{
  flex:none; width:20px; height:20px; border-radius:6px; border:1.5px solid var(--border-strong);
  background:var(--surface-card); display:inline-flex; align-items:center; justify-content:center;
  transition:background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard);
  margin-top:1px;
}
.kt-check__box svg{ width:13px; height:13px; stroke:#fff; stroke-width:3.5; fill:none;
  stroke-linecap:round; stroke-linejoin:round; opacity:0; transform:scale(.6);
  transition:opacity var(--dur-fast), transform var(--dur-fast) var(--ease-spring); }
.kt-check input:checked + .kt-check__box{ background:var(--color-primary); border-color:var(--color-primary); }
.kt-check input:checked + .kt-check__box svg{ opacity:1; transform:scale(1); }
.kt-check input:focus-visible + .kt-check__box{ box-shadow:var(--ring); }
.kt-check input:disabled + .kt-check__box{ background:var(--surface-sunken); border-color:var(--border-default); }
.kt-check--disabled{ opacity:.55; cursor:not-allowed; }
`;
function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Checkbox({
  label = null,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const cls = ['kt-check', disabled ? 'kt-check--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "kt-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "4 12 10 18 20 6"
  }))), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'kt-input-styles';
const CSS = `
.kt-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
.kt-field__label{ font-size:13px; font-weight:600; color:var(--text-strong); }
.kt-field__req{ color:var(--color-cross); margin-left:2px; }
.kt-field__hint{ font-size:12px; color:var(--text-muted); }
.kt-field__hint--error{ color:var(--red-600); }
.kt-input-wrap{ position:relative; display:flex; align-items:center; }
.kt-input-wrap__icon{ position:absolute; left:13px; color:var(--text-faint); pointer-events:none; display:inline-flex; }
.kt-input{
  width:100%; font-family:var(--font-body); font-size:15px; color:var(--text-strong);
  background:var(--surface-card); border:1.5px solid var(--border-default);
  border-radius:var(--radius-md); padding:11px 14px;
  transition:border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard);
}
.kt-input::placeholder{ color:var(--text-faint); }
.kt-input:hover{ border-color:var(--border-strong); }
.kt-input:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--ring); }
.kt-input--icon{ padding-left:40px; }
.kt-input--error{ border-color:var(--red-500); }
.kt-input--error:focus{ box-shadow:0 0 0 3px rgba(192,57,43,.25); }
.kt-input[disabled]{ background:var(--surface-sunken); color:var(--text-muted); cursor:not-allowed; }
textarea.kt-input{ resize:vertical; min-height:96px; line-height:1.5; }
`;
function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Input({
  label = null,
  hint = null,
  error = null,
  required = false,
  icon = null,
  multiline = false,
  id,
  className = '',
  ...rest
}) {
  injectStyles();
  const inputId = id || (label ? `kt-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const inputCls = ['kt-input', icon && !multiline ? 'kt-input--icon' : '', error ? 'kt-input--error' : '', className].filter(Boolean).join(' ');
  const control = multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    className: inputCls
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: inputCls
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    className: "kt-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "kt-field__label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "kt-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "kt-input-wrap"
  }, icon && !multiline && /*#__PURE__*/React.createElement("span", {
    className: "kt-input-wrap__icon"
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }) : icon), control), error ? /*#__PURE__*/React.createElement("span", {
    className: "kt-field__hint kt-field__hint--error"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "kt-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'kt-select-styles';
const CSS = `
.kt-select-field{ display:flex; flex-direction:column; gap:6px; font-family:var(--font-body); }
.kt-select-field__label{ font-size:13px; font-weight:600; color:var(--text-strong); }
.kt-select-wrap{ position:relative; display:flex; align-items:center; }
.kt-select{
  appearance:none; width:100%; font-family:var(--font-body); font-size:15px; color:var(--text-strong);
  background:var(--surface-card); border:1.5px solid var(--border-default);
  border-radius:var(--radius-md); padding:11px 40px 11px 14px; cursor:pointer;
  transition:border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard);
}
.kt-select:hover{ border-color:var(--border-strong); }
.kt-select:focus{ outline:none; border-color:var(--color-primary); box-shadow:var(--ring); }
.kt-select[disabled]{ background:var(--surface-sunken); color:var(--text-muted); cursor:not-allowed; }
.kt-select-wrap__chev{
  position:absolute; right:14px; pointer-events:none; color:var(--text-muted);
  width:0; height:0; border-left:5px solid transparent; border-right:5px solid transparent;
  border-top:6px solid currentColor;
}
`;
function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
function Select({
  label = null,
  options = [],
  placeholder = null,
  id,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  const selectId = id || (label ? `kt-sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "kt-select-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "kt-select-field__label",
    htmlFor: selectId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "kt-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    className: ['kt-select', className].filter(Boolean).join(' ')
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "kt-select-wrap__chev"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Switch({
  label = null,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  injectStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ['kt-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "kt-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kt-switch__thumb"
  })), (label || children) && /*#__PURE__*/React.createElement("span", null, label || children));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts.jsx
try { (() => {
/* Clinique Kerthan — Website UI kit · header + hero + services + about
   Babel script: reads primitives from the DS namespace, exports parts to window. */
const NS = window.CliniqueKerthanDesignSystem_0add2c;
const {
  Button,
  IconButton,
  Badge,
  Icon,
  ServiceCard,
  StatCard,
  SectionHeading,
  ContactItem,
  Card
} = NS;
const NAV = [{
  id: 'accueil',
  label: 'Accueil'
}, {
  id: 'histoire',
  label: 'Notre histoire'
}, {
  id: 'services',
  label: 'Services'
}, {
  id: 'interne',
  label: 'Médecine interne'
}, {
  id: 'contact',
  label: 'Contact'
}];
function TopBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "kt-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-container kt-topbar__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-topbar__contacts"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), " Urgences 24/7 : ", /*#__PURE__*/React.createElement("strong", null, "+237 699 41 61 53")), /*#__PURE__*/React.createElement("span", {
    className: "kt-hide-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), " 1\xE8re rue Nangah, Bonaberi \u2014 Douala")), /*#__PURE__*/React.createElement("div", {
    className: "kt-topbar__social"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kt-hide-sm"
  }, "Nous suivre"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "facebook",
    variant: "ghost",
    size: "sm",
    label: "Facebook"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "music",
    variant: "ghost",
    size: "sm",
    label: "TikTok"
  }))));
}
function Header({
  active,
  onNav,
  onBook
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "kt-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-container kt-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "kt-brand",
    href: "#accueil",
    onClick: e => {
      e.preventDefault();
      onNav('accueil');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-seal.png",
    alt: "Clinique Kerthan",
    className: "kt-brand__mark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "kt-brand__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kt-brand__name"
  }, "Clinique Kerthan"), /*#__PURE__*/React.createElement("span", {
    className: "kt-brand__tag"
  }, "We Care \xB7 depuis 2004"))), /*#__PURE__*/React.createElement("nav", {
    className: `kt-nav ${open ? 'is-open' : ''}`
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    className: `kt-nav__link ${active === n.id ? 'is-active' : ''}`,
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
      setOpen(false);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "kt-header__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-check",
      size: 17
    }),
    onClick: onBook
  }, "Rendez-vous"), /*#__PURE__*/React.createElement("span", {
    className: "kt-burger"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: open ? 'x' : 'menu',
    variant: "outline",
    label: "Menu",
    onClick: () => setOpen(!open)
  })))));
}
function Hero({
  onBook,
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "accueil",
    className: "kt-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-container kt-hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-hero__copy"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    dot: true
  }, "Clinique priv\xE9e \xB7 Bonaberi, Douala"), /*#__PURE__*/React.createElement("h1", {
    className: "kt-hero__title"
  }, "Votre sant\xE9, soign\xE9e avec ", /*#__PURE__*/React.createElement("span", {
    className: "kt-underline"
  }, "compassion"), "."), /*#__PURE__*/React.createElement("p", {
    className: "kt-hero__lead"
  }, "Depuis 2004, la Clinique Kerthan offre des soins m\xE9dicaux de qualit\xE9 dans un environnement chaleureux et humain \u2014 avec professionnalisme, rigueur et humanit\xE9."), /*#__PURE__*/React.createElement("div", {
    className: "kt-motto"
  }, /*#__PURE__*/React.createElement("span", null, "Accueil"), /*#__PURE__*/React.createElement("i", null, "\u2014"), /*#__PURE__*/React.createElement("span", null, "Confort"), /*#__PURE__*/React.createElement("i", null, "\u2014"), /*#__PURE__*/React.createElement("span", null, "Comp\xE9tence")), /*#__PURE__*/React.createElement("div", {
    className: "kt-hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-check",
      size: 19
    }),
    onClick: onBook
  }, "Prendre rendez-vous"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "stethoscope",
      size: 18
    }),
    onClick: () => onNav('services')
  }, "Nos services"))), /*#__PURE__*/React.createElement("div", {
    className: "kt-hero__visual"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-hero__card"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-seal.png",
    alt: "Sceau Clinique Kerthan",
    className: "kt-hero__seal"
  }), /*#__PURE__*/React.createElement("p", {
    className: "kt-script"
  }, "We Care"), /*#__PURE__*/React.createElement("p", {
    className: "kt-hero__sig"
  }, "20 years of compassionate care"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/motif-heartbeat.png",
    alt: "",
    className: "kt-hero__pulse"
  })), /*#__PURE__*/React.createElement("div", {
    className: "kt-hero__chip kt-hero__chip--1"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 20,
    color: "var(--green-600)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Soins certifi\xE9s"), /*#__PURE__*/React.createElement("span", null, "aux standards en vigueur"))), /*#__PURE__*/React.createElement("div", {
    className: "kt-hero__chip kt-hero__chip--2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 20,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Urgences 24/7"), /*#__PURE__*/React.createElement("span", null, "toujours \xE0 votre \xE9coute"))))));
}
function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    className: "kt-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-container kt-stats__row"
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "20",
    suffix: "ans",
    label: "d'exp\xE9rience \xE0 Douala",
    align: "center"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "6",
    label: "services m\xE9dicaux",
    tone: "gold",
    align: "center"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "24/7",
    label: "service d'urgences",
    tone: "red",
    align: "center"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "100%",
    label: "approche humaine",
    align: "center"
  })));
}
const SERVICES = [{
  icon: 'stethoscope',
  tone: 'green',
  title: 'Médecine générale & spécialités',
  desc: 'Consultations, diagnostics et suivi médical pour toute la famille.'
}, {
  icon: 'heart-pulse',
  tone: 'red',
  title: 'Médecine interne',
  desc: 'Prévention et traitement des maladies chroniques et des cas complexes de l\'adulte.'
}, {
  icon: 'briefcase-medical',
  tone: 'gold',
  title: 'SMILE — Inter-entreprises',
  desc: 'Service Médical Inter-entreprise de Liaison et d\'Expertise pour les entreprises.'
}, {
  icon: 'plane',
  tone: 'green',
  title: 'CMTH — Voyage & migration',
  desc: 'Centre for Migration and Travel Health : bilans et vaccins du voyageur.'
}, {
  icon: 'scan',
  tone: 'gold',
  title: 'Imagerie médicale',
  desc: 'Examens d\'imagerie pour un diagnostic précis et rapide.'
}, {
  icon: 'microscope',
  tone: 'red',
  title: 'Laboratoire d\'analyses',
  desc: 'Analyses biologiques fiables, réalisées dans nos propres locaux.'
}];
function Services({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "kt-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-container"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nos services",
    align: "center",
    title: "Un plateau technique complet",
    description: "De la m\xE9decine g\xE9n\xE9rale au laboratoire d'analyses, tous vos soins r\xE9unis en un seul lieu."
  }), /*#__PURE__*/React.createElement("div", {
    className: "kt-services__grid"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    icon: s.icon,
    tone: s.tone,
    title: s.title,
    description: s.desc,
    href: "#contact",
    onClick: e => {
      e.preventDefault();
      onBook();
    }
  })))));
}
function About() {
  const points = ['Écoute attentive du patient', 'Explication claire des diagnostics', 'Prise en charge personnalisée', 'Coordination des soins spécialisés', 'Maîtrise des coûts en environnement à ressources limitées'];
  return /*#__PURE__*/React.createElement("section", {
    id: "histoire",
    className: "kt-section kt-section--soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-container kt-about__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-about__media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-about__photo"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hospital",
    size: 46,
    color: "rgba(255,255,255,.9)"
  }), /*#__PURE__*/React.createElement("span", null, "Fa\xE7ade de la Clinique Kerthan \u2014 Bonaberi")), /*#__PURE__*/React.createElement("div", {
    className: "kt-about__badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kt-about__since"
  }, "Depuis"), /*#__PURE__*/React.createElement("strong", null, "Mars 2004"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Notre histoire",
    title: "D'un cabinet m\xE9dical \xE0 une clinique moderne",
    description: "Cr\xE9\xE9e en mars 2004 sous la forme de Cabinet M\xE9dical, la Clinique Kerthan n'a cess\xE9 d'\xE9voluer pour devenir aujourd'hui un \xE9tablissement moderne dot\xE9 d'un plateau technique complet, dans le district de sant\xE9 de Bonassama."
  }), /*#__PURE__*/React.createElement("ul", {
    className: "kt-checklist"
  }, points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "#fff"
  }), " ", p))))));
}
Object.assign(window, {
  TopBar,
  Header,
  Hero,
  Stats,
  Services,
  About,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* Clinique Kerthan — Website UI kit · internal medicine + appointment + footer */
const NS2 = window.CliniqueKerthanDesignSystem_0add2c;
const {
  Button,
  IconButton,
  Badge,
  Icon,
  Card,
  Input,
  Select,
  Checkbox,
  Alert,
  SectionHeading,
  ContactItem,
  StatCard
} = NS2;
function InternalMed() {
  const items = [{
    icon: 'activity',
    t: 'Maladies chroniques',
    d: 'Diabète, hypertension, VIH/SIDA, maladies rhumatismales.'
  }, {
    icon: 'layers',
    t: 'Cas complexes',
    d: 'Prise en charge quand plusieurs maladies coexistent.'
  }, {
    icon: 'route',
    t: 'Coordination des soins',
    d: 'Orientation vers la chirurgie ou les autres spécialistes.'
  }, {
    icon: 'graduation-cap',
    t: 'Prévention & éducation',
    d: 'Comprendre sa santé et se maintenir en bon état.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "interne",
    className: "kt-imed"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-container kt-imed__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-imed__intro"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    light: true,
    eyebrow: "Sp\xE9cialit\xE9 phare",
    title: "La m\xE9decine interne",
    description: "La combinaison de la science et de l'art de soigner. L'interniste, form\xE9 pendant au moins 3 ann\xE9es suppl\xE9mentaires, accompagne l'adulte tout au long de son parcours de sant\xE9."
  }), /*#__PURE__*/React.createElement("p", {
    className: "kt-script kt-imed__quote"
  }, "\xAB Science & art de soigner \xBB")), /*#__PURE__*/React.createElement("div", {
    className: "kt-imed__cards"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    className: "kt-imed__card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kt-imed__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 22,
    color: "var(--gold-300)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, it.t), /*#__PURE__*/React.createElement("p", null, it.d)))))));
}
function Appointment() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "kt-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-container kt-appt__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-appt__info"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Prendre rendez-vous",
    title: "Nous sommes \xE0 votre \xE9coute",
    description: "Remplissez le formulaire ou contactez-nous directement. Les urgences restent prioritaires sur les rendez-vous programm\xE9s."
  }), /*#__PURE__*/React.createElement("div", {
    className: "kt-appt__contacts"
  }, /*#__PURE__*/React.createElement(ContactItem, {
    icon: "phone",
    label: "Standard",
    value: "+237 699 41 61 53",
    href: "tel:+237699416153"
  }), /*#__PURE__*/React.createElement(ContactItem, {
    icon: "phone-call",
    label: "Second num\xE9ro",
    value: "+237 688 02 08 26",
    href: "tel:+237688020826",
    tone: "gold"
  }), /*#__PURE__*/React.createElement(ContactItem, {
    icon: "map-pin",
    label: "Adresse",
    value: "1\xE8re rue Nangah N\xB0303, face lyc\xE9e bilingue de Bonaberi"
  }), /*#__PURE__*/React.createElement(ContactItem, {
    icon: "globe",
    label: "Site web",
    value: "www.kerthan.org",
    href: "https://www.kerthan.org"
  })), /*#__PURE__*/React.createElement("div", {
    className: "kt-appt__hours"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green",
    dot: true
  }, "Ouvert aujourd'hui"), /*#__PURE__*/React.createElement("span", null, "Lun \u2013 Sam \xB7 07h30 \u2013 19h00 \xA0\xB7\xA0 Urgences 24h/24"))), /*#__PURE__*/React.createElement(Card, {
    className: "kt-appt__form"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "kt-appt__sent"
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Demande envoy\xE9e"
  }, "Merci ! Notre \xE9quipe vous rappellera tr\xE8s vite pour confirmer votre rendez-vous."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false),
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "rotate-ccw",
      size: 16
    })
  }, "Nouvelle demande")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nom complet",
    placeholder: "Votre nom",
    icon: "user-round",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "T\xE9l\xE9phone",
    type: "tel",
    placeholder: "+237 6XX XX XX XX",
    icon: "phone",
    required: true
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Service souhait\xE9",
    placeholder: "Choisir un service",
    options: ['Médecine générale', 'Médecine interne', 'Imagerie médicale', 'Laboratoire d\'analyses', 'SMILE — inter-entreprises', 'CMTH — santé du voyageur']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message (optionnel)",
    multiline: true,
    placeholder: "D\xE9crivez bri\xE8vement le motif de votre consultation\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "J'accepte d'\xEAtre recontact\xE9(e) par t\xE9l\xE9phone ou SMS.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    fullWidth: true,
    size: "lg",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 18
    })
  }, "Envoyer ma demande")))));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "kt-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-container kt-footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kt-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-seal.png",
    alt: "Clinique Kerthan",
    className: "kt-footer__mark"
  }), /*#__PURE__*/React.createElement("p", {
    className: "kt-footer__name"
  }, "Clinique Kerthan"), /*#__PURE__*/React.createElement("p", {
    className: "kt-footer__mission"
  }, "\xC9tablissement de sant\xE9 priv\xE9 \xB7 Douala IV, Bonassama. Vingt ans de soins prodigu\xE9s avec compassion."), /*#__PURE__*/React.createElement("div", {
    className: "kt-footer__social"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "facebook",
    variant: "outline",
    label: "Facebook"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "music",
    variant: "outline",
    label: "TikTok"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "globe",
    variant: "outline",
    label: "Site web"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kt-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Navigation"), window.NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    onClick: e => {
      e.preventDefault();
      onNav(n.id);
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "kt-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Nos services"), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    onClick: e => {
      e.preventDefault();
      onNav('services');
    }
  }, "M\xE9decine g\xE9n\xE9rale"), /*#__PURE__*/React.createElement("a", {
    href: "#interne",
    onClick: e => {
      e.preventDefault();
      onNav('interne');
    }
  }, "M\xE9decine interne"), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    onClick: e => {
      e.preventDefault();
      onNav('services');
    }
  }, "Imagerie m\xE9dicale"), /*#__PURE__*/React.createElement("a", {
    href: "#services",
    onClick: e => {
      e.preventDefault();
      onNav('services');
    }
  }, "Laboratoire")), /*#__PURE__*/React.createElement("div", {
    className: "kt-footer__col"
  }, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), " +237 699 41 61 53"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), " +237 688 02 08 26"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), " 1\xE8re rue Nangah N\xB0303,", /*#__PURE__*/React.createElement("br", null), "Bonaberi \u2014 Douala"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 14
  }), " www.kerthan.org"))), /*#__PURE__*/React.createElement("div", {
    className: "kt-container kt-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Clinique Kerthan \u2014 Tous droits r\xE9serv\xE9s."), /*#__PURE__*/React.createElement("span", {
    className: "kt-footer__care"
  }, "We Care!")));
}
Object.assign(window, {
  InternalMed,
  Appointment,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ContactItem = __ds_scope.ContactItem;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
