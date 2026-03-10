import { each, isElement } from 'lodash-es';
import type { ComputedRef, Ref, WatchStopHandle } from 'vue';
import { onMounted, onUnmounted, watch } from 'vue';
import type { TooltipProps } from './types';

export function useEventsToTriggerNode(
  props: TooltipProps,
  triggerNode: ComputedRef<HTMLElement | undefined>,
  events: Ref<Record<string, EventListener>>,
  closeMethod: () => void,
) {
  let watchEventsStopHandle: WatchStopHandle | undefined;
  let watchVirtualRefStopHandle: WatchStopHandle | undefined;

  const _eventHandleMap = new Map();

  /* v8 ignore start */
  const _bindEventToVirtualTriggerNode = () => {
    const el = triggerNode.value;
    if (!el || !isElement(el)) return;

    each(events.value, (fn, event) => {
      _eventHandleMap.set(event, fn);
      el.addEventListener(event as keyof HTMLElementEventMap, fn);
    });
  };

  const _unbindEventToVirtualTriggerNode = (el?: HTMLElement) => {
    const targetEl = el ?? triggerNode.value;
    if (!targetEl || !isElement(targetEl)) return;

    each(
      ['mouseenter', 'click', 'contextmenu'],
      (key) =>
        _eventHandleMap.has(key) && targetEl.removeEventListener(key, _eventHandleMap.get(key)),
    );
  };
  /* v8 ignore stop */

  onMounted(() => {
    watchVirtualRefStopHandle = watch(
      () => props.virtualRef,
      /* v8 ignore start */
      (newRef, oldRef) => {
        if (!props.virtualTriggering) return;

        if (isElement(oldRef)) {
          _unbindEventToVirtualTriggerNode(oldRef as HTMLElement);
        }

        if (isElement(newRef)) {
          _bindEventToVirtualTriggerNode();
        }
      },
      /* v8 ignore stop */
      { immediate: true },
    );

    watchEventsStopHandle = watch(
      events,
      /* v8 ignore start */
      () => {
        if (!props.virtualTriggering) return;
        _unbindEventToVirtualTriggerNode();
        _bindEventToVirtualTriggerNode();
        closeMethod();
      },
      /* v8 ignore stop */
      { deep: true },
    );
  });

  onUnmounted(() => {
    /* v8 ignore start */
    watchEventsStopHandle?.();
    watchVirtualRefStopHandle?.();
    /* v8 ignore stop */
  });
}

export default useEventsToTriggerNode;
