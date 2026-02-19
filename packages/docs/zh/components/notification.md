---
title: Notification 通知 | Sakana Element 像素组件库
description: Sakana Element 像素风格通知组件，支持多种位置和自定义内容。
---

<script setup>
import { notificationApi } from '../../api/notification'
</script>

# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。


<ApiTable :sections="notificationApi" lang="zh" />

## 基础用法

::: preview
demo-preview=../../demo/notification/Basic.vue
:::

## 不同类型

用来显示「成功、警告、消息、错误」类的通知。

::: preview
demo-preview=../../demo/notification/Types.vue
:::

## 不同位置

可以让通知从屏幕四角中的任意一角弹出。

::: preview
demo-preview=../../demo/notification/Position.vue
:::

## 自定义时长

设置 `duration` 为 `0` 时通知不会自动关闭。

::: preview
demo-preview=../../demo/notification/Duration.vue
:::

