```js
@Component({
    selector: 'app-custom-toggle-datepicker',
    template: `
        <div class="example-viewport">
            <mc-form-field>
                <input mcInput [(ngModel)]="date" [mcDatepicker]="myDatepicker" />
                <mc-datepicker-toggle tabindex="7" mcSuffix [for]="myDatepicker">
                    <i mc-icon="mc-angle-down-M_16" mcDatepickerToggleIcon></i>
                </mc-datepicker-toggle>
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
export class AppCustomToggleDatepickerComponent {
    date;
}
```
