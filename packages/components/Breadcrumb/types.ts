import type { Slot } from 'vue';

export interface BreadcrumbProps {
  separator?: string;
}

export interface BreadcrumbItemProps {
  to?: string;
  icon?: string;
  disabled?: boolean;
}

export interface BreadcrumbContext {
  separator: string;
  separatorSlot?: Slot;
}
