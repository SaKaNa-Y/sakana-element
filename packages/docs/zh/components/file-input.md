---
title: FileInput 文件输入 | Sakana Element 像素组件库
description: Sakana Element 像素风格文件输入组件，支持颜色变体、幽灵样式、可清空、多选、文件类型过滤和尺寸选项。
---

<script setup>
import { fileInputApi } from '../../apis/file-input'
</script>

# FileInput 文件输入

像素风格的文件选择输入组件。


<ApiTable :sections="fileInputApi" lang="zh" />

## 基础用法

基础的文件输入框用法。

::: preview
demo-preview=../../demo/file-input/Basic.vue
:::

## 文件输入颜色

使用 `color` 属性为文件输入框应用预设主题颜色的边框和阴影。

::: preview
demo-preview=../../demo/file-input/Color.vue
:::

## 自定义颜色

向 `color` 属性传入任意十六进制颜色字符串来创建自定义颜色的文件输入框。

::: preview
demo-preview=../../demo/file-input/CustomColor.vue
:::

## 幽灵文件输入

使用 `ghost` 属性来创建无边框的文件输入框，悬浮时显示边框和阴影。可与预设颜色和自定义颜色搭配使用。

::: preview
demo-preview=../../demo/file-input/Ghost.vue
:::

## 不同尺寸

使用 `size` 属性来设置文件输入框的大小。

::: preview
demo-preview=../../demo/file-input/Size.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用文件输入框。

::: preview
demo-preview=../../demo/file-input/Disabled.vue
:::

## 可清空

使用 `clearable` 属性来启用选择文件后的清空按钮。

::: preview
demo-preview=../../demo/file-input/Clearable.vue
:::

## 多选文件

使用 `multiple` 属性来允许选择多个文件。

::: preview
demo-preview=../../demo/file-input/Multiple.vue
:::

## 文件类型过滤

使用 `accept` 属性来限制可选择的文件类型。

::: preview
demo-preview=../../demo/file-input/Accept.vue
:::
