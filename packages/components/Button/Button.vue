<script lang="ts" setup>
import { computed, ref, inject } from 'vue';
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import { throttle } from 'lodash-es';
import PxIcon from '../Icon/Icon.vue';
import { BUTTON_GROUP_CTX_KEY } from './contants';

defineOptions({
  name: 'PxButton',
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500,
});

const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0); //第一个参数是注入的key，第二个参数是默认值
const _ref = ref<HTMLButtonElement>();
const size = computed(() => ctx?.size ?? props?.size ?? '');
const type = computed(() => ctx?.type ?? props?.type ?? '');
const disabled = computed(() => ctx?.disabled || props?.disabled || false);
const iconStyle = computed(() => ({
  marginRight: slots.default ? '6px' : '0px',
}));

/**
 * Darken a hex color by a percentage (0-100)
 */
function darken(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, (num >> 16) - Math.round(2.55 * amount));
  const g = Math.max(0, ((num >> 8) & 0x00ff) - Math.round(2.55 * amount));
  const b = Math.max(0, (num & 0x0000ff) - Math.round(2.55 * amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

/**
 * Lighten a hex color by a percentage (0-100)
 */
function lighten(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, (num >> 16) + Math.round(2.55 * amount));
  const g = Math.min(255, ((num >> 8) & 0x00ff) + Math.round(2.55 * amount));
  const b = Math.min(255, (num & 0x0000ff) + Math.round(2.55 * amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

/**
 * Determine if text should be white or dark based on background luminance
 */
function getTextColor(hex: string): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = num >> 16;
  const g = (num >> 8) & 0x00ff;
  const b = num & 0x0000ff;
  // Relative luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#1e1e2e' : '#ffffff';
}

const customColorStyle = computed(() => {
  if (!props.color) return {};

  const color = props.color;
  const textColor = getTextColor(color);
  const darkColor = darken(color, 15);
  const lightColor = lighten(color, 20);
  const lighterColor = lighten(color, 35);

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
const handleBtnClickThrottle = throttle(
  handleBtnClick,
  props.throttleDuration,
  { trailing: false }
);

defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type,
});
</script>
<template>
  <component
    :is="tag"
    ref="_ref"
    :autofocus="autofocus"
    :type="tag === 'button' ? nativeType : void 0"
    class="px-button"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`px-button--${type}`]: type,
      [`px-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
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
          :icon="loadingIcon ?? 'spinner'"
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
