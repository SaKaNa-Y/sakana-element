import { mount } from '@vue/test-utils';
import { describe, expect, it, test, vi } from 'vitest';
import Icon from '../Icon/Icon.vue';
import Button from './Button.vue';
import ButtonGroup from './ButtonGroup.vue';

describe('Button.vue', () => {
  // Props: type
  it('should has the correct type class when type prop is set', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as any },
      });
      expect(wrapper.classes()).toContain(`px-button--${type}`);
    });
  });

  // Props: size
  it('should has the correct size class when size prop is set', () => {
    const sizes = ['large', 'default', 'small'];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as any },
      });
      expect(wrapper.classes()).toContain(`px-button--${size}`);
    });
  });

  // Props: plain, round, circle
  it.each([
    ['plain', 'is-plain'],
    ['round', 'is-round'],
    ['circle', 'is-circle'],
    ['disabled', 'is-disabled'],
    ['loading', 'is-loading'],
    ['dash', 'is-dash'],
    ['ghost', 'is-ghost'],
    ['link', 'is-link'],
    ['block', 'is-block'],
    ['responsive', 'is-responsive'],
  ])('should has the correct class when prop %s is set to true', (prop, className) => {
    const wrapper = mount(Button, {
      props: { [prop]: true },
      global: {
        stubs: ['PxIcon'],
      },
    });
    expect(wrapper.classes()).toContain(className);
  });

  it('should has the correct native type attribute when native-type prop is set', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' },
    });
    expect(wrapper.element.tagName).toBe('BUTTON');
    expect((wrapper.element as any).type).toBe('submit');
  });

  // Test the click event with and without throttle
  it.each([
    ['withoutThrottle', false],
    ['withThrottle', true],
  ])('emits click event %s', async (_, useThrottle) => {
    const clickSpy = vi.fn();
    const wrapper = mount(() => (
      <Button
        onClick={clickSpy}
        {...{
          useThrottle,
          throttleDuration: 400,
        }}
      />
    ));

    await wrapper.get('button').trigger('click');
    await wrapper.get('button').trigger('click');
    await wrapper.get('button').trigger('click');
    expect(clickSpy).toBeCalledTimes(useThrottle ? 1 : 3);
  });

  // Props: tag
  it('should renders the custom tag when tag prop is set', () => {
    const wrapper = mount(Button, {
      props: { tag: 'a' },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe('a');
  });

  it('should warn and fallback for invalid tag', () => {
    const wrapper = mount(Button, {
      props: { tag: 'iframe' as any },
    });
    // debugWarn is called but is a no-op; verify fallback to 'button'
    expect(wrapper.element.tagName.toLowerCase()).toBe('button');
  });

  // Events: click
  it('should emits a click event when the button is clicked', async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toHaveLength(1);
  });

  // Exception Handling: loading state
  it('should display loading icon and not emit click event when button is loading', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      global: {
        stubs: ['PxIcon'],
      },
    });
    const iconElement = wrapper.findComponent(Icon);

    expect(wrapper.find('.loading-icon').exists()).toBe(true);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes('icon')).toBe('loader');
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  test('loading button', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: {
        default: 'loading button',
      },
      global: {
        stubs: ['PxIcon'],
      },
    });

    // class
    expect(wrapper.classes()).toContain('is-loading');

    // attrs
    expect(wrapper.attributes('disabled')).toBeDefined();
    expect(wrapper.find('button').element.disabled).toBeTruthy();

    // events
    wrapper.get('button').trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');

    // icon
    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes('icon')).toBe('loader');
  });

  test('icon button', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up',
      },
      slots: {
        default: 'icon button',
      },
      global: {
        stubs: ['PxIcon'],
      },
    });

    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes('icon')).toBe('arrow-up');
  });
  // Props: color (custom color styles)
  it('should apply custom color style variables when color prop is set', () => {
    const wrapper = mount(Button, {
      props: { color: '#626aef' },
    });
    const style = wrapper.attributes('style');
    expect(style).toContain('--px-button-bg-color');
    expect(style).toContain('--px-button-text-color');
    expect(style).toContain('--px-button-border-color');
    expect(style).toContain('--px-button-hover-bg-color');
    expect(style).toContain('--px-button-active-bg-color');
    expect(style).toContain('--px-button-disabled-bg-color');
  });

  it('should apply plain color style variables when color and plain props are set', () => {
    const wrapper = mount(Button, {
      props: { color: '#626aef', plain: true },
    });
    const style = wrapper.attributes('style');
    expect(style).toContain('--px-button-text-color');
    expect(style).toContain('--px-button-bg-color');
    expect(style).toContain('--px-button-hover-text-color');
    expect(style).toContain('--px-button-hover-bg-color');
    expect(style).toContain('--px-button-disabled-text-color');
  });

  it('should use white text for dark background color', () => {
    const wrapper = mount(Button, {
      props: { color: '#000000' },
    });
    const style = wrapper.attributes('style');
    expect(style).toContain('#ffffff');
  });

  it('should use dark text for light background color', () => {
    const wrapper = mount(Button, {
      props: { color: '#ffffff' },
    });
    const style = wrapper.attributes('style');
    expect(style).toContain('#1e1e2e');
  });

  it('should not apply custom color styles when color prop is not set', () => {
    const wrapper = mount(Button);
    const style = wrapper.attributes('style') ?? '';
    expect(style).not.toContain('--px-button-bg-color');
  });

  // Props: autofocus
  it('should set autofocus attribute', () => {
    const wrapper = mount(Button, {
      props: { autofocus: true },
    });
    expect(wrapper.attributes('autofocus')).toBeDefined();
  });

  // Props: loadingIcon
  it('should use custom loading icon when loadingIcon prop is set', () => {
    const wrapper = mount(Button, {
      props: { loading: true, loadingIcon: 'check' },
      global: {
        stubs: ['PxIcon'],
      },
    });
    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.attributes('icon')).toBe('check');
  });

  // Props: dash
  it('should apply is-dash class when dash prop is set', () => {
    const wrapper = mount(Button, {
      props: { dash: true },
    });
    expect(wrapper.classes()).toContain('is-dash');
  });

  it('should combine dash with type correctly', () => {
    const wrapper = mount(Button, {
      props: { dash: true, type: 'primary' },
    });
    expect(wrapper.classes()).toContain('is-dash');
    expect(wrapper.classes()).toContain('px-button--primary');
  });

  // Props: ghost
  it('should apply is-ghost class when ghost prop is set', () => {
    const wrapper = mount(Button, {
      props: { ghost: true },
    });
    expect(wrapper.classes()).toContain('is-ghost');
  });

  it('should combine ghost with type correctly', () => {
    const wrapper = mount(Button, {
      props: { ghost: true, type: 'primary' },
    });
    expect(wrapper.classes()).toContain('is-ghost');
    expect(wrapper.classes()).toContain('px-button--primary');
  });

  it('should allow dash and ghost to coexist', () => {
    const wrapper = mount(Button, {
      props: { dash: true, ghost: true },
    });
    expect(wrapper.classes()).toContain('is-dash');
    expect(wrapper.classes()).toContain('is-ghost');
  });

  // Props: link
  it('should apply is-link class when link prop is set', () => {
    const wrapper = mount(Button, {
      props: { link: true },
    });
    expect(wrapper.classes()).toContain('is-link');
  });

  it('should combine link with type correctly', () => {
    const wrapper = mount(Button, {
      props: { link: true, type: 'primary' },
    });
    expect(wrapper.classes()).toContain('is-link');
    expect(wrapper.classes()).toContain('px-button--primary');
  });

  it('should render text correctly with link variant', () => {
    const wrapper = mount(Button, {
      props: { link: true },
      slots: { default: 'Click me' },
    });
    expect(wrapper.text()).toBe('Click me');
    expect(wrapper.classes()).toContain('is-link');
  });

  // Props: block
  it('should apply is-block class when block prop is set', () => {
    const wrapper = mount(Button, {
      props: { block: true },
    });
    expect(wrapper.classes()).toContain('is-block');
  });

  it('should combine block with type correctly', () => {
    const wrapper = mount(Button, {
      props: { block: true, type: 'primary' },
    });
    expect(wrapper.classes()).toContain('is-block');
    expect(wrapper.classes()).toContain('px-button--primary');
  });

  // Props: responsive
  it('should apply is-responsive class when responsive prop is set', () => {
    const wrapper = mount(Button, {
      props: { responsive: true },
    });
    expect(wrapper.classes()).toContain('is-responsive');
  });

  it('should combine responsive with type correctly', () => {
    const wrapper = mount(Button, {
      props: { responsive: true, type: 'primary' },
    });
    expect(wrapper.classes()).toContain('is-responsive');
    expect(wrapper.classes()).toContain('px-button--primary');
  });

  // Default button hover contract
  it('should not have a type class when no type is specified', () => {
    const wrapper = mount(Button);
    const classes = wrapper.classes();
    expect(classes).not.toContain('px-button--primary');
    expect(classes).not.toContain('px-button--success');
    expect(classes).not.toContain('px-button--warning');
    expect(classes).not.toContain('px-button--danger');
    expect(classes).not.toContain('px-button--info');
  });

  // Props: link + color (custom color support)
  it('should apply link color style variables when link and color props are set', () => {
    const wrapper = mount(Button, {
      props: { link: true, color: '#626aef' },
    });
    const style = wrapper.attributes('style');
    expect(style).toContain('--px-button-text-color');
    expect(style).toContain('--px-button-bg-color: transparent');
    expect(style).toContain('--px-button-border-color: transparent');
  });

  // Login button tests (icon + color)
  it('should render correctly with github icon and brand color', () => {
    const wrapper = mount(Button, {
      props: { icon: 'github', color: '#24292f' },
      slots: { default: 'Login with GitHub' },
      global: {
        stubs: ['PxIcon'],
      },
    });
    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes('icon')).toBe('github');
    const style = wrapper.attributes('style');
    expect(style).toContain('--px-button-bg-color');
  });

  it('should render correctly with mail icon and brand color', () => {
    const wrapper = mount(Button, {
      props: { icon: 'mail', color: '#000000' },
      slots: { default: 'Login with Email' },
      global: {
        stubs: ['PxIcon'],
      },
    });
    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes('icon')).toBe('mail');
    const style = wrapper.attributes('style');
    expect(style).toContain('--px-button-bg-color');
  });

  // Props: ghost + color (custom color support)
  it('should apply ghost color style variables when ghost and color props are set', () => {
    const wrapper = mount(Button, {
      props: { ghost: true, color: '#626aef' },
    });
    const style = wrapper.attributes('style');
    expect(style).toContain('--px-button-text-color');
    expect(style).toContain('--px-button-bg-color: transparent');
    expect(style).toContain('--px-button-border-color: transparent');
  });

  // Props: dash + color (custom color support)
  it('should apply dash color style variables when dash and color props are set', () => {
    const wrapper = mount(Button, {
      props: { dash: true, color: '#626aef' },
    });
    const style = wrapper.attributes('style');
    expect(style).toContain('--px-button-text-color');
    expect(style).toContain('--px-button-border-color');
    expect(style).toContain('--px-button-shadow-color: transparent');
  });
});

describe('ButtonGroup.vue', () => {
  test('basic button group', async () => {
    const wrapper = mount(() => (
      <ButtonGroup>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    expect(wrapper.classes()).toContain('px-button-group');
  });

  test('button group size', () => {
    const sizes = ['large', 'default', 'small'];
    sizes.forEach((size) => {
      const wrapper = mount(() => (
        <ButtonGroup size={size as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`px-button--${size}`);
    });
  });

  test('button group type', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'];
    types.forEach((type) => {
      const wrapper = mount(() => (
        <ButtonGroup type={type as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`px-button--${type}`);
    });
  });

  test('button group disabled', () => {
    const wrapper = mount(() => (
      <ButtonGroup disabled>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    const buttonWrapper = wrapper.findComponent(Button);
    expect(buttonWrapper.classes()).toContain(`is-disabled`);
  });
});
