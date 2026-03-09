import type { ComputedRef } from 'vue';

export type RadioValueType = string | number | boolean;

export type RadioType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface RadioProps {
  modelValue?: RadioValueType;
  value?: RadioValueType;
  disabled?: boolean;
  size?: 'small' | 'large';
  type?: RadioType;
  color?: string;
  label?: string;
  name?: string;
  id?: string;
}

export interface RadioEmits {
  (e: 'update:modelValue', value: RadioValueType): void;
  (e: 'change', value: RadioValueType): void;
}

export interface RadioInstance {
  focus(): void;
  checked: ComputedRef<boolean>;
}

export interface RadioGroupProps {
  modelValue: RadioValueType;
  disabled?: boolean;
  size?: 'small' | 'large';
  type?: RadioType;
  color?: string;
  name?: string;
}

export interface RadioGroupEmits {
  (e: 'update:modelValue', value: RadioValueType): void;
  (e: 'change', value: RadioValueType): void;
}

export interface RadioGroupContext {
  modelValue: ComputedRef<RadioValueType>;
  disabled: ComputedRef<boolean>;
  size: ComputedRef<'small' | 'large' | undefined>;
  type: ComputedRef<RadioType | undefined>;
  color: ComputedRef<string | undefined>;
  name: ComputedRef<string | undefined>;
  changeEvent(value: RadioValueType): void;
}
