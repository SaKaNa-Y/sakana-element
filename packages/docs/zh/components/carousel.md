---
title: Carousel 走马灯 | Sakana Element
description: 像素风格的走马灯/轮播组件，支持指示器和键盘导航。
---

<script setup>
import { carouselApi, carouselItemApi } from '../../apis/carousel'
</script>

# Carousel 走马灯

用于循环展示内容幻灯片的走马灯组件，具有像素风格。

<ApiTable :sections="[...carouselApi, ...carouselItemApi]" lang="zh" />

## 基础用法

一个包含多张幻灯片的简单走马灯。使用方向键或点击导航箭头和指示器切换幻灯片。

::: preview
demo-preview=../../demo/carousel/Basic.vue
:::

## 垂直方向

设置 `direction="vertical"` 实现垂直滚动的走马灯。需要固定的 `height`。

::: preview
demo-preview=../../demo/carousel/Vertical.vue
:::

## 指示器触发方式

使用 `indicator-trigger` 控制指示器响应 `click`（默认）还是 `hover`。

::: preview
demo-preview=../../demo/carousel/Indicators.vue
:::

## 箭头显示

通过 `show-arrow` 控制导航箭头的显示时机：`always`、`hover`（默认）或 `never`。

::: preview
demo-preview=../../demo/carousel/Arrows.vue
:::

## 颜色变体

使用 `color` 属性搭配预设名称或自定义十六进制颜色来设置走马灯的边框、阴影、箭头和指示器样式。

::: preview
demo-preview=../../demo/carousel/Color.vue
:::

## 编程式导航

通过模板引用访问 `next()`、`prev()` 和 `goTo(index)` 方法进行编程式控制。

::: preview
demo-preview=../../demo/carousel/Navigation.vue
:::
