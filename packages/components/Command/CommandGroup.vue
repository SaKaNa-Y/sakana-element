<script setup lang="ts">
import { useId } from '@sakana-element/hooks';
import { computed, inject, provide } from 'vue';
import { COMMAND_CTX_KEY, COMMAND_GROUP_KEY } from './constants';
import type { CommandGroupProps } from './types';

defineOptions({
  name: 'PxCommandGroup',
});

defineProps<CommandGroupProps>();

const ctx = inject(COMMAND_CTX_KEY)!;
const groupId = useId('px-command-group').value;

provide(COMMAND_GROUP_KEY, groupId);

const isHidden = computed(() => (ctx.groupVisibleCounts.value.get(groupId) ?? 0) === 0);
</script>

<template>
  <div
    class="px-command-group"
    :class="{ 'is-hidden': isHidden }"
    role="group"
    :data-group-id="groupId"
  >
    <div v-if="heading" class="px-command-group__heading">{{ heading }}</div>
    <slot />
  </div>
</template>

