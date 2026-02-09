export interface OverlayProps {
  mask?: boolean;
  zIndex?: number;
  overlayClass?: string | string[] | Record<string, boolean>;
}

export type OverlayEmits = (e: 'click', value: MouseEvent) => void;
