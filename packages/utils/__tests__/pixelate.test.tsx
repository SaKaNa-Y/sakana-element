import { describe, expect, it, vi } from 'vitest';
import { pixelateCanvas } from '../pixelate';

/**
 * Creates a mock CanvasRenderingContext2D that records calls.
 */
function createMockCtx() {
  const fillRects: Array<{ x: number; y: number; w: number; h: number; style: string }> = [];
  let currentFillStyle = '';

  const ctx = {
    drawImage: vi.fn(),
    getImageData: vi.fn(),
    get fillStyle() {
      return currentFillStyle;
    },
    set fillStyle(val: string) {
      currentFillStyle = val;
    },
    fillRect: vi.fn(function (this: typeof ctx, x: number, y: number, w: number, h: number) {
      fillRects.push({ x, y, w, h, style: currentFillStyle });
    }),
  };

  return { ctx, fillRects };
}

/**
 * Creates a mock canvas + image with given dimensions and pixel data.
 * Each pixel has 4 values (RGBA) in the data array.
 */
function createMocks(width: number, height: number, pixelData: number[]) {
  const { ctx, fillRects } = createMockCtx();

  ctx.getImageData.mockReturnValue({
    data: new Uint8ClampedArray(pixelData),
  });

  const canvas = {
    width: 0,
    height: 0,
    getContext: vi.fn().mockReturnValue(ctx),
  } as unknown as HTMLCanvasElement;

  const img = {
    naturalWidth: width,
    naturalHeight: height,
  } as unknown as HTMLImageElement;

  return { canvas, img, ctx, fillRects };
}

