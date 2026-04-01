import type { InjectionKey } from 'vue';
import type { ContextMenuContext, ContextMenuRadioGroupContext } from './types';

export const CONTEXT_MENU_CTX_KEY: InjectionKey<ContextMenuContext> = Symbol('contextMenuContext');

export const CONTEXT_MENU_RADIO_GROUP_CTX_KEY: InjectionKey<ContextMenuRadioGroupContext> = Symbol(
  'contextMenuRadioGroupContext',
);

/** Delay (ms) before a submenu opens on hover */
export const SUBMENU_OPEN_DELAY = 150;

/** Delay (ms) before a submenu closes after mouse leaves */
export const SUBMENU_CLOSE_DELAY = 200;
