module.exports = {
  stories: [
    "../blurb/**/*.stories.[tj]s",
    // '../components/**/*.stories.js'
  ],
  "addons": [
    // "@storybook/addon-links",
    "@storybook/addon-essentials",
    // '@storybook/addon-controls'
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      ...config.resolve,
      extensions: ['.wasm', '.js', '.mjs', '.json'],
    }
    // Return the altered config
    return config;
  }
}
