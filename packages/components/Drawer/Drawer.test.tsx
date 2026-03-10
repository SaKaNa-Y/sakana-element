import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import { PxDrawer } from '.';
import Drawer from './Drawer.vue';

describe('Drawer/index.ts', () => {
  it('should be exported with withInstall()', () => {
    expect(PxDrawer.install).toBeDefined();
  });

  it('should be exported Drawer component', () => {
    expect(PxDrawer).toBe(Drawer);
  });

  it('should enhance Drawer component', () => {
    const enhancedDrawer = withInstall(Drawer);
    expect(enhancedDrawer).toBe(PxDrawer);
    expect(enhancedDrawer).toHaveProperty('install');
  });
});

describe('Drawer.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
    document.body.style.overflow = '';
    // Clean up any teleported elements
    document.body.querySelectorAll('.px-drawer-overlay').forEach((el) => el.remove());
    document.body.querySelectorAll('.px-drawer__sidebar').forEach((el) => el.remove());
  });

  it('should render root .px-drawer element', () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: false },
      slots: { default: 'Main content' },
    });
    expect(wrapper.find('.px-drawer').exists()).toBe(true);
  });

  it('should render default slot content in .px-drawer__content', () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: false },
      slots: { default: 'Main content' },
    });
    expect(wrapper.find('.px-drawer__content').exists()).toBe(true);
    expect(wrapper.find('.px-drawer__content').text()).toBe('Main content');
  });

  it('should show sidebar when modelValue is true', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: {
        default: 'Main content',
        sidebar: 'Sidebar content',
      },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    const sidebar = document.body.querySelector('.px-drawer__sidebar');
    expect(sidebar).toBeTruthy();
    expect(sidebar!.textContent).toContain('Sidebar content');
    wrapper.unmount();
  });

  it('should hide sidebar when modelValue is false', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: false },
      slots: {
        default: 'Main content',
        sidebar: 'Sidebar content',
      },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    const sidebar = document.body.querySelector('.px-drawer__sidebar');
    expect(sidebar).toBeFalsy();
    wrapper.unmount();
  });

  it('should emit update:modelValue and close when closing', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    // Click overlay to close
    const overlay = document.body.querySelector('.px-drawer-overlay') as HTMLElement;
    expect(overlay).toBeTruthy();
    overlay.click();
    await vi.runAllTimers();

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false]);
    expect(wrapper.emitted('close')).toBeTruthy();
    wrapper.unmount();
  });

  it('should emit open when opening', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: false },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();

    await wrapper.setProps({ modelValue: true });
    await vi.runAllTimers();
    await nextTick();

    expect(wrapper.emitted('open')).toBeTruthy();
    wrapper.unmount();
  });

  // Placement tests
  it('should apply px-drawer--left class by default', () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: false },
      slots: { default: 'Content' },
    });
    expect(wrapper.find('.px-drawer').classes()).toContain('px-drawer--left');
  });

  it('should apply px-drawer--right class when placement is right', () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: false, placement: 'right' },
      slots: { default: 'Content' },
    });
    expect(wrapper.find('.px-drawer').classes()).toContain('px-drawer--right');
  });

  // Size test
  it('should apply custom width to sidebar', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true, size: '400px' },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    const sidebar = document.body.querySelector('.px-drawer__sidebar') as HTMLElement;
    expect(sidebar).toBeTruthy();
    expect(sidebar.style.width).toBe('400px');
    wrapper.unmount();
  });

  // Overlay tests
  it('should render overlay by default when open', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    const overlay = document.body.querySelector('.px-drawer-overlay');
    expect(overlay).toBeTruthy();
    wrapper.unmount();
  });

  it('should not render overlay when showOverlay is false', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true, showOverlay: false },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    const overlay = document.body.querySelector('.px-drawer-overlay');
    expect(overlay).toBeFalsy();
    wrapper.unmount();
  });

  it('should not close when closeOnClickOverlay is false', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true, closeOnClickOverlay: false },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    const overlay = document.body.querySelector('.px-drawer-overlay') as HTMLElement;
    expect(overlay).toBeTruthy();
    overlay.click();
    await vi.runAllTimers();

    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    wrapper.unmount();
  });

  // lockScroll tests
  it('should lock body scroll when open and lockScroll is true (default)', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    expect(document.body.style.overflow).toBe('hidden');
    wrapper.unmount();
  });

  it('should restore body scroll when closed', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();
    expect(document.body.style.overflow).toBe('hidden');

    await wrapper.setProps({ modelValue: false });
    await vi.runAllTimers();
    await nextTick();

    expect(document.body.style.overflow).toBe('');
    wrapper.unmount();
  });

  it('should not lock body scroll when lockScroll is false', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true, lockScroll: false },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    expect(document.body.style.overflow).not.toBe('hidden');
    wrapper.unmount();
  });

  // Escape key test
  it('should close on Escape key press', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await vi.runAllTimers();

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false]);
    wrapper.unmount();
  });

  it('should not close on Escape when closeOnEsc is false', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true, closeOnEsc: false },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await vi.runAllTimers();

    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    wrapper.unmount();
  });

  // Exposed methods
  it('should expose open() method', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: false },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();

    (wrapper.vm as any).open();
    await vi.runAllTimers();

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);
    wrapper.unmount();
  });

  it('should expose close() method', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();

    (wrapper.vm as any).close();
    await vi.runAllTimers();

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false]);
    wrapper.unmount();
  });

  it('should expose toggle() method', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: false },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();

    (wrapper.vm as any).toggle();
    await vi.runAllTimers();
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);

    // Simulate modelValue updated externally
    await wrapper.setProps({ modelValue: true });
    await vi.runAllTimers();

    (wrapper.vm as any).toggle();
    await vi.runAllTimers();
    // Second emit should be false
    const emitted = wrapper.emitted('update:modelValue')!;
    expect(emitted[emitted.length - 1]).toEqual([false]);
    wrapper.unmount();
  });

  it('should not emit when open() called while already open', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    (wrapper.vm as any).open();
    await vi.runAllTimers();

    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    wrapper.unmount();
  });

  it('should not emit when close() called while already closed', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: false },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();

    (wrapper.vm as any).close();
    await vi.runAllTimers();

    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
    wrapper.unmount();
  });

  // Title header
  it('should render header with title when title prop is set', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true, title: 'Drawer Title' },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    const header = document.body.querySelector('.px-drawer__header');
    expect(header).toBeTruthy();
    expect(header!.textContent).toContain('Drawer Title');
    wrapper.unmount();
  });

  it('should not render header when title is not set', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: { default: 'Content', sidebar: 'Sidebar' },
      attachTo: document.body,
    });
    await vi.runAllTimers();
    await nextTick();

    const header = document.body.querySelector('.px-drawer__header');
    expect(header).toBeFalsy();
    wrapper.unmount();
  });
});
