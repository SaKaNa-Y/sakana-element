import { useId, useZIndex } from '@sakana-element/hooks';
import { createLazyEscapeClose, destroyAllInstances, enforceMaxCount } from '@sakana-element/utils';
import { each, findIndex, get, isString, set } from 'lodash-es';
import { h, isVNode, render, shallowReactive } from 'vue';
import MessageConstructor from './Message.vue';
import type {
  CreateMessageProps,
  Message,
  MessageFn,
  MessageHandler,
  MessageInstance,
  MessageOptions,
  MessageParams,
  MessageProps,
  MessageType,
} from './types';
import { messageTypes } from './types';

const instances: MessageInstance[] = shallowReactive([]);
const { nextZIndex } = useZIndex();

// Lazy Escape listener — only active when at least one message exists.
const escapeClose = createLazyEscapeClose(() =>
  instances.length ? instances[instances.length - 1] : undefined,
);

export const messageDefaults = {
  type: 'info',
  duration: 3000,
  offset: 10,
  transitionName: 'fade-up',
};

const normalizedOptions = (opts: MessageParams): CreateMessageProps => {
  const result =
    !opts || isVNode(opts) || isString(opts)
      ? {
          message: opts,
        }
      : opts;
  return { ...messageDefaults, ...result } as CreateMessageProps;
};

const createMessage = (props: CreateMessageProps): MessageInstance => {
  const id = useId().value;
  const container = document.createElement('div');

  const destroy = () => {
    const idx = findIndex(instances, { id });
    if (idx === -1) return;

    instances.splice(idx, 1);
    render(null, container);
    escapeClose.unregister();
  };

  const _props: MessageProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestroy: destroy,
  };
  const vnode = h(MessageConstructor, _props);

  render(vnode, container);

  document.body.appendChild(container.firstElementChild!);

  const vm = vnode.component!;
  const handler: MessageHandler = {
    close: () => vm.exposed!.close(),
  };
  const instance: MessageInstance = {
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

export function getLastBottomOffset(this: MessageProps) {
  const idx = findIndex(instances, { id: this.id });
  if (idx <= 0) return 0;

  return get(instances, [idx - 1, 'vm', 'exposed', 'bottomOffset', 'value']);
}

export const message: MessageFn & Partial<Message> = (options = {}) => {
  const normalized = normalizedOptions(options);

  // Enforce max count: destroy oldest messages exceeding the limit
  const rawOpts = !options || isVNode(options) || isString(options) ? {} : options;
  const max = (rawOpts as MessageOptions).max;
  if (max && max > 0) {
    enforceMaxCount(instances, max);
  }

  const instance = createMessage(normalized);

  return instance.handler;
};

export function closeAll(type?: MessageType) {
  each(instances, (instance) => {
    if (type) {
      instance.props.type === type && instance.handler.close();
      return;
    }
    instance.handler.close();
  });
}

/** Forcefully unmount all message instances, bypassing CSS transitions. */
export function destroyAll() {
  destroyAllInstances(instances);
}

each(messageTypes, (type) => {
  set(message, type, (opts: MessageParams) => {
    const normalized = normalizedOptions(opts);
    return message({ ...normalized, type });
  });
});

message.closeAll = closeAll;

export default message as Message;
