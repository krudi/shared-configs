# @krudi/prettier-config

Reusable [Prettier](https://github.com/prettier/prettier) configuration to enforce consistent formatting across
projects.

## Quick start

1. Install the depedency: `npm install --save-dev @krudi/prettier-config`

## Usage

Create `prettier.config.ts` in your project root and extend the configuration you need:

```ts
import base from '@krudi/prettier-config/base';
import type { Options } from 'prettier';

const config: Options = {
    ...base,
};

export default config;
```
