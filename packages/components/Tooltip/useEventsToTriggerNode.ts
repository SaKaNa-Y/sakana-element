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

  onMounted(() => {
    watchVirtualRefStopHandle = watch(
      () => props.virtualRef,
      (newRef, oldRef) => {
        if (!props.virtualTriggering) return;

        if (isElement(oldRef)) {
          _unbindEventToVirtualTriggerNode(oldRef as HTMLElement);
        }

        if (isElement(newRef)) {
          _bindEventToVirtualTriggerNode();
        }
      },
      { immediate: true },
    );

    watchEventsStopHandle = watch(
      events,
      () => {
        if (!props.virtualTriggering) return;
        _unbindEventToVirtualTriggerNode();
        _bindEventToVirtualTriggerNode();
        closeMethod();
      },
      { deep: true },
    );
  });

  onUnmounted(() => {
    watchEventsStopHandle?.();
    watchVirtualRefStopHandle?.();
  });
}

export default useEventsToTriggerNode;
