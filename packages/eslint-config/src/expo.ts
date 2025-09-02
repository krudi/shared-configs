import type { Linter } from 'eslint';
import globals from 'globals';

export default [
    {
        name: '@krudi/eslint-config/expo',
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            globals: {
                ...globals.es2021,
                ...globals.browser,
                ...globals.node,
            },
        },
    },
] as Linter.Config[];
