import type { Linter } from 'eslint';
import turbo from 'eslint-plugin-turbo';

export default [
    {
        name: '@krudi/eslint-config/turbo',
        plugins: { turbo },
        rules: {
            'turbo/no-undeclared-env-vars': 'warn',
        },
    },
] as Linter.Config[];
