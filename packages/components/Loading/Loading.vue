<script setup lang="ts">
import { isString } from 'lodash-es';
import { computed, type Ref } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import type { LoadingOptions } from './types';

defineOptions({
  name: 'PxLoading',
  inheritAttrs: false, //关闭透传属性，除了自己定义的属性
});
const props = defineProps<LoadingOptions>();

const iconName = computed(() => {
  if (isString(props.spinner)) {
    return props.spinner;
  }
  return 'spinner'; // 'circle-notch' 也很好看
});
</script>

<template>
  <transition name="fade-in-linear" @after-leave="onAfterLeave">
    <div
      v-show="(props.visible as Ref).value"
      class="px-loading px-loading__mask"
      role="status"
      aria-live="polite"
      :class="{ 'is-fullscreen': fullscreen }"
    >
      <div class="px-loading__spinner">
        <px-icon v-if="props.spinner !== false" :icon="iconName" spin />
        <p v-if="text" class="px-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<style>
@import './style.css';
.px-loading {
  --px-loading-bg-color: v-bind(
    background
  ) !important; /* !important 表示强制覆盖内联样式  v-bind(background) 表示绑定background属性 */
  --px-loading-z-index: v-bind(
    zIndex
  ) !important; /* !important 表示强制覆盖内联样式  v-bind(zIndex) 表示绑定zIndex属性 */
}
</style>
