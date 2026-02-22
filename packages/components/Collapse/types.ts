import type { Ref } from 'vue';

export type CollapseItemName = string | number;

export interface CollapseProps {
  modelValue: CollapseItemName[];
  accordion?: boolean;
  color?: string;
  ghost?: boolean;
  trigger?: 'click' | 'focus';
  iconPlacement?: 'start' | 'end';
}

export interface CollapseItemProps {
  name: CollapseItemName;
  title?: string;
  disabled?: boolean;
  showArrow?: boolean;
  icon?: string;
  forceOpen?: boolean;
  forceClose?: boolean;
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: CollapseItemName[]): void;
  (e: 'change', value: CollapseItemName[]): void;
}

export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>;
  handleItemClick(name: CollapseItemName): void;
  color?: string;
  ghost?: boolean;
  trigger?: 'click' | 'focus';
  iconPlacement?: 'start' | 'end';
}
