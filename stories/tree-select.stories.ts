import { storiesOf } from '@storybook/angular';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import {
    McButtonModule,
    McFormFieldModule,
    McIconModule,
    McInputModule,
    McTreeModule,
    McTreeSelectModule
} from '@ptsecurity/mosaic';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { CdkTreeModule } from '@ptsecurity/cdk/tree';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


storiesOf('Data List|Tree Select', module)
    .addDecorator(withKnobs)
    .add('Tree Select', () => ({
        component: TreeSelectComponent,
        props: {
            disabled: boolean('disabled', false),
            disabledItemName: text('disabled item name', 'Downloads')
        },
        moduleMetadata: {
            imports: [
                BrowserAnimationsModule,
                McTreeModule,
                CdkTreeModule,
                McTreeSelectModule,

                McButtonModule,
                McInputModule,
                McFormFieldModule,
                McIconModule,
                ReactiveFormsModule
            ]
        }
    }));
