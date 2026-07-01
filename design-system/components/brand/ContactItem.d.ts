import * as React from 'react';

/** Icon + label + value contact row for headers, footers and contact pages. */
export interface ContactItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lucide icon name or node. */
  icon?: string | React.ReactNode;
  /** Small caption above the value. */
  label?: React.ReactNode;
  value: React.ReactNode;
  /** Makes the value a link (tel:, mailto:, https:). */
  href?: string;
  tone?: 'green' | 'gold' | 'light';
}

export function ContactItem(props: ContactItemProps): JSX.Element;
