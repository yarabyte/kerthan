import * as React from 'react';

export type BadgeTone = 'green' | 'gold' | 'red' | 'neutral' | 'solid-green' | 'solid-gold';

/** Small status / category pill. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  /** Show a leading status dot. */
  dot?: boolean;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
