import { storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { McIconModule, McTreeModule } from '@ptsecurity/mosaic';
import { TreeComponent } from './tree/tree.component';
import { CdkTreeModule } from '@ptsecurity/cdk/tree';


storiesOf('Data List|Tree', module)
    .addDecorator(withKnobs)
    .add('Tree Default', () => ({
        /* tslint:disable:no-trailing-whitespace */
        component: TreeComponent,
        props: {
            onSelectionChange: action('selectionChange')
        },
        moduleMetadata: {
            declarations: [TreeComponent],
            imports: [McTreeModule, McIconModule, CdkTreeModule]
        }
    }));
