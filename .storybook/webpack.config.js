const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');


module.exports = (baseConfig) => {

  baseConfig.plugins.push(
    new CopyWebpackPlugin([
      { from: 'node_modules/@ptsecurity/mosaic/prebuilt-themes/default-theme.css', to: 'assets/css/default-theme.css' },
    ]),
      new ContextReplacementPlugin(
          // The (\\|\/) piece accounts for path separators in *nix and Windows
          /angular(\\|\/)core(\\|\/)(@angular|esm5|fesm5)/,
          path.resolve(__dirname, './')
      )
  );

  return baseConfig;
};
