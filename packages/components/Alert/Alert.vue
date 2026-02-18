<script setup lang="ts">
import { darken, getTextColor, lighten, typeIconMap } from '@sakana-element/utils';
import { computed, ref } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import type { AlertEmits, AlertInstance, AlertProps } from './types';

defineOptions({
  name: 'PxAlert',
});

//withDefaults 设置默认值
const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  type: 'info',
  closable: true,
});

const emits = defineEmits<AlertEmits>();
const slots = defineSlots();

const visible = ref(true);

// 根据类型获取对应的图标,如果类型为null或undefined，则使用默认的图标
const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info');
// 判断是否存在描述
const withDescription = computed(() => props.description || slots.default);

const customColorStyle = computed(() => {
  if (!props.color) return {};

  const color = props.color;
  const textColor = getTextColor(color);
  const darkColor = darken(color, 15);
  const lightColor = lighten(color, 35);

  if (props.outline) {
    return {
      '--px-alert-text-color': color,
      '--px-alert-bg-color': 'transparent',
      '--px-alert-border-color': color,
      '--px-alert-shadow-color': 'transparent',
    } as Record<string, string>;
  }

  if (props.dash) {
    return {
      '--px-alert-text-color': color,
      '--px-alert-bg-color': lightColor,
      '--px-alert-border-color': color,
      '--px-alert-shadow-color': 'transparent',
    } as Record<string, string>;
  }

  return {
    '--px-alert-text-color': textColor,
    '--px-alert-bg-color': color,
    '--px-alert-border-color': darkColor,
    '--px-alert-shadow-color': darkColor,
  } as Record<string, string>;
});

function close() {
  visible.value = false;
  emits('close');
}

function open() {
  visible.value = true;
}

defineExpose<AlertInstance>({
  open,
  close,
});
</script>

<template>
  <!-- 用于在元素进入或离开 DOM 时添加动画效果 -->
  <transition name="px-alert-fade">
    <div
      v-show="visible"
      class="px-alert"
      role="alert"
      :class="{
        [`px-alert__${type}`]: type,
        [`px-alert__${effect}`]: effect,
        'text-center': center,
        'is-outline': outline,
        'is-dash': dash,
      }"
      :style="customColorStyle"
    >
      <px-icon
        v-if="showIcon"
        class="px-alert__icon"
        :class="{ 'big-icon': withDescription }"
        :icon="iconName"
      />
      <div class="px-alert__content">
        <span
          class="px-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="withDescription" class="px-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="px-alert__close" v-if="closable">
          <px-icon @click.stop="close" icon="close" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import './style.css';
</style>
