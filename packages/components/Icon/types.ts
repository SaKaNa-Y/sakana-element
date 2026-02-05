/**
 * Pixel Icon Props
 * Props interface for the PxIcon component using pixelarticons
 */

// Pixel-art friendly size system (24px grid multiples)
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x';

export interface IconProps {
  /**
   * Icon name - can be a pixelarticons name or an alias
   * Examples: 'loader', 'check', 'close', 'chevron-down'
   */
  icon: string;

  /**
   * Icon size - uses 24px grid multiples for crisp pixel rendering
   * xs=12px, sm=18px, md=24px (default), lg=36px, xl=48px, 2xl=72px
   * 1x=24px, 2x=48px, 3x=72px (FA compat aliases)
   */
  size?: IconSize;

  /**
   * Rotation angle
   */
  rotation?: 90 | 180 | 270 | '90' | '180' | '270';

  /**
   * Flip direction
   */
  flip?: 'horizontal' | 'vertical' | 'both';

  /**
   * Spin animation (stepped for pixel-art aesthetic)
   */
  spin?: boolean;

  /**
   * Pulse animation (stepped rotate + scale)
   */
  pulse?: boolean;

  /**
   * Bounce animation (vertical hop)
   */
  bounce?: boolean;

  /**
   * Shake animation (horizontal shake)
   */
  shake?: boolean;

  /**
   * Beat animation (scale throb)
   */
  beat?: boolean;

  /**
   * Fade animation (opacity flicker)
   */
  fade?: boolean;

  /**
   * Semantic type - applies predefined color
   */
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';

  /**
   * Custom color (overrides type)
   */
  color?: string;
}

// Size to pixel mapping
export const iconSizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 18,
  md: 24,
  lg: 36,
  xl: 48,
  '2xl': 72,
  '1x': 24,
  '2x': 48,
  '3x': 72,
};
