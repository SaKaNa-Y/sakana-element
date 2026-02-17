---
title: Dropdown 下拉菜单 | Sakana Element 像素组件库
description: Sakana Element 像素风格下拉菜单组件，支持多级菜单和自定义触发方式。
---

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

悬停在下拉菜单上以展开更多操作。

::: preview
demo-preview=../../demo/dropdown/Basic.vue
:::

## 触发方式

可以配置点击或悬停触发。

::: preview
demo-preview=../../demo/dropdown/Trigger.vue
:::

## 分割按钮

可以使用 `split-button` 来拆分下拉菜单按钮。

::: preview
demo-preview=../../demo/dropdown/Split.vue
:::

## 禁用项

使用 `disabled` 属性禁用某些选项。

::: preview
demo-preview=../../demo/dropdown/Disabled.vue
:::

## API

### Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 菜单项 | `DropdownItemProps[]` | — |
| trigger | 触发方式 | `'hover' \| 'click' \| 'contextmenu'` | `'hover'` |
| type | 按钮类型 | `ButtonType` | — |
| size | 按钮大小 | `'large' \| 'default' \| 'small'` | `'default'` |
| splitButton | 是否使用分割按钮 | `boolean` | `false` |
| hideOnClick | 点击后是否隐藏菜单 | `boolean` | `true` |
| placement | 菜单位置 | `Placement` | `'bottom'` |
| disabled | 是否禁用 | `boolean` | `false` |

### DropdownItem Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| command | 指令 | `string \| number` | — |
| label | 显示文本 | `string \| VNode` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| divided | 是否显示分割线 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| command | 点击菜单项触发 | `(command: string \| number) => void` |
| visible-change | 菜单显示/隐藏时触发 | `(visible: boolean) => void` |
| click | 点击分割按钮左侧时触发 | `(event: MouseEvent) => void` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 触发下拉菜单的元素 |
| dropdown | 下拉菜单内容，通常是 `<px-dropdown-item>` |

### Exposes

| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| open | 打开下拉菜单 | `() => void` |
| close | 关闭下拉菜单 | `() => void` |
