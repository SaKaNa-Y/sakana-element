---
title: Popconfirm 气泡确认框 | Sakana Element 像素组件库
description: Sakana Element 像素风格气泡确认框组件，轻量级确认交互。
---

<script setup>
import { popconfirmApi } from '../../apis/popconfirm'
</script>

# Popconfirm 气泡确认框

点击某个元素弹出一个简单的气泡确认框。


<ApiTable :sections="popconfirmApi" lang="zh" />

## 基础用法

::: preview
demo-preview=../../demo/popconfirm/Basic.vue
:::

## 自定义内容

可以自定义按钮文字和图标。

::: preview
demo-preview=../../demo/popconfirm/Custom.vue
:::

## 弹出位置

使用 `placement` 属性设置弹出位置。

::: preview
demo-preview=../../demo/popconfirm/Placement.vue
:::

## 箭头

设置 `show-arrow` 属性显示指向触发元素的像素风格箭头。

::: preview
demo-preview=../../demo/popconfirm/Arrow.vue
:::

## 主题

使用 `effect` 属性切换深色和浅色主题。

::: preview
demo-preview=../../demo/popconfirm/Effect.vue
:::

## 隐藏图标

设置 `hide-icon` 属性来隐藏图标。

::: preview
demo-preview=../../demo/popconfirm/HideIcon.vue
:::

## 禁用

设置 `disabled` 属性阻止气泡确认框显示。

::: preview
demo-preview=../../demo/popconfirm/Disabled.vue
:::
