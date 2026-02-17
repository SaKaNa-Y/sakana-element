import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Icon from './Icon.vue';
import { PxIcon, registerDefaultPixelIcons } from './index';

describe('Icon.vue', () => {
  it('should render with default props', () => {
    const wrapper = mount(Icon, {
      props: { icon: 'check' },
    });
    expect(wrapper.find('i').exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('px-icon');
    expect(wrapper.classes()).toContain('px-icon--md');
  });

  it('should render pixel SVG when icon is registered', () => {
    const wrapper = mount(Icon, {
      props: { icon: 'check' },
    });
    expect(wrapper.find('.px-icon__pixel').exists()).toBeTruthy();
    expect(wrapper.find('.px-icon__fallback').exists()).toBeFalsy();
  });

  it('should render fallback when icon is not registered', () => {
    const wrapper = mount(Icon, {
      props: { icon: 'nonexistent-icon-xyz' },
    });
    expect(wrapper.find('.px-icon__fallback').exists()).toBeTruthy();
    expect(wrapper.find('.px-icon__fallback').text()).toBe('?');
    expect(wrapper.find('.px-icon__pixel').exists()).toBeFalsy();
  });

  it('should resolve icon name aliases', () => {
    // 'spinner' is an alias for 'loader'
    const wrapper = mount(Icon, {
      props: { icon: 'spinner' },
    });
    // Should render pixel SVG (because 'loader' is registered)
    expect(wrapper.find('.px-icon__pixel').exists()).toBeTruthy();
  });

  it('should apply size class and styles', () => {
    const sizes = [
      { size: 'xs', px: 12 },
      { size: 'sm', px: 18 },
      { size: 'md', px: 24 },
      { size: 'lg', px: 36 },
      { size: 'xl', px: 48 },
    ] as const;

    sizes.forEach(({ size, px }) => {
      const wrapper = mount(Icon, {
        props: { icon: 'check', size },
      });
      expect(wrapper.classes()).toContain(`px-icon--${size}`);
      expect(wrapper.attributes('style')).toContain(`width: ${px}px`);
      expect(wrapper.attributes('style')).toContain(`height: ${px}px`);
    });
  });

  it('should apply type class', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'] as const;
    types.forEach((type) => {
      const wrapper = mount(Icon, {
        props: { icon: 'check', type },
      });
      expect(wrapper.classes()).toContain(`px-icon--${type}`);
    });
  });

  it('should apply custom color style', () => {
    const wrapper = mount(Icon, {
      props: { icon: 'check', color: '#ff0000' },
    });
    expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0)');
  });

  it('should apply animation classes', () => {
    const animations = ['spin', 'pulse', 'bounce', 'shake', 'beat', 'fade'] as const;
    animations.forEach((anim) => {
      const wrapper = mount(Icon, {
        props: { icon: 'check', [anim]: true },
      });
      expect(wrapper.classes()).toContain(`px-icon--${anim}`);
    });
  });

  it('should apply flip classes', () => {
    const flipH = mount(Icon, {
      props: { icon: 'check', flip: 'horizontal' },
    });
    expect(flipH.classes()).toContain('px-icon--flip-h');

    const flipV = mount(Icon, {
      props: { icon: 'check', flip: 'vertical' },
    });
    expect(flipV.classes()).toContain('px-icon--flip-v');

    const flipBoth = mount(Icon, {
      props: { icon: 'check', flip: 'both' },
    });
    expect(flipBoth.classes()).toContain('px-icon--flip-h');
    expect(flipBoth.classes()).toContain('px-icon--flip-v');
  });

  it('should apply rotation class', () => {
    const wrapper = mount(Icon, {
      props: { icon: 'check', rotation: 90 },
    });
    expect(wrapper.classes()).toContain('px-icon--rotate-90');
  });

  it('should apply all rotation values', () => {
    const rotations = [90, 180, 270] as const;
    rotations.forEach((rotation) => {
      const wrapper = mount(Icon, {
        props: { icon: 'check', rotation },
      });
      expect(wrapper.classes()).toContain(`px-icon--rotate-${rotation}`);
    });
  });

  it('should apply rotation with string values', () => {
    const rotations = ['90', '180', '270'] as const;
    rotations.forEach((rotation) => {
      const wrapper = mount(Icon, {
        props: { icon: 'check', rotation },
      });
      expect(wrapper.classes()).toContain(`px-icon--rotate-${rotation}`);
    });
  });

  it('should apply flip and rotation together', () => {
    const wrapper = mount(Icon, {
      props: { icon: 'check', flip: 'horizontal', rotation: 180 },
    });
    expect(wrapper.classes()).toContain('px-icon--flip-h');
    expect(wrapper.classes()).toContain('px-icon--rotate-180');
  });

  it('should apply flip=both and rotation together', () => {
    const wrapper = mount(Icon, {
      props: { icon: 'check', flip: 'both', rotation: 270 },
    });
    expect(wrapper.classes()).toContain('px-icon--flip-h');
    expect(wrapper.classes()).toContain('px-icon--flip-v');
    expect(wrapper.classes()).toContain('px-icon--rotate-270');
  });
});

describe('Icon/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxIcon.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxIcon).toBe(Icon);
  });

  it('should enhance Icon component', () => {
    const enhancedIcon = withInstall(Icon);
    expect(enhancedIcon).toBe(PxIcon);
  });

  it('registerDefaultPixelIcons should be a function', () => {
    expect(registerDefaultPixelIcons).toBeInstanceOf(Function);
    // Call it to ensure it doesn't throw
    registerDefaultPixelIcons();
  });
});
