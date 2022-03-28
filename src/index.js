module.exports = {
  env: {
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: ['./rules/rules.js'],
  plugins: ['import'],
};
