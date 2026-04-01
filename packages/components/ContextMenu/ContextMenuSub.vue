<script setup lang="ts">
import type { Instance as PopperInstance } from '@popperjs/core';
import { createPopper } from '@popperjs/core';
import { useId, useZIndex } from '@sakana-element/hooks';
import { nextTick, onBeforeUnmount, ref } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import ContextMenuItem from './ContextMenuItem.vue';
import { SUBMENU_CLOSE_DELAY, SUBMENU_OPEN_DELAY } from './constants';
import type { ContextMenuItemDef, ContextMenuSubProps } from './types';

defineOptions({
  name: 'PxContextMenuSub',
});

const props = withDefaults(defineProps<ContextMenuSubProps>(), {
  disabled: false,
  items: () => [] as ContextMenuItemDef[],
});

const subId = useId('ctx-sub').value;
const { nextZIndex } = useZIndex();

const triggerRef = ref<HTMLElement>();
const popupRef = ref<HTMLElement>();
const isOpen = ref(false);
let popperInstance: PopperInstance | null = null;
let openTimer: ReturnType<typeof setTimeout> | null = null;
let closeTimer: ReturnType<typeof setTimeout> | null = null;

function clearTimers() {
  if (openTimer) {
    clearTimeout(openTimer);
    openTimer = null;
  }
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function open() {
  if (props.disabled || isOpen.value) return;
  clearTimers();
  isOpen.value = true;

  nextTick(() => {
    if (!triggerRef.value || !popupRef.value) return;
    popupRef.value.style.zIndex = String(nextZIndex());

    popperInstance = createPopper(triggerRef.value, popupRef.value, {
      placement: 'right-start',
      modifiers: [
        { name: 'offset', options: { offset: [0, -4] } },
        { name: 'flip', options: { fallbackPlacements: ['left-start'] } },
      ],
    });
  });
}

function close() {
  clearTimers();
  isOpen.value = false;
  popperInstance?.destroy();
  popperInstance = null;
}

function handleMouseEnter() {
  if (props.disabled) return;
  clearTimers();
  openTimer = setTimeout(open, SUBMENU_OPEN_DELAY);
}

function handleMouseLeave() {
  clearTimers();
  closeTimer = setTimeout(close, SUBMENU_CLOSE_DELAY);
}

function handlePopupMouseEnter() {
  clearTimers();
}

onBeforeUnmount(() => {
  clearTimers();
  popperInstance?.destroy();
});
</script>

<template>
  <li
    ref="triggerRef"
    :class="{
      'px-context-menu__sub-trigger': true,
      'px-context-menu__item': true,
      'is-disabled': disabled,
      'is-open': isOpen,
    }"
    tabindex="-1"
    role="menuitem"
    :aria-haspopup="true"
    :aria-expanded="isOpen"
    :data-submenu-id="subId"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <px-icon v-if="icon" :icon="icon" class="px-context-menu__item-icon" />
    <span class="px-context-menu__item-label">{{ label }}</span>
    <span class="px-context-menu__sub-arrow"></span>
  </li>

  <Teleport to="body">
    <div
      v-if="isOpen"
      ref="popupRef"
      class="px-context-menu__sub-popup px-context-menu__popup"
      @mouseenter="handlePopupMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <ul class="px-context-menu__menu" role="menu">
        <slot>
          <template v-for="item in items" :key="item.command">
            <context-menu-item v-bind="item" />
          </template>
        </slot>
      </ul>
    </div>
  </Teleport>
</template>

<style>
@import './style.css';
</style>
