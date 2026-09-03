# Boilerplate on top of vite react-ts

- [pnpm](https://pnpm.io/) - package manager
- [ofetch](https://github.com/unjs/ofetch) - api wrapper
- [vitest](https://vitest.dev/) - testing
- nvmrc for node version

| axios is bloted and have global defaults which can be used in wrong way, its better to create new instance for different api

## Linting

[oxlint](https://oxc.rs/docs/guide/usage/linter) (`pnpm lint`), configured in `oxlint.config.ts`.
`pnpm lint` applies safe fixes; `pnpm lint:fix-dangerously` also applies fixes that can
change behavior (e.g. deleting an unused declaration), so review the diff after running it.

Native oxlint plugins: `typescript`, `react`, `import`, `vitest` (the vitest
`recommended` set, scoped to `*.spec.*` / `*.test.*` files).

Rules from these ESLint plugins are loaded through oxlint's `jsPlugins`:

- [eslint-plugin-react-you-might-not-need-an-effect](https://github.com/NickvanDyke/eslint-plugin-react-you-might-not-need-an-effect)
- [eslint-plugin-depend](https://github.com/es-tooling/eslint-plugin-depend)
- [@tanstack/eslint-plugin-query](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query)

## Future suggestion

- [react-query](https://tanstack.com/query/latest/docs/framework/react/overview) - data fetching
- [zustand](https://github.com/pmndrs/zustand) - state managment
- [mantine](https://github.com/mantinedev/mantine) - component library

## References

[Why I Won’t Use JSDOM | Epic Web Dev](https://www.epicweb.dev/why-i-won-t-use-jsdom)

============================

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the lint configuration

For type-aware rules, install [`oxlint-tsgolint`](https://oxc.rs/docs/guide/usage/linter/type-aware) and run `oxlint --type-aware`.
Additional rule categories (`suspicious`, `pedantic`, `perf`, `style`) can be enabled via `categories` in `oxlint.config.ts`.
