---
title: Notification | Sakana Element
description: Pixel-style notification component with multiple positions and custom content for Vue 3.
---

<script setup>
import { notificationApi } from '../../apis/notification'
</script>

# Notification

Displays a global notification message at a corner of the page.


<ApiTable :sections="notificationApi" lang="en" />

## Basic Usage

::: preview
demo-preview=../../demo/notification/Basic.vue
:::

## Different Types

Used to show notification for success, warning, message, and error activities.

::: preview
demo-preview=../../demo/notification/Types.vue
:::

## Different Positions

Notification can emerge from any corner of the page.

::: preview
demo-preview=../../demo/notification/Position.vue
:::

## Custom Duration

Setting `duration` to `0` will not auto close the notification.

::: preview
demo-preview=../../demo/notification/Duration.vue
:::

