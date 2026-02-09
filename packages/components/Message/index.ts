import { withInstallFunction } from '@sakana-element/utils';
import Message from './methods';

export const PxMessage = withInstallFunction(Message, '$message');

export * from './types';
