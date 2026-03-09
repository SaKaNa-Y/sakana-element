export type IndicatorPlacement =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'middle-start'
  | 'middle-center'
  | 'middle-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end';

export type IndicatorType = 'primary' | 'success' | 'info' | 'warning' | 'danger';

export interface IndicatorProps {
  placement?: IndicatorPlacement;
  type?: IndicatorType;
  color?: string;
  offset?: [number, number];
  inline?: boolean;
  processing?: boolean;
}
