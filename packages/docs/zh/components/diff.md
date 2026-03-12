---
title: Diff 对比 | Sakana Element 像素组件库
description: 前后图片对比滑块组件，内置像素化支持，适用于 Vue 3。
---

<script setup>
import { diffApi } from '../../apis/diff'
</script>

# Diff 对比

前后对比滑块组件，具有像素风格的独特功能。在其标志性模式下，"之前" 侧显示原始图片，而 "之后" 侧自动将其像素化 —— 创造交互式的原图与像素化效果对比。支持自定义插槽以比较任意两段内容。

> 灵感来源：[daisyUI Diff](https://daisyui.com/components/diff/)，并结合了本库内置的像素化引擎进行增强。

<ApiTable :sections="diffApi" lang="zh" />

## 基础用法

传入 `src` 即可对比图片与其像素化版本。拖动滑块可显示更多或更少的原始图片。

::: preview
demo-preview=../../demo/diff/Basic.vue
:::

## 自定义插槽

使用 `before` 和 `after` 插槽来对比任意两段内容 —— 不同的图片、文本或组件。

::: preview
demo-preview=../../demo/diff/Slots.vue
:::

## 灰度模式

将 `grayscale` 与像素化模式结合使用，为 "之后" 侧呈现复古单色效果。

::: preview
demo-preview=../../demo/diff/Grayscale.vue
:::
