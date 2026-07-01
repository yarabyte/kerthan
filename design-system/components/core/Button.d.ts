import * as React from 'react';

export type ButtonVariant = 'primary' | 'gold' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary call-to-action button for the Kerthan brand. Pill-shaped, brand-green
 * by default. Use `gold` for warm secondary CTAs and `secondary`/`ghost` for
 * lower-emphasis actions.
 *
 * @startingPoint section="Core" subtitle="Brand buttons — primary, gold, ghost, danger" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. Default "primary". */
  variant?: ButtonVariant;
  /** Size. Default "md". */
  size?: ButtonSize;
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  /** Icon node rendered before the label (use <Icon/>). */
  leftIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  rightIcon?: React.ReactNode;
  /** Render as an anchor instead of a button. */
  href?: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
