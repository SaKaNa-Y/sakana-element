---
title: 组合式函数 | Sakana Element
description: Sakana Element 导出的 Vue 3 组合式函数，用于构建具有焦点管理、拖拽行为、z-index 层级管理等功能的交互式组件。
---

# 组合式函数

Sakana Element 导出了一组 Vue 3 组合式函数。其中一些适合在你的应用中直接使用，另一些则是基础设施级的组合式函数，主要在组件内部使用，但也可用于高级场景。

```ts
import { useClickOutside, useDraggable, useLocale } from 'sakana-element'
```

## 推荐直接使用

### useTheme / useSystemTheme

全功能的主题管理，支持 localStorage 持久化和系统偏好检测。详细文档和示例请参阅 [深色模式](/zh/dark-mode) 页面。

```ts
import { useTheme, useSystemTheme } from 'sakana-element'

const { isDark, theme, setTheme, toggleTheme } = useTheme()
const { prefersDark, prefers } = useSystemTheme()
```

### useClickOutside

检测元素外部的点击事件。适用于关闭下拉菜单、弹出框或模态框。

```ts
function useClickOutside(
  elementRef: Ref<HTMLElement | undefined>,
  callback: (e: MouseEvent) => void
): void
```

**示例：**

```vue
<script setup>
import { ref } from 'vue'
import { useClickOutside } from 'sakana-element'

const dropdownRef = ref<HTMLElement>()
const isOpen = ref(true)

useClickOutside(dropdownRef, () => {
  isOpen.value = false
})
</script>
```

使用组件：Tooltip、Select、Dropdown

### useDraggable

通过拖拽手柄使元素可拖动，支持可选的视口约束。

```ts
interface UseDraggableOptions {
  constrainToViewport?: boolean
}

function useDraggable(
  targetRef: Ref<HTMLElement | undefined>,
  handleRef: Ref<HTMLElement | undefined>,
  options?: UseDraggableOptions
): { reset: () => void }
```

**示例：**

```vue
<script setup>
import { ref } from 'vue'
import { useDraggable } from 'sakana-element'

const boxRef = ref<HTMLElement>()
const handleRef = ref<HTMLElement>()

const { reset } = useDraggable(boxRef, handleRef, {
  constrainToViewport: true,
})
</script>
```

使用组件：MessageBox

### useFocusTrap

将键盘焦点限制在容器元素内。Tab 键在第一个和最后一个可聚焦元素之间循环。停用时恢复到之前聚焦的元素。

```ts
function useFocusTrap(
  containerRef: Ref<HTMLElement | undefined>
): {
  activate: () => void
  deactivate: () => void
}
```

**示例：**

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { useFocusTrap } from 'sakana-element'

const dialogRef = ref<HTMLElement>()
const { activate, deactivate } = useFocusTrap(dialogRef)

onMounted(() => activate())
</script>
```

使用组件：MessageBox

### useLocale

访问国际化系统。注入全局 i18n 实例或使用可选的语言覆盖创建本地实例。

```ts
function useLocale(
  localeOverrides?: Ref<Language>
): ComputedRef<I18nInstance>
```

**示例：**

```vue
<script setup>
import { useLocale } from 'sakana-element'

const locale = useLocale()
const t = locale.value.t  // 翻译函数
</script>
```

使用组件：Select、MessageBox、Popconfirm

---

## 基础设施组合式函数

这些组合式函数主要供 Sakana Element 组件内部使用。它们被导出是为了方便高级用户构建具有相同行为的自定义组件。

### useId

生成唯一标识符字符串。内部用于无障碍访问的 `id` 属性。

```ts
function useId(namespace?: string): Ref<string>
// 返回例如 ref('er-4821-0')、ref('er-4821-1')……
```

使用组件：13 个组件（Input、Select、Checkbox、Radio、Form、Tooltip、Drawer 等）

### useZIndex

管理递增的 z-index 值，用于模态框和通知等分层组件。

```ts
function useZIndex(initVal?: number): {
  initialValue: Ref<number>
  currentZIndex: ComputedRef<number>
  nextZIndex: () => number
}
```

使用组件：MessageBox、Drawer、Message、Notification、Loading

### useOffset

计算堆叠覆盖组件（消息、通知）的垂直定位偏移量。

```ts
function useOffset(opts: {
  offset: number
  boxHeight: Ref<number>
  getLastBottomOffset(): number
}): {
  topOffset: ComputedRef<number>
  bottomOffset: ComputedRef<number>
}
```

使用组件：Message、Notification

### useEventListener

添加事件监听器，组件卸载时自动清理。支持静态和响应式目标。

```ts
function useEventListener(
  target: MaybeRef<EventTarget | HTMLElement | undefined>,
  event: string,
  handler: (e: Event) => any
): void
```

使用组件：MessageBox、Drawer

### useFocusController

管理表单控件的聚焦/失焦状态。自动在组件实例上发出 `focus` 和 `blur` 事件。

```ts
function useFocusController<T extends HTMLElement | { focus(): void }>(
  target: Ref<T | undefined>,
  options?: UseFocusControllerOptions
): {
  wrapperRef: Ref<HTMLElement | undefined>
  isFocused: Ref<boolean>
  handleFocus: (e: FocusEvent) => void
  handleBlur: (e: FocusEvent) => void
}
```

使用组件：Input、Select

### useDisabledStyle

通过 VNode 遍历为插槽子元素应用禁用样式（光标、颜色）。必须在接收 `disabled` prop 的组件中使用。

```ts
function useDisabledStyle(): void
```

使用组件：Dropdown
