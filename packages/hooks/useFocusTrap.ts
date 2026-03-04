import { onBeforeUnmount, type Ref } from 'vue';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export default function useFocusTrap(containerRef: Ref<HTMLElement | undefined>) {
  let previouslyFocused: HTMLElement | null = null;
  let active = false;

  function onKeyDown(e: KeyboardEvent) {
    if (!active || e.key !== 'Tab') return;
    const container = containerRef.value;
    if (!container) return;

    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    ).filter((el) => el.offsetParent !== null); // visible only

    if (focusable.length === 0) {
      e.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first || !container.contains(document.activeElement)) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last || !container.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function activate() {
    if (active) return;
    previouslyFocused = document.activeElement as HTMLElement | null;
    active = true;
    document.addEventListener('keydown', onKeyDown);
  }

  function deactivate() {
    if (!active) return;
    active = false;
    document.removeEventListener('keydown', onKeyDown);
    if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
      previouslyFocused.focus();
    }
    previouslyFocused = null;
  }

  onBeforeUnmount(() => {
    deactivate();
  });

  return { activate, deactivate };
}
