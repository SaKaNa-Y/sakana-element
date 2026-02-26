import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { PxPixelate } from './index';
import Pixelate from './Pixelate.vue';

// Helper: create a small test image as base64 data URL (works in browser mode)
function createTestImage(width = 4, height = 4): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(0, 0, width / 2, height / 2);
  ctx.fillStyle = '#00FF00';
  ctx.fillRect(width / 2, 0, width / 2, height / 2);
  ctx.fillStyle = '#0000FF';
  ctx.fillRect(0, height / 2, width / 2, height / 2);
  ctx.fillStyle = '#FFFF00';
  ctx.fillRect(width / 2, height / 2, width / 2, height / 2);
  return canvas.toDataURL('image/png');
}

// Helper: poll until the component emits the expected event count
async function waitForEmit(
  wrapper: ReturnType<typeof mount>,
  event: string,
  count = 1,
  timeout = 3000,
): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const emitted = wrapper.emitted(event);
    if (emitted && emitted.length >= count) return;
    await new Promise((r) => setTimeout(r, 10));
  }
}

const TEST_SRC = createTestImage(4, 4);

// ---------------------------------------------------------------------------
// Rendering basics
// ---------------------------------------------------------------------------
describe('Pixelate.vue', () => {
  it('should render container with px-pixelate class', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    expect(wrapper.find('.px-pixelate').exists()).toBe(true);
  });

  it('should render a canvas element', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    expect(wrapper.find('canvas').exists()).toBe(true);
  });

  it('should render a hidden img element for source loading', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('style')).toContain('display: none');
  });

  it('should set img src to the provided src prop', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    expect(wrapper.find('img').attributes('src')).toBe(TEST_SRC);
  });

  it('should set canvas image-rendering to pixelated', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    const style = wrapper.find('canvas').attributes('style') ?? '';
    expect(style).toContain('image-rendering: pixelated');
  });

  // ---------------------------------------------------------------------------
  // Width & Height
  // ---------------------------------------------------------------------------
  it('should apply width style when width prop is a number', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC, width: 200 } });
    const style = wrapper.find('.px-pixelate').attributes('style');
    expect(style).toContain('width: 200px');
  });

  it('should apply width style when width prop is a string', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC, width: '50%' } });
    const style = wrapper.find('.px-pixelate').attributes('style');
    expect(style).toContain('width: 50%');
  });

  it('should apply height style when height prop is a number', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC, height: 150 } });
    const style = wrapper.find('.px-pixelate').attributes('style');
    expect(style).toContain('height: 150px');
  });

  it('should apply height style when height prop is a string', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC, height: '80vh' } });
    const style = wrapper.find('.px-pixelate').attributes('style');
    expect(style).toContain('height: 80vh');
  });

  // ---------------------------------------------------------------------------
  // Events
  // ---------------------------------------------------------------------------
  it('should emit rendered event after pixelation completes', async () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    await waitForEmit(wrapper, 'rendered');
    expect(wrapper.emitted('rendered')).toBeTruthy();
  });

  it('should emit error event when image fails to load', async () => {
    const wrapper = mount(Pixelate, {
      props: { src: 'invalid://not-a-real-image' },
    });
    await waitForEmit(wrapper, 'error');
    expect(wrapper.emitted('error')).toBeTruthy();
  });

  // ---------------------------------------------------------------------------
  // Props behaviour
  // ---------------------------------------------------------------------------
  it('should render with default pixelSize without errors', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    expect(wrapper.find('.px-pixelate').exists()).toBe(true);
  });

  it('should accept a custom pixelSize prop', async () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC, pixelSize: 16 } });
    await waitForEmit(wrapper, 'rendered');
    expect(wrapper.emitted('rendered')).toBeTruthy();
  });

  it('should accept grayscale prop', async () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC, grayscale: true } });
    await waitForEmit(wrapper, 'rendered');
    expect(wrapper.emitted('rendered')).toBeTruthy();
  });

  it('should accept palette prop with hex strings', async () => {
    const wrapper = mount(Pixelate, {
      props: { src: TEST_SRC, palette: ['#000000', '#FFFFFF', '#FF0000'] },
    });
    await waitForEmit(wrapper, 'rendered');
    expect(wrapper.emitted('rendered')).toBeTruthy();
  });

  it('should accept palette prop with RGB tuples', async () => {
    const wrapper = mount(Pixelate, {
      props: {
        src: TEST_SRC,
        palette: [
          [0, 0, 0],
          [255, 255, 255],
          [255, 0, 0],
        ],
      },
    });
    await waitForEmit(wrapper, 'rendered');
    expect(wrapper.emitted('rendered')).toBeTruthy();
  });

  it('should accept background prop', async () => {
    const wrapper = mount(Pixelate, {
      props: { src: TEST_SRC, background: '#000000' },
    });
    await waitForEmit(wrapper, 'rendered');
    expect(wrapper.emitted('rendered')).toBeTruthy();
  });

  // ---------------------------------------------------------------------------
  // Exposed methods / refs
  // ---------------------------------------------------------------------------
  it('should expose canvasRef as HTMLCanvasElement', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    expect(wrapper.vm.canvasRef).toBeInstanceOf(HTMLCanvasElement);
  });

  it('should expose originRef as HTMLImageElement', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    expect(wrapper.vm.originRef).toBeInstanceOf(HTMLImageElement);
  });

  it('should expose render() as a function', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    expect(typeof wrapper.vm.render).toBe('function');
  });

  it('should expose getSize() returning width and height', async () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    await waitForEmit(wrapper, 'rendered');
    const size = wrapper.vm.getSize();
    expect(size).toHaveProperty('width');
    expect(size).toHaveProperty('height');
    expect(typeof size.width).toBe('number');
    expect(typeof size.height).toBe('number');
  });

  it('should expose getImageData() returning ImageData after render', async () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    await waitForEmit(wrapper, 'rendered');
    const data = wrapper.vm.getImageData();
    expect(data).toBeInstanceOf(ImageData);
  });

  it('should return null from getImageData() before image loads', () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    // synchronous check – image onload hasn't fired yet
    expect(wrapper.vm.getImageData()).toBeNull();
  });

  // ---------------------------------------------------------------------------
  // Manual render()
  // ---------------------------------------------------------------------------
  it('should re-pixelate when render() is called manually', async () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    await waitForEmit(wrapper, 'rendered', 1);
    const before = wrapper.emitted('rendered')!.length;

    wrapper.vm.render();
    await waitForEmit(wrapper, 'rendered', before + 1);
    expect(wrapper.emitted('rendered')!.length).toBeGreaterThan(before);
  });

  // ---------------------------------------------------------------------------
  // Reactivity
  // ---------------------------------------------------------------------------
  it('should re-render when src changes', async () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC } });
    await waitForEmit(wrapper, 'rendered', 1);

    const newSrc = createTestImage(8, 8);
    await wrapper.setProps({ src: newSrc });
    await waitForEmit(wrapper, 'rendered', 2);
    expect(wrapper.emitted('rendered')!.length).toBeGreaterThanOrEqual(2);
  });

  it('should re-render when pixelSize changes', async () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC, pixelSize: 4 } });
    await waitForEmit(wrapper, 'rendered', 1);

    await wrapper.setProps({ pixelSize: 2 });
    await waitForEmit(wrapper, 'rendered', 2);
    expect(wrapper.emitted('rendered')!.length).toBeGreaterThanOrEqual(2);
  });

  it('should re-render when grayscale changes', async () => {
    const wrapper = mount(Pixelate, { props: { src: TEST_SRC, grayscale: false } });
    await waitForEmit(wrapper, 'rendered', 1);

    await wrapper.setProps({ grayscale: true });
    await waitForEmit(wrapper, 'rendered', 2);
    expect(wrapper.emitted('rendered')!.length).toBeGreaterThanOrEqual(2);
  });
});

// ---------------------------------------------------------------------------
// Index / install
// ---------------------------------------------------------------------------
describe('Pixelate/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxPixelate.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxPixelate).toBe(Pixelate);
  });

  it('should enhance Pixelate with install method', () => {
    const enhanced = withInstall(Pixelate);
    expect(enhanced).toBe(PxPixelate);
  });
});
