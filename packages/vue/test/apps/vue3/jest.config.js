module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest"
  },
  transformIgnorePatterns: ['/node_modules/(?!ionicons|@stencil/core|@musangowope/cool-components|@musangowope/cool-components-vue|@musangowope/cool-components-vue-router)'],
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true
      }
    }
  }
};
