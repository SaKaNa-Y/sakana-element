---
title: Badge 徽章 | Sakana Element 像素组件库
description: Sakana Element 像素风格徽章组件，用于状态标识、标签和标记。
---

<script setup>
import { badgeApi } from '../../api/badge'
</script>

# Badge 徽章

小型状态标识组件，用于标签和标记。


<ApiTable :sections="badgeApi" lang="zh" />

## 基础用法

基础的徽章展示。

::: preview
demo-preview=../../demo/badge/Basic.vue
:::

## 类型

使用 `type` 属性来定义不同类型。

::: preview
demo-preview=../../demo/badge/Type.vue
:::

## 尺寸

使用 `size` 属性来设置徽章大小。

::: preview
demo-preview=../../demo/badge/Size.vue
:::

## 轮廓样式

使用 `outline` 属性来显示实线边框、透明背景。

::: preview
demo-preview=../../demo/badge/Outline.vue
:::

## 虚线样式

使用 `dash` 属性来显示虚线边框、浅色背景。

::: preview
demo-preview=../../demo/badge/Dash.vue
:::

## 自定义颜色

使用 `color` 属性来设置自定义十六进制颜色。可与默认、轮廓和虚线样式搭配使用。

::: preview
demo-preview=../../demo/badge/CustomColor.vue
:::

