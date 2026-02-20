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

## 可关闭的消息

可以添加关闭按钮。

::: preview
demo-preview=../../demo/message/Closable.vue
:::

## 文字居中

使用 `center` 属性让文字水平居中。

::: preview
demo-preview=../../demo/message/Center.vue
:::

## 关闭所有消息

调用 `PxMessage.closeAll()` 关闭所有消息。

::: preview
demo-preview=../../demo/message/CloseAll.vue
:::

