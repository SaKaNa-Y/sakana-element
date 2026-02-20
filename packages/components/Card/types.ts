export type CardShadow = 'always' | 'hover' | 'never';

export interface CardProps {
  hoverable?: boolean;
  shadow?: boolean | CardShadow;
  size?: 'small' | 'large';
}
