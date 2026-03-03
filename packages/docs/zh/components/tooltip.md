---
title: Tooltip 文字提示 | Sakana Element 像素组件库
description: Sakana Element 像素风格文字提示组件，鼠标悬停显示详细信息。
---

<script setup>
import { tooltipApi } from '../../apis/tooltip'
</script>

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。


<ApiTable :sections="tooltipApi" lang="zh" />

## 基础用法

使用 `content` 属性来设置提示内容。

::: preview
demo-preview=../../demo/tooltip/Basic.vue
:::

## 主题风格

使用 `effect` 在深色和浅色主题之间切换。

::: preview
demo-preview=../../demo/tooltip/Effect.vue
:::

## 主题颜色

使用 `type` 设置主题色。

::: preview
demo-preview=../../demo/tooltip/Type.vue
:::

## 不同位置

使用 `placement` 属性来设置 Tooltip 出现的位置。

::: preview
demo-preview=../../demo/tooltip/Placement.vue
:::

## 触发方式

使用 `trigger` 属性来设置触发方式。

::: preview
demo-preview=../../demo/tooltip/Trigger.vue
:::

## 最大宽度

使用 `max-width` 限制提示框宽度，超出后自动换行。

::: preview
demo-preview=../../demo/tooltip/MaxWidth.vue
:::

## 可进入

当 `enterable` 为 `true`（默认）时，鼠标移入提示框后不会关闭。设为 `false` 鼠标移出后立即关闭。

::: preview
demo-preview=../../demo/tooltip/Enterable.vue
:::

## 手动控制

使用 `manual` 模式配合暴露的 `show` / `hide` / `toggle` 方法进行程序化控制。

::: preview
demo-preview=../../demo/tooltip/Manual.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用 Tooltip。

::: preview
demo-preview=../../demo/tooltip/Disabled.vue
:::

## 虚拟触发

使用 `virtual-triggering` 和 `virtual-ref` 从外部 DOM 元素触发 Tooltip。

::: preview
demo-preview=../../demo/tooltip/VirtualTrigger.vue
:::

## 显示箭头

使用 `show-arrow` 显示指向触发元素的像素风格箭头。

::: preview
demo-preview=../../demo/tooltip/Arrow.vue
:::

## 自定义内容

使用 `content` 插槽在提示框中放置富文本内容。

::: preview
demo-preview=../../demo/tooltip/CustomContent.vue
:::
