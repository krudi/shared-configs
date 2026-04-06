# @krudi/stylelint-config

Shared Stylelint config used across projects. It extends
[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and
[stylelint-order](https://github.com/hudochenkov/stylelint-order), adds a handful of sensible rules, and ignores
compiled/vendor assets.

## Install

```sh
npm install -D @krudi/stylelint-config
```

## Usage

`stylelint.config.ts`:

```ts
import type { Config } from 'stylelint';

export default {
    extends: ['@krudi/stylelint-config'],
} satisfies Config;
```
