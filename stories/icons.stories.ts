import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';

const iconsHTML = require('../node_modules/@ptsecurity/mosaic-icons/dist/html/mc-icons.html');


storiesOf('Indicators|Icons', module)
    .add('Icons List', () => ({
        template: iconsHTML
    }));
