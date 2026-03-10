<script setup lang="ts">
import {
  useDraggable,
  useEventListener,
  useFocusTrap,
  useId,
  useLocale,
  useZIndex,
} from '@sakana-element/hooks';
import { RenderVnode, typeIconMap } from '@sakana-element/utils';
import { isFunction, isNil } from 'lodash-es';
import { computed, nextTick, reactive, ref, watch } from 'vue';
import PxButton from '../Button/Button.vue';
import PxIcon from '../Icon/Icon.vue';
import PxInput from '../Input/Input.vue';
import type { InputInstance } from '../Input/types';
import PxOverlay from '../Overlay/Overlay.vue';
import type { MessageBoxAction, MessageBoxProps } from './types';

defineOptions({
  name: 'PxMessageBox',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<MessageBoxProps>(), {
  lockScroll: true,
  showClose: true,
  closeOnClickModal: true,
  confirmButtonType: 'primary',
  roundButton: false,
  boxType: '',
  inputValue: '',
  showConfirmButton: true,
  closeOnPressEscape: true,
  closeOnHashChange: true,
  distinguishCancelAndClose: true,
  draggable: false,
});

const locale = useLocale();
const { doAction } = props;
const { nextZIndex } = useZIndex();

const rootRef = ref<HTMLElement>();
const headerRef = ref<HTMLElement>();
const inputRef = ref<InputInstance>();
const confirmBtnRef = ref<InstanceType<typeof PxButton>>();
const inputId = useId();
const msgboxTitleId = `msgbox-title-${useId().value}`;

//这里不用ref是因为要多写.value,而reactive不用
const state = reactive({
  ...props,
  zIndex: nextZIndex(),
});

/* v8 ignore next */
const isVisible = computed(() => props.visible?.value ?? false);
const hasMessage = computed(() => !!state.message);
/* v8 ignore next */
const iconComponent = computed(() => state.icon ?? typeIconMap.get(state.type ?? ''));

// Computed style merging customStyle + width
const boxStyle = computed(() => ({
  ...state.customStyle,
  ...(state.width
    ? {
        '--px-message-box-width':
          typeof state.width === 'number' ? `${state.width}px` : state.width,
      }
    : {}),
}));

// Input validation state
const validationError = ref('');

/* v8 ignore start -- validate paths have many ?? / ?. branch artifacts */
function validate(): boolean {
  if (!state.inputSchema) return true;
  const result = state.inputSchema.safeParse(state.inputValue ?? '');
  if (!result.success) {
    validationError.value =
      state.inputErrorMessage ??
      result.error.issues[0]?.message ??
      locale.value.t('messagebox.error');
    return false;
  }
  validationError.value = '';
  return true;
}
/* v8 ignore stop */

// Focus trap
const { activate: activateFocusTrap, deactivate: deactivateFocusTrap } = useFocusTrap(rootRef);

// Draggable
const { reset: resetDrag } = useDraggable(
  computed(() => (state.draggable ? rootRef.value : undefined)),
  computed(() => (state.draggable ? headerRef.value : undefined)),
  { constrainToViewport: true },
);

watch(
  //监听深层响应式数据
  () => props.visible?.value,
  (val) => {
    if (val) {
      state.zIndex = nextZIndex();
      resetDrag();
      nextTick(() => {
        if (props.boxType === 'prompt') {
          inputRef.value?.focus();
        } else {
          confirmBtnRef.value?.$el?.focus();
        }
        activateFocusTrap();
      });
    } else {
      deactivateFocusTrap();
      validationError.value = '';
    }
  },
);

// ESC key handler
useEventListener(document, 'keydown', (e: Event) => {
  if (state.closeOnPressEscape && isVisible.value && (e as KeyboardEvent).key === 'Escape') {
    handleClose();
  }
});

// Hash change handler
useEventListener(window, 'hashchange', () => {
  if (state.closeOnHashChange && isVisible.value) {
    handleClose();
  }
});

// 点击遮罩层
function handleWrapperClick() {
  props.closeOnClickModal && handleClose();
}

// 输入框回车
function handleInputEnter(e: KeyboardEvent) {
  if (state.inputType === 'textarea') return; //如果inputType是textarea文本域则不执行
  e.preventDefault(); //阻止默认行为
  return handleAction('confirm'); //执行handleAction('confirm')
}

// 点击按钮
function handleAction(action: MessageBoxAction) {
  // Validate input in prompt mode before confirming
  if (action === 'confirm' && state.showInput && !validate()) return;

  if (isFunction(props.beforeClose)) {
    // Only show loading on confirm/cancel buttons, not on 'close' (ESC / X / overlay)
    /* v8 ignore next 5 */
    const actionLoadingKey =
      action === 'confirm'
        ? 'confirmButtonLoading'
        : action === 'cancel'
          ? 'cancelButtonLoading'
          : undefined;

    /* v8 ignore next */
    if (actionLoadingKey) state[actionLoadingKey] = true;

    let result: void | Promise<void>;
    try {
      result = props.beforeClose(action, state, () => {
        /* v8 ignore next */
        if (actionLoadingKey) state[actionLoadingKey] = false;
        doAction(action, state.inputValue);
      });
    } catch {
      /* v8 ignore next */
      if (actionLoadingKey) state[actionLoadingKey] = false;
      return;
    }

    // If beforeClose returns a Promise, auto-manage loading on rejection
    if (result instanceof Promise) {
      /* v8 ignore next 2 */
      result.catch(() => {
        if (actionLoadingKey) state[actionLoadingKey] = false;
      });
    }
  } else {
    doAction(action, state.inputValue);
  }
}

function handleClose() {
  handleAction(state.distinguishCancelAndClose === false ? 'cancel' : 'close');
}
</script>

<template>
  <transition name="fade-in-linear" @after-leave="destroy">
    <px-overlay
      v-show="isVisible"
      :z-index="state.zIndex"
      :overlay-class="state.overlayClass"
      mask
    >
      <div
        role="dialog"
        aria-modal="true"
        :aria-labelledby="msgboxTitleId"
        class="px-overlay-message-box"
        @click="handleWrapperClick"
      >
        <div
          ref="rootRef"
          :class="[
            'px-message-box',
            {
              'is-center': state.center,
              'is-draggable': state.draggable,
            },
            state.type ? `px-message-box--${state.type}` : '',
            state.customClass,
          ]"
          :style="boxStyle"
          @click.stop
        >
          <div
            v-if="!isNil(state.title)"
            ref="headerRef"
            class="px-message-box__header"
          >
            <div class="px-message-box__title" :id="msgboxTitleId">
              <px-icon
                v-if="iconComponent && state.center"
                :class="{
                  [`px-icon-${state.type}`]: state.type,
                }"
                :icon="iconComponent"
              />
              {{ state.title }}
            </div>
            <button
              v-if="showClose"
              class="px-message-box__header-btn"
              @click.stop="handleClose"
            >
              <px-icon icon="close" />
            </button>
          </div>
          <div class="px-message-box__content">
            <px-icon
              v-if="iconComponent && !state.center && hasMessage"
              :class="{
                [`px-icon-${state.type}`]: state.type,
              }"
              :icon="iconComponent"
            />
            <div v-if="hasMessage" class="px-message-box__message">
              <slot>
                <component
                  :is="state.showInput ? 'label' : 'p'"
                  :for="state.showInput ? inputId : void 0"
                >
                  {{ state.message }}
                </component>
              </slot>
            </div>
          </div>
          <div v-show="state.showInput" class="px-message-box__input">
            <px-input
              v-model="state.inputValue"
              ref="inputRef"
              :placeholder="state.inputPlaceholder"
              :type="state.inputType"
              @keyup.enter="handleInputEnter"
            />
            <div v-if="validationError" class="px-message-box__error">
              {{ validationError }}
            </div>
          </div>
          <div class="px-message-box__footer">
            <template v-if="state.footer">
              <render-vnode :vNode="state.footer" />
            </template>
            <template v-else>
              <px-button
                v-if="state.showCancelButton"
                class="px-message-box__footer-btn px-message-box__cancel-btn"
                :type="state.cancelButtonType"
                :round="state.roundButton"
                :loading="state.cancelButtonLoading"
                @click="handleAction('cancel')"
                @keydown.prevent.enter="handleAction('cancel')"
                >{{ state.cancelButtonText || locale.t('messagebox.cancel') }}</px-button
              >
              <px-button
                ref="confirmBtnRef"
                v-show="state.showConfirmButton"
                class="px-message-box__footer-btn px-message-box__confirm-btn"
                :type="state.confirmButtonType ?? 'primary'"
                :round="state.roundButton"
                :loading="state.confirmButtonLoading"
                @click="handleAction('confirm')"
                @keydown.prevent.enter="handleAction('confirm')"
                >{{ state.confirmButtonText || locale.t('messagebox.confirm') }}</px-button
              >
            </template>
          </div>
        </div>
      </div>
    </px-overlay>
  </transition>
</template>

<style>
@import './style.css';
</style>
