<script setup lang="ts">
import { useId } from '@sakana-element/hooks';
import { inject } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { CONTEXT_MENU_CTX_KEY } from './constants';
import type { ContextMenuItemProps } from './types';

defineOptions({
  name: 'PxContextMenuItem',
});

const props = withDefaults(defineProps<ContextMenuItemProps>(), {
  disabled: false,
  divided: false,
  command: useId().value,
});

const ctx = inject(CONTEXT_MENU_CTX_KEY);

function handleClick() {
  if (props.disabled) return;
  ctx?.handleItemClick(props);
}
</script>

<template>
  <li v-if="divided" role="separator" class="px-context-menu__divided"></li>
  <li
    role="menuitem"
    tabindex="-1"
    :class="{
      'px-context-menu__item': true,
      'is-disabled': disabled,
    }"
    @click="handleClick"
    @keydown.enter.prevent="handleClick"
    @keydown.space.prevent="handleClick"
  >
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
