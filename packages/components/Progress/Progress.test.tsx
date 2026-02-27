import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { PxProgress } from '.';
import Progress from './Progress.vue';

describe('Progress', () => {
  // ─── Rendering basics ───
  describe('rendering basics', () => {
    it('should render .px-progress root element', () => {
      const wrapper = mount(Progress, { props: { percentage: 50 } });
      expect(wrapper.find('.px-progress').exists()).toBe(true);
    });

    it('should render track element', () => {
      const wrapper = mount(Progress, { props: { percentage: 50 } });
      expect(wrapper.find('.px-progress__track').exists()).toBe(true);
    });

    it('should render fill element', () => {
      const wrapper = mount(Progress, { props: { percentage: 50 } });
      expect(wrapper.find('.px-progress__fill').exists()).toBe(true);
    });

    it('should render default text "50%"', () => {
      const wrapper = mount(Progress, { props: { percentage: 50 } });
      expect(wrapper.find('.px-progress__text').text()).toBe('50%');
    });

    it('should have proper ARIA attributes', () => {
      const wrapper = mount(Progress, { props: { percentage: 50 } });
      const el = wrapper.find('.px-progress');
      expect(el.attributes('role')).toBe('progressbar');
      expect(el.attributes('aria-valuenow')).toBe('50');
      expect(el.attributes('aria-valuemin')).toBe('0');
      expect(el.attributes('aria-valuemax')).toBe('100');
    });
  });

  // ─── Percentage prop ───
  describe('percentage prop', () => {
    it('should set fill width matching percentage', () => {
      const wrapper = mount(Progress, { props: { percentage: 75 } });
      const fill = wrapper.find('.px-progress__fill');
      expect(fill.attributes('style')).toContain('width: 75%');
    });

    it('should clamp percentage above 100 to 100', () => {
      const wrapper = mount(Progress, { props: { percentage: 150 } });
      expect(wrapper.find('.px-progress__text').text()).toBe('100%');
      expect(wrapper.find('.px-progress__fill').attributes('style')).toContain('width: 100%');
    });

    it('should clamp percentage below 0 to 0', () => {
      const wrapper = mount(Progress, { props: { percentage: -20 } });
      expect(wrapper.find('.px-progress__text').text()).toBe('0%');
      expect(wrapper.find('.px-progress__fill').attributes('style')).toContain('width: 0%');
    });

    it('should handle 0% edge case', () => {
      const wrapper = mount(Progress, { props: { percentage: 0 } });
      expect(wrapper.find('.px-progress__text').text()).toBe('0%');
    });

    it('should handle 100% edge case', () => {
      const wrapper = mount(Progress, { props: { percentage: 100 } });
      expect(wrapper.find('.px-progress__text').text()).toBe('100%');
    });
  });

  // ─── Type variants ───
  describe('type variants', () => {
    it.each([
      'primary',
      'success',
      'info',
      'warning',
      'danger',
    ] as const)('should apply px-progress--%s class for type "%s"', (type) => {
      const wrapper = mount(Progress, { props: { percentage: 50, type } });
      expect(wrapper.find('.px-progress').classes()).toContain(`px-progress--${type}`);
    });
  });

  // ─── Status prop ───
  describe('status prop', () => {
    it('should apply status class for success', () => {
      const wrapper = mount(Progress, { props: { percentage: 100, status: 'success' } });
      expect(wrapper.find('.px-progress').classes()).toContain('px-progress--success');
    });

    it('should apply status class for warning', () => {
      const wrapper = mount(Progress, { props: { percentage: 50, status: 'warning' } });
      expect(wrapper.find('.px-progress').classes()).toContain('px-progress--warning');
    });

    it('should apply status class for danger', () => {
      const wrapper = mount(Progress, { props: { percentage: 20, status: 'danger' } });
      expect(wrapper.find('.px-progress').classes()).toContain('px-progress--danger');
    });
  });

  // ─── Size variants ───
  describe('size variants', () => {
    it.each([
      'large',
      'default',
      'small',
    ] as const)('should apply px-progress--%s class for size "%s"', (size) => {
      const wrapper = mount(Progress, { props: { percentage: 50, size } });
      expect(wrapper.find('.px-progress').classes()).toContain(`px-progress--${size}`);
    });
  });

  // ─── Variant (pattern) ───
  describe('variant (pattern)', () => {
    it('should not add extra class for solid variant', () => {
      const wrapper = mount(Progress, { props: { percentage: 50, variant: 'solid' } });
      const classes = wrapper.find('.px-progress').classes();
      expect(classes).not.toContain('px-progress--solid');
    });

    it('should apply px-progress--striped class', () => {
      const wrapper = mount(Progress, { props: { percentage: 50, variant: 'striped' } });
      expect(wrapper.find('.px-progress').classes()).toContain('px-progress--striped');
    });

    it('should apply px-progress--checkered class', () => {
      const wrapper = mount(Progress, { props: { percentage: 50, variant: 'checkered' } });
      expect(wrapper.find('.px-progress').classes()).toContain('px-progress--checkered');
    });
  });

  // ─── Striped flow ───
  describe('striped flow', () => {
    it('should apply is-striped-flow class with striped variant', () => {
      const wrapper = mount(Progress, {
        props: { percentage: 50, variant: 'striped', stripedFlow: true },
      });
      expect(wrapper.find('.px-progress').classes()).toContain('is-striped-flow');
    });

    it('should NOT apply is-striped-flow without striped variant', () => {
      const wrapper = mount(Progress, {
        props: { percentage: 50, variant: 'solid', stripedFlow: true },
      });
      expect(wrapper.find('.px-progress').classes()).not.toContain('is-striped-flow');
    });
  });

  // ─── Text display ───
  describe('text display', () => {
    it('should hide text when showText is false', () => {
      const wrapper = mount(Progress, { props: { percentage: 50, showText: false } });
      expect(wrapper.find('.px-progress__text').exists()).toBe(false);
    });

    it('should render text inside bar when textInside is true', () => {
      const wrapper = mount(Progress, { props: { percentage: 50, textInside: true } });
      expect(wrapper.find('.px-progress__inner-text').exists()).toBe(true);
      expect(wrapper.find('.px-progress__inner-text').text()).toBe('50%');
      expect(wrapper.find('.px-progress__text').exists()).toBe(false);
    });

    it('should render external text by default', () => {
      const wrapper = mount(Progress, { props: { percentage: 50 } });
      expect(wrapper.find('.px-progress__text').exists()).toBe(true);
      expect(wrapper.find('.px-progress__inner-text').exists()).toBe(false);
    });

    it('should use custom format function', () => {
      const format = (p: number) => `${p}/100 HP`;
      const wrapper = mount(Progress, { props: { percentage: 75, format } });
      expect(wrapper.find('.px-progress__text').text()).toBe('75/100 HP');
    });
  });

  // ─── Custom color ───
  describe('custom color', () => {
    it('should apply CSS vars for hex string color', () => {
      const wrapper = mount(Progress, { props: { percentage: 50, color: '#ff6600' } });
      const style = wrapper.find('.px-progress__fill').attributes('style') ?? '';
      expect(style).toContain('--px-progress-fill-color');
    });

    it('should not apply CSS vars when no color is set', () => {
      const wrapper = mount(Progress, { props: { percentage: 50 } });
      const style = wrapper.find('.px-progress__fill').attributes('style') ?? '';
      expect(style).not.toContain('--px-progress-fill-color');
    });

    it('should apply CSS vars from function color', () => {
      const colorFn = (p: number) => (p >= 50 ? '#00cc00' : '#ff0000');
      const wrapper = mount(Progress, { props: { percentage: 75, color: colorFn } });
      const style = wrapper.find('.px-progress__fill').attributes('style') ?? '';
      expect(style).toContain('--px-progress-fill-color');
    });
  });

  // ─── strokeWidth ───
  describe('strokeWidth', () => {
    it('should set custom height via CSS variable', () => {
      const wrapper = mount(Progress, { props: { percentage: 50, strokeWidth: 24 } });
      const style = wrapper.find('.px-progress__fill').attributes('style') ?? '';
      expect(style).toContain('--px-progress-height: 24px');
    });
  });

  // ─── Indeterminate ───
  describe('indeterminate', () => {
    it('should apply is-indeterminate class', () => {
      const wrapper = mount(Progress, { props: { indeterminate: true } });
      expect(wrapper.find('.px-progress').classes()).toContain('is-indeterminate');
    });

    it('should hide text when indeterminate', () => {
      const wrapper = mount(Progress, { props: { indeterminate: true, showText: true } });
      expect(wrapper.find('.px-progress__text').exists()).toBe(false);
    });

    it('should omit aria-valuenow when indeterminate', () => {
      const wrapper = mount(Progress, { props: { indeterminate: true } });
      expect(wrapper.find('.px-progress').attributes('aria-valuenow')).toBeUndefined();
    });
  });

  // ─── textInside class ───
  describe('textInside class', () => {
    it('should apply is-text-inside class when textInside is true', () => {
      const wrapper = mount(Progress, { props: { percentage: 50, textInside: true } });
      expect(wrapper.find('.px-progress').classes()).toContain('is-text-inside');
    });
  });

  // ─── Export ───
  describe('export', () => {
    it('should be wrapped with withInstall()', () => {
      expect(PxProgress.install).toBeDefined();
      expect(typeof PxProgress.install).toBe('function');
    });

    it('should have correct component name', () => {
      const wrapper = mount(Progress, { props: { percentage: 50 } });
      expect(wrapper.vm.$options.name).toBe('PxProgress');
    });
  });
});
