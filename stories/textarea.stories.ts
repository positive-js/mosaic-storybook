import { storiesOf } from '@storybook/angular';
import { boolean, text, number } from '@storybook/addon-knobs';
import { McTextareaModule, McFormFieldModule } from '@ptsecurity/mosaic';
import { FormsModule } from '@angular/forms';

storiesOf('Form Controls|Textarea', module)
    .add('textarea', () => ({
        template: `
            <div style="width: 200px">
                <mc-form-field>
                    <textarea mcTextarea [placeholder]="placeholder"></textarea>                
                </mc-form-field>
                
                <br><br>
                
                <mc-form-field>
                    <textarea mcTextarea [disabled]="disabled" [placeholder]="placeholder"></textarea>                
                </mc-form-field>
                
                <br><br>
                
                <mc-form-field>
                    <textarea mcTextarea [placeholder]="placeholder" [required]="required" [(ngModel)]="value"></textarea>                
                </mc-form-field>
                
                <br><br>
                
                <mc-form-field mcFormFieldWithoutBorders>               
                    <textarea mcTextarea [(ngModel)]="value" placeholder="Placeholder"></textarea>
                </mc-form-field>
            </div>
        `,
        props: {
            disabled: boolean('disabled', true),
            required: boolean('required', true),
            placeholder: text('placeholder', 'placeholder'),
        },
        moduleMetadata: {
            imports: [McTextareaModule, McFormFieldModule, FormsModule]
        }
    }));
