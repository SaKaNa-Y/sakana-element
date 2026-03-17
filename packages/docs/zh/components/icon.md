---
title: Icon 图标 | Sakana Element 像素组件库
description: Sakana Element 内置 486 个像素风格图标，基于 pixelarticons，支持尺寸、颜色、翻转、旋转和动画效果。
---

<script setup>
import { iconApi } from '../../apis/icon'
</script>

# Icon 图标

Sakana Element 内置了 [pixelarticons](https://pixelarticons.com/) 的全部 486 个图标——一个基于 24×24 网格的像素风格图标库。所有图标开箱即用，无需额外安装。

<ApiTable :sections="iconApi" lang="zh" />

## 基础用法

使用 `icon` 属性指定图标名称。图标名称遵循 pixelarticons 的命名规范，同时支持常用别名——例如 `spinner` 会解析为 `loader`，`x` 会解析为 `close`。

::: preview
demo-preview=../../demo/icon/Basic.vue
:::

## 不同尺寸

使用 `size` 属性设置图标大小。所有尺寸均为 24px 网格的倍数，以确保像素渲染清晰：

| 尺寸 | 像素 | 说明 |
|------|------|------|
| `xs` | 12px | 超小 |
| `sm` | 18px | 小 |
| `md` | 24px | 默认 |
| `lg` | 36px | 大 |
| `xl` | 48px | 超大 |
| `2xl` | 72px | 2 倍超大 |
| `1x` / `2x` / `3x` | 24 / 48 / 72px | FontAwesome 兼容别名 |

::: preview
demo-preview=../../demo/icon/Size.vue
:::

## 图标颜色

使用 `type` 属性设置语义颜色（`primary`、`success`、`warning`、`danger`、`info`），或使用 `color` 属性设置任意自定义颜色。同时设置时，`color` 会覆盖 `type`。

::: preview
demo-preview=../../demo/icon/Color.vue
:::

## 翻转与旋转

使用 `flip` 属性镜像翻转图标（`horizontal`、`vertical` 或 `both`）。使用 `rotation` 属性旋转 `90`、`180` 或 `270` 度。两者可以组合使用。

::: preview
demo-preview=../../demo/icon/Flip.vue
:::

## 图标动画

所有动画使用 CSS `steps()` 实现逐帧效果，契合像素风格的美学：

| 动画 | 效果 | 帧数 |
|------|------|------|
| `spin` | 360° 旋转 | 8 步 |
| `pulse` | 旋转 + 缩放 | 8 步 |
| `bounce` | 垂直弹跳 | 5 步 |
| `shake` | 水平抖动 | 4 步 |
| `beat` | 缩放跳动 | 3 步 |
| `fade` | 透明度闪烁 | 4 步 |

::: preview
demo-preview=../../demo/icon/Animation.vue
:::

## 图标集合

浏览和搜索所有 486 个内置图标。点击任意图标即可复制其名称。

::: preview
demo-preview=../../demo/icon/Collection.vue
:::

## 自定义图标

注册自定义 SVG 图标，与内置图标一起使用。

### 单个注册

```ts
import { registerPixelIcon } from 'sakana-element';

registerPixelIcon('my-icon', '<svg viewBox="0 0 24 24">...</svg>');
```

```vue
<px-icon icon="my-icon" />
```

### 批量注册

```ts
import { registerPixelIcons } from 'sakana-element';

registerPixelIcons({
  'my-icon-a': '<svg viewBox="0 0 24 24">...</svg>',
  'my-icon-b': '<svg viewBox="0 0 24 24">...</svg>',
});
```

### 注册 API

| 函数 | 说明 |
|---|---|
| `registerPixelIcon(name, svg)` | 注册单个自定义图标 |
| `registerPixelIcons(icons)` | 批量注册多个图标 |
| `hasPixelIcon(name)` | 检查图标名称是否已注册 |
| `getRegisteredIconNames()` | 获取所有已注册图标名称的数组 |
| `getPixelIcon(name)` | 获取已注册图标的 SVG 字符串 |
| `resolveIconName(name)` | 将图标名称别名解析为 pixelarticons 名称 |
| `getIconNameMap()` | 获取完整的图标名称别名映射 |

::: tip
SVG 内容在注册时会自动进行安全过滤——`<script>` 等危险元素和事件处理属性会被移除，以防止 XSS 攻击。
:::
