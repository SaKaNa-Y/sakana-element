---
title: Progress 进度条 | Sakana Element 像素组件库
description: Sakana Element 像素风格进度条组件，用于展示操作的当前进度。
---

<script setup>
import { progressApi } from '../../apis/progress'
</script>

# Progress 进度条

用于展示操作的当前进度。

<ApiTable :sections="progressApi" lang="zh" />

## 基础用法

设置 `percentage` 属性表示当前进度，值会被钳制在 0 到 100 之间。

::: preview
demo-preview=../../demo/progress/Basic.vue
:::

## 不同类型

通过 `type` 属性设置不同的颜色。

::: preview
demo-preview=../../demo/progress/Type.vue
:::

## 不同尺寸

提供 `large`、`default` 和 `small` 三种尺寸。

::: preview
demo-preview=../../demo/progress/Size.vue
:::

## 内部文字

使用 `text-inside` 将百分比文字显示在进度条内部。

::: preview
demo-preview=../../demo/progress/TextInside.vue
:::

## 填充变体

通过 `variant` 选择填充图案：`solid`（纯色）、`striped`（条纹）或 `checkered`（棋盘格）。

::: preview
demo-preview=../../demo/progress/Variant.vue
:::

## 条纹流动

配合 `variant="striped"` 使用 `striped-flow` 可实现条纹动画效果。

::: preview
demo-preview=../../demo/progress/StripedFlow.vue
:::

## 不确定进度

使用 `indeterminate` 属性表示未知进度，进度条会以像素风格的 `steps()` 动画来回弹跳。

::: preview
demo-preview=../../demo/progress/Indeterminate.vue
:::

## 自定义颜色

通过 `color` 属性传入十六进制颜色值或根据当前百分比返回颜色的函数。

::: preview
demo-preview=../../demo/progress/CustomColor.vue
:::

## 自定义文字格式

通过 `format` 属性自定义显示的文字。

::: preview
demo-preview=../../demo/progress/Format.vue
:::

## 状态

使用 `status` 属性覆盖 type 的颜色，赋予语义化状态。

::: preview
demo-preview=../../demo/progress/Status.vue
:::
