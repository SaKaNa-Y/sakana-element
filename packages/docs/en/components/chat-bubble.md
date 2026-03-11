---
title: ChatBubble | Sakana Element
description: Pixel-style chat bubble component for conversation UIs in Vue 3. Supports placement, color types, avatars, and custom colors.
---

<script setup>
import { chatBubbleApi } from '../../apis/chat-bubble'
</script>

# ChatBubble

A pixel-art styled chat bubble component for building conversation interfaces.

<ApiTable :sections="chatBubbleApi" lang="en" />

## Basic Usage

Use `placement` to control which side the bubble appears on. Default is `start` (left).

::: preview
demo-preview=../../demo/chat-bubble/Basic.vue
:::

## Types

Use `type` property to set the bubble color theme.

::: preview
demo-preview=../../demo/chat-bubble/Type.vue
:::

## Avatar

Use the `avatar` slot to add an avatar next to the bubble.

::: preview
demo-preview=../../demo/chat-bubble/Avatar.vue
:::

## Header & Footer

Use `name`, `time`, and `status` props to display sender info and delivery status.

::: preview
demo-preview=../../demo/chat-bubble/HeaderFooter.vue
:::

## Custom Color

Use `color` property to set a custom hex color for the bubble.

::: preview
demo-preview=../../demo/chat-bubble/CustomColor.vue
:::

## Conversation

Combine multiple chat bubbles to build a full conversation layout.

::: preview
demo-preview=../../demo/chat-bubble/Conversation.vue
:::
