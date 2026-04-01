<script setup lang="ts">
import { inject } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { CONTEXT_MENU_CTX_KEY } from './constants';
import type { ContextMenuCheckboxItemEmits, ContextMenuCheckboxItemProps } from './types';

defineOptions({
  name: 'PxContextMenuCheckboxItem',
});

const props = withDefaults(defineProps<ContextMenuCheckboxItemProps>(), {
  disabled: false,
  modelValue: false,
});

const emit = defineEmits<ContextMenuCheckboxItemEmits>();
const ctx = inject(CONTEXT_MENU_CTX_KEY);

function handleClick() {
  if (props.disabled) return;
  const next = !props.modelValue;
  emit('update:modelValue', next);
  emit('change', next);
  if (props.command != null) {
    ctx?.handleItemClick({ command: props.command });
  }
}
</script>

<template>
  <li
    role="menuitemcheckbox"
    tabindex="-1"
    :aria-checked="modelValue"
    :class="{
      'px-context-menu__checkbox-item': true,
      'px-context-menu__item': true,
      'is-disabled': disabled,
      'is-checked': modelValue,
    }"
    @click="handleClick"
    @keydown.enter.prevent="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <span class="px-context-menu__indicator-area">
      <span v-if="modelValue" class="px-context-menu__check-indicator"></span>
    </span>
    <px-icon v-if="icon" :icon="icon" class="px-context-menu__item-icon" />
    <span class="px-context-menu__item-label">
      <slot>{{ label }}</slot>
    </span>
    <span v-if="shortcut && shortcut.length" class="px-context-menu__shortcut">
      <kbd v-for="key in shortcut" :key="key">{{ key }}</kbd>
    </span>
  </li>
</template>

<style>
@import './style.css';
</style>
