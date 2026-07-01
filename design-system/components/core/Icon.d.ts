import * as React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /** Lucide icon name, e.g. "heart-pulse", "stethoscope", "phone". */
  name: string;
  /** Pixel size of the square icon. Default 20. */
  size?: number;
  /** Stroke width. Default 2. */
  strokeWidth?: number;
  /** CSS color (defaults to currentColor so it inherits text color). */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Lucide icon wrapper for the Kerthan system.
 * Host page must include Lucide and call `lucide.createIcons()` after mount.
 */
export function Icon(props: IconProps): JSX.Element;
