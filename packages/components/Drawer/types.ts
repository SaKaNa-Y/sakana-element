export interface DrawerProps {
  modelValue: boolean;
  placement?: 'left' | 'right';
  size?: string;
  showOverlay?: boolean;
  lockScroll?: boolean;
  closeOnClickOverlay?: boolean;
  closeOnEsc?: boolean;
  title?: string;
}

export interface DrawerEmits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'open'): void;
  (e: 'close'): void;
}

export interface DrawerInstance {
  open(): void;
  close(): void;
  toggle(): void;
}
