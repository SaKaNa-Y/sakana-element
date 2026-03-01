---
title: Notification 通知 | Sakana Element 像素组件库
description: Sakana Element 像素风格通知组件，支持多种位置和自定义内容。
---

<script setup>
import { notificationApi } from '../../apis/notification'
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

## 朴素模式

使用 `plain` 获取浅色背景、彩色文字的样式。

::: preview
demo-preview=../../demo/notification/Plain.vue
:::

## 幽灵模式

使用 `ghost` 获取透明背景、仅边框的样式。

::: preview
demo-preview=../../demo/notification/Ghost.vue
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

## 计时进度条

底部的细进度条显示剩余时间，通过 `showTimer`（默认 `true`）控制。

::: preview
demo-preview=../../demo/notification/TimerBar.vue
:::

## 最大显示数量

设置 `max` 限制同一位置的最大可见通知数量，超出时自动关闭最早的通知。

::: preview
demo-preview=../../demo/notification/MaxCount.vue
:::
