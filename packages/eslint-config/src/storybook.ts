import type { Linter } from 'eslint';
import storybook from 'eslint-plugin-storybook';

import { globalIgnores } from 'eslint/config';

export default [
    globalIgnores(['!.storybook'], 'Include Storybook Directory'),
    {
        name: '@krudi/eslint-config/storybook',
        ...storybook.configs['flat/recommended'],
    },
] as Linter.Config[];
