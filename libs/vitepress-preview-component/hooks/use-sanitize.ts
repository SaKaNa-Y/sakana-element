/**
 * Lightweight HTML sanitizer for documentation preview content.
 * Strips <script> tags and on* event handler attributes to prevent XSS
 * when rendering code descriptions and highlighted source via v-html.
 */
export function sanitizeHtml(html: string): string {
  if (!html || typeof html !== 'string') return '';

  return (
    html
      // Remove <script>...</script> blocks (including multiline)
      .replace(/<script[\s>][\s\S]*?<\/script>/gi, '')
      // Remove standalone <script> tags
      .replace(/<\/?script[^>]*>/gi, '')
      // Remove on* event handler attributes (e.g. onclick, onerror, onload)
      .replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
  );
}
