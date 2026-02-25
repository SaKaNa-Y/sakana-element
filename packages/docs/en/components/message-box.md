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

Use `beforeClose` to intercept the close action. The callback receives the `action`, the `instance`, and a `done` function — call `done()` to actually close the dialog.

::: preview
demo-preview=../../demo/message-box/BeforeClose.vue
:::

