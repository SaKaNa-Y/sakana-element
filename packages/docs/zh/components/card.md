---
title: Card 卡片 | Sakana Element 像素组件库
description: Sakana Element 像素风格卡片容器组件，支持类型变体、轮廓、虚线、幽灵和自定义颜色。
---

<script setup>
import { cardApi } from '../../apis/card'
</script>

# Card 卡片

用于展示结构化内容的容器组件，具有像素风格边框。


<ApiTable :sections="cardApi" lang="zh" />

## 基础用法

基础的卡片展示，包含头部、主体和底部。

::: preview
demo-preview=../../demo/card/Basic.vue
:::

## 类型

使用 `type` 设置卡片的颜色主题。可选值：`primary`、`success`、`info`、`warning`、`danger`。

::: preview
demo-preview=../../demo/card/Type.vue
:::

## 尺寸

使用 `size` 属性设置卡片尺寸。可选值为 `'small'` 或 `'large'`。

::: preview
demo-preview=../../demo/card/Size.vue
:::

## 阴影

使用 `shadow` 属性控制阴影的显示时机。可选值为 `'always'`、`'hover'` 或 `'never'`。

::: preview
demo-preview=../../demo/card/Shadow.vue
:::

## 悬停效果

使用 `hoverable` 属性在鼠标悬停时添加浮起效果。

::: preview
demo-preview=../../demo/card/Hoverable.vue
:::

## 轮廓

使用 `outline` 属性设置实线边框、透明背景的样式。

::: preview
demo-preview=../../demo/card/Outline.vue
:::

## 虚线

使用 `dash` 属性设置虚线边框样式。

::: preview
demo-preview=../../demo/card/Dash.vue
:::

## 幽灵

使用 `ghost` 属性移除边框和背景，只显示彩色文字。

::: preview
demo-preview=../../demo/card/Ghost.vue
:::

## 自定义颜色

使用 `color` 属性传入十六进制色值，可创建任意颜色变体的卡片。

::: preview
demo-preview=../../demo/card/CustomColor.vue
:::
