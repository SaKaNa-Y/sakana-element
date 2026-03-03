---
title: Drawer 抽屉 | Sakana Element 像素组件库
description: Sakana Element 像素风格抽屉侧边栏组件，支持遮罩层和过渡动画。
---

<script setup>
import { drawerApi } from '../../apis/drawer'
</script>

# Drawer 抽屉

像素风格的侧边面板，从屏幕边缘滑入。


<ApiTable :sections="drawerApi" lang="zh" />

## 基础用法

使用 `v-model` 控制抽屉的打开/关闭状态。内容放在 `sidebar` 插槽中。

::: preview
demo-preview=../../demo/drawer/Basic.vue
:::

## 弹出位置

使用 `placement` 设置抽屉从左侧或右侧滑入。

::: preview
demo-preview=../../demo/drawer/Placement.vue
:::

## 自定义尺寸

使用 `size` 设置抽屉宽度，接受任何 CSS 宽度值。

::: preview
demo-preview=../../demo/drawer/Size.vue
:::

## 遮罩层

通过 `show-overlay` 和 `close-on-click-overlay` 控制背景遮罩层。

::: preview
demo-preview=../../demo/drawer/Overlay.vue
:::

## 标题

使用 `title` 属性渲染带有像素虚线分隔符的标题栏。

::: preview
demo-preview=../../demo/drawer/Title.vue
:::

## 禁用 ESC 关闭

设置 `close-on-esc` 为 `false` 以禁止按 ESC 键关闭抽屉。

::: preview
demo-preview=../../demo/drawer/NoEsc.vue
:::
