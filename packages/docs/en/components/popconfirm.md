---
title: Popconfirm | Sakana Element
description: Pixel-style popconfirm component for lightweight confirmation interactions in Vue 3.
---

<script setup>
import { popconfirmApi } from '../../apis/popconfirm'
</script>

# Popconfirm

A simple confirmation dialog of an element click action.


<ApiTable :sections="popconfirmApi" lang="en" />

## Basic Usage

::: preview
demo-preview=../../demo/popconfirm/Basic.vue
:::

## Customize

Customize button text and icon.

::: preview
demo-preview=../../demo/popconfirm/Custom.vue
:::

## Hide Icon

Set `hide-icon` to hide the icon.

::: preview
demo-preview=../../demo/popconfirm/HideIcon.vue
:::

