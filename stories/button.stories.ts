import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs/angular';
import { McButtonModule } from '@ptsecurity/mosaic';


storiesOf('Button', module)
    .add('buttons', () => ({
        template: `
            <div>
                <button mc-button color="primary" [disabled]="disabled">{{label_Primary}}</button>
                <br><br>
                <button mc-button color="second">second</button>
                <br><br>
                <button class="mc-progress" mc-button color="second">{{label_Progress}}</button>
            </div>
        `,
        props: {
            disabled: boolean('disabled', false),
            label_Primary: text('label_Primary', 'primary'),
            label_Progress: text('label_Progress', 'progress'),
        },
        moduleMetadata: {
            imports: [McButtonModule]
        }
    }));
