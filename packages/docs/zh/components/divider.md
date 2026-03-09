---
title: Divider 分割线 | Sakana Element 像素组件库
description: Sakana Element 像素风格分割线组件，支持文本内容、方向、主题颜色、自定义颜色和边框样式。
---

<script setup>
import { dividerApi } from '../../apis/divider'
</script>

# Divider 分割线

用于分隔内容的分割线组件，支持可选文本，水平和垂直方向。


<ApiTable :sections="dividerApi" lang="zh" />

## 基础用法

使用 `px-divider` 来分隔内容。可以通过 `content` 属性或默认插槽添加文本。

::: preview
demo-preview=../../demo/divider/Basic.vue
:::

## 垂直分割线

使用 `direction="vertical"` 来实现行内垂直分隔。垂直分割线不会渲染内容。

::: preview
demo-preview=../../demo/divider/Vertical.vue
:::

## 内容位置

使用 `content-position` 来控制文本在分割线上的位置。

::: preview
demo-preview=../../demo/divider/ContentPosition.vue
:::

## 类型

使用 `type` 属性来应用预设主题颜色。

::: preview
demo-preview=../../demo/divider/Type.vue
:::

## 自定义颜色

使用 `color` 属性来设置分割线和文本的自定义十六进制颜色。

::: preview
demo-preview=../../demo/divider/CustomColor.vue
:::

## 边框样式

使用 `border-style` 属性来改变线条样式。支持 `solid`、`dashed` 和 `dotted` 像素风格图案。

::: preview
demo-preview=../../demo/divider/BorderStyle.vue
:::
