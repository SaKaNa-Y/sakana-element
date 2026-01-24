# Icon 图标

Sakana Element 使用 Font Awesome 图标库作为图标方案。

## 基础用法

使用 `icon` 属性指定图标名称。

::: preview
demo-preview=../../demo/icon/Basic.vue
:::

## 不同尺寸

使用 `size` 属性设置图标大小。

::: preview
demo-preview=../../demo/icon/Size.vue
:::

## 图标颜色

使用 `type` 或 `color` 属性设置图标颜色。

::: preview
demo-preview=../../demo/icon/Color.vue
:::

## 图标动画

支持多种动画效果：`spin`、`pulse`、`bounce`、`shake`、`beat`、`fade` 等。

::: preview
demo-preview=../../demo/icon/Animation.vue
:::

## API

### Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标名称 | `string \| Array<string> \| object` | — |
| size | 图标大小 | `'2xs' \| 'xs' \| 'sm' \| 'lg' \| 'xl' \| '2xl' \| '1x' \| ... \| '10x'` | — |
| type | 图标类型颜色 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |
| color | 自定义颜色 | `string` | — |
| spin | 旋转动画 | `boolean` | `false` |
| pulse | 脉冲动画 | `boolean` | `false` |
| bounce | 弹跳动画 | `boolean` | `false` |
| shake | 抖动动画 | `boolean` | `false` |
| beat | 心跳动画 | `boolean` | `false` |
| fade | 淡入淡出动画 | `boolean` | `false` |
| beatFade | 心跳淡入淡出组合 | `boolean` | `false` |
| rotation | 旋转角度 | `90 \| 180 \| 270` | — |
| flip | 翻转方向 | `'horizontal' \| 'vertical' \| 'both'` | — |
| fixedWidth | 固定宽度 | `boolean` | `false` |
| border | 边框 | `boolean` | `false` |
| inverse | 反色 | `boolean` | `false` |
