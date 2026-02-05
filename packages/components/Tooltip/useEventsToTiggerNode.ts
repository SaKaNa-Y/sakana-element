import { each, isElement } from 'lodash-es';
import { onMounted, onUnmounted, watch } from 'vue';
import type { ComputedRef, Ref, WatchStopHandle } from 'vue';
import type { TooltipProps } from './types';

export function useEvenstToTiggerNode(
  props: TooltipProps & { virtualTriggering?: boolean; virtualRef?: HTMLElement | void },
  triggerNode: ComputedRef<HTMLElement | undefined>,
  events: Ref<Record<string, EventListener>>,
  closeMethod: () => void
) {
  let watchEventsStopHandle: WatchStopHandle | void;
  let watchVirtualRefStopHandle: WatchStopHandle | void;

  const _eventHandleMap = new Map();

  const _bindEventToVirtualTiggerNode = () => {
    const el = triggerNode.value;
    if (!isElement(el)) return;

    each(events.value, (fn, event) => {
      _eventHandleMap.set(event, fn);
      el.addEventListener(event as keyof HTMLElementEventMap, fn);
    });
  };

  const _unbindEventToVirtualTiggerNode = (el?: HTMLElement) => {
    const targetEl = el ?? triggerNode.value;
    if (!isElement(targetEl)) return;

    each(
      ['mouseenter', 'click', 'contextmenu'],
      (key) =>
        _eventHandleMap.has(key) &&
        targetEl.removeEventListener(key, _eventHandleMap.get(key))
    );
  };

  onMounted(() => {
    watchVirtualRefStopHandle = watch(
      () => props.virtualRef,
      (newRef, oldRef) => {
        if (!props.virtualTriggering) return;

        if (isElement(oldRef)) {
          _unbindEventToVirtualTiggerNode(oldRef as HTMLElement);
        }

        if (isElement(newRef)) {
          _bindEventToVirtualTiggerNode();
        }
      },
      { immediate: true }
    );

    watchEventsStopHandle = watch(
      events,
      () => {
        if (!props.virtualTriggering) return;
        _unbindEventToVirtualTiggerNode();
        _bindEventToVirtualTiggerNode();
        closeMethod();
      },
      { deep: true }
    );
  });

  onUnmounted(() => {
    watchEventsStopHandle?.();
    watchVirtualRefStopHandle?.();
  });
}

export default useEvenstToTiggerNode;
