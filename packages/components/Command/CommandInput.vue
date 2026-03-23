<script setup lang="ts">
import { inject } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { COMMAND_CTX_KEY } from './constants';
import type { CommandInputProps } from './types';

defineOptions({
  name: 'PxCommandInput',
});

withDefaults(defineProps<CommandInputProps>(), {
  placeholder: '',
  icon: 'search',
});

const ctx = inject(COMMAND_CTX_KEY)!;

function onInput(e: Event) {
  ctx.searchTerm.value = (e.target as HTMLInputElement).value;
}
</script>

<template>
  <div class="px-command-input">
    <px-icon v-if="icon" class="px-command-input__icon" :icon="icon" size="sm" />
    <input
      class="px-command-input__input"
      type="text"
      :placeholder="placeholder"
      :value="ctx.searchTerm.value"
      @input="onInput"
    />
  </div>
</template>

