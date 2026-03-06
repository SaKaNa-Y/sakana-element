<script setup lang="ts">
import { useClickOutside, useDisabledStyle } from '@sakana-element/hooks';
import { isNil, omit } from 'lodash-es';
import { computed, provide, ref } from 'vue';
import { PxButton, PxButtonGroup } from '../Button/index';
import PxTooltip from '../Tooltip/Tooltip.vue';
import type { TooltipInstance } from '../Tooltip/types';

import { DROPDOWN_CTX_KEY } from './constants';

import DropdownItem from './DropdownItem.vue';
import type {
  DropdownContext,
  DropdownEmits,
  DropdownInstance,
  DropdownItemProps,
  DropdownProps,
} from './types';
import useDropdownKeyboard from './useDropdownKeyboard';

defineOptions({
  name: 'PxDropdown',
  inheritAttrs: false, //透传，不继承父组件的非prop属性
});
const props = withDefaults(defineProps<DropdownProps>(), {
  hideOnClick: true,
  items: () => [] as DropdownItemProps[], //数组类型，每一个元素都是DropdownItemProps类型
});
const emits = defineEmits<DropdownEmits>();
const slots = defineSlots(); //控制所有插槽

const tooltipRef = ref<TooltipInstance>();
const dropdownRef = ref<HTMLElement>();
const menuRef = ref<HTMLElement>();
const isOpen = ref(false);

const tooltipProps = computed(() => ({
  ...omit(props, [
    'items',
    'hideOnClick',
    'size',
    'type',
    'splitButton',
    'maxHeight',
    'hoverColor',
  ]),
  // When showArrow is true, use 9px offset to leave room for arrow; otherwise 0 to eliminate hover gap
  popperOptions: {
    ...props.popperOptions,
    modifiers: [
      { name: 'offset', options: { offset: [0, props.showArrow ? 9 : 0] } },
      ...(props.popperOptions?.modifiers ?? []),
    ],
  },
}));

const menuStyle = computed(() => {
  const style: Record<string, string> = {};
  if (props.maxHeight) {
    const val = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight;
    style.maxHeight = val;
    style.overflowY = 'auto';
  }
  if (props.hoverColor) {
    style['--px-dropdown-menuItem-hover-fill'] = props.hoverColor;
  }
  return Object.keys(style).length ? style : undefined;
});

function handleItemClick(e: DropdownItemProps) {
  props.hideOnClick && tooltipRef.value?.hide();
  !isNil(e.command) && emits('command', e.command);
}

// 处理分割按钮的下拉箭头点击 - 切换显示/隐藏
function handleTriggerClick() {
  tooltipRef.value?.toggle();
}

// 点击外部时关闭下拉菜单（仅在 splitButton 模式下）
useClickOutside(dropdownRef, () => {
  if (props.splitButton) {
    tooltipRef.value?.hide();
  }
});

// Keyboard navigation
useDropdownKeyboard({
  menuRef,
  triggerRef: dropdownRef,
  isOpen,
  close: () => tooltipRef.value?.hide(),
});

(typeof TEST === 'undefined' || !TEST) && useDisabledStyle();
provide<DropdownContext>(DROPDOWN_CTX_KEY, {
  handleItemClick,
  size: computed(() => props.size),
});

defineExpose<DropdownInstance>({
  open: () => tooltipRef.value?.show(),
  close: () => tooltipRef.value?.hide(),
});
</script>

<template>
  <div ref="dropdownRef" class="px-dropdown" :class="{ 'is-disabled': props.disabled }" aria-haspopup="true" :aria-expanded="isOpen" tabindex="0">
    <px-tooltip
      ref="tooltipRef"
      v-bind="tooltipProps"
      :manual="splitButton"
      @visible-change="(val: boolean) => { isOpen = val; $emit('visible-change', val); }"
    >
      <px-button-group
        v-if="splitButton"
        :type="type"
        :size="size"
        :disabled="disabled"
      >
        <px-button @click="$emit('click', $event)">
          <slot name="default"></slot>
        </px-button>
        <px-button icon="chevron-down" @click="handleTriggerClick" />
      </px-button-group>
      <slot name="default" v-else></slot>

      <template #content>
        <div ref="menuRef" class="px-dropdown__menu" role="menu" tabindex="-1" :style="menuStyle">
          <slot name="dropdown">
            <template v-for="item in items" :key="item.command">
              <dropdown-item v-bind="item" />
            </template>
          </slot>
        </div>
      </template>
    </px-tooltip>
  </div>
</template>

<style>
@import './style.css';

.px-dropdown .px-button-group > :last-child {
  padding: 5px 7px;
}
</style>
