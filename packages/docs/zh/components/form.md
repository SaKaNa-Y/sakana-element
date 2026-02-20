---
title: Form 表单 | Sakana Element 像素组件库
description: Sakana Element 像素风格表单组件，支持数据校验、自定义规则和响应式布局。
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

Form 组件提供了表单验证的功能。

::: preview
demo-preview=../../demo/form/Validation.vue
:::

## 标签位置

通过设置 `label-position` 属性可以改变表单域标签的位置。

::: preview
demo-preview=../../demo/form/LabelPosition.vue
:::

