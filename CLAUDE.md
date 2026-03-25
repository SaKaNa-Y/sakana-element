# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sakana-Element is a Vue 3 + TypeScript component library with a pixel art design aesthetic. It's a monorepo managed by pnpm workspaces and Lerna, providing a comprehensive UI component library with extensive bilingual documentation.

## Prerequisites

- Node.js >= 18
- pnpm >= 8

## Monorepo Structure

The repository uses pnpm workspaces with the following key packages:

- `packages/core` - Main package entry point (published as `sakana-element`)
- `packages/components` - Individual component implementations
- `packages/hooks` - Reusable Vue composition functions (private, not published)
- `packages/utils` - Shared utility functions (private)
- `packages/theme` - CSS theme files and Houdini Paint Worklets (private)
- `packages/locale` - Internationalization support for 5 locales: EN, ZH-CN, ZH-TW, JA, KO (private)
- `packages/docs` - VitePress documentation site (private)
- `packages/play` - Development playground with Storybook (private)
- `libs/vite-plugins` - Custom Vite plugins for build process
- `libs/vitepress-preview-component` - Custom VitePress component preview

## Common Commands

### Development
```bash
pnpm dev              # Run development playground
pnpm story            # Run Storybook for component development
pnpm docs:dev         # Run documentation site locally
pnpm build:dev        # Build in watch mode for development
```

### Testing
```bash
pnpm test             # Run all tests (utils + hooks + components)
pnpm test-comp        # Run component tests only
pnpm test-utils       # Run utils tests only
pnpm test-hooks       # Run hooks tests only
```

All tests use Vitest. Utils/hooks tests run in jsdom (`vitest.config.ts`); component tests run in Playwright Chromium browser (`vitest.browser.config.ts`). Component tests require hooks to be built first.

Running a single test file or package:
```bash
pnpm vitest run packages/components/Button/Button.test.tsx    # Single component test file
pnpm --filter @sakana-element/hooks test                       # Single package tests
```

### Linting & Formatting
```bash
pnpm lint             # Check with Biome
pnpm lint:fix         # Auto-fix lint issues
pnpm format           # Format with Biome
pnpm check            # Lint + format check
pnpm check:fix        # Lint + format auto-fix
```

