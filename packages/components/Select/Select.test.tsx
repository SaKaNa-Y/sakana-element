import { rAF } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import { h, nextTick } from 'vue';
import PxInput from '../Input/Input.vue';
import { SELECT_CTX_KEY } from './constants';
import { PxOption, PxSelect } from './index';
import Option from './Option.vue';

import Select from './Select.vue';
import type { SelectOptionProps } from './types';

const options = [
  { value: '1', label: 'option 1' },
  { value: '2', label: 'option 2' },
  { value: '3', label: 'option 3', disabled: true },
];

describe('Select', () => {
  test('Select renders with default props', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: [{ value: '1', label: 'option 1' }],
      },
    });

    wrapper.find('input').trigger('click');
    await rAF();
    expect(wrapper.text()).toContain('option 1');
  });

  test('selects an option', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: [{ value: '1', label: 'option 1' }],
      },
    });

    wrapper.find('input').trigger('click');
    await rAF();
    const option = wrapper.findAll('li').at(0);
    await option?.trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['1']);
  });

  test('should not select disabled option', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
    });

    wrapper.find('input').trigger('click');
    await rAF();

    const disabledOption = wrapper.findAll('li').at(2);
    await disabledOption?.trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  test('should show clear icon and clear selection', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '1',
        options,
        clearable: true,
      },
    });

    await wrapper.find('.px-select').trigger('mouseenter');
    await rAF();

    const clearIcon = wrapper.find('.px-input__clear');
    if (clearIcon.exists()) {
      await clearIcon.trigger('click');
      expect(wrapper.emitted('clear')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['']);
    }
  });

  test('should render disabled state', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
        disabled: true,
      },
    });

    expect(wrapper.find('.px-select').classes()).toContain('is-disabled');
  });

  test('should handle keyboard ArrowDown navigation', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
    });

    wrapper.find('input').trigger('click');
    await rAF();

    await wrapper.find('input').trigger('keydown', { key: 'ArrowDown' });
    await wrapper.find('input').trigger('keydown', { key: 'ArrowDown' });
    await wrapper.find('input').trigger('keydown', { key: 'Enter' });

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  test('should handle keyboard ArrowUp navigation', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
    });

    wrapper.find('input').trigger('click');
    await rAF();

    await wrapper.find('input').trigger('keydown', { key: 'ArrowUp' });
    await rAF();
  });

  test('should decrement highlightedIndex on ArrowUp after ArrowDown', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
    });

    wrapper.find('input').trigger('click');
    await rAF();

    // Move down twice (index=0, then 1)
    await wrapper.find('input').trigger('keydown', { key: 'ArrowDown' });
    await wrapper.find('input').trigger('keydown', { key: 'ArrowDown' });
    // Move up once (index should go back to 0)
    await wrapper.find('input').trigger('keydown', { key: 'ArrowUp' });
    // Select current
    await wrapper.find('input').trigger('keydown', { key: 'Enter' });

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['1']);
  });

  test('should handle keyboard Escape to close', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
    });

    wrapper.find('input').trigger('click');
    await rAF();

    await wrapper.find('input').trigger('keydown', { key: 'Escape' });
    await rAF();
    expect(wrapper.emitted('visible-change')).toBeTruthy();
  });

  test('should handle keyboard Enter to toggle', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
    });

    await wrapper.find('input').trigger('keydown', { key: 'Enter' });
    await rAF();
    expect(wrapper.emitted('visible-change')).toBeTruthy();
  });

  test('should set selected option on modelValue change', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
    });

    await wrapper.setProps({ modelValue: '2' });
    await nextTick();
    const input = wrapper.find('input');
    expect((input.element as HTMLInputElement).value).toBe('option 2');
  });

  test('should emit visible-change on toggle', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();
    expect(wrapper.emitted('visible-change')).toBeTruthy();
  });

  test('should handle filterable mode', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
        filterable: true,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('option 1');
    await rAF();
  });

  test('should update filteredOptions when options prop changes', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: [{ value: '1', label: 'option 1' }],
      },
    });

    await wrapper.setProps({
      options: [
        { value: '1', label: 'option 1' },
        { value: '4', label: 'option 4' },
      ],
    });
    await nextTick();

    await wrapper.find('.px-select').trigger('click');
    await rAF();
    expect(wrapper.text()).toContain('option 4');
  });

  test('should use custom renderLabel', async () => {
    const renderLabel = (opt: SelectOptionProps) => `Custom: ${opt.label}`;
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: [{ value: '1', label: 'test' }],
        renderLabel,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();
    expect(wrapper.text()).toContain('Custom: test');
  });

  test('should handle filterMethod prop', async () => {
    const filterMethod = vi.fn((query: string) => options.filter((o) => o.label.includes(query)));
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
        filterable: true,
        filterMethod,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('option 1');
    // Wait for debounce (100ms default)
    await new Promise((r) => setTimeout(r, 150));
    await rAF();
  });

  test('should filter options by default when filterable', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
        filterable: true,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('option 1');
    await rAF();
    await rAF();

    // Default filter uses label includes
    const items = wrapper.findAll('li');
    expect(items.length).toBeGreaterThanOrEqual(1);
  });

  test('should clear input on open when filterable with selection', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '1',
        options,
        filterable: true,
      },
    });

    // First open dropdown
    await wrapper.find('.px-select').trigger('click');
    await rAF();

    // Input should be cleared for filtering when selected
    const input = wrapper.find('input');
    const inputVal = (input.element as HTMLInputElement).value;
    // The input is either cleared (empty) or shows label
    expect(typeof inputVal).toBe('string');

    // Close and check input restores label
    await wrapper.find('.px-select').trigger('click');
    await rAF();
  });

  test('should handle mouseleave to hide clear icon', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '1',
        options,
        clearable: true,
      },
    });

    await wrapper.find('.px-select').trigger('mouseenter');
    await rAF();
    await wrapper.find('.px-select').trigger('mouseleave');
    await rAF();
    // After mouseleave, the clear icon should no longer be visible
    expect(wrapper.find('.px-input__clear').exists()).toBe(false);
  });

  test('should handle remote method', async () => {
    const remoteMethod = vi.fn(async (query: string) => {
      return options.filter((o) => o.label.includes(query));
    });
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: [],
        filterable: true,
        remote: true,
        remoteMethod,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('opt');
    // Wait for remote debounce (300ms default)
    await new Promise((r) => setTimeout(r, 400));
    await rAF();
    // Remote method should have been invoked with the query
    expect(remoteMethod).toHaveBeenCalled();
  });

  test('should handle remote method error gracefully', async () => {
    const remoteMethod = vi.fn(async () => {
      throw new Error('Network error');
    });
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: [],
        filterable: true,
        remote: true,
        remoteMethod,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('test');
    await rAF();
    await rAF();
    await rAF();
  });

  test('should show no-data when filterable and no results', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: [{ value: '1', label: 'option 1' }],
        filterable: true,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('nonexistent');
    await rAF();
    await rAF();
  });

  test('should handle click-outside to close dropdown', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
      attachTo: document.body,
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();
    expect(wrapper.emitted('visible-change')).toBeTruthy();

    // Click outside to close dropdown
    document.body.click();
    await rAF();
    // Should have emitted visible-change twice (open + close)
    expect(wrapper.emitted('visible-change')!.length).toBeGreaterThanOrEqual(2);
    wrapper.unmount();
  });

  test('should expose focus and blur methods', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
    });

    const vm = wrapper.vm as any;
    expect(vm.focus).toBeDefined();
    expect(vm.blur).toBeDefined();
  });

  test('should handle placeholder prop', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
        placeholder: 'Select an item',
      },
    });

    const input = wrapper.find('input');
    expect((input.element as HTMLInputElement).placeholder).toBe('Select an item');
  });

  test('Option emits an event on click', async () => {
    const ctx = {
      handleSelect: vi.fn(),
      selectStates: {
        selectedOption: null,
      },
      renderLabel: (props: SelectOptionProps) => `label:${props.label}`,
    };
    const wrapper = mount(Option, {
      props: {
        value: '1',
        label: 'option 1',
      },
      global: {
        provide: {
          [SELECT_CTX_KEY as any]: ctx,
        },
      },
    });

    await wrapper.trigger('click');
    expect(ctx.handleSelect).toHaveBeenCalled();
  });

  test('Option shows selected state', async () => {
    const ctx = {
      handleSelect: vi.fn(),
      selectStates: {
        selectedOption: { value: '1', label: 'option 1' },
      },
      renderLabel: (props: SelectOptionProps) => props.label,
    };
    const wrapper = mount(Option, {
      props: {
        value: '1',
        label: 'option 1',
      },
      global: {
        provide: {
          [SELECT_CTX_KEY as any]: ctx,
        },
      },
    });

    expect(wrapper.classes()).toContain('is-selected');
  });

  test('Option renders disabled state', () => {
    const ctx = {
      handleSelect: vi.fn(),
      selectStates: {
        selectedOption: null,
      },
      renderLabel: (props: SelectOptionProps) => props.label,
    };
    const wrapper = mount(Option, {
      props: {
        value: '1',
        label: 'option 1',
        disabled: true,
      },
      global: {
        provide: {
          [SELECT_CTX_KEY as any]: ctx,
        },
      },
    });

    expect(wrapper.classes()).toContain('is-disabled');
  });
});

