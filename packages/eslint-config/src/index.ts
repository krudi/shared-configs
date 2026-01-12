import type { Linter } from 'eslint';

import baseConfig from './base';
import expoConfig from './expo';
import nextConfig from './nextjs';
import prettierConfig from './prettier';
import reactConfig from './react';
import turboConfig from './turbo';

const configs: Record<'base' | 'react' | 'nextjs' | 'turbo' | 'expo' | 'prettier', Linter.Config[]> = {
    base: baseConfig,
    react: reactConfig,
    nextjs: nextConfig,
    expo: expoConfig,
    turbo: turboConfig,
    prettier: prettierConfig,
};

export default configs;
