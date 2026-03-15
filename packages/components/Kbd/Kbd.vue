<script setup lang="ts">
import { computed } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { ARROW_KEYS, KBD_KEY_MAP } from './constants';
import type { KbdKey, KbdProps } from './types';

defineOptions({
  name: 'PxKbd',
});

const props = withDefaults(defineProps<KbdProps>(), {
  size: 'default',
});

const kbdClasses = computed(() => ({
  [`px-kbd--${props.size}`]: props.size !== 'default',
}));

function isArrowKey(key: KbdKey): boolean {
  return ARROW_KEYS.has(key);
}
</script>

<template>
  <span class="px-kbd" :class="kbdClasses">
    <template v-for="key in keys" :key="key">
      <kbd v-if="isArrowKey(key)" class="px-kbd__key">
        <px-icon :icon="(KBD_KEY_MAP[key].icon as string)" size="xs" />
      </kbd>
      <kbd v-else class="px-kbd__key">
        <abbr :title="key" class="px-kbd__abbr">{{ KBD_KEY_MAP[key].label }}</abbr>
      </kbd>
    </template>
    <kbd v-if="$slots.default" class="px-kbd__key">
      <slot />
    </kbd>
  </span>
</template>

<style scoped>
@import './style.css';
</style>
