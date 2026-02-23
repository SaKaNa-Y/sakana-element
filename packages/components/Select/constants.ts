import type { Options, State } from '@popperjs/core';
import type { ColorTemplate } from '@sakana-element/utils';
import type { InjectionKey } from 'vue'; //InjectionKey 表示一个唯一的键，用于在 Vue 的依赖注入系统中标识一个上下文
import type { SelectContext } from './types';

//InjectionKey<SelectContext>表示SELECT_CTX_KEY属于InjectionKey类型，且值为SelectContext类型
export const SELECT_CTX_KEY: InjectionKey<SelectContext> = Symbol('selectContext');

export const POPPER_OPTIONS: Partial<Options> = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: State }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
    },
  ],
} as const;

export const PRESET_SELECT_COLORS = new Set(['primary', 'success', 'warning', 'danger', 'info']);

export const SELECT_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  default: {
    'item-selected-font-color': 'color',
    'item-selected-bg-color': 'light',
    'item-indicator-color': 'color',
    'item-highlighted-border-color': 'color',
  },
  ghost: {
    'item-selected-font-color': 'color',
    'item-selected-bg-color': 'light',
    'item-indicator-color': 'color',
    'item-highlighted-border-color': 'color',
  },
};
