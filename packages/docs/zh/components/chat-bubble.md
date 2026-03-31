---
title: ChatBubble 聊天气泡 | Sakana Element 像素组件库
description: Sakana Element 像素风格聊天气泡组件，支持方向、颜色类型、头像和自定义颜色。
---

<script setup>
import { chatBubbleApi } from '../../apis/chat-bubble'
</script>

# ChatBubble 聊天气泡

像素风格的聊天气泡组件，用于构建对话界面。

<ApiTable :sections="chatBubbleApi" lang="zh" />

## 基础用法

使用 `placement` 控制气泡显示的方向。默认为 `start`（左侧）。

::: preview
demo-preview=../../demo/chat-bubble/Basic.vue
:::

## 类型

使用 `type` 属性设置气泡的颜色主题。

::: preview
demo-preview=../../demo/chat-bubble/Type.vue
:::

## 头像

使用 `avatar` 插槽在气泡旁添加头像。

::: preview
demo-preview=../../demo/chat-bubble/Avatar.vue
:::

## 头部和底部

使用 `name`、`time` 和 `status` 属性来显示发送者信息和投递状态。

::: preview
demo-preview=../../demo/chat-bubble/HeaderFooter.vue
:::

## 自定义颜色

使用 `color` 属性为气泡设置自定义十六进制颜色。

::: preview
demo-preview=../../demo/chat-bubble/CustomColor.vue
:::

## 打字指示器

使用 `typing` 属性显示带有弹跳像素点的打字中动画。

::: preview
demo-preview=../../demo/chat-bubble/Typing.vue
:::

## 对话

组合多个聊天气泡来构建完整的对话布局。

::: preview
demo-preview=../../demo/chat-bubble/Conversation.vue
:::
