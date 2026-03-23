# Repository Guidelines

## Project Structure & Module Organization
This repository is a `pnpm` workspace monorepo. Primary packages live in `packages/*`:
- `packages/components` contains Vue SFC components, local styles, and component tests.
- `packages/hooks`, `packages/utils`, `packages/locale`, `packages/theme`, and `packages/core` provide shared runtime pieces.
- `packages/docs` holds the VitePress documentation site and demo sources.
- `packages/play` is the local playground and Storybook entry point.

Shared tooling lives in `libs/*`, such as custom Vite plugins and preview helpers.

## Build, Test, and Development Commands
Use `pnpm` from the repository root.

- `pnpm dev` runs the playground for local component work.
- `pnpm story` starts Storybook from `packages/play`.
- `pnpm docs:dev` runs the docs site locally.
- `pnpm build` builds hooks first, then the published component package.
- `pnpm test` runs utility, hooks, and browser/component Vitest suites with coverage.
- `pnpm lint`, `pnpm format`, and `pnpm check` run Biome across `packages` and `libs`.

## Coding Style & Naming Conventions
Formatting is enforced by Biome: 2-space indentation, LF line endings, 100-column width, single quotes in TS/JS, semicolons, and trailing commas. Run `pnpm check:fix` before opening a PR.

Use Vue 3 Composition API patterns and keep component folders PascalCase, for example `packages/components/Button/Button.vue`. Export entry files stay flat and predictable: `index.ts`, `types.ts`, `constants.ts`, and `style.css`.

## Testing Guidelines
Vitest is the standard test runner, with browser coverage enabled for component suites. Keep tests next to the code:
- components: `Component.test.tsx`
- hooks: `__test__/useThing.test.tsx`
- utils: `__tests__/feature.test.tsx`

Prefer focused assertions for rendered behavior, emitted events, and public API contracts. Run package-specific tests with commands like `pnpm --filter @sakana-element/hooks test`.

## Commit & Pull Request Guidelines
Recent history follows Conventional Commits, for example `feat(components): ...` and `fix(hooks): ...`. Keep scopes aligned to the affected package and use `chore(release): ...` only for versioning work.

PRs should include a short description, linked issue when applicable, and screenshots or GIFs for visual component or docs changes. Note any coverage gaps, breaking changes, or follow-up work explicitly.

## Release & Configuration Notes
Versioning and publishing are managed through Lerna Lite. Use the root `changed`, `changed:patch|minor|major`, and `release` scripts only when preparing an actual release. Environment values are documented in `.env.example`.
