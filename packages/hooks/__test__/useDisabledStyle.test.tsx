import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { defineComponent, nextTick } from 'vue';
import { useDisabledStyle } from '../useDisabledStyle';

const TestWrapper = defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { slots }) {
    useDisabledStyle();
    return () => <div>{slots.default?.()}</div>;
  },
});

describe('hooks/useDisabledStyle', () => {
  it('should not throw when disabled is false', () => {
    expect(() => {
      mount(TestWrapper, {
        props: { disabled: false },
        slots: { default: () => <button>click</button> },
      });
    }).not.toThrow();
  });

  it('should not throw when disabled is true', () => {
    expect(() => {
      mount(TestWrapper, {
        props: { disabled: true },
        slots: { default: () => <button>click</button> },
      });
    }).not.toThrow();
  });

  it('should not throw with no slot children', () => {
    expect(() => {
      mount(TestWrapper, {
        props: { disabled: true },
      });
    }).not.toThrow();
  });

  it('should not throw when disabled changes from false to true', async () => {
    const wrapper = mount(TestWrapper, {
      props: { disabled: false },
      slots: { default: () => <button>click</button> },
    });
    await wrapper.setProps({ disabled: true });
    await nextTick();
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('should not throw when disabled changes from true to false', async () => {
    const wrapper = mount(TestWrapper, {
      props: { disabled: true },
      slots: { default: () => <button>click</button> },
    });
    await wrapper.setProps({ disabled: false });
    await nextTick();
    expect(wrapper.find('button').exists()).toBe(true);
  });
});
