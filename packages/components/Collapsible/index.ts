import { withInstall } from '@sakana-element/utils';
import Collapsible from './Collapsible.vue';
import CollapsibleContent from './CollapsibleContent.vue';
import CollapsibleTrigger from './CollapsibleTrigger.vue';

export const PxCollapsible = withInstall(Collapsible);
export const PxCollapsibleTrigger = withInstall(CollapsibleTrigger);
export const PxCollapsibleContent = withInstall(CollapsibleContent);

export * from './types';
