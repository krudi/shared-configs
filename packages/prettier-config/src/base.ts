import type { Options } from 'prettier';

const config: Options = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
    bracketSameLine: false,
    singleAttributePerLine: true,
    insertPragma: false,
    proseWrap: 'always',
} satisfies Options;

export default config as Options;
