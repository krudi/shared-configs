# typescript-config

Shared [TypeScript](https://github.com/microsoft/TypeScript) configuration for projects to provide consistent compiler
settings.

## Quick start

1. Install the depedency: `npm install --save-dev @krudi/typescript-config`

## Usage

Create `tsconfig.json` in your project root:

```yaml
{ 'extends': '@krudi/typescript-config/base.json', 'compilerOptions': {}, 'exclude': ['node_modules', 'dist'] }
```

| File                                           | Purpose                                                                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| @krudi/typescript-config/base.json             | Base configuration for general TypeScript projects                                            |
| @krudi/typescript-config/nextjs.json           | Optimized settings for [Next.js](https://github.com/vercel/next.js) projects                  |
| @krudi/typescript-config/expo.json             | Preconfigured options for [Expo](https://github.com/expo/expo) apps                           |
| @krudi/typescript-config/external-package.json | Strict, safe config for **public npm packages** (external consumption, includes declarations) |
| @krudi/typescript-config/internal-package.json | Config for **internal monorepo-only packages**, optimized for development speed               |
