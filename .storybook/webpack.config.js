
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = (baseConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  console.log('=====================');

  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      {
        from: 'node_modules/@ptsecurity/mosaic/prebuilt-themes/default-theme.css',
        to: 'assets/css/default-theme.css'
      },
    ])
  );

  return baseConfig;
};
