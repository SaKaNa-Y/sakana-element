export const tableSize = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type TableSize = (typeof tableSize)[number];

export type TableType = 'primary' | 'success' | 'info' | 'warning' | 'danger';

export interface TableProps {
  type?: TableType;
  zebra?: boolean;
  hover?: boolean;
  border?: boolean;
  stripe?: boolean;
  pinRows?: boolean;
  pinCols?: boolean;
  size?: TableSize;
  showHeader?: boolean;
}

export interface TableInstance {
  ref: HTMLDivElement;
}
