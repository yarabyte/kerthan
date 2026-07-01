import * as React from 'react';

/** Standard section header: gold-ruled eyebrow, display title, optional intro. */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase overline. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  /** Use on dark green backgrounds. */
  light?: boolean;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
