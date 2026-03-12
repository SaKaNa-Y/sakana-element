export interface DiffProps {
  /** Single image source — "after" side auto-pixelates this image */
  src?: string;
  /** Pixel block size for pixelation (default: 8) */
  pixelSize?: number;
  /** Apply grayscale transform to the pixelated side */
  grayscale?: boolean;
  /** Constrain colors to a custom palette (hex strings or RGB tuples) */
  palette?: string[] | number[][];
  /** Background color for transparent areas (default: '#FFFFFF') */
  background?: string;
  /** Initial slider position 0-100 (default: 50) */
  initialPosition?: number;
  /** Container width */
  width?: number | string;
  /** Container height */
  height?: number | string;
  /** Handle accent color (preset name or hex) */
  color?: string;
}

export interface DiffEmits {
  (e: 'change', position: number): void;
  (e: 'rendered'): void;
  (e: 'error', event: Event): void;
}

export interface DiffInstance {
  setPosition(position: number): void;
  getPosition(): number;
}
