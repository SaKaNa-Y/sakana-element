export type AvatarSize = 'large' | 'default' | 'small';
export type AvatarShape = 'circle' | 'square';

export type AvatarStatus = 'online' | 'offline';

export interface AvatarProps {
  size?: AvatarSize;
  shape?: AvatarShape;
  border?: boolean;
  color?: string;
  status?: AvatarStatus;
}
