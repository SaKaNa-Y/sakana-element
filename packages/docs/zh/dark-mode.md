---
title: 深色模式 | Sakana Element 像素组件库
description: 了解 Sakana Element 像素组件库的深色模式支持，采用 Catppuccin 配色方案，支持自动检测系统偏好。
---

<script setup>
import { darkModeApi } from '../api/dark-mode'
</script>

# 深色模式

Sakana Element 内置了完整的深色模式支持，采用 [Catppuccin Mocha](https://catppuccin.com/) 风格的配色方案。主题系统提供三种模式 —— `light`、`dark` 和 `system` —— 并自动将选择保存到 localStorage，同时支持检测系统偏好。

<ApiTable :sections="darkModeApi" lang="zh" />

## 基本用法

使用 `useTheme` 组合式函数来切换主题。主题状态在所有组件之间共享，并持久化到 localStorage。

::: preview
demo-preview=../demo/dark-mode/Basic.vue
:::

## 主题模式

`setTheme` 函数接受三个值：

| 模式 | 说明 |
| --- | --- |
| `'light'` | 强制浅色模式，不跟随系统设置 |
| `'dark'` | 强制深色模式，不跟随系统设置 |
| `'system'` | 自动跟随用户操作系统的配色方案 |

```ts
import { useTheme } from 'sakana-element'

const { setTheme, toggleTheme, isDark, theme } = useTheme()

// 设置指定模式
setTheme('dark')

// 在浅色 ↔ 深色之间切换（不涉及 system）
toggleTheme()

// 读取当前状态
console.log(theme.value)  // 'light' | 'dark' | 'system'
console.log(isDark.value)  // true | false
```

::: tip 持久化
调用 `setTheme()` 时，选择的模式会保存到 `localStorage` 的 `px-theme` 键下。页面刷新后主题会自动恢复。
:::

## 系统偏好检测

`useSystemTheme` 组合式函数提供对用户操作系统配色方案的只读访问。当系统偏好发生变化时，它会响应式地更新。

```vue
<script setup lang="ts">
import { useSystemTheme } from 'sakana-element'

const { prefersDark } = useSystemTheme()
</script>

<template>
  <p>系统偏好深色模式：{{ prefersDark }}</p>
</template>
```

::: info 什么时候用哪个？
使用 **`useTheme`** 来控制主题（切换、持久化、应用 CSS 类）。使用 **`useSystemTheme`** 仅需要读取系统偏好而不改变任何东西时 —— 例如，显示"您的系统处于深色模式"的提示。
:::

## 工作原理

当深色模式激活时，Sakana Element 会在 `<html>` 元素上添加 `px-dark` 类。所有组件样式都引用 CSS 自定义属性（变量），这些变量在 `.px-dark` 下重新定义：

```
:root            →  浅色模式变量（默认）
.px-dark, .dark  →  深色模式变量覆盖
```

这意味着主题切换是纯 CSS 实现的 —— 不需要组件重新渲染。

## 自定义颜色

你可以覆盖任意一个 CSS 变量来定制主题。在你的应用全局 CSS 中定义覆盖即可：

::: preview
demo-preview=../demo/dark-mode/CustomVars.vue
:::

### 可用变量分类

| 分类 | 示例变量 | 说明 |
| --- | --- | --- |
| 主色 | `--px-color-primary`、`--px-color-primary-dark` | 品牌强调色 |
| 成功色 | `--px-color-success`、`--px-color-success-dark` | 成功状态颜色 |
| 警告色 | `--px-color-warning`、`--px-color-warning-dark` | 警告状态颜色 |
| 危险色 | `--px-color-danger`、`--px-color-danger-dark` | 错误/危险状态颜色 |
| 信息色 | `--px-color-info`、`--px-color-info-dark` | 信息状态颜色 |
| 背景色 | `--px-bg-color`、`--px-bg-color-page`、`--px-bg-color-overlay` | 页面和容器背景色 |
| 文字色 | `--px-text-color-primary`、`--px-text-color-regular` 等 | 排版颜色 |
| 边框色 | `--px-border-color`、`--px-border-color-light` 等 | 边框和分隔线颜色 |
| 填充色 | `--px-fill-color`、`--px-fill-color-light` 等 | 填充和背景强调色 |

::: tip
每个语义颜色（primary、success 等）都有 `-dark` 深色变体和 `-light-3` 到 `-light-9` 的浅色变体。覆盖这些变体可以在 hover、disabled 和 focus 状态下保持一致的外观。
:::
