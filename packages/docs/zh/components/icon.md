---
title: Icon 图标 | Sakana Element 像素组件库
description: Sakana Element 内置 486 个像素风格图标，基于 pixelarticons，支持尺寸、颜色、翻转、旋转和动画效果。
---

# Icon 图标

Sakana Element 内置了 [pixelarticons](https://pixelarticons.com/) 的全部 486 个图标 - 一个基于 24x24 网格的像素风格图标库。所有图标开箱即用，无需额外安装。

## 基础用法

使用 `icon` 属性指定图标名称。图标名称遵循 pixelarticons 的命名规范。

::: preview
demo-preview=../../demo/icon/Basic.vue
:::

## 不同尺寸

使用 `size` 属性设置图标大小。尺寸基于 24px 网格：

- `xs`：12px
- `sm`：18px
- `md`：24px（默认）
- `lg`：36px
- `xl`：48px
- `2xl`：72px
- `1x`、`2x`、`3x`：兼容 FA 的别名（24px、48px、72px）

::: preview
demo-preview=../../demo/icon/Size.vue
:::

## 图标颜色

使用 `type` 或 `color` 属性设置图标颜色。

::: preview
demo-preview=../../demo/icon/Color.vue
:::

## 翻转与旋转

使用 `flip` 属性可水平、垂直或双向翻转图标。使用 `rotation` 属性可旋转 90°、180° 或 270°。两者可以组合使用。

::: preview
demo-preview=../../demo/icon/Flip.vue
:::

## 图标动画

支持多种像素风格的动画效果，使用 CSS `steps()` 实现逐帧动画效果：`spin`、`pulse`、`bounce`、`shake`、`beat`、`fade`。

::: preview
demo-preview=../../demo/icon/Animation.vue
:::

## 图标集合

浏览和搜索所有内置图标。点击任意图标即可复制其名称。

::: preview
demo-preview=../../demo/icon/Collection.vue
:::

## 自定义图标

你可以使用 `registerPixelIcon` 函数注册自定义像素图标：

```ts
import { registerPixelIcon } from 'sakana-element';

// 使用 SVG 字符串注册自定义图标
registerPixelIcon('my-icon', '<svg viewBox="0 0 24 24">...</svg>');
```

然后像其他图标一样使用：

```vue
<px-icon icon="my-icon" />
```

## API

### Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标名称（pixelarticons 名称或映射别名） | `string` | — |
| size | 图标大小 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '1x' \| '2x' \| '3x'` | `'md'` |
| type | 图标类型颜色 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |
| color | 自定义颜色 | `string` | — |
| flip | 翻转方向 | `'horizontal' \| 'vertical' \| 'both'` | — |
| rotation | 旋转角度 | `90 \| 180 \| 270` | — |
| spin | 旋转动画（逐帧） | `boolean` | `false` |
| pulse | 脉冲动画（旋转 + 缩放） | `boolean` | `false` |
| bounce | 弹跳动画（垂直跳动） | `boolean` | `false` |
| shake | 抖动动画（水平抖动） | `boolean` | `false` |
| beat | 心跳动画（缩放跳动） | `boolean` | `false` |
| fade | 淡入淡出动画（透明度闪烁） | `boolean` | `false` |
