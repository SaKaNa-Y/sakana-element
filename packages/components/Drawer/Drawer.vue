<script setup lang="ts">
import { useEventListener, useId, useZIndex } from '@sakana-element/hooks';
import { computed, onUnmounted, ref, watch } from 'vue';
import { DRAWER_DEFAULT_SIZE } from './constants';
import type { DrawerEmits, DrawerInstance, DrawerProps } from './types';

defineOptions({
  name: 'PxDrawer',
});

const props = withDefaults(defineProps<DrawerProps>(), {
  placement: 'left',
  size: DRAWER_DEFAULT_SIZE,
  showOverlay: true,
  lockScroll: true,
  closeOnClickOverlay: true,
  closeOnEsc: true,
});

const emits = defineEmits<DrawerEmits>();
const drawerId = useId('px-drawer');
const { nextZIndex } = useZIndex();

const currentZIndex = ref(0);
const isOpen = ref(props.modelValue);

const sidebarStyle = computed(() => ({
  width: props.size,
  zIndex: currentZIndex.value,
}));

function updateScrollLock(lock: boolean) {
  if (props.lockScroll) {
    document.body.style.overflow = lock ? 'hidden' : '';
  }
}

function applyOpen() {
  currentZIndex.value = nextZIndex();
  isOpen.value = true;
  emits('open');
  updateScrollLock(true);
}

function applyClose() {
  isOpen.value = false;
  updateScrollLock(false);
}

function doOpen() {
  applyOpen();
  emits('update:modelValue', true);
}

function doClose() {
  applyClose();
  emits('update:modelValue', false);
  emits('close');
}

function onOverlayClick() {
  if (props.closeOnClickOverlay) {
    doClose();
  }
}

// Watch modelValue changes from parent (immediate to handle initial open state)
watch(
  () => props.modelValue,
  (val) => {
    if (val && !isOpen.value) applyOpen();
    else if (val && isOpen.value) updateScrollLock(true);
    else if (!val && isOpen.value) applyClose();
  },
  { immediate: true },
);

// ESC key handler — pass document directly (non-ref) so useEventListener uses onMounted path
useEventListener(document, 'keydown', (e: Event) => {
  if (props.closeOnEsc && isOpen.value && (e as KeyboardEvent).key === 'Escape') {
    doClose();
  }
});

// Cleanup on unmount
onUnmounted(() => {
  if (isOpen.value) updateScrollLock(false);
});

// Exposed methods
const open: DrawerInstance['open'] = () => {
  if (!isOpen.value) doOpen();
};

const close: DrawerInstance['close'] = () => {
  if (isOpen.value) doClose();
};

const toggle: DrawerInstance['toggle'] = () => {
  isOpen.value ? doClose() : doOpen();
};

defineExpose<DrawerInstance>({
  open,
  close,
  toggle,
});
</script>

<template>
  <div
    class="px-drawer"
    :class="[`px-drawer--${placement}`]"
    :id="drawerId"
  >
    <div class="px-drawer__content">
      <slot></slot>
    </div>

    <Teleport to="body">
      <div
        v-if="showOverlay && isOpen"
        class="px-drawer-overlay"
        :style="{ zIndex: currentZIndex - 1 }"
        @click="onOverlayClick"
      ></div>

      <transition
        :name="`px-drawer-slide-${placement}`"
      >
        <div
          v-if="isOpen"
          class="px-drawer__sidebar"
          :class="[`px-drawer__sidebar--${placement}`]"
          :style="sidebarStyle"
          role="dialog"
          :aria-labelledby="title ? `${drawerId}-title` : undefined"
        >
          <div v-if="title" class="px-drawer__header">
            <span :id="`${drawerId}-title`" class="px-drawer__title">{{ title }}</span>
          </div>
          <div class="px-drawer__body">
            <slot name="sidebar"></slot>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
