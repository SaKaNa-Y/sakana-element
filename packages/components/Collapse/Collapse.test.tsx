import { DOMWrapper, mount, type VueWrapper } from '@vue/test-utils';
import { beforeAll, describe, expect, test, vi } from 'vitest';
import Collapse from './Collapse.vue';
import CollapseItem from './CollapseItem.vue';
import transitionEvents from './transitionEvents';

const onChange = vi.fn();

let wrapper: VueWrapper, headers: DOMWrapper<Element>[], contents: DOMWrapper<Element>[];

let firstHeader: DOMWrapper<Element>,
  secondHeader: DOMWrapper<Element>,
  disabledHeader: DOMWrapper<Element>,
  firstContent: DOMWrapper<Element>,
  secondContent: DOMWrapper<Element>,
  disabledContent: DOMWrapper<Element>;

describe('Collapse.vue', () => {
  beforeAll(() => {
    wrapper = mount(
      () => (
        <Collapse modelValue={['a']} {...{ onChange }}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
          <CollapseItem name="c" title="title c" disabled>
            content c
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ['PxIcon'],
        },
        attachTo: document.body, // 最新版本 jsdom 更新缓存 bug
      },
    );

    headers = wrapper.findAll('.px-collapse-item__header');
    contents = wrapper.findAll('.px-collapse-item__wapper');

    firstHeader = headers[0];
    secondHeader = headers[1];
    disabledHeader = headers[2];

    firstContent = contents[0];
    secondContent = contents[1];
    disabledContent = contents[2];
  });

  test('测试基础结构以及对应文本', () => {
    // lenght
    expect(headers.length).toBe(3);
    expect(contents.length).toBe(3);

    // title
    expect(firstHeader.text()).toBe('title a');

    // content
    expect(firstHeader.classes()).toContain('is-active');
    expect(firstContent.isVisible()).toBeTruthy();
    expect(secondHeader.classes()).not.toContain('is-active');
    expect(secondContent.isVisible()).toBeFalsy();
    expect(firstContent.text()).toBe('content a');
    expect(secondContent.text()).toBe('content b');
  });

  test('点击标题展开/关闭内容', async () => {
    // events
    await firstHeader.trigger('click');
    expect(firstContent.isVisible()).toBeFalsy();
    await secondHeader.trigger('click');
    expect(secondHeader.classes()).toContain('is-active');
    expect(secondHeader.isVisible()).toBeTruthy();
    expect(firstHeader.classes()).not.toContain('is-active');
    expect(firstContent.isVisible()).toBeFalsy();
  });

  test('发送正确的事件', () => {
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith([]);
    expect(onChange).toHaveBeenLastCalledWith(['b']);
  });

  test('disabled 内容', async () => {
    // disabled
    expect(disabledHeader.classes()).toContain('is-disabled');
    onChange.mockClear();
    await disabledHeader.trigger('click');
    expect(disabledContent.isVisible()).toBeFalsy();
    expect(onChange).not.toHaveBeenCalled();
  });

  test('modelValue 变更', async () => {
    wrapper.setValue(['b'], 'modelValue');
    await wrapper.vm.$nextTick();
    expect(secondHeader.classes()).toContain('is-active');
    expect(firstHeader.classes()).not.toContain('is-active');
  });

  test('手风琴模式', async () => {
    wrapper = mount(
      () => (
        <Collapse accordion modelValue={['a']} {...{ onChange }}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ['PxIcon'],
        },
        attachTo: document.body,
      },
    );

    headers = wrapper.findAll('.px-collapse-item__header');
    contents = wrapper.findAll('.px-collapse-item__wapper');

    firstHeader = headers[0];
    secondHeader = headers[1];

    firstContent = contents[0];
    secondContent = contents[1];
    await firstHeader.trigger('click');
    await secondHeader.trigger('click');
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(['b']);
    expect(firstHeader.classes()).not.toContain('is-active');
    expect(secondHeader.classes()).toContain('is-active');
  });

  test('手风琴模式 错误处理', () => {
    wrapper = mount(
      () => (
        <Collapse accordion modelValue={['a', 'b']} {...{ onChange }}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
          <CollapseItem name="c" title="title c" disabled>
            content c
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ['PxIcon'],
        },
      },
    );
  });
  expect(() => wrapper.vm.$nextTick()).toThrow();
});

describe('CollapseItem showArrow prop', () => {
  test('icon should exist by default (showArrow omitted)', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    expect(wrapper.find('px-icon-stub').exists()).toBe(true);
  });

  test('icon should NOT exist when showArrow={false}', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']}>
          <CollapseItem name="a" title="title a" showArrow={false}>
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    expect(wrapper.find('px-icon-stub').exists()).toBe(false);
  });

  test('showArrow={false} should add is-hidden-arrow class to header', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']}>
          <CollapseItem name="a" title="title a" showArrow={false}>
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    expect(wrapper.find('.px-collapse-item__header').classes()).toContain('is-hidden-arrow');
  });
});

describe('CollapseItem icon prop', () => {
  test('renders default chevron-right when icon is omitted', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const icon = wrapper.find('px-icon-stub');
    expect(icon.exists()).toBe(true);
    expect(icon.attributes('icon')).toBe('chevron-right');
  });

  test('renders plus icon when icon="plus" and item is inactive', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]}>
          <CollapseItem name="a" title="title a" icon="plus">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const icon = wrapper.find('px-icon-stub');
    expect(icon.attributes('icon')).toBe('plus');
  });

  test('renders minus icon when icon="plus" and item is active', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']}>
          <CollapseItem name="a" title="title a" icon="plus">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const icon = wrapper.find('px-icon-stub');
    expect(icon.attributes('icon')).toBe('minus');
  });

  test('showArrow={false} takes precedence over icon prop (no icon shown)', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']}>
          <CollapseItem name="a" title="title a" showArrow={false} icon="plus">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    expect(wrapper.find('px-icon-stub').exists()).toBe(false);
  });
});

