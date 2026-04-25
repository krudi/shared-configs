---
description: npm workspaces monorepo conventions for this workspace
globs: ["**/package.json", "**/*.ts"]
alwaysApply: false
---

# npm Monorepo Conventions

## Structure

```
packages/          # publishable packages
apps/              # internal apps (Storybook, docs, etc.)
package.json       # workspace root — defines workspaces
turbo.json         # Turbo pipeline config
```

## Package names

All packages use the `@krudi/` scope: `@krudi/eslint-config`, `@krudi/styles`, etc.

## Commands (run from workspace root)

```bash
npm run build        # build all packages (Turbo)
npm run dev          # watch mode for all packages
npm run lint         # lint all packages
npm run typecheck    # typecheck all packages
npm run clean        # clean dist/ and .turbo/
```

## Adding a new package

1. Create `packages/{name}/` with its own `package.json`
2. Set `"name": "@krudi/{name}"` in the package's `package.json`
3. Update `turbo.json` pipeline if the package has a build step

## Turbo caching

- Turbo caches based on inputs — do not put generated files in inputs
- `dist/` is always in `.gitignore` — always published from a fresh build
