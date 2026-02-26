---
title: Pixelate 像素化 | Sakana Element 像素组件库
description: 基于 Canvas 的图片像素化组件，支持可调像素块大小、灰度模式和调色板映射，适用于 Vue 3。
---

<script setup>
import { pixelateApi } from '../../apis/pixelate'
</script>

# Pixelate 像素化

基于 Canvas 的图片像素化组件。可将任意图片转换为像素风格，支持可配置的像素块大小、灰度模式以及自定义调色板映射。

> 灵感来源：[Pixelium Design](https://shika-works.github.io/pixelium-design/zh/fabulous-idea/pixelate)、[Pixel-UI Pixelit](https://maomentai817.github.io/pixel-ui/components/pixelit.html)。

> [!NOTE]
> 示例图片没有特别含义，仅作为展示像素化效果的彩色样本。

<ApiTable :sections="pixelateApi" lang="zh" />

## 基础用法

传入图片 `src` 即可使用默认像素大小（8）进行像素化处理。

::: preview
demo-preview=../../demo/pixelate/Basic.vue
:::

## 像素大小

通过 `pixel-size` 控制像素化程度。值越大，像素块越大，像素化效果越明显。

::: preview
demo-preview=../../demo/pixelate/PixelSize.vue
:::

## 灰度模式

启用 `grayscale` 属性，可将像素化输出转换为灰度图像（使用 ITU-R BT.601 亮度公式）。

::: preview
demo-preview=../../demo/pixelate/Grayscale.vue
:::

## 自定义调色板

通过 `palette` 属性将像素颜色映射到有限的颜色集合。支持十六进制字符串（如 `'#FF0000'`）或 RGB 元组（如 `[255, 0, 0]`）。每个像素块会映射到 RGB 空间中欧几里得距离最近的调色板颜色。

::: preview
demo-preview=../../demo/pixelate/Palette.vue
:::

## 尺寸控制

使用 `width` 和 `height` 属性控制渲染尺寸。接受数值（像素）或字符串（CSS 单位如 `'50%'`）。

::: preview
demo-preview=../../demo/pixelate/Dimensions.vue
:::

## 暴露方法

通过模板引用访问组件实例，调用 `render()`、`getSize()` 和 `getImageData()` 方法。

::: preview
demo-preview=../../demo/pixelate/ExposedMethods.vue
:::
