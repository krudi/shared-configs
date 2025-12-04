import js from '@eslint/js';
import type { Linter } from 'eslint';
import gitignore from 'eslint-config-flat-gitignore';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    js.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    gitignore({
        name: '@krudi/shared-configs/gitignore',
    }),
    {
        name: '@krudi/eslint-config/base',
        ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/coverage/**', '**/*.tsbuildinfo'],
    },
    {
        name: '@krudi/eslint-config/js',
        files: ['**/*.{js,jsx,mjs,cjs}'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.es2021 },
        },
        rules: {
            ...js.configs.recommended.rules,
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            quotes: ['error', 'single'],
        },
        plugins: { 'simple-import-sort': simpleImportSort },
    },
    {
        name: '@krudi/eslint-config/ts',
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            sourceType: 'module',
            globals: { ...globals.es2021 },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            quotes: ['error', 'single'],
        },
    },
] as Linter.Config[];
