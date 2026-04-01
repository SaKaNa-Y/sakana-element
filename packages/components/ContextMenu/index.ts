import { withInstall } from '@sakana-element/utils';
import ContextMenu from './ContextMenu.vue';
import ContextMenuCheckboxItem from './ContextMenuCheckboxItem.vue';
import ContextMenuItem from './ContextMenuItem.vue';
import ContextMenuLabel from './ContextMenuLabel.vue';
import ContextMenuRadioGroup from './ContextMenuRadioGroup.vue';
import ContextMenuRadioItem from './ContextMenuRadioItem.vue';
import ContextMenuSeparator from './ContextMenuSeparator.vue';
import ContextMenuSub from './ContextMenuSub.vue';

export const PxContextMenu = withInstall(ContextMenu);
export const PxContextMenuItem = withInstall(ContextMenuItem);
export const PxContextMenuCheckboxItem = withInstall(ContextMenuCheckboxItem);
export const PxContextMenuRadioGroup = withInstall(ContextMenuRadioGroup);
export const PxContextMenuRadioItem = withInstall(ContextMenuRadioItem);
export const PxContextMenuSeparator = withInstall(ContextMenuSeparator);
export const PxContextMenuLabel = withInstall(ContextMenuLabel);
export const PxContextMenuSub = withInstall(ContextMenuSub);

export * from './types';
