import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import {
  PxContextMenu,
  PxContextMenuCheckboxItem,
  PxContextMenuItem,
  PxContextMenuLabel,
  PxContextMenuRadioGroup,
  PxContextMenuRadioItem,
  PxContextMenuSeparator,
  PxContextMenuSub,
} from '.';
import ContextMenu from './ContextMenu.vue';
import ContextMenuCheckboxItem from './ContextMenuCheckboxItem.vue';
import ContextMenuItem from './ContextMenuItem.vue';
import ContextMenuLabel from './ContextMenuLabel.vue';
import ContextMenuRadioGroup from './ContextMenuRadioGroup.vue';
import ContextMenuRadioItem from './ContextMenuRadioItem.vue';
import ContextMenuSeparator from './ContextMenuSeparator.vue';
import ContextMenuSub from './ContextMenuSub.vue';

/* ─── Helper: create a right-click MouseEvent at (x, y) ─── */
function rightClick(el: Element, x = 100, y = 100) {
  const event = new MouseEvent('contextmenu', {
    bubbles: true,
    cancelable: true,
    clientX: x,
    clientY: y,
    button: 2,
  });
  el.dispatchEvent(event);
  return event;
}

describe('ContextMenu/index.ts', () => {
  it('should be exported with withInstall()', () => {
    expect(PxContextMenu.install).toBeDefined();
    expect(PxContextMenuItem.install).toBeDefined();
    expect(PxContextMenuCheckboxItem.install).toBeDefined();
    expect(PxContextMenuRadioGroup.install).toBeDefined();
    expect(PxContextMenuRadioItem.install).toBeDefined();
    expect(PxContextMenuSeparator.install).toBeDefined();
    expect(PxContextMenuLabel.install).toBeDefined();
    expect(PxContextMenuSub.install).toBeDefined();
  });

  it('should be exported as raw component', () => {
    expect(PxContextMenu).toBe(ContextMenu);
    expect(PxContextMenuItem).toBe(ContextMenuItem);
  });

  it('should enhance component with withInstall', () => {
    const enhanced = withInstall(ContextMenu);
    expect(enhanced).toBe(PxContextMenu);
    expect(enhanced).toHaveProperty('install');
  });
});

