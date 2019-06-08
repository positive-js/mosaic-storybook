import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';
import {McButtonModule, McIconModule, McLinkModule} from '@ptsecurity/mosaic';
import {Component, ViewEncapsulation} from '@angular/core';
import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@Component({
    selector: 'app',
    template: `
        <style>
            .mc-column-container {
                margin-left: 15px;
                margin-right: 15px;
            }

            .mc-alert {
                margin-bottom: 15px;
            }

            .alert-footer {
                margin-top: 8px;
            }
        </style>

        <h1>Alerts</h1>

        <div class="layout-row flex-100">
            <div class="flex-33 mc-column-container">
                <h3>Colors</h3>

                <div class="mc-alert mc-alert_error mc-alert_dismissible" [@hideShowAnimator]="isAlertShown(1)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    Alert text
                    <button class="mc-alert__close" (click)="hideAlert(1)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>
                <div class="mc-alert mc-alert_warning mc-alert_dismissible" [@hideShowAnimator]="isAlertShown(2)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    Alert text
                    <button class="mc-alert__close" (click)="hideAlert(2)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>
                <div class="mc-alert mc-alert_success mc-alert_dismissible" [@hideShowAnimator]="isAlertShown(3)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    Alert text
                    <button class="mc-alert__close" (click)="hideAlert(3)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>
                <div class="mc-alert mc-alert_info mc-alert_dismissible" [@hideShowAnimator]="isAlertShown(4)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    Alert text
                    <button class="mc-alert__close" (click)="hideAlert(4)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>
                <div class="mc-alert mc-alert_default mc-alert_dismissible" [@hideShowAnimator]="isAlertShown(5)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    Alert text
                    <button class="mc-alert__close" (click)="hideAlert(5)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>
            </div>
            <div class="flex-33 mc-column-container">
                <h3>Normal composition</h3>

                <div class="mc-alert mc-alert_error mc-alert_dismissible" [@hideShowAnimator]="isAlertShown(6)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    Alert text
                    <button class="mc-alert__close" (click)="hideAlert(6)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>

                <div class="mc-alert mc-alert_warning mc-alert_dismissible" [@hideShowAnimator]="isAlertShown(7)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    <div>
                        <header>Header</header>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <button class="mc-alert__close" (click)="hideAlert(7)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>

                <div class="mc-alert mc-alert_success mc-alert_dismissible" [@hideShowAnimator]="isAlertShown(8)">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <button class="mc-alert__close" (click)="hideAlert(8)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>


                <div class="mc-alert mc-alert_info" [@hideShowAnimator]="isAlertShown(9)">
                    <div>
                        <header>Header</header>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        <div class="alert-footer">
                            <button mc-button color="primary" (click)="hideAlert(9)">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-33 mc-column-container">
                <h3>Small composition</h3>

                <div class="mc-alert mc-alert_error mc-alert_dismissible mc-alert_small" [@hideShowAnimator]="isAlertShown(10)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    Alert text
                    <button class="mc-alert__close" (click)="hideAlert(10)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>

                <div class="mc-alert mc-alert_warning mc-alert_dismissible mc-alert_small" [@hideShowAnimator]="isAlertShown(11)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    <div>
                        <header>Header</header>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <button class="mc-alert__close" (click)="hideAlert(11)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>

                <div class="mc-alert mc-alert_success mc-alert_dismissible mc-alert_small" [@hideShowAnimator]="isAlertShown(12)">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <button class="mc-alert__close" (click)="hideAlert(12)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>

                <div class="mc-alert mc-alert_info mc-alert_small" [@hideShowAnimator]="isAlertShown(13)">
                    <div>
                        <header>Header</header>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        <div class="alert-footer">
                            <a class="mc-link mc-link_dashed" (click)="hideAlert(13)">
                                <span class="mc-link__text">Close</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h2>Long text</h2>

        <div class="layout-row flex-100">
            <div class="flex-50 mc-column-container">
                <h3>Normal composition</h3>

                <div class="mc-alert mc-alert_default mc-alert_dismissible" [@hideShowAnimator]="isAlertShown(14)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    <div>
                        <header>Header</header>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis risus ac varius ultricies. Aenean maximus ex at ornare tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sit amet ipsum id augue porta dignissim tristique at nibh. Nullam interdum libero in laoreet pretium. Maecenas et placerat sem. Donec fringilla viverra nunc in vestibulum. Pellentesque suscipit odio ut erat ullamcorper pellentesque eget ac elit. Quisque eleifend orci sit amet erat bibendum sollicitudin. Donec elementum facilisis dui, at volutpat purus. Aliquam posuere non lacus sollicitudin aliquam. Donec nec semper diam, eget imperdiet dui. Integer ornare quam magna, a pretium metus iaculis non. Ut fermentum risus vel sem accumsan, ac egestas nulla sollicitudin. Vivamus nec mi mauris.
                    </div>
                    <button class="mc-alert__close" (click)="hideAlert(14)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>
            </div>


            <div class="flex-50 mc-column-container">
                <h3>Small composition</h3>

                <div class="mc-alert mc-alert_default mc-alert_dismissible mc-alert_small" [@hideShowAnimator]="isAlertShown(15)">
                    <i class="mc mc-icon mc-info_16 mc-alert__icon"></i>
                    <div>
                        <header>Header</header>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis risus ac varius ultricies. Aenean maximus ex at ornare tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sit amet ipsum id augue porta dignissim tristique at nibh. Nullam interdum libero in laoreet pretium. Maecenas et placerat sem. Donec fringilla viverra nunc in vestibulum. Pellentesque suscipit odio ut erat ullamcorper pellentesque eget ac elit. Quisque eleifend orci sit amet erat bibendum sollicitudin. Donec elementum facilisis dui, at volutpat purus. Aliquam posuere non lacus sollicitudin aliquam. Donec nec semper diam, eget imperdiet dui. Integer ornare quam magna, a pretium metus iaculis non. Ut fermentum risus vel sem accumsan, ac egestas nulla sollicitudin. Vivamus nec mi mauris.
                    </div>
                    <button class="mc-alert__close" (click)="hideAlert(15)">
                        <i mc-icon="mc-close-M_16" color="second"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('hideShowAnimator', [
            state('true' , style({ opacity: 1, display: '' })),
            state('false', style({ opacity: 0, display: 'none' })),
            transition('false => true', animate('.5s')),
            transition('true => false', animate('.2s'))
        ])
    ]
})
export class DemoComponent {
    // tslint:disable-next-line:no-magic-numbers
    readonly shownAlerts: number[]  = Array.from(Array(16).keys());

    isAlertShown(id: number) {
        return this.shownAlerts.indexOf(id) !== -1;
    }

    hideAlert(id: number) {
        const index = this.shownAlerts.findIndex((alertId) => alertId === id);
        this.shownAlerts.splice(index, 1);
    }
}

storiesOf('Indicators|Alerts', module)
    .add('alerts', () => ({
        component: DemoComponent,
        props: {},
        moduleMetadata: {
            declarations: [DemoComponent],
            imports: [
                BrowserAnimationsModule,
                McIconModule,
                McButtonModule,
                McLinkModule
            ]
        }
    }));
