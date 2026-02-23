<script setup lang="ts">
import { useId } from '@sakana-element/hooks';
import { computed, inject } from 'vue';
import { DROPDOWN_CTX_KEY } from './constants';

import type { DropdownItemProps } from './types';

defineOptions({
  name: 'PxDropdownItem',
});

const props = withDefaults(defineProps<DropdownItemProps>(), {
  disabled: false,
  divided: false,
  command: useId().value,
});

const ctx = inject(DROPDOWN_CTX_KEY);
const size = computed(() => ctx?.size.value);

function handleClick() {
  if (props.disabled) return;
  ctx?.handleItemClick(props);
}
</script>

<template>
  <li v-if="divided" role="separator" class="divided-placeholder"></li>
  <li
    role="menuitem"
    :id="`dropdown-item-${command ?? useId().value}`"
    :class="{
      'px-dropdown__item': true,
      ['px-dropdown__item--' + size]: size,
      'is-disabled': disabled,
      'is-divided': divided,
    }"
    @click="handleClick"
  >
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<style>
@import './style.css';
</style>
