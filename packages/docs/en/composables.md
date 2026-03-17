---
title: Composables | Sakana Element
description: Vue 3 composable functions exported from Sakana Element for building interactive components with focus management, drag behavior, z-index layering, and more.
---

# Composables

Sakana Element exports a set of Vue 3 composable functions. Some are designed for direct use in your applications, while others are infrastructure composables primarily used internally by components but available for advanced use cases.

```ts
import { useClickOutside, useDraggable, useLocale } from 'sakana-element'
```

## Recommended for Direct Use

### useTheme / useSystemTheme

Full-featured theme management with localStorage persistence and system preference detection. See the [Dark Mode](/en/dark-mode) page for detailed documentation and examples.

```ts
import { useTheme, useSystemTheme } from 'sakana-element'

const { isDark, theme, setTheme, toggleTheme } = useTheme()
const { prefersDark, prefers } = useSystemTheme()
```

### useClickOutside

Detects clicks outside a specified element. Useful for closing dropdowns, popovers, or modals.

```ts
function useClickOutside(
  elementRef: Ref<HTMLElement | undefined>,
  callback: (e: MouseEvent) => void
): void
```

**Example:**

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

Used by: Tooltip, Select, Dropdown

### useDraggable

Makes an element draggable via a handle element, with optional viewport constraint.

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

**Example:**

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

Used by: MessageBox

### useFocusTrap

Traps keyboard focus within a container element. Tab cycling wraps between the first and last focusable elements. Restores focus to the previously focused element on deactivation.

```ts
function useFocusTrap(
  containerRef: Ref<HTMLElement | undefined>
): {
  activate: () => void
  deactivate: () => void
}
```

**Example:**

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { useFocusTrap } from 'sakana-element'

const dialogRef = ref<HTMLElement>()
const { activate, deactivate } = useFocusTrap(dialogRef)

onMounted(() => activate())
</script>
```

Used by: MessageBox

### useLocale

Accesses the internationalization system. Injects the global i18n instance or creates a local one with an optional language override.

```ts
function useLocale(
  localeOverrides?: Ref<Language>
): ComputedRef<I18nInstance>
```

**Example:**

```vue
<script setup>
import { useLocale } from 'sakana-element'

const locale = useLocale()
const t = locale.value.t  // translation function
</script>
```

Used by: Select, MessageBox, Popconfirm

---

## Infrastructure Composables

These composables are primarily used internally by Sakana Element components. They are exported for advanced use cases where you need to build custom components with the same behavior.

### useId

Generates a unique identifier string. Used internally for accessible `id` attributes.

```ts
function useId(namespace?: string): Ref<string>
// Returns e.g. ref('er-4821-0'), ref('er-4821-1'), ...
```

Used by: 13 components (Input, Select, Checkbox, Radio, Form, Tooltip, Drawer, etc.)

### useZIndex

Manages incrementing z-index values for layered components like modals and notifications.

```ts
function useZIndex(initVal?: number): {
  initialValue: Ref<number>
  currentZIndex: ComputedRef<number>
  nextZIndex: () => number
}
```

Used by: MessageBox, Drawer, Message, Notification, Loading

### useOffset

Calculates vertical positioning offsets for stacked overlay components (messages, notifications).

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

Used by: Message, Notification

### useEventListener

Attaches an event listener with automatic cleanup on component unmount. Supports both static and reactive targets.

```ts
function useEventListener(
  target: MaybeRef<EventTarget | HTMLElement | undefined>,
  event: string,
  handler: (e: Event) => any
): void
```

Used by: MessageBox, Drawer

### useFocusController

Manages focus/blur state for form controls. Automatically emits `focus` and `blur` events on the component instance.

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

Used by: Input, Select

### useDisabledStyle

Applies disabled styling (cursor, color) to slot children via VNode traversal. Must be used in a component that receives a `disabled` prop.

```ts
function useDisabledStyle(): void
```

Used by: Dropdown
