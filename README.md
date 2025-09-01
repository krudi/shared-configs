# typescript-config

Shared [TypeScript](https://www.typescriptlang.org/) configuration for projects to provide consistent compiler settings.

## Quick start

1. First clone this repository and navigate into your project directory
2. Install the depedency: `pnpm add -D @krudi/typescript-config`

## Usage

Create an `eslint.config.ts` (or `eslint.config.js`) in your project root and extend the configuration you need:

```ts
/**
 * Example: combine multiple configs in one file
 * Base + Prettier + Turborepo + (optionally Expo or Next.js)
 */
import eslintConfig from "@krudi/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
    eslintConfig.base,
    eslintConfig.typescript,
    eslintConfig.prettier,
    eslintConfig.turbo,
    eslintConfig.nextjs, // for React Native projects
    eslintConfig.expo, // for Next.js projects
]);
```
