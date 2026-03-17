import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { defineComponent, ref } from 'vue';

import useFocusTrap from '../useFocusTrap';

function createWrapper(html = '<button class="a">A</button><button class="b">B</button>') {
  let activateFn: () => void;
  let deactivateFn: () => void;
  const containerRef = ref<HTMLElement>();

  const wrapper = mount(
    defineComponent({
      setup() {
        const { activate, deactivate } = useFocusTrap(containerRef);
        activateFn = activate;
        deactivateFn = deactivate;
        return () => <div ref={containerRef} innerHTML={html} />;
      },
    }),
    { attachTo: document.body },
  );

  return {
    wrapper,
    containerRef,
    activate: activateFn!,
    deactivate: deactivateFn!,
  };
}

function tabEvent(shiftKey = false) {
  return new KeyboardEvent('keydown', { key: 'Tab', shiftKey, bubbles: true });
}

describe('hooks/useFocusTrap', () => {
  it('activate() stores previously focused element and adds keydown listener', () => {
    const addSpy = vi.spyOn(document, 'addEventListener');
    const { wrapper, activate } = createWrapper();

    const someButton = document.createElement('button');
    document.body.appendChild(someButton);
    someButton.focus();

    activate();

    expect(addSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    addSpy.mockRestore();

    document.body.removeChild(someButton);
    wrapper.unmount();
  });

  it('deactivate() removes listener and restores focus to previous element', () => {
    const removeSpy = vi.spyOn(document, 'removeEventListener');
    const { wrapper, activate, deactivate } = createWrapper();

    const someButton = document.createElement('button');
    document.body.appendChild(someButton);
    someButton.focus();

    activate();
    deactivate();

    expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    expect(document.activeElement).toBe(someButton);

    removeSpy.mockRestore();
    document.body.removeChild(someButton);
    wrapper.unmount();
  });

  it('Tab on last focusable wraps to first', () => {
    const { wrapper, activate, containerRef } = createWrapper();
    activate();

    const buttons = containerRef.value!.querySelectorAll<HTMLElement>('button');
    const first = buttons[0];
    const last = buttons[buttons.length - 1];

    // Mock offsetParent so filter considers them visible
    Object.defineProperty(first, 'offsetParent', { value: document.body, configurable: true });
    Object.defineProperty(last, 'offsetParent', { value: document.body, configurable: true });

    last.focus();
    const focusSpy = vi.spyOn(first, 'focus');

    document.dispatchEvent(tabEvent(false));

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
    wrapper.unmount();
  });

  it('Shift+Tab on first focusable wraps to last', () => {
    const { wrapper, activate, containerRef } = createWrapper();
    activate();

    const buttons = containerRef.value!.querySelectorAll<HTMLElement>('button');
    const first = buttons[0];
    const last = buttons[buttons.length - 1];

    Object.defineProperty(first, 'offsetParent', { value: document.body, configurable: true });
    Object.defineProperty(last, 'offsetParent', { value: document.body, configurable: true });

    first.focus();
    const focusSpy = vi.spyOn(last, 'focus');

    document.dispatchEvent(tabEvent(true));

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
    wrapper.unmount();
  });

  it('Tab when focus is outside container moves to first', () => {
    const { wrapper, activate, containerRef } = createWrapper();
    activate();

    const buttons = containerRef.value!.querySelectorAll<HTMLElement>('button');
    const first = buttons[0];
    const last = buttons[buttons.length - 1];

    Object.defineProperty(first, 'offsetParent', { value: document.body, configurable: true });
    Object.defineProperty(last, 'offsetParent', { value: document.body, configurable: true });

    // Focus something outside the container
    document.body.focus();
    const focusSpy = vi.spyOn(first, 'focus');

    document.dispatchEvent(tabEvent(false));

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
    wrapper.unmount();
  });

  it('Shift+Tab when focus is outside container moves to last', () => {
    const { wrapper, activate, containerRef } = createWrapper();
    activate();

    const buttons = containerRef.value!.querySelectorAll<HTMLElement>('button');
    const first = buttons[0];
    const last = buttons[buttons.length - 1];

    Object.defineProperty(first, 'offsetParent', { value: document.body, configurable: true });
    Object.defineProperty(last, 'offsetParent', { value: document.body, configurable: true });

    document.body.focus();
    const focusSpy = vi.spyOn(last, 'focus');

    document.dispatchEvent(tabEvent(true));

    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
    wrapper.unmount();
  });

  it('no focusable elements — preventDefault() only', () => {
    const { wrapper, activate } = createWrapper('<div>no focusable elements</div>');
    activate();

    const event = tabEvent(false);
    const preventSpy = vi.spyOn(event, 'preventDefault');

    document.dispatchEvent(event);

    expect(preventSpy).toHaveBeenCalled();
    preventSpy.mockRestore();
    wrapper.unmount();
  });

  it('double activate() is no-op', () => {
    const addSpy = vi.spyOn(document, 'addEventListener');
    const { wrapper, activate } = createWrapper();

    activate();
    activate();

    const keydownCalls = addSpy.mock.calls.filter(([type]) => type === 'keydown');
    expect(keydownCalls).toHaveLength(1);

    addSpy.mockRestore();
    wrapper.unmount();
  });

  it('double deactivate() is no-op', () => {
    const removeSpy = vi.spyOn(document, 'removeEventListener');
    const { wrapper, activate, deactivate } = createWrapper();

    activate();
    deactivate();
    deactivate();

    const keydownCalls = removeSpy.mock.calls.filter(([type]) => type === 'keydown');
    expect(keydownCalls).toHaveLength(1);

    removeSpy.mockRestore();
    wrapper.unmount();
  });

  it('unmount calls deactivate', () => {
    const removeSpy = vi.spyOn(document, 'removeEventListener');
    const { wrapper, activate } = createWrapper();

    activate();
    wrapper.unmount();

    const keydownCalls = removeSpy.mock.calls.filter(([type]) => type === 'keydown');
    expect(keydownCalls.length).toBe(1);

    removeSpy.mockRestore();
  });

  it('non-Tab key is ignored', () => {
    const { wrapper, activate, containerRef } = createWrapper();
    activate();

    const buttons = containerRef.value!.querySelectorAll<HTMLElement>('button');
    const first = buttons[0];
    Object.defineProperty(first, 'offsetParent', { value: document.body, configurable: true });

    const focusSpy = vi.spyOn(first, 'focus');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));

    expect(focusSpy).not.toHaveBeenCalled();
    focusSpy.mockRestore();
    wrapper.unmount();
  });
});
