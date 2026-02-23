<script setup lang="ts">
import { provide, reactive, toRef } from 'vue';
import { BUTTON_GROUP_CTX_KEY } from './constants';
import type { ButtonGroupProps } from './types';

defineOptions({
  name: 'PxButtonGroup',
});
const props = defineProps<ButtonGroupProps>();

//提供按钮组上下文
provide(
  //注入
  BUTTON_GROUP_CTX_KEY,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
    disabled: toRef(props, 'disabled'),
  }),
);
</script>

<template>
  <div class="px-button-group" role="group">
    <slot></slot>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
