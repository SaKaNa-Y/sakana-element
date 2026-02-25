<script setup lang="ts">
import { useId } from '@sakana-element/hooks';
import { debugWarn } from '@sakana-element/utils';
import { type ZodType, z } from 'zod';

const DANGEROUS_PATH_SEGMENTS = new Set(['__proto__', 'constructor', 'prototype']);

import {
  cloneDeep,
  endsWith,
  filter,
  get,
  includes,
  isArray,
  isNil,
  isNumber,
  isString,
  keys,
  map,
  size,
} from 'lodash-es';
import {
  computed,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  type Ref,
  reactive,
  ref,
  toRefs,
} from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { FORM_CTX_KEY, FORM_ITEM_CTX_KEY } from './constants';
import type {
  FormItemContext,
  FormItemInstance,
  FormItemProps,
  FormItemRule,
  FormValidateCallback,
  FormValidateFailure,
  ValidateStatus,
} from './types';

defineOptions({ name: 'PxFormItem' });

const props = withDefaults(defineProps<FormItemProps>(), {
  required: void 0,
  showMessage: true,
});
const slots = defineSlots();
const ctx = inject(FORM_CTX_KEY);

const labelId = useId().value;

const validateStatus: Ref<ValidateStatus> = ref('init');
const errMsg = ref('');
const inputIds = ref<string[]>([]);

const hasDangerousPath = (prop: string | string[]): boolean => {
  const segments = isArray(prop) ? prop : prop.split('.');
  return segments.some((s) => DANGEROUS_PATH_SEGMENTS.has(s));
};

const getValByProp = (target: Record<string, unknown> | undefined) => {
  if (target && props.prop && !isNil(get(target, props.prop))) {
    if (hasDangerousPath(props.prop)) {
      debugWarn(
        'PxFormItem',
        `Prop path "${props.prop}" contains a dangerous segment and was rejected.`,
      );
      return null;
    }
    return get(target, props.prop);
  }
  return null;
};

const hasLabel = computed(() => !!(props.label || slots.label));
const labelFor = computed(() => props.for || (inputIds.value.length ? inputIds.value[0] : ''));

const currentLabel = computed(() => `${props.label ?? ''}${ctx?.labelSuffix ?? ''}`);

const normalizeLabelWidth = computed(() => {
  const _normalizeStyle = (val: number | string) => {
    if (isNumber(val)) return `${val}px`;
    return endsWith(val, 'px') ? val : `${val}px`;
  };
  if (props.labelWidth) return _normalizeStyle(props.labelWidth);
  if (ctx?.labelWidth) return _normalizeStyle(ctx?.labelWidth);
  return '150px';
});

const labelPosition = computed(() => ctx?.labelPosition ?? 'right');
const isTop = computed(() => labelPosition.value === 'top');

const labelStyle = computed(() => {
  if (isTop.value) {
    return {
      width: '100%',
      textAlign: 'left' as const,
      padding: '0 0 8px 0',
    };
  }
  return {
    textAlign: labelPosition.value === 'left' ? ('left' as const) : ('right' as const),
  };
});

const isDisabled = computed(() => ctx?.disabled || props.disabled);
const innerVal = computed(() => {
  const model = ctx?.model;
  return getValByProp(model);
});
const propString = computed(() => {
  if (!props.prop) return '';
  return isString(props.prop) ? props.prop : props.prop.join('.');
});

const itemRules = computed(() => {
  const { required } = props;
  const rules: FormItemRule[] = [];

  if (props.rules) {
    rules.push(...props.rules);
  }
  const formRules = ctx?.rules;
  if (formRules && props.prop) {
    const _rules = getValByProp(formRules);
    if (_rules) {
      rules.push(...(_rules as FormItemRule[]));
    }
  }

  if (!isNil(required)) {
    const requiredRules = filter(
      map(rules, (rule, i) => [rule, i]),
      (item: [FormItemRule, number]) => includes(keys(item[0]), 'required'),
    );

    if (size(requiredRules)) {
      for (const item of requiredRules) {
        const [rule, i] = item as [FormItemRule, number];
        if (rule.required === required) continue;
        rules[i] = { ...rule, required };
      }
    } else {
      rules.push({ required });
    }
  }

  return rules;
});

const isRequired = computed(() => {
  if (!isNil(props.required)) return props.required;
  return size(filter(itemRules.value, (rule) => rule.required)) > 0;
});

let initialVal: unknown = null;
let isResetting: boolean = false;

function getTriggeredRules(trigger: string) {
  const rules = itemRules.value;
  if (!rules) return [];
  return filter(rules, (r) => {
    if (!r?.trigger || !trigger) return true;
    if (isArray(r.trigger)) {
      return r.trigger.includes(trigger);
    }
    return r.trigger === trigger;
  });
}

