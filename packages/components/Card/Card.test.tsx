import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Card from './Card.vue';
import { PxCard } from './index';

describe('Card.vue', () => {
  it('should render default slot in .px-card__body', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Card content' },
    });
    expect(wrapper.find('.px-card').exists()).toBe(true);
    expect(wrapper.find('.px-card__body').text()).toBe('Card content');
  });

  it('should render header slot when provided', () => {
    const wrapper = mount(Card, {
      slots: {
        header: 'Card Header',
        default: 'Body',
      },
    });
    expect(wrapper.find('.px-card__header').exists()).toBe(true);
    expect(wrapper.find('.px-card__header').text()).toBe('Card Header');
  });

  it('should render footer slot when provided', () => {
    const wrapper = mount(Card, {
      slots: {
        footer: 'Card Footer',
        default: 'Body',
      },
    });
    expect(wrapper.find('.px-card__footer').exists()).toBe(true);
    expect(wrapper.find('.px-card__footer').text()).toBe('Card Footer');
  });

  // Slot absence tests
  it('should NOT render header section when header slot is empty', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Body only' },
    });
    expect(wrapper.find('.px-card__header').exists()).toBe(false);
  });

  it('should NOT render footer section when footer slot is empty', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Body only' },
    });
    expect(wrapper.find('.px-card__footer').exists()).toBe(false);
  });

  // Slot order: header → body → footer
  it('should render slots in correct order: header → body → footer', () => {
    const wrapper = mount(Card, {
      slots: {
        header: 'Header',
        default: 'Body',
        footer: 'Footer',
      },
    });
    const children = wrapper.find('.px-card').element.children;
    expect(children[0].classList.contains('px-card__header')).toBe(true);
    expect(children[1].classList.contains('px-card__body')).toBe(true);
    expect(children[2].classList.contains('px-card__footer')).toBe(true);
  });

  // Hoverable
  it('should apply is-hoverable class when hoverable is true', () => {
    const wrapper = mount(Card, {
      props: { hoverable: true },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('is-hoverable');
  });

  it('should not apply is-hoverable class by default', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).not.toContain('is-hoverable');
  });

  // Shadow variants
  it('should apply shadow-always class by default', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('px-card--shadow-always');
  });

  it('should apply shadow-hover class when shadow is "hover"', () => {
    const wrapper = mount(Card, {
      props: { shadow: 'hover' },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('px-card--shadow-hover');
  });

  it('should apply shadow-never class when shadow is "never"', () => {
    const wrapper = mount(Card, {
      props: { shadow: 'never' },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('px-card--shadow-never');
  });

  // Boolean coercion
  it('should coerce shadow=true to shadow-always', () => {
    const wrapper = mount(Card, {
      props: { shadow: true },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('px-card--shadow-always');
  });

  it('should coerce shadow=false to shadow-never', () => {
    const wrapper = mount(Card, {
      props: { shadow: false },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('px-card--shadow-never');
  });

  // Size variants
  it('should apply px-card--small class when size is "small"', () => {
    const wrapper = mount(Card, {
      props: { size: 'small' },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('px-card--small');
  });

  it('should apply px-card--large class when size is "large"', () => {
    const wrapper = mount(Card, {
      props: { size: 'large' },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('px-card--large');
  });

  it('should not apply size class by default', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).not.toContain('px-card--small');
    expect(wrapper.find('.px-card').classes()).not.toContain('px-card--large');
  });

  // Empty card
  it('should render .px-card__body even with no slots', () => {
    const wrapper = mount(Card);
    expect(wrapper.find('.px-card__body').exists()).toBe(true);
  });
});

describe('Card type variants', () => {
  it('should apply type class when type prop is set', () => {
    const wrapper = mount(Card, {
      props: { type: 'primary' },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('px-card--primary');
  });

  it.each([
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ] as const)('should apply px-card--%s class for type="%s"', (type) => {
    const wrapper = mount(Card, {
      props: { type },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain(`px-card--${type}`);
  });

  it('should not apply any type class by default', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Body' },
    });
    const classes = wrapper.find('.px-card').classes();
    expect(classes).not.toContain('px-card--primary');
    expect(classes).not.toContain('px-card--success');
    expect(classes).not.toContain('px-card--info');
    expect(classes).not.toContain('px-card--warning');
    expect(classes).not.toContain('px-card--danger');
  });
});

describe('Card style variants', () => {
  it('should apply is-outline class when outline is true', () => {
    const wrapper = mount(Card, {
      props: { outline: true },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('is-outline');
  });

  it('should apply is-dash class when dash is true', () => {
    const wrapper = mount(Card, {
      props: { dash: true },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('is-dash');
  });

  it('should apply is-ghost class when ghost is true', () => {
    const wrapper = mount(Card, {
      props: { ghost: true },
      slots: { default: 'Body' },
    });
    expect(wrapper.find('.px-card').classes()).toContain('is-ghost');
  });

  it('should not apply variant classes by default', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Body' },
    });
    const classes = wrapper.find('.px-card').classes();
    expect(classes).not.toContain('is-outline');
    expect(classes).not.toContain('is-dash');
    expect(classes).not.toContain('is-ghost');
  });

  it('should combine type with outline', () => {
    const wrapper = mount(Card, {
      props: { type: 'primary', outline: true },
      slots: { default: 'Body' },
    });
    const classes = wrapper.find('.px-card').classes();
    expect(classes).toContain('px-card--primary');
    expect(classes).toContain('is-outline');
  });
});

describe('Card custom color', () => {
  it('should apply CSS variables when color prop is set', () => {
    const wrapper = mount(Card, {
      props: { color: '#8B5CF6' },
      slots: { default: 'Body' },
    });
    const style = wrapper.find('.px-card').attributes('style');
    expect(style).toContain('--px-card-bg-color');
  });

  it('should use outline template when color + outline', () => {
    const wrapper = mount(Card, {
      props: { color: '#8B5CF6', outline: true },
      slots: { default: 'Body' },
    });
    const style = wrapper.find('.px-card').attributes('style');
    expect(style).toContain('--px-card-bg-color: transparent');
  });

  it('should use ghost template when color + ghost', () => {
    const wrapper = mount(Card, {
      props: { color: '#8B5CF6', ghost: true },
      slots: { default: 'Body' },
    });
    const style = wrapper.find('.px-card').attributes('style');
    expect(style).toContain('--px-card-bg-color: transparent');
    expect(style).toContain('--px-card-border-color: transparent');
  });

  it('should use dash template when color + dash', () => {
    const wrapper = mount(Card, {
      props: { color: '#8B5CF6', dash: true },
      slots: { default: 'Body' },
    });
    const style = wrapper.find('.px-card').attributes('style');
    expect(style).toContain('--px-card-bg-color');
    expect(style).toContain('--px-card-border-color');
  });
});

describe('Card/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxCard.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxCard).toBe(Card);
  });

  it('should enhance Card component', () => {
    const enhancedCard = withInstall(Card);
    expect(enhancedCard).toBe(PxCard);
  });

  it('should apply specific enhance', () => {
    const enhancedCard = withInstall(Card);
    expect(enhancedCard).toHaveProperty('install');
  });
});
