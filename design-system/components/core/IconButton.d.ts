import * as React from 'react';

export type IconButtonVariant = 'solid' | 'gold' | 'outline' | 'ghost';
export type IconButtonSize = 'sm' | 'md' | 'lg';

/**
 * Circular icon-only button. Pass a Lucide icon name (string) or a node.
 * Always provide `label` for accessibility.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name (string) or a custom node. */
  icon?: string | React.ReactNode;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  /** Accessible label (aria-label + title). */
  label?: string;
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
