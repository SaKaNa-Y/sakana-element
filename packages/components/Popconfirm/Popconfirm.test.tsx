import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { each, get } from 'lodash-es';
import { afterEach, beforeEach, describe, expect, it, test, vi } from 'vitest';
import { PxPopconfirm } from '.';
import PopConfirm from './Popconfirm.vue';
import type { PopconfirmProps } from './types';

const onConfirm = vi.fn();
const onCancel = vi.fn();

describe('Popconfirm/index.ts', () => {
  // 测试 withInstall 函数是否被正确应用
  it('should be exported with withInstall()', () => {
    expect(PxPopconfirm.install).toBeDefined();
  });

  // 测试 Popconfirm 组件是否被正确导出
  it('should be exported Popconfirm component', () => {
    expect(PxPopconfirm).toBe(PopConfirm);
  });

  // 可选：测试 withInstall 是否增强了 Popconfirm 组件的功能
  test('should enhance Popconfirm component', () => {
    const enhancedPopconfirm = withInstall(PopConfirm);
    expect(enhancedPopconfirm).toBe(PxPopconfirm);
    // 这里可以添加更多测试，确保 withInstall 增强了组件的特定功能
  });

  // 可选：如果你的 withInstall 函数有特定的行为或属性，确保它们被正确应用
  test('should apply specific enhancements', () => {
    const enhancedPopconfirm = withInstall(PopConfirm);
    // 例如，如果你的 withInstall 增加了一个特定的方法或属性
    expect(enhancedPopconfirm).toHaveProperty('install');
  });
});

describe('Popconfirm.vue', () => {
  const props = {
    title: 'Test Title',
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
    confirmButtonType: 'primary',
    cancelButtonType: 'info',
    icon: 'check-circle',
    iconColor: 'green',
    hideIcon: false,
    hideAfter: 500,
    width: 200,
  } as PopconfirmProps;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('should accept all props', () => {
    const wrapper = mount(PopConfirm, {
      props,
    }); //mount 挂载组件，第一个参数是组件，第二个参数是props

    each(props, (value, key) => {
      expect(get(wrapper.props(), key)).toBe(value);
    });
  });

  it('should render slot content correctly', () => {
    const slotContent = 'Slot Content';
    const wrapper = mount(PopConfirm, {
      props,
      slots: {
        default: slotContent,
      },
    });

    expect(wrapper.text()).toContain(slotContent);
  });

  it('should render reference slot as trigger', () => {
    const wrapper = mount(PopConfirm, {
      props,
      slots: {
        reference: '<button id="ref-trigger">Reference</button>',
      },
    });

    expect(wrapper.find('#ref-trigger').exists()).toBeTruthy();
    expect(wrapper.text()).toContain('Reference');
  });

  test('popconfirm emits', async () => {
    const wrapper = mount(() => (
      <div>
        <div id="outside"></div>
        <PopConfirm title="Test Title" hideIcon={true} onConfirm={onConfirm} onCancel={onCancel}>
          <button id="trigger">trigger</button>
        </PopConfirm>
      </div>
    ));

    const triggerNode = wrapper.find('#trigger');
    expect(triggerNode.exists()).toBeTruthy();

    triggerNode.trigger('click');
    await vi.runAllTimers();

    expect(wrapper.find('.px-popconfirm').exists()).toBeTruthy();
    const confirmBtn = wrapper.find('.px-popconfirm__confirm');
    expect(confirmBtn.exists()).toBeTruthy();

    confirmBtn.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.px-popconfirm').exists()).toBeFalsy();
    expect(onConfirm).toBeCalled();

    triggerNode.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.px-popconfirm').exists()).toBeTruthy();

    const cancelBtn = wrapper.find('.px-popconfirm__cancel');
    expect(cancelBtn.exists()).toBeTruthy();

    cancelBtn.trigger('click');
    await vi.runAllTimers();
    expect(wrapper.find('.px-popconfirm').exists()).toBeFalsy();
    expect(onCancel).toBeCalled();
  });
});
