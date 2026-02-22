import { withInstall } from '@sakana-element/utils';
import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

export const PxBreadcrumb = withInstall(Breadcrumb);
export const PxBreadcrumbItem = withInstall(BreadcrumbItem);

export * from './types';
