const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins = config.plugins.map(plugin => {
      if (plugin instanceof HtmlWebpackPlugin) {
        plugin.options.minify = false; // Disable minification
      }
      return plugin;
    });
  }
  return config;
};
