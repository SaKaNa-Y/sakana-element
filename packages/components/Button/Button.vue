<script lang="ts" setup>
import { darken, debugWarn, getTextColor, lighten } from '@sakana-element/utils';
import { throttle } from 'lodash-es';
import { computed, inject, ref } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { BUTTON_GROUP_CTX_KEY } from './constants';
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

  const color = props.color;
  const textColor = getTextColor(color);
  const darkColor = darken(color, 15);
  const lightColor = lighten(color, 20);
  const lighterColor = lighten(color, 35);

  if (props.ghost) {
    return {
      '--px-button-text-color': color,
      '--px-button-bg-color': 'transparent',
      '--px-button-border-color': 'transparent',
      '--px-button-shadow-color': 'transparent',
      '--px-button-hover-text-color': darkColor,
      '--px-button-hover-bg-color': lighterColor,
      '--px-button-hover-border-color': 'transparent',
      '--px-button-active-text-color': darkColor,
      '--px-button-active-bg-color': lightColor,
      '--px-button-active-border-color': 'transparent',
      '--px-button-disabled-text-color': lightColor,
      '--px-button-disabled-bg-color': 'transparent',
      '--px-button-disabled-border-color': 'transparent',
    } as Record<string, string>;
  }

  if (props.dash) {
    return {
      '--px-button-text-color': color,
      '--px-button-bg-color': lighterColor,
      '--px-button-border-color': color,
      '--px-button-shadow-color': 'transparent',
      '--px-button-hover-text-color': darkColor,
      '--px-button-hover-bg-color': lightColor,
      '--px-button-hover-border-color': darkColor,
      '--px-button-active-text-color': darkColor,
      '--px-button-active-bg-color': color,
      '--px-button-active-border-color': darkColor,
      '--px-button-disabled-text-color': lightColor,
      '--px-button-disabled-bg-color': lighterColor,
      '--px-button-disabled-border-color': lightColor,
    } as Record<string, string>;
  }

  if (props.plain) {
    return {
      '--px-button-text-color': color,
      '--px-button-bg-color': lighterColor,
      '--px-button-border-color': color,
      '--px-button-hover-text-color': textColor,
      '--px-button-hover-bg-color': color,
      '--px-button-hover-border-color': color,
      '--px-button-active-text-color': textColor,
      '--px-button-active-bg-color': darkColor,
      '--px-button-active-border-color': darkColor,
      '--px-button-disabled-text-color': lightColor,
      '--px-button-disabled-bg-color': lighterColor,
      '--px-button-disabled-border-color': lightColor,
    } as Record<string, string>;
  }

  return {
    '--px-button-text-color': textColor,
    '--px-button-bg-color': color,
    '--px-button-border-color': darkColor,
    '--px-button-shadow-color': darkColor,
    '--px-button-hover-text-color': textColor,
    '--px-button-hover-bg-color': lightColor,
    '--px-button-hover-border-color': color,
    '--px-button-active-text-color': textColor,
    '--px-button-active-bg-color': darkColor,
    '--px-button-active-border-color': darkColor,
    '--px-button-disabled-text-color': textColor,
    '--px-button-disabled-bg-color': lightColor,
    '--px-button-disabled-border-color': lightColor,
  } as Record<string, string>;
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
