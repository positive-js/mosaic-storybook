const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (baseConfig) => {

    baseConfig.plugins.push(
        new CopyWebpackPlugin([
            {
                from: 'node_modules/@ptsecurity/mosaic/prebuilt-themes/default-theme.css',
                to: 'assets/css/default-theme.css'
            }
        ])
    );

    return baseConfig;
};
