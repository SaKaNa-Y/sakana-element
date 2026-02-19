---
title: Loading 加载 | Sakana Element 像素组件库
description: Sakana Element 像素风格加载组件，支持全屏和区域加载效果。
---

<script setup>
import { loadingApi } from '../../api/loading'
</script>

# Loading 加载

加载数据时显示动效。


<ApiTable :sections="loadingApi" lang="zh" />

## 区域加载

在容器中加载数据时显示。

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

