import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs/angular';
import { McRadioModule } from '@ptsecurity/mosaic';


storiesOf('Radio', module)
    .add('radio group', () => ({
        /* tslint:disable:no-trailing-whitespace */
        template: `
            <style>
                .example-radio-group {
                    display: inline-flex;
                    flex-direction: column;
                }
                
                .example-radio-button {
                    margin-bottom: 8px;
                }
            </style>
            <div>
                <mc-radio-group
                    class="example-radio-group"
                    name="my_options"
                    [disabled]="isDisabled">
                    <mc-radio-button class="example-radio-button" value="option_1">Option 1</mc-radio-button>
                    <mc-radio-button class="example-radio-button" value="option_2">Option 2</mc-radio-button>
                    <mc-radio-button class="example-radio-button" value="option_3">Option 3</mc-radio-button>
                </mc-radio-group>
                <br><br>
            </div>
        `,
        /* tslint:enable:no-trailing-whitespace */
        props: {

        },
        moduleMetadata: {
            imports: [McRadioModule]
        }
    }));
