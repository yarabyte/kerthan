import * as React from 'react';

/**
 * Surface container with the brand's soft rounding and green-tinted shadow.
 *
 * @startingPoint section="Core" subtitle="Content surface — soft rounding, hover lift, accent top-border" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Apply internal padding. Default true. */
  pad?: boolean;
  /** Lift on hover (use for clickable cards). */
  hover?: boolean;
  /** Colored top accent border: "green" | "gold". */
  accent?: 'green' | 'gold' | null;
  /** "default" | "brand" (deep green) | "flat" (no shadow). */
  variant?: 'default' | 'brand' | 'flat';
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
