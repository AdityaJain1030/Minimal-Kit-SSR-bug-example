module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"]
  },
  plugins: ['svelte3', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'double'],
    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': require('typescript'),
  },
}
