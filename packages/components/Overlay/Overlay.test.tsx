import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Overlay from './Overlay.vue';

describe('Overlay.vue', () => {
  it('should render with mask by default', () => {
    const wrapper = mount(Overlay);
    expect(wrapper.find('.px-overlay').exists()).toBeTruthy();
  });

  it('should not render mask class when mask is false', () => {
    const wrapper = mount(Overlay, {
      props: { mask: false },
    });
    expect(wrapper.find('.px-overlay').exists()).toBeFalsy();
  });

  it('should emit click event when clicked', async () => {
    const wrapper = mount(Overlay);
    await wrapper.find('.px-overlay').trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('should apply custom z-index', () => {
    const wrapper = mount(Overlay, {
      props: { zIndex: 3000 },
    });
    expect(wrapper.find('.px-overlay').attributes('style')).toContain(
      'z-index: 3000'
    );
  });

  it('should apply overlay class', () => {
    const wrapper = mount(Overlay, {
      props: { overlayClass: 'custom-overlay' },
    });
    expect(wrapper.find('.px-overlay').classes()).toContain('custom-overlay');
  });

  it('should render slot content', () => {
    const wrapper = mount(Overlay, {
      slots: {
        default: '<div class="test-content">Hello</div>',
      },
    });
    expect(wrapper.find('.test-content').exists()).toBeTruthy();
    expect(wrapper.find('.test-content').text()).toBe('Hello');
  });

  it('should render fixed positioning when mask is false', () => {
    const wrapper = mount(Overlay, {
      props: { mask: false, zIndex: 5000 },
    });
    const div = wrapper.find('div');
    const style = div.attributes('style');
    expect(style).toContain('position: fixed');
    expect(style).toContain('z-index: 5000');
  });
});
