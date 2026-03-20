<script setup lang="ts">
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed, getCurrentInstance, provide, ref, watch } from 'vue';
import {
  COLLAPSIBLE_COLOR_TEMPLATES,
  COLLAPSIBLE_CTX_KEY,
  PRESET_COLLAPSIBLE_COLORS,
} from './constants';
import type { CollapsibleEmits, CollapsibleInstance, CollapsibleProps } from './types';

const COMP_NAME = 'PxCollapsible' as const;

defineOptions({
  name: COMP_NAME,
});

const props = withDefaults(defineProps<CollapsibleProps>(), {
  defaultOpen: false,
  disabled: false,
});

const emits = defineEmits<CollapsibleEmits>();

// Vue casts unset boolean props to false, so we check vnode props
// to determine if modelValue was explicitly provided
const instance = getCurrentInstance()!;
const hasModelValue = 'modelValue' in (instance.vnode.props ?? {});
const open = ref(hasModelValue ? props.modelValue : props.defaultOpen);

// Sync from v-model changes
watch(
  () => props.modelValue,
  (val) => {
    open.value = !!val;
  },
);

function toggle() {
  if (props.disabled) return;
  const next = !open.value;
  open.value = next;
  emits('update:modelValue', next);
  emits('change', next);
}

/* v8 ignore next */
const isPresetColor = computed(() => PRESET_COLLAPSIBLE_COLORS.has(props.color ?? ''));
const isCustomColor = computed(() => !!props.color && !isPresetColor.value);

const customColorStyle = computed(() => {
  if (!isCustomColor.value) return {};
  const palette = createColorPalette(props.color!);
  /* v8 ignore start */
  const variant = props.ghost ? 'ghost' : 'default';
  /* v8 ignore stop */
  return resolveColorVars(palette, 'px-collapsible', COLLAPSIBLE_COLOR_TEMPLATES[variant]);
});

const uid = `px-collapsible-${Math.random().toString(36).slice(2, 9)}`;

provide(COLLAPSIBLE_CTX_KEY, {
  open,
  toggle,
  disabled: computed(() => !!props.disabled),
  id: uid,
});

defineExpose<CollapsibleInstance>({
  open,
  toggle,
});
</script>

<template>
  <div
    class="px-collapsible"
    :class="{
      'is-ghost': ghost,
      'is-disabled': disabled,
      [`px-collapsible--${color}`]: isPresetColor,
    }"
    :style="customColorStyle"
    :data-state="open ? 'open' : 'closed'"
  >
    <slot />
  </div>
</template>

<style scoped>
@import './style.css';
</style>
