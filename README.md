# Sakana Element

[![npm version](https://img.shields.io/npm/v/sakana-element.svg)](https://www.npmjs.com/package/sakana-element)
[![license](https://img.shields.io/npm/l/sakana-element.svg)](https://github.com/yu859/sakana-element/blob/master/LICENSE)

A Vue 3 + TypeScript component library with pixel art design aesthetic.

像素风格的 Vue 3 + TypeScript 组件库。

---

## Features / 特性

- 🎮 **Pixel Art Design** — Unique retro pixel aesthetic using CSS Houdini Paint Worklets / 独特的像素复古风格
- 🧩 **Vue 3 + TypeScript** — Full Composition API & type safety / 完整的组合式 API 和类型安全
- 🌙 **Dark Mode** — Built-in dark theme support / 内置暗色主题
- 🌐 **i18n** — Bilingual (EN/ZH) internationalization / 双语国际化支持
- 📦 **Tree-shakable** — ES module build with per-component chunks / ES 模块构建，支持按需引入

## Install / 安装

```bash
pnpm add sakana-element
# or
npm install sakana-element
```

## Quick Start / 快速开始

```ts
// main.ts
import { createApp } from 'vue'
import SakanaElement from 'sakana-element'
import 'sakana-element/dist/index.css'
import App from './App.vue'

createApp(App).use(SakanaElement).mount('#app')
```

## Components / 组件

| Component | Description / 描述 |
|-----------|-------------------|
| `PxButton` | Button / 按钮 |
| `PxInput` | Input / 输入框 |
| `PxSelect` | Select / 选择器 |
| `PxSwitch` | Switch / 开关 |
| `PxIcon` | Icon / 图标 (486 built-in pixelarticons) |
| `PxAlert` | Alert / 警告提示 |
| `PxCollapse` | Collapse / 折叠面板 |
| `PxDropdown` | Dropdown / 下拉菜单 |
| `PxForm` | Form / 表单 |
| `PxTooltip` | Tooltip / 文字提示 |
| `PxPopconfirm` | Popconfirm / 气泡确认框 |
| `PxMessage` | Message / 消息提示 |
| `PxMessageBox` | MessageBox / 消息弹框 |
| `PxNotification` | Notification / 通知 |
| `PxLoading` | Loading / 加载 |
| `PxOverlay` | Overlay / 遮罩层 |
| `PxConfigProvider` | ConfigProvider / 全局配置 |

## Icons / 图标

486 icons from [pixelarticons](https://pixelarticons.com/) are bundled out of the box — with support for flip, rotation, animations, and custom SVG registration.

内置 [pixelarticons](https://pixelarticons.com/) 的 486 个像素风格图标，开箱即用 — 支持翻转、旋转、动画及自定义 SVG 注册。

```vue
<px-icon icon="home" size="lg" type="primary" />
<px-icon icon="heart" color="#e91e63" beat />
```

## Bundled Font / 内置字体

This package includes the [zpix](https://github.com/SolidZORO/zpix-pixel-font) pixel font (~6.9MB `.ttf`), which provides the retro pixel art look. It loads automatically via CSS `@font-face` when you import `sakana-element/dist/index.css` — no extra setup required. The font accounts for most of the package size (~8MB total); actual library code + CSS is ~1MB.

本组件库内置了 [zpix 像素字体](https://github.com/SolidZORO/zpix-pixel-font)（~6.9MB `.ttf`），用于实现复古像素风格外观。导入 `sakana-element/dist/index.css` 后字体会通过 CSS `@font-face` 自动加载，无需额外配置。字体文件占包体积大部分（总计约 8MB），组件库本身的代码和样式仅约 1MB。

## Dark Mode / 暗色模式

Add the `px-dark` or `dark` class to an ancestor element:

在祖先元素上添加 `px-dark` 或 `dark` 类名：

```html
<html class="px-dark">
  <!-- All Sakana Element components will render in dark mode -->
</html>
```

## Development / 开发

### Prerequisites / 前置要求

- Node.js >= 18
- pnpm >= 8

### Setup / 设置

```bash
git clone https://github.com/yu859/sakana-element.git
cd sakana-element
pnpm install
```

### Dev Commands / 开发命令

```bash
pnpm dev          # Development playground / 开发环境
pnpm story        # Storybook / 组件预览
pnpm docs:dev     # Documentation site / 文档站点
```

### Test Commands / 测试命令

```bash
pnpm test         # All tests / 全部测试
pnpm test-comp    # Component tests / 组件测试
pnpm test-utils   # Utils tests / 工具测试
pnpm test-hooks   # Hooks tests / Hooks 测试
```

### Build / 构建

```bash
pnpm build        # Build library / 构建组件库
pnpm docs:build   # Build docs / 构建文档
```

## Monorepo Structure / 项目结构

```
packages/
├── core        — Main entry, published as `sakana-element`
├── components  — Component implementations
├── hooks       — Reusable composition functions
├── utils       — Shared utilities
├── theme       — CSS theme & Houdini Paint Worklets
├── locale      — i18n support
├── docs        — VitePress documentation
└── play        — Storybook playground
```

## License / 许可证

[ISC](./LICENSE)
