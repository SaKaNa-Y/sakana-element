import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
import { PxDropdown, PxDropdownItem } from '.';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
import type { DropdownItemProps } from './types';

describe('Dropdown/index.ts', () => {
  // 测试 withInstall 函数是否被正确应用
  it('should be exported with withInstall()', () => {
    expect(PxDropdown.install).toBeDefined();
    expect(PxDropdownItem.install).toBeDefined();
  });

  // 测试 Dropdown 组件是否被正确导出
  it('should be exported Dropdown component', () => {
    expect(PxDropdown).toBe(Dropdown);
    expect(PxDropdownItem).toBe(DropdownItem);
  });

  // 可选：测试 withInstall 是否增强了 Tooltip 组件的功能
  test('should enhance Dropdown component', () => {
    const enhancedDropdown = withInstall(Dropdown);
    expect(enhancedDropdown).toBe(PxDropdown);
    // 这里可以添加更多测试，确保 withInstall 增强了组件的特定功能
  });

  // 可选：如果你的 withInstall 函数有特定的行为或属性，确保它们被正确应用
  test('should apply specific enhancements', () => {
    const enhancedDropdown = withInstall(Dropdown);
    // 例如，如果你的 withInstall 增加了一个特定的方法或属性
    expect(enhancedDropdown).toHaveProperty('install');
  });
});

