# @krudi/shared-configs

A collection of reusable configuration packages for Prettier,
[ESLint](https://github.com/eslint/eslint) and
[TypeScript](https://github.com/microsoft/TypeScript). The goal is to enforce a
consistent coding style, linting, and compiler setup across multiple projects
([Node](https://github.com/nodejs/node),
[React](https://github.com/facebook/react/),
[Next.js](https://github.com/vercel/next.js),
[Expo](https://github.com/expo/expo), monorepos
([Turbo](https://github.com/vercel/turborepo))).

### Quick start

Install the dependencies -
`pnpm add -D @krudi/prettier-config @krudi/eslint-config @krudi/typescript-config`

### Packages

| Package                                                                            | Description                                                                |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [@krudi/prettier-config](https://www.npmjs.com/package/@krudi/prettier-config)     | Shared [Prettier](https://github.com/prettier/prettier) configuration      |
| [@krudi/eslint-config](https://www.npmjs.com/package/@krudi/eslint-config)         | Shared [ESLint](https://github.com/eslint/eslint) flat configuration       |
| [@krudi/typescript-config](https://www.npmjs.com/package/@krudi/typescript-config) | Shared [TypeScript](https://github.com/microsoft/TypeScript) configuration |

Each package can be installed individually depending on your needs.

#### Prettier

Create `prettier.config.mjs` (or `prettier.config.js`) in your project root and
extend the configuration you need:

```js
// ESM
import base from '@krudi/prettier-config/base';

/** @type {import("prettier").Options} */
export default {
    ...base,
};

// CommonJS
const base = require('@krudi/prettier-config/base');

/** @type {import('prettier').Options} */
module.exports = {
    ...base,
};
```

#### ESLint (flat config)

Create `eslint.config.mjs` (or `eslint.config.ts`) in your project root and
extend the configuration you need:

```js
import base from '@krudi/eslint-config/base';
import prettier from '@krudi/eslint-config/prettier';
import turbo from '@krudi/eslint-config/turbo';

export default [...base, ...prettier, ...turbo];
```

| File                          | Purpose                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| @krudi/eslint-config/base     | Base ESLint rules for general TypeScript/JavaScript projects                              |
| @krudi/eslint-config/nextjs   | Additional rules and plugins for [Next.js](https://github.com/vercel/next.js) projects    |
| @krudi/eslint-config/expo     | Extra configuration for [Expo](https://github.com/expo/expo) React Native projects        |
| @krudi/eslint-config/prettier | Ensures compatibility between ESLint and [Prettier](https://github.com/prettier/prettier) |
| @krudi/eslint-config/turbo    | Linting rules tailored for [Turborepo](https://github.com/vercel/turborepo) monorepos     |

#### TypeScript

Create `tsconfig.json` in your project root and extend the configuration you
need:

```yaml
{
    'extends': '@krudi/typescript-config/base.json',
    'compilerOptions': {},
    'exclude': ['node_modules', 'dist'],
}
```

| File                                     | Purpose                                                                      |
| ---------------------------------------- | ---------------------------------------------------------------------------- |
| @krudi/typescript-config/base.json       | Base configuration for general TypeScript projects                           |
| @krudi/typescript-config/nextjs.json     | Optimized settings for [Next.js](https://github.com/vercel/next.js) projects |
| @krudi/typescript-config/expo.json       | Preconfigured options for [Expo](https://github.com/expo/expo) apps          |
| @krudi/typescript-config/base.build.json | Stricter configuration for building **npm packages** and CI pipelines        |

### Development

This repo uses [pnpm](https://github.com/pnpm/pnpm) and
[Turbo](https://github.com/vercel/turborepo).

1. First clone this repository and navigate into your project directory
2. Install the dependencies: `pnpm install`
3. `pnpm run build` - to build all packages
4. `pnpm run dev` - run the [TypeScript](https://www.typescriptlang.org/) server
