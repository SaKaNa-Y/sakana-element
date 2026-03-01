<script setup lang="ts">
import { useOffset } from '@sakana-element/hooks';
import { addUnit, RenderVnode, typeIconMap } from '@sakana-element/utils';
import { bind, delay } from 'lodash-es';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { getLastBottomOffset } from './methods';
import type { NotificationCompInstance, NotificationProps } from './types';

defineOptions({ name: 'PxNotification' });

const props = withDefaults(defineProps<NotificationProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  position: 'top-right',
  transitionName: 'fade',
  showClose: true,
  showTimer: true,
});

const visible = ref(false);
const notifyRef = ref<HTMLDivElement>();
const boxHeight = ref(0);

const { topOffset, bottomOffset } = useOffset({
  getLastBottomOffset: bind(getLastBottomOffset, props),
  offset: props.offset,
  boxHeight,
});

const iconName = computed(() => props.icon ?? typeIconMap.get(props.type) ?? 'circle-info');

const horizontalClass = computed(() => (props.position.endsWith('right') ? 'right' : 'left'));

const verticalProperty = computed(() => (props.position.startsWith('top') ? 'top' : 'bottom'));

const customStyle = computed(() => ({
  [verticalProperty.value]: addUnit(topOffset.value),
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

onMounted(() => {
  visible.value = true;
  startTimer();
});

onBeforeUnmount(() => clearTimer());

defineExpose<NotificationCompInstance>({
  bottomOffset,
  close,
});
</script>

<template>
  <transition
    :name="`px-notification-${transitionName}`"
    @after-leave="!visible && onDestroy()"
    @enter="boxHeight = notifyRef!.getBoundingClientRect().height"
  >
    <div
      ref="notifyRef"
      class="px-notification"
      :class="{
        [`px-notification--${type}`]: type,
        [horizontalClass]: true,
        'show-close': showClose,
        'is-plain': plain,
        'is-ghost': ghost,
      }"
      :style="customStyle"
      v-show="visible"
      role="alert"
      :aria-live="type === 'danger' || type === 'warning' ? 'assertive' : 'polite'"
      @click="onClick"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <px-icon v-if="iconName" :icon="iconName" class="px-notification__icon" />

      <div class="px-notification__text">
        <div class="px-notification__title">{{ title }}</div>
        <div class="px-notification__content">
          <slot>
            <render-vnode v-if="message" :vNode="message" />
          </slot>
        </div>
      </div>
      <div class="px-notification__close" v-if="showClose">
        <px-icon icon="close" @click.stop="close" />
      </div>
      <div
        v-if="showTimer && duration > 0"
        class="px-notification__timer"
        :style="{ animationDuration: `${duration}ms` }"
      />
    </div>
  </transition>
</template>

<style scoped>
@import './style.css';
</style>
