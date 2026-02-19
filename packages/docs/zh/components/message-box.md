---
title: MessageBox 消息弹框 | Sakana Element 像素组件库
description: Sakana Element 像素风格消息弹框组件，支持确认、提示和输入模式。
---

<script setup>
import { messageBoxApi } from '../../api/message-box'
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

