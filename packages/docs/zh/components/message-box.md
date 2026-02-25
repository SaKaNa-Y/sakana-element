---
title: MessageBox 消息弹框 | Sakana Element 像素组件库
description: Sakana Element 像素风格消息弹框组件，支持确认、提示和输入模式。
---

<script setup>
import { messageBoxApi } from '../../apis/message-box'
</script>

# MessageBox 消息弹框

模拟系统的消息提示框而实现的一套模态对话框组件。


<ApiTable :sections="messageBoxApi" lang="zh" />

## Alert 消息提示

用于提示用户的消息，只有确认按钮。

::: preview
demo-preview=../../demo/message-box/Alert.vue
:::

## Confirm 确认消息

用于提示用户确认操作，有确认和取消按钮。

::: preview
demo-preview=../../demo/message-box/Confirm.vue
:::

## Prompt 提交内容

用于提示用户输入内容。

::: preview
demo-preview=../../demo/message-box/Prompt.vue
:::

## 自定义内容

可以自定义消息框的内容。

::: preview
demo-preview=../../demo/message-box/Custom.vue
:::

## 居中布局

使用 `center` 属性使标题和底部按钮居中对齐。

::: preview
demo-preview=../../demo/message-box/Center.vue
:::

## 关闭前回调

使用 `beforeClose` 拦截关闭操作。回调接收 `action`、`instance` 和 `done` 函数 — 调用 `done()` 才会真正关闭对话框。

::: preview
demo-preview=../../demo/message-box/BeforeClose.vue
:::

