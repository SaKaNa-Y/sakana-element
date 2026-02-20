---
title: Button 按钮 | Sakana Element 像素组件库
description: Sakana Element 像素风格按钮组件，支持多种类型、尺寸、禁用状态和加载效果。Vue 3 像素 UI 按钮组件。
---

<script setup>
import { buttonApi } from '../../apis/button'
</script>

# Button 按钮

常用的操作按钮，具有像素风格的视觉效果。


<ApiTable :sections="buttonApi" lang="zh" />

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 属性来定义按钮的样式。

::: preview
demo-preview=../../demo/button/Basic.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用按钮。

::: preview
demo-preview=../../demo/button/Disabled.vue
:::

## 不同尺寸

使用 `size` 属性来设置按钮的大小。

::: preview
demo-preview=../../demo/button/Size.vue
:::

## 图标按钮

使用 `icon` 属性来为按钮添加图标。

::: preview
demo-preview=../../demo/button/Icon.vue
:::

## 虚线边框

使用 `dash` 属性来应用虚线边框样式。像素 `clip-path` 边框将替换为 CSS 虚线边框，呈现手绘/剪纸风格。

::: preview
demo-preview=../../demo/button/Dash.vue
:::

## 幽灵按钮

使用 `ghost` 属性来创建无边框、无背景的按钮。仅文字可见，悬停时出现淡色填充。

::: preview
demo-preview=../../demo/button/Ghost.vue
:::

## 加载状态

使用 `loading` 属性来设置按钮的加载状态。

::: preview
demo-preview=../../demo/button/Loading.vue
:::

## 按钮组

使用 `<px-button-group>` 组件来嵌套多个按钮。

::: preview
demo-preview=../../demo/button/Group.vue
:::

## 自定义颜色

使用 `color` 属性来设置按钮的自定义颜色。文字颜色、悬停状态、激活状态和禁用状态会根据提供的颜色自动生成。

::: preview
demo-preview=../../demo/button/Color.vue
:::

## 登录按钮

结合 `icon` 和 `color` 属性来创建社交登录按钮。所有 486 个 pixelarticons 图标已内置，`github` 和 `mail` 等图标开箱即用。

::: preview
demo-preview=../../demo/button/Login.vue
:::

## 自定义标签

使用 `tag` 属性来自定义按钮的 HTML 标签。

::: preview
demo-preview=../../demo/button/Tag.vue
:::

## 节流模式

使用 `use-throttle` 和 `throttle-duration` 属性来启用节流模式。

::: preview
demo-preview=../../demo/button/Throttle.vue
:::

