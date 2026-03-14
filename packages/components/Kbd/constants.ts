import type { KbdKey, KbdKeyInfo } from './types';

export const KBD_KEY_MAP: Record<KbdKey, KbdKeyInfo> = {
  command: { label: '\u2318' },
  shift: { label: '\u21E7' },
  ctrl: { label: 'Ctrl' },
  alt: { label: '\u2325' },
  option: { label: '\u2325' },
  enter: { label: '\u21B5' },
  delete: { label: '\u232B' },
  escape: { label: 'Esc' },
  tab: { label: 'Tab' },
  capslock: { label: 'Caps' },
  up: { label: '\u25B2', icon: 'arrow-up' },
  down: { label: '\u25BC', icon: 'arrow-down' },
  left: { label: '\u25C0', icon: 'arrow-left' },
  right: { label: '\u25B6', icon: 'arrow-right' },
  space: { label: 'Space' },
  win: { label: '\u229E' },
  fn: { label: 'Fn' },
  home: { label: 'Home' },
  end: { label: 'End' },
  pageup: { label: 'PgUp' },
  pagedown: { label: 'PgDn' },
};

export const ARROW_KEYS = new Set<KbdKey>(['up', 'down', 'left', 'right']);
