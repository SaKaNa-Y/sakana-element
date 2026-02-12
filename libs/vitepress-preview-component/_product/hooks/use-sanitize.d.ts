/**
 * Lightweight HTML sanitizer for documentation preview content.
 * Strips <script> tags and on* event handler attributes to prevent XSS
 * when rendering code descriptions and highlighted source via v-html.
 */
export declare function sanitizeHtml(html: string): string;
