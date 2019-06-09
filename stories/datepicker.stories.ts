import { FormsModule } from '@angular/forms';
import { storiesOf } from '@storybook/angular';

import { withAnyInfo } from '../.storybook/addons/ng-info';

import { McMomentDateModule } from '@ptsecurity/mosaic-moment-adapter';
import { McInputModule, McIconModule, McFormFieldModule, McDatepickerModule, McRadioModule } from '@ptsecurity/mosaic';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiLangDateComponent } from './datepicker/multi-lang-date.component';
import { MyDatepickerComponent } from './datepicker/app-datepicker.component';

import * as multiLangDate from './datepicker/multi-lang-date.md';
import * as appDatepicker from './datepicker/app-datepicker.md';



storiesOf('Form Controls|Datepicker', module)
    .addDecorator(withAnyInfo)

    .addParameters({
        anyinfo: {
            markdown: appDatepicker
        }
    })
    .add('Datepicker', () => ({
        template: `
            <app-datepicker></app-datepicker>
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
    }))

    .addParameters({
        anyinfo: {
            markdown: multiLangDate
        }
    })
    .add('MultiLang', () => ({
        template: `<app-multi-lang-date></app-multi-lang-date>`,
        moduleMetadata: {
            declarations: [MultiLangDateComponent],
            imports: [
                BrowserAnimationsModule,
                FormsModule,
                McFormFieldModule,
                McRadioModule,
                McDatepickerModule,
                McMomentDateModule,
                McInputModule,
                McIconModule
            ]
        }
    }));
