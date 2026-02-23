<script setup lang="ts">
import { computed, inject } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { COLLAPSE_CTX_KEY } from './constants';
import transitionEvents from './transitionEvents';
import type { CollapseItemProps } from './types';

defineOptions({
  name: 'PxCollapseItem',
});
const props = withDefaults(defineProps<CollapseItemProps>(), {
  showArrow: true,
});
const ctx = inject(COLLAPSE_CTX_KEY, void 0);

const isActive = computed(() => {
  if (props.forceClose) return false;
  if (props.forceOpen) return true;
  return ctx?.activeNames.value?.includes(props.name);
});

const isFocusMode = computed(() => ctx?.trigger === 'focus');

const resolvedIcon = computed(() => {
  if (!props.icon) return 'chevron-right';
  if (props.icon === 'plus') return isActive.value ? 'minus' : 'plus';
  return props.icon;
});

function handleClick() {
  if (props.disabled) return;
  if (props.forceOpen || props.forceClose) return;
  if (isFocusMode.value) return;
  ctx?.handleItemClick(props.name);
}

function handleFocus() {
  if (props.disabled) return;
  if (props.forceOpen || props.forceClose) return;
  if (!isFocusMode.value) return;
  if (!isActive.value) {
    ctx?.handleItemClick(props.name);
  }
}

function handleFocusout(e: FocusEvent) {
  if (props.disabled) return;
  if (props.forceOpen || props.forceClose) return;
  if (!isFocusMode.value) return;
  if (isActive.value) {
    ctx?.handleItemClick(props.name);
  }
}
</script>

<template>
  <div
    class="px-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="px-collapse-item__header"
      :id="`item-header-${name}`"
      role="button"
      :aria-expanded="isActive"
      :aria-controls="`item-content-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
        'is-hidden-arrow': showArrow === false,
        'is-icon-start': ctx?.iconPlacement === 'start',
      }"
      :tabindex="isFocusMode ? 0 : undefined"
      @click="handleClick"
      @focus="handleFocus"
      @focusout="handleFocusout"
    >
      <span class="px-collapse-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <px-icon
        v-if="showArrow !== false"
        :icon="resolvedIcon"
        class="header-angle"
        :class="{ 'is-toggle-icon': !!icon }"
      />
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="px-collapse-item__wapper" v-show="isActive">
        <div class="px-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
