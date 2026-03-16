import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { PxSkeleton } from './index';
import Skeleton from './Skeleton.vue';

describe('Skeleton.vue', () => {
  // --- Rendering ---
  describe('Rendering', () => {
    it('should render with px-skeleton class by default', () => {
      const wrapper = mount(Skeleton);
      expect(wrapper.find('.px-skeleton').exists()).toBe(true);
    });

    it('should have is-loading class when loading is true', () => {
      const wrapper = mount(Skeleton, { props: { loading: true } });
      expect(wrapper.find('.px-skeleton').classes()).toContain('is-loading');
    });

    it('should have is-animated class when animated is true', () => {
      const wrapper = mount(Skeleton, { props: { animated: true } });
      expect(wrapper.find('.px-skeleton').classes()).toContain('is-animated');
    });

    it('should not have is-animated class when animated is false', () => {
      const wrapper = mount(Skeleton, { props: { animated: false } });
      expect(wrapper.find('.px-skeleton').classes()).not.toContain('is-animated');
    });

    it('should have is-animation-shimmer class by default when animated', () => {
      const wrapper = mount(Skeleton, { props: { animated: true } });
      expect(wrapper.find('.px-skeleton').classes()).toContain('is-animation-shimmer');
    });

    it('should have is-animation-pulse class when animation is pulse', () => {
      const wrapper = mount(Skeleton, {
        props: { animated: true, animation: 'pulse' },
      });
      expect(wrapper.find('.px-skeleton').classes()).toContain('is-animation-pulse');
    });

    it('should have is-animation-dither class when animation is dither', () => {
      const wrapper = mount(Skeleton, {
        props: { animated: true, animation: 'dither' },
      });
      expect(wrapper.find('.px-skeleton').classes()).toContain('is-animation-dither');
    });

    it('should not have animation class when animated is false', () => {
      const wrapper = mount(Skeleton, {
        props: { animated: false, animation: 'pulse' },
      });
      const classes = wrapper.find('.px-skeleton').classes();
      expect(classes).not.toContain('is-animation-pulse');
      expect(classes).not.toContain('is-animation-shimmer');
    });
  });

  // --- Variants ---
  describe('Variants', () => {
    it('should apply px-skeleton--rectangular class by default', () => {
      const wrapper = mount(Skeleton);
      expect(wrapper.find('.px-skeleton').classes()).toContain('px-skeleton--rectangular');
    });

    it('should apply px-skeleton--circular class', () => {
      const wrapper = mount(Skeleton, { props: { variant: 'circular' } });
      expect(wrapper.find('.px-skeleton').classes()).toContain('px-skeleton--circular');
    });

    it('should apply px-skeleton--text class', () => {
      const wrapper = mount(Skeleton, { props: { variant: 'text' } });
      expect(wrapper.find('.px-skeleton').classes()).toContain('px-skeleton--text');
    });

    it('should apply px-skeleton--rounded class', () => {
      const wrapper = mount(Skeleton, { props: { variant: 'rounded' } });
      expect(wrapper.find('.px-skeleton').classes()).toContain('px-skeleton--rounded');
    });
  });

  // --- Sizes ---
  describe('Sizes', () => {
    it('should apply px-skeleton--large class', () => {
      const wrapper = mount(Skeleton, { props: { size: 'large' } });
      expect(wrapper.find('.px-skeleton').classes()).toContain('px-skeleton--large');
    });

    it('should apply px-skeleton--small class', () => {
      const wrapper = mount(Skeleton, { props: { size: 'small' } });
      expect(wrapper.find('.px-skeleton').classes()).toContain('px-skeleton--small');
    });

    it('should not apply size class by default', () => {
      const wrapper = mount(Skeleton);
      const classes = wrapper.find('.px-skeleton').classes();
      expect(classes).not.toContain('px-skeleton--large');
      expect(classes).not.toContain('px-skeleton--small');
    });
  });

  // --- Dimensions ---
  describe('Dimensions', () => {
    it('should set width as px when number is provided', () => {
      const wrapper = mount(Skeleton, { props: { width: 200 } });
      const bone = wrapper.find('.px-skeleton__bone');
      expect(bone.attributes('style')).toContain('width: 200px');
    });

    it('should set width as-is when string is provided', () => {
      const wrapper = mount(Skeleton, { props: { width: '50%' } });
      const bone = wrapper.find('.px-skeleton__bone');
      expect(bone.attributes('style')).toContain('width: 50%');
    });

    it('should set height as px when number is provided', () => {
      const wrapper = mount(Skeleton, { props: { height: 100 } });
      const bone = wrapper.find('.px-skeleton__bone');
      expect(bone.attributes('style')).toContain('height: 100px');
    });

    it('should set height as-is when string is provided', () => {
      const wrapper = mount(Skeleton, { props: { height: '5rem' } });
      const bone = wrapper.find('.px-skeleton__bone');
      expect(bone.attributes('style')).toContain('height: 5rem');
    });
  });

  // --- Rows ---
  describe('Rows', () => {
    it('should render multiple rows for text variant with rows > 1', () => {
      const wrapper = mount(Skeleton, { props: { variant: 'text', rows: 3 } });
      const rows = wrapper.findAll('.px-skeleton__row');
      expect(rows.length).toBe(3);
    });

    it('should set last row to reduced width', () => {
      const wrapper = mount(Skeleton, { props: { variant: 'text', rows: 3 } });
      const rows = wrapper.findAll('.px-skeleton__row');
      const lastRow = rows[rows.length - 1];
      expect(lastRow.attributes('style')).toContain('width: 60%');
    });
  });

  // --- Edge cases ---
  describe('Edge cases', () => {
    it('should render bone (not rows) for text variant with rows=1', () => {
      const wrapper = mount(Skeleton, { props: { variant: 'text', rows: 1 } });
      expect(wrapper.find('.px-skeleton__bone').exists()).toBe(true);
      expect(wrapper.findAll('.px-skeleton__row').length).toBe(0);
    });

    it('should ignore rows prop for non-text variants', () => {
      const wrapper = mount(Skeleton, { props: { variant: 'rectangular', rows: 3 } });
      expect(wrapper.find('.px-skeleton__bone').exists()).toBe(true);
      expect(wrapper.findAll('.px-skeleton__row').length).toBe(0);
    });

    it('should not apply size class when size is explicitly default', () => {
      const wrapper = mount(Skeleton, { props: { size: 'default' } });
      const classes = wrapper.find('.px-skeleton').classes();
      expect(classes).not.toContain('px-skeleton--default');
      expect(classes).not.toContain('px-skeleton--large');
      expect(classes).not.toContain('px-skeleton--small');
    });
  });

  // --- Loading toggle ---
  describe('Loading toggle', () => {
    it('should show skeleton and hide slot when loading is true', () => {
      const wrapper = mount(Skeleton, {
        props: { loading: true },
        slots: { default: '<p class="content">Hello</p>' },
      });
      expect(wrapper.find('.px-skeleton').exists()).toBe(true);
      expect(wrapper.find('.content').exists()).toBe(false);
    });

    it('should show slot content and hide skeleton when loading is false', () => {
      const wrapper = mount(Skeleton, {
        props: { loading: false },
        slots: { default: '<p class="content">Hello</p>' },
      });
      expect(wrapper.find('.px-skeleton').exists()).toBe(false);
      expect(wrapper.find('.content').exists()).toBe(true);
    });
  });
});

describe('Skeleton/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxSkeleton.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxSkeleton).toBe(Skeleton);
  });
});
