import type { Ref } from 'vue';

export interface ResizableGroupProps {
  direction: 'horizontal' | 'vertical';
  autoSaveId?: string;
  keyboardResizeBy?: number;
}

export type ResizableGroupEmits = (e: 'layout', sizes: number[]) => void;

export interface ResizablePanelProps {
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  collapsible?: boolean;
  collapsedSize?: number;
}

export interface ResizablePanelEmits {
  (e: 'resize', size: number): void;
  (e: 'collapse'): void;
  (e: 'expand'): void;
}

export interface ResizablePanelInstance {
  collapse(): void;
  expand(): void;
  getSize(): number;
  resize(size: number): void;
}

export interface ResizableHandleProps {
  disabled?: boolean;
  hitAreaMargins?: number;
}

export type ResizableHandleEmits = (e: 'dragging', isDragging: boolean) => void;

export interface PanelData {
  id: number;
  minSize: number;
  maxSize: number;
  collapsible: boolean;
  collapsedSize: number;
  defaultSize?: number;
}

export interface ResizableGroupContext {
  direction: Ref<'horizontal' | 'vertical'>;
  keyboardResizeBy: Ref<number>;
  registerPanel(data: PanelData): void;
  unregisterPanel(id: number): void;
  getPanelSize(id: number): number;
  setPanelSize(id: number, size: number, force?: boolean): void;
  startResize(handleId: number, onDragEnd?: () => void): void;
  keyboardResize(handleId: number, delta: number): void;
  getNextHandleId(): number;
  registerHandle(id: number): void;
  unregisterHandle(id: number): void;
  panelSizes: Ref<Map<number, number>>;
}