describe('ContextMenu.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });
  afterEach(() => {
    document.querySelectorAll('.px-context-menu__popup').forEach((el) => el.remove());
    vi.useRealTimers();
  });

  it('should render trigger slot', () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
      },
      attachTo: document.body,
    });

    expect(wrapper.find('.trigger-area').exists()).toBe(true);
    expect(wrapper.text()).toContain('Right-click me');
    wrapper.unmount();
  });

  it('should open on right-click', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => <ContextMenuItem label="Action 1" command="a" />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    expect(document.querySelector('.px-context-menu__popup')).toBeTruthy();
    wrapper.unmount();
  });

  it('should not open when disabled', async () => {
    const wrapper = mount(ContextMenu, {
      props: { disabled: true },
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => <ContextMenuItem label="Action 1" command="a" />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    expect(document.querySelector('.px-context-menu__popup')).toBeFalsy();
    wrapper.unmount();
  });

  it('should emit command event on item click', async () => {
    const onCommand = vi.fn();
    const wrapper = mount(ContextMenu, {
      props: { onCommand },
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => [
          <ContextMenuItem label="Action 1" command="a" />,
          <ContextMenuItem label="Action 2" command="b" />,
        ],
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const items = document.querySelectorAll('.px-context-menu__item');
    expect(items.length).toBe(2);
    (items[0] as HTMLElement).click();
    await vi.runAllTimers();

    expect(onCommand).toHaveBeenCalledWith('a');
    wrapper.unmount();
  });

  it('should close after item click when hideOnClick is true', async () => {
    const wrapper = mount(ContextMenu, {
      props: { hideOnClick: true },
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => <ContextMenuItem label="Action 1" command="a" />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();
    expect(document.querySelector('.px-context-menu__popup')).toBeTruthy();

    const item = document.querySelector('.px-context-menu__item') as HTMLElement;
    item.click();
    await vi.runAllTimers();

    expect(document.querySelector('.px-context-menu__popup')).toBeFalsy();
    wrapper.unmount();
  });

  it('should not emit command for disabled items', async () => {
    const onCommand = vi.fn();
    const wrapper = mount(ContextMenu, {
      props: { onCommand },
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => <ContextMenuItem label="Disabled" command="x" disabled />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const item = document.querySelector('.px-context-menu__item') as HTMLElement;
    item.click();
    await vi.runAllTimers();

    expect(onCommand).not.toHaveBeenCalled();
    wrapper.unmount();
  });

  it('should emit visible-change event', async () => {
    const onVisibleChange = vi.fn();
    const wrapper = mount(ContextMenu, {
      props: { 'onVisible-change': onVisibleChange },
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => <ContextMenuItem label="Action" command="a" />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();
    expect(onVisibleChange).toHaveBeenCalledWith(true);

    wrapper.unmount();
  });

  it('should render items from items prop', async () => {
    const items = [
      { label: 'Cut', command: 'cut' },
      { label: 'Copy', command: 'copy' },
      { label: 'Paste', command: 'paste' },
    ];
    const wrapper = mount(ContextMenu, {
      props: { items },
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const menuItems = document.querySelectorAll('.px-context-menu__item');
    expect(menuItems.length).toBe(3);
    wrapper.unmount();
  });

  it('should expose open and close methods', () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div>Trigger</div>',
        content: () => <ContextMenuItem label="Action" command="a" />,
      },
    });

    const vm = wrapper.vm as any;
    expect(vm.open).toBeDefined();
    expect(vm.close).toBeDefined();
  });

  it('should apply maxHeight style to popup', async () => {
    const wrapper = mount(ContextMenu, {
      props: { maxHeight: 200 },
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => <ContextMenuItem label="Action" command="a" />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const popup = document.querySelector('.px-context-menu__menu') as HTMLElement;
    expect(popup).toBeTruthy();
    expect(popup.style.maxHeight).toBe('200px');
    wrapper.unmount();
  });

  it('should apply hoverColor as CSS variable', async () => {
    const wrapper = mount(ContextMenu, {
      props: { hoverColor: '#ff6600' },
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => <ContextMenuItem label="Action" command="a" />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const menu = document.querySelector('.px-context-menu__menu') as HTMLElement;
    expect(menu).toBeTruthy();
    expect(menu.style.getPropertyValue('--px-context-menu-item-hover-fill')).toBe('#ff6600');
    wrapper.unmount();
  });

  it('should close on Escape key', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => <ContextMenuItem label="Action" command="a" />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();
    await nextTick();
    await nextTick();
    expect(document.querySelector('.px-context-menu__popup')).toBeTruthy();

    const menu = document.querySelector('.px-context-menu__menu') as HTMLElement;
    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await vi.runAllTimers();
    await nextTick();
    await nextTick();

    expect(document.querySelector('.px-context-menu__popup')).toBeFalsy();
    wrapper.unmount();
  });

  it('should navigate items with ArrowDown/ArrowUp', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => [
          <ContextMenuItem label="A" command="a" />,
          <ContextMenuItem label="B" command="b" />,
          <ContextMenuItem label="C" command="c" />,
        ],
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();
    await nextTick();
    await nextTick();

    const menu = document.querySelector('.px-context-menu__menu') as HTMLElement;
    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await vi.runAllTimers();
    await nextTick();

    const items = document.querySelectorAll('.px-context-menu__item:not(.is-disabled)');
    expect(document.activeElement).toBe(items[0]);

    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await vi.runAllTimers();
    await nextTick();
    expect(document.activeElement).toBe(items[1]);

    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
    await vi.runAllTimers();
    await nextTick();
    expect(document.activeElement).toBe(items[0]);

    wrapper.unmount();
  });

  it('should navigate with Home/End keys', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => [
          <ContextMenuItem label="A" command="a" />,
          <ContextMenuItem label="B" command="b" />,
          <ContextMenuItem label="C" command="c" />,
        ],
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();
    await nextTick();
    await nextTick();

    const menu = document.querySelector('.px-context-menu__menu') as HTMLElement;
    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
    await vi.runAllTimers();
    await nextTick();

    const items = document.querySelectorAll('.px-context-menu__item:not(.is-disabled)');
    expect(document.activeElement).toBe(items[items.length - 1]);

    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
    await vi.runAllTimers();
    await nextTick();
    expect(document.activeElement).toBe(items[0]);

    wrapper.unmount();
  });

  it('should activate item with Enter key', async () => {
    const onCommand = vi.fn();
    const wrapper = mount(ContextMenu, {
      props: { onCommand },
      slots: {
        default: '<div class="trigger-area">Right-click me</div>',
        content: () => <ContextMenuItem label="Action" command="a" />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();
    await nextTick();
    await nextTick();

    const menu = document.querySelector('.px-context-menu__menu') as HTMLElement;
    // Navigate to first item
    menu.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await vi.runAllTimers();
    await nextTick();

    // Activate with Enter
    const item = document.activeElement as HTMLElement;
    item.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await vi.runAllTimers();
    await nextTick();

    expect(onCommand).toHaveBeenCalledWith('a');
    wrapper.unmount();
  });
});

describe('ContextMenuSeparator', () => {
  it('should render separator element', () => {
    const wrapper = mount(ContextMenuSeparator);
    expect(wrapper.find('.px-context-menu__separator').exists()).toBe(true);
    expect(wrapper.find('[role="separator"]').exists()).toBe(true);
  });
});

describe('ContextMenuLabel', () => {
  it('should render label text', () => {
    const wrapper = mount(ContextMenuLabel, {
      slots: { default: 'Group Label' },
    });
    expect(wrapper.find('.px-context-menu__label').exists()).toBe(true);
    expect(wrapper.text()).toContain('Group Label');
  });

  it('should apply inset class when inset prop is true', () => {
    const wrapper = mount(ContextMenuLabel, {
      props: { inset: true },
      slots: { default: 'Label' },
    });
    expect(wrapper.find('.px-context-menu__label').classes()).toContain('is-inset');
  });
});

describe('ContextMenuItem', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    document.querySelectorAll('.px-context-menu__popup').forEach((el) => el.remove());
    vi.useRealTimers();
  });

  it('should render with label', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => <ContextMenuItem label="Edit" command="edit" />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const item = document.querySelector('.px-context-menu__item');
    expect(item).toBeTruthy();
    expect(item?.textContent).toContain('Edit');
    wrapper.unmount();
  });

  it('should render icon when provided', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => <ContextMenuItem label="Edit" icon="edit" command="edit" />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    expect(document.querySelector('.px-context-menu__item-icon')).toBeTruthy();
    wrapper.unmount();
  });

  it('should render shortcut keys', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => <ContextMenuItem label="Copy" command="copy" shortcut={['Ctrl', 'C']} />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const shortcut = document.querySelector('.px-context-menu__shortcut');
    expect(shortcut).toBeTruthy();
    expect(shortcut?.textContent).toContain('Ctrl');
    expect(shortcut?.textContent).toContain('C');
    wrapper.unmount();
  });

  it('should render divided separator', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => [
          <ContextMenuItem label="A" command="a" />,
          <ContextMenuItem label="B" command="b" divided />,
        ],
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    expect(document.querySelector('.px-context-menu__divided')).toBeTruthy();
    wrapper.unmount();
  });

  it('should apply disabled class', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => <ContextMenuItem label="Disabled" command="x" disabled />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const item = document.querySelector('.px-context-menu__item');
    expect(item?.classList.contains('is-disabled')).toBe(true);
    wrapper.unmount();
  });
});

describe('ContextMenuCheckboxItem', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render checkbox indicator when checked', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => <ContextMenuCheckboxItem label="Bold" modelValue={true} />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const indicator = document.querySelector('.px-context-menu__check-indicator');
    expect(indicator).toBeTruthy();
    wrapper.unmount();
  });

  it('should not render indicator when unchecked', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => <ContextMenuCheckboxItem label="Bold" modelValue={false} />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const indicator = document.querySelector('.px-context-menu__check-indicator');
    expect(indicator).toBeFalsy();
    wrapper.unmount();
  });

  it('should emit update:modelValue on click', async () => {
    let checked = false;
    const onUpdate = vi.fn((val: boolean) => {
      checked = val;
    });

    const wrapper = mount(ContextMenu, {
      props: { hideOnClick: false },
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => (
          <ContextMenuCheckboxItem
            label="Bold"
            modelValue={checked}
            onUpdate:modelValue={onUpdate}
          />
        ),
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const item = document.querySelector('.px-context-menu__checkbox-item') as HTMLElement;
    item.click();
    await vi.runAllTimers();

    expect(onUpdate).toHaveBeenCalledWith(true);
    wrapper.unmount();
  });
});

