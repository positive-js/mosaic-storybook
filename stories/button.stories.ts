import { storiesOf } from '@storybook/angular';
import { withCssResources } from '@storybook/addon-cssresources';
import { boolean, text } from '@storybook/addon-knobs';

import { McButtonModule } from '@ptsecurity/mosaic';


storiesOf('Buttons|Button', module)
    .addDecorator(
        withCssResources({
            cssresources: [
                {
                    name: `Light Theme`,
                    code: `<link rel="stylesheet" type="text/css" href="assets/css/default-theme.css"></link>`,
                    picked: true,
                },
                {
                    name: `Dark Theme`,
                    code: `<link rel="stylesheet" type="text/css" href="assets/css/dark-theme.css"></link>`,
                    picked: false,
                }
            ]
        })
    )
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
