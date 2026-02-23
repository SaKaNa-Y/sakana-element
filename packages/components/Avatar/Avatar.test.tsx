import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Avatar from './Avatar.vue';
import { PxAvatar } from './index';

describe('Avatar.vue', () => {
  it('should render with default props', () => {
    const wrapper = mount(Avatar, {
      slots: {
        default: 'AB',
      },
    });
    expect(wrapper.text()).toContain('AB');
    expect(wrapper.find('.px-avatar').exists()).toBe(true);
  });

  it('should render slot content (initials)', () => {
    const wrapper = mount(Avatar, {
      slots: {
        default: 'JD',
      },
    });
    expect(wrapper.text()).toBe('JD');
  });

  it('should render as empty avatar when no content', () => {
    const wrapper = mount(Avatar);
    expect(wrapper.find('.px-avatar').exists()).toBe(true);
  });

  // Size variants
  it.each([['large'], ['small']])('should apply correct class for size %s', (size) => {
    const wrapper = mount(Avatar, {
      props: { size: size as any },
      slots: { default: 'AB' },
    });
    expect(wrapper.find('.px-avatar').classes()).toContain(`px-avatar--${size}`);
  });

  it('should not apply size class for default size', () => {
    const wrapper = mount(Avatar, {
      props: { size: 'default' },
      slots: { default: 'AB' },
    });
    expect(wrapper.find('.px-avatar').classes()).not.toContain('px-avatar--default');
  });

  // Shape variants
  it('should apply is-square class when shape is square', () => {
    const wrapper = mount(Avatar, {
      props: { shape: 'square' },
      slots: { default: 'AB' },
    });
    expect(wrapper.find('.px-avatar').classes()).toContain('is-square');
  });

  it('should not apply is-square class for default circle shape', () => {
    const wrapper = mount(Avatar, {
      slots: { default: 'AB' },
    });
    expect(wrapper.find('.px-avatar').classes()).not.toContain('is-square');
  });

  // Border (defaults to true)
  it('should apply is-border class by default', () => {
    const wrapper = mount(Avatar, {
      slots: { default: 'AB' },
    });
    expect(wrapper.find('.px-avatar').classes()).toContain('is-border');
  });

  it('should not apply is-border class when border is false', () => {
    const wrapper = mount(Avatar, {
      props: { border: false },
      slots: { default: 'AB' },
    });
    expect(wrapper.find('.px-avatar').classes()).not.toContain('is-border');
  });

  // Custom color
  it('should apply custom color CSS variables when color prop is provided', () => {
    const wrapper = mount(Avatar, {
      props: { color: '#ff6600' },
      slots: { default: 'AB' },
    });
    const style = wrapper.find('.px-avatar').attributes('style');
    expect(style).toContain('--px-avatar-bg-color');
    expect(style).toContain('--px-avatar-text-color');
    expect(style).toContain('--px-avatar-border-color');
  });

  it('should not apply custom color style when no color prop is provided', () => {
    const wrapper = mount(Avatar, {
      slots: { default: 'AB' },
    });
    const style = wrapper.find('.px-avatar').attributes('style') || '';
    expect(style).not.toContain('--px-avatar-bg-color');
  });

  // Status indicator
  it('should show online indicator when status is online', () => {
    const wrapper = mount(Avatar, {
      props: { status: 'online' },
      slots: { default: 'AB' },
    });
    const indicator = wrapper.find('.px-avatar__indicator');
    expect(indicator.exists()).toBe(true);
    expect(indicator.classes()).toContain('is-online');
  });

  it('should show offline indicator when status is offline', () => {
    const wrapper = mount(Avatar, {
      props: { status: 'offline' },
      slots: { default: 'AB' },
    });
    const indicator = wrapper.find('.px-avatar__indicator');
    expect(indicator.exists()).toBe(true);
    expect(indicator.classes()).toContain('is-offline');
  });

  it('should not show indicator when status prop is not set', () => {
    const wrapper = mount(Avatar, {
      slots: { default: 'AB' },
    });
    expect(wrapper.find('.px-avatar__indicator').exists()).toBe(false);
  });

  // Combination test
  it('should apply size + shape + border classes together', () => {
    const wrapper = mount(Avatar, {
      props: { size: 'large', shape: 'square', border: true },
      slots: { default: 'AB' },
    });
    const classes = wrapper.find('.px-avatar').classes();
    expect(classes).toContain('px-avatar--large');
    expect(classes).toContain('is-square');
    expect(classes).toContain('is-border');
  });
});

describe('Avatar/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxAvatar.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxAvatar).toBe(Avatar);
  });

  it('should enhance Avatar component', () => {
    const enhancedAvatar = withInstall(Avatar);
    expect(enhancedAvatar).toBe(PxAvatar);
  });

  it('should apply specific enhance', () => {
    const enhancedAvatar = withInstall(Avatar);
    expect(enhancedAvatar).toHaveProperty('install');
  });
});
