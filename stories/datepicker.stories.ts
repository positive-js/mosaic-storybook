import { FormsModule } from '@angular/forms';
import { storiesOf } from '@storybook/angular';

import { withAnyInfo } from '../.storybook/addons/ng-info';

import { McMomentDateModule } from '@ptsecurity/mosaic-moment-adapter';
import { McInputModule, McIconModule, McFormFieldModule, McDatepickerModule, McRadioModule } from '@ptsecurity/mosaic';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiLangDateComponent } from './datepicker/multi-lang-date.component';
import { AppCustomToggleDatepickerComponent } from './datepicker/app-custom-toggle-datepicker.component';
import { AppDisabledDatepickerComponent } from "./datepicker/app-disabled-datepicker.component";
import { AppMultiYearDatepickerComponent } from "./datepicker/app-multi-year-datepicker.component";
import { MyDatepickerComponent } from './datepicker/app-datepicker.component';

import * as multiLangDate from './datepicker/multi-lang-date.md';
import * as appCustomToggleDatepicker from './datepicker/app-custom-toggle-datepicker.md';
import * as appDatepicker from './datepicker/app-datepicker.md';
import * as appDisabledDatepicker from './datepicker/app-disabled-datepicker.md';
import * as appMultiYearDatepicker from './datepicker/app-multi-year-datepicker.md';



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
    }))
    .addParameters({
        anyinfo: {
            markdown: appCustomToggleDatepicker
        }
    })
    .add('Custom toggle', () => ({
        template: `<app-custom-toggle-datepicker></app-custom-toggle-datepicker>`,
        moduleMetadata: {
            declarations: [AppCustomToggleDatepickerComponent],
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
    }))
    .addParameters({
        anyinfo: {
            markdown: appMultiYearDatepicker
        }
    })
    .add('Multi year', () => ({
        template: `<app-multi-year-datepicker></app-multi-year-datepicker>`,
        moduleMetadata: {
            declarations: [AppMultiYearDatepickerComponent],
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
    }))
    .addParameters({
        anyinfo: {
            markdown: appDisabledDatepicker
        }
    })
    .add('Disabled datepicker', () => ({
        template: `<app-disabled-datepicker></app-disabled-datepicker>`,
        moduleMetadata: {
            declarations: [AppDisabledDatepickerComponent],
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
