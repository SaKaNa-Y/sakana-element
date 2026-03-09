import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Divider from './Divider.vue';
import { PxDivider } from './index';
import type { DividerType } from './types';

describe('Divider.vue', () => {
  it('should render .px-divider with role="separator"', () => {
    const wrapper = mount(Divider);
    expect(wrapper.find('.px-divider').exists()).toBe(true);
    expect(wrapper.attributes('role')).toBe('separator');
  });

  it('should default to horizontal direction with aria-orientation', () => {
    const wrapper = mount(Divider);
    expect(wrapper.attributes('aria-orientation')).toBe('horizontal');
    expect(wrapper.classes()).not.toContain('is-vertical');
  });

  it('should apply vertical mode with is-vertical class and aria-orientation', () => {
    const wrapper = mount(Divider, {
      props: { direction: 'vertical' },
    });
    expect(wrapper.classes()).toContain('is-vertical');
    expect(wrapper.attributes('aria-orientation')).toBe('vertical');
  });

  it('should render slot content in .px-divider__text', () => {
    const wrapper = mount(Divider, {
      slots: { default: 'Section' },
    });
    expect(wrapper.find('.px-divider__text').exists()).toBe(true);
    expect(wrapper.find('.px-divider__text').text()).toBe('Section');
  });

  it('should render content prop text', () => {
    const wrapper = mount(Divider, {
      props: { content: 'OR' },
    });
    expect(wrapper.find('.px-divider__text').text()).toBe('OR');
  });

  it('should not render .px-divider__text when no content or slot', () => {
    const wrapper = mount(Divider);
    expect(wrapper.find('.px-divider__text').exists()).toBe(false);
  });

  it('should apply content position class (left)', () => {
    const wrapper = mount(Divider, {
      props: { content: 'Title', contentPosition: 'left' },
    });
    expect(wrapper.classes()).toContain('px-divider--left');
  });

  it('should apply content position class (center)', () => {
    const wrapper = mount(Divider, {
      props: { content: 'Title', contentPosition: 'center' },
    });
    expect(wrapper.classes()).toContain('px-divider--center');
  });

  it('should apply content position class (right)', () => {
    const wrapper = mount(Divider, {
      props: { content: 'Title', contentPosition: 'right' },
    });
    expect(wrapper.classes()).toContain('px-divider--right');
  });

  // Type variants
  it.each([['primary'], ['success'], ['warning'], ['danger'], ['info']] as [
    DividerType,
  ][])('should apply correct class for type %s', (type) => {
    const wrapper = mount(Divider, {
      props: { type },
    });
    expect(wrapper.classes()).toContain(`px-divider--${type}`);
  });

  it('should not apply type class by default', () => {
    const wrapper = mount(Divider);
    const classes = wrapper.classes();
    expect(classes).not.toContain('px-divider--primary');
    expect(classes).not.toContain('px-divider--success');
    expect(classes).not.toContain('px-divider--warning');
    expect(classes).not.toContain('px-divider--danger');
    expect(classes).not.toContain('px-divider--info');
  });

  // Custom hex color
  it('should apply custom color CSS variables when color prop is set', () => {
    const wrapper = mount(Divider, {
      props: { color: '#ff6600' },
    });
    const style = wrapper.attributes('style') || '';
    expect(style).toContain('--px-divider-line-color');
  });

  it('should not apply custom CSS variables when no color prop', () => {
    const wrapper = mount(Divider);
    const style = wrapper.attributes('style') || '';
    expect(style).not.toContain('--px-divider-line-color');
  });

  // Border style
  it('should apply dashed border style class', () => {
    const wrapper = mount(Divider, {
      props: { borderStyle: 'dashed' },
    });
    expect(wrapper.classes()).toContain('px-divider--dashed');
  });

  it('should apply dotted border style class', () => {
    const wrapper = mount(Divider, {
      props: { borderStyle: 'dotted' },
    });
    expect(wrapper.classes()).toContain('px-divider--dotted');
  });

  it('should not apply border style class for solid (default)', () => {
    const wrapper = mount(Divider);
    expect(wrapper.classes()).not.toContain('px-divider--solid');
    expect(wrapper.classes()).not.toContain('px-divider--dashed');
    expect(wrapper.classes()).not.toContain('px-divider--dotted');
  });

  // Vertical mode should NOT render content
  it('should not render content in vertical mode', () => {
    const wrapper = mount(Divider, {
      props: { direction: 'vertical', content: 'Text' },
    });
    expect(wrapper.find('.px-divider__text').exists()).toBe(false);
  });

  it('should not render slot content in vertical mode', () => {
    const wrapper = mount(Divider, {
      props: { direction: 'vertical' },
      slots: { default: 'Text' },
    });
    expect(wrapper.find('.px-divider__text').exists()).toBe(false);
  });
});

describe('Divider/index', () => {
  it('PxDivider should be exported with withInstall()', () => {
    expect(PxDivider.install).toBeDefined();
  });

  it('PxDivider component should be exported', () => {
    expect(PxDivider).toBe(Divider);
  });
});
