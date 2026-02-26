export interface PixelateProps {
  src: string;
  pixelSize?: number;
  width?: number | string;
  height?: number | string;
  grayscale?: boolean;
  palette?: string[] | number[][];
  background?: string;
}

export interface PixelateEmits {
  (e: 'rendered'): void;
  (e: 'error', event: Event): void;
}

export interface PixelateInstance {
  render(): void;
  canvasRef: HTMLCanvasElement;
  originRef: HTMLImageElement;
  getSize(): { width: number; height: number };
  getImageData(): ImageData | null;
}
