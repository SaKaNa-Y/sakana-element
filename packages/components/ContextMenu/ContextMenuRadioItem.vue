<script setup lang="ts">
import { computed, inject } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { CONTEXT_MENU_CTX_KEY, CONTEXT_MENU_RADIO_GROUP_CTX_KEY } from './constants';
import type { ContextMenuRadioItemProps } from './types';

defineOptions({
  name: 'PxContextMenuRadioItem',
});

const props = withDefaults(defineProps<ContextMenuRadioItemProps>(), {
  disabled: false,
});

const ctx = inject(CONTEXT_MENU_CTX_KEY);
const radioCtx = inject(CONTEXT_MENU_RADIO_GROUP_CTX_KEY);

const isSelected = computed(() => radioCtx?.modelValue.value === props.value);

function handleClick() {
  if (props.disabled) return;
  radioCtx?.handleSelect(props.value);
  if (props.command != null) {
    ctx?.handleItemClick({ command: props.command });
  }
}
</script>

<template>
  <li
    role="menuitemradio"
    tabindex="-1"
    :aria-checked="isSelected"
    :class="{
      'px-context-menu__radio-item': true,
      'px-context-menu__item': true,
      'is-disabled': disabled,
      'is-selected': isSelected,
    }"
    @click="handleClick"
    @keydown.enter.prevent="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <span class="px-context-menu__indicator-area">
      <span v-if="isSelected" class="px-context-menu__radio-indicator"></span>
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
