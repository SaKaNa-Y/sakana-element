import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { PxLink } from './index';
import Link from './Link.vue';
import type { LinkType } from './types';

describe('Link.vue', () => {
  it('should render with default props', () => {
    const wrapper = mount(Link, {
      slots: { default: 'Link' },
    });
    expect(wrapper.find('.px-link').exists()).toBe(true);
  });

  it('should render as an <a> tag', () => {
    const wrapper = mount(Link, {
      slots: { default: 'Link' },
    });
    expect(wrapper.element.tagName).toBe('A');
  });

  it('should render slot content', () => {
    const wrapper = mount(Link, {
      slots: { default: 'Click me' },
    });
    expect(wrapper.text()).toBe('Click me');
  });

  // Type variants
  it.each([['primary'], ['success'], ['info'], ['warning'], ['danger']] as [
    LinkType,
  ][])('should apply correct class for type %s', (type) => {
    const wrapper = mount(Link, {
      props: { type },
      slots: { default: 'Link' },
    });
    expect(wrapper.find('.px-link').classes()).toContain(`px-link--${type}`);
  });

  it('should have is-underline class by default', () => {
    const wrapper = mount(Link, {
      slots: { default: 'Link' },
    });
    expect(wrapper.find('.px-link').classes()).toContain('is-underline');
  });

  it('should not have is-underline class when underline is false', () => {
    const wrapper = mount(Link, {
      props: { underline: false },
      slots: { default: 'Link' },
    });
    expect(wrapper.find('.px-link').classes()).not.toContain('is-underline');
  });

  it('should apply is-disabled class when disabled', () => {
    const wrapper = mount(Link, {
      props: { disabled: true },
      slots: { default: 'Link' },
    });
    expect(wrapper.find('.px-link').classes()).toContain('is-disabled');
  });

  it('should not emit click when disabled', async () => {
    const wrapper = mount(Link, {
      props: { disabled: true },
      slots: { default: 'Link' },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('should set href and target attributes', () => {
    const wrapper = mount(Link, {
      props: { href: 'https://example.com', target: '_blank' },
      slots: { default: 'Link' },
    });
    expect(wrapper.attributes('href')).toBe('https://example.com');
    expect(wrapper.attributes('target')).toBe('_blank');
  });

  it('should apply custom color CSS variables when color prop is provided', () => {
    const wrapper = mount(Link, {
      props: { color: '#ff6600' },
      slots: { default: 'Link' },
    });
    const style = wrapper.find('.px-link').attributes('style');
    expect(style).toContain('--px-link-text-color');
  });

  it('should not apply custom color style when no color prop is provided', () => {
    const wrapper = mount(Link, {
      slots: { default: 'Link' },
    });
    const style = wrapper.find('.px-link').attributes('style') || '';
    expect(style).not.toContain('--px-link-text-color');
  });
});

describe('Link/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxLink.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxLink).toBe(Link);
  });

  it('should enhance Link component', () => {
    const enhancedLink = withInstall(Link);
    expect(enhancedLink).toBe(PxLink);
  });

  it('should apply specific enhance', () => {
    const enhancedLink = withInstall(Link);
    expect(enhancedLink).toHaveProperty('install');
  });
});
