<script setup lang="ts">
import { provideGlobalConfig } from './hooks';
import type { ConfigProviderProps } from './types';

defineOptions({
  name: 'PxConfigProvider',
});
const props = defineProps<ConfigProviderProps>(); //表示父级传递的类型
const config = provideGlobalConfig(props);
</script>

<template>
  <slot name="default" :config="config"></slot>
</template>
