import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

describe('Breadcrumb.vue', () => {
  describe('Structure', () => {
    test('renders .px-breadcrumb wrapper with <nav> and <ol>', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      expect(wrapper.find('.px-breadcrumb').exists()).toBe(true);
      expect(wrapper.find('nav').exists()).toBe(true);
      expect(wrapper.find('ol.px-breadcrumb__list').exists()).toBe(true);
    });

    test('renders multiple items as <li> elements', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Products</BreadcrumbItem>
            <BreadcrumbItem>Current</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const items = wrapper.findAll('li.px-breadcrumb__item');
      expect(items.length).toBe(3);
    });
  });

  describe('Separator', () => {
    test('default separator is "/"', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Products</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const separators = wrapper.findAll('.px-breadcrumb__separator');
      expect(separators[0].text()).toBe('/');
    });

    test('custom separator via separator prop', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb separator=">">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Products</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const separators = wrapper.findAll('.px-breadcrumb__separator');
      expect(separators[0].text()).toBe('>');
    });

    test('custom separator via #separator slot', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            {{
              default: () => [
                <BreadcrumbItem>Home</BreadcrumbItem>,
                <BreadcrumbItem>Products</BreadcrumbItem>,
              ],
              separator: () => <span class="custom-sep">»</span>,
            }}
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      expect(wrapper.find('.custom-sep').exists()).toBe(true);
      expect(wrapper.find('.custom-sep').text()).toBe('»');
    });
  });

  describe('Links', () => {
    test('item with to prop renders <a> tag', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/home">Home</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const link = wrapper.find('a.px-breadcrumb__link');
      expect(link.exists()).toBe(true);
      expect(link.attributes('href')).toBe('/home');
    });

    test('item without to prop renders <span>', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem>Current</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      expect(wrapper.find('a.px-breadcrumb__link').exists()).toBe(false);
      expect(wrapper.find('span.px-breadcrumb__link').exists()).toBe(true);
    });

    test('last item has is-current class', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/home">Home</BreadcrumbItem>
            <BreadcrumbItem>Current</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const items = wrapper.findAll('.px-breadcrumb__item');
      expect(items[items.length - 1].find('.px-breadcrumb__link').classes()).toContain(
        'is-current',
      );
    });
  });

  describe('Icons', () => {
    test('renders <px-icon> when icon prop is set on BreadcrumbItem', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem icon="home">Home</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const icon = wrapper.find('px-icon-stub');
      expect(icon.exists()).toBe(true);
      expect(icon.attributes('icon')).toBe('home');
    });
  });

  describe('Provide/Inject', () => {
    test('separator from parent is injected into child items', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb separator="→">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Products</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const separators = wrapper.findAll('.px-breadcrumb__separator');
      expect(separators[0].text()).toBe('→');
    });
  });

  describe('Disabled', () => {
    test('disabled item has is-disabled class on <li>', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/home" disabled>
              Home
            </BreadcrumbItem>
            <BreadcrumbItem>Current</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const items = wrapper.findAll('.px-breadcrumb__item');
      expect(items[0].classes()).toContain('is-disabled');
      expect(items[1].classes()).not.toContain('is-disabled');
    });

    test('disabled link has is-disabled class', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/home" disabled>
              Home
            </BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const link = wrapper.find('.px-breadcrumb__link');
      expect(link.classes()).toContain('is-disabled');
    });

    test('disabled item with to prop renders <span> not <a>', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/home" disabled>
              Home
            </BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const link = wrapper.find('.px-breadcrumb__link');
      expect(link.element.tagName).toBe('SPAN');
      expect(link.attributes('href')).toBeUndefined();
    });
  });

  describe('Click prevention', () => {
    test('link prevents default navigation', () => {
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/home">Home</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      const link = wrapper.find('a.px-breadcrumb__link');
      const event = new MouseEvent('click', { cancelable: true, bubbles: true });
      link.element.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(true);
    });

    test('link click still fires parent click handler', () => {
      const handler = vi.fn();
      const wrapper = mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/home" onClick={handler}>
              Home
            </BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          global: { stubs: ['PxIcon'] },
          attachTo: document.body,
        },
      );

      wrapper.find('a.px-breadcrumb__link').trigger('click');
      expect(handler).toHaveBeenCalled();
    });
  });
});
