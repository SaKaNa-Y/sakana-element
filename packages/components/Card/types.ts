export type CardType = 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type CardShadow = 'always' | 'hover' | 'never';

export interface CardProps {
  type?: CardType;
  color?: string;
  hoverable?: boolean;
  shadow?: boolean | CardShadow;
  size?: 'small' | 'large';
  outline?: boolean;
  dash?: boolean;
  ghost?: boolean;
}
