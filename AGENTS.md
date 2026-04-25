# Shared Configs

npm workspaces monorepo providing standardized ESLint, Prettier, TypeScript, and Stylelint configs for all `@krudi/*` projects. **Changes here propagate to every consuming project.**

## Stack

- npm workspaces, Turbo
- Packages: `@krudi/eslint-config`, `@krudi/prettier-config`, `@krudi/typescript-config`, `@krudi/stylelint-config`

---

## Onboarding

**Prerequisites:** Node.js ≥ 20.

1. `npm install` — install all workspace dependencies
2. `npm run build` — verify all packages build cleanly
3. `npm run lint` — verify linting passes
4. Verify: import a config in a test file and confirm it resolves correctly

---

## Commands

```bash
npm run build        # build all packages (Turbo)
npm run dev          # watch mode (incremental rebuild)
npm run lint         # lint all packages
npm run typecheck    # typecheck all packages
npm run clean        # clean dist/ and .turbo/
```

---

## Project structure

```
packages/
  eslint-config/      # @krudi/eslint-config — flat config format
  prettier-config/    # @krudi/prettier-config
  typescript-config/  # @krudi/typescript-config — base tsconfig.json
  stylelint-config/   # @krudi/stylelint-config
turbo.json            # build pipeline
package.json          # workspace root
```

---

## Architecture

All packages export plain config objects or JSON files consumed via `extends` or `import` in consumer projects.

**Consumers:** `react-template`, `vue-template`, `impuls`, `krudi-io`, `ai-rag-frontend`, `shared-styles`

**Config formats:**
- ESLint: flat config (`eslint.config.js`) — no `.eslintrc`
- TypeScript: `tsconfig.json` with `extends` chains
- Prettier: exported as an object from `prettier.config.js`
- Stylelint: exported as an object

---

## Testing

- Build test: `npm run build` — catches syntax errors and TypeScript issues
- Consumer test: install the local package in `impuls` or `ai-rag-frontend` and verify linting still passes
- **Required before publishing:** run `npm run build && npm run lint && npm run typecheck` — all must pass

---

## Release & publishing

1. Make changes to the relevant package
2. Bump the version in that package's `package.json` — keep all packages in sync (same version across all four)
3. Run `npm run build` to verify
4. Test against at least one consumer project (see Testing above)
5. Publish: `npm publish --workspaces` from the workspace root

**Version policy:** bump all four packages together even if only one changed — consumers install them as a set.

---

## Cross-project context

- **Consumed by:** `react-template`, `vue-template`, `impuls`, `krudi-io`, `ai-rag-frontend`, `shared-styles`
- A breaking change (rule rename, tsconfig option change) will **fail CI in all consumers simultaneously**
- Always test a breaking change in at least `impuls` (most complex consumer) before publishing

---

## Notes

- **Breaking changes propagate everywhere** — test against at least one consumer project before publishing
- Version bump all packages together to keep consumers in sync
- Flat ESLint config format (`eslint.config.js`) — no `.eslintrc`

---

## Rules

@.ai/rules/npm-monorepo.md
