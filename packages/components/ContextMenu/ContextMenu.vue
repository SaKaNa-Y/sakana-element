<script setup lang="ts">
import type { Instance as PopperInstance } from '@popperjs/core';
import { createPopper } from '@popperjs/core';
import { useClickOutside, useZIndex } from '@sakana-element/hooks';
import { isNil } from 'lodash-es';
import { computed, nextTick, onBeforeUnmount, provide, ref } from 'vue';
import ContextMenuItem from './ContextMenuItem.vue';
import { CONTEXT_MENU_CTX_KEY } from './constants';
import type {
  ContextMenuContext,
  ContextMenuEmits,
  ContextMenuInstance,
  ContextMenuItemDef,
  ContextMenuItemProps,
  ContextMenuProps,
} from './types';
import useContextMenuKeyboard from './useContextMenuKeyboard';

defineOptions({
  name: 'PxContextMenu',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<ContextMenuProps>(), {
  hideOnClick: true,
  lockScroll: false,
  items: () => [] as ContextMenuItemDef[],
});

const emit = defineEmits<ContextMenuEmits>();

const { nextZIndex } = useZIndex();

const triggerRef = ref<HTMLElement>();
const popupRef = ref<HTMLElement>();
const menuRef = ref<HTMLElement>();
const isOpen = ref(false);
let popperInstance: PopperInstance | null = null;

function onWheel(e: WheelEvent) {
  e.preventDefault();
}

function updateScrollLock(lock: boolean) {
  if (lock) {
    document.addEventListener('wheel', onWheel, { passive: false });
  } else {
    document.removeEventListener('wheel', onWheel);
  }
  if (props.lockScroll) {
    document.body.style.overflow = lock ? 'hidden' : '';
  }
}

/** Popper virtual element positioned at cursor */
function createVirtualElement(x: number, y: number) {
  return {
    getBoundingClientRect: () => ({
      width: 0,
      height: 0,
      top: y,
      bottom: y,
      left: x,
      right: x,
      x,
      y,
      toJSON() {
        return this;
      },
    }),
  };
}

function openMenu(event: MouseEvent) {
  if (props.disabled) return;

  event.preventDefault();
  event.stopPropagation();

  // Close any previously open menu before re-opening
  closeMenu();

  isOpen.value = true;
  updateScrollLock(true);
  emit('visible-change', true);

  nextTick(() => {
    if (!popupRef.value) return;
    popupRef.value.style.zIndex = String(nextZIndex());

    const virtualEl = createVirtualElement(event.clientX, event.clientY);
    popperInstance = createPopper(virtualEl as any, popupRef.value, {
      placement: 'bottom-start',
      modifiers: [
        { name: 'offset', options: { offset: [0, 2] } },
        { name: 'flip', options: { fallbackPlacements: ['top-start', 'bottom-end', 'top-end'] } },
        {
          name: 'preventOverflow',
          options: { boundary: 'viewport', padding: 8 },
        },
      ],
      ...props.popperOptions,
    });
  });
}

function closeMenu() {
  if (!isOpen.value) return;
  isOpen.value = false;
  updateScrollLock(false);
  emit('visible-change', false);
  popperInstance?.destroy();
  popperInstance = null;
}

function handleContextMenu(event: MouseEvent) {
  openMenu(event);
}

function handleItemClick(item: ContextMenuItemProps) {
  if (props.hideOnClick) {
    closeMenu();
  }
  if (!isNil(item.command)) {
    emit('command', item.command);
  }
}

const menuStyle = computed(() => {
  const style: Record<string, string> = {};
  if (props.maxHeight) {
    const val = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight;
    style.maxHeight = val;
    style.overflowY = 'auto';
  }
  if (props.hoverColor) {
    style['--px-context-menu-item-hover-fill'] = props.hoverColor;
  }
  return style;
});

// Close on outside click
useClickOutside(popupRef, () => {
  if (isOpen.value) closeMenu();
});

// Keyboard navigation
useContextMenuKeyboard({
  menuRef,
  isOpen,
  close: closeMenu,
});

// Provide context for child items
provide<ContextMenuContext>(CONTEXT_MENU_CTX_KEY, {
  handleItemClick,
  closeAll: closeMenu,
});

onBeforeUnmount(() => {
  updateScrollLock(false);
  popperInstance?.destroy();
});

defineExpose<ContextMenuInstance>({
  open: openMenu,
  close: closeMenu,
});
</script>

<template>
  <div
    ref="triggerRef"
    class="px-context-menu"
    :class="{ 'is-disabled': disabled }"
    @contextmenu="handleContextMenu"
  >
    <slot />
  </div>

  <Teleport to="body">
    <div
      v-if="isOpen"
      ref="popupRef"
      class="px-context-menu__popup"
    >
      <ul
        ref="menuRef"
        class="px-context-menu__menu"
        role="menu"
        tabindex="-1"
        :style="menuStyle"
      >
        <slot name="content">
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
