import * as React from 'react';

/** Big-number statistic (e.g. "20 ans", "6 services"). */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  /** Small suffix after the value, e.g. "ans", "+". */
  suffix?: React.ReactNode;
  label: React.ReactNode;
  tone?: 'green' | 'gold' | 'red' | 'light';
  align?: 'left' | 'center';
}

export function StatCard(props: StatCardProps): JSX.Element;
