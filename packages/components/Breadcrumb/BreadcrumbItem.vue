<script setup lang="ts">
import { inject } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { BREADCRUMB_CTX_KEY } from './constants';
import type { BreadcrumbItemProps } from './types';

defineOptions({
  name: 'PxBreadcrumbItem',
});

defineProps<BreadcrumbItemProps>();

const ctx = inject(BREADCRUMB_CTX_KEY, { separator: '/' });
</script>

<template>
  <li class="px-breadcrumb__item" :class="{ 'is-disabled': disabled }">
    <component
      :is="to && !disabled ? 'a' : 'span'"
      class="px-breadcrumb__link"
      :class="{ 'is-current': !to, 'is-disabled': disabled }"
      :aria-current="!to && !disabled ? 'page' : undefined"
      v-bind="to && !disabled ? { href: to } : {}"
      @click.prevent
    >
      <px-icon v-if="icon" :icon="icon" class="px-breadcrumb__icon" />
      <slot></slot>
    </component>
    <span class="px-breadcrumb__separator" aria-hidden="true">
      <template v-if="ctx.separatorSlot">
        <component :is="() => ctx.separatorSlot!()" />
      </template>
      <template v-else>{{ ctx.separator }}</template>
    </span>
  </li>
</template>

<style scoped>
@import './style.css';
</style>
