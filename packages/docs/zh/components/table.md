---
title: Table 表格 | Sakana Element 像素组件库
description: Sakana Element 像素风格表格组件，支持斑马纹、悬停高亮、全边框、固定行列和多种尺寸。
---

<script setup>
import { tableApi } from '../../apis/table'
</script>

# Table 表格

包裹原生 `<table>` 元素并应用像素风格的 CSS 容器组件。在 `<px-table>` 内编写标准 HTML 表格即可。


<ApiTable :sections="tableApi" lang="zh" />

## 基础用法

::: preview
demo-preview=../../demo/table/Basic.vue
:::

## 斑马纹

使用 `zebra`（或 `stripe`）让行背景交替显示。

::: preview
demo-preview=../../demo/table/Zebra.vue
:::

## 悬停高亮

使用 `hover` 在鼠标悬停时高亮行。

::: preview
demo-preview=../../demo/table/Hover.vue
:::

## 全边框

使用 `border` 为所有单元格添加边框。

::: preview
demo-preview=../../demo/table/Border.vue
:::

## 颜色类型

使用 `type` 应用颜色变体：`primary`、`success`、`warning`、`danger`、`info`。

::: preview
demo-preview=../../demo/table/Type.vue
:::

## 尺寸变体

五种尺寸：`xs`、`sm`、`md`（默认）、`lg`、`xl`。

::: preview
demo-preview=../../demo/table/Size.vue
:::

## 固定表头（Pin Rows）

配合固定的 `max-height`，使用 `pin-rows` 让表头在滚动时保持固定。

::: preview
demo-preview=../../demo/table/PinRows.vue
:::

## 固定首列（Pin Cols）

配合固定的 `max-width`，使用 `pin-cols` 让首列在水平滚动时保持固定。

::: preview
demo-preview=../../demo/table/PinCols.vue
:::

## 组合使用

所有功能可以组合使用。

::: preview
demo-preview=../../demo/table/Combined.vue
:::
