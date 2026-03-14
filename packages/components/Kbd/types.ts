export type KbdSize = 'small' | 'default' | 'large';

export type KbdKey =
  | 'command'
  | 'shift'
  | 'ctrl'
  | 'alt'
  | 'option'
  | 'enter'
  | 'delete'
  | 'escape'
  | 'tab'
  | 'capslock'
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'space'
  | 'win'
  | 'fn'
  | 'home'
  | 'end'
  | 'pageup'
  | 'pagedown';

export interface KbdKeyInfo {
  label: string;
  icon?: string;
}

export interface KbdProps {
  size?: KbdSize;
  keys?: KbdKey[];
}
