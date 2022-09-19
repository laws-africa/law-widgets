module.exports = {
  ...require('@laws-africa/prettier-config'),
  overrides: [
    {
      files: ['**/*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
