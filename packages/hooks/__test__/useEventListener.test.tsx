import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { defineComponent, nextTick, ref } from 'vue';

import useEventListener from '../useEventListener';

describe('hooks/useEventListener', () => {
  it('should add and remove event listener when target is HTMLElement', async () => {
    const target = document.createElement('button');
    const handler = vi.fn();
    const wrapper = mount(
      defineComponent({
        setup() {
          useEventListener(target, 'click', handler);
          return () => <div id="container"></div>;
        },
      }),
    );
    wrapper.get('#container').element.appendChild(target);

    await target.click();
    expect(handler).toHaveBeenCalledOnce();

    await wrapper.unmount();
    await target.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('should add and remove event listener when target is Ref<HTMLElement>', async () => {
    const target = ref<HTMLElement | undefined>();
    const handler = vi.fn(); // 创建一个模拟的函数

    mount(
      defineComponent({
        setup() {
          useEventListener(target, 'click', handler);
          return () => <button id="container" ref={target}></button>;
        },
      }),
    );

    // The watch on the ref is lazy — wait for it to fire and attach the listener
    await nextTick();

    await target.value?.click();
    expect(handler).toHaveBeenCalledOnce();

    // Reassigning the ref should move the listener to the new element
    target.value = document.createElement('div');
    await nextTick();
    await target.value?.click();
    expect(handler).toHaveBeenCalledTimes(2);
  });
});
