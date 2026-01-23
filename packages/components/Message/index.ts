import Message from './methods';
import { withInstallFunction } from '@sakana-element/utils';

export const PxMessage = withInstallFunction(Message, '$message');

export * from './types';
