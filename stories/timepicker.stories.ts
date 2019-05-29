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
import { McMomentDateModule } from '@ptsecurity/mosaic-moment-adapter';
import { FormsModule } from '@angular/forms';


let newDefaultTime = new Date();
let timeFormatOptions = {
    'HH:mm:ss': 'HH:mm:ss',
    'HH:mm': 'HH:mm'
};

function myDateKnob(name, defaultValue) {
    const stringTimestamp = date(name, defaultValue);
    return new Date(stringTimestamp)
}

storiesOf('Form Controls|Timepicker', module)
    .add('Basic display customization', () => ({
        template: `
        <p>Component may be disabled, customize time format and inner icon visibility.</p>
        <div style="width: 150px">
            <mc-form-field >
                <i *ngIf="isIconVisible" mcPrefix mc-icon="mc-clock_16"></i>
                <input mcTimepicker
                       [(ngModel)]="value"
                       [disabled]="isDisabled"
                       [time-format]="timeFormat">
            </mc-form-field>            
        </div>
        <section [ngSwitch]="value !== null">
            <span *ngSwitchCase="true">Result: {{value.toLocaleTimeString()}}</span>
            <span *ngSwitchCase="false">Null result</span>
        </section>`,
        props: {
            value: myDateKnob('Time value', newDefaultTime),
            isIconVisible: boolean('Show icon', true),
            isDisabled: boolean('Disable', false),
            timeFormat: select('Time format', timeFormatOptions, 'HH:mm')
        },
        moduleMetadata: {
            imports: [
                FormsModule,
                McTimepickerModule,
                McInputModule,
                McFormFieldModule,
                McIconModule,
                McMomentDateModule
            ]
        }
    }))
    .add('Min/max time limitations', () => ({
        template: `
        <p>Minimum and maximum time may be custimized using min-time and max-time params.</p>
        <div style="width: 150px">
            <mc-form-field >
                <i *ngIf="isIconVisible" mcPrefix mc-icon="mc-clock_16"></i>
                <input mcTimepicker
                       [(ngModel)]="value"
                       [min-time]="minTime"
                       [max-time]="maxTime">
            </mc-form-field>            
        </div>
        <section [ngSwitch]="value !== null">
            <span *ngSwitchCase="true">Result: {{value.toLocaleTimeString()}}</span>
            <span *ngSwitchCase="false">Null result</span>
        </section>`,
        props: {
            value: myDateKnob('Time value', newDefaultTime),
            isIconVisible: boolean('Is timepicker with icon', true),
            minTime: text('Minimal time allowed (blank if no)', '10:00:00'),
            maxTime: text('Maximal time allowed (blank if no)', '13:00:00')
        },
        moduleMetadata: {
            imports: [
                FormsModule,
                McTimepickerModule,
                McInputModule,
                McFormFieldModule,
                McIconModule,
                McMomentDateModule
            ]
        }
    }));
