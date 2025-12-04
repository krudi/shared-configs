import type { Options } from 'prettier';

const config: Options = {
    printWidth: 120,
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
    plugins: ['@prettier/plugin-xml'],
    xmlWhitespaceSensitivity: 'ignore',
    xmlQuoteAttributes: 'preserve',
    xmlSelfClosingSpace: true,
    xmlSortAttributesByKey: false,
} satisfies Options;

export default config as Options;
