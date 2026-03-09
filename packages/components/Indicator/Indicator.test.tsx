import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Indicator from './Indicator.vue';
import { PxIndicator } from './index';
import type { IndicatorPlacement, IndicatorType } from './types';

describe('Indicator.vue', () => {
  it('should render with default props', () => {
    const wrapper = mount(Indicator, {
      slots: {
        default: '<div class="content">Content</div>',
        indicator: 'New',
      },
    });
    expect(wrapper.find('.px-indicator').exists()).toBe(true);
    expect(wrapper.find('.px-indicator__item').exists()).toBe(true);
    expect(wrapper.text()).toContain('Content');
    expect(wrapper.text()).toContain('New');
  });

  it('should render default slot content', () => {
    const wrapper = mount(Indicator, {
      slots: {
        default: '<button>Click me</button>',
        indicator: '!',
      },
    });
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').text()).toBe('Click me');
  });

  it('should render indicator slot content', () => {
    const wrapper = mount(Indicator, {
      slots: {
        default: '<div>Content</div>',
        indicator: '<span class="custom-badge">99+</span>',
      },
    });
    expect(wrapper.find('.custom-badge').exists()).toBe(true);
    expect(wrapper.find('.custom-badge').text()).toBe('99+');
  });

  // Placement variants
  it.each([
    ['top-start'],
    ['top-center'],
    ['top-end'],
    ['middle-start'],
    ['middle-center'],
    ['middle-end'],
    ['bottom-start'],
    ['bottom-center'],
    ['bottom-end'],
  ] as [IndicatorPlacement][])('should apply correct class for placement %s', (placement) => {
    const wrapper = mount(Indicator, {
      props: { placement },
      slots: { default: 'Content', indicator: '!' },
    });
    expect(wrapper.find('.px-indicator__item').classes()).toContain(
      `px-indicator__item--${placement}`,
    );
  });

  it('should default to top-end placement', () => {
    const wrapper = mount(Indicator, {
      slots: { default: 'Content', indicator: '!' },
    });
    expect(wrapper.find('.px-indicator__item').classes()).toContain('px-indicator__item--top-end');
  });

  // Type variants
  it.each([['primary'], ['success'], ['info'], ['warning'], ['danger']] as [
    IndicatorType,
  ][])('should apply correct class for type %s', (type) => {
    const wrapper = mount(Indicator, {
      props: { type },
      slots: { default: 'Content', indicator: '!' },
    });
    expect(wrapper.find('.px-indicator__item').classes()).toContain(`px-indicator__item--${type}`);
  });

  it('should default to primary type', () => {
    const wrapper = mount(Indicator, {
      slots: { default: 'Content', indicator: '!' },
    });
    expect(wrapper.find('.px-indicator__item').classes()).toContain('px-indicator__item--primary');
  });

  // Custom color
  it('should apply custom color CSS variables when color prop is provided', () => {
    const wrapper = mount(Indicator, {
      props: { color: '#ff6600' },
      slots: { default: 'Content', indicator: '!' },
    });
    const style = wrapper.find('.px-indicator__item').attributes('style');
    expect(style).toContain('--px-indicator-bg-color');
    expect(style).toContain('--px-indicator-border-color');
    expect(style).toContain('--px-indicator-shadow-color');
  });

  it('should not apply custom color style when no color prop is provided', () => {
    const wrapper = mount(Indicator, {
      slots: { default: 'Content', indicator: '!' },
    });
    const style = wrapper.find('.px-indicator__item').attributes('style') || '';
    expect(style).not.toContain('--px-indicator-bg-color');
  });

  // Offset prop
  it('should apply offset CSS variables when offset prop is provided', () => {
    const wrapper = mount(Indicator, {
      props: { offset: [4, -2] as [number, number] },
      slots: { default: 'Content', indicator: '!' },
    });
    const style = wrapper.find('.px-indicator__item').attributes('style');
    expect(style).toContain('--px-indicator-offset-x: 4px');
    expect(style).toContain('--px-indicator-offset-y: -2px');
  });

  it('should not apply offset style when no offset prop is provided', () => {
    const wrapper = mount(Indicator, {
      slots: { default: 'Content', indicator: '!' },
    });
    const style = wrapper.find('.px-indicator__item').attributes('style') || '';
    expect(style).not.toContain('--px-indicator-offset-x');
    expect(style).not.toContain('--px-indicator-offset-y');
  });

  // Inline prop
  it('should apply is-inline class when inline prop is true', () => {
    const wrapper = mount(Indicator, {
      props: { inline: true },
      slots: { default: 'Content', indicator: '!' },
    });
    expect(wrapper.find('.px-indicator').classes()).toContain('is-inline');
  });

  it('should not apply is-inline class by default', () => {
    const wrapper = mount(Indicator, {
      slots: { default: 'Content', indicator: '!' },
    });
    expect(wrapper.find('.px-indicator').classes()).not.toContain('is-inline');
  });

  // Processing prop
  it('should apply is-processing class when processing prop is true', () => {
    const wrapper = mount(Indicator, {
      props: { processing: true },
      slots: { default: 'Content', indicator: '!' },
    });
    expect(wrapper.find('.px-indicator__item').classes()).toContain('is-processing');
  });

  it('should not apply is-processing class by default', () => {
    const wrapper = mount(Indicator, {
      slots: { default: 'Content', indicator: '!' },
    });
    expect(wrapper.find('.px-indicator__item').classes()).not.toContain('is-processing');
  });

  it('should render ping element when processing and dot mode', () => {
    const wrapper = mount(Indicator, {
      props: { processing: true },
      slots: { default: 'Content' },
    });
    expect(wrapper.find('.px-indicator__ping').exists()).toBe(true);
  });

  // Dot mode
  it('should apply is-dot class when indicator slot is empty', () => {
    const wrapper = mount(Indicator, {
      slots: { default: 'Content' },
    });
    expect(wrapper.find('.px-indicator__item').classes()).toContain('is-dot');
  });

  it('should not apply is-dot class when indicator slot has content', () => {
    const wrapper = mount(Indicator, {
      slots: { default: 'Content', indicator: 'New' },
    });
    expect(wrapper.find('.px-indicator__item').classes()).not.toContain('is-dot');
  });
});

describe('Indicator/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxIndicator.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxIndicator).toBe(Indicator);
  });

  it('should enhance Indicator component', () => {
    const enhanced = withInstall(Indicator);
    expect(enhanced).toBe(PxIndicator);
  });

  it('should apply specific enhance', () => {
    const enhanced = withInstall(Indicator);
    expect(enhanced).toHaveProperty('install');
  });
});
