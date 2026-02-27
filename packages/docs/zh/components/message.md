---
title: Message 消息 | Sakana Element 像素组件库
description: Sakana Element 像素风格消息提示组件，用于操作反馈和全局提示。
---

<script setup>
import { messageApi } from '../../apis/message'
</script>

# Message 消息提示

常用于主动操作后的反馈提示。


<ApiTable :sections="messageApi" lang="zh" />

## 基础用法

从顶部出现，3 秒后自动消失。

::: preview
demo-preview=../../demo/message/Basic.vue
:::

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

::: preview
demo-preview=../../demo/message/Types.vue
:::

## 朴素样式

使用 `plain` 显示浅色背景、彩色文字的朴素风格。

::: preview
demo-preview=../../demo/message/Plain.vue
:::

## 幽灵样式

使用 `ghost` 显示透明背景、仅有边框的幽灵风格。

::: preview
demo-preview=../../demo/message/Ghost.vue
:::

## 自定义图标

通过 `icon` 属性覆盖默认的类型图标。

::: preview
demo-preview=../../demo/message/CustomIcon.vue
:::

## 可关闭的消息

可以添加关闭按钮。

::: preview
demo-preview=../../demo/message/Closable.vue
:::

## 持续时间进度条

消息底部会显示一个细进度条，展示剩余停留时间。通过 `showTimer`（默认为 `true`）控制。

::: preview
demo-preview=../../demo/message/TimerBar.vue
:::

## 文字居中

使用 `center` 属性让文字水平居中。

::: preview
demo-preview=../../demo/message/Center.vue
:::

## 最大显示数量

设置 `max` 限制同时显示的消息数量，超出时自动关闭最早的消息。

::: preview
demo-preview=../../demo/message/MaxCount.vue
:::

## 关闭所有消息

调用 `PxMessage.closeAll()` 关闭所有消息。

::: preview
demo-preview=../../demo/message/CloseAll.vue
:::
