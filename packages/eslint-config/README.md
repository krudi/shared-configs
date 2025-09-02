# @krudi/eslint-config

Reusable [ESLint](https://github.com/eslint/eslint) configuration to enforce
consistent code style and standards across projects.

## Quick start

1. Install the depedency: `pnpm add -D @krudi/eslint-config`

## Usage

Create `eslint.config.mjs` (or `eslint.config.ts`) in your project root and
extend the configuration you need:

```js
import eslintConfig from '@krudi/eslint-config';

export default [eslintConfig.base, eslintConfig.prettier, eslintConfig.turbo];
```

| File                          | Purpose                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| @krudi/eslint-config/base     | Base ESLint rules for general TypeScript/JavaScript projects                              |
| @krudi/eslint-config/nextjs   | Additional rules and plugins for [Next.js](https://github.com/vercel/next.js) projects    |
| @krudi/eslint-config/expo     | Extra configuration for [Expo](https://github.com/expo/expo) React Native projects        |
| @krudi/eslint-config/prettier | Ensures compatibility between ESLint and [Prettier](https://github.com/prettier/prettier) |
| @krudi/eslint-config/turbo    | Linting rules tailored for [Turborepo](https://github.com/vercel/turborepo) monorepos     |
