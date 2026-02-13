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

const tooltipProps = computed(
  () => omit(props, ['items', 'hideOnClick', 'size', 'type', 'splitButton']), //排除这些属性
);

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
  <div ref="dropdownRef" class="px-dropdown" :class="{ 'is-disabled': props.disabled }">
    <px-tooltip
      ref="tooltipRef"
      v-bind="tooltipProps"
      :manual="splitButton"
      @visible-change="$emit('visible-change', $event)"
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
        <div class="px-dropdown__menu">
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
