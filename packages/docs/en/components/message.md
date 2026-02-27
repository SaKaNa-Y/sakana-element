---
title: Message | Sakana Element
description: Pixel-style message notification component for operation feedback in Vue 3.
---

<script setup>
import { messageApi } from '../../apis/message'
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

## Plain Variant

Use `plain` for a lighter background with colored text.

::: preview
demo-preview=../../demo/message/Plain.vue
:::

## Ghost Variant

Use `ghost` for a transparent background with border only.

::: preview
demo-preview=../../demo/message/Ghost.vue
:::

## Custom Icon

Use the `icon` prop to override the default type icon.

::: preview
demo-preview=../../demo/message/CustomIcon.vue
:::

## Closable Message

A close button can be added.

::: preview
demo-preview=../../demo/message/Closable.vue
:::

## Duration Timer Bar

A thin progress bar at the bottom shows the remaining duration. Controlled by `showTimer` (default: `true`).

::: preview
demo-preview=../../demo/message/TimerBar.vue
:::

## Centered Text

Use `center` attribute to center the text.

::: preview
demo-preview=../../demo/message/Center.vue
:::

## Max Visible Count

Set `max` to limit the number of visible messages. Oldest messages are closed when the limit is exceeded.

::: preview
demo-preview=../../demo/message/MaxCount.vue
:::

## Close All Messages

Call `PxMessage.closeAll()` to close all messages.

::: preview
demo-preview=../../demo/message/CloseAll.vue
:::
