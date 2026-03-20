<script setup lang="ts">
import { inject } from 'vue';
import transitionEvents from '../Collapse/transitionEvents';
import { COLLAPSIBLE_CTX_KEY } from './constants';

defineOptions({
  name: 'PxCollapsibleContent',
});

const ctx = inject(COLLAPSIBLE_CTX_KEY)!;
</script>

<template>
  <transition name="px-collapsible-slide" v-on="transitionEvents">
    <div
      v-show="ctx.open.value"
      class="px-collapsible-content__wrapper"
      :id="`${ctx.id}-content`"
      role="region"
      :aria-labelledby="ctx.id"
      :data-state="ctx.open.value ? 'open' : 'closed'"
    >
      <div class="px-collapsible-content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import './style.css';
</style>
