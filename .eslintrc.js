module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    indent: [2, 2],
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'no-mixed-spaces-and-tabs': [2],
    'no-extra-semi': [2],
    'comma-dangle': [2, 'never']
  }
}
