<script setup lang="ts">
import { useOffset } from '@sakana-element/hooks';
import { addUnit, RenderVnode, typeIconMap } from '@sakana-element/utils';
import { bind, delay } from 'lodash-es';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { getLastBottomOffset } from './methods';
import type { MessageCompInstance, MessageProps } from './types';

defineOptions({ name: 'PxMessage' });

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 10,
  transitionName: 'fade-up',
  showTimer: true,
});

const visible = ref(false);
const messageRef = ref<HTMLDivElement>();
// div 高度
const boxHeight = ref(0);

const { topOffset, bottomOffset } = useOffset({
  getLastBottomOffset: bind(getLastBottomOffset, props), //将props作为参数传递给getLastBottomOffset
  offset: props.offset,
  boxHeight,
});

const iconName = computed(() => props.icon ?? typeIconMap.get(props.type) ?? 'circle-info');

const customStyle = computed(() => ({
  top: addUnit(topOffset.value),
  zIndex: props.zIndex,
}));

let timer: number;
function startTimer() {
  if (props.duration === 0) return;
  timer = delay(close, props.duration);
}

function clearTimer() {
  clearTimeout(timer);
}

function close() {
  clearTimer();
  visible.value = false;
}

watch(visible, (val) => {
  if (!val) boxHeight.value = -props.offset; // 使得退出的动画更加流畅
});

onMounted(() => {
  //组件渲染后，显示组件，并设置定时器
  visible.value = true;
  startTimer();
});

onBeforeUnmount(() => clearTimer());

defineExpose<MessageCompInstance>({
  close,
  bottomOffset,
});
</script>

<!-- 大写更符合vue3的语法 template里面不能写注释-->
<template>
  <Transition
    :name="transitionName"
    @enter="boxHeight = messageRef!.getBoundingClientRect().height"
    @after-leave="!visible && onDestroy()"
  >
    <div
      ref="messageRef"
      class="px-message"
      :class="{
        [`px-message--${type}`]: type,
        'is-close': showClose,
        'text-center': center,
        'is-plain': plain,
        'is-ghost': ghost,
      }"
      :style="customStyle"
      v-show="visible"
      role="alert"
      :aria-live="type === 'danger' || type === 'warning' ? 'assertive' : 'polite'"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <px-icon class="px-message__icon" :icon="iconName" />
      <div class="px-message__content">
        <slot>
          <render-vnode v-if="message" :vNode="message" />
        </slot>
      </div>
      <div class="px-message__close" v-if="showClose">
        <px-icon icon="close" @click.stop="close" />
      </div>
      <div
        v-if="showTimer && duration > 0"
        class="px-message__timer"
        :style="{ animationDuration: `${duration}ms` }"
      />
    </div>
  </Transition>
</template>

<style>
@import './style.css';
</style>
