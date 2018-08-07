import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';
import { McCheckboxModule } from '@ptsecurity/mosaic';


storiesOf('Components|Checkbox', module)
    .add('checkbox', () => ({
        template: `
            <mc-checkbox> Default</mc-checkbox><br><br>
            <mc-checkbox [checked]="true"> Checked</mc-checkbox><br><br>
            <mc-checkbox [checked]="true" [indeterminate]="true"> Indeterminate</mc-checkbox><br><br>
            <mc-checkbox [disabled]="true"> Default disabled</mc-checkbox><br><br>
            <mc-checkbox [checked]="true" disabled="disabled"> Checked disabled</mc-checkbox><br><br>
            <mc-checkbox [checked]="true" [indeterminate]="true" disabled="disabled"> Indeterminate disabled</mc-checkbox><br><br>
        `,
        props: {
            disabled: boolean('disabled', false),
            label_Primary: text('label_Primary', 'primary'),
            label_Progress: text('label_Progress', 'progress'),
        },
        moduleMetadata: {
            imports: [McCheckboxModule]
        }
    }));
