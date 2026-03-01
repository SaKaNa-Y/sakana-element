import { isFunction } from 'lodash-es';
import { defineComponent } from 'vue';

// 映射图标，用于根据类型获取对应的图标 (使用 pixelarticons 名称)
export const typeIconMap = new Map([
  ['info', 'info-box'],
  ['success', 'check'],
  ['warning', 'warning-box'],
  ['danger', 'close-box'],
  ['error', 'close-box'],
]);

//定义一个组件，用于渲染vnode
export const RenderVnode = defineComponent({
  //父组件传入一个vnode，然后渲染这个vnode
  props: {
    vNode: {
      type: [String, Object, Function],
      required: true, //必填
    },
  },
  setup(props) {
    //如果props.vNode是一个函数，则调用这个函数，否则直接返回props.vNode
    return () => (isFunction(props.vNode) ? props.vNode() : props.vNode);
  },
});

export * from './color';
export * from './error';
export * from './icon-map';
export * from './icon-registry';
export * from './install';
export * from './instance-management';
export * from './sanitize-svg';
export * from './style';
export * from './test';
