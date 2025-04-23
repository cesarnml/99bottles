module.exports = {
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    eqeqeq: ['error', 'always'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: ['error', 'double'],
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    semi: 'never',
    'no-undef': 'never',
  },
};
