# Switch 开关

用于在两种状态之间切换的开关组件。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。

::: preview
demo-preview=../../demo/switch/Basic.vue
:::

## 不同尺寸

使用 `size` 属性来设置开关的大小。

::: preview
demo-preview=../../demo/switch/Size.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用开关。

::: preview
demo-preview=../../demo/switch/Disabled.vue
:::

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| active-text | 打开时的文字 | `string` | — |
| inactive-text | 关闭时的文字 | `string` | — |
| active-value | 打开时的值 | `boolean \| string \| number` | `true` |
| inactive-value | 关闭时的值 | `boolean \| string \| number` | `false` |
| name | 原生 name 属性 | `string` | — |

### 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| change | 状态改变时触发 | `(value: boolean) => void` |

### 暴露

| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| ref | 开关 HTML 元素 | `Ref<HTMLInputElement>` |
