<script setup lang="ts">
import { useId } from '@sakana-element/hooks';
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed, inject, onMounted, ref, useSlots, watch } from 'vue';
import { useFormItem } from '../Form/hooks';
import { CHECKBOX_COLOR_TEMPLATES, CHECKBOX_GROUP_CTX_KEY } from './constants';
import type { CheckboxEmits, CheckboxInstance, CheckboxProps } from './types';

defineOptions({ name: 'PxCheckbox', inheritAttrs: false });
const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  indeterminate: false,
});
const emits = defineEmits<CheckboxEmits>();
const slots = useSlots();

const checkboxGroup = inject(CHECKBOX_GROUP_CTX_KEY, undefined);
const isGroup = !!checkboxGroup;
const { formItem } = useFormItem();

const inputRef = ref<HTMLInputElement>();
const inputId = useId().value;

const checked = computed(() => {
  if (isGroup) {
    return checkboxGroup!.modelValue.value.includes(props.value!);
  }
  return props.modelValue;
});

const isDisabled = computed(() => {
  if (checkboxGroup?.disabled.value) return true;
  if (isGroup) {
    const groupVal = checkboxGroup!.modelValue.value;
    const min = checkboxGroup!.min.value;
    const max = checkboxGroup!.max.value;
    // Disable checked items when at min
    if (checked.value && min !== undefined && groupVal.length <= min) return true;
    // Disable unchecked items when at max
    if (!checked.value && max !== undefined && groupVal.length >= max) return true;
  }
  return props.disabled;
});

/* v8 ignore next 3 */
const mergedSize = computed(() => props.size ?? checkboxGroup?.size.value);
const mergedType = computed(() => props.type ?? checkboxGroup?.type.value);
const mergedColor = computed(() => props.color ?? checkboxGroup?.color.value);

const customColorStyle = computed(() => {
  const color = mergedColor.value;
  if (!color) return {};
  const palette = createColorPalette(color);
  return resolveColorVars(palette, 'px-checkbox', CHECKBOX_COLOR_TEMPLATES.default);
});

const focus: CheckboxInstance['focus'] = () => {
  /* v8 ignore next */
  inputRef.value?.focus();
};

function handleChange() {
  if (isDisabled.value) return;

  if (isGroup) {
    const groupVal = [...checkboxGroup!.modelValue.value];
    const val = props.value!;
    const idx = groupVal.indexOf(val);
    if (idx > -1) {
      groupVal.splice(idx, 1);
    } else {
      groupVal.push(val);
    }
    checkboxGroup!.changeEvent(groupVal);
  } else {
    const newVal = !checked.value;
    emits('update:modelValue', newVal);
    emits('change', newVal);
  }

  /* v8 ignore next 3 */
  if (!isGroup) {
    formItem?.validate('change').catch((err: Error) => console.debug(err));
  }
}

/* v8 ignore start -- indeterminate DOM assignment has if-guard branch artifacts */
onMounted(() => {
  if (inputRef.value) {
    inputRef.value.indeterminate = props.indeterminate;
  }
});

watch(
  () => props.indeterminate,
  (val) => {
    if (inputRef.value) {
      inputRef.value.indeterminate = val;
    }
  },
);
/* v8 ignore stop */

defineExpose<CheckboxInstance>({
  checked,
  focus,
});
</script>

<template>
  <div
    class="px-checkbox"
    :class="{
      [`px-checkbox--${mergedSize}`]: mergedSize,
      [`px-checkbox--${mergedType}`]: mergedType,
      'is-disabled': isDisabled,
      'is-checked': checked,
      'is-indeterminate': indeterminate,
    }"
    :style="customColorStyle"
    @click="handleChange"
  >
    <span class="px-checkbox__input">
      <input
        ref="inputRef"
        class="px-checkbox__original"
        type="checkbox"
        :aria-checked="checked"
        :id="id || inputId"
        :name="name"
        :disabled="isDisabled"
        :checked="checked"
      />
      <span class="px-checkbox__inner">
        <span class="px-checkbox__tick"></span>
      </span>
    </span>
    <span
      v-if="label || slots.default"
      class="px-checkbox__label"
    >
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<style>
@import './style.css';
</style>
