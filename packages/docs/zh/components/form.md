---
title: Form 表单 | Sakana Element 像素组件库
description: Sakana Element 像素风格表单组件，支持 Zod 数据校验、行内布局、状态图标和响应式设计。
---

<script setup>
import { formApi, formItemApi } from '../../apis/form'
</script>

# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。


<ApiTable :sections="[...formApi, ...formItemApi]" lang="zh" />

## 基础用法

基本的表单数据域控制，包含各种表单项。

::: preview
demo-preview=../../demo/form/Basic.vue
:::

## 表单校验

表单校验使用 [Zod](https://zod.dev) 模式验证。每条规则可提供 `schema`（Zod 类型）或使用 `required` 简写进行简单的必填检查。

::: preview
demo-preview=../../demo/form/Validation.vue
:::

## 行内表单

设置 `inline` 属性可以让表单项水平排列，适用于搜索表单和筛选器。

::: preview
demo-preview=../../demo/form/Inline.vue
:::

## 标签位置

通过设置 `label-position` 属性可以改变表单域标签的位置。

::: preview
demo-preview=../../demo/form/LabelPosition.vue
:::

## 状态图标

设置 `status-icon` 属性可以在验证后显示成功/失败图标。

::: preview
demo-preview=../../demo/form/StatusIcon.vue
:::

## 禁用

在表单上设置 `disabled` 属性可以禁用所有表单控件。

::: preview
demo-preview=../../demo/form/Disabled.vue
:::