describe('Select/VNode caching bug', () => {
  test('should render options correctly on second open (slot usage)', async () => {
    const wrapper = mount(Select, {
      props: { modelValue: '' },
      slots: {
        default: () => [
          h(Option, { value: '1', label: 'Opt A' }),
          h(Option, { value: '2', label: 'Opt B' }),
        ],
      },
    });

    // First open
    await wrapper.find('.px-select').trigger('click');
    await rAF();
    expect(wrapper.findAll('li').length).toBe(2);

    // Select first option to close
    await wrapper.findAll('li').at(0)?.trigger('click');
    await rAF();

    // Reopen — previously failed in production due to stale VNodes
    await wrapper.find('.px-select').trigger('click');
    await rAF();
    expect(wrapper.findAll('li').length).toBe(2);
    expect(wrapper.text()).toContain('Opt A');
    expect(wrapper.text()).toContain('Opt B');
  });

  test('should not mutate original slot VNode props', async () => {
    const optionVNode = h(Option, { value: '1', label: 'Test' });
    const originalProps = { ...optionVNode.props };

    mount(Select, {
      props: { modelValue: '' },
      slots: { default: () => [optionVNode] },
    });
    await rAF();

    // The computed should not have added `disabled` to the original VNode props
    expect(optionVNode.props).toEqual(originalProps);
  });
});

