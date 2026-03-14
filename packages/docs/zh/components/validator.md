---
title: Validator 验证器 | Sakana Element 像素组件库
description: Sakana Element 轻量级内联验证器组件，使用 Zod schema 验证并显示像素风格错误提示。
---

<script setup>
import { validatorApi } from '../../apis/validator'
</script>

# Validator 验证器

轻量级内联验证包装器，用于单个表单元素的验证。与需要完整表单模型的 `Form` + `FormItem` 不同，`PxValidator` 可以包裹任意输入控件，当 Zod 验证失败时显示像素风格的提示文本。灵感来自 DaisyUI 的 Validator 模式。

<ApiTable :sections="validatorApi" lang="zh" />

## 基础用法

用 `PxValidator` 包裹表单元素，绑定 `v-model` 并提供 `rules`。使用 `required: true` 作为非空字符串验证的简写。

::: preview
demo-preview=../../demo/validator/Basic.vue
:::

## Zod Schema 验证

使用 Zod schema 进行丰富的验证 —— 邮箱格式、最小长度、正则匹配等。

::: preview
demo-preview=../../demo/validator/Schema.vue
:::

## 自定义错误消息

在规则中使用自定义 `message` 覆盖 Zod 的默认错误提示。

::: preview
demo-preview=../../demo/validator/CustomMessage.vue
:::

## 触发模式

使用 `trigger` 控制验证时机：`'change'`、`'blur'` 或 `'input'`。

::: preview
demo-preview=../../demo/validator/Trigger.vue
:::

## 编程式验证

通过模板 ref 访问 `validate()` 和 `reset()` 进行手动控制。

::: preview
demo-preview=../../demo/validator/Programmatic.vue
:::
