---
title: Badge 徽章 | Sakana Element 像素组件库
description: Sakana Element 像素风格徽章组件，用于状态标识、标签和标记。
---

<script setup>
import { badgeApi } from '../../apis/badge'
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

## 图标

使用 `icon` 属性在徽章内添加像素图标，可与文本内容组合使用。

::: preview
demo-preview=../../demo/badge/Icon.vue
:::

## 空徽章

省略插槽内容可渲染为空心圆点指示器，随 `size` 自动缩放。

::: preview
demo-preview=../../demo/badge/Empty.vue
:::

## 圆角样式

使用 `round` 属性来应用像素风格的圆角。

::: preview
demo-preview=../../demo/badge/Round.vue
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

## 文本中的徽章

徽章可以内联放置在标题和段落中。

::: preview
demo-preview=../../demo/badge/InText.vue
:::

## 按钮中的徽章

徽章可以嵌套在按钮内部，作为计数指示器或圆点标记。

::: preview
demo-preview=../../demo/badge/InButton.vue
:::
