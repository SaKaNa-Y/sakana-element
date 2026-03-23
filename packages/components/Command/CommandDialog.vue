<script setup lang="ts">
import { useZIndex } from '@sakana-element/hooks';
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { CommandDialogEmits, CommandDialogProps } from './types';

defineOptions({
  name: 'PxCommandDialog',
});

const props = withDefaults(defineProps<CommandDialogProps>(), {
  modelValue: false,
  shortcut: true,
});

const emits = defineEmits<CommandDialogEmits>();

const { nextZIndex } = useZIndex();
const zIndex = ref(0);
const dialogRef = ref<HTMLElement>();

function open() {
  emits('update:modelValue', true);
  emits('open');
}

function close() {
  emits('update:modelValue', false);
  emits('close');
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) {
    e.preventDefault();
    e.stopPropagation();
    close();
  }
}

function onGlobalKeydown(e: KeyboardEvent) {
  if (props.shortcut && (e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    if (props.modelValue) {
      close();
    } else {
      open();
    }
  }
}

function lockScroll() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

function unlockScroll() {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      zIndex.value = nextZIndex();
      lockScroll();
      nextTick(() => {
        const input = dialogRef.value?.querySelector('input');
        input?.focus();
      });
    } else {
      unlockScroll();
    }
  },
);

onMounted(() => {
  if (props.shortcut) {
    document.addEventListener('keydown', onGlobalKeydown);
  }
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onGlobalKeydown);
  unlockScroll();
});
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" ref="dialogRef" class="px-command-dialog" :style="{ zIndex }" @keydown="onKeydown">
      <div class="px-command-dialog__overlay" @click="close" />
      <div class="px-command-dialog__content">
        <slot />
      </div>
    </div>
  </Teleport>
</template>
