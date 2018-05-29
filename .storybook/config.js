import {configure, addDecorator} from '@storybook/angular';
import {setOptions} from '@storybook/addon-options';
import {withKnobs} from '@storybook/addon-knobs/angular';


setOptions({
    name: 'Mosaic',
    hierarchyRootSeparator: /\|/,
});

addDecorator(withKnobs);

function loadStories() {
    // automatically import all files ending in *.stories.ts
    const req = require.context('../stories', true, /.stories.ts$/);

    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
