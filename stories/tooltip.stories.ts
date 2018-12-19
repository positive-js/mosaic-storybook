import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';
import { McButtonModule, McToolTipModule, McTooltip } from '@ptsecurity/mosaic';


@Component({
    selector: 'app',
    template: `
        <section class="container flex-100 layout-row layout-align-center-center">
            <div class="flex layout-row layout-align-center-center">
                <div class="flex layout-column layout-align-center-center container-item">
                    <span class="mc-title">Focus</span>
                    <button class="mc-primary"
                            mc-button
                            color="primary"
                            mcTooltip
                            mcTitle="Удалить файл"
                            mcTrigger="focus"
                            mcPlacement="top">top
                    </button>
                    <button class="mc-primary"
                            mc-button
                            mcTooltip="Подсказка может занимать две и более строк"
                            mcTrigger="focus"
                            mcPlacement="right"
                            mcTooltipDisabled>disabled
                    </button>
                    <button class="mc-primary"
                            mc-button
                            mcTooltip="PDQL-запрос фильтра содержит ошибки"
                            mcTrigger="focus"
                            mcPlacement="left">left
                    </button>
                    <button class="mc-primary"
                            mc-button
                            mcTooltip="PDQL-запрос фильтра содержит ошибки. Uncaught SyntaxError: Unexpected string"
                            mcTrigger="focus"
                            mcPlacement="bottom">bottom
                    </button>
                </div>
            </div>
        </section>

    `,
    styles: [`
        .container {
            flex: 1 1 auto;
            height: 100%;
            width: 100%;
        }
        
        .container-item {
            height: 100%;
        }

        .mc-button {
            min-width: 85px;
            text-align: center;
            padding: 0;
            margin-right: 8px;
            margin-bottom: 8px !important;
        }

    `],
    encapsulation: ViewEncapsulation.None
})
export class TooltipDemoComponentFocus {}

@Component({
    selector: 'app',
    template: `
        <section class="container flex-100 layout-row layout-align-center-center">
            <div class="flex layout-row layout-align-center-center">
                <div class="flex layout-column layout-align-center-center container-item">
                    <span class="mc-title">Hover</span>
                    <button class="mc-primary"
                            mc-button
                            mcTooltip="Показать\\Скрыть"
                            mcPlacement="top">top
                    </button>
                    <button class="mc-primary"
                            mc-button
                            mcTooltip="Активировать записи"
                            mcPlacement="right">right
                    </button>
                    <button class="mc-primary"
                            mc-button
                            mcTooltip="PDQL-запрос фильтра содержит ошибки
                                испральве запрос"
                            mcPlacement="left">left
                    </button>
                    <button class="mc-primary"
                            mc-button
                            mcTooltip="Обновить"
                            mcPlacement="bottom">bottom
                    </button>
                </div>
            </div>
        </section>
        
    `,
    styles: [`
        .container {
            flex: 1 1 auto;
            height: 100%;
            width: 100%;
        }
        
        .container-item {
            height: 100%;
        }

        .mc-button {
            min-width: 85px;
            text-align: center;
            padding: 0;
            margin-right: 8px;
            margin-bottom: 8px !important;
        }

    `],
    encapsulation: ViewEncapsulation.None
})
export class TooltipDemoComponentHover {}

@Component({
    selector: 'app',
    template: `
        <section class="container flex-100 layout-row layout-align-center-center">
            <div class="flex layout-row layout-align-center-center">
                <div class="flex layout-column layout-align-center-center">
                    <div class="flex layout-padding-50">
                        <span> Mouse over to </span>
                        <button mc-button
                                (mouseenter)="tooltip.show()"
                                aria-label="Button that progamatically shows a tooltip on another button"
                                class="example-action-button">
                            show
                        </button>
                        <button mc-button
                                (mouseenter)="tooltip.hide()"
                                aria-label="Button that progamatically hides a tooltip on another button"
                                class="example-action-button">
                            hide
                        </button>
                    </div>

                    <button mc-button #tooltip="mcTooltip"
                            mcTooltip
                            (click)="toggleTooltip(tooltip)"
                            mcTitle="Info about the action"
                            mcTrigger="manual"
                            mcPlacement="bottom">
                        Click to toggle tooltip
                    </button>
                </div>
            </div>
        </section>

    `,
    styles: [`
        .container {
            flex: 1 1 auto;
            height: 100%;
            width: 100%;
        }
        
        .container-item {
            height: 100%;
        }

        .mc-button {
            min-width: 85px;
            text-align: center;
            padding: 0;
            margin-right: 8px;
            margin-bottom: 8px !important;
        }

    `],
    encapsulation: ViewEncapsulation.None
})
export class TooltipDemoComponentManualTrigger {
    @ViewChild('tooltip') tooltip: McTooltip;
    constructor(){}

    toggleTooltip(evt) {
        if (!this.tooltip.isTooltipOpen) {
            this.tooltip.show();
        } else {
            this.tooltip.hide();
        }
    }
}



storiesOf('Popups & Modals|Tooltip', module)
    .add('Tooltip on focus', () => ({
        component: TooltipDemoComponentFocus,
        moduleMetadata: {
            imports: [McToolTipModule, McButtonModule]
        }
    }))
    .add('Tooltip on hover', () => ({
        component: TooltipDemoComponentHover,
        moduleMetadata: {
            imports: [McToolTipModule, McButtonModule]
        }
    }))
    .add('Tooltip with manual trigger', () => ({
        component: TooltipDemoComponentManualTrigger,
        moduleMetadata: {
            imports: [McButtonModule, McToolTipModule]
        }
    }));
