# 快速开始

本节将介绍如何在项目中使用 Sakana Element。

## 安装

使用包管理器安装：

::: code-group

```bash [npm]
npm install sakana-element
```

```bash [yarn]
yarn add sakana-element
```

```bash [pnpm]
pnpm add sakana-element
```

:::

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import { createApp } from 'vue'
import SakanaElement from 'sakana-element'
import 'sakana-element/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(SakanaElement)
app.mount('#app')
```

## 按需引入

你也可以按需引入需要的组件，这样可以减小打包体积。

```vue
<template>
  <px-button type="primary">像素按钮</px-button>
</template>

<script setup lang="ts">
import { PxButton } from 'sakana-element'
import 'sakana-element/dist/index.css'
</script>
```

## 主题模式

Sakana Element 支持深色和浅色两种主题模式。你可以使用 `useTheme` 组合式函数来切换主题。

```ts
import { useTheme } from 'sakana-element'

const { theme, toggleTheme, setTheme } = useTheme()

// 切换主题
toggleTheme()

// 设置为深色模式
setTheme('dark')

// 设置为浅色模式
setTheme('light')

// 跟随系统设置
setTheme('system')
```

## 开始使用

现在你可以开始使用 Sakana Element 组件了。

<div style="display: flex; gap: 12px; margin-top: 20px;">
  <px-button>默认按钮</px-button>
  <px-button type="primary">主要按钮</px-button>
  <px-button type="success">成功按钮</px-button>
  <px-button type="warning">警告按钮</px-button>
  <px-button type="danger">危险按钮</px-button>
</div>

## 特性

- 🎮 **像素风格设计** - 复古游戏美学，硬边边框和偏移阴影
- 🌓 **深色模式** - 支持深色/浅色主题切换
- 📦 **按需加载** - 支持 Tree Shaking
- 🔧 **TypeScript** - 完整的类型定义
- 📖 **双语文档** - 中英文文档支持
