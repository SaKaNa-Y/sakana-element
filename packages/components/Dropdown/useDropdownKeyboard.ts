import { nextTick, onBeforeUnmount, type Ref, watch } from 'vue';

export interface UseDropdownKeyboardOptions {
  menuRef: Ref<HTMLElement | undefined>;
  triggerRef: Ref<HTMLElement | undefined>;
  isOpen: Ref<boolean>;
  close: () => void;
}

const ITEM_SELECTOR = '.px-dropdown__item:not(.is-disabled)';

function getEnabledItems(menu: HTMLElement): HTMLElement[] {
  return Array.from(menu.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
}

function focusItem(items: HTMLElement[], index: number) {
  items[index]?.focus();
}

export default function useDropdownKeyboard(options: UseDropdownKeyboardOptions) {
  const { menuRef, triggerRef, isOpen, close } = options;

  function getCurrentIndex(items: HTMLElement[]) {
    return items.indexOf(document.activeElement as HTMLElement);
  }

  /* v8 ignore start -- switch/ternary branches create many v8 binary-branch artifacts */
  function onKeydown(e: KeyboardEvent) {
    const menu = menuRef.value;
    if (!menu) return;

    const items = getEnabledItems(menu);
    if (!items.length) return;

    const current = getCurrentIndex(items);

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        const next = current === -1 ? 0 : current < items.length - 1 ? current + 1 : 0;
        focusItem(items, next);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const prev =
          current === -1 ? items.length - 1 : current > 0 ? current - 1 : items.length - 1;
        focusItem(items, prev);
        break;
      }
      case 'Home': {
        e.preventDefault();
        focusItem(items, 0);
        break;
      }
      case 'End': {
        e.preventDefault();
        focusItem(items, items.length - 1);
        break;
      }
      case 'Escape': {
        e.preventDefault();
        close();
        nextTick(() => triggerRef.value?.focus());
        break;
      }
      case 'Tab': {
        close();
        break;
      }
    }
  }
  /* v8 ignore stop */

  // Focus menu container (not first item) when menu opens
  watch(isOpen, (val) => {
    if (val) {
      nextTick(() => {
        const menu = menuRef.value;
        /* v8 ignore start */
        if (!menu) return;
        /* v8 ignore stop */
        menu.focus();

        menu.addEventListener('keydown', onKeydown);
      });
    } else {
      /* v8 ignore next */
      menuRef.value?.removeEventListener('keydown', onKeydown);
    }
  });

  onBeforeUnmount(() => {
    menuRef.value?.removeEventListener('keydown', onKeydown);
  });
}
