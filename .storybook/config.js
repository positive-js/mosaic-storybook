/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, addDecorator, addParameters } from '@storybook/angular';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { withCssResources } from '@storybook/addon-cssresources';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { newViewports } from './viewports-config';


addParameters({
    options: {
        theme: create({
            base: 'light',
            brandTitle: 'PT Mosaic',
            brandUrl: 'https://github.com/positive-js/mosaic/',
            brandImage: 'https://i.ibb.co/p0zh3sb/logo-png-48.png'
        }),
        isFullscreen: false
    }
});

addDecorator(withKnobs);

addDecorator(withCssResources);
addParameters(
    {
        cssresources: [
            {
                id: `Light Theme`,
                code: `<link rel="stylesheet" type="text/css" href="assets/css/default-theme.css"></link>`,
                picked: true,
            },
            {
                id: `Dark Theme`,
                code: `<link rel="stylesheet" type="text/css" href="assets/css/dark-theme.css"></link>`,
                picked: false,
            }
        ]
    }
);

configureViewport({
    defaultViewport: 'responsive',
    viewports: {
        ...newViewports,
        ...INITIAL_VIEWPORTS
    }
});

// automatically import all files ending in *.stories.ts
const req = require.context('../stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
