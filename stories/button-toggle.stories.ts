import {storiesOf} from '@storybook/angular';
import {boolean, text} from '@storybook/addon-knobs';

import {McButtonToggleModule, McIconModule} from '@ptsecurity/mosaic';

import {withAnyInfo} from '../.storybook/addons/ng-info';

import * as markdown from './button.stories.md';


storiesOf('Buttons|Button Toggle', module)
    .addDecorator(withAnyInfo)

    .addParameters({
        anyinfo: {
            markdown
        }
    })
    .add('Button Toggle', () => ({
        template: `
            <mc-button-toggle-group [(ngModel)]="modelResult">
                <mc-button-toggle value="1">
                    default 1
                </mc-button-toggle>
                <mc-button-toggle value="2" [disabled]="disabled">
                    default 2
                </mc-button-toggle>
                <mc-button-toggle value="3">
                    default 3
                </mc-button-toggle>
                <mc-button-toggle value="4">
                    <i mc-icon="mc-angle-down-L_16"></i>
                </mc-button-toggle>
            </mc-button-toggle-group>
            <div class="example-selected-value">Model result: {{modelResult}}</div>
            
            <br>
            <br>
            
            <mc-button-toggle value="123" #standAloneToggle="mcButtonToggle">
                default
            </mc-button-toggle>
            <div class="example-selected-value">Selected value: {{standAloneToggle.checked}}</div>
        `,
        props: {
            disabled: boolean('disabled', false),
            modelResult: text('Model Result', '1')
        },
        moduleMetadata: {
            imports: [McIconModule, McButtonToggleModule]
        }
    }));
