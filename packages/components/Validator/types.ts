import type { Ref } from 'vue';
import type { FormItemRule, ValidateStatus } from '../Form/types';

export interface ValidatorProps {
  modelValue?: unknown;
  rules?: FormItemRule[];
}

export type ValidatorEmits = (e: 'validate', isValid: boolean, message: string) => void;

export interface ValidatorInstance {
  validate(trigger?: string): Promise<boolean>;
  reset(): void;
  validateStatus: Ref<ValidateStatus>;
  validateMessage: Ref<string>;
}
