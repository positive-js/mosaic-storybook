import { storiesOf } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { McFormFieldModule, McHighlightModule, McIconModule, McInputModule, McTreeModule } from '@ptsecurity/mosaic';
import { TreeComponent as defaultTree } from './tree/default/tree.component';
import { TreeComponent as filtrationTree } from './tree/filtration/tree.component';
import { CdkTreeModule } from '@ptsecurity/cdk/tree';


storiesOf('Data List|Tree', module)
    .addDecorator(withKnobs)
    .add('Tree Default', () => ({
        /* tslint:disable:no-trailing-whitespace */
        component: defaultTree,
        props: {
            onSelectionChange: action('selectionChange')
        },
        moduleMetadata: {
            declarations: [defaultTree],
            imports: [McTreeModule, McIconModule, CdkTreeModule]
        }
    }))
    .add('Tree with filtration', () => ({
        /* tslint:disable:no-trailing-whitespace */
        component: filtrationTree,
        props: {
            onSelectionChange: action('selectionChange')
        },
        moduleMetadata: {
            declarations: [filtrationTree],
            imports: [McTreeModule, McIconModule, CdkTreeModule, McFormFieldModule, McHighlightModule, McInputModule]
        }
    }));
