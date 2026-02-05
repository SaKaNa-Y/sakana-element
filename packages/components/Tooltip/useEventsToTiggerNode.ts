import { each, isElement } from 'lodash-es';
import { onMounted, onUnmounted, watch, toRef } from 'vue';
import type { ComputedRef, Ref, WatchStopHandle } from 'vue';
import type { TooltipProps } from './types';

export function useEvenstToTiggerNode(
  props: TooltipProps & { virtualTriggering?: boolean; virtualRef?: HTMLElement | void },
  triggerNode: ComputedRef<HTMLElement | undefined>,
  events: Ref<Record<string, EventListener>>,
  closeMethod: () => void
) {
  let watchEventsStopHandle: WatchStopHandle | void;
  let watchTriggerNodeStopHandle: WatchStopHandle | void;
  let watchVirtualRefStopHandle: WatchStopHandle | void;

  const _eventHandleMap = new Map(); //Map存储键值对

  const _bindEventToVirtualTiggerNode = () => {
    const el = triggerNode.value;
    console.log('[bindEvent] triggerNode.value:', el);
    console.log('[bindEvent] events.value:', events.value);
    if (!isElement(el)) {
      console.log('[bindEvent] el is not element, skip bindEvent');
      return;
    }

    each(events.value, (fn, event) => {
      console.log('[bindEvent] bindEvent:', event);
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
    console.log('[onMounted] virtualTriggering:', props.virtualTriggering);
    console.log('[onMounted] virtualRef:', props.virtualRef);

    // 直接监听 props.virtualRef 的变化
    watchVirtualRefStopHandle = watch(
      () => props.virtualRef,
      (newRef, oldRef) => {
        console.log('[watch virtualRef] newRef:', newRef, 'oldRef:', oldRef);
        console.log('[watch virtualRef] virtualTriggering:', props.virtualTriggering);
        if (!props.virtualTriggering) return;

        // 解绑旧元素的事件
        if (isElement(oldRef)) {
          _unbindEventToVirtualTiggerNode(oldRef as HTMLElement);
        }

        // 绑定新元素的事件
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
    watchTriggerNodeStopHandle?.();
    watchEventsStopHandle?.();
    watchVirtualRefStopHandle?.();
  });
}

export default useEvenstToTiggerNode;
