import { describe, expect, it } from 'vitest';

import { sanitizeSvg } from '../sanitize-svg';

describe('sanitizeSvg', () => {
  it('should return empty string for falsy input', () => {
    expect(sanitizeSvg('')).toBe('');
    expect(sanitizeSvg(null as any)).toBe('');
    expect(sanitizeSvg(undefined as any)).toBe('');
  });

  it('should pass through clean SVG unchanged', () => {
    const svg = '<svg><rect width="10" height="10"/></svg>';
    const result = sanitizeSvg(svg);
    expect(result).toContain('<rect');
    expect(result).toContain('<svg');
  });

  it('should remove disallowed tags like <script>', () => {
    const svg = '<svg><script>alert("xss")</script><rect/></svg>';
    const result = sanitizeSvg(svg);
    expect(result).toContain('rect');
    expect(result).not.toContain('script');
  });

  it('should remove disallowed tags like <foreignObject>', () => {
    const svg = '<svg><foreignObject><div>hack</div></foreignObject><circle/></svg>';
    const result = sanitizeSvg(svg);
    expect(result).toContain('circle');
    expect(result).not.toContain('foreignObject');
  });

  it('should remove event handler attributes (onclick)', () => {
    const svg = '<svg><rect onclick="alert(1)" width="10"/></svg>';
    const result = sanitizeSvg(svg);
    expect(result).toContain('rect');
    expect(result).toContain('width');
    expect(result).not.toContain('onclick');
  });

  it('should remove javascript: href attributes', () => {
    const svg = '<svg><use href="javascript:alert(1)"/></svg>';
    const result = sanitizeSvg(svg);
    expect(result).toContain('use');
    expect(result).not.toContain('javascript');
  });

  it('should remove javascript: xlink:href attributes', () => {
    const svg =
      '<svg xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="javascript:alert(1)"/></svg>';
    const result = sanitizeSvg(svg);
    expect(result).toContain('use');
    expect(result).not.toContain('javascript');
  });

  it('should remove onmouseover and other on* attributes', () => {
    const svg = '<svg><rect onmouseover="alert(1)"/></svg>';
    const result = sanitizeSvg(svg);
    expect(result).toContain('rect');
    expect(result).not.toContain('onmouseover');
  });

  it('should preserve allowed nested elements', () => {
    const svg = '<svg><g><rect width="5" height="5"/><circle r="3"/></g></svg>';
    const result = sanitizeSvg(svg);
    expect(result).toContain('g');
    expect(result).toContain('rect');
    expect(result).toContain('circle');
  });
});
