import type { Ref } from 'vue';

export interface FileInputProps {
  modelValue?: FileList | null;
  id?: string;
  size?: 'large' | 'small';
  color?: string;
  ghost?: boolean;
  disabled?: boolean;
  accept?: string;
  multiple?: boolean;
  placeholder?: string;
  clearable?: boolean;
  form?: string;
}

export interface FileInputEmits {
  (e: 'update:modelValue', value: FileList | null): void;
  (e: 'change', value: FileList | null): void;
  (e: 'clear'): void;
}

export interface FileInputInstance {
  ref: Ref<HTMLInputElement | undefined>;
  open(): void;
  clear(): void;
}
