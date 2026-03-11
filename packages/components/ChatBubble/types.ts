export type ChatBubbleType = 'primary' | 'success' | 'info' | 'warning' | 'danger';
export type ChatBubblePlacement = 'start' | 'end';

export interface ChatBubbleProps {
  placement?: ChatBubblePlacement;
  type?: ChatBubbleType;
  color?: string;
  name?: string;
  time?: string;
  status?: string;
}
