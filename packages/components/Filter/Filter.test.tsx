import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Filter from './Filter.vue';
import FilterItem from './FilterItem.vue';
import { PxFilter, PxFilterItem } from './index';
import type { FilterType } from './types';

describe('Filter.vue with options prop', () => {
  const options = [
    { value: 'a', label: 'Alpha' },
    { value: 'b', label: 'Beta' },
    { value: 'c', label: 'Gamma' },
  ];

  it('should render correct number of items', () => {
    const wrapper = mount(Filter, {
      props: { options },
    });
    expect(wrapper.findAll('.px-filter-item')).toHaveLength(3);
  });

  it('should show is-active class on selected item', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: 'b', options },
    });
    const items = wrapper.findAll('.px-filter-item');
    expect(items[0].classes()).not.toContain('is-active');
    expect(items[1].classes()).toContain('is-active');
    expect(items[2].classes()).not.toContain('is-active');
  });

  it('should emit update:modelValue and change on click', async () => {
    const wrapper = mount(Filter, {
      props: { options },
    });
    const items = wrapper.findAll('.px-filter-item');

    await items[1].trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['b']);
    expect(wrapper.emitted().change[0]).toEqual(['b']);
  });

  it('should toggle off: clicking active item emits undefined', async () => {
    const wrapper = mount(Filter, {
      props: { modelValue: 'b', options },
    });
    const items = wrapper.findAll('.px-filter-item');

    // Click already-active "b"
    await items[1].trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([undefined]);
    expect(wrapper.emitted().change[0]).toEqual([undefined]);
  });

  it('should not emit when clicking disabled item', async () => {
    const disabledOptions = [
      { value: 'a', label: 'Alpha' },
      { value: 'b', label: 'Beta', disabled: true },
    ];
    const wrapper = mount(Filter, {
      props: { options: disabledOptions },
    });
    const items = wrapper.findAll('.px-filter-item');

    await items[1].trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue');
    expect(wrapper.emitted()).not.toHaveProperty('change');
  });

  it('should disable all items when group is disabled', () => {
    const wrapper = mount(Filter, {
      props: { options, disabled: true },
    });
    const items = wrapper.findAll('.px-filter-item');
    items.forEach((item) => {
      expect(item.classes()).toContain('is-disabled');
    });
  });

  it('should have role="radiogroup" on container', () => {
    const wrapper = mount(Filter, {
      props: { options },
    });
    expect(wrapper.attributes('role')).toBe('radiogroup');
  });

  // Size variants
  it.each([['large'], ['small']] as [
    'large' | 'small',
  ][])('should apply size class %s to items', (size) => {
    const wrapper = mount(Filter, {
      props: { options, size },
    });
    const item = wrapper.find('.px-filter-item');
    expect(item.classes()).toContain(`px-filter-item--${size}`);
  });

  // Type variants
  it.each([['primary'], ['success'], ['warning'], ['danger'], ['info']] as [
    FilterType,
  ][])('should apply type class %s to items', (type) => {
    const wrapper = mount(Filter, {
      props: { options, type },
    });
    const item = wrapper.find('.px-filter-item');
    expect(item.classes()).toContain(`px-filter-item--${type}`);
  });

  it('should not apply type class by default', () => {
    const wrapper = mount(Filter, {
      props: { options },
    });
    const item = wrapper.find('.px-filter-item');
    const classes = item.classes();
    expect(classes).not.toContain('px-filter-item--primary');
    expect(classes).not.toContain('px-filter-item--success');
    expect(classes).not.toContain('px-filter-item--warning');
    expect(classes).not.toContain('px-filter-item--danger');
    expect(classes).not.toContain('px-filter-item--info');
  });

  // Custom hex color
  it('should apply custom color style variables when color prop is set', () => {
    const wrapper = mount(Filter, {
      props: { options, color: '#ff6600' },
    });
    const item = wrapper.find('.px-filter-item');
    const style = item.attributes('style') || '';
    expect(style).toContain('--px-filter-item-active-color');
  });

  it('should not apply custom CSS variables when no color prop', () => {
    const wrapper = mount(Filter, {
      props: { options },
    });
    const item = wrapper.find('.px-filter-item');
    const style = item.attributes('style') || '';
    expect(style).not.toContain('--px-filter-item-active-color');
  });
});

