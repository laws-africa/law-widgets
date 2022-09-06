module.exports = {
  ...require('@musangowope/prettier-config'),
  overrides: [
    {
      files: ['**/*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
