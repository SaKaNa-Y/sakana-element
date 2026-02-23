<script setup lang="ts">
import { useId } from '@sakana-element/hooks';
import { createColorPalette } from '@sakana-element/utils';
import { computed, onMounted, ref, watch } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import type { SwitchEmits, SwitchInstance, SwitchProps } from './types';

//inheritAttrs: false 表示组件的属性不会自动传入到子组件中,但是使用v-bind="$attrs"可以获取到
defineOptions({ name: 'PxSwitch', inheritAttrs: false });
const props = withDefaults(defineProps<SwitchProps>(), {
  activeValue: true,
  inactiveValue: false,
});

const emits = defineEmits<SwitchEmits>(); //表示子传父的emit类型是SwitchEmits
const isDisabled = computed(() => props.disabled);

const innerValue = ref(props.modelValue);
const inputRef = ref<HTMLInputElement>();
const inputId = useId().value;
const checked = computed(() => innerValue.value === props.activeValue);

const currentIcon = computed(() => (checked.value ? props.activeIcon : props.inactiveIcon));

const customColorStyle = computed(() => {
  const style: Record<string, string> = {};
  if (props.activeColor) {
    const palette = createColorPalette(props.activeColor);
    style['--px-switch-on-color'] = palette.color;
    style['--px-switch-on-border-color'] = palette.dark;
  }
  if (props.inactiveColor) {
    const palette = createColorPalette(props.inactiveColor);
    style['--px-switch-off-color'] = palette.color;
    style['--px-switch-off-border-color'] = palette.dark;
  }
  return style;
});

const focus: SwitchInstance['focus'] = () => {
  inputRef.value?.focus();
};
function handleChange() {
  if (isDisabled.value) return;

  const newVal = checked.value ? props.inactiveValue : props.activeValue;

  innerValue.value = newVal;

  emits('update:modelValue', newVal);

  emits('change', newVal);
}

//onMounted 表示组件挂载后执行
onMounted(() => {
  inputRef.value!.checked = checked.value;
});
watch(checked, (val) => {
  inputRef.value!.checked = val;
  // 预留 form 校验
});

defineExpose<SwitchInstance>({
  checked,
  focus,
});
</script>

<template>
  <div
    class="px-switch"
    :class="{
      [`px-switch--${size}`]: size,
      [`px-switch--${type}`]: type,
      'is-disabled': isDisabled,
      'is-checked': checked,
    }"
    :style="customColorStyle"
    @click="handleChange"
  >
    <input
      class="px-switch__input"
      type="checkbox"
      role="switch"
      :aria-checked="checked"
      ref="inputRef"
      :id="inputId"
      :name="name"
      :disabled="isDisabled"
      :checked="checked"
      @keydown.enter="handleChange"
    />
    <div class="px-switch__core">
      <div class="px-switch__core-inner">
        <span
          v-if="activeText || inactiveText"
          class="px-switch__core-inner-text"
        >
          {{ checked ? activeText : inactiveText }}
        </span>
      </div>
      <div class="px-switch__core-action">
        <PxIcon
          v-if="currentIcon"
          class="px-switch__icon"
          :icon="currentIcon"
          size="xs"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import './style.css';
</style>