describe('Filter.vue with slot children', () => {
  it('should render slot children correctly', () => {
    const wrapper = mount(Filter, {
      slots: {
        default: () => [<FilterItem value="x" label="X" />, <FilterItem value="y" label="Y" />],
      },
    });
    const items = wrapper.findAll('.px-filter-item');
    expect(items).toHaveLength(2);
  });

  it('should inherit context from parent', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: 'x', type: 'primary', size: 'large', disabled: true },
      slots: {
        default: () => [<FilterItem value="x" label="X" />],
      },
    });
    const item = wrapper.find('.px-filter-item');
    expect(item.classes()).toContain('is-active');
    expect(item.classes()).toContain('px-filter-item--primary');
    expect(item.classes()).toContain('px-filter-item--large');
    expect(item.classes()).toContain('is-disabled');
  });

  it('should toggle off via slot child click', async () => {
    const wrapper = mount(Filter, {
      props: { modelValue: 'x' },
      slots: {
        default: () => [<FilterItem value="x" label="X" />, <FilterItem value="y" label="Y" />],
      },
    });
    const items = wrapper.findAll('.px-filter-item');

    // Click active item → deselect
    await items[0].trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([undefined]);
  });

  it('should select via slot child click', async () => {
    const wrapper = mount(Filter, {
      slots: {
        default: () => [<FilterItem value="x" label="X" />, <FilterItem value="y" label="Y" />],
      },
    });
    const items = wrapper.findAll('.px-filter-item');

    await items[1].trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['y']);
  });
});

describe('Single-select collapse behavior', () => {
  const options = [
    { value: 'a', label: 'Alpha' },
    { value: 'b', label: 'Beta' },
    { value: 'c', label: 'Gamma' },
  ];

  it('should add is-hidden class on non-active items when value is set', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: 'b', options },
    });
    const items = wrapper.findAll('.px-filter-item');
    expect(items[0].classes()).toContain('is-hidden');
    expect(items[1].classes()).not.toContain('is-hidden');
    expect(items[2].classes()).toContain('is-hidden');
  });

  it('should not have is-hidden on any items when no selection', () => {
    const wrapper = mount(Filter, {
      props: { options },
    });
    const items = wrapper.findAll('.px-filter-item');
    items.forEach((item) => {
      expect(item.classes()).not.toContain('is-hidden');
    });
  });

  it('should add is-collapsed class on container when single-select has selection', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: 'a', options },
    });
    expect(wrapper.classes()).toContain('is-collapsed');
  });

  it('should not add is-collapsed when no selection', () => {
    const wrapper = mount(Filter, {
      props: { options },
    });
    expect(wrapper.classes()).not.toContain('is-collapsed');
  });

  it('should show reset button when there is a selection', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: 'a', options },
    });
    expect(wrapper.find('.px-filter__reset').exists()).toBe(true);
  });

  it('should not show reset button when no selection', () => {
    const wrapper = mount(Filter, {
      props: { options },
    });
    expect(wrapper.find('.px-filter__reset').exists()).toBe(false);
  });

  it('should emit undefined when reset button is clicked', async () => {
    const wrapper = mount(Filter, {
      props: { modelValue: 'a', options },
    });
    await wrapper.find('.px-filter__reset').trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([undefined]);
    expect(wrapper.emitted().change[0]).toEqual([undefined]);
  });

  it('should work with slot children for collapse', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: 'x' },
      slots: {
        default: () => [<FilterItem value="x" label="X" />, <FilterItem value="y" label="Y" />],
      },
    });
    const items = wrapper.findAll('.px-filter-item');
    expect(items[0].classes()).not.toContain('is-hidden');
    expect(items[1].classes()).toContain('is-hidden');
  });
});

