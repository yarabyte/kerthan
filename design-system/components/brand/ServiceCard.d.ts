import * as React from 'react';

/**
 * Service / department card with a tinted icon tile, title and description.
 * The signature building block of the Kerthan "Nos Services" grid.
 *
 * @startingPoint section="Brand" subtitle="Service card with tinted icon tile" viewport="380x260"
 */
export interface ServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Lucide icon name or node. Default "stethoscope". */
  icon?: string | React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Icon tile color theme. */
  tone?: 'green' | 'gold' | 'red';
  /** When set, the whole card is a link and shows a "more" affordance. */
  href?: string;
  /** Label for the link affordance. Default "En savoir plus". */
  moreLabel?: string;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
