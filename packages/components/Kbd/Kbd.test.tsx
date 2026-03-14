import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Icon from '../Icon/Icon.vue';
import { KBD_KEY_MAP } from './constants';
import { PxKbd } from './index';
import Kbd from './Kbd.vue';

describe('Kbd.vue', () => {
  it('should render with default props', () => {
    const wrapper = mount(Kbd, {
      slots: { default: 'K' },
    });
    expect(wrapper.find('.px-kbd').exists()).toBe(true);
  });

  it('should render slot content inside a kbd element', () => {
    const wrapper = mount(Kbd, {
      slots: { default: 'Enter' },
    });
    const kbdEl = wrapper.find('kbd');
    expect(kbdEl.exists()).toBe(true);
    expect(kbdEl.text()).toBe('Enter');
  });

  // Size variants
  it.each([['large'], ['default'], ['small']])('should apply correct class for size %s', (size) => {
    const wrapper = mount(Kbd, {
      props: { size: size as any },
      slots: { default: 'K' },
    });
    if (size !== 'default') {
      expect(wrapper.find('.px-kbd').classes()).toContain(`px-kbd--${size}`);
    } else {
      expect(wrapper.find('.px-kbd').classes()).not.toContain('px-kbd--default');
    }
  });

  // Keys prop — text keys
  it('should render mapped symbol for text keys', () => {
    const wrapper = mount(Kbd, {
      props: { keys: ['command'] },
    });
    expect(wrapper.text()).toContain(KBD_KEY_MAP.command.label);
  });

  it('should render abbr element with title for text keys', () => {
    const wrapper = mount(Kbd, {
      props: { keys: ['shift'] },
    });
    const abbr = wrapper.find('abbr');
    expect(abbr.exists()).toBe(true);
    expect(abbr.attributes('title')).toBe('shift');
    expect(abbr.text()).toBe(KBD_KEY_MAP.shift.label);
  });

  // Keys prop — arrow keys with PxIcon
  it('should render PxIcon for arrow keys', () => {
    const wrapper = mount(Kbd, {
      props: { keys: ['up'] },
      global: { stubs: ['PxIcon'] },
    });
    const icon = wrapper.findComponent(Icon);
    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toBe('arrow-up');
  });

  it.each([
    ['up', 'arrow-up'],
    ['down', 'arrow-down'],
    ['left', 'arrow-left'],
    ['right', 'arrow-right'],
  ])('should render PxIcon with correct icon for arrow key %s', (key, expectedIcon) => {
    const wrapper = mount(Kbd, {
      props: { keys: [key as any] },
      global: { stubs: ['PxIcon'] },
    });
    const icon = wrapper.findComponent(Icon);
    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toBe(expectedIcon);
  });

  it('should not render abbr for arrow keys', () => {
    const wrapper = mount(Kbd, {
      props: { keys: ['up'] },
      global: { stubs: ['PxIcon'] },
    });
    expect(wrapper.find('abbr').exists()).toBe(false);
  });

  // Multiple keys
  it('should render multiple kbd elements for multiple keys', () => {
    const wrapper = mount(Kbd, {
      props: { keys: ['ctrl', 'shift'] },
    });
    const kbdElements = wrapper.findAll('kbd');
    expect(kbdElements.length).toBe(2);
  });

  // Keys + slot content
  it('should render keys and slot content together', () => {
    const wrapper = mount(Kbd, {
      props: { keys: ['command'] },
      slots: { default: 'K' },
    });
    const kbdElements = wrapper.findAll('kbd');
    expect(kbdElements.length).toBe(2);
    expect(wrapper.text()).toContain(KBD_KEY_MAP.command.label);
    expect(wrapper.text()).toContain('K');
  });

  // Mixed arrow + text keys
  it('should render both icon and text keys in a combination', () => {
    const wrapper = mount(Kbd, {
      props: { keys: ['ctrl', 'up'] },
      global: { stubs: ['PxIcon'] },
    });
    const kbdElements = wrapper.findAll('kbd');
    expect(kbdElements.length).toBe(2);
    expect(wrapper.find('abbr').exists()).toBe(true);
    expect(wrapper.findComponent(Icon).exists()).toBe(true);
  });

  // No keys and no slot
  it('should render empty when no keys and no slot', () => {
    const wrapper = mount(Kbd);
    expect(wrapper.find('.px-kbd').exists()).toBe(true);
    expect(wrapper.findAll('kbd').length).toBe(0);
  });

  // All text key symbols render correctly
  it.each([
    ['command', '\u2318'],
    ['shift', '\u21E7'],
    ['ctrl', 'Ctrl'],
    ['alt', '\u2325'],
    ['option', '\u2325'],
    ['enter', '\u21B5'],
    ['delete', '\u232B'],
    ['escape', 'Esc'],
    ['tab', 'Tab'],
    ['capslock', 'Caps'],
    ['space', 'Space'],
    ['win', '\u229E'],
    ['fn', 'Fn'],
    ['home', 'Home'],
    ['end', 'End'],
    ['pageup', 'PgUp'],
    ['pagedown', 'PgDn'],
  ])('should render correct symbol for key %s', (key, expectedLabel) => {
    const wrapper = mount(Kbd, {
      props: { keys: [key as any] },
    });
    expect(wrapper.text()).toContain(expectedLabel);
  });
});

describe('Kbd/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxKbd.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxKbd).toBe(Kbd);
  });

  it('should enhance Kbd component', () => {
    const enhancedKbd = withInstall(Kbd);
    expect(enhancedKbd).toBe(PxKbd);
  });

  it('should apply specific enhance', () => {
    const enhancedKbd = withInstall(Kbd);
    expect(enhancedKbd).toHaveProperty('install');
  });
});
