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

## 隐藏图标

设置 `hide-icon` 属性来隐藏图标。

::: preview
demo-preview=../../demo/popconfirm/HideIcon.vue
:::

