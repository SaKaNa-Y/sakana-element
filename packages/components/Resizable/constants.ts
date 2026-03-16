import type { InjectionKey } from 'vue';
import type { ResizableGroupContext } from './types';

export const RESIZABLE_GROUP_CTX_KEY: InjectionKey<ResizableGroupContext> =
  Symbol('resizableGroupContext');