describe('Multi-select mode (multiple: true)', () => {
  const options = [
    { value: 'a', label: 'Alpha' },
    { value: 'b', label: 'Beta' },
    { value: 'c', label: 'Gamma' },
  ];

  it('should have role="group" for multi-select', () => {
    const wrapper = mount(Filter, {
      props: { options, multiple: true },
    });
    expect(wrapper.attributes('role')).toBe('group');
  });

  it('should not collapse items when multiple items are selected', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: ['a', 'b'], options, multiple: true },
    });
    const items = wrapper.findAll('.px-filter-item');
    items.forEach((item) => {
      expect(item.classes()).not.toContain('is-hidden');
    });
  });

  it('should not add is-collapsed class in multi mode', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: ['a'], options, multiple: true },
    });
    expect(wrapper.classes()).not.toContain('is-collapsed');
  });

  it('should show multiple is-active items simultaneously', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: ['a', 'c'], options, multiple: true },
    });
    const items = wrapper.findAll('.px-filter-item');
    expect(items[0].classes()).toContain('is-active');
    expect(items[1].classes()).not.toContain('is-active');
    expect(items[2].classes()).toContain('is-active');
  });

  it('should add value to array when clicking inactive item', async () => {
    const wrapper = mount(Filter, {
      props: { modelValue: ['a'], options, multiple: true },
    });
    const items = wrapper.findAll('.px-filter-item');

    await items[1].trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([['a', 'b']]);
    expect(wrapper.emitted().change[0]).toEqual([['a', 'b']]);
  });

  it('should remove value from array when clicking active item', async () => {
    const wrapper = mount(Filter, {
      props: { modelValue: ['a', 'b'], options, multiple: true },
    });
    const items = wrapper.findAll('.px-filter-item');

    await items[0].trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([['b']]);
    expect(wrapper.emitted().change[0]).toEqual([['b']]);
  });

  it('should show reset button when array has items', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: ['a'], options, multiple: true },
    });
    expect(wrapper.find('.px-filter__reset').exists()).toBe(true);
  });

  it('should not show reset button when array is empty', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: [], options, multiple: true },
    });
    expect(wrapper.find('.px-filter__reset').exists()).toBe(false);
  });

  it('should emit empty array when reset button is clicked', async () => {
    const wrapper = mount(Filter, {
      props: { modelValue: ['a', 'b'], options, multiple: true },
    });
    await wrapper.find('.px-filter__reset').trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([[]]);
    expect(wrapper.emitted().change[0]).toEqual([[]]);
  });

  it('should handle selection when modelValue is undefined in multiple mode', async () => {
    const wrapper = mount(Filter, {
      props: { modelValue: undefined, options, multiple: true },
    });
    // Click first item — should treat undefined modelValue as []
    await wrapper.find('.px-filter-item').trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([['a']]);
    expect(wrapper.emitted().change[0]).toEqual([['a']]);
  });

  it('should use checkbox input type in multi mode', () => {
    const wrapper = mount(Filter, {
      props: { modelValue: [], options, multiple: true },
    });
    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('checkbox');
  });

  it('should use radio input type in single mode', () => {
    const wrapper = mount(Filter, {
      props: { options },
    });
    const input = wrapper.find('input');
    expect(input.attributes('type')).toBe('radio');
  });
});

describe('FilterItem standalone', () => {
  it('should render .px-filter-item element', () => {
    const wrapper = mount(FilterItem, {
      props: { value: 'a' },
    });
    expect(wrapper.find('.px-filter-item').exists()).toBe(true);
  });

  it('should render label from prop', () => {
    const wrapper = mount(FilterItem, {
      props: { value: 'a', label: 'Hello' },
    });
    expect(wrapper.find('.px-filter-item__label').text()).toBe('Hello');
  });

  it('should render label from default slot', () => {
    const wrapper = mount(FilterItem, {
      props: { value: 'a' },
      slots: { default: 'Slot Label' },
    });
    expect(wrapper.find('.px-filter-item__label').text()).toBe('Slot Label');
  });

  it('should have hidden radio input for accessibility', () => {
    const wrapper = mount(FilterItem, {
      props: { value: 'a' },
    });
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
  });
});

describe('Filter/index exports', () => {
  it('PxFilter should be exported with withInstall()', () => {
    expect(PxFilter.install).toBeDefined();
  });

  it('PxFilter component should be exported', () => {
    expect(PxFilter).toBe(Filter);
  });

  it('PxFilterItem should be exported with withInstall()', () => {
    expect(PxFilterItem.install).toBeDefined();
  });

  it('PxFilterItem component should be exported', () => {
    expect(PxFilterItem).toBe(FilterItem);
  });
});
