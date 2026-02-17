---
title: Select 选择器 | Sakana Element 像素组件库
description: Sakana Element 像素风格选择器组件，支持单选、搜索、禁用和自定义选项。Vue 3 像素 UI 组件。
---

# Select 选择器

下拉选择器组件，用于从一组选项中选择一个值。

## 基础用法

基础的选择器用法。

::: preview
demo-preview=../../demo/select/Basic.vue
:::

## 禁用选项

在选项中使用 `disabled` 属性来禁用某个选项。

::: preview
demo-preview=../../demo/select/Disabled.vue
:::

## API

### Select 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `string \| number` | — |
| placeholder | 占位符 | `string` | `'请选择'` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| filterable | 是否可搜索 | `boolean` | `false` |

### Select 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| change | 选中值改变时触发 | `(value: string \| number) => void` |
| visible-change | 下拉框显示/隐藏时触发 | `(visible: boolean) => void` |
| clear | 清空选中值时触发 | `() => void` |

### Option 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项值 | `string \| number` | — |
| label | 选项标签 | `string` | — |
| disabled | 是否禁用 | `boolean` | `false` |
