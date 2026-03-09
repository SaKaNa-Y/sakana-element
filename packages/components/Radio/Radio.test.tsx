import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { PxRadio, PxRadioGroup } from './index';
import Radio from './Radio.vue';
import RadioGroup from './RadioGroup.vue';
import type { RadioType } from './types';

describe('Radio.vue', () => {
  it('should render correctly', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
    });
    expect(wrapper.find('.px-radio').exists()).toBe(true);
    expect(wrapper.find('input[type="radio"]').exists()).toBe(true);
  });

  it('should emit value on click', async () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'b' },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['b']);
    expect(wrapper.emitted().change[0]).toEqual(['b']);
  });

  it('should not re-emit when already selected', async () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue');
    expect(wrapper.emitted()).not.toHaveProperty('change');
  });

  it('should not emit when disabled', async () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'b', disabled: true },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue');
    expect(wrapper.emitted()).not.toHaveProperty('change');
  });

  it('should show is-disabled class when disabled', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a', disabled: true },
    });
    expect(wrapper.classes()).toContain('is-disabled');
  });

  it('should show is-checked class when modelValue === value', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
    });
    expect(wrapper.classes()).toContain('is-checked');
  });

  it('should not show is-checked class when modelValue !== value', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'b' },
    });
    expect(wrapper.classes()).not.toContain('is-checked');
  });

  // Size variants
  it.each([['large'], ['small']] as [
    'large' | 'small',
  ][])('should apply correct class for size %s', (size) => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a', size },
    });
    expect(wrapper.classes()).toContain(`px-radio--${size}`);
  });

  // Type variants
  it.each([['primary'], ['success'], ['warning'], ['danger'], ['info']] as [
    RadioType,
  ][])('should apply correct class for type %s', (type) => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a', type },
    });
    expect(wrapper.classes()).toContain(`px-radio--${type}`);
  });

  it('should not apply type class by default', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
    });
    const classes = wrapper.classes();
    expect(classes).not.toContain('px-radio--primary');
    expect(classes).not.toContain('px-radio--success');
    expect(classes).not.toContain('px-radio--warning');
    expect(classes).not.toContain('px-radio--danger');
    expect(classes).not.toContain('px-radio--info');
  });

  // Custom hex color
  it('should apply custom color style variables when color prop is set', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a', color: '#ff6600' },
    });
    const style = wrapper.attributes('style') || '';
    expect(style).toContain('--px-radio-checked-color');
  });

  it('should not apply custom CSS variables when no color prop', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
    });
    const style = wrapper.attributes('style') || '';
    expect(style).not.toContain('--px-radio-checked-color');
  });

  // Label
  it('should render label text', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a', label: 'Option A' },
    });
    expect(wrapper.find('.px-radio__label').text()).toBe('Option A');
  });

  it('should render default slot content', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
      slots: { default: 'Slot Label' },
    });
    expect(wrapper.find('.px-radio__label').text()).toBe('Slot Label');
  });

  it('should not render label element when no label or slot', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
    });
    expect(wrapper.find('.px-radio__label').exists()).toBe(false);
  });

  // Expose
  it('should expose focus and checked', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
    });
    const vm = wrapper.vm as any;
    expect(vm.focus).toBeDefined();
    expect(vm.checked).toBe(true);
  });

  it('should call focus() on the input element', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
      attachTo: document.body,
    });
    const input = wrapper.find('input').element;
    const focusSpy = vi.spyOn(input, 'focus');
    const vm = wrapper.vm as any;
    vm.focus();
    expect(focusSpy).toHaveBeenCalled();
    wrapper.unmount();
  });

  // Aria
  it('should have aria-checked attribute', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'a' },
    });
    const input = wrapper.find('input');
    expect(input.attributes('aria-checked')).toBe('true');
  });

  it('should have aria-checked false when not selected', () => {
    const wrapper = mount(Radio, {
      props: { modelValue: 'a', value: 'b' },
    });
    const input = wrapper.find('input');
    expect(input.attributes('aria-checked')).toBe('false');
  });
});

describe('RadioGroup.vue', () => {
  it('should render group and check matching child', () => {
    const wrapper = mount(RadioGroup, {
      props: { modelValue: 'a' },
      slots: {
        default: () => [<Radio value="a" label="A" />, <Radio value="b" label="B" />],
      },
    });
    const radios = wrapper.findAll('.px-radio');
    expect(radios).toHaveLength(2);
    expect(radios[0].classes()).toContain('is-checked');
    expect(radios[1].classes()).not.toContain('is-checked');
  });

  it('should switch selection on click', async () => {
    const wrapper = mount(RadioGroup, {
      props: { modelValue: 'a' },
      slots: {
        default: () => [<Radio value="a" label="A" />, <Radio value="b" label="B" />],
      },
    });
    const radios = wrapper.findAll('.px-radio');

    // Click unchecked "b"
    await radios[1].trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['b']);
    expect(wrapper.emitted().change[0]).toEqual(['b']);
  });

  it('should not emit when clicking already selected radio in group', async () => {
    const wrapper = mount(RadioGroup, {
      props: { modelValue: 'a' },
      slots: {
        default: () => [<Radio value="a" label="A" />, <Radio value="b" label="B" />],
      },
    });
    const radios = wrapper.findAll('.px-radio');

    // Click already-selected "a"
    await radios[0].trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue');
  });

  it('should disable all children when group is disabled', () => {
    const wrapper = mount(RadioGroup, {
      props: { modelValue: 'a', disabled: true },
      slots: {
        default: () => [<Radio value="a" label="A" />, <Radio value="b" label="B" />],
      },
    });
    const radios = wrapper.findAll('.px-radio');
    expect(radios[0].classes()).toContain('is-disabled');
    expect(radios[1].classes()).toContain('is-disabled');
  });

  it('should inherit type from group', () => {
    const wrapper = mount(RadioGroup, {
      props: { modelValue: 'a', type: 'primary' },
      slots: {
        default: () => [<Radio value="a" label="A" />],
      },
    });
    const radio = wrapper.find('.px-radio');
    expect(radio.classes()).toContain('px-radio--primary');
  });

  it('should inherit size from group', () => {
    const wrapper = mount(RadioGroup, {
      props: { modelValue: 'a', size: 'large' },
      slots: {
        default: () => [<Radio value="a" label="A" />],
      },
    });
    const radio = wrapper.find('.px-radio');
    expect(radio.classes()).toContain('px-radio--large');
  });

  it('should inherit color from group', () => {
    const wrapper = mount(RadioGroup, {
      props: { modelValue: 'a', color: '#ff6600' },
      slots: {
        default: () => [<Radio value="a" label="A" />],
      },
    });
    const radio = wrapper.find('.px-radio');
    const style = radio.attributes('style') || '';
    expect(style).toContain('--px-radio-checked-color');
  });

  it('should have role="radiogroup"', () => {
    const wrapper = mount(RadioGroup, {
      props: { modelValue: 'a' },
      slots: {
        default: () => [<Radio value="a" label="A" />],
      },
    });
    expect(wrapper.attributes('role')).toBe('radiogroup');
  });
});

describe('Radio/index', () => {
  it('PxRadio should be exported with withInstall()', () => {
    expect(PxRadio.install).toBeDefined();
  });

  it('PxRadio component should be exported', () => {
    expect(PxRadio).toBe(Radio);
  });

  it('PxRadioGroup should be exported with withInstall()', () => {
    expect(PxRadioGroup.install).toBeDefined();
  });

  it('PxRadioGroup component should be exported', () => {
    expect(PxRadioGroup).toBe(RadioGroup);
  });
});
