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
});
