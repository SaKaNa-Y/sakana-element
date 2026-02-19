---
title: Message | Sakana Element
description: Pixel-style message notification component for operation feedback in Vue 3.
---

<script setup>
import { messageApi } from '../../api/message'
</script>

# Message

Used to show feedback after an activity.


<ApiTable :sections="messageApi" lang="en" />

## Basic Usage

Displays at the top and disappears after 3 seconds.

::: preview
demo-preview=../../demo/message/Basic.vue
:::

## Different Types

Used to show feedback for success, warning, message, and error activities.

::: preview
demo-preview=../../demo/message/Types.vue
:::

## Closable Message

A close button can be added.

::: preview
demo-preview=../../demo/message/Closable.vue
:::

## Centered Text

Use `center` attribute to center the text.

::: preview
demo-preview=../../demo/message/Center.vue
:::

## Close All Messages

Call `PxMessage.closeAll()` to close all messages.

::: preview
demo-preview=../../demo/message/CloseAll.vue
:::

