module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', ['pascal-case', 'camel-case', 'lower-case']],
    'header-max-length': [2, 'always', 100]
  }
};
