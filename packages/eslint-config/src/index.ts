import type { Linter } from 'eslint';

import baseConfig from './base';
import expoConfig from './expo';
import nextConfig from './nextjs';
import prettierConfig from './prettier';
import turboConfig from './turbo';

const configs: Record<
    'base' | 'nextjs' | 'turbo' | 'expo' | 'prettier',
    Linter.Config[]
> = {
    base: baseConfig,
    nextjs: nextConfig,
    expo: expoConfig,
    turbo: turboConfig,
    prettier: prettierConfig,
};

export default configs;
