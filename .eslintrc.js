module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-indent': ['error', 2],
    indent: [2, 2],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'no-unused-vars': 'warn',
    'multiline-ternary': [1, 'never'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/jsx-indent-props': [2, 2],
    'react/function-component-definition': 'off',
    'i18next/no-literal-string': ['warn', { markupOnly: true }],
    'react/no-deprecated': 'off'
  },
  globals: {
    _IS_DEV_: true
  }
}
