import { mount, type VueWrapper } from '@vue/test-utils';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { nextTick } from 'vue';
import { PxResizableGroup, PxResizableHandle, PxResizablePanel } from './index';
import ResizableGroup from './ResizableGroup.vue';
import ResizableHandle from './ResizableHandle.vue';
import ResizablePanel from './ResizablePanel.vue';

/**
 * Helper: mock getBoundingClientRect on an element.
 */
function mockRect(el: Element, rect: Partial<DOMRect>) {
  vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({
    left: 0,
    top: 0,
    width: 400,
    height: 400,
    right: 400,
    bottom: 400,
    x: 0,
    y: 0,
    toJSON: () => {},
    ...rect,
  });
}

// ---------------------------------------------------------------------------
// withInstall
// ---------------------------------------------------------------------------
describe('Resizable withInstall', () => {
  test('PxResizableGroup should have install method', () => {
    expect(PxResizableGroup.install).toBeDefined();
  });
  test('PxResizablePanel should have install method', () => {
    expect(PxResizablePanel.install).toBeDefined();
  });
  test('PxResizableHandle should have install method', () => {
    expect(PxResizableHandle.install).toBeDefined();
  });
});

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------
describe('ResizableGroup rendering', () => {
  test('should render root element with px-resizable-group class', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel>Panel A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Panel B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    expect(wrapper.find('.px-resizable-group').exists()).toBe(true);
    wrapper.unmount();
  });

  test('should have is-horizontal class for horizontal direction', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    expect(wrapper.find('.px-resizable-group').classes()).toContain('is-horizontal');
    wrapper.unmount();
  });

  test('should have is-vertical class for vertical direction', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="vertical">
          <ResizablePanel>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    expect(wrapper.find('.px-resizable-group').classes()).toContain('is-vertical');
    wrapper.unmount();
  });

  test('should render panels inside group', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel>Panel A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Panel B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels.length).toBe(2);
    expect(panels[0].text()).toBe('Panel A');
    expect(panels[1].text()).toBe('Panel B');
    wrapper.unmount();
  });

  test('should render handle between panels', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    expect(wrapper.find('.px-resizable-handle').exists()).toBe(true);
    wrapper.unmount();
  });
});

// ---------------------------------------------------------------------------
// Panel sizing
// ---------------------------------------------------------------------------
describe('Panel sizing', () => {
  test('panels should use defaultSize for flex-basis', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={30}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={70}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    await nextTick();
    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('30');
    expect(panels[1].attributes('style')).toContain('70');
    wrapper.unmount();
  });

  test('panels without defaultSize should split remaining space equally', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    await nextTick();
    const panels = wrapper.findAll('.px-resizable-panel');
    // Both should get 50%
    expect(panels[0].attributes('style')).toContain('50');
    expect(panels[1].attributes('style')).toContain('50');
    wrapper.unmount();
  });

  test('panels with partial defaultSize should distribute remaining to others', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={60}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    await nextTick();
    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('60');
    expect(panels[1].attributes('style')).toContain('40');
    wrapper.unmount();
  });
});

// ---------------------------------------------------------------------------
// Handle props
// ---------------------------------------------------------------------------
describe('Handle props', () => {
  test('disabled handle should have is-disabled class', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel>A</ResizablePanel>
          <ResizableHandle disabled />
          <ResizablePanel>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    expect(wrapper.find('.px-resizable-handle').classes()).toContain('is-disabled');
    wrapper.unmount();
  });

  test('handle should have role=separator', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    expect(wrapper.find('.px-resizable-handle').attributes('role')).toBe('separator');
    wrapper.unmount();
  });

  test('handle should have tabindex=0', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );
    expect(wrapper.find('.px-resizable-handle').attributes('tabindex')).toBe('0');
    wrapper.unmount();
  });
});

