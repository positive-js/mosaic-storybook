import { storiesOf } from '@storybook/angular';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { McToggleModule } from '@ptsecurity/mosaic';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


storiesOf('Form Controls|Toggle', module)
    .addDecorator(withKnobs)
    .add('Toggle', () => ({
        template: `
            <style>
                .toggle-container {
                    margin-bottom: 16px;
                }            
            </style>
            <div class="toggle-container">
                <mc-toggle class="mc-toggle_small" [checked]="true" [disabled]="disabled">
                    Small toggle with label on right
                </mc-toggle>
            </div>
            <div class="toggle-container">
                <mc-toggle class="mc-toggle_small cdk-keyboard-focused" [checked]="true" [disabled]="disabled">
                    Focused small toggle
                </mc-toggle>
            </div>           
            
            <div class="toggle-container">
                <mc-toggle [checked]="true" [disabled]="disabled">
                    Default toggle with label on right
                </mc-toggle>
            </div>
            <div class="toggle-container">
                <mc-toggle class="cdk-keyboard-focused" [checked]="true" [disabled]="disabled">
                    Focused default toggle
                </mc-toggle>
            </div>

            <div class="toggle-container">
                <mc-toggle labelPosition="left" [checked]="true" [disabled]="disabled">
                    Default toggle with label on left
                </mc-toggle>
            </div>
            <div class="toggle-container">
                <mc-toggle class="mc-toggle_small" labelPosition="left" [checked]="true" [disabled]="disabled">
                    Small toggle with label on left
                </mc-toggle>
            </div>
        `,
        props: {
            disabled: boolean('disabled', false)
        },
        moduleMetadata: {
            imports: [BrowserAnimationsModule, McToggleModule]
        }
    }));

