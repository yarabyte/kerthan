import React from 'react';

/**
 * Icon — thin wrapper over Lucide. Renders a placeholder <i data-lucide>
 * element that the host page upgrades to an SVG via lucide.createIcons().
 * The page MUST load Lucide and call lucide.createIcons() after render.
 */
export function Icon({ name, size = 20, strokeWidth = 2, color = 'currentColor', style = {}, ...rest }) {
  return (
    <i
      data-lucide={name}
      data-stroke={strokeWidth}
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
        color,
        flex: 'none',
        ...style,
      }}
      {...rest}
    />
  );
}
