import * as React from 'react';

/** Inline message banner for confirmations, info notices and warnings. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'success' | 'info' | 'warning' | 'danger';
  /** Optional bold heading line. */
  title?: React.ReactNode;
  /** Show the leading status icon. Default true. */
  icon?: boolean;
  children?: React.ReactNode;
}

export function Alert(props: AlertProps): JSX.Element;
