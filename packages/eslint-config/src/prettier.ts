import type { Linter } from 'eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

export default [
    {
        name: '@krudi/eslint-config/prettier',
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: { prettier },
        rules: {
            ...eslintConfigPrettier.rules,
            'prettier/prettier': 'error',
        },
    },
] as Linter.Config[];
