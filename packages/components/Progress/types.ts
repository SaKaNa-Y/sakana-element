export type ProgressType = 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type ProgressStatus = 'success' | 'warning' | 'danger';
export type ProgressSize = 'large' | 'default' | 'small';
export type ProgressVariant = 'solid' | 'striped' | 'checkered';

export interface ProgressProps {
  percentage?: number;
  type?: ProgressType;
  size?: ProgressSize;
  status?: ProgressStatus;
  variant?: ProgressVariant;
  stripedFlow?: boolean;
  indeterminate?: boolean;
  strokeWidth?: number;
  showText?: boolean;
  textInside?: boolean;
  color?: string | ((percentage: number) => string);
  format?: (percentage: number) => string;
}

export interface ProgressInstance {
  /** The clamped percentage value (0-100) */
  clampedPercentage: number;
}