describe('Collapse color variant', () => {
  test('applies px-collapse--primary class for preset color', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']} color="primary">
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    expect(wrapper.find('.px-collapse').classes()).toContain('px-collapse--primary');
  });

  test.each([
    'primary',
    'success',
    'warning',
    'danger',
    'info',
  ] as const)('applies px-collapse--%s class for preset type', (color) => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]} color={color}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    expect(wrapper.find('.px-collapse').classes()).toContain(`px-collapse--${color}`);
  });

  test('applies inline --px-collapse-* CSS vars for custom hex color', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]} color="#e91e63">
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const style = wrapper.find('.px-collapse').attributes('style') ?? '';
    expect(style).toContain('--px-collapse-border-color');
  });

  test('does NOT apply preset class for hex color', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]} color="#e91e63">
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const classes = wrapper.find('.px-collapse').classes();
    expect(classes).not.toContain('px-collapse--#e91e63');
  });
});

describe('Collapse ghost variant', () => {
  test('adds is-ghost class when ghost=true', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]} ghost>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    expect(wrapper.find('.px-collapse').classes()).toContain('is-ghost');
  });
});

describe('Collapse trigger="focus"', () => {
  test('header gets tabindex="0" in focus mode', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]} trigger="focus">
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const header = wrapper.find('.px-collapse-item__header');
    expect(header.attributes('tabindex')).toBe('0');
  });

  test('item opens on focus event', async () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]} trigger="focus">
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const header = wrapper.find('.px-collapse-item__header');
    await header.trigger('focus');
    expect(header.classes()).toContain('is-active');
  });

  test('item closes on focusout event', async () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']} trigger="focus">
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const header = wrapper.find('.px-collapse-item__header');
    await header.trigger('focusout');
    expect(header.classes()).not.toContain('is-active');
  });

  test('click does NOT toggle in focus mode', async () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]} trigger="focus">
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const header = wrapper.find('.px-collapse-item__header');
    await header.trigger('click');
    expect(header.classes()).not.toContain('is-active');
  });
});

describe('Collapse iconPlacement', () => {
  test('icon is after title by default', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const header = wrapper.find('.px-collapse-item__header');
    expect(header.classes()).not.toContain('is-icon-start');
  });

  test('icon is before title when iconPlacement="start" (via is-icon-start class)', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]} iconPlacement="start">
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const header = wrapper.find('.px-collapse-item__header');
    expect(header.classes()).toContain('is-icon-start');
  });
});

describe('Collapse forceOpen', () => {
  test('content always visible even if name not in modelValue', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]}>
          <CollapseItem name="a" title="title a" forceOpen>
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const content = wrapper.find('.px-collapse-item__wapper');
    expect(content.isVisible()).toBeTruthy();
  });

  test('clicking header does not close forceOpen item', async () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]}>
          <CollapseItem name="a" title="title a" forceOpen>
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const header = wrapper.find('.px-collapse-item__header');
    await header.trigger('click');
    const content = wrapper.find('.px-collapse-item__wapper');
    expect(content.isVisible()).toBeTruthy();
  });
});

describe('Collapse forceClose', () => {
  test('content always hidden even if name in modelValue', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']}>
          <CollapseItem name="a" title="title a" forceClose>
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const content = wrapper.find('.px-collapse-item__wapper');
    expect(content.isVisible()).toBeFalsy();
  });

  test('clicking header does not open forceClose item', async () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={[]}>
          <CollapseItem name="a" title="title a" forceClose>
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const header = wrapper.find('.px-collapse-item__header');
    await header.trigger('click');
    const content = wrapper.find('.px-collapse-item__wapper');
    expect(content.isVisible()).toBeFalsy();
  });

  test('forceClose wins over forceOpen', () => {
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']}>
          <CollapseItem name="a" title="title a" forceClose forceOpen>
            content a
          </CollapseItem>
        </Collapse>
      ),
      {
        global: { stubs: ['PxIcon'] },
        attachTo: document.body,
      },
    );
    const content = wrapper.find('.px-collapse-item__wapper');
    expect(content.isVisible()).toBeFalsy();
  });
});

describe('Collapse/transitionEvents.ts', () => {
  const wrapper = mount(() => <div></div>);
  test('beforeEnter', () => {
    transitionEvents.beforeEnter(wrapper.element);
    expect(wrapper.element.style.height).toBe('0px');
    expect(wrapper.element.style.overflow).toBe('hidden');
  });
  test('enter', () => {
    transitionEvents.enter(wrapper.element);
    expect(wrapper.element.style.height).toBe(`${wrapper.element.scrollHeight}px`);
  });
  test('afterEnter', () => {
    transitionEvents.afterEnter(wrapper.element);
    expect(wrapper.element.style.height).toBe('');
    expect(wrapper.element.style.overflow).toBe('');
  });
  test('beforeLeave', () => {
    transitionEvents.beforeLeave(wrapper.element);
    expect(wrapper.element.style.height).toBe(`${wrapper.element.scrollHeight}px`);
    expect(wrapper.element.style.overflow).toBe('hidden');
  });
  test('leave', () => {
    transitionEvents.leave(wrapper.element);
    expect(wrapper.element.style.height).toBe('0px');
  });
  test('afterLeave', () => {
    transitionEvents.afterLeave(wrapper.element);
    expect(wrapper.element.style.height).toBe('');
    expect(wrapper.element.style.overflow).toBe('');
  });
});
