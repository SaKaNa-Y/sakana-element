<script setup lang="ts">
import { addUnit } from '@sakana-element/utils';
import { computed, ref } from 'vue';
import PxButton from '../Button/Button.vue';
import PxIcon from '../Icon/Icon.vue';
import type { TooltipInstance } from '../Tooltip';
import PxTooltip from '../Tooltip/Tooltip.vue';
import type { PopconfirmEmits, PopconfirmProps } from './types';

defineOptions({
  name: 'PxPopconfirm',
});

const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: '',
  confirmButtonType: 'primary',
  icon: 'question-circle',
  iconColor: '#f90',
  hideAfter: 200,
  width: 150,
});

const emits = defineEmits<PopconfirmEmits>();
const tooltipRef = ref<TooltipInstance>();
const style = computed(() => ({ width: addUnit(props.width) }));

function hidePopper() {
  tooltipRef.value?.hide();
}

function confirm(e: MouseEvent) {
  emits('confirm', e);
  hidePopper();
}

function cancel(e: MouseEvent) {
  emits('cancel', e);
  hidePopper();
}
</script>

<template>
  <px-tooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
    <template #content>
      <div class="px-popconfirm" :style="style">
        <div class="px-popconfirm__main">
          <px-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor" />
          {{ title }}
        </div>
      </div>

      <div class="px-popconfirm__action">
        <px-button
          class="px-popconfirm__cancel"
          size="small"
          :type="cancelButtonType"
          @click="cancel"
        >
          {{ cancelButtonText || 'Cancel' }}
        </px-button>
        <px-button
          class="px-popconfirm__confirm"
          size="small"
          :type="confirmButtonType"
          @click="confirm"
        >
          {{ confirmButtonText || 'Confirm' }}
        </px-button>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference" #default>
      <slot name="reference"></slot>
    </template>
  </px-tooltip>
</template>

<style scoped>
@import './style.css';
</style>
