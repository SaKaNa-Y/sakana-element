export type BadgeType = 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type BadgeSize = 'large' | 'default' | 'small';

export interface BadgeProps {
  type?: BadgeType;
  size?: BadgeSize;
  outline?: boolean;
  dash?: boolean;
  color?: string;
  round?: boolean;
  icon?: string;
}
