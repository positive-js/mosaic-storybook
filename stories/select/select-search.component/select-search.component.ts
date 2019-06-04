import { Component, OnInit } from '@angular/core';
import { OPTIONS } from '../options';
import { merge, Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';


@Component({
    selector: 'select-search-story',
    template: require('./select-search.component.html')
})
export class SelectSearchComponent implements OnInit {
    singleSelectedWithSearch = 'Moscow';

    searchCtrl: FormControl = new FormControl();
    filteredOptions: Observable<string[]>;

    private options: string[] = OPTIONS;

    ngOnInit(): void {
        this.filteredOptions = merge(
            of(OPTIONS),
            this.searchCtrl.valueChanges
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
