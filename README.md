# typescript-config

Shared [TypeScript](https://www.typescriptlang.org/) configuration for projects to provide consistent compiler settings.

## Quick start

1. First clone this repository and navigate into your project directory
2. Install the depedency: `pnpm add -D @krudi/typescript-config`

## Usage

Create an `tsconfig.json` in your project root and extend the configuration you need:

```json
{
    "extends": "@krudi/typescript-config/base.json", // Alternativen: nextjs.json, expo.json or base.build.json
    "compilerOptions": {},
    "exclude": ["node_modules", "dist"]
}
```
