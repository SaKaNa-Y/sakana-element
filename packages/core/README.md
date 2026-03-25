# Sakana Element

[![npm version](https://img.shields.io/npm/v/sakana-element.svg)](https://www.npmjs.com/package/sakana-element)
[![npm downloads](https://img.shields.io/npm/dm/sakana-element.svg)](https://www.npmjs.com/package/sakana-element)
[![license](https://img.shields.io/npm/l/sakana-element.svg)](https://github.com/SaKaNa-Y/sakana-element/blob/master/LICENSE)

A Vue 3 + TypeScript component library with pixel art design aesthetic.

像素风格的 Vue 3 + TypeScript 组件库。

**[Documentation / 文档](https://sakana-element-docs.vercel.app)** | **[GitHub](https://github.com/SaKaNa-Y/sakana-element)**

---

## Features / 特性

- 🎨 **CSS Houdini Pixel Rendering** — pixel-border & pixel-shadow Paint Worklets / CSS Houdini 像素边框和阴影
- 🧩 **40 Components** — Pixel-art styled UI toolkit / 40 个像素风格组件
- ⭐ **486 Pixel Icons** — Full pixelarticons set with animations / 内置 486 个像素图标
- 🌙 **Catppuccin Dark Mode** — System-preference auto-detection / Catppuccin 暗色模式
- 🔧 **TypeScript** — Full type definitions with IntelliSense / 完整类型定义
- 📦 **Tree-Shakable** — Per-component ES module chunks / 按组件分包
- 🌐 **5 Locales** — EN, ZH-CN, ZH-TW, JA, KO / 五种语言

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

### Basic / 基础

| Component | Description / 描述 |
|-----------|-------------------|
| `PxButton` | Button with 8+ style variants / 按钮（8+ 种风格变体） |
| `PxIcon` | 486 built-in pixel icons / 486 个内置像素图标 |

### Form / 表单

| Component | Description / 描述 |
|-----------|-------------------|
| `PxInput` | Text, password, textarea, date, and more / 输入框（多种类型） |
| `PxCheckbox` | Multi-select with pixel-art checkmarks / 多选框（像素风格） |
| `PxRadio` | Single-select from a group of choices / 单选框 |
| `PxFilter` | Chip-based multi-select filter / 标签过滤器 |
| `PxSwitch` | Toggle switch with 3D bevel effect / 开关（3D 斜面效果） |
| `PxSelect` | Dropdown select with filtering / 选择器（支持搜索过滤） |
| `PxFileInput` | File upload input / 文件输入 |
| `PxForm` | Form layout with validation / 表单（支持验证） |
| `PxValidator` | Standalone validation with zod integration / 独立验证器（集成 zod） |

### Data Display / 数据展示

| Component | Description / 描述 |
|-----------|-------------------|
| `PxBadge` | Status badge / 徽章 |
| `PxChatBubble` | Chat message speech bubbles / 聊天气泡 |
| `PxIndicator` | Corner indicator for status or count / 指示器 |
| `PxAvatar` | User avatar / 头像 |
| `PxCard` | Card with staircase corners / 卡片（阶梯角） |
| `PxCarousel` | Slide carousel with pixel-art arrows / 走马灯 |
| `PxProgress` | Progress bar with pixel chunks / 进度条（像素分块） |
| `PxTable` | Data table / 数据表格 |
| `PxCollapse` | Accordion collapse / 折叠面板 |
| `PxCollapsible` | Single-toggle collapsible block / 折叠块 |
| `PxPixelate` | Image pixelation effect / 图片像素化 |
| `PxDiff` | Side-by-side comparison with draggable divider / 对比 |
| `PxKbd` | Keyboard key with 3D bevel styling / 键盘按键 |

### Layout / 布局

| Component | Description / 描述 |
|-----------|-------------------|
| `PxDivider` | Horizontal or vertical content separator / 分割线 |
| `PxDrawer` | Slide-in panel from any screen edge / 抽屉 |
| `PxResizable` | Resizable panels with draggable dividers / 可调面板 |

### Navigation / 导航

| Component | Description / 描述 |
|-----------|-------------------|
| `PxLink` | Hyperlink / 链接 |
| `PxBreadcrumb` | Breadcrumb trail / 面包屑 |
| `PxCommand` | Searchable command palette with keyboard navigation / 命令面板 |

### Feedback / 反馈

| Component | Description / 描述 |
|-----------|-------------------|
| `PxAlert` | Alert message / 警告提示 |
| `PxTooltip` | Tooltip popup / 文字提示 |
| `PxMessage` | Toast message / 消息提示 |
| `PxNotification` | Notification panel / 通知 |
| `PxPopconfirm` | Popover confirm / 气泡确认框 |
| `PxMessageBox` | Modal dialog / 消息弹框 |
| `PxLoading` | Loading overlay / 加载 |
| `PxDropdown` | Dropdown menu / 下拉菜单 |
| `PxSkeleton` | Animated skeleton placeholder / 骨架屏 |

### Config / 配置

| Component | Description / 描述 |
|-----------|-------------------|
| `PxConfigProvider` | Global config provider / 全局配置 |

## Composition Hooks / 组合式函数

| Hook | Description / 描述 |
|------|-------------------|
| `useTheme` | Reactive theme state (light / dark / system) / 响应式主题状态 |
| `useSystemTheme` | Detect OS color scheme preference / 检测系统配色偏好 |
| `useClickOutside` | Detect clicks outside an element / 检测元素外部点击 |
| `useDraggable` | Make an element draggable / 使元素可拖拽 |
| `useFocusTrap` | Trap focus within a container / 焦点陷阱 |
| `useLocale` | Access current i18n locale and translations / 国际化语言 |

```ts
import { useTheme } from 'sakana-element'

const { theme, toggleTheme, setTheme } = useTheme()

toggleTheme()        // Toggle between dark and light
setTheme('dark')     // Force dark mode
setTheme('system')   // Follow system preference
```

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

## Links / 链接

- [Documentation / 文档](https://sakana-element-docs.vercel.app)
- [GitHub](https://github.com/SaKaNa-Y/sakana-element)
- [npm](https://www.npmjs.com/package/sakana-element)
- [Changelog](https://github.com/SaKaNa-Y/sakana-element/blob/master/CHANGELOG.md)

## License / 许可证

[ISC](https://github.com/SaKaNa-Y/sakana-element/blob/master/LICENSE)
