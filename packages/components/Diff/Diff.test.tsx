import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import Diff from './Diff.vue';
import { PxDiff } from './index';

// Helper: create a small test image as base64 data URL
function createTestImage(width = 4, height = 4): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(0, 0, width, height);
  return canvas.toDataURL('image/png');
}

const TEST_SRC = createTestImage(4, 4);

// ---------------------------------------------------------------------------
// Rendering basics
// ---------------------------------------------------------------------------
describe('Diff.vue', () => {
  it('should render container with px-diff class', () => {
    const wrapper = mount(Diff);
    expect(wrapper.find('.px-diff').exists()).toBe(true);
  });

  it('should render the handle element', () => {
    const wrapper = mount(Diff);
    expect(wrapper.find('.px-diff__handle').exists()).toBe(true);
  });

  it('should render before and after panels', () => {
    const wrapper = mount(Diff);
    expect(wrapper.find('.px-diff__before').exists()).toBe(true);
    expect(wrapper.find('.px-diff__after').exists()).toBe(true);
  });

  it('should have ARIA role separator on handle', () => {
    const wrapper = mount(Diff);
    const handle = wrapper.find('.px-diff__handle');
    expect(handle.attributes('role')).toBe('separator');
  });

  it('should set aria-valuenow to initial position', () => {
    const wrapper = mount(Diff, { props: { initialPosition: 30 } });
    const handle = wrapper.find('.px-diff__handle');
    expect(handle.attributes('aria-valuenow')).toBe('30');
  });

  // ---------------------------------------------------------------------------
  // Slot mode
  // ---------------------------------------------------------------------------
  it('should render custom before slot content', () => {
    const wrapper = mount(Diff, {
      slots: {
        before: '<div class="custom-before">Before</div>',
      },
    });
    expect(wrapper.find('.custom-before').exists()).toBe(true);
  });

  it('should render custom after slot content', () => {
    const wrapper = mount(Diff, {
      slots: {
        after: '<div class="custom-after">After</div>',
      },
    });
    expect(wrapper.find('.custom-after').exists()).toBe(true);
  });

  it('should render both slots simultaneously', () => {
    const wrapper = mount(Diff, {
      slots: {
        before: '<img src="a.png" class="slot-a" />',
        after: '<img src="b.png" class="slot-b" />',
      },
    });
    expect(wrapper.find('.slot-a').exists()).toBe(true);
    expect(wrapper.find('.slot-b').exists()).toBe(true);
  });

  // ---------------------------------------------------------------------------
  // Pixelate mode (src prop)
  // ---------------------------------------------------------------------------
  it('should render canvas and hidden img when src is provided', () => {
    const wrapper = mount(Diff, { props: { src: TEST_SRC } });
    expect(wrapper.find('.px-diff__after canvas').exists()).toBe(true);
    const img = wrapper.find('.px-diff__after img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('style')).toContain('display: none');
  });

  it('should render original img in before panel when src is provided', () => {
    const wrapper = mount(Diff, { props: { src: TEST_SRC } });
    const beforeImg = wrapper.find('.px-diff__before img');
    expect(beforeImg.exists()).toBe(true);
    expect(beforeImg.attributes('src')).toBe(TEST_SRC);
  });

  // ---------------------------------------------------------------------------
  // Slider position
  // ---------------------------------------------------------------------------
  it('should apply initialPosition to handle style', () => {
    const wrapper = mount(Diff, { props: { initialPosition: 25 } });
    const handle = wrapper.find('.px-diff__handle');
    expect(handle.attributes('style')).toContain('left: 25%');
  });

  it('should default initialPosition to 50', () => {
    const wrapper = mount(Diff);
    const handle = wrapper.find('.px-diff__handle');
    expect(handle.attributes('style')).toContain('left: 50%');
  });

  it('should clamp initialPosition below 0 to 0', () => {
    const wrapper = mount(Diff, { props: { initialPosition: -10 } });
    const handle = wrapper.find('.px-diff__handle');
    expect(handle.attributes('style')).toContain('left: 0%');
  });

  it('should clamp initialPosition above 100 to 100', () => {
    const wrapper = mount(Diff, { props: { initialPosition: 150 } });
    const handle = wrapper.find('.px-diff__handle');
    expect(handle.attributes('style')).toContain('left: 100%');
  });

  // ---------------------------------------------------------------------------
  // Pointer interaction
  // ---------------------------------------------------------------------------
  it('should emit change on pointer movement', async () => {
    const wrapper = mount(Diff, {
      attachTo: document.body,
    });
    const container = wrapper.find('.px-diff');
    const grip = wrapper.find('.px-diff__handle-grip');

    // Mock getBoundingClientRect
    const el = container.element as HTMLElement;
    vi.spyOn(el, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      top: 0,
      width: 200,
      height: 100,
      right: 200,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    await grip.trigger('mousedown', { clientX: 100 });
    // Simulate mousemove on window
    const moveEvent = new MouseEvent('mousemove', { clientX: 150 });
    window.dispatchEvent(moveEvent);
    await nextTick();

    const upEvent = new MouseEvent('mouseup');
    window.dispatchEvent(upEvent);
    await nextTick();

    expect(wrapper.emitted('change')).toBeTruthy();
    wrapper.unmount();
  });

  // ---------------------------------------------------------------------------
  // Keyboard interaction
  // ---------------------------------------------------------------------------
  it('should decrease position on ArrowLeft', async () => {
    const wrapper = mount(Diff, { props: { initialPosition: 50 } });
    const handle = wrapper.find('.px-diff__handle');

    await handle.trigger('keydown', { key: 'ArrowLeft' });
    await nextTick();

    expect(wrapper.emitted('change')).toBeTruthy();
    const emitted = wrapper.emitted('change')!;
    expect(emitted[0][0]).toBe(49);
  });

  it('should increase position on ArrowRight', async () => {
    const wrapper = mount(Diff, { props: { initialPosition: 50 } });
    const handle = wrapper.find('.px-diff__handle');

    await handle.trigger('keydown', { key: 'ArrowRight' });
    await nextTick();

    expect(wrapper.emitted('change')).toBeTruthy();
    const emitted = wrapper.emitted('change')!;
    expect(emitted[0][0]).toBe(51);
  });

  it('should move by 10% with Shift+Arrow', async () => {
    const wrapper = mount(Diff, { props: { initialPosition: 50 } });
    const handle = wrapper.find('.px-diff__handle');

    await handle.trigger('keydown', { key: 'ArrowLeft', shiftKey: true });
    await nextTick();

    const emitted = wrapper.emitted('change')!;
    expect(emitted[0][0]).toBe(40);
  });

  it('should not go below 0 on ArrowLeft', async () => {
    const wrapper = mount(Diff, { props: { initialPosition: 0 } });
    const handle = wrapper.find('.px-diff__handle');

    await handle.trigger('keydown', { key: 'ArrowLeft' });
    await nextTick();

    const emitted = wrapper.emitted('change')!;
    expect(emitted[0][0]).toBe(0);
  });

  it('should not go above 100 on ArrowRight', async () => {
    const wrapper = mount(Diff, { props: { initialPosition: 100 } });
    const handle = wrapper.find('.px-diff__handle');

    await handle.trigger('keydown', { key: 'ArrowRight' });
    await nextTick();

    const emitted = wrapper.emitted('change')!;
    expect(emitted[0][0]).toBe(100);
  });

  // ---------------------------------------------------------------------------
  // Props
  // ---------------------------------------------------------------------------
  it('should apply width to container', () => {
    const wrapper = mount(Diff, { props: { width: 400 } });
    expect(wrapper.find('.px-diff').attributes('style')).toContain('width: 400px');
  });

  it('should apply height to container', () => {
    const wrapper = mount(Diff, { props: { height: '300px' } });
    expect(wrapper.find('.px-diff').attributes('style')).toContain('height: 300px');
  });

  it('should apply string width', () => {
    const wrapper = mount(Diff, { props: { width: '80%' } });
    expect(wrapper.find('.px-diff').attributes('style')).toContain('width: 80%');
  });

  it('should accept color prop for handle', () => {
    const wrapper = mount(Diff, { props: { color: 'primary' } });
    expect(wrapper.find('.px-diff').classes()).toContain('px-diff--primary');
  });

  // ---------------------------------------------------------------------------
  // Exposed methods
  // ---------------------------------------------------------------------------
  it('should expose setPosition method', async () => {
    const wrapper = mount(Diff, { props: { initialPosition: 50 } });
    expect(typeof wrapper.vm.setPosition).toBe('function');

    wrapper.vm.setPosition(75);
    await nextTick();

    expect(wrapper.vm.getPosition()).toBe(75);
  });

  it('should expose getPosition method', () => {
    const wrapper = mount(Diff, { props: { initialPosition: 30 } });
    expect(wrapper.vm.getPosition()).toBe(30);
  });

  it('should clamp setPosition value', async () => {
    const wrapper = mount(Diff, { props: { initialPosition: 50 } });

    wrapper.vm.setPosition(200);
    await nextTick();
    expect(wrapper.vm.getPosition()).toBe(100);

    wrapper.vm.setPosition(-50);
    await nextTick();
    expect(wrapper.vm.getPosition()).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Index / install
// ---------------------------------------------------------------------------
describe('Diff/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxDiff.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxDiff).toBe(Diff);
  });

  it('should enhance Diff with install method', () => {
    const enhanced = withInstall(Diff);
    expect(enhanced).toBe(PxDiff);
  });
});
