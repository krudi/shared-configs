import type { Linter } from 'eslint';
import { globalIgnores } from 'eslint/config';
import storybook from 'eslint-plugin-storybook';

export default [
    globalIgnores(['!.storybook'], 'Include Storybook Directory'),
    {
        name: '@krudi/eslint-config/storybook',
        ...storybook.configs['flat/recommended'],
    },
] as Linter.Config[];
