import { storiesOf } from '@storybook/angular';
import { array, boolean, text } from '@storybook/addon-knobs/angular';
import { action } from '@storybook/addon-actions';

import { McListModule } from '@ptsecurity/mosaic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


storiesOf('List', module)
    .add('list', () => ({
        /* tslint:disable:no-trailing-whitespace */
        template: `
        <h5>multiple selection</h5>
        <mc-list-selection [(ngModel)]="multipleSelected" (selectionChange)="onSelectionChange($event)">
            <mc-list-option value="Disabled" disabled>Disabled</mc-list-option>
            <mc-list-option value="Normal">Normal</mc-list-option>
            <mc-list-option value="Hovered" class="mc-hovered">Hovered</mc-list-option>
            <mc-list-option value="Focused" class="mc-focused">Focused</mc-list-option>
            <mc-list-option value="Selected" class="mc-selected">Selected</mc-list-option>
        </mc-list-selection>
        <br>
        <div>multipleSelected: {{ multipleSelected }}</div>
        `,
        props: {
            folders: array('folders', [
                {
                    name: 'Photos',
                    updated: new Date('1/1/16')
                },
                {
                    name: 'Recipes',
                    updated: new Date('1/17/16')
                },
                {
                    name: 'Work',
                    updated: new Date('1/28/16')
                }
            ]),
            onSelectionChange: action('selectionChange')
        },
        moduleMetadata: {
            imports: [ BrowserAnimationsModule, McListModule]
        }
    }));
