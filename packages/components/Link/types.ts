export type LinkType = 'primary' | 'success' | 'info' | 'warning' | 'danger';

export interface LinkProps {
  type?: LinkType;
  underline?: boolean;
  disabled?: boolean;
  href?: string;
  target?: string;
  color?: string;
}

export type LinkEmits = (e: 'click', event: MouseEvent) => void;
