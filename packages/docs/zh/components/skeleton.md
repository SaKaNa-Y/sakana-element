---
title: Skeleton 骨架屏 | Sakana Element
description: 像素风格骨架屏加载占位组件，支持逐帧闪烁动画，适用于 Vue 3。
---

<script setup>
import { skeletonApi } from '../../apis/skeleton'
</script>

# Skeleton 骨架屏

在内容加载时显示骨架屏占位，提供视觉反馈。

<ApiTable :sections="skeletonApi" lang="zh" />

## 基础用法

显示不同宽度的骨架屏占位符。

::: preview
demo-preview=../../demo/skeleton/Basic.vue
:::

## 变体

通过 `variant` 属性切换骨架屏形状：`rectangular`（默认）、`circular`、`rounded` 或 `text`。

::: preview
demo-preview=../../demo/skeleton/Variant.vue
:::

## 动画

通过 `animated` 属性控制动画开关。通过 `animation` 属性选择动画风格：`shimmer`（扫描线扫过）、`pulse`（两帧闪烁）或 `dither`（棋盘格溶解）。

::: preview
demo-preview=../../demo/skeleton/Animation.vue
:::

## 加载切换

通过 `loading` 属性控制骨架屏与实际内容的切换，内容通过默认插槽传入。

::: preview
demo-preview=../../demo/skeleton/Loading.vue
:::

## 多行文本

使用 `variant="text"` 配合 `rows` 属性渲染多行文本占位，最后一行自动缩短。

::: preview
demo-preview=../../demo/skeleton/Rows.vue
:::

## 尺寸

通过 `size` 属性设置预定义尺寸：`large`、`default` 或 `small`。

::: preview
demo-preview=../../demo/skeleton/Size.vue
:::

## 自定义尺寸

通过 `width` 和 `height` 属性精确控制尺寸。数字按像素处理，字符串按原值使用。

::: preview
demo-preview=../../demo/skeleton/CustomSize.vue
:::
