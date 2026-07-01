import * as React from 'react';

/** Toggle switch with brand-green active track. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  children?: React.ReactNode;
}

export function Switch(props: SwitchProps): JSX.Element;
