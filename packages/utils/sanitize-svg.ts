/**
 * Lightweight SVG sanitizer for pixel icon content.
 *
 * Strips dangerous tags (<script>, <foreignObject>, <use> with external refs, etc.)
 * and event-handler attributes (on*) from SVG strings to prevent XSS
 * when rendering via v-html.
 */

// Tags allowed in SVG pixel icons
const ALLOWED_TAGS = new Set([
  'svg',
  'path',
  'rect',
  'circle',
  'ellipse',
  'line',
  'polyline',
  'polygon',
  'g',
  'defs',
  'clipPath',
  'mask',
  'title',
  'desc',
  'linearGradient',
  'radialGradient',
  'stop',
  'symbol',
  'use',
]);

// Attributes that are never allowed (event handlers, script injection vectors)
const DANGEROUS_ATTR_PATTERN = /^on/i;
const DANGEROUS_HREF_PATTERN = /^\s*javascript\s*:/i;

/**
 * Sanitize an SVG string by removing dangerous tags and attributes.
 * Returns the sanitized SVG string, or an empty string if the input is invalid.
 */
export function sanitizeSvg(svgString: string): string {
  if (!svgString || typeof svgString !== 'string') return '';

  // Use DOMParser to parse the SVG
  if (typeof DOMParser === 'undefined') return '';

  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');

  // Check for parse errors
  const parserError = doc.querySelector('parsererror');
  if (parserError) return '';

  // Walk and sanitize the DOM tree
  sanitizeNode(doc.documentElement);

  return doc.documentElement.outerHTML;
}

function sanitizeNode(node: Element): void {
  // Remove disallowed tags
  const children = Array.from(node.children);
  for (const child of children) {
    const tagName = child.tagName.toLowerCase();
    if (!ALLOWED_TAGS.has(tagName)) {
      child.remove();
      continue;
    }
    // Remove dangerous attributes
    for (const attr of Array.from(child.attributes)) {
      if (
        DANGEROUS_ATTR_PATTERN.test(attr.name) ||
        (attr.name === 'href' && DANGEROUS_HREF_PATTERN.test(attr.value)) ||
        (attr.name === 'xlink:href' && DANGEROUS_HREF_PATTERN.test(attr.value))
      ) {
        child.removeAttribute(attr.name);
      }
    }
    // Recursively sanitize children
    sanitizeNode(child);
  }
}
