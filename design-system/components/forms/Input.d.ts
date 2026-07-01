import * as React from 'react';

/**
 * Labelled text input (or textarea) with optional leading icon, hint and
 * error states. Wraps a native input so all standard attributes pass through.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Helper text under the field. */
  hint?: React.ReactNode;
  /** Error message — also turns the border red. */
  error?: React.ReactNode;
  required?: boolean;
  /** Leading Lucide icon name or node. */
  icon?: string | React.ReactNode;
  /** Render a textarea instead of an input. */
  multiline?: boolean;
}

export function Input(props: InputProps): JSX.Element;
