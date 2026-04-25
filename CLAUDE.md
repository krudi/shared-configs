# Shared Configs

npm workspaces monorepo — `@krudi/eslint-config`, `@krudi/prettier-config`, `@krudi/typescript-config`, `@krudi/stylelint-config`. Breaking changes affect all consumers.

@AGENTS.md

## For Claude Code

### Slash commands

| Command | What it does |
|---------|---|
| `/test` | Build, lint, and typecheck all packages |

### Rules loaded automatically

| Rule file | Applied to |
|-----------|---|
| `.ai/rules/npm-monorepo.md` | `package.json`, `turbo.json`, `**/*.ts` |

### Constraints

- **High blast radius** — every change here affects `react-template`, `vue-template`, `impuls`, `krudi-io`, `ai-rag-frontend`, and `shared-styles`
- Before suggesting a rule change, ask: will this break existing consumer code?
- Keep all four packages on the same version — do not bump one independently
- ESLint uses flat config (`eslint.config.js`) — never suggest `.eslintrc` format
