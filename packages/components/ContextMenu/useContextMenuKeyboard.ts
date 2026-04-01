import { nextTick, onBeforeUnmount, type Ref, watch } from 'vue';

export interface UseContextMenuKeyboardOptions {
  menuRef: Ref<HTMLElement | undefined>;
  isOpen: Ref<boolean>;
  close: () => void;
}

const ITEM_SELECTOR =
  '.px-context-menu__item:not(.is-disabled), .px-context-menu__sub-trigger:not(.is-disabled)';

function getEnabledItems(menu: HTMLElement): HTMLElement[] {
  return Array.from(menu.querySelectorAll<HTMLElement>(ITEM_SELECTOR));
}

function focusItem(items: HTMLElement[], index: number) {
  items[index]?.focus();
}

export default function useContextMenuKeyboard(options: UseContextMenuKeyboardOptions) {
  const { menuRef, isOpen, close } = options;

  function getCurrentIndex(items: HTMLElement[]) {
    return items.indexOf(document.activeElement as HTMLElement);
  }

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
        break;
      }
      case 'Tab': {
        close();
        break;
      }
    }
  }

  watch(isOpen, (val) => {
    if (val) {
      nextTick(() => {
        const menu = menuRef.value;
        if (!menu) return;
        menu.focus({ preventScroll: true });
        menu.addEventListener('keydown', onKeydown);
      });
    } else {
      menuRef.value?.removeEventListener('keydown', onKeydown);
    }
  });

  onBeforeUnmount(() => {
    menuRef.value?.removeEventListener('keydown', onKeydown);
  });
}
