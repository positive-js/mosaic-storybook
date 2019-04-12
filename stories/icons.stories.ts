import { storiesOf } from '@storybook/angular';
import { withAnyInfo } from '../.storybook/addons/ng-info';
import * as markdown from './icons.stories.md';

const iconsHTML = require('../node_modules/@ptsecurity/mosaic-icons/dist/html/mc-icons.html');


storiesOf('Indicators|Icons', module)
    .addDecorator(withAnyInfo)
    .addParameters({
        anyinfo: {
            markdown
        }
    })
    .add('Icons List', () => ({
        template: iconsHTML
    }));
