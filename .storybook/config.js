/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

setOptions({
    name: 'PT Mosaic',
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/
});

// automatically import all files ending in *.stories.ts
const req = require.context('../stories', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
