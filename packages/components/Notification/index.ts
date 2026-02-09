import { withInstallFunction } from '@sakana-element/utils';
import Notification from './methods';

export const PxNotification = withInstallFunction(Notification, '$notify');

export * from './types';
