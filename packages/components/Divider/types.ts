export type DividerType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export type DividerBorderStyle = 'solid' | 'dashed' | 'dotted';

export interface DividerProps {
  direction?: 'horizontal' | 'vertical';
  contentPosition?: 'left' | 'center' | 'right';
  type?: DividerType;
  color?: string;
  borderStyle?: DividerBorderStyle;
  content?: string;
}
