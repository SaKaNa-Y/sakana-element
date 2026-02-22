import type { InjectionKey } from 'vue';
import type { BreadcrumbContext } from './types';

export const BREADCRUMB_CTX_KEY: InjectionKey<BreadcrumbContext> = Symbol('breadcrumbContext');
