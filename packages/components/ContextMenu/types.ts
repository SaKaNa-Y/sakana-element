import type { Options as PopperOptions } from '@popperjs/core';
import type { Ref, VNode } from 'vue';

export type ContextMenuCommand = string | number;

/** Props-based item definition for the `items` prop shorthand */
export interface ContextMenuItemDef {
  command?: ContextMenuCommand;
  label: string | VNode;
  disabled?: boolean;
  divided?: boolean;
  icon?: string;
  shortcut?: string[];
}

/* ─── Root ─── */
export interface ContextMenuProps {
  items?: ContextMenuItemDef[];
  disabled?: boolean;
  hideOnClick?: boolean;
  maxHeight?: number | string;
  hoverColor?: string;
  lockScroll?: boolean;
  popperOptions?: Partial<PopperOptions>;
}

export interface ContextMenuEmits {
  (e: 'command', value: ContextMenuCommand): void;
  (e: 'visible-change', value: boolean): void;
}

export interface ContextMenuInstance {
  open(event: MouseEvent): void;
  close(): void;
}

/* ─── Item ─── */
export interface ContextMenuItemProps {
  command?: ContextMenuCommand;
  label?: string | VNode;
  disabled?: boolean;
  divided?: boolean;
  icon?: string;
  shortcut?: string[];
}

/* ─── Checkbox Item ─── */
export interface ContextMenuCheckboxItemProps {
  command?: ContextMenuCommand;
  label?: string | VNode;
  disabled?: boolean;
  modelValue?: boolean;
  icon?: string;
  shortcut?: string[];
}

export interface ContextMenuCheckboxItemEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}

/* ─── Radio Group ─── */
export interface ContextMenuRadioGroupProps {
  modelValue?: string;
}

export interface ContextMenuRadioGroupEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}

/* ─── Radio Item ─── */
export interface ContextMenuRadioItemProps {
  command?: ContextMenuCommand;
  label?: string | VNode;
  disabled?: boolean;
  value: string;
  icon?: string;
  shortcut?: string[];
}

/* ─── Sub ─── */
export interface ContextMenuSubProps {
  label: string | VNode;
  disabled?: boolean;
  icon?: string;
  items?: ContextMenuItemDef[];
}

/* ─── Label ─── */
export interface ContextMenuLabelProps {
  inset?: boolean;
}

/* ─── Context injection ─── */
export interface ContextMenuContext {
  handleItemClick(item: ContextMenuItemProps): void;
  closeAll(): void;
}

export interface ContextMenuRadioGroupContext {
  modelValue: Ref<string | undefined>;
  handleSelect(value: string): void;
}