async function doValidate(rules: FormItemRule[]) {
  const value = innerVal.value;
  for (const rule of rules) {
    let schema: ZodType | null = rule.schema ?? null;
    if (!schema && rule.required) {
      schema = z
        .string({ message: rule.message ?? 'This field is required' })
        .min(1, rule.message ?? 'This field is required');
    }
    if (!schema) continue;
    const result = schema.safeParse(value);
    if (!result.success) {
      const msg = rule.message ?? result.error.issues[0]?.message ?? 'Validation failed';
      validateStatus.value = 'error';
      errMsg.value = msg;
      const failure: FormValidateFailure = {
        errors: [{ field: propString.value, message: msg }],
        fields: { [propString.value]: [{ message: msg }] },
      };
      ctx?.emits('validate', props, false, msg);
      return Promise.reject(failure);
    }
  }
  validateStatus.value = 'success';
  ctx?.emits('validate', props, true, '');
  return true;
}

const validate: FormItemInstance['validate'] = async (
  trigger: string,
  callback?: FormValidateCallback,
) => {
  if (isResetting || !props.prop || isDisabled.value) return false;

  if (!validateStatus.value) {
    callback?.(false);
    return false;
  }

  const rules = getTriggeredRules(trigger);
  if (!size(rules)) {
    callback?.(true);
    return true;
  }

  validateStatus.value = 'validating';
  return doValidate(rules)
    .then(() => {
      callback?.(true);
      return true;
    })
    .catch((err: FormValidateFailure) => {
      const { fields } = err;
      callback?.(false, fields);
      return Promise.reject(fields);
    });
};

const resetField: FormItemInstance['resetField'] = () => {
  const model = ctx?.model;
  if (model && propString.value && !isNil(get(model, propString.value))) {
    isResetting = true;
    model[propString.value] = cloneDeep(initialVal);
  }
  nextTick(() => clearValidate());
};

const clearValidate: FormItemInstance['clearValidate'] = () => {
  validateStatus.value = 'init';
  errMsg.value = '';
  isResetting = false;
};

const addInputId: FormItemContext['addInputId'] = (id) => {
  if (!includes(inputIds.value, id)) inputIds.value.push(id);
};

const removeInputId: FormItemContext['removeInputId'] = (id) => {
  inputIds.value = filter(inputIds.value, (i) => i !== id);
};

const formItemCtx: FormItemContext = reactive({
  ...toRefs(props),
  disabled: isDisabled.value,
  validate,
  resetField,
  clearValidate,
  addInputId,
  removeInputId,
});

onMounted(() => {
  if (!props.prop) return;
  ctx?.addField(formItemCtx);
  initialVal = innerVal.value;
});

onUnmounted(() => {
  if (!props.prop) return;
  ctx?.removeField(formItemCtx);
});

provide<FormItemContext>(FORM_ITEM_CTX_KEY, formItemCtx);

defineExpose<FormItemInstance>({
  validateMessage: errMsg,
  validateStatus,
  validate,
  resetField,
  clearValidate,
});
</script>

<template>
  <div
    class="px-form-item"
    :class="{
      'is-error': validateStatus === 'error',
      'is-disabled': isDisabled,
      'is-required': isRequired,
      'asterisk-left': ctx?.requiredAsteriskPosition === 'left',
      'asterisk-right': ctx?.requiredAsteriskPosition === 'right',
    }"
    :style="isTop ? { flexDirection: 'column' } : {}"
  >
    <component
      v-if="hasLabel"
      class="px-form-item__label"
      :style="labelStyle"
      :is="labelFor ? 'label' : 'div'"
      :id="labelId"
      :for="labelFor"
    >
      <slot name="label" :label="currentLabel">
        {{ currentLabel }}
      </slot>
    </component>
    <div class="px-form-item__content" :style="isTop ? { width: '100%' } : {}"
      :aria-describedby="validateStatus === 'error' ? `form-item-error-${labelId}` : undefined"
    >
      <div class="px-form-item__input-wrap">
        <slot :validate="validate"></slot>
        <px-icon v-if="ctx?.statusIcon && validateStatus === 'success'" icon="check" class="px-form-item__status-icon is-success" size="sm" />
        <px-icon v-if="ctx?.statusIcon && validateStatus === 'error'" icon="close" class="px-form-item__status-icon is-error" size="sm" />
      </div>
      <div class="px-form-item__error-msg" v-if="validateStatus === 'error'" :id="`form-item-error-${labelId}`">
        <template v-if="ctx?.showMessage && showMessage">
          <slot name="error" :error="errMsg">{{ errMsg }}</slot>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import './style.css';

.px-form-item {
  --px-form-label-width: v-bind(normalizeLabelWidth) !important;
}
</style>