describe('pixelateCanvas', () => {
  it('should return early when getContext returns null', () => {
    const canvas = {
      width: 0,
      height: 0,
      getContext: vi.fn().mockReturnValue(null),
    } as unknown as HTMLCanvasElement;

    const img = { naturalWidth: 2, naturalHeight: 2 } as unknown as HTMLImageElement;

    // Should not throw
    pixelateCanvas(canvas, img, { pixelSize: 1 });
    expect(canvas.getContext).toHaveBeenCalledWith('2d');
  });

  it('should set canvas dimensions to image natural size', () => {
    // 2x2 image, all red pixels (RGBA)
    const data = [255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255];
    const { canvas, img } = createMocks(2, 2, data);

    pixelateCanvas(canvas, img, { pixelSize: 1 });

    expect(canvas.width).toBe(2);
    expect(canvas.height).toBe(2);
  });

  it('should draw original image then clear with background', () => {
    const data = [255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255];
    const { canvas, img, ctx, fillRects } = createMocks(2, 2, data);

    pixelateCanvas(canvas, img, { pixelSize: 1, background: '#000000' });

    expect(ctx.drawImage).toHaveBeenCalledWith(img, 0, 0, 2, 2);
    // First fillRect is the background clear
    expect(fillRects[0]).toEqual({ x: 0, y: 0, w: 2, h: 2, style: '#000000' });
  });

  it('should use default white background', () => {
    const data = [255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255];
    const { canvas, img, fillRects } = createMocks(2, 2, data);

    pixelateCanvas(canvas, img, { pixelSize: 1 });

    expect(fillRects[0].style).toBe('#FFFFFF');
  });

  it('should render pixel blocks with averaged colors', () => {
    // 2x2 image with pixelSize=2 → all pixels averaged into 1 block
    // Pixel colors: (255,0,0), (0,255,0), (0,0,255), (128,128,128)
    const data = [255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 128, 128, 128, 255];
    const { canvas, img, fillRects } = createMocks(2, 2, data);

    pixelateCanvas(canvas, img, { pixelSize: 2 });

    // Average: r=(255+0+0+128)/4=96 (rounded), g=(0+255+0+128)/4=96, b=(0+0+255+128)/4=96
    const pixelBlock = fillRects[1]; // index 0 is background
    expect(pixelBlock.style).toBe('rgb(96,96,96)');
    expect(pixelBlock.x).toBe(0);
    expect(pixelBlock.y).toBe(0);
    expect(pixelBlock.w).toBe(2);
    expect(pixelBlock.h).toBe(2);
  });

  it('should render each pixel individually when pixelSize=1', () => {
    // 2x1 image
    const data = [255, 0, 0, 255, 0, 255, 0, 255];
    const { canvas, img, fillRects } = createMocks(2, 1, data);

    pixelateCanvas(canvas, img, { pixelSize: 1 });

    // fillRects[0] = background, [1] = pixel(0,0), [2] = pixel(1,0)
    expect(fillRects[1].style).toBe('rgb(255,0,0)');
    expect(fillRects[2].style).toBe('rgb(0,255,0)');
  });

  it('should clamp pixelSize to minimum 1', () => {
    const data = [100, 100, 100, 255];
    const { canvas, img, fillRects } = createMocks(1, 1, data);

    pixelateCanvas(canvas, img, { pixelSize: 0 });

    // Should still produce a pixel block (not infinite loop)
    expect(fillRects.length).toBe(2); // background + 1 pixel
    expect(fillRects[1].style).toBe('rgb(100,100,100)');
  });

  it('should apply grayscale transform using ITU-R BT.601 luma', () => {
    // Single pixel: pure red (255, 0, 0)
    // Gray = round(0.299*255 + 0.587*0 + 0.114*0) = round(76.245) = 76
    const data = [255, 0, 0, 255];
    const { canvas, img, fillRects } = createMocks(1, 1, data);

    pixelateCanvas(canvas, img, { pixelSize: 1, grayscale: true });

    expect(fillRects[1].style).toBe('rgb(76,76,76)');
  });

  it('should apply grayscale to green channel correctly', () => {
    // Pure green (0, 255, 0)
    // Gray = round(0.299*0 + 0.587*255 + 0.114*0) = round(149.685) = 150
    const data = [0, 255, 0, 255];
    const { canvas, img, fillRects } = createMocks(1, 1, data);

    pixelateCanvas(canvas, img, { pixelSize: 1, grayscale: true });

    expect(fillRects[1].style).toBe('rgb(150,150,150)');
  });

  it('should apply palette mapping with hex strings', () => {
    // Pixel is (200, 50, 50). Palette has #FF0000 (255,0,0) and #0000FF (0,0,255)
    // Distance to red: (200-255)^2 + (50-0)^2 + (50-0)^2 = 3025+2500+2500 = 8025
    // Distance to blue: (200-0)^2 + (50-0)^2 + (50-255)^2 = 40000+2500+42025 = 84525
    // Nearest = red
    const data = [200, 50, 50, 255];
    const { canvas, img, fillRects } = createMocks(1, 1, data);

    pixelateCanvas(canvas, img, { pixelSize: 1, palette: ['#FF0000', '#0000FF'] });

    expect(fillRects[1].style).toBe('rgb(255,0,0)');
  });

  it('should apply palette mapping with RGB arrays', () => {
    // Pixel is (10, 10, 200). Palette: [0,0,255] and [255,0,0]
    // Nearest = blue
    const data = [10, 10, 200, 255];
    const { canvas, img, fillRects } = createMocks(1, 1, data);

    pixelateCanvas(canvas, img, {
      pixelSize: 1,
      palette: [
        [0, 0, 255],
        [255, 0, 0],
      ],
    });

    expect(fillRects[1].style).toBe('rgb(0,0,255)');
  });

  it('should return original color when palette is empty', () => {
    const data = [42, 84, 126, 255];
    const { canvas, img, fillRects } = createMocks(1, 1, data);

    pixelateCanvas(canvas, img, { pixelSize: 1, palette: [] });

    expect(fillRects[1].style).toBe('rgb(42,84,126)');
  });

  it('should return exact match immediately from palette', () => {
    // Pixel exactly matches a palette color
    const data = [255, 0, 0, 255];
    const { canvas, img, fillRects } = createMocks(1, 1, data);

    pixelateCanvas(canvas, img, {
      pixelSize: 1,
      palette: [
        [0, 0, 255],
        [255, 0, 0],
        [0, 255, 0],
      ],
    });

    expect(fillRects[1].style).toBe('rgb(255,0,0)');
  });

  it('should combine grayscale and palette mapping', () => {
    // Pixel: (255, 0, 0) → grayscale: 76
    // Palette: [0,0,0] and [255,255,255]
    // Distance to black: 76^2*3 = 17328
    // Distance to white: (76-255)^2*3 = 96267
    // Nearest = black
    const data = [255, 0, 0, 255];
    const { canvas, img, fillRects } = createMocks(1, 1, data);

    pixelateCanvas(canvas, img, {
      pixelSize: 1,
      grayscale: true,
      palette: [
        [0, 0, 0],
        [255, 255, 255],
      ],
    });

    expect(fillRects[1].style).toBe('rgb(0,0,0)');
  });

  it('should handle partial blocks at image edges', () => {
    // 3x1 image with pixelSize=2 → block 1 is 2px wide, block 2 is 1px wide
    const data = [100, 0, 0, 255, 200, 0, 0, 255, 50, 50, 50, 255];
    const { canvas, img, fillRects } = createMocks(3, 1, data);

    pixelateCanvas(canvas, img, { pixelSize: 2 });

    // Block 1: avg of (100,0,0) and (200,0,0) = (150, 0, 0)
    expect(fillRects[1].style).toBe('rgb(150,0,0)');
    expect(fillRects[1].w).toBe(2);
    // Block 2: just (50,50,50)
    expect(fillRects[2].style).toBe('rgb(50,50,50)');
    expect(fillRects[2].w).toBe(1);
  });

  it('should handle mixed palette with hex and RGB arrays', () => {
    // normalizePalette should handle mixed input
    const data = [250, 5, 5, 255];
    const { canvas, img, fillRects } = createMocks(1, 1, data);

    pixelateCanvas(canvas, img, {
      pixelSize: 1,
      palette: ['#00FF00', [255, 0, 0]],
    });

    // Nearest to (250,5,5) is [255,0,0]
    expect(fillRects[1].style).toBe('rgb(255,0,0)');
  });
});
