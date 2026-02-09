/**
 * CSS Houdini Paint Worklet - Pixel Shadow
 *
 * Creates pixelated shadow effect for depth
 *
 * Custom Properties:
 * - --px-shadow-color: Shadow color (default: rgba(0,0,0,0.3))
 * - --px-shadow-offset: Shadow offset in pixels (default: 4)
 * - --px-border-pixel-size: Size of each pixel block (default: 2)
 */

class PixelShadowPainter {
  static get inputProperties() {
    return ['--px-shadow-color', '--px-shadow-offset', '--px-border-pixel-size'];
  }

  paint(ctx, size, properties) {
    // Get custom property values
    const shadowColor = properties.get('--px-shadow-color').toString().trim() || 'rgba(0,0,0,0.3)';
    const shadowOffset = parseInt(properties.get('--px-shadow-offset').toString(), 10) || 4;
    const pixelSize = parseInt(properties.get('--px-border-pixel-size').toString(), 10) || 2;

    const width = size.width;
    const height = size.height;

    ctx.fillStyle = shadowColor;

    // Draw right shadow (pixelated)
    for (let x = width; x < width + shadowOffset; x += pixelSize) {
      for (let y = shadowOffset; y < height + shadowOffset; y += pixelSize) {
        // Create stepped shadow effect
        const distance = x - width;
        if (distance < shadowOffset) {
          ctx.globalAlpha = 1 - distance / shadowOffset;
          ctx.fillRect(x, y, pixelSize, pixelSize);
        }
      }
    }

    // Draw bottom shadow (pixelated)
    ctx.globalAlpha = 1;
    for (let x = shadowOffset; x < width; x += pixelSize) {
      for (let y = height; y < height + shadowOffset; y += pixelSize) {
        const distance = y - height;
        if (distance < shadowOffset) {
          ctx.globalAlpha = 1 - distance / shadowOffset;
          ctx.fillRect(x, y, pixelSize, pixelSize);
        }
      }
    }

    // Draw corner shadow
    ctx.globalAlpha = 0.5;
    for (let x = width; x < width + shadowOffset; x += pixelSize) {
      for (let y = height; y < height + shadowOffset; y += pixelSize) {
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }

    ctx.globalAlpha = 1;
  }
}

// Register the paint worklet
registerPaint('pixel-shadow', PixelShadowPainter);
