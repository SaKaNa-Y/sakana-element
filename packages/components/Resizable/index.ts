import { withInstall } from '@sakana-element/utils';
import ResizableGroup from './ResizableGroup.vue';
import ResizableHandle from './ResizableHandle.vue';
import ResizablePanel from './ResizablePanel.vue';

export const PxResizableGroup = withInstall(ResizableGroup);
export const PxResizablePanel = withInstall(ResizablePanel);
export const PxResizableHandle = withInstall(ResizableHandle);

export * from './types';
