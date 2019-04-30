import { Component, ElementRef, ViewChild } from '@angular/core';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { McAutocompleteSelectedEvent, McTagInputEvent, McTagList } from '@ptsecurity/mosaic';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'tags-autocomplete',
    templateUrl: './tags-autocomplete.component.html'
})
export class TagsAutocompleteComponent {

    tagCtrl = new FormControl();

    @ViewChild('autocompleteTagInput') autocompleteTagInput: ElementRef<HTMLInputElement>;
    @ViewChild('autocompleteTagList') autocompleteTagList: McTagList;

    autocompleteFilteredTagsByInput: string[] = [];

    autocompleteAllTags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9', 'tag10'];

    autocompleteSelectedTags = ['tag1'];

    autocompleteFilteredTags: any;

    ngOnInit() {
        this.autocompleteFilteredTags = merge(
            this.autocompleteTagList.tagChanges.asObservable()
                .pipe(map((selectedTags) => {
                    const values = selectedTags.map((tag) => tag.value);

                    return this.autocompleteAllTags.filter((tag) => !values.includes(tag));
                })),

            this.tagCtrl.valueChanges
                .pipe(map((value) => {
                    const typedText = (value && value.new) ? value.value : value;

                    this.autocompleteFilteredTagsByInput = typedText ?
                        this.filter(typedText) : this.autocompleteAllTags.slice();

                    return this.autocompleteFilteredTagsByInput.filter(
                        // @ts-ignore
                        (tag) => !this.autocompleteSelectedTags.includes(tag)
                    );
                }))
        );
    }

    onRemove(fruit: any): void {
        const index = this.autocompleteSelectedTags.indexOf(fruit);

        if (index >= 0) {
            this.autocompleteSelectedTags.splice(index, 1);
        }
    }

    onCreate(event: McTagInputEvent): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            this.autocompleteSelectedTags.push(value.trim());
        }

        if (input) {
            input.value = '';
        }
    }

    onSelect(event: McAutocompleteSelectedEvent): void {
        if (event.option.value.new) {
            this.autocompleteSelectedTags.push(event.option.value.value);
        } else {
            this.autocompleteSelectedTags.push(event.option.value);
        }
        this.autocompleteTagInput.nativeElement.value = '';
        this.tagCtrl.setValue(null);
    }

    private filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.autocompleteAllTags.filter((tag) => tag.toLowerCase().indexOf(filterValue) === 0);
    }
}
