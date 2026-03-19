import type { ComputedRef, Ref } from 'vue';

export interface CarouselProps {
  modelValue?: number;
  direction?: 'horizontal' | 'vertical';
  showArrow?: 'always' | 'hover' | 'never';
  showIndicators?: boolean;
  indicatorTrigger?: 'click' | 'hover';
  color?: string;
  height?: string;
}

export interface CarouselEmits {
  (e: 'update:modelValue', index: number): void;
  (e: 'change', current: number, prev: number): void;
}

export interface CarouselContext {
  currentIndex: Ref<number>;
  direction: Readonly<Ref<'horizontal' | 'vertical'>>;
  registerItem: (uid: symbol) => void;
  unregisterItem: (uid: symbol) => void;
  totalItems: ComputedRef<number>;
  items: Ref<symbol[]>;
}

export interface CarouselInstance {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}
