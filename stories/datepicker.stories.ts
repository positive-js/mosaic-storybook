import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';

import { withAnyInfo } from '../.storybook/addons/ng-info';

import { McMomentDateModule, MomentDateAdapter } from '@ptsecurity/mosaic-moment-adapter';
import { McInputModule, McIconModule, McFormFieldModule, McDatepickerModule } from '@ptsecurity/mosaic';

import { DateAdapter, MC_DATE_LOCALE } from '@ptsecurity/cdk/datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


storiesOf('Form Controls|Datepicker', module)
    .addDecorator(withAnyInfo)

    .addParameters({
        anyinfo: {

        }
    })
    .add('Datepicker', () => ({
        template: `
            <my-datepicker></my-datepicker>
        `,
        props: {
        },
        moduleMetadata: {
            declarations: [ MyDatepickerComponent ],
            imports: [
                BrowserAnimationsModule,
                FormsModule,
                McFormFieldModule,
                McDatepickerModule,
                McMomentDateModule,
                McInputModule,
                McIconModule
            ]
        }
    }));

@Component({
    selector: 'my-datepicker',
    template: `
        <div class="example-viewport">
            <mc-form-field>
                <input mcInput [(ngModel)]="date" [mcDatepicker]="myDatepicker" />
                <mc-datepicker-toggle tabindex="7" mcSuffix [for]="myDatepicker"></mc-datepicker-toggle>
                <mc-datepicker #myDatepicker></mc-datepicker>
            </mc-form-field>
        </div>
    `,
    styles: [`
        .example-viewport {
            width: 400px;
            margin: 8px;
        }
    `],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {provide: MC_DATE_LOCALE, useValue: 'ru'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MC_DATE_LOCALE]}
    ]
})
export class MyDatepickerComponent {
    date;
}
