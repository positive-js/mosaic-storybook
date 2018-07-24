const path = require('path');

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

    baseConfig.module.rules.push(
        {
            test: [/\.stories\.tsx?$/, /index\.ts$/],
            loaders: [
                {
                    loader: require.resolve('@storybook/addon-storysource/loader'),
                    options: { parser: 'typescript' }
                }
            ],
            include: [path.resolve(__dirname, '../stories')],
            enforce: 'pre'
        }
    );

    return baseConfig;
};
