import * as React from 'react';

/** Round avatar for staff / patients. Falls back to initials when no image. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; when omitted, initials of `name` are shown. */
  src?: string | null;
  /** Full name, used for initials + alt text. */
  name?: string;
  tone?: 'green' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Avatar(props: AvatarProps): JSX.Element;
