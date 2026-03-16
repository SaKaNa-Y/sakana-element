/**
 * Shared pixelation utilities used by PxPixelate and PxDiff.
 */

function hexToRgb(hex: string): number[] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

function normalizePalette(palette: string[] | number[][]): number[][] {
  return palette.map((c) => (typeof c === 'string' ? hexToRgb(c) : c));
}

function findNearestColor(r: number, g: number, b: number, palette: number[][]): number[] {
  if (palette.length === 0) return [r, g, b];
  let minDist = Infinity;
  let nearest = palette[0];
  for (const color of palette) {
    const dist = (r - color[0]) ** 2 + (g - color[1]) ** 2 + (b - color[2]) ** 2;
    if (dist === 0) return color;
    if (dist < minDist) {
      minDist = dist;
      nearest = color;
    }
  }
  return nearest;
}

export interface PixelateCanvasOptions {
  pixelSize: number;
  grayscale?: boolean;
  palette?: string[] | number[][];
  background?: string;
}

export function pixelateCanvas(
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
  options: PixelateCanvasOptions,
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const { pixelSize, grayscale = false, palette, background = '#FFFFFF' } = options;

  const w = img.naturalWidth;
  const h = img.naturalHeight;
  canvas.width = w;
  canvas.height = h;

  // Draw original image
  ctx.drawImage(img, 0, 0, w, h);

  // Read pixel data
  const imageData = ctx.getImageData(0, 0, w, h);
  const data = imageData.data;
  const ps = Math.max(1, Math.round(pixelSize));

  const normalizedPalette = palette ? normalizePalette(palette) : null;

  // Clear for pixelated render
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, w, h);

  // Process each pixel block
  for (let y = 0; y < h; y += ps) {
    for (let x = 0; x < w; x += ps) {
      const bw = Math.min(ps, w - x);
      const bh = Math.min(ps, h - y);
      let rSum = 0,
        gSum = 0,
        bSum = 0,
        count = 0;

      for (let by = 0; by < bh; by++) {
        for (let bx = 0; bx < bw; bx++) {
          const idx = ((y + by) * w + (x + bx)) * 4;
          rSum += data[idx];
          gSum += data[idx + 1];
          bSum += data[idx + 2];
          count++;
        }
      }

      let r = Math.round(rSum / count);
      let g = Math.round(gSum / count);
      let b = Math.round(bSum / count);

      // Grayscale transform (ITU-R BT.601 luma)
      if (grayscale) {
        const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
        r = g = b = gray;
      }

      // Palette mapping (Euclidean distance in RGB space)
      if (normalizedPalette) {
        [r, g, b] = findNearestColor(r, g, b, normalizedPalette);
      }

      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(x, y, bw, bh);
    }
  }
}
