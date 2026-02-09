import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { h } from 'vue';
import { RenderVnode } from '..';

describe('utils/RenderVnode', () => {
  it('should render a string vNode as text content', () => {
    const wrapper = mount(RenderVnode, {
      props: { vNode: 'hello world' },
    });
    expect(wrapper.text()).toBe('hello world');
  });

  it('should render a VNode object', () => {
    const vnode = h('span', { class: 'test' }, 'content');
    const wrapper = mount(RenderVnode, {
      props: { vNode: vnode },
    });
    expect(wrapper.find('span.test').exists()).toBe(true);
    expect(wrapper.find('span.test').text()).toBe('content');
  });

  it('should render a function vNode by calling it', () => {
    const vnodeFn = () => h('em', 'dynamic');
    const wrapper = mount(RenderVnode, {
      props: { vNode: vnodeFn },
    });
    expect(wrapper.find('em').exists()).toBe(true);
    expect(wrapper.find('em').text()).toBe('dynamic');
  });
});
