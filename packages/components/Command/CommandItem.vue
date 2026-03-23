<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, watch } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { COMMAND_CTX_KEY, COMMAND_GROUP_KEY } from './constants';
import type { CommandItemProps } from './types';

defineOptions({
  name: 'PxCommandItem',
});

const props = withDefaults(defineProps<CommandItemProps>(), {
  disabled: false,
  keywords: () => [],
  shortcut: () => [],
});

const ctx = inject(COMMAND_CTX_KEY)!;
const groupId = inject(COMMAND_GROUP_KEY, undefined);
const uid = Symbol('commandItem');

onMounted(() => {
  ctx.registerItem({
    uid,
    value: props.value,
    keywords: props.keywords,
    disabled: props.disabled,
    groupId,
  });
});

onBeforeUnmount(() => {
  ctx.unregisterItem(uid);
});

watch(
  [() => props.value, () => props.keywords, () => props.disabled],
  ([value, keywords, disabled]) => ctx.updateItem(uid, { value, keywords, disabled }),
);

const isVisible = computed(() => ctx.visibleUids.value.has(uid));

const isHighlighted = computed(() => ctx.highlightedValue.value === props.value);

function onClick() {
  if (props.disabled) return;
  ctx.handleSelect(props.value);
}

function onPointerEnter() {
  if (props.disabled) return;
  ctx.setHighlightedValue(props.value);
}
</script>

<template>
  <div
    class="px-command-item"
    :class="{
      'is-highlighted': isHighlighted,
      'is-disabled': disabled,
      'is-hidden': !isVisible,
    }"
    role="option"
    :aria-selected="isHighlighted ? 'true' : 'false'"
    :aria-disabled="disabled ? 'true' : 'false'"
    :data-value="value"
    @click="onClick"
    @pointerenter="onPointerEnter"
  >
    <span v-if="icon" class="px-command-item__icon">
      <px-icon :icon="icon" size="sm" />
    </span>
    <span class="px-command-item__label">
      <slot />
    </span>
    <span v-if="shortcut && shortcut.length" class="px-command-item__shortcut">
      <kbd v-for="key in shortcut" :key="key">{{ key }}</kbd>
    </span>
  </div>
</template>

