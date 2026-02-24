<script setup lang="ts">
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed, ref, shallowRef } from 'vue';
import { useFormItem } from '../Form';
import Icon from '../Icon/Icon.vue';
import { FILE_INPUT_COLOR_TEMPLATES, PRESET_FILE_INPUT_COLORS } from './constants';
import type { FileInputEmits, FileInputInstance, FileInputProps } from './types';

defineOptions({
  name: 'PxFileInput',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<FileInputProps>(), {
  placeholder: 'No file chosen',
});

const emits = defineEmits<FileInputEmits>();

const inputRef = shallowRef<HTMLInputElement>();
const { formItem } = useFormItem();

const selectedFiles = ref<FileList | null>(null);

const isPresetColor = computed(() => PRESET_FILE_INPUT_COLORS.has(props.color ?? ''));
const isCustomColor = computed(() => !!props.color && !isPresetColor.value);

const customColorStyle = computed(() => {
  if (!isCustomColor.value) return {};
  const palette = createColorPalette(props.color!);
  const variant = props.ghost ? 'ghost' : 'default';
  return resolveColorVars(palette, 'px-file-input', FILE_INPUT_COLOR_TEMPLATES[variant]);
});

const displayName = computed(() => {
  const files = selectedFiles.value;
  if (!files || files.length === 0) return props.placeholder;
  if (files.length === 1) return files[0].name;
  return `${files.length} files selected`;
});

const showClear = computed(
  () => props.clearable && selectedFiles.value && selectedFiles.value.length > 0,
);

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const files = target.files ?? null;
  selectedFiles.value = files;
  emits('update:modelValue', files);
  emits('change', files);
  formItem?.validate('change').catch(() => void 0);
}

function handleTriggerClick() {
  if (props.disabled) return;
  inputRef.value?.click();
}

function clear() {
  selectedFiles.value = null;
  if (inputRef.value) {
    inputRef.value.value = '';
  }
  emits('update:modelValue', null);
  emits('clear');
  formItem?.clearValidate();
}

function open() {
  inputRef.value?.click();
}

defineExpose<FileInputInstance>({
  ref: inputRef,
  open,
  clear,
});
</script>

<template>
  <div
    class="px-file-input"
    :class="{
      [`px-file-input--${size}`]: size,
      [`px-file-input--${color}`]: isPresetColor,
      'is-ghost': ghost,
      'is-disabled': disabled,
    }"
    :style="customColorStyle"
  >
    <div class="px-file-input__wrapper">
      <input
        ref="inputRef"
        type="file"
        class="px-file-input__native"
        :disabled="disabled"
        :accept="accept"
        :multiple="multiple"
        :form="form"
        @change="handleChange"
      />
      <div
        class="px-file-input__trigger"
        @click="handleTriggerClick"
      >
        <slot name="trigger">Browse</slot>
      </div>
      <span class="px-file-input__name">{{ displayName }}</span>
      <Icon
        v-if="showClear"
        icon="close-box"
        class="px-file-input__clear"
        @click.stop="clear"
      />
    </div>
  </div>
</template>

<style>
@import './style.css';
</style>
