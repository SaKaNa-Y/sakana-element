import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Icon from '../Icon/Icon.vue';
import Badge from './Badge.vue';
import { PxBadge } from './index';
import type { BadgeType } from './types';

describe('Badge.vue', () => {
  it('should render with default props', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Badge',
      },
    });
    expect(wrapper.text()).toContain('Badge');
    expect(wrapper.find('.px-badge').exists()).toBe(true);
  });

  it('should render slot content', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Custom Content',
      },
    });
    expect(wrapper.text()).toBe('Custom Content');
  });

  // Type variants
  it.each([['primary'], ['success'], ['info'], ['warning'], ['danger']] as [
    BadgeType,
  ][])('should apply correct class for type %s', (type) => {
    const wrapper = mount(Badge, {
      props: { type },
      slots: { default: 'Badge' },
    });
    expect(wrapper.find('.px-badge').classes()).toContain(`px-badge--${type}`);
  });

  // Size variants
  it.each([['large'], ['default'], ['small']])('should apply correct class for size %s', (size) => {
    const wrapper = mount(Badge, {
      props: { size: size as any },
      slots: { default: 'Badge' },
    });
    if (size !== 'default') {
      expect(wrapper.find('.px-badge').classes()).toContain(`px-badge--${size}`);
    }
  });

  // Outline variant
  it('should apply is-outline class when outline prop is true', () => {
    const wrapper = mount(Badge, {
      props: { outline: true },
      slots: { default: 'Badge' },
    });
    expect(wrapper.find('.px-badge').classes()).toContain('is-outline');
  });

  it('should not apply is-outline class by default', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'Badge' },
    });
    expect(wrapper.find('.px-badge').classes()).not.toContain('is-outline');
  });

  // Dash variant
  it('should apply is-dash class when dash prop is true', () => {
    const wrapper = mount(Badge, {
      props: { dash: true },
      slots: { default: 'Badge' },
    });
    expect(wrapper.find('.px-badge').classes()).toContain('is-dash');
  });

  it('should not apply is-dash class by default', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'Badge' },
    });
    expect(wrapper.find('.px-badge').classes()).not.toContain('is-dash');
  });

  // Round variant
  it('should apply is-round class when round prop is true', () => {
    const wrapper = mount(Badge, {
      props: { round: true },
      slots: { default: 'Badge' },
    });
    expect(wrapper.find('.px-badge').classes()).toContain('is-round');
  });

  it('should not apply is-round class by default', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'Badge' },
    });
    expect(wrapper.find('.px-badge').classes()).not.toContain('is-round');
  });

  // Custom color
  it('should apply custom color CSS variables when color prop is provided', () => {
    const wrapper = mount(Badge, {
      props: { color: '#ff6600' },
      slots: { default: 'Badge' },
    });
    const style = wrapper.find('.px-badge').attributes('style');
    expect(style).toContain('--px-badge-bg-color');
    expect(style).toContain('--px-badge-border-color');
    expect(style).toContain('--px-badge-text-color');
  });

  it('should not apply custom color style when no color prop is provided', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'Badge' },
    });
    const style = wrapper.find('.px-badge').attributes('style') || '';
    expect(style).not.toContain('--px-badge-bg-color');
  });

  it('should apply outline custom color correctly', () => {
    const wrapper = mount(Badge, {
      props: { color: '#ff6600', outline: true },
      slots: { default: 'Badge' },
    });
    const style = wrapper.find('.px-badge').attributes('style');
    expect(style).toContain('--px-badge-bg-color');
    expect(style).toContain('transparent');
  });

  it('should apply dash custom color correctly', () => {
    const wrapper = mount(Badge, {
      props: { color: '#ff6600', dash: true },
      slots: { default: 'Badge' },
    });
    const style = wrapper.find('.px-badge').attributes('style');
    expect(style).toContain('--px-badge-bg-color');
    expect(style).toContain('--px-badge-border-color');
  });

  // Empty badge (no slot content)
  it('should render as empty badge when no content', () => {
    const wrapper = mount(Badge);
    expect(wrapper.find('.px-badge').exists()).toBe(true);
  });

  // Icon prop
  it('should render PxIcon when icon prop is provided', () => {
    const wrapper = mount(Badge, {
      props: { icon: 'heart' },
      slots: { default: 'Badge' },
    });
    const icon = wrapper.findComponent(Icon);
    expect(icon.exists()).toBe(true);
    expect(icon.props('icon')).toBe('heart');
  });

  it('should render both icon and text', () => {
    const wrapper = mount(Badge, {
      props: { icon: 'check' },
      slots: { default: 'Done' },
    });
    expect(wrapper.findComponent(Icon).exists()).toBe(true);
    expect(wrapper.text()).toContain('Done');
  });

  it('should not render PxIcon by default', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'Badge' },
    });
    expect(wrapper.findComponent(Icon).exists()).toBe(false);
  });

  it('should render icon with xs size when badge size is small', () => {
    const wrapper = mount(Badge, {
      props: { icon: 'heart', size: 'small' },
      slots: { default: 'Badge' },
    });
    const icon = wrapper.findComponent(Icon);
    expect(icon.exists()).toBe(true);
    expect(icon.props('size')).toBe('xs');
  });

  it('should render icon with sm size when badge size is default', () => {
    const wrapper = mount(Badge, {
      props: { icon: 'heart', size: 'default' },
      slots: { default: 'Badge' },
    });
    const icon = wrapper.findComponent(Icon);
    expect(icon.exists()).toBe(true);
    expect(icon.props('size')).toBe('sm');
  });

  it('should render icon with sm size when badge size is large', () => {
    const wrapper = mount(Badge, {
      props: { icon: 'heart', size: 'large' },
      slots: { default: 'Badge' },
    });
    const icon = wrapper.findComponent(Icon);
    expect(icon.exists()).toBe(true);
    expect(icon.props('size')).toBe('sm');
  });

  // Empty badge class
  it('should have is-empty class when no slot content', () => {
    const wrapper = mount(Badge);
    expect(wrapper.find('.px-badge').classes()).toContain('is-empty');
  });

  it('should not have is-empty class when slot content exists', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'Badge' },
    });
    expect(wrapper.find('.px-badge').classes()).not.toContain('is-empty');
  });

  it('should apply is-empty with size and type classes', () => {
    const wrapper = mount(Badge, {
      props: { type: 'danger', size: 'small' },
    });
    const classes = wrapper.find('.px-badge').classes();
    expect(classes).toContain('is-empty');
    expect(classes).toContain('px-badge--danger');
    expect(classes).toContain('px-badge--small');
  });
});

describe('Badge/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxBadge.install).toBeDefined();
  });
  it('component should be exported', () => {
    expect(PxBadge).toBe(Badge);
  });

  it('should enhance Badge component', () => {
    const enhancedBadge = withInstall(Badge);
    expect(enhancedBadge).toBe(PxBadge);
  });

  it('should apply specific enhance', () => {
    const enhancedBadge = withInstall(Badge);
    expect(enhancedBadge).toHaveProperty('install');
  });
});
