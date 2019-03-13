import { storiesOf } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';
import {
    McNavbarModule,
    McTabsModule
} from '@ptsecurity/mosaic';


storiesOf('Layout|Tabs', module)
    .add('Tab group', () => ({
        template: `
            <div [dir]="disabled ? 'rtl' : 'ltr'">
                <h2 class="mc-display-1">Tabs groups</h2>
                <p class="mc-body">Use them to create tabbable regions.</p>

                <div class="layout-row block">
                    <div class="flex block">
                        <h3 class="mc-headline">Default tabs</h3>
                        <mc-tab-group>
                            <mc-tab>
                                <ng-template mc-tab-label>Fact 1</ng-template>
                                Chuck Norris can hear sign language.
                            </mc-tab>
                            <mc-tab>
                                <ng-template mc-tab-label>Fact 2</ng-template>
                                Chuck Norris makes onions cry.
                            </mc-tab>
                            <mc-tab [disabled]="true">
                                <ng-template mc-tab-label>Fact 3</ng-template>
                                nothing
                            </mc-tab>
                        </mc-tab-group>
                    </div>
                    <div class="flex block">
                        <h3 class="mc-headline">Light tabs</h3>
                        <mc-tab-group mc-light-tabs>
                            <mc-tab label="Fact 4">
                                Chuck Norris counted to infinity. Twice.
                            </mc-tab>
                            <mc-tab label="Fact 5">
                                Chuck Norris can speak braille.
                            </mc-tab>
                            <mc-tab [disabled]="true" label="Fact 6">
                                nothing
                            </mc-tab>
                        </mc-tab-group>
                    </div>
                    <div class="flex block">
                        <h3 class="mc-headline">Stretch tabs</h3>
                        <mc-tab-group mc-stretch-tabs>
                            <mc-tab label="Fact 7">
                                Chuck Norris knows Victoria's secret.
                            </mc-tab>
                            <mc-tab label="Fact 7">
                                Chuck Norris can drown a fish.
                            </mc-tab>
                            <mc-tab label="Fact 7">
                                Chuck Norris narrates Morgan Freeman's life.
                            </mc-tab>
                        </mc-tab-group>
                    </div>
                </div>  

            </div>
        `,
        props: {
            disabled: boolean('RTL', false)

        },
        moduleMetadata: {
            imports: [McTabsModule]
        }
    }))


    .add('Tabs with options', () => ({
        template: `
            <div [dir]="disabled ? 'rtl' : 'ltr'">
                <h2 class="mc-display-1">Tabs with options</h2>
                <p class="mc-body">The following tabs has been generated from an array.</p>

                <div class="mc-body">
                <div class="mc-title">Options</div>
                    <ul>
                        <li>headerPosition: <b>below</b></li>
                        <li>animationDuration: <b>600</b></li>
                    </ul>
                </div>

                <mc-tab-group
                    [animationDuration]="'600ms'"
                    [headerPosition]="'below'"
                    [(selectedIndex)]="selectedIndex"
                    (focusChange)="handleFocus($event)"
                    (selectedTabChange)="handleSelection($event)">
                    <mc-tab *ngFor="let tab of tabs"
                        [label]="tab.label"
                        [disabled]="tab.disabled">
                        {{tab.content}}
                    </mc-tab>
                    
                </mc-tab-group>
            </div>`,
        props: {
            disabled: boolean('RTL', false),
            selectedIndex: 1,
            focusEvent: null,
            selectEvent: null,
            tabs: [
                { label: 'Tab 1', content: 'Content 1', disabled: false },
                { label: 'Tab 2', content: 'Content 2', disabled: false },
                { label: 'Tab 3 (disabled)', content: 'Content 3', disabled: true },
                { label: 'Tab 4', content: 'Content 4', disabled: false },
                { label: 'Tab 5', content: 'Content 5', disabled: false },
                { label: 'Tab 6', content: 'Content 6', disabled: false },
                { label: 'Tab 7', content: 'Content 7', disabled: false },
                { label: 'Tab 8', content: 'Content 8', disabled: false },
                { label: 'Tab 9', content: 'Content 9', disabled: false },
                { label: 'Tab 10', content: 'Content 10', disabled: false },
                { label: 'Tab 12', content: 'Content 12', disabled: false },
                { label: 'Tab 13', content: 'Content 13', disabled: false },
                { label: 'Tab 14', content: 'Content 14', disabled: false },
                { label: 'Tab 15', content: 'Content 15', disabled: false },
                { label: 'Tab 16', content: 'Content 16', disabled: false },
                { label: 'Tab 17', content: 'Content 17', disabled: false },
                { label: 'Tab 18', content: 'Content 18', disabled: false },
                { label: 'Tab 19', content: 'Content 19', disabled: false },
                { label: 'Tab 20', content: 'Content 20', disabled: false },
                { label: 'Tab 21', content: 'Content 21', disabled: false },
                { label: 'Tab 22', content: 'Content 22', disabled: false },
            ],
            handleFocus: function (event) {
                this.focusEvent = event;
            },
            handleSelection: function (event) {
                this.selectEvent = event;
            }
        },
        moduleMetadata: {
            imports: [McTabsModule, McNavbarModule]
        }
    }))

    .add('Tabs navigation', () => ({
        template: `
        <style>
            h2 {
                margin-top: 2rem;
            }
        </style>
        <div [dir]="disabled ? 'rtl' : 'ltr'">
            <h2 class="mc-display-1">Tabs navigation</h2>
            <p class="mc-body">Use them to create navigation panel.</p>
            <div class="layout-row block">
            <div class="flex block">
                    <h3 class="mc-headline">Active navbar</h3>
                    <nav mc-tab-nav-bar mc-light-tabs>
                        <a mc-tab-link
                            *ngFor="let link of links"
                            (click)="activeLink = link"
                            [active]="activeLink == link"> {{link}} </a>
                        <a mc-tab-link
                            (click)="activeLink = 1"
                            [active]="activeLink == 1">Link 1</a>
                        <a mc-tab-link
                            (click)="activeLink = 2"
                            [active]="activeLink == 2"
                            disabled>Link 2</a>
                        <a mc-tab-link
                            (click)="activeLink = 3"
                            [active]="activeLink == 3">Link 3</a>
                        <a mc-tab-link
                            (click)="activeLink = 4"
                            [active]="activeLink == 4">Link 4</a>
                    </nav>
                </div>
                <div class="flex block">
                    <h3 class="mc-headline">Right disabled navbar</h3>
                    <nav mc-tab-nav-bar mc-light-tabs mc-align-tabs-end>
                        <a mc-tab-link
                            disabled
                            *ngFor="let link of links"
                            (click)="activeLink = link"
                            [active]="activeLink == link"> {{link}} </a>
                        <a mc-tab-link
                            disabled
                            (click)="activeLink = 1"
                            [active]="activeLink == 1">Disabled Link</a>
                    </nav>
                </div>
              
            </div>  

        </div>        `,
        props: {
            disabled: boolean('RTL', false),
            links: ['First', 'Second', 'Third'],
            activeLink: 1,
        },
        moduleMetadata: {
            imports: [McTabsModule, McNavbarModule]
        }
    }));
