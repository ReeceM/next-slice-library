module.exports = {
  stories: [
    "../blurb/**/*.stories.[tj]s",
    // '../components/**/*.stories.js'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-controls'
  ],
  /**
   * An attempt to patch and fix babel/(core|runtime) 7.13.x
   */
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      ...config.resolve,
      extensions: ['.wasm', '.js', '.mjs', '.json'],
    }
    // Return the altered config
    return config;
  }
}
