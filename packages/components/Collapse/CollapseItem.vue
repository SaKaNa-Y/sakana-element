<script setup lang="ts">
import { computed, inject } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { COLLAPSE_CTX_KEY } from './constants';
import transitionEvents from './transitionEvents';
import type { CollapseItemProps } from './types';

defineOptions({
  name: 'PxCollapseItem',
});
const props = withDefaults(defineProps<CollapseItemProps>(), {
  showArrow: true,
});
const ctx = inject(COLLAPSE_CTX_KEY, void 0);
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name)); // 判断是否展开

const resolvedIcon = computed(() => {
  if (!props.icon) return 'chevron-right';
  if (props.icon === 'plus') return isActive.value ? 'minus' : 'plus';
  return props.icon;
});

function handleClick() {
  if (props.disabled) return;
  ctx?.handleItemClick(props.name);
}
</script>

<template>
  <div
    class="px-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="px-collapse-item__header"
      :id="`item-header-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
        'is-hidden-arrow': showArrow === false,
      }"
      @click="handleClick"
    >
      <span class="px-collapse-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <px-icon
        v-if="showArrow !== false"
        :icon="resolvedIcon"
        class="header-angle"
        :class="{ 'is-toggle-icon': !!icon }"
      />
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="px-collapse-item__wapper" v-show="isActive">
        <div class="px-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
