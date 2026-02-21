# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sakana-Element is a Vue 3 + TypeScript component library with a pixel art design aesthetic. It's a monorepo managed by pnpm workspaces and Lerna, providing a comprehensive UI component library with extensive bilingual documentation.

## Monorepo Structure

The repository uses pnpm workspaces with the following key packages:

- `packages/core` - Main package entry point (published as `sakana-element`)
- `packages/components` - Individual component implementations
- `packages/hooks` - Reusable Vue composition functions (private, not published)
- `packages/utils` - Shared utility functions (private)
- `packages/theme` - CSS theme files and Houdini Paint Worklets (private)
- `packages/locale` - Internationalization support (private)
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

All tests use Vitest with jsdom environment. Component tests require hooks to be built first.

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

### Button Variants

`PxButton` supports the following boolean style props: `plain`, `round`, `circle`, `dash`, `ghost`, `link`, `block`, `responsive`. These can be combined with `type` (primary, success, warning, danger, info) and `color` for custom colors.

### Input Variants

`PxInput` supports `color` (preset theme name or hex string) and `ghost` (boolean) props. Preset colors (primary, success, warning, danger, info) use CSS `@each` classes; custom hex colors use inline CSS variables via `createColorPalette()` + `resolveColorVars()`. The `type` prop accepts all native HTML input types (text, password, textarea, date, time, url, etc.).

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

### PostCSS Configuration

Styles use PostCSS with:
- `postcss-nested` - Nesting support
- `postcss-each-variables` - Variable loops
- `postcss-each` - Loop syntax
- `postcss-for` - For loops
- `postcss-color-mix` - Color mixing functions

## Testing

Tests use Vitest with Vue Test Utils in jsdom environment.

Setup (`vitest.setup.ts`):
- Registers default pixel icons globally before tests

Global test config (`vitest.config.ts`):
- Globals enabled
- Environment: jsdom
- Excludes: node_modules, dist, coverage

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

Build-specific config (`tsconfig.build.json`) is used for type generation during builds.

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
