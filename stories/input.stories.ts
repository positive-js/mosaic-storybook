import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';
import { McInputModule, McFormFieldModule, McIconModule } from '@ptsecurity/mosaic';
import { FormsModule } from '@angular/forms';

storiesOf('Form Controls|Input', module)
    .add('inputs', () => ({
        template: `
            <div style="width: 200px">
                <mc-form-field>
                    <input mcInput [placeholder]="placeholder">                
                </mc-form-field>
                
                <br><br>
                
                <mc-form-field>
                    <input mcInput [disabled]="disabled" [placeholder]="placeholder">                
                </mc-form-field>
                
                <br><br>
                
                <mc-form-field>
                    <input mcInput [placeholder]="placeholder" [required]="required" [(ngModel)]="value">                
                </mc-form-field>
                
                <br><br>
                
                <mc-form-field mcFormFieldWithoutBorders>
                    <i mcPrefix mc-icon="mc-search_16"></i>
                
                    <input mcInput [(ngModel)]="value" placeholder="Placeholder">
                
                    <mc-cleaner></mc-cleaner>
                </mc-form-field>
            </div>
        `,
        props: {
            disabled: boolean('disabled', true),
            required: boolean('required', true),
            placeholder: text('placeholder', 'placeholder'),
        },
        moduleMetadata: {
            imports: [McInputModule, McFormFieldModule, McIconModule, FormsModule]
        }
    }))

    .add('inputs with cleaner', () => ({
        template: `
                <div style="width: 200px">
                    <mc-form-field>
                        <input mcInput [placeholder]="placeholder" [disabled]="disabled" [required]="required" 
                            [(ngModel)]="value">         
                        
                        <mc-cleaner></mc-cleaner>       
                    </mc-form-field>
                </div>
            `,
        props: {
            disabled: boolean('disabled', false),
            required: boolean('required', false),
            placeholder: text('placeholder', 'placeholder'),
        },
        moduleMetadata: {
            imports: [McInputModule, McFormFieldModule, FormsModule]
        }
    }))

    .add('inputs with hint', () => ({
        template: `
                <div style="width: 200px">
                    <mc-form-field>
                        <input mcInput [placeholder]="placeholder" [disabled]="disabled" [required]="required" 
                            [(ngModel)]="value">         
                        
                        <mc-hint>{{hint}}</mc-hint>       
                    </mc-form-field>
                </div>
            `,
        props: {
            disabled: boolean('disabled', false),
            required: boolean('required', false),
            placeholder: text('placeholder', 'placeholder'),
            hint: text('hint', 'Hint under field'),
        },
        moduleMetadata: {
            imports: [McInputModule, McFormFieldModule, FormsModule]
        }
    }))

    .add('inputs with suffix and prefix', () => ({
        template: `
                <div style="width: 200px">
                    <mc-form-field>
                         <i mcPrefix mc-icon="mc-search_16" *ngIf="hasPrefix"></i>
                        
                        <input mcInput>  
                        
                         <i mcSuffix mc-icon="mc-calendar_16" *ngIf="hasSuffix"></i>
                    </mc-form-field>
                </div>
            `,
        props: {
            hasPrefix: boolean('has prefix', true),
            hasSuffix: boolean('has suffix', true),

        },
        moduleMetadata: {
            imports: [McInputModule, McFormFieldModule, McIconModule, FormsModule]
        }
    }))

    .add('numeric inputs', () => ({
        template: `
                <div style="width: 200px">                   
                    <header>With placeholder</header>
                    <mc-form-field>
                        <i mcPrefix mc-icon="mc-search_16"></i>
                        <input mcInput [(ngModel)]="numberValue" type="number" [placeholder]="placeholder"
                               [disabled]="disabled" [required]="required">
                        <mc-stepper></mc-stepper>
                    </mc-form-field>
                
                    <br><br>
                
                    <header>Min = -5 Max = 7 Step = 0.5 Big step = 1.5 </header>
                    <mc-form-field>
                        <input mcInput [(ngModel)]="numberValue" type="number" [placeholder]="placeholder"
                               min="-5" max="7" step="0.5" big-step="1.5" [disabled]="disabled" [required]="required">
                        <mc-stepper></mc-stepper>
                    </mc-form-field>
                
                    <br><br>
                
                    <header>Min = -5 </header>
                    <mc-form-field>
                        <input mcInput [(ngModel)]="numberValue" type="number" [placeholder]="placeholder" 
                               min="-5" [disabled]="disabled" [required]="required">
                        <mc-stepper></mc-stepper>
                    </mc-form-field>
                
                    <br><br>
                
                    <header>Step = 0.5 </header>
                    <mc-form-field>
                        <input mcInput [(ngModel)]="numberValue" type="number"  [placeholder]="placeholder"
                               step="0.5" [disabled]="disabled" [required]="required">
                        <mc-stepper></mc-stepper>
                    </mc-form-field>
            `,
        props: {
            disabled: boolean('disabled', false),
            required: boolean('required', false),
            placeholder: text('placeholder', 'placeholder'),

        },
        moduleMetadata: {
            imports: [McInputModule, McFormFieldModule, McIconModule, FormsModule]
        }
    }));
