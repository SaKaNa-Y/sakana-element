import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { nextTick, ref } from 'vue';
import Collapsible from './Collapsible.vue';
import CollapsibleContent from './CollapsibleContent.vue';
import CollapsibleTrigger from './CollapsibleTrigger.vue';
import { PxCollapsible, PxCollapsibleContent, PxCollapsibleTrigger } from './index';

const mountCollapsible = (props = {}, slots = {}) =>
  mount(Collapsible, {
    props,
    slots: {
      default: () => (
        <>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content here</CollapsibleContent>
        </>
      ),
      ...slots,
    },
  });

/** The v-show is on the wrapper element */
const findContentWrapper = (w: ReturnType<typeof mount>) =>
  w.find('.px-collapsible-content__wrapper');

/**
 * Check visibility via display style.
 * In browser mode with transition-stub, isVisible() can be unreliable.
 */
const isContentHidden = (w: ReturnType<typeof mount>) =>
  findContentWrapper(w).attributes('style')?.includes('display: none');

describe('Collapsible.vue', () => {
  it('should render .px-collapsible wrapper', () => {
    const wrapper = mountCollapsible();
    expect(wrapper.find('.px-collapsible').exists()).toBe(true);
  });

  it('should render trigger with role="button"', () => {
    const wrapper = mountCollapsible();
    const trigger = wrapper.find('.px-collapsible-trigger');
    expect(trigger.exists()).toBe(true);
    expect(trigger.attributes('role')).toBe('button');
  });

  it('should hide content by default', () => {
    const wrapper = mountCollapsible();
    expect(isContentHidden(wrapper)).toBe(true);
  });

  it('should toggle content visibility on trigger click', async () => {
    const wrapper = mountCollapsible();
    const trigger = wrapper.find('.px-collapsible-trigger');

    await trigger.trigger('click');
    expect(isContentHidden(wrapper)).toBeFalsy();

    await trigger.trigger('click');
    expect(isContentHidden(wrapper)).toBe(true);
  });

  it('should support defaultOpen prop', () => {
    const wrapper = mountCollapsible({ defaultOpen: true });
    // When defaultOpen=true, data-state should be open
    expect(wrapper.find('.px-collapsible').attributes('data-state')).toBe('open');
    expect(isContentHidden(wrapper)).toBeFalsy();
  });

  it('should support v-model (controlled mode)', async () => {
    const modelValue = ref(false);
    const wrapper = mount(Collapsible, {
      props: {
        modelValue: modelValue.value,
        'onUpdate:modelValue': (val: boolean) => {
          modelValue.value = val;
        },
      },
      slots: {
        default: () => (
          <>
            <CollapsibleTrigger>Toggle</CollapsibleTrigger>
            <CollapsibleContent>Content</CollapsibleContent>
          </>
        ),
      },
    });

    // Click to open
    await wrapper.find('.px-collapsible-trigger').trigger('click');
    expect(modelValue.value).toBe(true);
  });

  it('should sync open state when modelValue prop changes', async () => {
    const wrapper = mountCollapsible({ modelValue: false });

    await wrapper.setProps({ modelValue: true });
    await nextTick();

    expect(isContentHidden(wrapper)).toBeFalsy();
  });

  it('should prevent toggling when disabled', async () => {
    const wrapper = mountCollapsible({ disabled: true });
    const trigger = wrapper.find('.px-collapsible-trigger');

    await trigger.trigger('click');
    expect(isContentHidden(wrapper)).toBe(true);
  });

  it('should add is-disabled class when disabled', () => {
    const wrapper = mountCollapsible({ disabled: true });
    expect(wrapper.find('.px-collapsible').classes()).toContain('is-disabled');
  });

  it('should set tabindex=-1 on trigger when disabled', () => {
    const wrapper = mountCollapsible({ disabled: true });
    const trigger = wrapper.find('.px-collapsible-trigger');
    expect(trigger.attributes('tabindex')).toBe('-1');
  });

  it('should emit update:modelValue and change events on toggle', async () => {
    const wrapper = mountCollapsible();
    const trigger = wrapper.find('.px-collapsible-trigger');

    await trigger.trigger('click');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);
    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('change')![0]).toEqual([true]);
  });

  it('should set aria-expanded on trigger', async () => {
    const wrapper = mountCollapsible();
    const trigger = wrapper.find('.px-collapsible-trigger');

    expect(trigger.attributes('aria-expanded')).toBe('false');

    await trigger.trigger('click');
    expect(trigger.attributes('aria-expanded')).toBe('true');
  });

  it('should link trigger aria-controls to content id', () => {
    const wrapper = mountCollapsible();
    const trigger = wrapper.find('.px-collapsible-trigger');
    const contentWrapper = findContentWrapper(wrapper);

    const ariaControls = trigger.attributes('aria-controls');
    const contentId = contentWrapper.attributes('id');

    expect(ariaControls).toBeTruthy();
    expect(contentId).toBeTruthy();
    expect(ariaControls).toBe(contentId);
  });

  it('should toggle on Enter key', async () => {
    const wrapper = mountCollapsible();
    const trigger = wrapper.find('.px-collapsible-trigger');

    await trigger.trigger('keydown', { key: 'Enter' });
    expect(isContentHidden(wrapper)).toBeFalsy();
  });

  it('should toggle on Space key', async () => {
    const wrapper = mountCollapsible();
    const trigger = wrapper.find('.px-collapsible-trigger');

    await trigger.trigger('keydown', { key: ' ' });
    expect(isContentHidden(wrapper)).toBeFalsy();
  });

  it('should not toggle on other keys', async () => {
    const wrapper = mountCollapsible();
    const trigger = wrapper.find('.px-collapsible-trigger');

    await trigger.trigger('keydown', { key: 'a' });
    expect(isContentHidden(wrapper)).toBe(true);
  });

  it('should set data-state attribute on root and trigger', async () => {
    const wrapper = mountCollapsible();

    expect(wrapper.find('.px-collapsible').attributes('data-state')).toBe('closed');
    expect(wrapper.find('.px-collapsible-trigger').attributes('data-state')).toBe('closed');
    expect(findContentWrapper(wrapper).attributes('data-state')).toBe('closed');

    await wrapper.find('.px-collapsible-trigger').trigger('click');

    expect(wrapper.find('.px-collapsible').attributes('data-state')).toBe('open');
    expect(wrapper.find('.px-collapsible-trigger').attributes('data-state')).toBe('open');
    expect(findContentWrapper(wrapper).attributes('data-state')).toBe('open');
  });

  it('should add preset color class for known color names', () => {
    const wrapper = mountCollapsible({ color: 'primary' });
    expect(wrapper.find('.px-collapsible').classes()).toContain('px-collapsible--primary');
  });

  it('should add CSS variables for custom hex color', () => {
    const wrapper = mountCollapsible({ color: '#ff5500' });
    const style = wrapper.find('.px-collapsible').attributes('style') ?? '';
    expect(style).toContain('--px-collapsible-');
    expect(wrapper.find('.px-collapsible').classes()).not.toContain('px-collapsible--#ff5500');
  });

  it('should add is-ghost class when ghost prop is set', () => {
    const wrapper = mountCollapsible({ ghost: true });
    expect(wrapper.find('.px-collapsible').classes()).toContain('is-ghost');
  });

  it('should set data-disabled on trigger when disabled', () => {
    const wrapper = mountCollapsible({ disabled: true });
    const trigger = wrapper.find('.px-collapsible-trigger');
    expect(trigger.attributes('data-disabled')).toBeDefined();
  });

  it('should have content wrapper with role="region"', () => {
    const wrapper = mountCollapsible();
    const contentWrapper = findContentWrapper(wrapper);
    expect(contentWrapper.attributes('role')).toBe('region');
  });

  it('should have PxCollapsible.install defined (withInstall)', () => {
    expect(PxCollapsible.install).toBeDefined();
    expect(typeof PxCollapsible.install).toBe('function');
  });

  it('should have PxCollapsibleTrigger.install defined (withInstall)', () => {
    expect(PxCollapsibleTrigger.install).toBeDefined();
    expect(typeof PxCollapsibleTrigger.install).toBe('function');
  });

  it('should have PxCollapsibleContent.install defined (withInstall)', () => {
    expect(PxCollapsibleContent.install).toBeDefined();
    expect(typeof PxCollapsibleContent.install).toBe('function');
  });

  it('should expose toggle method', async () => {
    const wrapper = mountCollapsible();
    const vm = wrapper.vm as unknown as { toggle: () => void };

    expect(typeof vm.toggle).toBe('function');

    // Toggle programmatically
    vm.toggle();
    await nextTick();

    expect(isContentHidden(wrapper)).toBeFalsy();
  });

  it('should support preset color variants', () => {
    const colors = ['primary', 'success', 'warning', 'danger', 'info'];
    for (const color of colors) {
      const wrapper = mountCollapsible({ color });
      expect(wrapper.find('.px-collapsible').classes()).toContain(`px-collapsible--${color}`);
    }
  });
});
