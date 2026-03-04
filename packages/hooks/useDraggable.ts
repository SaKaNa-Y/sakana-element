import { onBeforeUnmount, type Ref, watch } from 'vue';

export interface UseDraggableOptions {
  constrainToViewport?: boolean;
}

export default function useDraggable(
  targetRef: Ref<HTMLElement | undefined>,
  handleRef: Ref<HTMLElement | undefined>,
  options: UseDraggableOptions = {},
) {
  let offsetX = 0;
  let offsetY = 0;
  let startX = 0;
  let startY = 0;
  let dragging = false;

  function onMouseDown(e: MouseEvent) {
    // Only respond to left button
    if (e.button !== 0) return;
    dragging = true;
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    e.preventDefault();
  }

  function onMouseMove(e: MouseEvent) {
    if (!dragging) return;
    const target = targetRef.value;
    if (!target) return;

    let newX = e.clientX - startX;
    let newY = e.clientY - startY;

    if (options.constrainToViewport) {
      const rect = target.getBoundingClientRect();
      const viewW = document.documentElement.clientWidth;
      const viewH = document.documentElement.clientHeight;

      // Compute the original (untranslated) position
      const origLeft = rect.left - offsetX;
      const origTop = rect.top - offsetY;

      const minX = -origLeft;
      const maxX = viewW - origLeft - rect.width;
      const minY = -origTop;
      const maxY = viewH - origTop - rect.height;

      newX = Math.max(minX, Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));
    }

    offsetX = newX;
    offsetY = newY;
    target.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  function onMouseUp() {
    dragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  function reset() {
    const target = targetRef.value;
    offsetX = 0;
    offsetY = 0;
    if (target) target.style.transform = '';
  }

  function bindHandle(el: HTMLElement | undefined) {
    el?.addEventListener('mousedown', onMouseDown);
  }

  function unbindHandle(el: HTMLElement | undefined) {
    el?.removeEventListener('mousedown', onMouseDown);
  }

  watch(
    handleRef,
    (newEl, oldEl) => {
      unbindHandle(oldEl);
      // If a drag is in progress when the handle changes, clean up orphaned listeners
      if (dragging) {
        dragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }
      bindHandle(newEl);
    },
    { immediate: true },
  );

  onBeforeUnmount(() => {
    unbindHandle(handleRef.value);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  });

  return { reset };
}
