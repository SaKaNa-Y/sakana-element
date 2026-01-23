/**
 * CSS Houdini Paint Worklet - Pixel Border
 *
 * Creates authentic pixelated borders for retro UI aesthetic
 *
 * Custom Properties:
 * - --px-border-color: Border color (default: #000000)
 * - --px-border-width: Border width in pixels (default: 2)
 * - --px-border-pixel-size: Size of each pixel block (default: 2)
 */

class PixelBorderPainter {
  static get inputProperties() {
    return [
      '--px-border-color',
      '--px-border-width',
      '--px-border-pixel-size'
    ];
  }

  paint(ctx, size, properties) {
    // Get custom property values
    const borderColor = properties.get('--px-border-color').toString().trim() || '#000000';
    const borderWidth = parseInt(properties.get('--px-border-width').toString()) || 2;
    const pixelSize = parseInt(properties.get('--px-border-pixel-size').toString()) || 2;

    const width = size.width;
    const height = size.height;

    ctx.fillStyle = borderColor;

    // Draw top border (pixelated)
    for (let x = 0; x < width; x += pixelSize) {
      for (let y = 0; y < borderWidth; y += pixelSize) {
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }

    // Draw bottom border (pixelated)
    for (let x = 0; x < width; x += pixelSize) {
      for (let y = height - borderWidth; y < height; y += pixelSize) {
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }

    // Draw left border (pixelated)
    for (let x = 0; x < borderWidth; x += pixelSize) {
      for (let y = 0; y < height; y += pixelSize) {
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }

    // Draw right border (pixelated)
    for (let x = width - borderWidth; x < width; x += pixelSize) {
      for (let y = 0; y < height; y += pixelSize) {
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }

    // Optional: Add corner pixels for more pronounced pixel effect
    const cornerSize = borderWidth + pixelSize;

    // Top-left corner enhancement
    ctx.fillRect(0, 0, cornerSize, cornerSize);

    // Top-right corner enhancement
    ctx.fillRect(width - cornerSize, 0, cornerSize, cornerSize);

    // Bottom-left corner enhancement
    ctx.fillRect(0, height - cornerSize, cornerSize, cornerSize);

    // Bottom-right corner enhancement
    ctx.fillRect(width - cornerSize, height - cornerSize, cornerSize, cornerSize);
  }
}

// Register the paint worklet
registerPaint('pixel-border', PixelBorderPainter);
