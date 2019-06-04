import {Component, Input, OnInit} from '@angular/core';
import { OPTIONS } from '../options';
import { merge, Observable, of } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';


@Component({
    selector: 'multiple-select-search-story',
    template: require('./multiple-select-search.component.html')
})
export class MultipleSelectSearchComponent implements OnInit {
    @Input()
    multipleSelectedWithSearch = ['Dzerzhinsk', 'Pskov'];
    multipleSearchCtrl: FormControl = new FormControl();
    filteredMultipleOptions: Observable<string[]>;

    private options: string[] = OPTIONS;

    ngOnInit(): void {
        this.filteredMultipleOptions = merge(
            of(OPTIONS),
            this.multipleSearchCtrl.valueChanges
                .pipe(map((value) => this.getFilteredOptions(value)))
        );
    }

    private getFilteredOptions(value): string[] {
        const searchFilter = (value && value.new) ? value.value : value;

        return searchFilter
            ? this.options.filter((option) =>
                option.toLowerCase().includes((searchFilter.toLowerCase())))
            : this.options;
    }
}
