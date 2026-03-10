import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { defineComponent, nextTick, ref } from 'vue';

import useDraggable from '../useDraggable';

function createWrapper(options: { constrainToViewport?: boolean } = {}) {
  let resetFn: (() => void) | undefined;

  const wrapper = mount(
    defineComponent({
      setup() {
        const targetRef = ref<HTMLElement>();
        const handleRef = ref<HTMLElement>();
        const { reset } = useDraggable(targetRef, handleRef, options);
        resetFn = reset;
        return { targetRef, handleRef };
      },
      render() {
        return (
          <div ref="targetRef" style="width: 100px; height: 100px;">
            <div ref="handleRef" class="handle">
              drag me
            </div>
          </div>
        );
      },
    }),
    { attachTo: document.body },
  );

  return { wrapper, reset: resetFn! };
}

function mouseDown(el: Element, clientX: number, clientY: number) {
  el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0, clientX, clientY }));
}

function mouseMove(clientX: number, clientY: number) {
  document.dispatchEvent(
    new MouseEvent('mousemove', { bubbles: true, button: 0, clientX, clientY }),
  );
}

function mouseUp() {
  document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
}

describe('hooks/useDraggable', () => {
  it('should apply transform on drag (mousedown → mousemove → mouseup)', async () => {
    const { wrapper } = createWrapper();
    await nextTick();

    const handle = wrapper.find('.handle').element;
    const target = wrapper.element as HTMLElement;

    mouseDown(handle, 10, 10);
    mouseMove(50, 30);

    expect(target.style.transform).toBe('translate(40px, 20px)');

    mouseUp();
    wrapper.unmount();
  });

  it('should ignore right-click (button !== 0)', async () => {
    const { wrapper } = createWrapper();
    await nextTick();

    const handle = wrapper.find('.handle').element;
    const target = wrapper.element as HTMLElement;

    handle.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true, button: 2, clientX: 10, clientY: 10 }),
    );
    mouseMove(50, 30);

    expect(target.style.transform).toBe('');
    wrapper.unmount();
  });

  it('constrainToViewport clamps position to viewport bounds', async () => {
    const { wrapper } = createWrapper({ constrainToViewport: true });
    await nextTick();

    const handle = wrapper.find('.handle').element;
    const target = wrapper.element as HTMLElement;

    vi.spyOn(document.documentElement, 'clientWidth', 'get').mockReturnValue(800);
    vi.spyOn(document.documentElement, 'clientHeight', 'get').mockReturnValue(600);
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      right: 200,
      bottom: 200,
      x: 100,
      y: 100,
      toJSON: () => ({}),
    });

    mouseDown(handle, 150, 150);
    mouseMove(2000, 2000);

    const transform = target.style.transform;
    const match = transform.match(/translate\((.+?)px, (.+?)px\)/);
    expect(match).toBeTruthy();
    const x = parseFloat(match![1]);
    const y = parseFloat(match![2]);
    expect(x).toBeLessThanOrEqual(800);
    expect(y).toBeLessThanOrEqual(600);

    mouseUp();
    wrapper.unmount();
    vi.restoreAllMocks();
  });

  it('reset() clears transform and offsets', async () => {
    const { wrapper, reset } = createWrapper();
    await nextTick();

    const handle = wrapper.find('.handle').element;
    const target = wrapper.element as HTMLElement;

    mouseDown(handle, 0, 0);
    mouseMove(50, 50);
    mouseUp();

    expect(target.style.transform).not.toBe('');

    reset();
    expect(target.style.transform).toBe('');

    wrapper.unmount();
  });

  it('handle ref change unbinds old and binds new', async () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          const targetRef = ref<HTMLElement>();
          const handleRef = ref<HTMLElement>();
          useDraggable(targetRef, handleRef);
          return { targetRef, handleRef };
        },
        render() {
          return (
            <div ref="targetRef">
              <div ref="handleRef" class="handle-a">
                A
              </div>
              <div class="handle-b">B</div>
            </div>
          );
        },
      }),
      { attachTo: document.body },
    );
    await nextTick();

    const handleA = wrapper.find('.handle-a').element as HTMLElement;
    const handleB = wrapper.find('.handle-b').element as HTMLElement;
    const target = wrapper.element as HTMLElement;

    // Drag with handle A works
    mouseDown(handleA, 0, 0);
    mouseMove(10, 10);
    mouseUp();
    expect(target.style.transform).toBe('translate(10px, 10px)');

    // Switch handle ref
    (wrapper.vm as any).handleRef = handleB;
    await nextTick();

    // Reset for clean test
    target.style.transform = '';

    // Old handle A should no longer trigger drag
    mouseDown(handleA, 0, 0);
    mouseMove(20, 20);
    mouseUp();
    expect(target.style.transform).toBe('');

    wrapper.unmount();
  });

  it('handle change during active drag cleans up orphaned listeners', async () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          const targetRef = ref<HTMLElement>();
          const handleRef = ref<HTMLElement>();
          useDraggable(targetRef, handleRef);
          return { targetRef, handleRef };
        },
        render() {
          return (
            <div ref="targetRef">
              <div ref="handleRef" class="handle">
                drag
              </div>
              <div class="handle2">other</div>
            </div>
          );
        },
      }),
      { attachTo: document.body },
    );
    await nextTick();

    const handle = wrapper.find('.handle').element as HTMLElement;
    const handle2 = wrapper.find('.handle2').element as HTMLElement;

    // Start dragging
    mouseDown(handle, 0, 0);

    // Switch handle while dragging
    (wrapper.vm as any).handleRef = handle2;
    await nextTick();

    // Drag state should have been cleaned up
    mouseUp();
    wrapper.unmount();
  });

  it('unmount removes all listeners', async () => {
    const removeSpy = vi.spyOn(document, 'removeEventListener');
    const { wrapper } = createWrapper();
    await nextTick();

    const handle = wrapper.find('.handle').element as HTMLElement;
    mouseDown(handle, 0, 0);

    wrapper.unmount();

    expect(removeSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith('mouseup', expect.any(Function));
    removeSpy.mockRestore();
  });

  it('no target ref during mousemove is no-op', async () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          const targetRef = ref<HTMLElement>();
          const handleRef = ref<HTMLElement>();
          useDraggable(targetRef, handleRef);
          return { handleRef };
        },
        render() {
          return <div ref="handleRef">drag</div>;
        },
      }),
      { attachTo: document.body },
    );
    await nextTick();

    const handle = wrapper.element as HTMLElement;
    mouseDown(handle, 0, 0);
    expect(() => {
      mouseMove(50, 50);
    }).not.toThrow();
    mouseUp();

    wrapper.unmount();
  });
});
