---
title: Breadcrumb 面包屑 | Sakana Element 像素组件库
description: Sakana Element 像素风格面包屑导航组件，支持自定义分隔符和图标。
---

<script setup>
import { breadcrumbApi, breadcrumbItemApi } from '../../apis/breadcrumb'
</script>

# Breadcrumb 面包屑

显示当前页面在导航层级中的位置。

<ApiTable :sections="[...breadcrumbApi, ...breadcrumbItemApi]" lang="zh" />

## 基础用法

最简单的面包屑导航。设置了 `to` 属性的项目会渲染为链接，最后一个项目（没有 `to`）显示为当前页面。

::: preview
demo-preview=../../demo/breadcrumb/Basic.vue
:::

## 带图标

使用 `icon` 属性为面包屑项目添加像素图标。

::: preview
demo-preview=../../demo/breadcrumb/WithIcons.vue
:::

## 禁用状态

使用 `disabled` 属性禁用某个面包屑项目，禁用后不可点击。

::: preview
demo-preview=../../demo/breadcrumb/Disabled.vue
:::

## 自定义分隔符

使用 `separator` 属性设置简单的文本分隔符，或使用 `#separator` 插槽自定义分隔符组件（例如图标）。

::: preview
demo-preview=../../demo/breadcrumb/CustomSeparator.vue
:::
