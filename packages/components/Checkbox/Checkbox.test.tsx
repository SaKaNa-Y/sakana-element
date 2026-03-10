import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import Checkbox from './Checkbox.vue';
import CheckboxGroup from './CheckboxGroup.vue';
import { PxCheckbox, PxCheckboxGroup } from './index';
import type { CheckboxType } from './types';

describe('Checkbox.vue', () => {
  it('should render correctly', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
    });
    expect(wrapper.find('.px-checkbox').exists()).toBe(true);
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it('should handle click event and toggle the checked state', async () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);
    expect(wrapper.emitted().change[0]).toEqual([true]);
  });

  it('should emit false when unchecking', async () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: true },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([false]);
    expect(wrapper.emitted().change[0]).toEqual([false]);
  });

  it('should not toggle when disabled', async () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false, disabled: true },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue');
    expect(wrapper.emitted()).not.toHaveProperty('change');
  });

  it('should show is-disabled class when disabled', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false, disabled: true },
    });
    expect(wrapper.classes()).toContain('is-disabled');
  });

  it('should show checked class when active', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: true },
    });
    expect(wrapper.classes()).toContain('is-checked');
  });

  it('should not show checked class when inactive', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
    });
    expect(wrapper.classes()).not.toContain('is-checked');
  });

  // Indeterminate
  it('should show is-indeterminate class when indeterminate', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false, indeterminate: true },
    });
    expect(wrapper.classes()).toContain('is-indeterminate');
  });

  it('should set native input indeterminate property', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false, indeterminate: true },
    });
    const input = wrapper.find('input').element as HTMLInputElement;
    expect(input.indeterminate).toBe(true);
  });

  // Size variants
  it.each([['large'], ['small']] as [
    'large' | 'small',
  ][])('should apply correct class for size %s', (size) => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false, size },
    });
    expect(wrapper.classes()).toContain(`px-checkbox--${size}`);
  });

  // Type variants
  it.each([['primary'], ['success'], ['warning'], ['danger'], ['info']] as [
    CheckboxType,
  ][])('should apply correct class for type %s', (type) => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false, type },
    });
    expect(wrapper.classes()).toContain(`px-checkbox--${type}`);
  });

  it('should not apply type class by default', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
    });
    const classes = wrapper.classes();
    expect(classes).not.toContain('px-checkbox--primary');
    expect(classes).not.toContain('px-checkbox--success');
    expect(classes).not.toContain('px-checkbox--warning');
    expect(classes).not.toContain('px-checkbox--danger');
    expect(classes).not.toContain('px-checkbox--info');
  });

  // Custom hex color
  it('should apply custom color style variables when color prop is set', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false, color: '#ff6600' },
    });
    const style = wrapper.attributes('style') || '';
    expect(style).toContain('--px-checkbox-checked-color');
  });

  it('should not apply custom CSS variables when no color prop', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
    });
    const style = wrapper.attributes('style') || '';
    expect(style).not.toContain('--px-checkbox-checked-color');
  });

  // Label
  it('should render label text', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false, label: 'Accept Terms' },
    });
    expect(wrapper.find('.px-checkbox__label').text()).toBe('Accept Terms');
  });

  it('should render default slot content', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
      slots: { default: 'Slot Label' },
    });
    expect(wrapper.find('.px-checkbox__label').text()).toBe('Slot Label');
  });

  it('should not render label element when no label or slot', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
    });
    expect(wrapper.find('.px-checkbox__label').exists()).toBe(false);
  });

  // Expose
  it('should expose focus and checked', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: true },
    });
    const vm = wrapper.vm as any;
    expect(vm.focus).toBeDefined();
    expect(vm.checked).toBe(true);
  });

  it('should call focus() on the input element', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
      attachTo: document.body,
    });
    const input = wrapper.find('input').element;
    const focusSpy = vi.spyOn(input, 'focus');
    const vm = wrapper.vm as any;
    vm.focus();
    expect(focusSpy).toHaveBeenCalled();
    wrapper.unmount();
  });

  // Keyboard / click
  it('should toggle on click', async () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
  });

  // Aria
  it('should have aria-checked attribute', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: true },
    });
    const input = wrapper.find('input');
    expect(input.attributes('aria-checked')).toBe('true');
  });

  it('should have aria-checked false when unchecked', () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false },
    });
    const input = wrapper.find('input');
    expect(input.attributes('aria-checked')).toBe('false');
  });

  it('should update indeterminate prop dynamically via watch', async () => {
    const wrapper = mount(Checkbox, {
      props: { modelValue: false, indeterminate: false },
    });
    const input = wrapper.find('input').element as HTMLInputElement;
    expect(input.indeterminate).toBe(false);

    await wrapper.setProps({ indeterminate: true });
    expect(input.indeterminate).toBe(true);

    await wrapper.setProps({ indeterminate: false });
    expect(input.indeterminate).toBe(false);
  });
});

