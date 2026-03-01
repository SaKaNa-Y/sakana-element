import { useId, useZIndex } from '@sakana-element/hooks';
import {
  createLazyEscapeClose,
  destroyAllInstancesMap,
  enforceMaxCount,
} from '@sakana-element/utils';
import { each, findIndex, get, isString, set } from 'lodash-es';
import { h, isVNode, render, shallowReactive } from 'vue';
import NotificationConstructor from './Notification.vue';
import type {
  CreateNotificationProps,
  Notification,
  NotificationFn,
  NotificationHandler,
  NotificationInstance,
  NotificationOptions,
  NotificationParams,
  NotificationProps,
  NotificationType,
} from './types';
import { notificationPosition, notificationTypes } from './types';

const instancesMap: Map<NotificationProps['position'], NotificationInstance[]> = new Map();

each(notificationPosition, (position) => {
  instancesMap.set(position, shallowReactive([]));
});

const { nextZIndex } = useZIndex();

// Lazy Escape listener — only active when at least one notification exists.
const escapeClose = createLazyEscapeClose(() => {
  let latest: NotificationInstance | undefined;
  instancesMap.forEach((instances) => {
    if (instances.length) {
      const last = instances[instances.length - 1];
      if (!latest || last.props.zIndex > latest.props.zIndex) latest = last;
    }
  });
  return latest;
});

export const notificationDefaults = {
  title: '',
  type: 'info',
  duration: 3000,
  offset: 20,
  position: 'top-right',
  transitionName: 'fade',
  showClose: true,
  showTimer: true,
} as const;

const normalizedOptions = (opts: NotificationParams): CreateNotificationProps => {
  const result = !opts || isVNode(opts) || isString(opts) ? { message: opts } : opts;
  return { ...notificationDefaults, ...result } as CreateNotificationProps;
};

const getInstancesByPosition = (position: NotificationProps['position']): NotificationInstance[] =>
  instancesMap.get(position)!;

const createNotification = (props: CreateNotificationProps): NotificationInstance => {
  const id = useId().value;
  const container = document.createElement('div');
  const instances = getInstancesByPosition(props.position || 'top-right');

  const destroy = () => {
    const idx = findIndex(instances, { id });
    if (idx === -1) return;

    instances.splice(idx, 1);
    render(null, container);
    escapeClose.unregister();
  };

  const _props: NotificationProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestroy: destroy,
  };
  const vnode = h(NotificationConstructor, _props);

  render(vnode, container);
  document.body.appendChild(container.firstElementChild!);

  const vm = vnode.component!;
  const handler: NotificationHandler = {
    close: () => vm.exposed!.close(),
  };
  const instance: NotificationInstance = {
    props: _props,
    id,
    vm,
    vnode,
    handler,
  };
  instances.push(instance);
  escapeClose.register();
  return instance;
};

export const notification: NotificationFn & Partial<Notification> = (options = {}) => {
  const normalized = normalizedOptions(options);

  // Enforce max count per-position: destroy oldest instances exceeding the limit
  const rawOpts = !options || isVNode(options) || isString(options) ? {} : options;
  const max = (rawOpts as NotificationOptions).max;
  const position = normalized.position || 'top-right';
  if (max && max > 0) {
    enforceMaxCount(getInstancesByPosition(position), max);
  }

  const instance = createNotification(normalized);

  return instance.handler;
};

export function closeAll(type?: NotificationType) {
  instancesMap.forEach((instances) => {
    each(instances, (instance) => {
      if (type) {
        instance.props.type === type && instance.handler.close();
        return;
      }
      instance.handler.close();
    });
  });
}

/** Forcefully unmount all notification instances, bypassing CSS transitions. */
export function destroyAll() {
  destroyAllInstancesMap(instancesMap);
}

export function getLastBottomOffset(this: NotificationProps) {
  const instances = getInstancesByPosition(this.position || 'top-right');
  const idx = findIndex(instances, { id: this.id });

  if (idx <= 0) return 0;

  return get(instances, [idx - 1, 'vm', 'exposed', 'bottomOffset', 'value']);
}

each(notificationTypes, (type) => {
  set(notification, type, (opts: NotificationParams) => {
    const normalized = normalizedOptions(opts);
    return notification({ ...normalized, type });
  });
});

notification.closeAll = closeAll;

export default notification as Notification;
