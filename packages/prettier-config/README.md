# @krudi/prettier-config

Reusable [Prettier](https://github.com/prettier/prettier) configuration to
enforce consistent formatting across projects.

## Quick start

1. Install the depedency: `pnpm add -D @krudi/prettier-config`

## Usage

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