describe('CheckboxGroup.vue', () => {
  it('should render group and check matching children', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { modelValue: ['a'] },
      slots: {
        default: () => [<Checkbox value="a" label="A" />, <Checkbox value="b" label="B" />],
      },
    });
    const checkboxes = wrapper.findAll('.px-checkbox');
    expect(checkboxes).toHaveLength(2);
    expect(checkboxes[0].classes()).toContain('is-checked');
    expect(checkboxes[1].classes()).not.toContain('is-checked');
  });

  it('should toggle child value in group modelValue', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: { modelValue: ['a'] },
      slots: {
        default: () => [<Checkbox value="a" label="A" />, <Checkbox value="b" label="B" />],
      },
    });
    const checkboxes = wrapper.findAll('.px-checkbox');

    // Click unchecked "b"
    await checkboxes[1].trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([['a', 'b']]);

    // Click checked "a"
    await checkboxes[0].trigger('click');
    expect(wrapper.emitted()['update:modelValue'][1]).toEqual([[]]);
  });

  it('should disable all children when group is disabled', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { modelValue: [], disabled: true },
      slots: {
        default: () => [<Checkbox value="a" label="A" />, <Checkbox value="b" label="B" />],
      },
    });
    const checkboxes = wrapper.findAll('.px-checkbox');
    expect(checkboxes[0].classes()).toContain('is-disabled');
    expect(checkboxes[1].classes()).toContain('is-disabled');
  });

  it('should not allow unchecking when min is reached', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: { modelValue: ['a'], min: 1 },
      slots: {
        default: () => [<Checkbox value="a" label="A" />, <Checkbox value="b" label="B" />],
      },
    });
    const checkboxes = wrapper.findAll('.px-checkbox');

    // Try to uncheck the only checked item
    await checkboxes[0].trigger('click');
    expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  });

  it('should not allow checking when max is reached', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: { modelValue: ['a', 'b'], max: 2 },
      slots: {
        default: () => [
          <Checkbox value="a" label="A" />,
          <Checkbox value="b" label="B" />,
          <Checkbox value="c" label="C" />,
        ],
      },
    });
    const checkboxes = wrapper.findAll('.px-checkbox');

    // Try to check a third item
    await checkboxes[2].trigger('click');
    expect(wrapper.emitted()['update:modelValue']).toBeUndefined();
  });

  it('should inherit type from group', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { modelValue: [], type: 'primary' },
      slots: {
        default: () => [<Checkbox value="a" label="A" />],
      },
    });
    const checkbox = wrapper.find('.px-checkbox');
    expect(checkbox.classes()).toContain('px-checkbox--primary');
  });

  it('should inherit size from group', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { modelValue: [], size: 'large' },
      slots: {
        default: () => [<Checkbox value="a" label="A" />],
      },
    });
    const checkbox = wrapper.find('.px-checkbox');
    expect(checkbox.classes()).toContain('px-checkbox--large');
  });

  it('should inherit color from group', () => {
    const wrapper = mount(CheckboxGroup, {
      props: { modelValue: [], color: '#ff6600' },
      slots: {
        default: () => [<Checkbox value="a" label="A" />],
      },
    });
    const checkbox = wrapper.find('.px-checkbox');
    const style = checkbox.attributes('style') || '';
    expect(style).toContain('--px-checkbox-checked-color');
  });
});

describe('Checkbox/index', () => {
  it('PxCheckbox should be exported with withInstall()', () => {
    expect(PxCheckbox.install).toBeDefined();
  });

  it('PxCheckbox component should be exported', () => {
    expect(PxCheckbox).toBe(Checkbox);
  });

  it('PxCheckboxGroup should be exported with withInstall()', () => {
    expect(PxCheckboxGroup.install).toBeDefined();
  });

  it('PxCheckboxGroup component should be exported', () => {
    expect(PxCheckboxGroup).toBe(CheckboxGroup);
  });
});
