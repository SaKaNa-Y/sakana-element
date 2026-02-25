---
title: Loading 加载 | Sakana Element 像素组件库
description: Sakana Element 像素风格加载组件，支持独立指示器、全屏和区域加载效果。
---

<script setup>
import { loadingApi, loadingIndicatorApi } from '../../apis/loading'
</script>

# Loading 加载

加载数据时显示动效。


<ApiTable :sections="[...loadingIndicatorApi, ...loadingApi]" lang="zh" />

## 动画变体

`PxLoadingIndicator` 是独立的加载指示器组件，包含 4 种像素风格动画变体。

::: preview
demo-preview=../../demo/loading/Variant.vue
:::

## 尺寸

使用 `size` 控制指示器尺寸：`xs` (16px)、`sm` (20px)、`md` (24px)、`lg` (32px)。

::: preview
demo-preview=../../demo/loading/LoadingSize.vue
:::

## 类型 / 颜色

使用 `type` 设置预设主题色，或使用 `color` 自定义十六进制颜色。

::: preview
demo-preview=../../demo/loading/LoadingType.vue
:::

## 区域加载

在容器中加载数据时显示。内部使用 `PxLoadingIndicator` 组件。

::: preview
demo-preview=../../demo/loading/Basic.vue
:::

## 自定义

可以自定义加载文案、背景色等。

::: preview
demo-preview=../../demo/loading/Custom.vue
:::

## 全屏加载

使用全屏加载。

::: preview
demo-preview=../../demo/loading/Fullscreen.vue
:::

## 服务方式调用

Loading 还可以以服务方式调用。

::: preview
demo-preview=../../demo/loading/Service.vue
:::
