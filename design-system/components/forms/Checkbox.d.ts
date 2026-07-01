import * as React from 'react';

/** Custom-styled checkbox with brand-green fill. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  children?: React.ReactNode;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
