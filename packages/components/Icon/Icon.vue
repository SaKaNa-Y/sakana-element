<script setup lang="ts">
import type { IconProps } from './types';
import { iconSizeMap } from './types';
import { getPixelIcon, resolveIconName } from '@sakana-element/utils';
import { computed } from 'vue';

defineOptions({
  name: 'PxIcon',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
});

// Resolve icon name (handles aliases) and get SVG
const resolvedIconName = computed(() => resolveIconName(props.icon));
const pixelSvg = computed(() => getPixelIcon(resolvedIconName.value));

// Build CSS classes
const iconClasses = computed(() => {
  const classes: string[] = ['px-icon'];

  // Type color class
  if (props.type) {
    classes.push(`px-icon--${props.type}`);
  }

  // Size class
  if (props.size) {
    classes.push(`px-icon--${props.size}`);
  }

  // Animation classes (stepped for pixel-art aesthetic)
  if (props.spin) classes.push('px-icon--spin');
  if (props.pulse) classes.push('px-icon--pulse');
  if (props.bounce) classes.push('px-icon--bounce');
  if (props.shake) classes.push('px-icon--shake');
  if (props.beat) classes.push('px-icon--beat');
  if (props.fade) classes.push('px-icon--fade');

  // Flip classes
  if (props.flip === 'horizontal') classes.push('px-icon--flip-h');
  if (props.flip === 'vertical') classes.push('px-icon--flip-v');
  if (props.flip === 'both') classes.push('px-icon--flip-h', 'px-icon--flip-v');

  // Rotation classes
  if (props.rotation) classes.push(`px-icon--rotate-${props.rotation}`);

  return classes;
});

// Build inline styles
const iconStyles = computed(() => {
  const styles: Record<string, string> = {};

  // Custom color
  if (props.color) {
    styles.color = props.color;
  }

  // Size in pixels
  const sizeValue = iconSizeMap[props.size || 'md'];
  styles.width = `${sizeValue}px`;
  styles.height = `${sizeValue}px`;

  return styles;
});
</script>

<template>
  <i :class="iconClasses" :style="iconStyles" v-bind="$attrs">
    <span v-if="pixelSvg" class="px-icon__pixel" v-html="pixelSvg" />
    <span v-else class="px-icon__fallback">?</span>
  </i>
</template>

<style scoped>
@import './style.css';
</style>
