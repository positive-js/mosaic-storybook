import { storiesOf } from '@storybook/angular';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { McDropdownModule, McIconModule, McButtonModule } from '@ptsecurity/mosaic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


storiesOf('Form Controls|Dropdown', module)
    .addDecorator(withKnobs)
    .add('Dropdown', () => ({
        template: `
            <div>
                <span class="mc-button-group">
                    <button mc-button>dropdown</button>
            
                    <button mc-button [mcDropdownTriggerFor]="appDropdown">
                        <i mc-icon="mc-angle-down-L_16"></i>
                    </button>
                </span>
            
                <br>
            
                <button mc-button [mcDropdownTriggerFor]="appDropdown">
                    dropdown
                    <i mc-icon="mc-angle-down-L_16"></i>
                </button>
            
                <br>
                <br>
            
                <mc-dropdown #appDropdown="mcDropdown">
                    <button mc-dropdown-item>
                        Point 1
                        <div class="mc-dropdown__item-caption">Some info</div>
                    </button>
                    <button mc-dropdown-item>
                        <i mc-icon="mc-search_16"></i>
                        Very Long Point
                    </button>
                    <h5>Additional info</h5>
                    <button mc-dropdown-item disabled>Disabled</button>
                    <button mc-dropdown-item>Point 2</button>
                    <a href="https://google.com" class="mc-link mc-link_underlined" mc-dropdown-item>Link</a>
                    <button mc-dropdown-item>Point 3</button>
                </mc-dropdown>

                <br>
            
                <button mc-button [mcDropdownTriggerFor]="appDropdownLazy" [mcDropdownTriggerData]="{dynamicValue: dynamicValue}">
                    dropdown lazy
                    <i mc-icon="mc-angle-down-L_16"></i>
                </button>
            
                <mc-dropdown #appDropdownLazy="mcDropdown">
                    <ng-template mcDropdownContent  let-dynamicValue="dynamicValue">
                        <button mc-dropdown-item>
                            Point 1
                            <div class="mc-dropdown__item-caption">Some info</div>
                        </button>
                        <button mc-dropdown-item>Value: {{dynamicValue}}</button>
                    </ng-template>
                </mc-dropdown>
            </div>

        `,
        props: {
            disabled: boolean('disabled', false),
            dynamicValue: text('dynamicValue', 'test')
        },
        moduleMetadata: {
            imports: [
                McDropdownModule,
                McIconModule,
                McButtonModule,
                BrowserAnimationsModule
            ]
        }
    }));

