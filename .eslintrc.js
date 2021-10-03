const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
  extends: [
    'react-app',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-use-before-define': 'off',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};
