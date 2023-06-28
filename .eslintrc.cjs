module.exports = {
  extends: ['@antfu', 'plugin:vitest-globals/recommended'],
  env: {
    'vitest-globals/env': true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  },
  root: true,
  rules: {
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-console': 0,
  },
}
