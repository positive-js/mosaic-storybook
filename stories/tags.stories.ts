import { storiesOf } from '@storybook/angular';
import {
    McAutocompleteModule,
    McAutocompleteSelectedEvent,
    McFormFieldModule,
    McIconModule,
    McTagInputEvent,
    McTagsModule
} from '@ptsecurity/mosaic';
import { ReactiveFormsModule } from '@angular/forms';
import { merge, map } from 'rxjs';
import {TagsAutocompleteComponent} from "./tags-autocomplete/tags-autocomplete.component";


storiesOf('Indicators|Tags', module)
    .add('Simple Tags', () => ({
        template: `
        <div>
            <h4 class="mc-title">simple</h4>
            <br>
        
            <mc-tag>Normal <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag class="mc-hovered">Hovered <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag class="mc-focused">Focused <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag [disabled]="true">Disabled <i mc-icon="mc-close-S_16"></i></mc-tag>
        
            <br>
        
            <mc-tag color="primary">Normal <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="primary" class="mc-hovered">Hovered <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="primary" class="mc-focused">Focused <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="primary" [disabled]="true">Disabled <i mc-icon="mc-close-S_16"></i></mc-tag>
        
            <br>
        
            <mc-tag color="error">Normal <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="error" class="mc-hovered">Hovered <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="error" class="mc-focused">Focused <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="error" [disabled]="true">Disabled <i mc-icon="mc-close-S_16"></i></mc-tag>
        
            <br><br><br>
        
            <h4 class="mc-title">mono</h4>
            <mc-tag class="mc-tag_mono">Normal <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag class="mc-hovered mc-tag_mono">Hovered <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag class="mc-focused mc-tag_mono">Focused <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag [disabled]="true" class="mc-tag_mono">Disabled <i mc-icon="mc-close-S_16"></i></mc-tag>
        
            <br>
        
            <mc-tag color="primary" class="mc-tag_mono">Normal <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="primary" class="mc-tag_mono mc-hovered">Hovered <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="primary" class="mc-tag_mono mc-focused">Focused <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="primary" [disabled]="true" class="mc-tag_mono">Disabled <i mc-icon="mc-close-S_16"></i></mc-tag>
        
            <br>
        
            <mc-tag color="error" class="mc-tag_mono">Normal <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="error" class="mc-tag_mono mc-hovered">Hovered <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="error" class="mc-tag_mono mc-focused">Focused <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="error" [disabled]="true" class="mc-tag_mono">Disabled <i mc-icon="mc-close-S_16"></i></mc-tag>
        
            <br><br><br>
        
            <h4 class="mc-title">CAPS</h4>
            <mc-tag class="mc-tag_caps">Normal <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag class="mc-hovered mc-tag_caps">Hovered <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag class="mc-focused mc-tag_caps">Focused <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag [disabled]="true" class="mc-tag_caps">Disabled <i mc-icon="mc-close-S_16"></i></mc-tag>
        
            <br>
        
            <mc-tag color="primary" class="mc-tag_caps">Normal <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="primary" class="mc-hovered mc-tag_caps">Hovered <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="primary" class="mc-focused mc-tag_caps">Focused <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="primary" [disabled]="true" class="mc-tag_caps">Disabled <i mc-icon="mc-close-S_16"></i></mc-tag>
        
            <br>
        
            <mc-tag color="error" class="mc-tag_caps">Normal <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="error" class="mc-hovered mc-tag_caps">Hovered <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="error" class="mc-focused mc-tag_caps">Focused <i mc-icon="mc-close-S_16"></i></mc-tag>
            <mc-tag color="error" [disabled]="true" class="mc-tag_caps">Disabled <i mc-icon="mc-close-S_16"></i></mc-tag>        
        </div>
        `,
        props: {
            simpleTags: ['tag', 'tag1', 'tag2', 'tag3', 'tag4']
        },
        moduleMetadata: {
            imports: [
                McTagsModule,
                McIconModule
            ]
        }
    }))

    .add('Tags List', () => ({
        template: `
        <div>
            <mc-tag-list>
                <mc-tag *ngFor="let tag of simpleTags" [value]="tag" (removed)="onRemoveTag(tag)">
                    {{ tag }}
                    <i mc-icon="mc-close-S_16" mcTagRemove></i>
                </mc-tag>
            </mc-tag-list>
        </div>
        `,
        props: {
            simpleTags: ['tag', 'tag1', 'tag2', 'tag3', 'tag4'],
            onRemoveTag(tag) {
                const index = this.simpleTags.indexOf(tag);

                if (index >= 0) {
                    this.simpleTags.splice(index, 1);
                }
            }
        },
        moduleMetadata: {
            imports: [
                McTagsModule,
                McIconModule
            ]
        }
    }))

    .add('Input Tags', () => ({
        template: `
            <mc-form-field class="example-chip-list">
                <mc-tag-list #inputTagList>
                    <mc-tag *ngFor="let tag of inputTags" [value]="tag" (removed)="onRemoveTag(tag)">
                        {{ tag }}
                        <i mc-icon="mc-close-S_16" mcTagRemove></i>
                    </mc-tag>
                    <input placeholder="New tag..."
                           #inputTagInput
                           [formControl]="tagCtrl"
                           [mcTagInputFor]="inputTagList"
                           [mcTagInputSeparatorKeyCodes]="separatorKeysCodes"
                           (mcTagInputTokenEnd)="onCreate($event)">
                </mc-tag-list>
            </mc-form-field>
        `,
        props: {
            inputTags: ['tag', 'tag1', 'tag2', 'tag3', 'tag4'],
            onRemoveTag(tag) {
                const index = this.inputTags.indexOf(tag);

                if (index >= 0) {
                    this.inputTags.splice(index, 1);
                }
            },
            onCreate(event: McTagInputEvent) {
                const input = event.input;
                const value = event.value;

                if ((value || '').trim()) {
                    this.inputTags.push(value.trim());
                }

                if (input) {
                    input.value = '';
                }
            }
        },
        moduleMetadata: {
            imports: [
                McFormFieldModule,
                ReactiveFormsModule,
                McTagsModule,
                McIconModule
            ]
        }
    }))

    .add('Autocomplete Tags', () => ({
        component: TagsAutocompleteComponent,
        props: {
        },
        moduleMetadata: {
            imports: [
                McFormFieldModule,
                ReactiveFormsModule,
                McAutocompleteModule,
                McTagsModule,
                McIconModule
            ]
        }
    }));
