<script setup lang="ts">
import { computed } from 'vue';
import type { TableProps } from './types';

defineOptions({ name: 'PxTable' });

const props = withDefaults(defineProps<TableProps>(), {
  size: 'md',
  showHeader: true,
});

const isZebra = computed(() => props.zebra || props.stripe);

const tableClass = computed(() => ({
  'px-table': true,
  [`px-table--${props.size}`]: props.size,
  [`px-table--${props.type}`]: props.type,
  'is-zebra': isZebra.value,
  'is-hover': props.hover,
  'is-border': props.border,
  'is-pin-rows': props.pinRows,
  'is-pin-cols': props.pinCols,
  'is-hide-header': !props.showHeader,
}));
</script>

<template>
  <div :class="tableClass">
    <div class="px-table__inner">
      <slot></slot>
    </div>
  </div>
</template>

<style>
@import './style.css';
</style>