Uses [Biome](https://biomejs.dev/) (not ESLint/Prettier). Config in `biome.json`: 2-space indentation, LF line endings, 100 char line width, single quotes for JS, double quotes for JSX, semicolons always, trailing commas. Husky pre-commit hook runs `lint-staged` which applies Biome to staged files. Component folders use PascalCase (e.g., `packages/components/Button/`).

### Building
```bash
pnpm build            # Build hooks and components for production
pnpm build-comp       # Build components package only
pnpm build-hooks      # Build hooks package only
pnpm docs:build       # Build documentation site
```

The core package builds both ES modules and UMD bundles using separate Vite configs:
- `packages/core/build/vite.es.config.ts` - ES module build with manual chunking
- `packages/core/build/vite.umd.config.ts` - UMD bundle build

### Publishing
```bash
pnpm changed          # Version bump with conventional commits and GitHub release
pnpm changed:patch    # Patch version bump
pnpm changed:major    # Major version bump
pnpm release          # Publish packages to npm via Lerna
```

Uses @lerna-lite with conventional commits for versioning and changelog generation.

**Important publishing notes:**
- npm requires 2FA or a granular access token to publish. `pnpm release` (Lerna) cannot handle interactive OTP prompts, so use `cd packages/core && npm publish` as a fallback.
- Only `sakana-element` (packages/core) is published to npm. All other packages are private.
- The `pnpm changed:*` scripts use `dotenv-cli` to load `GH_TOKEN` from `.env` for GitHub releases.
- After `pnpm changed:*` runs, Lerna may leave `gitHead` fields and resolved `workspace:*` references in package.json files — revert these after publishing.

## Component Architecture

### Component Structure

Each component follows this structure:
```
packages/components/[ComponentName]/
├── [ComponentName].vue      # Main component
├── [ComponentName].test.tsx # Component tests
├── types.ts                 # TypeScript interfaces
├── constants.ts             # Component constants
├── hooks.ts                 # Component-specific hooks (optional)
├── style.css                # Component styles
└── index.ts                 # Export with install function
```

### Component Registration

Components use the `withInstall` utility from `@sakana-element/utils` to enable both global and per-component installation:

```typescript
import Component from './Component.vue';
import { withInstall } from '@sakana-element/utils';

export const PxComponent = withInstall(Component);
```

All components are prefixed with `Px` (e.g., `PxButton`, `PxInput`, `PxIcon`).

### Color Pattern (shared across Button, Input, Select)

Components that accept a `color` prop follow a shared pattern: preset theme names (primary, success, warning, danger, info) use CSS `@each`-generated classes, while custom hex strings use inline CSS variables via `createColorPalette()` + `resolveColorVars()` from `@sakana-element/utils`. Class naming convention: `is-{flag}` for boolean state flags, `px-{component}--{variant}` for variant classes.

### Component Exports

- `packages/components/index.ts` exports all components
- `packages/core/index.ts` is the main entry point that:
  - Registers default pixel icons via `registerDefaultPixelIcons()`
  - Registers CSS Houdini Paint Worklets for pixel-style borders/shadows
  - Creates a global installer via `makeInstaller`
  - Re-exports all components and locale
  - Imports theme CSS (`@sakana-element/theme/index.css`)

### Icon System

The project uses a custom SVG-based pixel icon system (not FontAwesome):
- Icons defined in `packages/components/Icon/icons/`
- Registered via `registerPixelIcons()` from `@sakana-element/utils`
- Used through the `PxIcon` component

## Dark Mode

Dark mode activates via `px-dark` or `dark` class on an ancestor element (e.g., `<html class="px-dark">`). Uses Catppuccin color palette. System preference auto-detection available via `useTheme()` / `useSystemTheme()` hooks.

## CSS Houdini Paint Worklets

Components use CSS Paint API worklets for pixel-style rendering, registered automatically at library install. Key CSS custom properties:
- `pixel-border` worklet: `--px-border-color`, `--px-border-width`, `--px-border-pixel-size`
- `pixel-shadow` worklet: `--px-shadow-color`, `--px-shadow-offset`, `--px-border-pixel-size`

## Build System

### ES Module Build

The ES build (`vite.es.config.ts`) uses manual chunking to split:
- `vendor` - All node_modules dependencies
- `hooks` - All hooks package code
- `utils` - Utility functions
- Individual component chunks - Each component gets its own chunk

CSS handling:
- Main stylesheet renamed to `index.css`
- Component-specific styles go to `theme/[name].css`
- Theme styles are moved to `dist/theme` after build

Build cleanup is handled by a custom Vite plugin (`libs/vite-plugins/hooksPlugin.ts`) using `shelljs` — no separate `rimraf` or `clean` step needed.

### External Dependencies

The following are marked as external in the ES build (peer dependencies):
- `vue`
- `@popperjs/core`
- `async-validator`

### Font Extraction

The ES build uses a custom `extractBase64FontsPlugin()` that extracts the Zpix pixel font (~6.9MB woff2) from base64-encoded CSS data URLs into separate font files. This prevents stack overflows in downstream Vite consumers that would otherwise process the massive inline font.

### PostCSS Configuration

Styles use PostCSS (`postcss.config.cjs`) with:
- `postcss-nested` - Nesting support
- `postcss-each-variables` - Variable loops
- `postcss-each` - Loop syntax (with `postcss-for` and `postcss-color-mix` as `beforeEach` plugins)
- `postcss-for` - For loops
- `postcss-color-mix` - Color mixing functions

## Testing

Two separate Vitest configurations:

- `vitest.config.ts` — jsdom environment for utils and hooks tests
- `vitest.browser.config.ts` — Playwright Chromium browser for component tests

Setup files:
- `vitest.setup.ts` — Registers pixel icons, suppresses specific Vue warnings
- `vitest.browser.setup.ts` — Same as above, plus disables CSS transitions/animations for deterministic component tests

Both configs have globals enabled and exclude node_modules, dist, coverage.

When testing components that use hooks, build the hooks package first:
```bash
cross-env NODE_ENV=test pnpm --filter @sakana-element/hooks build
```

## TypeScript Configuration

- Base config: `@vue/tsconfig/tsconfig.dom.json`
- Target: ES2020
- Module resolution: bundler
- JSX: preserve with Vue as import source
- Strict mode enabled
- Includes all `.ts`, `.tsx`, `.vue` files in `packages/`
- `env.d.ts` provides Vite client types (`import.meta.env`) and CSS Houdini Paint API types

Three tsconfig files: `tsconfig.json` (main), `tsconfig.build.json` (type generation during builds), `tsconfig.node.json` (Node.js tooling files).

## Git Hooks

Husky manages Git hooks:
- **pre-commit**: Runs `pnpm exec lint-staged` which applies Biome check/format to staged files

## Commit Convention

Uses conventional commits with custom changelog sections:
- `feat:` - ✨ Features | 新功能
- `fix:` - 🐛 Bug Fixes | Bug 修复
- `perf:` - 🚀 Performance Improvements | 优化
- Other types (chore, docs, style, refactor, test) are hidden from changelog

## Development Workflow

1. **Adding a new component:**
   - Create component directory in `packages/components/`
   - Follow the standard component structure
   - Add component export to `packages/components/index.ts`
   - Write tests in `[ComponentName].test.tsx`
   - Add styles in `style.css`
   - Test in playground: `pnpm dev`

2. **Adding a new hook:**
   - Create hook file in `packages/hooks/`
   - Export from `packages/hooks/index.ts`
   - Add tests in `packages/hooks/__test__/`
   - Build hooks: `pnpm build-hooks`

3. **Testing changes:**
   - Run relevant test suite
   - Build hooks first if testing components that use them
   - Use Storybook for visual testing: `pnpm story`

4. **Documentation:**
   - Add component docs in `packages/docs/`
   - Bilingual: add both `en/` and `zh/` versions
   - Run docs locally: `pnpm docs:dev`
   - Build docs: `pnpm docs:build`
