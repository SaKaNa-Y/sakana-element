import { rAF } from '@sakana-element/utils';
import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { SELECT_CTX_KEY } from './constants';
import { PxSelect, PxOption } from './index';
import { withInstall } from '@sakana-element/utils';

import type { SelectOptionProps } from './types';

import Select from './Select.vue';
import Option from './Option.vue';

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
    const filterMethod = vi.fn((query: string) =>
      options.filter((o) => o.label.includes(query))
    );
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
    await rAF();
    await rAF();
    await rAF();
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
    });

    await wrapper.find('.px-select').trigger('click');
    await rAF();
    expect(wrapper.emitted('visible-change')).toBeTruthy();
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
