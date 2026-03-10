<script setup lang="ts">
import { useId } from '@sakana-element/hooks';
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed, inject, ref, useSlots } from 'vue';
import { useFormItem } from '../Form/hooks';
import { RADIO_COLOR_TEMPLATES, RADIO_GROUP_CTX_KEY } from './constants';
import type { RadioEmits, RadioInstance, RadioProps } from './types';

defineOptions({ name: 'PxRadio', inheritAttrs: false });
const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
});
const emits = defineEmits<RadioEmits>();
const slots = useSlots();

const radioGroup = inject(RADIO_GROUP_CTX_KEY, undefined);
const isGroup = !!radioGroup;
const { formItem } = useFormItem();

const inputRef = ref<HTMLInputElement>();
const inputId = useId().value;

const checked = computed(() => {
  if (isGroup) {
    return radioGroup!.modelValue.value === props.value;
  }
  return props.modelValue === props.value;
});

/* v8 ignore start */
const isDisabled = computed(() => {
  if (radioGroup?.disabled.value) return true;
  return props.disabled;
});
/* v8 ignore stop */

/* v8 ignore next 4 */
const mergedSize = computed(() => props.size ?? radioGroup?.size.value);
const mergedType = computed(() => props.type ?? radioGroup?.type.value);
const mergedColor = computed(() => props.color ?? radioGroup?.color.value);
const mergedName = computed(() => props.name ?? radioGroup?.name.value);

const customColorStyle = computed(() => {
  const color = mergedColor.value;
  if (!color) return {};
  const palette = createColorPalette(color);
  return resolveColorVars(palette, 'px-radio', RADIO_COLOR_TEMPLATES.default);
});

const focus: RadioInstance['focus'] = () => {
  /* v8 ignore next */
  inputRef.value?.focus();
};

function handleChange() {
  if (isDisabled.value) return;
  if (checked.value) return; // already selected — no-op

  const val = props.value!;

  if (isGroup) {
    radioGroup!.changeEvent(val);
  } else {
    emits('update:modelValue', val);
    emits('change', val);
  }

  /* v8 ignore next 3 */
  if (!isGroup) {
    formItem?.validate('change').catch((err: Error) => console.debug(err));
  }
}

defineExpose<RadioInstance>({
  checked,
  focus,
});
</script>

<template>
  <div
    class="px-radio"
    :class="{
      [`px-radio--${mergedSize}`]: mergedSize,
      [`px-radio--${mergedType}`]: mergedType,
      'is-disabled': isDisabled,
      'is-checked': checked,
    }"
    :style="customColorStyle"
    @click="handleChange"
  >
    <span class="px-radio__input">
      <input
        ref="inputRef"
        class="px-radio__original"
        type="radio"
        :aria-checked="checked"
        :id="id || inputId"
        :name="mergedName"
        :disabled="isDisabled"
        :checked="checked"
      />
      <span class="px-radio__inner">
        <span class="px-radio__dot"></span>
      </span>
    </span>
    <span
      v-if="label || slots.default"
      class="px-radio__label"
    >
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<style>
@import './style.css';
</style>