// ---------------------------------------------------------------------------
// Mouse resize interaction
// ---------------------------------------------------------------------------
describe('Mouse resize', () => {
  let wrapper: VueWrapper;

  afterEach(() => {
    wrapper?.unmount();
  });

  test('mousedown on handle should start resize and emit dragging', async () => {
    const onDragging = vi.fn();
    wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle onDragging={onDragging} />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const group = wrapper.find('.px-resizable-group');
    mockRect(group.element, { left: 0, width: 400 });

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('mousedown', { clientX: 200 });
    expect(onDragging).toHaveBeenCalledWith(true);

    // Clean up
    window.dispatchEvent(new MouseEvent('mouseup'));
    await nextTick();
  });

  test('mousemove should update panel sizes', async () => {
    wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const group = wrapper.find('.px-resizable-group');
    mockRect(group.element, { left: 0, width: 400 });

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('mousedown', { clientX: 200 });

    // Move mouse to the right by 40px (10% of 400)
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 240 }));
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    // First panel should grow, second should shrink
    expect(panels[0].attributes('style')).toContain('60');
    expect(panels[1].attributes('style')).toContain('40');

    window.dispatchEvent(new MouseEvent('mouseup'));
    await nextTick();
  });

  test('mouseup should stop resize and emit dragging false', async () => {
    const onDragging = vi.fn();
    wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle onDragging={onDragging} />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const group = wrapper.find('.px-resizable-group');
    mockRect(group.element, { left: 0, width: 400 });

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('mousedown', { clientX: 200 });
    window.dispatchEvent(new MouseEvent('mouseup'));
    await nextTick();

    expect(onDragging).toHaveBeenCalledWith(false);
  });

  test('resize should respect minSize constraint', async () => {
    wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50} minSize={20}>
            A
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const group = wrapper.find('.px-resizable-group');
    mockRect(group.element, { left: 0, width: 400 });

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('mousedown', { clientX: 200 });

    // Move far left to try to shrink below minSize
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 20 }));
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    // First panel should not go below 20%
    expect(panels[0].attributes('style')).toContain('20');

    window.dispatchEvent(new MouseEvent('mouseup'));
    await nextTick();
  });

  test('resize should respect maxSize constraint', async () => {
    wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50} maxSize={70}>
            A
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const group = wrapper.find('.px-resizable-group');
    mockRect(group.element, { left: 0, width: 400 });

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('mousedown', { clientX: 200 });

    // Move far right to try to grow beyond maxSize
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 380 }));
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    // First panel should not exceed 70%
    expect(panels[0].attributes('style')).toContain('70');

    window.dispatchEvent(new MouseEvent('mouseup'));
    await nextTick();
  });

  test('disabled handle should not start resize', async () => {
    const onDragging = vi.fn();
    wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle disabled onDragging={onDragging} />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('mousedown', { clientX: 200 });
    expect(onDragging).not.toHaveBeenCalled();
  });

  test('resize should emit resize event on panel', async () => {
    const onResize = vi.fn();
    wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50} onResize={onResize}>
            A
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const group = wrapper.find('.px-resizable-group');
    mockRect(group.element, { left: 0, width: 400 });

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('mousedown', { clientX: 200 });

    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 240 }));
    await nextTick();

    expect(onResize).toHaveBeenCalledWith(60);

    window.dispatchEvent(new MouseEvent('mouseup'));
    await nextTick();
  });

  test('vertical resize should use clientY', async () => {
    wrapper = mount(
      () => (
        <ResizableGroup direction="vertical">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const group = wrapper.find('.px-resizable-group');
    mockRect(group.element, { top: 0, height: 400 });

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('mousedown', { clientY: 200 });

    window.dispatchEvent(new MouseEvent('mousemove', { clientY: 240 }));
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('60');
    expect(panels[1].attributes('style')).toContain('40');

    window.dispatchEvent(new MouseEvent('mouseup'));
    await nextTick();
  });

  test('layout event should be emitted on resize', async () => {
    const onLayout = vi.fn();
    wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal" onLayout={onLayout}>
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const group = wrapper.find('.px-resizable-group');
    mockRect(group.element, { left: 0, width: 400 });

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('mousedown', { clientX: 200 });

    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 240 }));
    await nextTick();

    expect(onLayout).toHaveBeenCalledWith([60, 40]);

    window.dispatchEvent(new MouseEvent('mouseup'));
    await nextTick();
  });
});

// ---------------------------------------------------------------------------
// Keyboard interaction
// ---------------------------------------------------------------------------
describe('Keyboard interaction', () => {
  test('ArrowRight should increase left panel (horizontal)', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('keydown', { key: 'ArrowRight' });
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    // Default keyboardResizeBy is 10
    expect(panels[0].attributes('style')).toContain('60');
    expect(panels[1].attributes('style')).toContain('40');
    wrapper.unmount();
  });

  test('ArrowLeft should decrease left panel (horizontal)', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('keydown', { key: 'ArrowLeft' });
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('40');
    expect(panels[1].attributes('style')).toContain('60');
    wrapper.unmount();
  });

  test('ArrowDown should increase top panel (vertical)', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="vertical">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('keydown', { key: 'ArrowDown' });
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('60');
    expect(panels[1].attributes('style')).toContain('40');
    wrapper.unmount();
  });

  test('ArrowUp should decrease top panel (vertical)', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="vertical">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('keydown', { key: 'ArrowUp' });
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('40');
    expect(panels[1].attributes('style')).toContain('60');
    wrapper.unmount();
  });

  test('custom keyboardResizeBy should change step size', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal" keyboardResizeBy={5}>
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('keydown', { key: 'ArrowRight' });
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('55');
    expect(panels[1].attributes('style')).toContain('45');
    wrapper.unmount();
  });

  test('keyboard resize should respect minSize', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal" keyboardResizeBy={20}>
          <ResizablePanel defaultSize={30} minSize={20}>
            A
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={70}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('keydown', { key: 'ArrowLeft' });
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('20');
    wrapper.unmount();
  });

  test('disabled handle should ignore keyboard events', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle disabled />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('keydown', { key: 'ArrowRight' });
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('50');
    wrapper.unmount();
  });
});

