import { storiesOf } from '@storybook/angular';
import { number, select } from '@storybook/addon-knobs';
import { McProgressSpinnerModule } from '@ptsecurity/mosaic';


const modes = {
    determinate: 'determinate',
    indeterminate: 'indeterminate'
}

const colors = {
    primary: 'primary',
    second: 'second',
    warn: 'warn'
};

storiesOf('Progress spinner', module)
    .add('Simple progress spinner', () => ({
        template: `
            <style>
                .large {
                    width: 50px;
                    height: 50px;
                }

                .huge {
                    width: 100px;
                    height: 100px;
                }
            </style>
            <div>
                <h1>Progress spinner</h1>
                <mc-progress-spinner [mode]="mode"
                                     [value]="value"
                                     [color]="color">
                </mc-progress-spinner>
                <br><br>
                <mc-progress-spinner [mode]="mode"
                                     [value]="value"
                                     [color]="color"
                                     class="large">
                </mc-progress-spinner>
                <br><br>
                <mc-progress-spinner [mode]="mode"
                                     [value]="value"
                                     [color]="color"
                                     class="huge">
                </mc-progress-spinner>
                <br><br>
            </div>
        `,
        props: {
            mode: select('mode', modes, modes.determinate),
            value: number('value', 30, { min: 0, max: 100, step: 5 }),
            color: select('color', colors, colors.primary)
        },
        moduleMetadata: {
            imports: [McProgressSpinnerModule]
        }
    }));
