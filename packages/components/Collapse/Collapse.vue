<script setup lang="ts">
import { createColorPalette, debugWarn, resolveColorVars } from '@sakana-element/utils';
import { computed, provide, ref, watch, watchEffect } from 'vue';
import { COLLAPSE_COLOR_TEMPLATES, COLLAPSE_CTX_KEY, PRESET_COLLAPSE_COLORS } from './constants';
import type { CollapseEmits, CollapseItemName, CollapseProps } from './types';

const COMP_NAME = 'PxCollapse' as const;

defineOptions({
  name: COMP_NAME,
});
const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeNames = ref(props.modelValue);

if (props.accordion && activeNames.value.length > 1) {
  activeNames.value = [activeNames.value[0]];
}

const isPresetColor = computed(() => PRESET_COLLAPSE_COLORS.has(props.color ?? ''));
const isCustomColor = computed(() => !!props.color && !isPresetColor.value);

const customColorStyle = computed(() => {
  if (!isCustomColor.value) return {};
  const palette = createColorPalette(props.color!);
  const variant = props.ghost ? 'ghost' : 'default';
  return resolveColorVars(palette, 'px-collapse', COLLAPSE_COLOR_TEMPLATES[variant]);
});

function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value];

  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? '' : item];
    updateActiveNames(_activeNames);
    return;
  }

  const index = _activeNames.indexOf(item);
  if (index > -1) {
    _activeNames.splice(index, 1);
  } else {
    _activeNames.push(item);
  }
  updateActiveNames(_activeNames);
}

function updateActiveNames(newNames: CollapseItemName[]) {
  activeNames.value = newNames;
  emits('update:modelValue', newNames);
  emits('change', newNames);
}

watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, 'accordion mode should only have one active item');
  }
});

watch(
  () => props.modelValue,
  (newNames) => updateActiveNames(newNames),
);

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
  color: props.color,
  ghost: props.ghost,
  trigger: props.trigger,
  iconPlacement: props.iconPlacement,
});
</script>

<template>
  <div
    class="px-collapse"
    :class="{
      'is-ghost': ghost,
      [`px-collapse--${color}`]: isPresetColor,
    }"
    :style="customColorStyle"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
