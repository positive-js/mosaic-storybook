import { storiesOf } from '@storybook/angular';
import {
    boolean,
    date,
    select,
    text
} from '@storybook/addon-knobs';
import {
    McTimepickerModule,
    McInputModule,
    McFormFieldModule,
    McIconModule
} from '@ptsecurity/mosaic';
import { FormsModule } from '@angular/forms';


let newDefaultTime = new Date();

function myDateKnob(name, defaultValue) {
    const stringTimestamp = date(name, defaultValue);
    return new Date(stringTimestamp)
}

storiesOf('Form Controls|Timepicker', module)
    .add('Any time allowed', () => ({
            template: `
        <div style="width: 150px">
            <mc-form-field >
                <i *ngIf="isIconVisible" mcPrefix mc-icon="mc-clock_16"></i>
                <input mcTimepicker
                       [(ngModel)]="value"
                       [disabled]="isDisabled"
                       [min-time]="minTime"
                       [max-time]="maxTime"
                       [time-format]="timeFormat">
            </mc-form-field>            
        </div>
        <section [ngSwitch]="value !== null">
            <span *ngSwitchCase="true">Result: {{value.toLocaleTimeString()}}</span>
            <span *ngSwitchCase="false">Null result</span>
        </section>`,
            props: {
                isIconVisible: boolean('Is timepicker with icon', true),
                isDisabled: boolean('disabled', false),
                value: myDateKnob('Time value', newDefaultTime),
                timeFormat: select('Time format', ['HH:mm', 'HH:mm:ss'], 'HH:mm'),
                minTime: text('Minimal time allowed (blank if no)', ''),
                maxTime: text('Maximal time allowed (blank if no)', '')
            },
            moduleMetadata: {
                imports: [
                    FormsModule,
                    McTimepickerModule,
                    McInputModule,
                    McFormFieldModule,
                    McIconModule
                ]
            }
        })
    );
