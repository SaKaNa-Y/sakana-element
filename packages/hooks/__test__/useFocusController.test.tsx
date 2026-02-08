import { describe, it, expect, vi } from 'vitest';
import { defineComponent, ref } from 'vue';
import { mount } from '@vue/test-utils';
import { useFocusController } from '../useFocusController';

function createWrapper(options: {
  afterFocus?: () => void;
  beforeBlur?: (e: FocusEvent) => boolean | void;
  afterBlur?: () => void;
} = {}) {
  let result: ReturnType<typeof useFocusController>;
  const inputRef = ref<HTMLInputElement>();

  const Comp = defineComponent({
    emits: ['focus', 'blur'],
    setup() {
      result = useFocusController(inputRef, options);
      return () => (
        <div ref={result.wrapperRef}>
          <input ref={inputRef} />
        </div>
      );
    },
  });

  const wrapper = mount(Comp);
  return { wrapper, getResult: () => result! };
}

describe('hooks/useFocusController', () => {
  it('should return wrapperRef, isFocused, handleFocus, handleBlur', () => {
    const { getResult } = createWrapper();
    const result = getResult();
    expect(result.wrapperRef).toBeDefined();
    expect(result.isFocused).toBeDefined();
    expect(result.handleFocus).toBeDefined();
    expect(result.handleBlur).toBeDefined();
  });

  it('handleFocus should set isFocused to true', () => {
    const { getResult } = createWrapper();
    const result = getResult();
    expect(result.isFocused.value).toBe(false);
    result.handleFocus(new FocusEvent('focus'));
    expect(result.isFocused.value).toBe(true);
  });

  it('handleFocus should emit focus event', () => {
    const { wrapper, getResult } = createWrapper();
    const result = getResult();
    result.handleFocus(new FocusEvent('focus'));
    expect(wrapper.emitted('focus')).toHaveLength(1);
  });

  it('handleFocus should call afterFocus callback', () => {
    const afterFocus = vi.fn();
    const { getResult } = createWrapper({ afterFocus });
    getResult().handleFocus(new FocusEvent('focus'));
    expect(afterFocus).toHaveBeenCalledOnce();
  });

  it('handleFocus should be idempotent when already focused', () => {
    const afterFocus = vi.fn();
    const { wrapper, getResult } = createWrapper({ afterFocus });
    const result = getResult();
    result.handleFocus(new FocusEvent('focus'));
    result.handleFocus(new FocusEvent('focus'));
    expect(afterFocus).toHaveBeenCalledOnce();
    expect(wrapper.emitted('focus')).toHaveLength(1);
  });

  it('handleBlur should set isFocused to false', () => {
    const { getResult } = createWrapper();
    const result = getResult();
    result.handleFocus(new FocusEvent('focus'));
    expect(result.isFocused.value).toBe(true);
    result.handleBlur(new FocusEvent('blur'));
    expect(result.isFocused.value).toBe(false);
  });

  it('handleBlur should emit blur event', () => {
    const { wrapper, getResult } = createWrapper();
    const result = getResult();
    result.handleFocus(new FocusEvent('focus'));
    result.handleBlur(new FocusEvent('blur'));
    expect(wrapper.emitted('blur')).toHaveLength(1);
  });

  it('handleBlur should call afterBlur callback', () => {
    const afterBlur = vi.fn();
    const { getResult } = createWrapper({ afterBlur });
    const result = getResult();
    result.handleFocus(new FocusEvent('focus'));
    result.handleBlur(new FocusEvent('blur'));
    expect(afterBlur).toHaveBeenCalledOnce();
  });

  it('handleBlur should be cancelled when beforeBlur returns true', () => {
    const beforeBlur = vi.fn(() => true);
    const afterBlur = vi.fn();
    const { getResult } = createWrapper({ beforeBlur, afterBlur });
    const result = getResult();
    result.handleFocus(new FocusEvent('focus'));
    result.handleBlur(new FocusEvent('blur'));
    expect(result.isFocused.value).toBe(true);
    expect(afterBlur).not.toHaveBeenCalled();
  });

  it('handleBlur should be cancelled when relatedTarget is inside wrapper', async () => {
    const { wrapper, getResult } = createWrapper();
    const result = getResult();
    result.handleFocus(new FocusEvent('focus'));

    // relatedTarget is the input inside the wrapper
    const inputEl = wrapper.find('input').element;
    const blurEvent = new FocusEvent('blur', { relatedTarget: inputEl });
    result.handleBlur(blurEvent);
    expect(result.isFocused.value).toBe(true);
  });

  it('clicking wrapperRef should call focus on target', async () => {
    const { wrapper, getResult } = createWrapper();
    const inputEl = wrapper.find('input').element;
    const focusSpy = vi.spyOn(inputEl, 'focus');

    // useEventListener uses watch on ref, which fires after nextTick
    await wrapper.vm.$nextTick();
    // Dispatch native click on the wrapper DOM element directly
    wrapper.find('div').element.dispatchEvent(new Event('click'));
    expect(focusSpy).toHaveBeenCalled();
  });
});
