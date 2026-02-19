export type ApiCategory =
  | 'style'
  | 'size'
  | 'color'
  | 'state'
  | 'behavior'
  | 'content'
  | 'event'
  | 'slot'
  | 'expose'
  | 'method';

export interface ApiItem {
  name: string;
  desc: { zh: string; en: string };
  category?: ApiCategory;
  component?: string;
  type?: string;
  default?: string;
}

export interface ApiSection {
  title: { zh: string; en: string };
  items: ApiItem[];
}
