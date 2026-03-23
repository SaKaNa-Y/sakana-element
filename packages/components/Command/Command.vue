<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue';
import { COMMAND_CTX_KEY } from './constants';
import type { CommandEmits, CommandItemRegistration, CommandProps } from './types';

defineOptions({
  name: 'PxCommand',
});

const props = withDefaults(defineProps<CommandProps>(), {
  modelValue: '',
});

const emits = defineEmits<CommandEmits>();

const searchTerm = ref(props.modelValue);
const highlightedValue = ref<string | null>(null);
const items = ref<CommandItemRegistration[]>([]);
watch(
  () => props.modelValue,
  (val) => {
    searchTerm.value = val ?? '';
  },
);

watch(searchTerm, (val) => {
  emits('update:modelValue', val);
  // Reset highlight when search changes
  highlightedValue.value = null;
});

function defaultFilter(value: string, search: string, keywords?: string[]): boolean {
  if (!search) return true;
  const term = search.toLowerCase();
  if (value.toLowerCase().includes(term)) return true;
  if (keywords?.some((kw) => kw.toLowerCase().includes(term))) return true;
  return false;
}

const filterFn = computed(() => props.filter ?? defaultFilter);

const visibleItems = computed(() =>
  items.value.filter((item) => filterFn.value(item.value, searchTerm.value, item.keywords)),
);

const groupVisibleCounts = computed(() => {
  const map = new Map<string, number>();
  for (const item of visibleItems.value) {
    if (item.groupId) map.set(item.groupId, (map.get(item.groupId) ?? 0) + 1);
  }
  return map;
});

const enabledVisibleItems = computed(() => visibleItems.value.filter((i) => !i.disabled));

const visibleUids = computed(() => new Set(visibleItems.value.map((i) => i.uid)));

function registerItem(item: CommandItemRegistration) {
  items.value.push(item);
}

function unregisterItem(uid: symbol) {
  const idx = items.value.findIndex((i) => i.uid === uid);
  if (idx !== -1) items.value.splice(idx, 1);
}

function updateItem(uid: symbol, patch: Partial<Omit<CommandItemRegistration, 'uid'>>) {
  const item = items.value.find((i) => i.uid === uid);
  if (item) Object.assign(item, patch);
}

function handleSelect(value: string) {
  emits('select', value);
}

function setHighlightedValue(value: string | null) {
  highlightedValue.value = value;
}

function getNextEnabledItem(direction: 1 | -1): string | null {
  const enabled = enabledVisibleItems.value;
  if (enabled.length === 0) return null;

  const currentIdx = enabled.findIndex((i) => i.value === highlightedValue.value);
  if (currentIdx === -1) {
    return direction === 1 ? enabled[0].value : enabled[enabled.length - 1].value;
  }

  let nextIdx = currentIdx + direction;
  if (nextIdx < 0) nextIdx = enabled.length - 1;
  if (nextIdx >= enabled.length) nextIdx = 0;
  return enabled[nextIdx].value;
}

function onKeydown(e: KeyboardEvent) {
  switch (e.key) {
    case 'ArrowDown': {
      e.preventDefault();
      const next = getNextEnabledItem(1);
      if (next !== null) highlightedValue.value = next;
      break;
    }
    case 'ArrowUp': {
      e.preventDefault();
      const prev = getNextEnabledItem(-1);
      if (prev !== null) highlightedValue.value = prev;
      break;
    }
    case 'Enter': {
      e.preventDefault();
      if (highlightedValue.value !== null) {
        handleSelect(highlightedValue.value);
      }
      break;
    }
    case 'Home': {
      e.preventDefault();
      const enabled = enabledVisibleItems.value;
      if (enabled.length > 0) highlightedValue.value = enabled[0].value;
      break;
    }
    case 'End': {
      e.preventDefault();
      const enabled = enabledVisibleItems.value;
      if (enabled.length > 0) highlightedValue.value = enabled[enabled.length - 1].value;
      break;
    }
  }
}

provide(COMMAND_CTX_KEY, {
  searchTerm,
  filterFn,
  highlightedValue,
  visibleItems,
  visibleUids,
  groupVisibleCounts,
  registerItem,
  unregisterItem,
  updateItem,
  handleSelect,
  setHighlightedValue,
});

const rootRef = ref<HTMLElement | null>(null);

defineExpose({
  focus: () => {
    rootRef.value?.querySelector<HTMLInputElement>('.px-command-input__input')?.focus();
  },
});
</script>

<template>
  <div
    ref="rootRef"
    class="px-command"
    :aria-label="label"
    @keydown="onKeydown"
  >
    <slot />
  </div>
</template>

<style>
@import './style.css';
</style>
