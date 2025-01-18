import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      semi: ['error'],
      quotes: ['error', 'single'],
      'semi-style': ['error', 'last'],
      'max-len': ['error', {
        'code': 80, // Maximum line length
        'tabWidth': 2, // Number of spaces per tab
        'ignoreComments': true, // Ignore comments when checking length
        'ignoreTrailingComments': true, // Ignore trailing comments
        'ignoreUrls': true, // Ignore URLs when checking length
        'ignoreStrings': true, // Ignore strings when checking length
        'ignoreTemplateLiterals': true, // Ignore template literals when checking length
        'ignoreRegExpLiterals': true // Ignore regular expression literals when checking length
      }]
    },
  })
];

export default eslintConfig;
