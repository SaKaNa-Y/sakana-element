---
title: MessageBox | Sakana Element
description: Pixel-style message box with confirm, alert, and prompt modes for Vue 3.
---

<script setup>
import { messageBoxApi } from '../../apis/message-box'
</script>

# MessageBox

A set of modal boxes simulating system message box.


<ApiTable :sections="messageBoxApi" lang="en" />

## Alert

Used to alert users, only has a confirm button.

::: preview
demo-preview=../../demo/message-box/Alert.vue
:::

## Confirm

Used to ask users to confirm an operation, has confirm and cancel buttons.

::: preview
demo-preview=../../demo/message-box/Confirm.vue
:::

## Prompt

Used to prompt users to input content.

::: preview
demo-preview=../../demo/message-box/Prompt.vue
:::

## Custom Content

Message box content can be customized.

::: preview
demo-preview=../../demo/message-box/Custom.vue
:::

## Center Layout

Use `center` to align the title and footer to the center.

::: preview
demo-preview=../../demo/message-box/Center.vue
:::

## BeforeClose Callback

Use `beforeClose` to intercept the close action. The callback receives the `action`, the `instance`, and a `done` function — call `done()` to actually close the dialog. If `beforeClose` returns a Promise, the clicked button automatically shows a loading state until the Promise resolves.

::: preview
demo-preview=../../demo/message-box/BeforeClose.vue
:::

## Type-Colored Borders

Setting `type` to `'info'`, `'success'`, `'warning'`, or `'danger'` colors the border, shadow, and divider to match the theme.

::: preview
demo-preview=../../demo/message-box/TypeBorders.vue
:::

## Custom Appearance

Use `customClass`, `customStyle`, and `width` to customize the dialog appearance. The `width` prop accepts a number (pixels) or a CSS string value.

::: preview
demo-preview=../../demo/message-box/CustomAppearance.vue
:::

## Close Controls

Use `closeOnPressEscape` and `closeOnHashChange` to control how the dialog can be closed. Both default to `true`.

::: preview
demo-preview=../../demo/message-box/CloseControls.vue
:::

## Input Validation

Use `inputSchema` with a Zod schema to validate prompt input before allowing confirmation. Set `inputErrorMessage` to customize the error text shown below the input when validation fails.

::: preview
demo-preview=../../demo/message-box/InputValidation.vue
:::

## Distinguish Cancel and Close

When `distinguishCancelAndClose` is `true` (default), clicking the close button rejects with `'close'`, while clicking the cancel button rejects with `'cancel'`. Set it to `false` to make both fire `'cancel'`.

::: preview
demo-preview=../../demo/message-box/DistinguishClose.vue
:::

## Draggable

Set `draggable` to `true` to allow the user to drag the dialog by its header. The dialog is constrained to the viewport.

::: preview
demo-preview=../../demo/message-box/Draggable.vue
:::

## Custom Footer

Use the `footer` option to provide a VNode or render function that replaces the default cancel/confirm buttons with custom content.

::: preview
demo-preview=../../demo/message-box/CustomFooter.vue
:::
