export type CalendarType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface CalendarProps {
  modelValue?: Date;
  type?: CalendarType;
  color?: string;
  minDate?: Date;
  maxDate?: Date;
  disabledDate?: (date: Date) => boolean;
  showOutsideDays?: boolean;
  weekStartsOn?: 0 | 1;
  defaultMonth?: Date;
  yearRange?: [number, number];
}

export interface CalendarEmits {
  (e: 'update:modelValue', date: Date): void;
  (e: 'month-change', date: Date): void;
}

export interface CalendarInstance {
  focus(): void;
  prevMonth(): void;
  nextMonth(): void;
}
