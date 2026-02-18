<script lang="ts" setup>
import { createColorPalette, debugWarn, lighten, resolveColorVars } from '@sakana-element/utils';
import { throttle } from 'lodash-es';
import { computed, inject, ref } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { BUTTON_COLOR_TEMPLATES, BUTTON_GROUP_CTX_KEY } from './constants';
import type { ButtonEmits, ButtonInstance, ButtonProps } from './types';

const ALLOWED_BUTTON_TAGS = new Set(['button', 'a', 'div', 'span', 'router-link']);

defineOptions({
  name: 'PxButton',
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500,
});

if (typeof props.tag === 'string' && !ALLOWED_BUTTON_TAGS.has(props.tag)) {
  debugWarn(
    'PxButton',
    `Invalid tag "${props.tag}". Allowed tags: ${[...ALLOWED_BUTTON_TAGS].join(', ')}. Falling back to "button".`,
  );
}

const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0); //第一个参数是注入的key，第二个参数是默认值
const _ref = ref<HTMLButtonElement>();
const safeTag = computed(() => {
  if (typeof props.tag !== 'string') return props.tag; // Component object — pass through
  return ALLOWED_BUTTON_TAGS.has(props.tag) ? props.tag : 'button';
});
const size = computed(() => ctx?.size ?? props?.size ?? '');
const type = computed(() => ctx?.type ?? props?.type ?? '');
const disabled = computed(() => ctx?.disabled || props?.disabled || false);
const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : '0px',
}));

const customColorStyle = computed(() => {
  if (!props.color) return {};
  const palette = {
    ...createColorPalette(props.color),
    light: lighten(props.color, 20),
    lighter: lighten(props.color, 35),
  };
  const variant = props.ghost ? 'ghost' : props.dash ? 'dash' : props.plain ? 'plain' : 'default';
  return resolveColorVars(palette, 'px-button', BUTTON_COLOR_TEMPLATES[variant]);
});

const handleBtnClick = (e: MouseEvent) => emits('click', e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration, {
  trailing: false,
});

defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type,
});
</script>
<template>
  <component
    :is="safeTag"
    ref="_ref"
    :autofocus="autofocus"
    :type="safeTag === 'button' ? nativeType : void 0"
    class="px-button"
    :aria-label="ariaLabel"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`px-button--${type}`]: type,
      [`px-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-dash': dash,
      'is-ghost': ghost,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :style="customColorStyle"
    @click="
      (e: MouseEvent) =>
        useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
    "
  >
    <template v-if="loading">
      <slot name="loading">
        <px-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'loader'"
          :style="iconStyle"
          size="1x"
          spin
        ></px-icon>
      </slot>
    </template>
    <px-icon
      v-if="icon && !loading"
      :icon="icon"
      :style="iconStyle"
      size="1x"
    ></px-icon>
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>