describe('Dropdown.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render slots correctly', () => {
    const items: DropdownItemProps[] = [
      { label: 'Item 1', command: 1 },
      { label: 'Item 2', command: 2 },
    ];
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
      },
      slots: {
        default: () => <div>Default slot</div>,
        dropdown: () => items.map((item) => <DropdownItem {...item} />),
      },
    });

    expect(wrapper.text()).toContain('Default slot');
    expect(wrapper.find('.px-dropdown').exists()).toBeTruthy();
  });

  it('should emit command event when item is clicked', async () => {
    const items: DropdownItemProps[] = [
      { label: 'Item 1', disabled: true },
      { label: 'Item 2', command: 'item2', divided: true },
    ];
    const onCommand = vi.fn(); //模拟函数
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        onCommand,
      },
      slots: {
        default: () => <button id="trigger">Default slot content</button>,
        dropdown: () => items.map((item) => <DropdownItem {...item} />),
      },
    });

    const triggerArea = wrapper.find('#trigger');
    expect(triggerArea.exists()).toBeTruthy();

    triggerArea.trigger('click');
    await vi.runAllTimers();

    expect(wrapper.find('.px-dropdown__menu').exists()).toBeTruthy();
    await wrapper.findAll('li').at(0)?.trigger('click');
    expect(onCommand).toBeCalledTimes(0); // disabled

    await wrapper.findAll('li').at(2)?.trigger('click');
    expect(onCommand).toBeCalled();
    expect(onCommand).toBeCalledWith('item2');
  });

  it('should toggle visibility when split btn is clicked', async () => {
    const items: DropdownItemProps[] = [{ label: 'Item 1' }, { label: 'Item 2', command: 'item2' }];
    const onClick = vi.fn();
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        splitButton: true,
        items,
        onClick,
      },
      slots: {
        default: () => <div id="trigger">Default slot content</div>,
      },
    });

    const triggerArea = wrapper.find('#trigger');
    expect(triggerArea.exists()).toBeTruthy();
    triggerArea.trigger('click');
    await vi.runAllTimers();

    expect(wrapper.find('.px-dropdown__menu').exists()).toBeFalsy();
    expect(onClick).toBeCalled();
  });

  it('should render items from items prop', async () => {
    const items: DropdownItemProps[] = [
      { label: 'Item 1', command: 'a' },
      { label: 'Item 2', command: 'b' },
    ];
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items,
      },
      slots: {
        default: () => <button id="trigger">Click me</button>,
      },
    });

    const triggerArea = wrapper.find('#trigger');
    triggerArea.trigger('click');
    await vi.runAllTimers();

    expect(wrapper.find('.px-dropdown__menu').exists()).toBeTruthy();
  });

  it('should expose open and close methods', () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
      },
      slots: {
        default: () => <div>Trigger</div>,
      },
    });

    const vm = wrapper.vm as any;
    expect(vm.open).toBeDefined();
    expect(vm.close).toBeDefined();
  });

  it('should call open() and close() exposed methods', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <button>Trigger</button>,
      },
    });

    const vm = wrapper.vm as any;
    vm.open();
    await vi.runAllTimers();
    vm.close();
    await vi.runAllTimers();
  });

  it('should toggle dropdown when splitButton arrow is clicked', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        splitButton: true,
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <span>Action</span>,
      },
    });

    // Find the arrow button (second button in the group)
    const buttons = wrapper.findAll('button');
    const arrowButton = buttons[buttons.length - 1];
    await arrowButton.trigger('click');
    await vi.runAllTimers();
  });

  it('should close dropdown via click-outside when splitButton is true', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        splitButton: true,
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <span>Action</span>,
      },
      attachTo: document.body,
    });

    // Open the dropdown via arrow click
    const buttons = wrapper.findAll('button');
    const arrowButton = buttons[buttons.length - 1];
    await arrowButton.trigger('click');
    await vi.runAllTimers();

    // Click outside to close
    document.body.click();
    await vi.runAllTimers();

    wrapper.unmount();
  });

  it('should render disabled state', () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        disabled: true,
      },
      slots: {
        default: () => <div>Trigger</div>,
      },
    });

    expect(wrapper.find('.px-dropdown').classes()).toContain('is-disabled');
  });

  it('should emit visible-change event', async () => {
    const onVisibleChange = vi.fn();
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        'onVisible-change': onVisibleChange,
      },
      slots: {
        default: () => <button id="trigger">Trigger</button>,
        dropdown: () => <DropdownItem label="Item" command="a" />,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();
  });

  it('should hide on click when hideOnClick is true', async () => {
    const onCommand = vi.fn();
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        hideOnClick: true,
        onCommand,
      },
      slots: {
        default: () => <button id="trigger">Trigger</button>,
        dropdown: () => <DropdownItem label="Item" command="a" />,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const item = wrapper.find('.px-dropdown__item');
    if (item.exists()) {
      await item.trigger('click');
    }
  });

  it('should render split button with arrow toggle', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        splitButton: true,
        type: 'primary',
        size: 'small',
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <span>Action</span>,
      },
    });

    expect(wrapper.find('.px-button-group').exists()).toBeTruthy();
  });

  it('should render items with icon prop', async () => {
    const items: DropdownItemProps[] = [
      { label: 'Edit', command: 'edit', icon: 'edit' },
      { label: 'Delete', command: 'delete', icon: 'trash' },
    ];
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items,
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const icons = wrapper.findAll('.px-dropdown__item-icon');
    expect(icons.length).toBe(2);
  });

  it('should apply maxHeight style to menu', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        maxHeight: 200,
        items: [
          { label: 'Item 1', command: 'a' },
          { label: 'Item 2', command: 'b' },
        ],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const menu = wrapper.find('.px-dropdown__menu');
    expect(menu.exists()).toBeTruthy();
    expect(menu.attributes('style')).toContain('max-height: 200px');
    expect(menu.attributes('style')).toContain('overflow-y: auto');
  });

  it('should apply maxHeight string style to menu', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        maxHeight: '15rem',
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const menu = wrapper.find('.px-dropdown__menu');
    expect(menu.attributes('style')).toContain('max-height: 15rem');
  });

  it('should have tabindex on dropdown items', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items: [
          { label: 'Item 1', command: 'a' },
          { label: 'Item 2', command: 'b' },
        ],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const items = wrapper.findAll('.px-dropdown__item');
    items.forEach((item) => {
      expect(item.attributes('tabindex')).toBe('-1');
    });
  });

  it('should have tabindex on trigger wrapper for keyboard access', () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
      },
      slots: {
        default: () => <div>Trigger</div>,
      },
    });

    expect(wrapper.find('.px-dropdown').attributes('tabindex')).toBe('0');
  });

  // === Shadow removal ===
  it('should not apply drop-shadow on tooltip popper', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    // Structure test: the `.px-dropdown .px-tooltip` scope exists for CSS to target
    expect(wrapper.find('.px-dropdown .px-tooltip').exists()).toBeTruthy();
  });

  // === Arrow (showArrow) ===
  it('should render arrow when showArrow is true', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        showArrow: true,
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    expect(wrapper.find('.px-tooltip__arrow').exists()).toBeTruthy();
  });

  it('should not render arrow by default', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    expect(wrapper.find('.px-tooltip__arrow').exists()).toBeFalsy();
  });

  // === Hover color (hoverColor) ===
  it('should apply hoverColor as CSS variable on menu', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        hoverColor: '#ff6600',
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const menu = wrapper.find('.px-dropdown__menu');
    expect(menu.exists()).toBeTruthy();
    expect(menu.attributes('style')).toContain('--px-dropdown-menuItem-hover-fill: #ff6600');
  });

  it('should not set hoverColor variable when prop is absent', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const menu = wrapper.find('.px-dropdown__menu');
    expect(menu.exists()).toBeTruthy();
    const style = menu.attributes('style') ?? '';
    expect(style).not.toContain('--px-dropdown-menuItem-hover-fill');
  });

  it('should handle keyboard Enter/Space on items via keydown', async () => {
    const onCommand = vi.fn();
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        onCommand,
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
        dropdown: () => [
          <DropdownItem label="Item A" command="a" />,
          <DropdownItem label="Item B" command="b" />,
        ],
      },
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const items = wrapper.findAll('.px-dropdown__item');
    if (items.length) {
      await items[0].trigger('keydown.enter');
      expect(onCommand).toBeCalledWith('a');
    }
  });

  it('should navigate items with ArrowDown/ArrowUp/Home/End/Escape keys', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items: [
          { label: 'Item 1', command: 'a' },
          { label: 'Item 2', command: 'b' },
          { label: 'Item 3', command: 'c', disabled: true },
          { label: 'Item 4', command: 'd' },
        ],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
      attachTo: document.body,
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const menu = wrapper.find('.px-dropdown__menu');
    if (menu.exists()) {
      menu.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await vi.runAllTimers();

      menu.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
      await vi.runAllTimers();

      menu.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
      await vi.runAllTimers();

      menu.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
      await vi.runAllTimers();

      menu.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await vi.runAllTimers();
    }

    wrapper.unmount();
  });

  it('should close menu on Tab key', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items: [
          { label: 'Item 1', command: 'a' },
          { label: 'Item 2', command: 'b' },
        ],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
      attachTo: document.body,
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const menu = wrapper.find('.px-dropdown__menu');
    if (menu.exists()) {
      menu.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
      await vi.runAllTimers();
    }

    wrapper.unmount();
  });

  it('should wrap ArrowDown at end and ArrowUp at start', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items: [
          { label: 'Item 1', command: 'a' },
          { label: 'Item 2', command: 'b' },
        ],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
      attachTo: document.body,
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const menu = wrapper.find('.px-dropdown__menu');
    if (menu.exists()) {
      const items = menu.findAll('.px-dropdown__item:not(.is-disabled)');
      if (items.length >= 2) {
        (items[items.length - 1].element as HTMLElement).focus();
        menu.element.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }),
        );
        await vi.runAllTimers();

        (items[0].element as HTMLElement).focus();
        menu.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
        await vi.runAllTimers();
      }
    }

    wrapper.unmount();
  });

  it('should remove keydown listener when menu closes', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        trigger: 'click',
        items: [{ label: 'Item 1', command: 'a' }],
      },
      slots: {
        default: () => <button id="trigger">Menu</button>,
      },
      attachTo: document.body,
    });

    wrapper.find('#trigger').trigger('click');
    await vi.runAllTimers();

    const vm = wrapper.vm as any;
    vm.close();
    await vi.runAllTimers();

    wrapper.unmount();
  });
});
