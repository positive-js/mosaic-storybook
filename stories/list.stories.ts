import { storiesOf } from '@storybook/angular';
import { withKnobs, array, boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { McListModule } from '@ptsecurity/mosaic';


storiesOf('Data List|List', module)
    .addDecorator(withKnobs)
    .add('List Default', () => ({
        /* tslint:disable:no-trailing-whitespace */
        template: `
        <h5>With default parameters (multiple="true", autoselect="true", no-unselect="true")</h5>
        <mc-list-selection
            class="mc-no-select"
            [(ngModel)]="selectedItems"
            (selectionChange)="onSelectionChange($event)">

            <mc-list-option value="disabled" disabled>Disabled</mc-list-option>
            <mc-list-option value="Item 1">Item 1</mc-list-option>
            <mc-list-option value="Item 2">Item 2</mc-list-option>
            <mc-list-option value="Item 3">Item 3</mc-list-option>
            <mc-list-option value="Item 4">Item 4</mc-list-option>
            <mc-list-option *ngFor="let folder of folders" value="{{ folder.name }}">{{ folder.name }}</mc-list-option>
        </mc-list-selection>

        <p>Selected: {{ selectedItems}}</p>
        `,
        props: {
            folders: object('folders', [
                { name: 'Photos' },
                { name: 'Recipes' },
                { name: 'Work' }
            ]),
            onSelectionChange: action('selectionChange')
        },
        moduleMetadata: {
            imports: [ McListModule ]
        }
    }))
    .add('With multiple="false"', () => ({
        /* tslint:disable:no-trailing-whitespace */
        template: `
        <h5>With parameter multiple="false"</h5>
        <mc-list-selection
            multiple="false"
            [(ngModel)]="selectedItems"
            (selectionChange)="onSelectionChange($event)">

            <mc-list-option value="disabled" disabled>Disabled</mc-list-option>
            <mc-list-option value="Item 1">Item 1</mc-list-option>
            <mc-list-option value="Item 2">Item 2</mc-list-option>
            <mc-list-option value="Item 3">Item 3</mc-list-option>
            <mc-list-option value="Item 4">Item 4</mc-list-option>
            <mc-list-option *ngFor="let folder of folders" value="{{ folder.name }}">{{ folder.name }}</mc-list-option>
        </mc-list-selection>

        <p>Selected: {{ selectedItems}}</p>
        `,
        props: {
            folders: object('folders', [
                { name: 'Photos' },
                { name: 'Recipes' },
                { name: 'Work' }
            ]),
            onSelectionChange: action('selectionChange')
        },
        moduleMetadata: {
            imports: [ McListModule ]
        }
    }));
