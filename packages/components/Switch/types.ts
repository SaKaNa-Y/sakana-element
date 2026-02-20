import type { ComputedRef } from 'vue';

export type SwitchValueType = boolean | string | number;

export type SwitchType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface SwitchProps {
  modelValue: SwitchValueType;
  disabled?: boolean;
  activeText?: string;
  inactiveText?: string;
  activeValue?: SwitchValueType;
  inactiveValue?: SwitchValueType;
  name?: string;
  id?: string;
  size?: 'small' | 'large';
  type?: SwitchType;
  activeColor?: string;
  inactiveColor?: string;
  activeIcon?: string;
  inactiveIcon?: string;
}

export interface SwitchEmits {
  (e: 'update:modelValue', value: SwitchValueType): void;
  (e: 'change', value: SwitchValueType): void;
}

export interface SwitchInstance {
  focus(): void;
  checked: ComputedRef<boolean>;
}
