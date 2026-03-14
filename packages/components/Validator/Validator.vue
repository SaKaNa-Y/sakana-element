<script setup lang="ts">
import { provide, reactive, ref, toRefs, watch } from 'vue';
import { type ZodType, z } from 'zod';
import { FORM_ITEM_CTX_KEY } from '../Form/constants';
import type { FormItemContext, FormItemRule, ValidateStatus } from '../Form/types';
import type { ValidatorEmits, ValidatorInstance, ValidatorProps } from './types';

defineOptions({ name: 'PxValidator' });

const props = withDefaults(defineProps<ValidatorProps>(), {
  rules: () => [],
});

const emit = defineEmits<ValidatorEmits>();

const validateStatus = ref<ValidateStatus>('init');
const errMsg = ref('');

function getTriggeredRules(trigger?: string): FormItemRule[] {
  const rules = props.rules ?? [];
  if (!trigger) return rules;
  return rules.filter((r) => {
    if (!r.trigger) return true;
    if (Array.isArray(r.trigger)) return r.trigger.includes(trigger);
    return r.trigger === trigger;
  });
}

async function doValidate(rules: FormItemRule[]): Promise<boolean> {
  for (const rule of rules) {
    let schema: ZodType | null = rule.schema ?? null;
    if (!schema && rule.required) {
      schema = z
        .string({ message: rule.message ?? 'This field is required' })
        .min(1, rule.message ?? 'This field is required');
    }
    if (!schema) continue;

    const result = schema.safeParse(props.modelValue);
    if (!result.success) {
      const msg = rule.message ?? result.error.issues[0]?.message ?? 'Validation failed';
      validateStatus.value = 'error';
      errMsg.value = msg;
      emit('validate', false, msg);
      return Promise.reject(msg);
    }
  }

  validateStatus.value = 'success';
  errMsg.value = '';
  emit('validate', true, '');
  return true;
}

const validate: ValidatorInstance['validate'] = async (trigger?: string) => {
  const rules = getTriggeredRules(trigger);
  if (!rules.length) {
    return true;
  }
  return doValidate(rules);
};

const reset: ValidatorInstance['reset'] = () => {
  validateStatus.value = 'init';
  errMsg.value = '';
};

// Auto-validate on modelValue change if any rule has 'change' trigger
watch(
  () => props.modelValue,
  () => {
    const changeRules = getTriggeredRules('change');
    if (changeRules.length) {
      doValidate(changeRules).catch(() => {});
    }
  },
);

defineExpose<ValidatorInstance>({
  validate,
  reset,
  validateStatus,
  validateMessage: errMsg,
});

// Bridge: provide FormItemContext so child form elements (PxInput, etc.)
// can trigger validation via their built-in formItem?.validate(trigger) calls
provide(
  FORM_ITEM_CTX_KEY,
  reactive({
    ...toRefs(props),
    validate(trigger: string) {
      return validate(trigger).catch(() => false);
    },
    resetField: reset,
    clearValidate: reset,
    addInputId: () => {},
    removeInputId: () => {},
  }) as Pick<
    FormItemContext,
    'validate' | 'resetField' | 'clearValidate' | 'addInputId' | 'removeInputId'
  > as FormItemContext,
);
</script>

<template>
  <div
    class="px-validator"
    :class="{
      'is-error': validateStatus === 'error',
      'is-success': validateStatus === 'success',
    }"
  >
    <div class="px-validator__content">
      <slot />
    </div>
    <div
      class="px-validator__hint"
      :class="{ 'is-hidden': validateStatus !== 'error' }"
    >
      <slot name="hint" :message="errMsg">
        <span class="px-validator__hint-text">{{ errMsg }}</span>
      </slot>
    </div>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