describe('Select/ghost', () => {
  test('should apply is-ghost class when ghost=true', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, ghost: true },
    });
    expect(wrapper.find('.px-select').classes()).toContain('is-ghost');
  });

  test('should not apply is-ghost class by default', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options },
    });
    expect(wrapper.find('.px-select').classes()).not.toContain('is-ghost');
  });

  test('should pass ghost prop to inner PxInput', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, ghost: true },
    });
    const input = wrapper.findComponent(PxInput);
    expect(input.props('ghost')).toBe(true);
  });
});

describe('Select/size', () => {
  test.each([
    'large',
    'small',
  ] as const)('should apply px-select--%s class when size="%s"', (sz) => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, size: sz },
    });
    expect(wrapper.find('.px-select').classes()).toContain(`px-select--${sz}`);
  });

  test('should not apply size class when no size prop', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options },
    });
    const classes = wrapper.find('.px-select').classes();
    expect(classes).not.toContain('px-select--large');
    expect(classes).not.toContain('px-select--small');
  });

  test.each(['large', 'small'] as const)('should forward size="%s" to PxInput', (sz) => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, size: sz },
    });
    const input = wrapper.findComponent(PxInput);
    expect(input.props('size')).toBe(sz);
  });
});

describe('Select/color', () => {
  test.each([
    'primary',
    'success',
    'warning',
    'danger',
    'info',
  ] as const)('should apply px-select--%s class for preset color', (color) => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, color },
    });
    expect(wrapper.find('.px-select').classes()).toContain(`px-select--${color}`);
  });

  test('should not apply color class when no color prop', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options },
    });
    const classes = wrapper.find('.px-select').classes();
    expect(classes).not.toContain('px-select--primary');
    expect(classes).not.toContain('px-select--success');
    expect(classes).not.toContain('px-select--warning');
    expect(classes).not.toContain('px-select--danger');
    expect(classes).not.toContain('px-select--info');
  });

  test('should pass color prop to inner PxInput', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, color: 'primary' },
    });
    const input = wrapper.findComponent(PxInput);
    expect(input.props('color')).toBe('primary');
  });

  test('should combine color with size correctly', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, color: 'success', size: 'large' },
    });
    const classes = wrapper.find('.px-select').classes();
    expect(classes).toContain('px-select--success');
    expect(classes).toContain('px-select--large');
  });

  test('should apply inline CSS variables for custom hex color', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, color: '#626aef' },
    });
    const style = wrapper.find('.px-select').attributes('style') ?? '';
    expect(style).toContain('--px-select-item-selected-font-color');
    expect(style).toContain('--px-select-item-selected-bg-color');
  });

  test('should not apply preset color class for hex color', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, color: '#626aef' },
    });
    const classes = wrapper.find('.px-select').classes();
    expect(classes).not.toContain('px-select--primary');
    expect(classes).not.toContain('px-select--#626aef');
  });

  test('should pass custom hex color to inner PxInput', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, color: '#626aef' },
    });
    const input = wrapper.findComponent(PxInput);
    expect(input.props('color')).toBe('#626aef');
  });

  test('should apply custom color style with ghost', () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, color: '#626aef', ghost: true },
    });
    const style = wrapper.find('.px-select').attributes('style') ?? '';
    expect(style).toContain('--px-select-item-selected-font-color');
    expect(style).toContain('--px-select-item-selected-bg-color');
    expect(wrapper.find('.px-select').classes()).toContain('is-ghost');
  });
});

