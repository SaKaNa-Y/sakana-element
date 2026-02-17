---
title: Form 表单 | Sakana Element 像素组件库
description: Sakana Element 像素风格表单组件，支持数据校验、自定义规则和响应式布局。
---

# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

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

## API

### Form Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 表单数据对象 | `Record<string, any>` | — |
| rules | 表单验证规则 | `FormRules` | — |
| disabled | 是否禁用表单 | `boolean` | `false` |
| labelWidth | 标签宽度 | `number \| string` | — |
| labelPosition | 标签位置 | `'left' \| 'right' \| 'top'` | `'right'` |
| labelSuffix | 标签后缀 | `string` | — |
| showMessage | 是否显示校验错误信息 | `boolean` | `true` |
| hideRequiredAsterisk | 是否隐藏必填字段的标签旁边的红色星号 | `boolean` | `false` |
| requiredAsteriskPosition | 星号位置 | `'left' \| 'right'` | `'left'` |

### Form Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| validate | 字段验证后触发 | `(prop: string, isValid: boolean, message: string) => void` |

### Form Exposes

| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| validate | 验证整个表单 | `(callback?: FormValidateCallback) => Promise<boolean>` |
| validateField | 验证指定字段 | `(props?: string[], callback?: FormValidateCallback) => Promise<boolean>` |
| resetFields | 重置表单字段 | `(props?: string[]) => void` |
| clearValidate | 清除验证状态 | `(props?: string[]) => void` |

### FormItem Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prop | model 的键名 | `string \| string[]` | — |
| label | 标签文本 | `string` | — |
| labelWidth | 标签宽度 | `number \| string` | — |
| required | 是否必填 | `boolean` | `false` |
| rules | 验证规则 | `FormItemRule[]` | — |
| error | 错误信息 | `string` | — |
| showMessage | 是否显示校验错误信息 | `boolean` | `true` |
| disabled | 是否禁用 | `boolean` | `false` |

### FormItem Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 表单项内容 |
| label | 自定义标签 |
| error | 自定义错误信息 |
