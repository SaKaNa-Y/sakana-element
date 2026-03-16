export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';
export type SkeletonAnimation = 'shimmer' | 'pulse' | 'dither';

export interface SkeletonProps {
  loading?: boolean;
  animated?: boolean;
  animation?: SkeletonAnimation;
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  rows?: number;
  size?: 'large' | 'default' | 'small';
}
