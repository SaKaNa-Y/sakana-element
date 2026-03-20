import type { ComputedRef, Ref } from 'vue';

export interface CollapsibleProps {
  modelValue?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  color?: string;
  ghost?: boolean;
}

export interface CollapsibleEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}

export interface CollapsibleContext {
  open: Ref<boolean>;
  toggle: () => void;
  disabled: ComputedRef<boolean>;
  id: string;
}

export interface CollapsibleInstance {
  open: Ref<boolean>;
  toggle: () => void;
}