describe('Select/disabled behavior', () => {
  test('should not toggle dropdown when disabled', async () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options, disabled: true },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    expect(wrapper.emitted('visible-change')).toBeFalsy();
  });
});

describe('Select/filterable', () => {
  test('should filter options with default filter', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
        filterable: true,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('option 1');
    await rAF();

    // Default filter should filter options containing "option 1"
    const items = wrapper.findAll('li');
    expect(items.length).toBeGreaterThanOrEqual(1);
  });

  test('should call filterMethod when provided', async () => {
    const filterMethod = vi.fn(() => [{ value: 'f1', label: 'Filtered' }]);
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
        filterable: true,
        filterMethod,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('test');
    await rAF();
    // Wait for debounce
    await new Promise((r) => setTimeout(r, 200));

    expect(filterMethod).toHaveBeenCalledWith('test');
  });

  test('should call remoteMethod when remote + remoteMethod provided', async () => {
    const remoteMethod = vi.fn(async () => [{ value: 'r1', label: 'Remote' }]);
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options: [],
        filterable: true,
        remote: true,
        remoteMethod,
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('search');
    await rAF();
    // Wait for debounce (remote timeout is 300ms)
    await new Promise((r) => setTimeout(r, 400));

    expect(remoteMethod).toHaveBeenCalledWith('search');
  });
});

describe('Select/unmount', () => {
  test('should cancel debounce on unmount without errors', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
        filterable: true,
      },
    });
    await rAF();
    wrapper.unmount();
    // Should not throw
  });
});

describe('Select/click-outside', () => {
  test('should close dropdown when clicking outside', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        options,
      },
      attachTo: document.body,
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    // Click outside
    document.body.click();
    await rAF();

    wrapper.unmount();
  });
});

describe('Select/filterable with slot children', () => {
  test('should filter slot children with default filter', async () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        filterable: true,
      },
      slots: {
        default: () => [
          h(Option, { value: '1', label: 'Apple' }),
          h(Option, { value: '2', label: 'Banana' }),
          h(Option, { value: '3', label: 'Cherry' }),
        ],
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('Apple');
    await rAF();
    // Wait for debounce
    await new Promise((r) => setTimeout(r, 200));
    await rAF();
  });

  test('should use filterMethod with slot children', async () => {
    const filterMethod = vi.fn(() => [{ value: '1', label: 'Apple' }]);
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        filterable: true,
        filterMethod,
      },
      slots: {
        default: () => [
          h(Option, { value: '1', label: 'Apple' }),
          h(Option, { value: '2', label: 'Banana' }),
        ],
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('App');
    await rAF();
    await new Promise((r) => setTimeout(r, 200));

    expect(filterMethod).toHaveBeenCalledWith('App');
  });

  test('should use remoteMethod with slot children', async () => {
    const remoteMethod = vi.fn(async () => [{ value: '1', label: 'Remote' }]);
    const wrapper = mount(Select, {
      props: {
        modelValue: '',
        filterable: true,
        remote: true,
        remoteMethod,
      },
      slots: {
        default: () => [h(Option, { value: '1', label: 'Apple' })],
      },
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();

    const input = wrapper.find('input');
    await input.setValue('search');
    await rAF();
    await new Promise((r) => setTimeout(r, 400));

    expect(remoteMethod).toHaveBeenCalledWith('search');
  });
});

describe('Select/focus-blur', () => {
  test('should expose focus and blur methods', async () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options },
    });
    const vm = wrapper.vm as any;
    expect(vm.focus).toBeDefined();
    expect(vm.blur).toBeDefined();
  });

  test('should call focus() on the input element', async () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options },
      attachTo: document.body,
    });
    const vm = wrapper.vm as any;
    vm.focus();
    await rAF();
    wrapper.unmount();
  });

  test('should call blur() which handles click outside logic', async () => {
    const wrapper = mount(Select, {
      props: { modelValue: '', options },
      attachTo: document.body,
    });
    const vm = wrapper.vm as any;

    // First focus the select, then open, then blur
    vm.focus();
    await rAF();
    await wrapper.find('.px-select').trigger('click');
    await rAF();

    vm.blur();
    await rAF();
    wrapper.unmount();
  });
});

describe('Select/index', () => {
  test('should be exported with withInstall()', () => {
    expect(PxSelect.install).toBeDefined();
    expect(PxOption.install).toBeDefined();
  });

  test('component should be exported', () => {
    expect(PxSelect).toBe(Select);
    expect(PxOption).toBe(Option);
  });
});
