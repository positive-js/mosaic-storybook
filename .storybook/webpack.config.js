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
            {
                from: 'node_modules/@ptsecurity/mosaic/prebuilt-visual/default-visual.css',
                to: 'assets/css/default-visual.css'
            },
            {
                from: 'node_modules/@ptsecurity/mosaic-icons/dist/styles/mc-icons.css',
                to: 'assets/css/mc-icons.css'
            },
            {
                from: 'node_modules/@ptsecurity/mosaic-icons/dist/fonts/mc-icons.woff',
                to: 'fonts/mc-icons.woff'
            },
            {
                from: 'node_modules/@ptsecurity/mosaic-icons/dist/fonts/mc-icons.ttf',
                to: 'fonts/mc-icons.ttf'
            },
            {
                from: 'node_modules/@ptsecurity/mosaic-icons/dist/fonts/mc-icons.woff',
                to: 'assets/fonts/mc-icons.woff'
            },
            {
                from: 'node_modules/@ptsecurity/mosaic-icons/dist/fonts/mc-icons.ttf',
                to: 'assets/fonts/mc-icons.ttf'
            }
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