describe('ContextMenuRadioGroup + ContextMenuRadioItem', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render radio indicator for selected value', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => (
          <ContextMenuRadioGroup modelValue="a">
            <ContextMenuRadioItem label="Option A" value="a" />
            <ContextMenuRadioItem label="Option B" value="b" />
          </ContextMenuRadioGroup>
        ),
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const indicators = document.querySelectorAll('.px-context-menu__radio-indicator');
    expect(indicators.length).toBe(1);
    wrapper.unmount();
  });

  it('should emit update:modelValue when radio item is clicked', async () => {
    const onUpdate = vi.fn();
    const wrapper = mount(ContextMenu, {
      props: { hideOnClick: false },
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => (
          <ContextMenuRadioGroup modelValue="a" onUpdate:modelValue={onUpdate}>
            <ContextMenuRadioItem label="Option A" value="a" />
            <ContextMenuRadioItem label="Option B" value="b" />
          </ContextMenuRadioGroup>
        ),
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const items = document.querySelectorAll('.px-context-menu__radio-item');
    (items[1] as HTMLElement).click();
    await vi.runAllTimers();

    expect(onUpdate).toHaveBeenCalledWith('b');
    wrapper.unmount();
  });
});

describe('ContextMenuSub', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render sub-trigger with arrow', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => (
          <ContextMenuSub label="More">
            {{
              default: () => <ContextMenuItem label="Sub Action" command="sub" />,
            }}
          </ContextMenuSub>
        ),
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const subTrigger = document.querySelector('.px-context-menu__sub-trigger');
    expect(subTrigger).toBeTruthy();
    expect(document.querySelector('.px-context-menu__sub-arrow')).toBeTruthy();
    wrapper.unmount();
  });

  it('should open submenu on mouseenter', async () => {
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => (
          <ContextMenuSub label="More">
            {{
              default: () => <ContextMenuItem label="Sub Action" command="sub" />,
            }}
          </ContextMenuSub>
        ),
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const subTrigger = document.querySelector('.px-context-menu__sub-trigger') as HTMLElement;
    subTrigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    await vi.advanceTimersByTime(200);
    await vi.runAllTimers();

    expect(document.querySelector('.px-context-menu__sub-popup')).toBeTruthy();
    wrapper.unmount();
  });

  it('should render items from items prop', async () => {
    const subItems = [
      { label: 'Sub 1', command: 'sub1' },
      { label: 'Sub 2', command: 'sub2' },
    ];
    const wrapper = mount(ContextMenu, {
      slots: {
        default: '<div class="trigger-area">Right-click</div>',
        content: () => <ContextMenuSub label="More" items={subItems} />,
      },
      attachTo: document.body,
    });

    rightClick(wrapper.find('.trigger-area').element);
    await vi.runAllTimers();

    const subTrigger = document.querySelector('.px-context-menu__sub-trigger') as HTMLElement;
    subTrigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    await vi.advanceTimersByTime(200);
    await vi.runAllTimers();

    const subItems2 = document.querySelectorAll(
      '.px-context-menu__sub-popup .px-context-menu__item',
    );
    expect(subItems2.length).toBe(2);
    wrapper.unmount();
  });
});
