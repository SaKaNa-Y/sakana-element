import type { ComputedRef } from 'vue';

export type CheckboxValueType = string | number | boolean;

export type CheckboxType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface CheckboxProps {
  modelValue?: boolean;
  value?: CheckboxValueType;
  disabled?: boolean;
  indeterminate?: boolean;
  size?: 'small' | 'large';
  type?: CheckboxType;
  color?: string;
  label?: string;
  name?: string;
  id?: string;
}

export interface CheckboxEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}

export interface CheckboxInstance {
  focus(): void;
  checked: ComputedRef<boolean>;
}

export interface CheckboxGroupProps {
  modelValue: CheckboxValueType[];
  disabled?: boolean;
  size?: 'small' | 'large';
  type?: CheckboxType;
  color?: string;
  min?: number;
  max?: number;
}

export interface CheckboxGroupEmits {
  (e: 'update:modelValue', value: CheckboxValueType[]): void;
  (e: 'change', value: CheckboxValueType[]): void;
}

export interface CheckboxGroupContext {
  modelValue: ComputedRef<CheckboxValueType[]>;
  disabled: ComputedRef<boolean>;
  size: ComputedRef<'small' | 'large' | undefined>;
  type: ComputedRef<CheckboxType | undefined>;
  color: ComputedRef<string | undefined>;
  min: ComputedRef<number | undefined>;
  max: ComputedRef<number | undefined>;
  changeEvent(value: CheckboxValueType[]): void;
}
