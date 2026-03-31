<script setup lang="ts">
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed, useSlots } from 'vue';
import { CHAT_COLOR_TEMPLATES } from './constants';
import type { ChatBubbleProps } from './types';

defineOptions({
  name: 'PxChatBubble',
});

const props = withDefaults(defineProps<ChatBubbleProps>(), {
  placement: 'start',
  typing: false,
});

const slots = useSlots();

const customColorStyle = computed(() => {
  if (!props.color) return {};
  return resolveColorVars(createColorPalette(props.color), 'px-chat', CHAT_COLOR_TEMPLATES.default);
});
</script>

<template>
  <div
    class="px-chat"
    :class="{
      [`px-chat--${placement}`]: placement,
      [`px-chat--${type}`]: type,
    }"
    :style="customColorStyle"
  >
    <div v-if="slots.avatar" class="px-chat__avatar">
      <slot name="avatar"></slot>
    </div>
    <div class="px-chat__content">
      <div v-if="slots.header || name || time" class="px-chat__header">
        <slot name="header">
          <span v-if="name" class="px-chat__name">{{ name }}</span>
          <span v-if="time" class="px-chat__time">{{ time }}</span>
        </slot>
      </div>
      <div class="px-chat__bubble">
        <span class="px-chat__tail"></span>
        <template v-if="typing">
          <span class="px-chat__typing">
            <span class="px-chat__typing-dot"></span>
            <span class="px-chat__typing-dot"></span>
            <span class="px-chat__typing-dot"></span>
          </span>
        </template>
        <template v-else>
          <slot></slot>
        </template>
      </div>
      <div v-if="slots.footer || status" class="px-chat__footer">
        <slot name="footer">
          <span>{{ status }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
