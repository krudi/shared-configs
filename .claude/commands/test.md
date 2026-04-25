Run the full quality check for shared-configs:

1. `npm run build` — build all packages (Turbo)
2. `npm run lint` — lint all packages
3. `npm run typecheck` — typecheck all packages
4. Report all failures with package name and file:line references
5. If all pass, confirm with a one-line summary

Note: this monorepo has high blast radius — all failures here affect downstream consumers.
