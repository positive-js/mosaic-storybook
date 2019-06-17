```js
@Component({
    selector: 'app-disabled-datepicker',
    template: `
        <div class="example-viewport">
            <label>Datepicker disabled</label>
            <mc-form-field>
                <input mcInput [mcDatepicker]="myDatepicker1" />
                <mc-datepicker-toggle mcSuffix [for]="myDatepicker1">
                    <i mc-icon="mc-angle-down-M_16" mcDatepickerToggleIcon></i>
                </mc-datepicker-toggle>
                <mc-datepicker disabled #myDatepicker1 startView="multi-year"></mc-datepicker>
            </mc-form-field>

            <br/>
            <br/>

            <label>Datepicker with disabled input</label>
            <mc-form-field>
                <input mcInput [mcDatepicker]="myDatepicker2" disabled/>
                <mc-datepicker-toggle mcSuffix [for]="myDatepicker2">
                    <i mc-icon="mc-angle-down-M_16" mcDatepickerToggleIcon></i>
                </mc-datepicker-toggle>
                <mc-datepicker #myDatepicker2></mc-datepicker>
            </mc-form-field>

            <br/>
            <br/>

            <label>Datepicker with readonly input</label>
            <mc-form-field>
                <input mcInput [mcDatepicker]="myDatepicker3" readonly/>
                <mc-datepicker-toggle mcSuffix [for]="myDatepicker3">
                    <i mc-icon="mc-angle-down-M_16" mcDatepickerToggleIcon></i>
                </mc-datepicker-toggle>
                <mc-datepicker #myDatepicker3></mc-datepicker>
            </mc-form-field>

            <br/>
            <br/>

            <label>Datepicker with some dates disabled</label>
            <mc-form-field>
                <input mcInput
                       [mcDatepicker]="myDatepicker4"
                       [mcDatepickerFilter]="myFilter"
                       [min]="minDate"
                       [max]="maxDate"/>
                <mc-datepicker-toggle mcSuffix [for]="myDatepicker4">
                    <i mc-icon="mc-angle-down-M_16" mcDatepickerToggleIcon></i>
                </mc-datepicker-toggle>
                <mc-datepicker #myDatepicker4></mc-datepicker>
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
export class AppDisabledDatepickerComponent {
    date = moment([2019, 0, 24]);
    minDate = moment([2015, 0, 1]);
    maxDate = moment([2020, 0, 1]);

    myFilter(date: Moment): boolean {
        const day = date.day();

        return day !== 0 && day !== 6;
    }
}
```
