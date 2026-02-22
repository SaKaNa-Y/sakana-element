---
title: Collapse 折叠面板 | Sakana Element 像素组件库
description: Sakana Element 像素风格折叠面板组件，支持手风琴模式和自定义标题。
---

<script setup>
import { collapseApi, collapseItemApi } from '../../apis/collapse'
</script>

# Collapse 折叠面板

可以折叠/展开的内容区域。


<ApiTable :sections="[...collapseApi, ...collapseItemApi]" lang="zh" />

## 基础用法

可同时展开多个面板，面板之间不会影响。

::: preview
demo-preview=../../demo/collapse/Basic.vue
:::

## 手风琴模式

使用 `accordion` 属性来设置手风琴模式，每次只能展开一个面板。

::: preview
demo-preview=../../demo/collapse/Accordion.vue
:::

## 隐藏箭头

设置 `show-arrow="false"` 隐藏箭头指示器，获得更简洁的外观。

::: preview
demo-preview=../../demo/collapse/NoArrow.vue
:::

## 加减号图标

使用 `icon="plus"` 将默认箭头替换为加减号切换指示器。

::: preview
demo-preview=../../demo/collapse/PlusMinusIcon.vue
:::

## 自定义图标

使用 `icon` 属性设置任意内置图标名称来替换默认箭头。图标保持静态显示（不旋转）。设置 `icon="plus"` 可实现上方展示的加减号切换效果。

::: preview
demo-preview=../../demo/collapse/CustomIcon.vue
:::

## 自定义标题

使用 `title` 插槽来自定义标题内容。

::: preview
demo-preview=../../demo/collapse/CustomTitle.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用面板。

::: preview
demo-preview=../../demo/collapse/Disabled.vue
:::
