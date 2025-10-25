import type { Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
    {
        name: '@krudi/eslint-config/react',
        files: ['**/*.{ts,tsx,js,jsx}'],
        ...reactPlugin.configs.flat.recommended,
        ...reactPlugin.configs.flat['jsx-runtime'],
        languageOptions: {
            ...reactPlugin.configs.flat.recommended?.languageOptions,
            ...reactPlugin.configs.flat['jsx-runtime']?.languageOptions,
            globals: {
                ...globals.es2021,
                ...globals.browser,
                ...globals.node,
                React: 'writable',
            },
        },
    },
    reactHooks.configs.flat['recommended-latest']!,
] as Linter.Config[];
