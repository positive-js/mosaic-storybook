/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, addDecorator } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import {
    configureViewport,
    INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import { newViewports } from './viewports-config';


setOptions({
    name: 'PT Mosaic',
    sortStoriesByKind: true,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/
});

addDecorator(withKnobs);
addDecorator(withNotes);

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
