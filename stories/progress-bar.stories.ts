import { storiesOf } from '@storybook/angular';
import { number, select } from '@storybook/addon-knobs';
import { McProgressBarModule } from '@ptsecurity/mosaic';

const modes = {
    determinate: 'determinate',
    indeterminate: 'indeterminate'
}

const colors = {
    primary: 'primary',
    second: 'second',
    warn: 'warn'
};

storiesOf('Indicators|Progress bar', module)
    .add('Simple progress bar', () => ({
        template: `
            <div>
                <h1>Progress bar</h1>
                <mc-progress-bar [mode]="mode"
                                 [value]="value"
                                 [color]="color">
                </mc-progress-bar>
                <br><br>
            </div>
        `,
        props: {
            mode: select('mode', modes, modes.determinate),
            value: number('value', 30, { min: 0, max: 100, step: 5 }),
            color: select('color', colors, colors.primary)
        },
        moduleMetadata: {
            imports: [McProgressBarModule]
        }
    }));
