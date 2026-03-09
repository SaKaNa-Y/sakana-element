---
title: Indicator 指示器 | Sakana Element 像素组件库
description: Sakana Element 像素风格指示器组件，用于在包裹内容上定位覆盖徽章、圆点和标签。
---

<script setup>
import { indicatorApi } from '../../apis/indicator'
</script>

# Indicator 指示器

定位工具组件，包裹内容并将指示器（徽章、圆点、文本）放置在 9 个网格位置之一。


<ApiTable :sections="indicatorApi" lang="zh" />

## 基础用法

包裹任意内容，默认显示为圆点指示器。使用 `indicator` 插槽自定义内容。

::: preview
demo-preview=../../demo/indicator/Basic.vue
:::

## 位置

使用 `placement` 将指示器定位在 9 个网格位置之一。

::: preview
demo-preview=../../demo/indicator/Placement.vue
:::

## 类型

使用 `type` 设置指示器的颜色主题。

::: preview
demo-preview=../../demo/indicator/Type.vue
:::

## 搭配徽章

在 `indicator` 插槽中使用 `PxBadge` 显示数字计数和标签。

::: preview
demo-preview=../../demo/indicator/WithBadge.vue
:::

## 处理中动画

使用 `processing` 添加像素脉冲动画，用于显示实时状态。

::: preview
demo-preview=../../demo/indicator/Processing.vue
:::

## 偏移

使用 `offset` 通过 `[x, y]` 像素值微调指示器位置。

::: preview
demo-preview=../../demo/indicator/Offset.vue
:::

## 自定义颜色

使用 `color` 设置圆点指示器的自定义十六进制颜色。

::: preview
demo-preview=../../demo/indicator/Color.vue
:::

## 行内模式

使用 `inline` 切换为 inline-flex 布局，适合嵌入文本流中使用。

::: preview
demo-preview=../../demo/indicator/Inline.vue
:::
