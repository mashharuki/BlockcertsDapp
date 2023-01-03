module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig-eslint.json'
  },
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
    '@typescript-eslint/member-delimiter-style': ['error', { 'multiline': { 'delimiter': 'semi', 'requireLast': true }}],
    '@typescript-eslint/explicit-function-return-type': [1],
    '@typescript-eslint/interface-name-prefix': [0],
    '@typescript-eslint/strict-boolean-expressions': [0],
    '@typescript-eslint/no-explicit-any': [0], // remove one day, maybe. This is early days so we have some anys.
    '@typescript-eslint/restrict-plus-operands': [0],
    '@typescript-eslint/consistent-type-definitions': [0]
  }
};
