import type { ComputedRef } from 'vue';

export type FilterValueType = string | number;

export type FilterType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface FilterOptionProps {
  value: FilterValueType;
  label: string;
  disabled?: boolean;
}

export interface FilterProps {
  modelValue?: FilterValueType | FilterValueType[];
  options?: FilterOptionProps[];
  name?: string;
  disabled?: boolean;
  size?: 'small' | 'large';
  type?: FilterType;
  color?: string;
  multiple?: boolean;
}

export interface FilterEmits {
  (e: 'update:modelValue', value: FilterValueType | FilterValueType[] | undefined): void;
  (e: 'change', value: FilterValueType | FilterValueType[] | undefined): void;
}

export interface FilterItemProps {
  value: FilterValueType;
  label?: string;
  disabled?: boolean;
}

export interface FilterContext {
  modelValue: ComputedRef<FilterValueType | FilterValueType[] | undefined>;
  disabled: ComputedRef<boolean>;
  size: ComputedRef<'small' | 'large' | undefined>;
  type: ComputedRef<FilterType | undefined>;
  color: ComputedRef<string | undefined>;
  name: ComputedRef<string | undefined>;
  multiple: ComputedRef<boolean>;
  hasSelection: ComputedRef<boolean>;
  changeEvent(value: FilterValueType | undefined): void;
}
