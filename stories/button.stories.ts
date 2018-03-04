import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs/angular';
import { McButtonModule } from '@ptsecurity/mosaic';


storiesOf('Button', module)
    .add('Primary', () => ({
        template: `
            <div>
                <button mc-button color="primary" [disabled]="disabled">{{label}}</button>
                <br><br>
                <button mc-button color="second">second</button>
            </div>
        `,
        props: {
            disabled: boolean('disabled', false),
            label: text('label', 'primary'),
        },
        moduleMetadata: {
            imports: [McButtonModule]
        }
    }));
