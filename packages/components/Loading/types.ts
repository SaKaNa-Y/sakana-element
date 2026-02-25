import type { MaybeRef } from 'vue';

export interface LoadingOptionsResolved {
  parent?: HTMLElement;
  target?: HTMLElement;
  visible?: MaybeRef<boolean>;
  background?: MaybeRef<string>;
  spinner?: MaybeRef<boolean | string>;
  text?: MaybeRef<string>;
  fullscreen?: MaybeRef<boolean>;
  lock?: MaybeRef<boolean>;
  beforeClose?(): boolean;
  closed?(): void;
}

export type LoadingOptions = Partial<
  Omit<LoadingOptionsResolved, 'parent' | 'target'> & {
    target: HTMLElement | string;
    body: boolean;
    zIndex?: number;
    onAfterLeave(): void;
  }
>;

export type LoadingVariant = 'spinner' | 'dots' | 'bars' | 'ring';
export type LoadingSize = 'xs' | 'sm' | 'md' | 'lg';
export type LoadingType = 'primary' | 'success' | 'info' | 'warning' | 'danger';

export interface LoadingIndicatorProps {
  variant?: LoadingVariant;
  size?: LoadingSize;
  type?: LoadingType;
  color?: string;
}
