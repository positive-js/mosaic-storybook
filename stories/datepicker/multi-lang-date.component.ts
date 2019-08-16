import { Component, OnInit } from '@angular/core';

import { MomentDateAdapter } from '@ptsecurity/mosaic-moment-adapter';
import { DateAdapter, MC_DATE_LOCALE } from '@ptsecurity/cdk/datetime';
import { McRadioChange } from '@ptsecurity/mosaic';


export enum Languages {
    en = 'en',
    de = 'de',
    fr = 'fr',
    ru = 'ru'
}

@Component({
    selector: 'app-multi-lang-date',
    template: `
        <div class="example-viewport layout-column">
            <mc-radio-group
                    class="example-radio-group"
                    (change)="useLanguage($event)">
                <mc-radio-button *ngFor="let language of languageList" 
                                 [value]="language"
                                 [checked]="language === 'en'">
                    {{ language }}
                </mc-radio-button>
            </mc-radio-group>
            <mc-form-field>
                <input mcInput [(ngModel)]="selectedDate"
                                [mcDatepicker]="picker">
                <mc-datepicker-toggle mcSuffix [for]="picker"></mc-datepicker-toggle>
                <mc-datepicker #picker></mc-datepicker>
            </mc-form-field>

            <div>
                <h3>Date</h3>
                <p>{{selectedDate}}</p>
            </div>
        </div>
    `,
    styles: [`
        .example-viewport {
            width: 400px;
            margin: 8px;
        }

        .example-radio-group {
            display: inline-flex;
            flex-direction: column;
            padding-bottom: 16px;
        }
    `],
    providers: [
        {provide: MC_DATE_LOCALE, useValue: 'ru'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MC_DATE_LOCALE]}
    ]
})
export class MultiLangDateComponent implements OnInit {
    selectedDate: Date = new Date();
    languageList: string[] = [];

    constructor(private dateAdapter: DateAdapter<any>) {}

    ngOnInit() {
        this.languageList = Object.keys(Languages).filter(String);
        this.dateAdapter.setLocale(this.languageList[0]);
    }

    useLanguage($event: McRadioChange): void {
        this.dateAdapter.setLocale($event.value);
    }
}
