---
title: Card 卡片 | Sakana Element 像素组件库
description: Sakana Element 像素风格卡片容器组件，用于展示结构化内容。
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
