import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/** Styled native select with a brand chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  /** Options as strings or {value,label}. */
  options?: Array<string | SelectOption>;
  /** Leading disabled placeholder option. */
  placeholder?: string;
  children?: React.ReactNode;
}

export function Select(props: SelectProps): JSX.Element;
