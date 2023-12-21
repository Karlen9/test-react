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
  plugins: ['react', '@typescript-eslint'],
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
    'react/no-deprecated': 'off'
  },
  globals: {
    _IS_DEV_: true
  }
}