// ---------------------------------------------------------------------------
// Collapse / Expand
// ---------------------------------------------------------------------------
describe('Collapse and expand', () => {
  test('collapsible panel should collapse via exposed method', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50} collapsible collapsedSize={5}>
            A
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const panelVm = wrapper.findComponent(ResizablePanel);
    panelVm.vm.collapse();
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('5');
    expect(panels[0].classes()).toContain('is-collapsed');
    wrapper.unmount();
  });

  test('collapsed panel should expand via exposed method', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50} collapsible collapsedSize={5}>
            A
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const panelVm = wrapper.findComponent(ResizablePanel);
    panelVm.vm.collapse();
    await nextTick();
    panelVm.vm.expand();
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('50');
    expect(panels[0].classes()).not.toContain('is-collapsed');
    wrapper.unmount();
  });

  test('collapse/expand should emit events', async () => {
    const onCollapse = vi.fn();
    const onExpand = vi.fn();
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel
            defaultSize={50}
            collapsible
            collapsedSize={5}
            onCollapse={onCollapse}
            onExpand={onExpand}
          >
            A
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const panelVm = wrapper.findComponent(ResizablePanel);
    panelVm.vm.collapse();
    await nextTick();
    expect(onCollapse).toHaveBeenCalled();

    panelVm.vm.expand();
    await nextTick();
    expect(onExpand).toHaveBeenCalled();
    wrapper.unmount();
  });

  test('non-collapsible panel collapse() should be no-op', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const panelVm = wrapper.findComponent(ResizablePanel);
    panelVm.vm.collapse();
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('50');
    wrapper.unmount();
  });
});

// ---------------------------------------------------------------------------
// Exposed methods
// ---------------------------------------------------------------------------
describe('Exposed methods', () => {
  test('getSize() should return current panel size', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={30}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={70}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const panelVm = wrapper.findComponent(ResizablePanel);
    expect(panelVm.vm.getSize()).toBe(30);
    wrapper.unmount();
  });

  test('resize() should programmatically set panel size', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    await nextTick();
    const panelVm = wrapper.findComponent(ResizablePanel);
    panelVm.vm.resize(30);
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('30');
    expect(panels[1].attributes('style')).toContain('70');
    wrapper.unmount();
  });
});

// ---------------------------------------------------------------------------
// Auto-save (localStorage)
// ---------------------------------------------------------------------------
describe('Auto-save', () => {
  test('should save layout to localStorage when autoSaveId is set', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal" autoSaveId="test-layout">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const group = wrapper.find('.px-resizable-group');
    mockRect(group.element, { left: 0, width: 400 });

    const handle = wrapper.find('.px-resizable-handle');
    await handle.trigger('mousedown', { clientX: 200 });
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 240 }));
    await nextTick();
    window.dispatchEvent(new MouseEvent('mouseup'));
    await nextTick();

    expect(setItemSpy).toHaveBeenCalledWith('px-resizable-test-layout', expect.any(String));
    setItemSpy.mockRestore();
    wrapper.unmount();
  });

  test('should restore layout from localStorage on mount', async () => {
    const getItemSpy = vi
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(JSON.stringify([30, 70]));

    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal" autoSaveId="test-restore">
          <ResizablePanel defaultSize={50}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>B</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    await nextTick();
    const panels = wrapper.findAll('.px-resizable-panel');
    expect(panels[0].attributes('style')).toContain('30');
    expect(panels[1].attributes('style')).toContain('70');

    getItemSpy.mockRestore();
    wrapper.unmount();
  });
});

// ---------------------------------------------------------------------------
// Multi-panel
// ---------------------------------------------------------------------------
describe('Multi-panel', () => {
  test('should support three panels with two handles', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={33}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={34}>B</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={33}>C</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const panels = wrapper.findAll('.px-resizable-panel');
    const handles = wrapper.findAll('.px-resizable-handle');
    expect(panels.length).toBe(3);
    expect(handles.length).toBe(2);
    wrapper.unmount();
  });

  test('resizing first handle should only affect adjacent panels', async () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="horizontal">
          <ResizablePanel defaultSize={33}>A</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={34}>B</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={33}>C</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const group = wrapper.find('.px-resizable-group');
    mockRect(group.element, { left: 0, width: 300 });

    const handles = wrapper.findAll('.px-resizable-handle');
    await handles[0].trigger('mousedown', { clientX: 99 });
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 129 }));
    await nextTick();

    const panels = wrapper.findAll('.px-resizable-panel');
    // Third panel should be unchanged
    expect(panels[2].attributes('style')).toContain('33');

    window.dispatchEvent(new MouseEvent('mouseup'));
    await nextTick();
    wrapper.unmount();
  });
});

// ---------------------------------------------------------------------------
// Nested groups
// ---------------------------------------------------------------------------
describe('Nested groups', () => {
  test('should render nested resizable groups', () => {
    const wrapper = mount(
      () => (
        <ResizableGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <ResizableGroup direction="horizontal">
              <ResizablePanel defaultSize={50}>A</ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>B</ResizablePanel>
            </ResizableGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>C</ResizablePanel>
        </ResizableGroup>
      ),
      { attachTo: document.body },
    );

    const groups = wrapper.findAll('.px-resizable-group');
    expect(groups.length).toBe(2);
    expect(groups[0].classes()).toContain('is-vertical');
    expect(groups[1].classes()).toContain('is-horizontal');
    wrapper.unmount();
  });
});
