/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Prefer named exports'
      }
    ],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts'
        },
        style: {
          lang: 'scss'
        }
      }
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 1
      }
    ],
    'vue/define-emits-declaration': ['error', 'type-literal'],
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
