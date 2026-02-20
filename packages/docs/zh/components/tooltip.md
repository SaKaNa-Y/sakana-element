---
title: Tooltip 文字提示 | Sakana Element 像素组件库
description: Sakana Element 像素风格文字提示组件，鼠标悬停显示详细信息。
---

<script setup>
import { tooltipApi } from '../../apis/tooltip'
</script>

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。


<ApiTable :sections="tooltipApi" lang="zh" />

## 基础用法

使用 `content` 属性来设置提示内容。

::: preview
demo-preview=../../demo/tooltip/Basic.vue
:::

## 不同位置

使用 `placement` 属性来设置 Tooltip 出现的位置。

::: preview
demo-preview=../../demo/tooltip/Placement.vue
:::

## 触发方式

使用 `trigger` 属性来设置触发方式。

::: preview
demo-preview=../../demo/tooltip/Trigger.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用 Tooltip。

::: preview
demo-preview=../../demo/tooltip/Disabled.vue
:::

