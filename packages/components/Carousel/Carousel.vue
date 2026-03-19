<script setup lang="ts">
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed, provide, ref, toRef, watch } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { CAROUSEL_COLOR_TEMPLATES, CAROUSEL_CTX_KEY, PRESET_CAROUSEL_COLORS } from './constants';
import type { CarouselEmits, CarouselProps } from './types';

const COMP_NAME = 'PxCarousel' as const;

defineOptions({
  name: COMP_NAME,
});

const props = withDefaults(defineProps<CarouselProps>(), {
  direction: 'horizontal',
  showArrow: 'hover',
  showIndicators: true,
  indicatorTrigger: 'click',
});

const emits = defineEmits<CarouselEmits>();

const currentIndex = ref(props.modelValue ?? 0);
const items = ref<symbol[]>([]);

const totalItems = computed(() => items.value.length);

const isPrevDisabled = computed(() => currentIndex.value <= 0);
const isNextDisabled = computed(() => currentIndex.value >= totalItems.value - 1);

const isPresetColor = computed(() => PRESET_CAROUSEL_COLORS.has(props.color ?? ''));
const isCustomColor = computed(() => !!props.color && !isPresetColor.value);

const customColorStyle = computed(() => {
  if (!isCustomColor.value) return {};
  const palette = createColorPalette(props.color!);
  return resolveColorVars(palette, 'px-carousel', CAROUSEL_COLOR_TEMPLATES.default);
});

const trackStyle = computed(() => {
  if (props.direction === 'vertical') {
    return { transform: `translateY(-${currentIndex.value * 100}%)` };
  }
  return { transform: `translateX(-${currentIndex.value * 100}%)` };
});

function registerItem(uid: symbol) {
  items.value.push(uid);
}

function unregisterItem(uid: symbol) {
  const index = items.value.indexOf(uid);
  if (index > -1) {
    items.value.splice(index, 1);
    if (currentIndex.value >= items.value.length && items.value.length > 0) {
      setIndex(items.value.length - 1);
    }
  }
}

function setIndex(index: number) {
  const prev = currentIndex.value;
  if (prev === index) return;
  currentIndex.value = index;
  emits('update:modelValue', index);
  emits('change', index, prev);
}

function next() {
  const total = totalItems.value;
  if (total === 0 || currentIndex.value >= total - 1) return;
  setIndex(currentIndex.value + 1);
}

function prev() {
  if (currentIndex.value <= 0) return;
  setIndex(currentIndex.value - 1);
}

function goTo(index: number) {
  const total = totalItems.value;
  if (index < 0 || index >= total) return;
  setIndex(index);
}

function handleKeydown(e: KeyboardEvent) {
  const isHorizontal = props.direction === 'horizontal';
  if (isHorizontal && e.key === 'ArrowRight' && !isNextDisabled.value) {
    e.preventDefault();
    next();
  } else if (isHorizontal && e.key === 'ArrowLeft' && !isPrevDisabled.value) {
    e.preventDefault();
    prev();
  } else if (!isHorizontal && e.key === 'ArrowDown' && !isNextDisabled.value) {
    e.preventDefault();
    next();
  } else if (!isHorizontal && e.key === 'ArrowUp' && !isPrevDisabled.value) {
    e.preventDefault();
    prev();
  }
}

function handleIndicatorClick(index: number) {
  if (props.indicatorTrigger === 'click') {
    goTo(index);
  }
}

function handleIndicatorHover(index: number) {
  if (props.indicatorTrigger === 'hover') {
    goTo(index);
  }
}

watch(
  () => props.modelValue,
  (val) => {
    if (val !== undefined && val !== currentIndex.value) {
      currentIndex.value = val;
    }
  },
);

provide(CAROUSEL_CTX_KEY, {
  currentIndex,
  direction: toRef(props, 'direction'),
  registerItem,
  unregisterItem,
  totalItems,
  items,
});

defineExpose({ next, prev, goTo });
</script>

<template>
  <div
    class="px-carousel"
    :class="{
      'is-vertical': direction === 'vertical',
      [`px-carousel--${color}`]: isPresetColor,
    }"
    :style="[
      customColorStyle,
      height ? { height } : {},
    ]"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown="handleKeydown"
  >
    <div class="px-carousel__viewport">
      <div class="px-carousel__track" :style="trackStyle">
        <slot></slot>
      </div>
    </div>

    <!-- Arrows -->
    <div
      v-if="showArrow !== 'never'"
      class="px-carousel__arrows"
      :class="{ 'is-hover': showArrow === 'hover' }"
    >
      <button
        class="px-carousel__arrow px-carousel__arrow--prev"
        type="button"
        :disabled="isPrevDisabled"
        :aria-label="direction === 'vertical' ? 'Previous slide (up)' : 'Previous slide (left)'"
        @click="prev"
      >
        <px-icon :icon="direction === 'vertical' ? 'chevron-up' : 'chevron-left'" />
      </button>
      <button
        class="px-carousel__arrow px-carousel__arrow--next"
        type="button"
        :disabled="isNextDisabled"
        :aria-label="direction === 'vertical' ? 'Next slide (down)' : 'Next slide (right)'"
        @click="next"
      >
        <px-icon :icon="direction === 'vertical' ? 'chevron-down' : 'chevron-right'" />
      </button>
    </div>

    <!-- Indicators -->
    <div v-if="showIndicators" class="px-carousel__indicators">
      <button
        v-for="(_, index) in totalItems"
        :key="index"
        class="px-carousel__indicator"
        :class="{ 'is-active': currentIndex === index }"
        type="button"
        role="tab"
        :aria-selected="currentIndex === index ? 'true' : 'false'"
        :aria-label="`Slide ${index + 1}`"
        @click="handleIndicatorClick(index)"
        @mouseenter="handleIndicatorHover(index)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
