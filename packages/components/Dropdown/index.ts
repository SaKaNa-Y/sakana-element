import { withInstall } from '@sakana-element/utils';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';

export const PxDropdown = withInstall(Dropdown);
export const PxDropdownItem = withInstall(DropdownItem);

export * from './types';
