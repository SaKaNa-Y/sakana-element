import { useId, useZIndex } from '@sakana-element/hooks';
import { each, findIndex, get, isString, set } from 'lodash-es';
import { h, isVNode, render, shallowReactive } from 'vue';
import NotificationConstructor from './Notification.vue';
import type {
  CreateNotificationProps,
  Notification,
  NotificationFn,
  NotificationHandler,
  NotificationInstance,
  NotificationParams,
  NotificationProps,
  NotificationType,
} from './types';
import { notificationPosition, notificationTypes } from './types';

//instancesMap是NotificationInstance的数组类型里面的值只能是position的值
const instancesMap: Map<NotificationProps['position'], NotificationInstance[]> = new Map();

//遍历notificationPosition,将position作为key,shallowReactive([])作为value,存入instancesMap
each(notificationPosition, (position) => {
  instancesMap.set(position, shallowReactive([]));
});
const { nextZIndex } = useZIndex();

export const notificationDefaults = {
  title: '',
  type: 'info',
  duration: 3000,
  offset: 20,
  position: 'top-right',
  transitionName: 'fade',
  showClose: true,
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
  };

  const _props: NotificationProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestroy: destroy,
  };
  const vnode = h(NotificationConstructor, _props);

  //render函数是渲染vnode,并将其挂载到container上
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
  return instance;
};

export const notification: NotificationFn & Partial<Notification> = (options = {}) => {
  const normalized = normalizedOptions(options);
  const instance = createNotification(normalized);

  return instance.handler;
};

export function closeAll(type?: NotificationType) {
  //each函数是遍历instances数组,并执行instance.handler.close()
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

//获取最后一个bottomOffset
export function getLastBottomOffset(this: NotificationProps) {
  const instances = getInstancesByPosition(this.position || 'top-right');
  const idx = findIndex(instances, { id: this.id });

  if (idx <= 0) return 0;

  return get(instances, [idx - 1, 'vm', 'exposed', 'bottomOffset', 'value']);
}

each(notificationTypes, (type) => {
  //set函数是设置notification的type属性,type属性是notification的类型
  set(notification, type, (opts: NotificationParams) => {
    const normalized = normalizedOptions(opts);
    return notification({ ...normalized, type });
  });
});
notification.closeAll = closeAll;

export default notification as Notification;
