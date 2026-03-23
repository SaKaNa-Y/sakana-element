import type { ComputedRef, Ref } from 'vue';

export interface CommandProps {
  modelValue?: string;
  filter?: (value: string, search: string, keywords?: string[]) => boolean;
  label?: string;
}

export interface CommandEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'select', value: string): void;
}

export interface CommandInputProps {
  placeholder?: string;
  icon?: string;
}

export interface CommandListProps {
  maxHeight?: string;
}

export interface CommandItemProps {
  value: string;
  keywords?: string[];
  disabled?: boolean;
  icon?: string;
  shortcut?: string[];
}

export interface CommandGroupProps {
  heading?: string;
}

export interface CommandDialogProps {
  modelValue?: boolean;
  shortcut?: boolean;
}

export interface CommandDialogEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'open'): void;
  (e: 'close'): void;
}

export interface CommandItemRegistration {
  uid: symbol;
  value: string;
  keywords: string[];
  disabled: boolean;
  groupId?: string;
}

export interface CommandContext {
  searchTerm: Ref<string>;
  filterFn: ComputedRef<(value: string, search: string, keywords?: string[]) => boolean>;
  highlightedValue: Ref<string | null>;
  visibleItems: ComputedRef<CommandItemRegistration[]>;
  visibleUids: ComputedRef<Set<symbol>>;
  groupVisibleCounts: ComputedRef<Map<string, number>>;
  registerItem: (item: CommandItemRegistration) => void;
  unregisterItem: (uid: symbol) => void;
  updateItem: (uid: symbol, patch: Partial<Omit<CommandItemRegistration, 'uid'>>) => void;
  handleSelect: (value: string) => void;
  setHighlightedValue: (value: string | null) => void;
}

export interface CommandInstance {
  focus: () => void;
}
