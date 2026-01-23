import Notification from './methods';
import { withInstallFunction } from '@sakana-element/utils';

export const PxNotification = withInstallFunction(Notification, '$notify');

export * from './types';
