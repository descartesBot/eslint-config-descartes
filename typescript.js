module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        'allowSingleExtends': false,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
