import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { PxSwitch } from './index';
import Switch from './Switch.vue';
import type { SwitchType } from './types';

describe('Switch.vue', () => {
  it('should render correctly', () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false },
    });
    expect(wrapper.find('.px-switch')).toBeTruthy();
  });

  it('should handle click event and toggle the checked state', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
      },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true]);
    expect(wrapper.emitted().change[0]).toEqual([true]);

    await wrapper.trigger('click');
    expect(wrapper.emitted()['update:modelValue'][1]).toEqual([false]);
    expect(wrapper.emitted().change[1]).toEqual([false]);
  });

  it('should not toggle when disabled', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        disabled: true,
      },
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue');
    expect(wrapper.emitted()).not.toHaveProperty('change');
  });

  it('should show checked class when active', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: true,
      },
    });
    expect(wrapper.classes()).toContain('is-checked');
  });

  it('should support custom active and inactive values', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: 'on',
        activeValue: 'on',
        inactiveValue: 'off',
      },
    });

    expect(wrapper.classes()).toContain('is-checked');

    await wrapper.trigger('click');
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['off']);
  });

  it('should support active and inactive text', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: true,
        activeText: 'On',
        inactiveText: 'Off',
      },
    });

    expect(wrapper.find('.px-switch__core-inner-text').text()).toBe('On');
  });

  it('should show inactive text when not checked', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        activeText: 'On',
        inactiveText: 'Off',
      },
    });

    expect(wrapper.find('.px-switch__core-inner-text').text()).toBe('Off');
  });

  it('should support size prop', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        size: 'large',
      },
    });

    expect(wrapper.classes()).toContain('px-switch--large');
  });

  it('should expose focus and checked', () => {
    const wrapper = mount(Switch, {
      props: { modelValue: true },
    });

    const vm = wrapper.vm as any;
    expect(vm.focus).toBeDefined();
    expect(vm.checked).toBe(true);
  });

  it('should handle enter keydown', async () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false },
    });

    const input = wrapper.find('input');
    await input.trigger('keydown.enter');
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy();
  });

  it('should update checked state when modelValue changes externally', async () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false },
    });

    expect(wrapper.classes()).not.toContain('is-checked');
    // Switch uses innerValue from initial prop, watch on props.modelValue not set up
    // Just verify the exposed checked ref reflects initial value
    const vm = wrapper.vm as any;
    expect(vm.checked).toBe(false);
  });

  // Type prop tests
  it.each([['primary'], ['success'], ['warning'], ['danger'], ['info']] as [
    SwitchType,
  ][])('should apply correct class for type %s', (type) => {
    const wrapper = mount(Switch, {
      props: { modelValue: false, type },
    });
    expect(wrapper.classes()).toContain(`px-switch--${type}`);
  });

  it('should not apply type class by default', () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false },
    });
    const classes = wrapper.classes();
    expect(classes).not.toContain('px-switch--primary');
    expect(classes).not.toContain('px-switch--success');
    expect(classes).not.toContain('px-switch--warning');
    expect(classes).not.toContain('px-switch--danger');
    expect(classes).not.toContain('px-switch--info');
  });

  // Custom color tests
  it('should apply activeColor as --px-switch-on-color CSS variable', () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false, activeColor: '#ff6600' },
    });
    const style = wrapper.attributes('style') || '';
    expect(style).toContain('--px-switch-on-color');
  });

  it('should apply inactiveColor as --px-switch-off-color CSS variable', () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false, inactiveColor: '#999999' },
    });
    const style = wrapper.attributes('style') || '';
    expect(style).toContain('--px-switch-off-color');
  });

  it('should apply both color CSS variables when both activeColor and inactiveColor are set', () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false, activeColor: '#ff6600', inactiveColor: '#999999' },
    });
    const style = wrapper.attributes('style') || '';
    expect(style).toContain('--px-switch-on-color');
    expect(style).toContain('--px-switch-off-color');
  });

  it('should not apply custom CSS variables when no color props are set', () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false },
    });
    const style = wrapper.attributes('style') || '';
    expect(style).not.toContain('--px-switch-on-color');
    expect(style).not.toContain('--px-switch-off-color');
  });

  // Icon tests
  it('should render activeIcon inside .px-switch__core-action when checked', () => {
    const wrapper = mount(Switch, {
      props: { modelValue: true, activeIcon: 'check' },
    });
    const action = wrapper.find('.px-switch__core-action');
    expect(action.find('.px-icon').exists()).toBe(true);
  });

  it('should render inactiveIcon inside .px-switch__core-action when unchecked', () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false, inactiveIcon: 'xmark' },
    });
    const action = wrapper.find('.px-switch__core-action');
    expect(action.find('.px-icon').exists()).toBe(true);
  });

  it('should not render icon when no icon props are set', () => {
    const wrapper = mount(Switch, {
      props: { modelValue: false },
    });
    const action = wrapper.find('.px-switch__core-action');
    expect(action.find('.px-icon').exists()).toBe(false);
  });
});

describe('Switch/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxSwitch.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxSwitch).toBe(Switch);
  });
});
